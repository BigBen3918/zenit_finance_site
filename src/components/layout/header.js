import React from "react";
import logo from "../../assets/image/logo.png";
import { BsBarChartSteps } from "react-icons/bs";

export default function Header() {
    return (
        <>
            {/* Offcanvas Menu Begin */}
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__logo">
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
            {/* Offcanvas Menu End */}

            {/* Header Section Begin */}
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <a href="#">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className="active">
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Document</a>
                                    </li>
                                    <li>
                                        <a href="#">Promotion</a>
                                    </li>
                                    <li>
                                        <a href="#">ZENIT Bank</a>
                                    </li>
                                    <li>
                                        <a href="#">Smart Bond</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__widget">
                                <button className="openApp">Open App</button>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <BsBarChartSteps />
                    </div>
                </div>
            </header>
            {/* Header Section End */}
        </>
    );
}
