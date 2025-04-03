import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerLargeS from "../../components/Banners/BannerLargeS";
import { getServicos } from "../../service/ServicoService";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";

const Service = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getAllServices();
  }, []);

  const [services, setServices] = useState([]);

  //LISTAR
  const getAllServices = () => {
    getServicos()
      .then((response) => {
        setServices(response.data.dados);
        console.log(response.data, "Dados getServicos");
      })
      .catch((error) => {
        // messages.mensagemErro(error);
        console.log(error);
      });
  };
  //

  return (
    <div>
      <Header />
      <BannerLargeS />
      {/* <!-- ======= serviceNosso Section ======= --> */}
      <div id="serviceNosso" className="serviceNosso">
        <div className="FilhoNossoServico" data-aos="fade-up">
          <div className="" id="centroCard">
            {services.map((service, index) => {
              return (
                <div
                  className="FilhosCentreCard"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  key={index}
                // style={{ margin: "40px" }}
                >
                  <div className="featured cardtoUp">
                    <div
                      className="image FundoInfoService"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                    ></div>
                    {/*  */}
                    {/* <div className="LegendaService">
                      <h3>{service.nome}</h3>
                      <p>{service.descricao.substring(0, 85)}...</p>
                    </div> */}
                    {/*  */}
                    <div className="LegendaService">
                      <h3>{service.nome}</h3>
                      {/*  */}
                      <Link to={`/viewservice/${service._id}`}>
                        {/*  */}
                        <p>{service.descricao.substring(0, 85)}...</p>
                        {/*  */}
                      </Link>
                      {/*  */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <!-- End serviceNosso Section --> */}
    </div>
  );
};

export default Service;
