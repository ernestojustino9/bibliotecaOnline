import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getServicoId } from "../../service/ServicoService";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/layout/Header";

const ViewService = () => {
  const { id } = useParams();
  //
  const [servicoView, setServicoView] = useState({
    image: "",
    nome: "",
    descricao: "",
    _id: "",
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    viewFormacao();
  }, []);

  const viewFormacao = () => {
    if (id) {
      getServicoId(id).then((response) => {
        setServicoView(response.data);
        console.log(response.data, "Visualizao do Cursos");
      });
    }
  };

  return (
    <div>
            <Header />
      <br />
      <br />

      {/* <!-- Shop Detail Start --> */}
      <div className="container-fluid py-5 PaiViewFormation">
        <div className="row px-xl-5">
          <div className="col-lg-5 pb-5">
            <div
              id="product-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner ">
                <div
                  className=" ImageViewFormation"
                  style={{ backgroundImage: `url(${servicoView.image})` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 pb-5 ViewFormationDetalhes">
            {/* <h3 className="font-weight-semi-bold mb-3">
              {servicoView.descricao}
            </h3> */}
            {servicoView.descricao.length === 0 ? (
              <h1>Sem descrição</h1>
            ) : (
              <p>{servicoView.descricao}</p>
            )}

            <div className="d-flex mb-3"></div>
            <div className="d-flex align-items-center mb-4 pt-2 btnVoltar">
              <Link to="/service">Voltar</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Shop Detail End --> */}
    </div>
  );
};

export default ViewService;
