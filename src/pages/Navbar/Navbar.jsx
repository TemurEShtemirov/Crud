import React from 'react';
import "../../components/css/Navbar.css";
import HomePng from "../../components/img/Home.png"
import ImgHuman from "../../components/img/ImgHuman.png"
import Course from "../../components/img/course.png";
import StudentsImg from "../../components/img/students.png"
import Payment from "../../components/img/payment.png";
import reportImg from "../../components/img/report.png"
import Settinig from "../../components/img/Setting.png";
import Logout from "../../components/img/logout.png"
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="">
            <a href="" className="">
              <h1 className="h1Navbar">CRUD OPERATIONS</h1>
            </a>
            <a href="" className="">
              <img
                style={{
                  borderRadius: "50%",
                  marginRight: "30px",
                  marginLeft: "15px",
                  marginTop: "20px",
                }}
                src={ImgHuman}
                alt={ImgHuman}
              />
            </a>
            <a href="">
              <h3 className="NameUser text-dark" style={{
                marginLeft:"-20px",
                paddingRight:'10px'
              }}> Karthi Madesh</h3>
            </a>
            <p className="UserWOrk " style={{
              marginLeft:'50px' 
            }}>Admin</p>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <img src={HomePng} alt={HomePng} />
              <span>Home</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <img src={Course} alt={Course} />
              <span>Course</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
             <img src={StudentsImg} alt={StudentsImg} />
              <span>Students</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
             <img src={Payment} alt={Payment} />
              <span>Payment</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
            <img src={reportImg} alt={reportImg} />
              <span>Report</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
             <img src={Settinig} alt={Settinig} />
              <span>Settings</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
            <img src={Logout} alt={Logout} />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </nav>

     
    </div>
  );
}
