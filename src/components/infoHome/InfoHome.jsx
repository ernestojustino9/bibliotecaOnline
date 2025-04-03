import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "react-bootstrap/Accordion";

const InfoHome = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-5 align-items-stretch position-relative video-box"
            data-aos="fade-right"
            id="bgFundo"
          ></div>

          <div
            className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch"
            data-aos="fade-left"
          >
            <div className="content">
              <h3 style={{ textAlign: "center" }}>
                {/* TECNO BASE */}
                {/* <strong>velit pariatur architecto aut nihil</strong> */}
              </h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p> */}
            </div>
            {/*  */}
            <div className="accordion-list">
              {/*  */}
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    <span>MISSÃO </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Nossa organização busca cada vez mais oferecer o melhor da
                      tecnologia moderna, através dos nossos serviços, produtos
                      tecnológicos e treinamentos.
                    </p>
                    <p>
                      É também nosso foco, promover e garantir a establidade
                      social e económica das familias angolanas, assim como,
                      das Empresas Públicas e Privadas, por meios das nossas
                      soluções Digitais, dando-lhes todo o acesso aos meios
                      tecnológicos exclusivos e indispensáveis para suas redes
                      de trabalhos, tanto quanto, prover soluções tecnológicas
                      que as pessoas desejam, sonham em poder adquir e têm
                      orgulho de usar, assim como, oferecer
                      formações e treinamentos nas mais importantes áreas de
                      T.I. de modos a contribuir no desenvolvimento da Educação
                      Digital.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                {/*  */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span>VISÃO</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Ser uma das melhores provedoras de soluções tecnológicas
                      em Angola, África e no Mundo, promovendo a Inclusão e a
                      Educação Digital no seio de todas das familias e
                      sociedades Africanas, fundamentalmente angolanas.
                    </p>
                    <p>
                      Garantir soluções únicas para quaquer empresa e
                      intituições que precisam e devem imergir com o auxilio das
                      novas tecnologias ao novo Mundo Digital, especialmente nas
                      áreas de Softwares, Segurança de redes computacionais,
                      gestão de base de dados, Sistemas de Video Vigilância
                      (CFTV) e Electrónica de computação, deste modo
                      contribuindo proactivamente para o melhor desenvolvimento
                      social e económico, destas familias, e empresas.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                {/*  */}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="accordionCss">VALORES</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Amor, Fé, Ética, Respeito, Comprometimento, Humildade e
                      Honestidade, sempre na frente de qualquer tomada de
                      decisões perante aos fornecedores e principalmente com os
                      clientes e funcionários.
                    </p>
                    <p>
                      Respeito com toda a gama de pessoas que fazem nossa
                      empresa crescer dia-a-dia, para que sempre qualquer
                      manobra a ser feita não prejudique ninguém.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                {/*  */}
              </Accordion>
              {/*  */}
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHome;
