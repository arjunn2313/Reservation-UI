import React from 'react'
import './featured.css'
import useFetch from '../../customHooks/useFetch'

export default function Featured() {
  const {data,loading,error} = useFetch("http://localhost:8080/hotels/countByCity?cities=Kochi,Munnar,Trivandrum")
  console.log(data)
  return (
    <div className='featured'>
        {loading ? "loading...":<><div  className='featuredItem'>
            <img src='https://cf.bstatic.com/xdata/images/xphoto/540x405/97479741.webp?k=07ff3f8a22486304aa110883657b6a169fcd4f3ffa7060236159c59181400499&o='
            />
      <div className='featuredTitles'>
        <h1>Kochi</h1>
        <h2>{data[0]} properties</h2>
      </div>
        </div>

        <div  className='featuredItem'>
            <img src='https://cf.bstatic.com/xdata/images/xphoto/540x405/120884290.webp?k=e7504fd306c3177ea4e43df0f4cb408e39504c037a16bc7fb727593d4da4baf6&o='
            className='featuredImg'
            />
      <div className='featuredTitles'>
        <h1>Munnar</h1>
        <h2>{data[1]} properties</h2>
      </div>
        </div>

        <div  className='featuredItem'>
            <img src='https://cf.bstatic.com/xdata/images/xphoto/540x405/92969520.webp?k=3b245a961750350d5f5b63c9c0f498d9ac7bdcd34a68fb161adb90381275b1ae&o=' 
            className='featuredImg'
            />
      <div className='featuredTitles'>
        <h1>Trivandrum</h1>
        <h2>{data[2]} properties</h2>
      </div>
        </div></>}
    </div>
  )
}
