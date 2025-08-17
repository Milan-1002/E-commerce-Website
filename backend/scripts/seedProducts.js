import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import productModel from '../models/productModel.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

// Connect to MongoDB
const connectDb = async () => {
    mongoose.connection.on('connected', () => {
        console.log('DB Connected');
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
};

// Upload image to Cloudinary
const uploadToCloudinary = async (imagePath) => {
    try {
        const result = await cloudinary.uploader.upload(imagePath, {
            resource_type: 'image'
        });
        return result.secure_url;
    } catch (error) {
        console.error(`Error uploading image ${imagePath}:`, error);
        return null;
    }
};

// Main seeding function
const seedProducts = async () => {
    try {
        // Connect to database
        await connectDb();
        
        // Read products data
        const productsPath = path.join(__dirname, '../data/products.json');
        const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
        
        console.log(`Found ${productsData.length} products to import...`);
        
        for (const product of productsData) {
            console.log(`Processing product: ${product.name}`);
            
            // Upload images to Cloudinary
            const imageUrls = [];
            for (const imagePath of product.images) {
                // Check if image file exists
                if (fs.existsSync(imagePath)) {
                    const imageUrl = await uploadToCloudinary(imagePath);
                    if (imageUrl) {
                        imageUrls.push(imageUrl);
                    }
                } else {
                    console.warn(`Image not found: ${imagePath}`);
                }
            }
            
            if (imageUrls.length === 0) {
                console.warn(`No valid images found for product: ${product.name}. Skipping...`);
                continue;
            }
            
            // Create product data
            const productData = {
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                subCategory: product.subCategory,
                sizes: product.sizes,
                bestSeller: product.bestseller || false,
                image: imageUrls,
                date: Date.now()
            };
            
            // Save to database
            const newProduct = new productModel(productData);
            await newProduct.save();
            
            console.log(`✓ Successfully imported: ${product.name}`);
        }
        
        console.log('🎉 All products imported successfully!');
        process.exit(0);
        
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
};

// Run the seeding
seedProducts();