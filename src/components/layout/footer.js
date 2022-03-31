import React from "react";
import logo from "../../assets/image/logo.png";
import {
    BsTwitter,
    BsDiscord,
    BsTelegram,
    BsYoutube,
    BsGithub,
} from "react-icons/bs";

export default function Footer() {
    return (
        // Footer Section Begin
        <footer className="footer set-bg">
            <div className="container">
                <div className="footer__top">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="footer__top__text">
                                <h2>KEEP IN TOUCH</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer__top__newslatter">
                                <button className="openApp1">Open App</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__logo">
                                <a href="#">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                        <div className="footer__widget">
                            <h6>Socials</h6>
                            <ul>
                                <li>
                                    <a
                                        href="#"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <BsTwitter />
                                        &nbsp; Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <BsDiscord />
                                        &nbsp; Discord
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <BsTelegram />
                                        &nbsp; Telegram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <BsYoutube />
                                        &nbsp; Youtube
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <BsGithub />
                                        &nbsp; Github
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer__widget">
                            <h6>Products</h6>
                            <ul>
                                <li>
                                    <a href="#">Automatic-Staking</a>
                                </li>
                                <li>
                                    <a href="#">ZENIT Bank</a>
                                </li>
                                <li>
                                    <a href="#">Smart Bond</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer__widget">
                            <h6>Learn</h6>
                            <ul>
                                <li>
                                    <a href="#">Documentation</a>
                                </li>
                                <li>
                                    <a href="#">Medium</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
