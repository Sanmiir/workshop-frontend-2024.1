'use client'

import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      try {
        const response = await axios.get("https://api.tvmaze.com/shows");
        const data = response.data.slice(0,5);
        setShows(data);
      } catch (error) {
        console.log(error);
      }
    };
    getShows();
  }, []);

  return (
    <main className="items-center justify-between p-24 bg-black">
      <div>
        <h1 className="text-white text-center font-bold text-2xl p-3">Bem vindo ao site de catálogo de Séries da Netflix!!</h1>
        <h2 className="text-white text-center font-bold text-2xl">Aqui você encontrará todo o catálogo de séries dísponivel na Netflix, assim como a sinopse, avaliações e muito mais!!</h2>
      </div>
      <div className="Carrossel">
  <h1 className="text-white text-center font-bold text-2xl">Slid
</h1>
  <Splide options={{ perPage: 1 }}>
    {shows.slice(0, 5).map((show, index) => (
      <SplideSlide key={index}>
        <div className="Carrossel container">
          <div className="show-container">
            <img className="" src={show.image.original} alt={show.name}/>
            <h2 className="title text-3xl">{show.name}</h2>
            <Link href={`/show/${show.id}`} className="SaibaMais">Saiba mais</Link>
            <h2 className="text-2xl"><div dangerouslySetInnerHTML={{ __html: show.summary }}></div></h2>
          </div>
        </div>
      </SplideSlide>
    ))}
  </Splide>
</div>
     </main>
  );
};
export default Home