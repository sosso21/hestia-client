

import { useEffect, useState } from "react";
import fr from "../../store/fr";
import {data} from "../../store/data";
import { useWindowWidthAndHeight } from "../../plugins/useWindowWidthAndHeight";
import ItemBoxAgency from "../itemBox/ItemBoxAgency";
import FlexList from "../flexList"
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';


const Second =({elRef})=>{ 

  const [width, height] = useWindowWidthAndHeight();
    const txt = fr.home.second
const [dataAgency, setDataAgency] = useState([])


    useEffect(() => {
        fetch(data.urlServer+"/api/agency/find/0-20")
        .then(res => res.json() )
        .then((res)=>{
            setDataAgency(res)

        } )
    }, [])

    return(
        <>
        
        <section  className="h-100 w-100">
<h3 className="text-center mx-auto my-4 fw-lighter">{(txt.OurAgency).toUpperCase()}: </h3>
        <Slide slidesToShow={width/450} easing="ease"> 
        {[...dataAgency].map(item=> <ItemBoxAgency item={item} />  )}
        </Slide>
        </section>
        <section className="section-flex">
            <div  ref={elRef} className="img-section img-section-1">
            </div>
            <article className="section-flex-item">
                <h3  className="fw-lighter">{txt.title} </h3>
                <ul  className="flex-list">
                {(txt.items).map((i,k)=><li  key={k}>
                    <h4 className="fw-lighter"> {i.title} </h4>
                    <p>{i.text} </p>
                    </li>) } 
                </ul>

            </article>
        </section>
        <section className="section-flex">
           
            <article className="section-flex-item"> 
            <h3>{txt.scpiResumeTitle}</h3>
            <strong>{txt.scpiResumeSemiTitle} </strong>
            <p>{txt.scpiResumeSemiDescription}</p>
            
            <a href="/scpi" title="scpi" className=" my-auto mx-4 btn btn-lg btn-hermes">{txt.scpiResumeSemiLink} </a>
           
            </article>
            <div  className="img-section img-section-2">
            </div>
        </section>

        <section className="text-center px-4">
            <h3 className="fw-lighter ">{txt.adventage.title} </h3>
        <p>{txt.adventage.description} </p>
        <FlexList data={txt.adventage.item}/> 

        </section>
        
        
        </>

    )
}

export default Second