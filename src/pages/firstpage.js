import React from "react";
import Particles from "react-tsparticles";

import Partner from "../components/partner";

import aboutPic from "../assets/image/about.gif";
import service1 from "../assets/image/services/services-1.png";
import service2 from "../assets/image/services/services-2.png";
import service3 from "../assets/image/services/services-3.png";
import service4 from "../assets/image/services/services-4.png";
import blog1 from "../assets/image/blog/latest-1.jpg";
import blog2 from "../assets/image/blog/latest-2.jpg";
import blog3 from "../assets/image/blog/latest-3.jpg";

export default function FirstPage() {
    return (
        <>
            {/* Hero Section Begin */}
            <section className="hero">
                <Particles
                    className="back"
                    options={{
                        fpsLimit: 120,
                        fullScreen: {
                            enable: false,
                        },
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: false,
                                    mode: "repulse",
                                },
                            },
                            modes: {
                                bubble: {
                                    distance: 500,
                                    duration: 1,
                                    opacity: 0.8,
                                    size: 10,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ccc",
                            },
                            links: {
                                color: "#28E0B2",
                                distance: 200,
                                enable: true,
                                opacity: 0.5,
                                width: 0.5,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1000,
                                },
                                value: 50,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 2,
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <div className="container">
                    <div className="col-lg-8 col-md-12">
                        <div className="intro__text">
                            <h1>
                                The Best Auto-Staking & Auto-Compounding
                                Protocol in Crypto
                            </h1>
                            <br />
                            <br />
                            <ul>
                                <li>Highest Fixed APY – 102,483%</li>
                                <li>
                                    First Automatic Staking and Compounding in
                                    Your Wallet!
                                </li>
                                <li>
                                    Get Rewards Every 30 Minutes / 48 Times
                                    Daily!
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="buttonGroup">
                            <button className="openApp1">Buy $ZENIT</button>
                            <button className="whitepaper">Buy $ZENIT</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}

            {/* About Section Begin */}
            <section className="about spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about__text">
                                <div className="section-title">
                                    <span>ABOUT</span>
                                    <hr
                                        style={{
                                            color: "#28E0B2",
                                            width: "75%",
                                            height: "2px",
                                        }}
                                    />
                                    <h2>ZENIT Autostaking Protocol</h2>
                                </div>
                                <div className="about__para__text">
                                    <p>
                                        ZENIT Finance is transforming DeFi with
                                        the ZENIT Autostaking Protocol (ZAP)
                                        that delivers the industry’s highest
                                        fixed APY, rebasing rewards every 30
                                        minutes, and a simple buy-hold-earn
                                        system that grows your portfolio in your
                                        wallet, fast.
                                    </p>
                                    <div>
                                        <h1
                                            style={{
                                                color: "cyan",
                                                textShadow: "0px 0px 20px cyan",
                                            }}
                                        >
                                            102 483.58%
                                        </h1>
                                        <h4>Fixed Staking APY</h4>
                                    </div>
                                </div>
                                <a href="#" className="primary-btn normal-btn">
                                    Open APP
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__pic">
                                <div className="about__pic__inner">
                                    <div className="double-spacer"></div>
                                    <div className="double-spacer"></div>
                                    <img src={aboutPic} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section End */}

            {/* Services Section Begin */}
            <section className="services spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>ZENIT FINANCE</span>
                                <hr
                                    style={{
                                        color: "#28E0B2",
                                        width: "28%",
                                        height: "2px",
                                    }}
                                />
                                <h2>How It Works</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="services__item">
                                <img src={service1} alt="" />
                                <h4>Buy & Sell Fees</h4>
                                <p>
                                    A portion of the buy and sell fees help
                                    sustain the ZENIT Treasury revenue.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="services__item">
                                <img src={service2} alt="" />
                                <h4>ZENIT Treasury</h4>
                                <p>
                                    Treasury inflow increases the ZENIT treasury
                                    balance and backs outstanding $ZENIT tokens.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="services__item">
                                <img src={service3} alt="" />
                                <h4>Staking Rewards</h4>
                                <p>
                                    ZENIT Token
                                    <br />
                                    Compounds automatically with a
                                    treasury-backed currency with intrinsic
                                    value.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="services__item">
                                <img src={service4} alt="" />
                                <h4>Automatic Burn</h4>
                                <p>
                                    The program starts with 1 billion $ZENIT
                                    reserved exclusively for the burning purpose
                                    and will increase over time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="counter__content">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="counter__item">
                                    <div className="counter__item__number">
                                        <h2 className="count">+94721</h2>
                                    </div>
                                    <div className="counter__item__text">
                                        <h5>
                                            Total
                                            <br /> Clients
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="counter__item">
                                    <div className="counter__item__number">
                                        <h2 className="count">+1526748727</h2>
                                    </div>
                                    <div className="counter__item__text">
                                        <h5>
                                            Total
                                            <br /> Stake
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section End */}

            {/* Team Section Begin */}
            {/* <section className="team spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-8 col-sm-6">
                            <div className="section-title">
                                <span>ZENIT Team</span>
                                <h2>Meet our team</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="team__btn">
                                <a href="#" className="primary-btn normal-btn">
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Team Section End */}

            {/* Call To Action Section Begin */}
            <section className="callto spad set-bg">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 text-center">
                            <div className="callto__text">
                                <span>How much can I earn?</span>
                                <h2>
                                    Our products are powered by DeFi and are
                                    designed to help you effortlessly generate
                                    cash flow from your crypto.
                                </h2>
                                {/* <a href="#" className="primary-btn">
                                    Contact Us
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call To Action Section End */}

            {/* Latest Section Begin */}
            <section className="latest spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-8 col-sm-6">
                            <div className="section-title">
                                <span>Tokenomics</span>
                                <hr
                                    style={{
                                        color: "#28E0B2",
                                        width: "77%",
                                        height: "2px",
                                    }}
                                />
                                <h2>ZENIT Tokenomics Explained</h2>
                                <p>
                                    $ZENIT is a ERC-20 token with an elastic
                                    supply that rewards holders using a positive
                                    rebase formula.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="latest__btn">
                                <a href="#" className="primary-btn normal-btn">
                                    View All
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="latest__item">
                                <div className="latest__item__pic">
                                    <img src={blog1} alt="" />
                                </div>
                                <div className="latest__item__text">
                                    <span className="set_default_color">
                                        Automatic LP
                                    </span>
                                    <h4>
                                        5% of the trading fees return to the
                                        liquidity ensuring $ZENIT's increasing
                                        collateral value.
                                    </h4>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="latest__item">
                                <div className="latest__item__pic">
                                    <img src={blog2} alt="" />
                                </div>
                                <div className="latest__item__text">
                                    <span className="set_default_color">
                                        Risk Free Value
                                    </span>
                                    <h4>
                                        5% of the trading fees are redirected to
                                        the RFV which helps sustain and back the
                                        staking rewards provided by the positive
                                        rebase.
                                    </h4>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="latest__item">
                                <div className="latest__item__pic">
                                    <img src={blog3} alt="" />
                                </div>
                                <div className="latest__item__text">
                                    <span className="set_default_color">
                                        Treasury
                                    </span>
                                    <h4>
                                        3% of the purchases and 8% of the sales
                                        go directly to the treasury which
                                        supports the RFV.
                                    </h4>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Latest Section End */}

            {/* Partner Section Begin */}
            <section>
                <div className="container">
                    <div className="section-title">
                        <span style={{ fontSize: "20px" }}>Find Us ON</span>
                        <hr
                            style={{
                                color: "#28E0B2",
                                width: "12%",
                                height: "2px",
                            }}
                        />
                    </div>

                    <Partner />
                </div>
            </section>
            {/* Partner Section End */}
        </>
    );
}
