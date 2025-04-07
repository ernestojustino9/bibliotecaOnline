import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
// import { getBanners, getBannersHome } from "../../service/BannerService";
import img1 from "/src/assets//img/img1.jpeg";
import img2 from "/src/assets//img/img2.jpeg";
import img3 from "/src/assets//img/img3.jpeg";
import Slider from "react-slick";

const Carrousel = () => {
  const [carrouses, setCarrouses] = useState([]);
  //
  // useEffect(() => {
  //   getAllBanners();
  // }, []);

  //LISTAR
  // const getAllBanners = () => {
  //   getBannersHome("home")
  //     .then((response) => {
  //       setCarrouses(response.data.serializes);
  //       console.log(response.data, "Dados Banner");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  //
  const settings = {
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 6000,
  //   autoplaySpeed: 6000,
  //   cssEase: "linear",
  // };
  //
  return (
    <div>
      {/* <main id="main"> */}
      <section id="heroCarrousel" className="heroCarrousel">
        <Slider {...settings}>
          <div className="swiper-slide">
            <div className="InicioSlide">
              <div className="animate__animated animate__fadeInDown ">
                <img className="d-block w-100" src={img1} alt={img1} style={{height: "500px"}} />
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="InicioSlide">
              <div className="animate__animated animate__fadeInDown fundoPrincipal">
                <img className="d-block w-100" src={img2} alt={img2} style={{height: "500px"}} />
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="InicioSlide">
              <div className="animate__animated animate__fadeInDown fundoPrincipal">
                <img className="d-block w-100" src={img3} alt={img3} style={{height: "500px"}} />
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/* </main> */}
    </div>
  );
};

export default Carrousel;
