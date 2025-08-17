# Bulk Product Import Instructions

This guide will help you bulk import your products instead of adding them one by one through the admin panel.

## Setup Steps

### 1. Prepare Your Product Images
- Copy all your product images to a folder (e.g., `backend/assets/products/`)
- Make sure images are in supported formats (PNG, JPG, JPEG, WebP)

### 2. Edit the Products Data File
- Open `backend/data/products.json`
- Replace the sample data with your actual products
- For each product, specify:
  ```json
  {
    "name": "Product Name",
    "description": "Product description",
    "price": 25,
    "category": "Men|Women|Kids",
    "subCategory": "Topwear|Bottomwear|Winterwear",
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "bestseller": true,
    "images": [
      "backend/assets/products/product1_img1.png",
      "backend/assets/products/product1_img2.png"
    ]
  }
  ```

### 3. Update Image Paths
- In the `images` array, provide the full path to each image file
- You can have 1-4 images per product
- Example: `"backend/assets/products/shirt_front.png"`

### 4. Run the Import Script
```bash
cd backend
npm run seed
```

## Example Products JSON Structure

```json
[
  {
    "name": "Classic White T-Shirt",
    "description": "100% cotton classic white t-shirt",
    "price": 19.99,
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": ["S", "M", "L", "XL"],
    "bestseller": true,
    "images": [
      "backend/assets/products/white_tshirt_front.png",
      "backend/assets/products/white_tshirt_back.png"
    ]
  },
  {
    "name": "Summer Dress",
    "description": "Light and comfortable summer dress",
    "price": 45.00,
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": ["S", "M", "L"],
    "bestseller": false,
    "images": [
      "backend/assets/products/summer_dress_1.png",
      "backend/assets/products/summer_dress_2.png"
    ]
  }
]
```

## What the Script Does

1. **Reads** your products data from `backend/data/products.json`
2. **Uploads** each image to Cloudinary (your existing image hosting service)
3. **Creates** product records in your MongoDB database
4. **Reports** progress and any errors

## Important Notes

- Make sure your backend `.env` file has the correct database and Cloudinary credentials
- The script will skip products if their images are not found
- Each product must have at least one valid image
- The script will not create duplicate products (run it only once per dataset)

## Troubleshooting

- **Images not found**: Check that image paths in JSON are correct
- **Database connection error**: Verify your MongoDB URI in `.env`
- **Cloudinary errors**: Check your Cloudinary credentials in `.env`

## After Import

Once the import is complete, you can:
- View your products in the admin panel
- See them on your frontend
- Edit individual products through the admin interface if needed