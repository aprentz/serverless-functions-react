
import { useEffect, useState } from "react";
import axios from 'axios'

const url = 'https://serverless-functions1.netlify.app/api/2-basic-api'

const Basic = () => {
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
            <h2>Basic setup</h2>
            <div className="title-underline"></div>
         </div>
         <div className="products">
            {products.map((product) => {
               const { id, name, house, image, alternate_names = [] } = product
               return <article className='product' key={id}>
                  <h5 className='info'>{alternate_names[0] || name}</h5>
                  <img src={image} alt={name} />
                  <h5 className='info coloured-text' >{house}</h5>
               </article>
            })}
         </div>
      </section>
   )
}

export default Basic