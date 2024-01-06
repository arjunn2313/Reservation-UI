import React, { useEffect, useState } from "react";
import "./hotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import Mail from "../../components/mail/Mail";
import Footer from "../../components/footer/Footer";
import { FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Hotel() {
   
  const reserVation = useSelector((state)=>state.search)
  console.log(reserVation)
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  console.log(id)
  const[slideNumber,setSlideNumber] = useState(0)
  const[open,setOpen] = useState(false)
  const {data,loading,error} = useFetch(`http://localhost:8080/hotels/find/${id}`)

  const MilliseconPerDay = 1000*60*60*24;
  const dayDifference = (date1,date2) =>{
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(timeDiff / MilliseconPerDay)
    return diffDays
  }

  const days = dayDifference(reserVation.date[0].endDate,reserVation.date[0].startDate)
  const price = days*data.cheapestPrice*reserVation.option.room

  const handleOpen = (i) =>{
    setSlideNumber(i)
      setOpen(true)
  }

  const handleMove = (direction) => {
      let newSlideNumber;

      if(direction ==="l"){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
      }else{
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
      }

      setSlideNumber(newSlideNumber)
  }
   return (
    <div>
      <Navbar />
      <Header type="list" />
     {loading ? "loading..." :
     <>
     <div className="hotelContainer">
        {open && <div className="slider ">
        <IoCloseCircleOutline className="close" onClick={()=>setOpen(false)}/>
        <FaRegArrowAltCircleLeft  className="arrow"
        onClick={()=>handleMove("l")}
        />
        <div className="sliderWraper">
          <img src={data.photos[slideNumber]} className="sliderImg"/>
        </div>
        <FaRegArrowAltCircleRight className="arrow"
        onClick={()=>handleMove("r")}
         />
        
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FaLocationDot />
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location - {data.distance}m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over ₹ {data.cheapestPrise} at this property and get a free airport
            taxi
          </span>
          <div className="hotelImages">
            {data.photos?.map((img,i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)}
                src={img} className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
             <h1>Perfect for a {days}-night stay!</h1>
             <span>
              Located in the real heart of krakow,this property has and
              excellent location score of 9.8!
             </span>
             <h2>
              <b>₹ {price}</b> ({days} nights)
             </h2>
             <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Mail/>
        <Footer/>
      </div></>}
    </div>
  );
}
