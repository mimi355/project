import React,{useState,useEffect} from 'react'
import { productDetails, updateProdut } from '../actions/productAction';
import{useSelector,useDispatch} from "react-redux";
import{Link } from 'react-router-dom';
import { PRODUCT_UPDATE_RESET } from '../types/productType';
import Axios from 'axios';




function ProductUpdate(props) {
const dispatch =useDispatch()
const[name,setName]=useState("")
const[price,setPrice]=useState("")
const[image,setImage]=useState("")
const[stock,setStock]=useState("")
const[description,setDescription]=useState("")
const[category,setCategory]=useState("")
const [rating,setRating] = useState("")
const[uploading,setUploading]=useState(false)

const productId=props.match.params.id

const detailsProduct= useSelector(state=>state.detailsProduct)  
const{product} = detailsProduct

const productUpdate=useSelector(state=>state.productUpdate)
const{success:successUpdate}=productUpdate


useEffect(()=>{
if(successUpdate){
    dispatch({type:PRODUCT_UPDATE_RESET})
    props.history.push("/productlist")
}
else{
    if(!product.name || product._id !==productId){
        dispatch(productDetails(productId))
    }
    else{
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setCategory(product.category)
        setStock(product.stock)
        setDescription(product.description)
        setRating(product.rating)
    }
}

},[dispatch,props.history,product,productId,successUpdate])


const handleSubmit=(e)=>{
    e.preventDefault()
dispatch(updateProdut({
    _id:productId,
    name,
    price,
    description,
    stock,
    image,
    category,
    rating
}))
}

const uploadFileHandler=async(e)=>{
const file = e.target.files[0]
const formData = new FormData()
formData.append('image',file)
setUploading(true)
try{
const config ={
    headers:{
        'Content-Type':'multipart/form-data'
    }
}

const{data} = await Axios.post('/api/upload',formData,config)
setImage(data)

setUploading(false)

}

catch(error){

console.log(error)
setUploading(false)
}

}

    return (
        <div>
            <Link to="/productlist" >Go Back</Link>
     <form className="container" onSubmit={handleSubmit}>
        <div>
          <h1>Edit Product {productId}</h1>
        </div>
        
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter  Product Image Url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
           
            <div>
              <label htmlFor="stock"> Stock</label>
              <input
                id="stock"
                type="text"
                placeholder="Enter Number of Product In Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="rating"> Rate</label>
              <input
                id="rating"
                type="text"
                placeholder="Product Rate"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              ></input>
            </div>


            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="secondary" type="submit">
           Update
              </button>
            </div>
        
      </form>
        </div>
    )
}

export default ProductUpdate
