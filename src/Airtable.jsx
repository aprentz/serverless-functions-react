import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const url = '/api/products'

const Airtable = () => {
   const [products, setProducts] = useState([])

   const fetchData = async () => {
      try {
         const { data } = await axios.get(url)
         setProducts(data)
      } catch (error) {

      }
   }

   useEffect(() => {
      fetchData()
   }, [])

   return (
      <section className="section section-center">
         <div className="title">
            <h2>Airtable</h2>
            <div className="title-underline"></div>
         </div>
         <div className="products">
            {products.map((product) => {
               const { id, name, url, price } = product
               return (
                  <Link to={`/${id}`} className="product" key={id}>
                     <h5 className='info'>{name}</h5>
                     <img src={url} alt={name} />
                     <h5 className='info coloured-text'>${price}</h5>
                  </Link>
               )
            })}
         </div>
      </section>
   )
}

export default Airtable