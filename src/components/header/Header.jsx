import React from 'react'
import './header.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  // var settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   swipeToSlide:true,
  //   responsive: [
  //     {
  //       breakpoint: 1160,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         swipeToSlide:true,
  //       }
  //     },
  //     {
  //       breakpoint: 950,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         swipeToSlide:true,
  //       }
  //     },
  //     {
  //       breakpoint: 750,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 550,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 470,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         variableWidth: true,
  //       }
  //     }
  //   ]
  // };
  return (
  <div class="hero-section">
    <div className="heading">
      <h2>Welcome to</h2>
      <p>Introducing the revolutionary way to collect your NFT's </p>
      <button>Connect Wallet</button>

      <button>Learn More</button>
  </div>
</div>
  )
}

export default Header
