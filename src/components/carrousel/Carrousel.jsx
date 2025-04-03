import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getBanners, getBannersHome } from "../../service/BannerService";
import Slider from "react-slick";

const Carrousel = () => {
  const [carrouses, setCarrouses] = useState([]);
  //
  useEffect(() => {
    getAllBanners();
  }, []);

  //LISTAR
  const getAllBanners = () => {
    getBannersHome("home")
      .then((response) => {
        setCarrouses(response.data.serializes);
        console.log(response.data, "Dados Banner");
      })
      .catch((error) => {
        // messages.mensagemErro(error);
        console.log(error);
      });
  };
  //
  // const settings = {
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };
  //
  return (
    <div>
      <section id="heroCarrousel" className="heroCarrousel">
        {/* <Slider {...settings}>
          {carrouses.map((carrouse) => (
            <div className="swiper-slide">
              <div className="InicioSlide">
              <div className="animate__animated animate__fadeInDown fundoPrincipal">
                <img
                  className="d-block w-100"
                  src={carrouse.image}
                  alt={carrouse.image}
                />
              </div>
              </div>
                  <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown" id="tituloInicio">
                      {carrouse.titulo}
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      {carrouse.subtitulo}
                    </p>
                  </div>
                </div>
            </div>
          ))}
        </Slider> */}
        <Slider {...settings}>
          <div className="swiper-slide">
            <div className="InicioSlide">
              <div className="animate__animated animate__fadeInDown fundoPrincipal">
                {/* <img
                  className="d-block w-100"
                  src={carrouse.image}
                  alt={carrouse.image}
                /> */}
                IMAGEM
              </div>
            </div>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown" id="tituloInicio">
                  EJ 1
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  Developer
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="InicioSlide">
              <div className="animate__animated animate__fadeInDown fundoPrincipal">
                {/* <img
                  className="d-block w-100"
                  src={carrouse.image}
                  alt={carrouse.image}
                /> */}
                IMAGEM
              </div>
            </div>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown" id="tituloInicio">
                  EJ 2
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  Developer
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default Carrousel;
