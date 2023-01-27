// import ClipLoader from "react-spinners/ClipLoader";
import useApi from '../Hooks/useApi';
import {Link, useParams} from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {  SpinnerDotted,} from "spinners-react";
export default function GameDetails() {
  let {id} = useParams() ;
  let {Data , isLoading} = useApi(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`) ;
  return (
    <div className="details">
      {!isLoading ? (
        <div className="container text-white ">
          <div className="row mt-5 d-flex ">
            <div className="col-lg-4 mb-4 position-relative">
              <div className="game_detail_card position-fixed">
              <LazyLoad threshold={0.95}>
                <img src={Data.thumbnail} className="w-100" alt="" />
                </LazyLoad>

                <div className="buttons d-flex mx-0 px-0 mt-3 container-fluid  text-uppercase fs-5">
                  <div className="btn1 btn   text-light col-3">FREE</div>
                    <a
                      href={Data.game_url}
                      target="_blank"
                      className=" text-decoration-none text-white col-9"
                    ><button className="btn2 btn w-100  ">
                      play Now <i className=" fas fa-sign-out-alt ps-2"></i>
                      </button>
                    </a>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="discreption fw-light  lh-lg new-light-color">
                <h1>{Data.title}</h1>
                <p className="m-0">About {Data.title}</p>
                <p>{Data.description}</p>
              </div>
              <div className="desc-bottom">
                
                  <div className="">
                    <h4 className="mt-2  mb-4 new-light-color">
                      {Data.title} Screenshots
                    </h4>
                    <div className="slides">
                      <Splide
                        options={{ rewind: true }}
                        aria-label="React Splide Example"
                      >
                        {Data.screenshots.map((item, index) => (
                          <SplideSlide key={index}>
                            <LazyLoad threshold={0.95}>
                              <img
                                src={item.image}
                                className="d-block w-100"
                                alt="slider"
                              />
                            </LazyLoad>
                          </SplideSlide>
                        ))}
                      </Splide>
                    </div>
                  </div>
                <h4 className="mt-2  mb-4 new-light-color">
                  {" "}
                  Additional Information
                </h4>
                <div className="row">
                  <div className="col-4">
                    {" "}
                    <div className="sec">
                      <h6>Title</h6>
                      <p>{Data.title}</p>
                    </div>
                    <div className="sec">
                      <h6>Release Date</h6>
                      <p>{Data.release_date}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    {" "}
                    <div className="sec">
                      <h6>Developer</h6> <p>{Data.developer}</p>
                    </div>
                    <div className="sec">
                      <h6>Genre</h6> <p>{Data.genre}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    {" "}
                    <div className="sec">
                      <h6>Publisher</h6> <p>{Data.publisher}</p>
                    </div>
                    <div className="sec">
                      <h6>Platform</h6> <p>{Data.platform}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" d-flex align-items-center  align-content-center vh-100 justify-content-center">
          <SpinnerDotted size={200} color={"#8EA7E9"} />
        </div>
      )}
    </div>
  );
}
