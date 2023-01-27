import axios from "axios";
import React, { useEffect, useState } from "react";
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import Login from "../Login/Login";
// import car from "../Login/images/loginCar.jpg"
import { SpinnerRoundFilled , SpinnerCircular} from 'spinners-react';
import { Link} from 'react-router-dom'
import LazyLoad from "react-lazy-load";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [AllGames, setAllGames] = useState([]);
  async function getAllGames() {
    try {
      const { data } = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/games`,
        {
          params: {'sort-by': 'popularity'},
          headers: {
            "X-RapidAPI-Key":
              "428da83d08msh43bee7fc657fa87p10fd8cjsn88f864cf56f8",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      setAllGames(data);
      !AllGames ? setIsLoading(true) : setIsLoading(false);

      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    // Trigger the API Call
    getAllGames();
  }, []);
  return (
    <div>
      <header className="home_header p-3 d-flex align-items-center justify-content-center  py-sm-5 mb-5">
        <div className="text-muted text-center home_header_content ">
          <h1 className=" text-muted h1">
            {" "}
            Find & track the best{" "}
            <span className=" text-info">free-to-play</span> games!
          </h1>
          <p className="fs-5  fw-lighter mb-3">
            Track what you've played and search for what to play next! Plus get
            free premium loot!{" "}
          </p>
          <Link to="/all">
          <button className="btn btn-outline-secondary">Browse Games</button></Link>
        </div>
      </header>
      <div className="container">
        <h3 className="new-light-color">
          <i className="fas fa-robot mr-2 pe-2  "></i>Personalized Recommendations
        </h3>
        <div className="row g-3 my-4">
          {!isLoading ? AllGames.slice(0, 3).map((game, index) => (
            <div className="col-md-4" key={index}>
              <div className="home_card shadow cursor-pointer rounded rounded-2">
             <Link className=" text-decoration-none" to={"/details/"+game.id}>
                     
                <div className="home_img ">
                <LazyLoad threshold={0.95}>

                <img src={game.thumbnail} className="w-100" alt="" />
                </LazyLoad>
                </div>

                <div className="card_footer p-3 text-white d-flex align-items-center justify-content-between  ">
                  <p>{game.title}</p>
                  <div className="free  px-2 py-0 d-inline-block rounded-1 fw-semibold lh-lg  ">
                    FREE
                  </div>
                </div>
                </Link> 
              </div> 
            </div>
          ))   : <div className="text-center"><SpinnerRoundFilled size={200} color={'#0DC3E7'} /></div> } 
        </div>
      

      </div>
      
    </div>
  );
}
