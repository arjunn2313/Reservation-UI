import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './list.css'
import { useLocation } from 'react-router-dom'
import {format} from "date-fns"
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../customHooks/useFetch'
import axios from 'axios'
 
 

export default function List() {

  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [openDate,setOpenDate] = useState(false)
  const [option,setOption] = useState(location.state.option)
  const [min,setMin] = useState(undefined)
  const [max,setMax] = useState(undefined)
 

  const {data,loading,error,reFetch} = useFetch(`http://localhost:8080/hotels?city=${destination}&min=${min || 0}&max=${max || 5000}`)

const handleClick = () =>{
reFetch()
}
  console.log(data)
  return (
    <>
    <Navbar/>
    <Header type="list"/>
    <div className='listContainer'>
      <div className='listWrapper'>
        <div className='listSearch'>
        <h1 className='lsTitle'>Search</h1>
        <div className='listItem'>
          <label>
            Destination
          </label>
          <input type='text' 
          placeholder={destination}
          />
        </div>

        <div className='listItem'>
          <label>
             Check-in Date
          </label>
          <span onClick={()=>setOpenDate(!openDate)}>
          {`${format(date[0].startDate,"MM/dd/yyyy")} to 
            ${format(date[0].endDate,"MM/dd/yyyy")}`}
            </span>
           {openDate && <DateRange
            onChange={(item)=>setDate[item.selection]}
            minDate={new Date()}
            ranges={date}
            />}
        </div>

      <div className='lsItem'>
          <label>Options</label>
          <div className='lsOption'> 
          <div className='lsOptionItem'>
            <span className='lsOptionText'>Min price <small>per night</small></span>
            <input type='number' onChange={(e)=>setMin(e.target.value)}
            className='lsOptionInput'/>
          </div>

          <div className='lsOptionItem'>
            <span className='lsOptionText'>Max price <small>per night</small></span>
            <input type='number' onChange={(e)=>setMax(e.target.value)}
             className='lsOptionInput'/>
          </div>

          <div className='lsOptionItem'>
            <span className='lsOptionText'>Adult</span>
            <input type='number' min={1} className='lsOptionInput' placeholder={option.adult}/>
          </div>

          <div className='lsOptionItem'>
            <span className='lsOptionText'>Children</span>
            <input type='number' min={0} className='lsOptionInput' placeholder={option.children}/>
          </div>

           <div className='lsOptionItem'>
            <span className='lsOptionText'>Room</span>
            <input type='number' min={1} className='lsOptionInput' placeholder={option.room}/>
          </div>
      </div>
 </div>
 <button onClick={handleClick}>Search</button>

        </div>
        <div className='listResult'>
          {loading ? "loading..." :
          <>  
          {data.map((item)=>(
              <SearchItem item={item} key={item._id} />
             
          ))}
         
          </>

          }
           
            
       </div>
      </div>
    </div>
    </>
  )
}
