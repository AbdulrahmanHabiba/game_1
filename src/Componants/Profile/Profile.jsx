import React from "react";
import style from "./Profile.css";
import img2 from "./images/img3.jpg";
export default function Profile({ userData }) {
  return (
    <div className="profile ">
      <div className="myBackground  ">
        <div className="profileOverlay"></div>
      </div>
      <div className="container d-flex align-items-center justify-content-center ">
        <div className="card shadow-lg  border-0">
          <div className="row g-0">
            <div className="col-md-6  ">
              <h1 className=" text-center pt-md-0 mb-lg-4 me-lg-3">
                Welcome {userData?.first_name}
              </h1>
              <div className="c d-flex align-content-center justify-content-center  ">
                <div className=" justify-content-center align-items-center ">
                  <div className="boxes  m-0 pe-3">
                    <div className="user_icon d-flex align-content-center justify-content-center d-md-none d-xl-flex  fs-4 me-lg-5">
                    <i class="fa-regular fa-circle-user fa-5x me-3 "></i>                      </div>
                  
                  <div className="ProfileBox border border-2 rounded-1 p-3 ms-5  py-1 my-md-3 mb-md-2 my-lg-4  new-light-color">
                      <h5 className=" fw-bold">First Name : <span className=" fw-lighter">{userData?.first_name}</span>  </h5>
                    </div><div className="ProfileBox border border-2 rounded-1 p-3 ms-5  py-1 my-md-3 mb-md-2 my-lg-4  new-light-color">
                      <h5 className=" fw-bold">Last Name : <span className=" fw-lighter">{userData?.last_name}</span>  </h5>
                    </div>
                    <div className="ProfileBox border border-2 rounded-1 p-3 ms-5  py-1 my-md-3 mb-md-2 my-lg-4 new-light-color">
                      <h5 className=" fw-bold">Email Address : <span className=" fw-lighter">{userData?.email}</span>  </h5>
                    </div>
                    <div className="ProfileBox border border-2 rounded-1 p-3 ms-5  py-1 my-md-3 mb-md-2 my-lg-4 new-light-color">
                      <h5 className="fw-bold">Age : <span className=" fw-lighter">{userData?.age}</span>  </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-md-block d-none">
              <img src={img2} className="w-100 h-100 " alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
