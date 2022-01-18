import { useState,useEffect, useRef } from "react";
import Footer from "../../components/footer";
import useOnScreen from "../../plugins/useOnScreen"
import Header from "../../components/header/index"
import fr from "../../store/fr";
import {data} from "../../store/data";
import ItemBoxAgency from "../../components/itemBox/ItemBoxAgency"
import  "../../styles/agencyNScpi.css"


const Agency = () => {
const txt = fr.AgencysPage
const [Agencys, setAgencys] = useState([])
const [request, setRequest] = useState({limit:20 , start :0 ,  block :false})
const spiner =useRef()
const isVisible = useOnScreen(spiner)
 
const getItems = ()=>{
  
  fetch(`${data.urlServer}/api/agency/find/${request.start}-${request.limit}`)
  .then(res => res.json() )
  .then((res)=>{
    setRequest({ ...request, start:request.start+request.limit,block: !([...res].length == request.limit )})
    
      setAgencys([...Agencys,...res])
    } )

}


useEffect(() => {
  (!!isVisible  && !request.block && request.start < 50 ) && getItems()
  

}, [isVisible])


  return (
    <>
    <Header/>
    <main className="w-100 h-100">
      <h1 className=" my-4 py-4 fw-lighter text-center w-100">{(txt.title).toUpperCase()} </h1>
 

<section className="flex-section-items">
  {[...Agencys].map((i)=> <ItemBoxAgency item={i}/> ) }
</section>
<span className=' w-100 d-flex justify-content-center'>
  
{!!request.block || <i ref={spiner} className="my-4 spinner-border" ></i>}
</span>
    </main>
    <Footer/>
    </>
  );
};

export default Agency;
