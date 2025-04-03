import { getCarrouses } from "../../service/CarrouselLojaService";
import { useState, useEffect } from "react";
import Slider from "react-slick";

const CarrouselLoja = () => {
  //
  useEffect(() => {
    getAllCarrouses();
  }, []);

  //LISTAR
  const [novosCarrouses, setNovosCarrouses] = useState([]);
  const getAllCarrouses = () => {
    getCarrouses()
      .then((response) => {
        setNovosCarrouses(response.data.dados);
        console.log(response.data.dados, "Dados Todos os Carrouses");
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
      <section id="heroShop" className="heroShop">
        <Slider {...settings}>
          {novosCarrouses.map((carrouse) => (
            <div className="swiper-slide">
              {/*  */}
              <div className="animate__animated animate__fadeInDown fundoPrincipal">
                <img
                  // className="d-block w-100"
                  src={`${carrouse.image}`}
                  alt={carrouse.image}
                  // width="30" height="20"
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

export default CarrouselLoja;
