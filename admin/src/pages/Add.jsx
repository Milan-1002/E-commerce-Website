import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'


const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    try {
      const formData = new FormData()

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}})
      
      if(response.data.success){
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        
      }
      else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      

      
    }
  }



  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full gap-4">
      <div>
        <p className="mb-3 font-medium">Upload Image</p>

        {/* Upload tiles */}
        <div className="flex gap-2">
          {['image1', 'image2', 'image3', 'image4'].map((id) => (
            <label
              key={id}
              htmlFor={id}
              className="cursor-pointer inline-flex items-center justify-center w-24 h-24 rounded-lg border border-dashed border-gray-600 hover:border-gray-400 transition"
              title="Upload"
            >
              <img src={
    id === 'image1'
      ? (!image1 ? assets.upload_area : URL.createObjectURL(image1))
      : id === 'image2'
      ? (!image2 ? assets.upload_area : URL.createObjectURL(image2))
      : id === 'image3'
      ? (!image3 ? assets.upload_area : URL.createObjectURL(image3))
      : (!image4 ? assets.upload_area : URL.createObjectURL(image4))
  } alt="" className="w-10 h-10 opacity-500" />
              {/* Hide the real input but keep it accessible */}
              <input
                id={id}
                name={id}
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (id === 'image1') setImage1(file);
                  if (id === 'image2') setImage2(file);
                  if (id === 'image3') setImage3(file);
                  if (id === 'image4') setImage4(file);
                }}
              />
            </label>
          ))}
        </div>
      </div>
      <div className='w-full'>
        <p>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required />
      </div>

      <div className='w-full'>
        <p>Product description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Write content here' required />
      </div>


      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2 '>Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)}  className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select >
        </div>

        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)}  className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type='Number' placeholder='25' />
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={()=>setSizes(prev=> prev.includes('S')? prev.filter(item => item!== 'S'): [...prev,'S'])}>
            <p className={`${sizes.includes('S')? "bg-pink-100": "bg-slate-200"} px-3 py-1 cursor-pointer border-dashed`}>S</p>
          </div>
          <div onClick={()=>setSizes(prev=> prev.includes('M')? prev.filter(item => item!== 'M'): [...prev,'M'])}>
            <p className={`${sizes.includes('M')? "bg-pink-100": "bg-slate-200"} px-3 py-1 cursor-pointer border-dashed`}>M</p>
          </div>
          <div onClick={()=>setSizes(prev=> prev.includes('XL')? prev.filter(item => item!== 'XL'): [...prev,'XL'])}>
            <p className={`${sizes.includes('XL')? "bg-pink-100": "bg-slate-200"} px-3 py-1 cursor-pointer border-dashed`}>XL</p>
          </div>
          <div onClick={()=>setSizes(prev=> prev.includes('XXL')? prev.filter(item => item!== 'XXL'): [...prev,'XXL'])}>
            <p className={`${sizes.includes('XXL')? "bg-pink-100": "bg-slate-200"} px-3 py-1 cursor-pointer border-dashed`}>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setBestseller(prev => !prev)} checked={bestseller} type='checkbox' id='bestseller' />
        <label className='cursor-pointer' htmlFor='bestseller'>Add to bestseller</label>
      </div>

      <button className='w-28 py-3 mt-4 bg-black text-white' type='submit'>ADD</button>

    </form>
  )
}

export default Add