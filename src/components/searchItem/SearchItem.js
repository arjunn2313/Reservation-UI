import React from 'react'
import './searchItem.css'
import { Link } from 'react-router-dom'
 
export default function SearchItem({item}) {
  return (
    <div className='searchItem'>
        <img src={item.photos}
         className='SiImg' />

         <div className='siDesc'>
            <h1 className='siTitle'>{item.name}</h1>
            <span className='siDistance'>{item.distance} km from center</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>
            Super Deluxe Double or Twin Room
            </span>
            <span className='siFeatures'>Multiple bed types</span>
            <span className='siCancelOp'>Free cancellation</span>
            <span className='siCancleOpSubtitle'>
                You can cancel later, so kock in the great price today!
            </span>
         </div>
         <div className='siDetails'>
          {item.rating &&
           <div className='siRating'>
           <span>Excellent</span>
           <button>8.9</button>
       </div>
          }
           
            <div className='siDetailTexts'>
                <span className='siPrice'>₹ {item.cheapestPrice}</span>
                <span className='siTaxOp'>Includes taxes and fees</span>
                <Link to={`/hotels/${item._id}`}>
                <button className='siCheckButton'>See availability</button>
                </Link>
               
            </div>
          </div>
    </div>
  )
}
