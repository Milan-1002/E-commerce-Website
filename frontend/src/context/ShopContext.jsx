import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

// creating a provide component
 const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('')
    const[showSearch, setShowSearch] = useState(false)
    const[cartItems, setCartItems] = useState({})
    const[products, setProducts] = useState([])
    const[token, setToken] = useState('')
    const navigate = useNavigate()

    const fetchCart = async (tok = token) => {
        if(!tok) return;
        try {
            const { data } = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token: tok } });
            if (data.success && data.cartData) {
                setCartItems(data.cartData);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const addToCart = async (itemId, size) =>{
        // handle if size is not selected
        if(!size){
            toast.error('Select Product Size')
            return
        }

        if(!token){
            // Not logged in => DB won't update; only local state will change
            // You can navigate to login if desired
            toast.info('Please log in to sync your cart');
        }

        let cartData = structuredClone(cartItems)

        //If item exist in cart
        if(cartData[itemId]){
            //If size exist for the item
            if(cartData[itemId][size]){
                //increment quantity in the cart by 1
                cartData[itemId][size] += 1
            }
            // if size does not exit add new size with quantity 1
            else{
                cartData[itemId][size] = 1
            }
        }
        else{
            //create new item entry
            cartData[itemId] = {}
            // set initial quantity for the size
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)

        if(token){
            try {
                await axios.post(backendUrl +'/api/cart/add',{itemId,size}, {headers:{token}})
            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
                
            }
        }
        
        
    }

    const getCartCount = () =>{
        let totalCount = 0
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item]

                    }
                }catch(error){

                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId, size, quantity) =>{
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

        if(token){
            try{
                await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
            }catch(error){
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const getCartAmount = () =>{
        let totalAmount = 0
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items)
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                }
                catch(error){}
            }
        }
        return totalAmount
    }


    // this is when we have to display a product from the database. it is doing the API call to the backend list to show all the products from the database
    // since I have only two products in the data base for now. so, I am importing products from the assets directly here
const getProductsData = async () => {
  try {
    const response = await axios.get(backendUrl + '/api/product/list');
    //console.log(response.data);
    
    if(response.data.success){
        setProducts(response.data.products)
    }else{
        toast.error(response.data.message)

    }
     
  }
  catch(error){
    console.log(error)
    toast.error(error.message)

  }
};

useEffect(()=>{
    getProductsData()
},[])

useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if(savedToken){
        setToken(savedToken);
        fetchCart(savedToken);
    }
}, []);

    const value = {
        products, currency, delivery_fee, 
        search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount,updateQuantity,getCartAmount, navigate, backendUrl, fetchCart,
        token, setToken, setCartItems
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider;