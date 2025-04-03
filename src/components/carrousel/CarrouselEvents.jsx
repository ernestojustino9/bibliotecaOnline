import { getCarrousesEventes } from "../../service/CarrouselEventsService";
import { useState, useEffect } from "react";
import Slider from "react-slick";

const CarrouselEvents = () => {
  //
  useEffect(() => {
    getAllCarrousesEventes();
  }, []);

  //LISTAR
  const [novosCarrousesEventes, setNovosCarrousesEventes] = useState([]);
  const getAllCarrousesEventes = () => {
    getCarrousesEventes()
      .then((response) => {
        setNovosCarrousesEventes(response.data.dados);
        console.log(response.data.dados, "Dados Todos os CarrousesEventes");
      })
      .catch((error) => {
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
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
          {novosCarrousesEventes.map((carrouse) => (
            <div className="swiper-slide">
              {/*  */}
              <div className="animate__animated animate__fadeInDown fundoPrincipal">
                <img
                  className="d-block w-100"
                  src={`http://localhost:4000/carrouselEvents/image/${carrouse._id}`}
                  alt={carrouse.image}
                />
              </div>
              {/*  */}
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default CarrouselEvents;

