import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

export const ShopContext = createContext();

// creating a provide component
 const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('')
    const[showSearch, setShowSearch] = useState(false)
    const[cartItems, setCartItems] = useState({})
    const navigate = useNavigate()

    const addToCart = async (itemId, size) =>{
        // handle if size is not selected
        if(!size){
            toast.error('Select Product Size')
            return
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

    const value = {
        products, currency, delivery_fee, 
        search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount,updateQuantity,getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider;