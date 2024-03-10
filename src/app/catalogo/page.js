'use client'
import "/src/app/globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import {FaStar} from    "react-icons/fa"





export default function CatalogoPage(){
    const[shows, setShows] = useState([]);

      const getShows = async ()=> {
        try{
          const response = await axios.get("https://api.tvmaze.com/shows");
          const data = response.data; 
          setShows(data);
        }
        catch(error){
          console.log(error);
        }
    };
    useEffect(()=>{
      getShows();
    },  []);

    

    return(
    <main>
       <h1 className="text-white text-center font-bold text-2xl p-3" >CATÁLOGO DE SÉRIES</h1>
       <h2 className="text-white text-center font-bold text-2xl p-3" >PESQUISE POR SUA SÉRIE</h2>

          {shows.length=== 0 ?<p>Carregando...</p> :(
            shows.map((show) =>(
                <div key={show.id} className="container">
                <div className="show-container">
                  <img className="" src={show.image.original} alt={show.name}/>
                  <h2 className=" title text-3xl">{show.name}</h2>
                  <p className="text-2xl"><FaStar/>{show.rating.average}</p>
                  <Link href={`/show/${show.id}`} className="SaibaMais">Saiba mais</Link>
                  <h2 className="text-2xl"><div dangerouslySetInnerHTML={{ __html: show.summary }}></div></h2>
                </div>
              </div>
            
            ))
          )}
       
    </main>


    
    )

}