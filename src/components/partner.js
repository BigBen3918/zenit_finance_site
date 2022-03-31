import React from "react";
import Carousel from "react-multi-carousel";
import logo1 from "../assets/image/partner/Frame-1-300x120.png";
import logo2 from "../assets/image/partner/Frame-2-300x120.png";
import logo3 from "../assets/image/partner/Frame-3-300x120.png";
import logo4 from "../assets/image/partner/Frame-4-300x120.png";
import logo6 from "../assets/image/partner/Frame-6-300x120.png";
import logo7 from "../assets/image/partner/Frame-7-300x120.png";
import logo8 from "../assets/image/partner/Frame-8-300x120.png";
import logo9 from "../assets/image/partner/Frame-9-300x120.png";

export default function Partner() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
        },
    };

    return (
        <div className="partner">
            <Carousel
                swipeable={false}
                autoPlay={true}
                transitionDuration={1000}
                autoPlaySpeed={100}
                infinite={true}
                arrows={false}
                showDots={false}
                responsive={responsive}
                customTransition="all 3s"
            >
                <div>
                    <img src={logo1} alt="" />
                </div>
                <div>
                    <img src={logo2} alt="" />
                </div>
                <div>
                    <img src={logo3} alt="" />
                </div>
                <div>
                    <img src={logo4} alt="" />
                </div>
                <div>
                    <img src={logo6} alt="" />
                </div>
                <div>
                    <img src={logo7} alt="" />
                </div>
                <div>
                    <img src={logo8} alt="" />
                </div>
                <div>
                    <img src={logo9} alt="" />
                </div>
            </Carousel>
        </div>
    );
}
