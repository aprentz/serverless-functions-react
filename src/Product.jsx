import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const url = '/api/products'

const Product = () => {
   const [loading, setLoading] = useState(true)
   const [product, setProduct] = useState([])
   const { productID } = useParams()

   const fetchData = async () => {
      try {
         const { data } = await axios.get(`${url}?id=${productID}`)
         setProduct(data)
      } catch (error) {

      }
      setLoading(false)
   }

   useEffect(() => {
      fetchData()
   }, [])

   if (loading) {
      return (
         <section className="section section-center">
            <h2>Loading...</h2>
         </section>
      )
   }
   const {fields} = product
   const { name, descrip, price, image } = fields

   return (
      <section className="section section-center">
         <Link to="/" className="link">
            back home
         </Link>
         <div>
            <div className="title">
               <h2>{name}</h2>
               <div className="title-underline"></div>
            </div>
            <article className='single-product'>
               <img className="single-product-img" src={image[0].url} alt={name} />
            </article>
            <div>
               <h5>{name}</h5>
               <h5 className="price coloured-text">${price}</h5>
               <p>{descrip}</p>
            </div>
         </div>
      </section>
   )
}

export default Product