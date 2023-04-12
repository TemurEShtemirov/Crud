import React from 'react'
import Navbar from '../Navbar/Navbar';
import CardStudentCap from "../../components/img/CardStudentCap.png";
import SaveImg from "../../components/img/save.png";
import dollar from "../../components/img/dollar.png";
import User from "../../components/img/user.png";
import "../../components/css/Home.css"
export default function Home() {
  return (
    <div>
      <div className="justify-content-end">
        <Navbar />
      </div>
      <div className="justify-content-start ">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 card1">
            <img src={CardStudentCap} alt={CardStudentCap} />
            <p className="card1p">Students</p>
            <h2 className="card1h2 justify-content-end">243</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 card2">
            <img src={SaveImg} alt={SaveImg} />
            <p className="card2p">Course</p>
            <h2 className="card2h2 justify-content-end">13</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 card3">
            <img src={dollar} alt={dollar} />
            <p className="card3p">Payments</p>
            <h2 className="card3h2 justify-content-end">INR 556,000</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 card4">
            <img src={User} alt={User} />
            <p className="card4p">Users</p>
            <h2 className="card4h2 justify-content-end">3</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
