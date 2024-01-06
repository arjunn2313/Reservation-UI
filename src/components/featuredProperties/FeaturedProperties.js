import React from 'react'
import './featuredProperties.css'
import useFetch from '../../customHooks/useFetch'

  const FeaturedProperties = ()=> {
  const { data, loading, error } = useFetch("http://localhost:8080/hotels?featured=true&limit=4")
    console.log(data)
  return (
    <div className='featuredProp'>
       {loading ? "loading..." : <>
      {data.map((itm,i)=>(
        <div className='featuredPropList' key={i}>
        <img src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o='
         className='featuredPropImg'
        />
        <span className='featuredPropName'>{itm.name}</span>
        <span className='featuredPropCity'>{itm.city}</span>
        <span className='featuredPropPrice'>Starting from ₹ {itm.cheapestPrice}</span>
       {itm.rating && <div className='featuredPropRating'> 
        <button>8.9</button>
        <span>Excellent</span>
        </div>}
        </div>
      ))} </>}
     </div>
  )
}

export default FeaturedProperties
