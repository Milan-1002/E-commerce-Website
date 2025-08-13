import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Add = () => {

  const[image1,setImage1] = useState(false)
  const[image2,setImage2] = useState(false)
  const[image3,setImage3] = useState(false)
  const[image4,setImage4] = useState(false)

  const[name, setName] = useState("")
  const[description, setDescription] = useState("")
  const[price, setPrice] = useState("")
  const[Category, setCategory] = useState("Men")
  const[subCategory, setSubCategory] = useState("Topwear")
  const[bestseller, setBestseller] = useState(false)
  const[sizes, setSizes] = useState([])



  return (
    <form className="flex flex-col w-full gap-4">
      <div>
        <p className="mb-3 font-medium">Upload Image</p>

        {/* Upload tiles */}
        <div className="flex gap-2">
          {['image1','image2','image3','image4'].map((id) => (
            <label
              key={id}
              htmlFor={id}
              className="cursor-pointer inline-flex items-center justify-center w-24 h-24 rounded-lg border border-dashed border-gray-600 hover:border-gray-400 transition"
              title="Upload"
            >
              <img src={assets.upload_area} alt="" className="w-10 h-10 opacity-500" />
              {/* Hide the real input but keep it accessible */}
              <input
                id={id}
                name={id}
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => {
                  // optional: preview or validate here
                  // const file = e.target.files?.[0]
                }}
              />
            </label>
          ))}
        </div>
      </div>
      <div className='w-full'>
        <p>Product Name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p>Product description</p>
        <textarea className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Write content here' required/>
      </div>


      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2 '>Product Category</p>
          <select className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select >
        </div>

        <div>
          <p className='mb-2'>Sub Category</p>
          <select className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input className='w-full px-3 py-2 sm:w-[120px]' type='Number' placeholder='25' />
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input type='checkbox' id='bestseller' />
        <label className='cursor-pointer' htmlFor='bestseller'>Add to bestseller</label>
      </div>

      <button className='w-28 py-3 mt-4 bg-black text-white' type='submit'>ADD</button>

    </form>
  )
}

export default Add