import React, { useEffect, useState } from "react";
import "./propertyList.css";
import useFetch from "../../customHooks/useFetch";
import axios from "axios";

export default function PropertyList() {
 
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    axios.get("http://localhost:8080/hotels/countByType").then((res)=>{
      console.log(res.data)
      setData(res.data)
      setLoading(false)
    })
  },[])
 
  const images = [
    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    "https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
  ];
  return (
    <div className="pList">
      {loading ?  
        "loading..."
        :  
        <>
         {data.map((itm,i) => (
             <div className="pListItem" key={i}>
             <img src={images[i]} className="pListImg" />
             <div className="pListTitles">
               <h1>{itm.type}</h1>
               <h2>{itm.count} {itm.type}</h2>
             </div>
           </div>
         ))}
        </>
      }
    </div>
  
     
  );
}
