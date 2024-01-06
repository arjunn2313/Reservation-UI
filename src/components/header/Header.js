import React, { useState } from "react";
import "./header.css";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaPerson } from "react-icons/fa6";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";
 

export default function Header({type}) {
  const[destination,setDestination] = useState("")
    const[openDate,setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const[openOption,setOpenOption] = useState(false)
    const[option,setOption] = useState({
        adult : 1,
        children : 0,
        room:1
    })

    const navigate = useNavigate()

    const handleOption = (name,operation) =>{
        setOption((prev) => {
            return{
                ...prev,
                [name] : operation === "i" ? option[name] + 1 : option[name] - 1
            }
        })
    }

    // const handleSearch = () => {
    //    dispatch(newSearch({city:destination,date,option}))
    //     navigate('/hotels',{state:{destination,date,option}})
    // }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer" }>
        <div className="headerList">
          <div className="headerListItem active">
            <MdHotel /> 
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <FaPlaneDeparture />
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <FaCar />
            <span>Car rentals</span>
          </div>

          <div className="headerListItem">
            <RiMotorbikeFill />
            <span>Bike rentals</span>
          </div>
        </div>
       { type !== "list" &&
       <>
       <h1 className="headerTitle">A lifetime of discounts? Its's Genius.</h1>
        <p  className="headerDesc">
            Get rewarded for your travels - unlock instant savings of 10% or  more
            with a free ArjBooking account
        </p>
        <button className="headerBtn">Sign in / Register</button>

        <div className="headerSearch">
            <div className="headerSearchItem">
            <MdHotel className="headerIcon" /> 
            <input type="text" placeholder="Where are you going?"
            className="headerSearchInput"
            onChange={(e)=>setDestination(e.target.value)}
            />
            </div>

            <div className="headerSearchItem">
            <SlCalender className="headerIcon" /> 
            <span className="headerTextSearch"
            onClick={()=>setOpenDate(!openDate)}
            >{`${format(date[0].startDate,"MM/dd/yyyy")} to 
            ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
           {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                  className="date"
                />}
            </div>

            <div className="headerSearchItem">
            <FaPerson className="headerIcon" /> 
            <span className="headerTextSearch"
            onClick={()=>setOpenOption(!openOption)}
            >{`${option.adult} adult - 
            ${option.children} children - 
            ${option.room} room 
            `}</span>

            {/* Options */}
           { openOption && <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton"
                     disabled = {option.adult <= 1}
                    onClick={()=>handleOption("adult","d")}
                    >-</button>
                    <span className="optionCounterNumber">{option.adult}</span>
                    <button className="optionCounterButton"
                     onClick={()=>handleOption("adult","i")}
                    >+</button>
                    </div>
                </div>    

               <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton"
                    disabled = {option.children <= 0}
                     onClick={()=>handleOption("children","d")}
                    >-</button>
                    <span className="optionCounterNumber">{option.children}</span>
                    <button className="optionCounterButton"
                     onClick={()=>handleOption("children","i")}
                    >+</button>
                    </div>
                </div>    

                <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton"
                    disabled = {option.room <= 1}
                     onClick={()=>handleOption("room","d")}
                    >-</button>
                    <span className="optionCounterNumber">{option.room}</span>
                    <button className="optionCounterButton"
                     onClick={()=>handleOption("room","i")}
                    >+</button>
                    </div>
                </div>    
            </div>}
            </div>

            <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
            </div>
        </div></>}
      </div>
    </div>
  );
}
