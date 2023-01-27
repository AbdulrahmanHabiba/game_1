import React from 'react'
import { Link, useParams } from "react-router-dom";
import { SpinnerRoundFilled, SpinnerCircular } from "spinners-react";
import LazyLoad from 'react-lazy-load';
import useApi from '../Hooks/useApi';

export default function GamesByCategory() {
  let {category} = useParams() ;
  let {Data , isLoading} = useApi(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`) ;
  return (
    <div id="allGames">
      <div className="container">
        <div className="row g-3 my-4">
          {!isLoading ? (
            Data.map((game, index) => (
              <div className="col-md-4 col-lg-3 " key={index}>
                <div className="allGames_card shadow  cursor-pointer rounded rounded-2">
                  <Link
                    className=" text-decoration-none"
                    to={"/details/" + game.id}
                  >
                    <div className="img ">
                    <LazyLoad  className="myLazy" threshold={0.95}>
                      <img src={game.thumbnail} className="w-100" alt="" />
                      </LazyLoad>
                    </div>
                    <div className="card_footer p-3 text-white   ">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="new-light-color fw-normal">
                          {game.title.length >= 15
                            ? game.title.slice(0, 14) + " ..."
                            : game.title}{" "}
                        </h5>
                        <div className="free  px-2 py-0 d-inline-block rounded-1 fw-semibold lh-lg  ">
                          FREE
                        </div>
                      </div>
                      <p>
                        {game.short_description.length >= 25
                          ? game.short_description.slice(0, 25) + " ..."
                          : game.short_description}{" "}
                      </p>
                      <div className="d-flex justify-content-between">
                        <i className="fas fa-plus-square new-light-color "></i>
                        <div className="d-flex mb-n2 justify-content-between align-items-center">
                          <span className="game_type  px-2 bg-secondary lh-base text-dark  me-2 rounded-pill">
                            {game.genre}
                          </span>
                          {game.platform == "Web Browser" ? (
                            <i
                              title="Available on Browser"
                              className="fas fa-window-maximize text-muted"
                            ></i>
                          ) : (
                            <i
                              title="Available on Windows"
                              className="fab fa-windows text-muted "
                            ></i>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className=" d-flex align-items-center vh-100 mb-5 pb-5 justify-content-center">
            <SpinnerCircular className='mb-5 pb-5' size={200} color={"#8EA7E9"} />
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
