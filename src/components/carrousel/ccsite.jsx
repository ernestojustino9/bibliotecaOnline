import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getBanners } from "../../service/BannerService";
import Slider from "react-slick";

const Carrousel = () => {
  const [carrouses, setCarrouses] = useState([]);
  //
  useEffect(() => {
    getAllBanners();
  }, []);

  //LISTAR
  const getAllBanners = () => {
    getBanners()
      .then((response) => {
        setCarrouses(response.data.dados);
        console.log(response.data, "Dados Banner");
      })
      .catch((error) => {
        // messages.mensagemErro(error);
        console.log(error);
      });
  };
  //
  const settings = {
    // dots: true,
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // initialSlide: 0,
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
  //
  return (
    <div>
      <section id="hero" className="hero">
        <Slider {...settings}>
          {carrouses.map((carrouse) => (
            <div className="swiper-slide">
              {/*  */}
              <div className="animate__animated animate__fadeInDown fundoPrincipal">
                <img
                  className="d-block w-100"
                  src={carrouse.image}
                  alt={carrouse.image}
                />
              </div>
                  {/*  */}
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
                {/*  */}
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Carrousel;

 