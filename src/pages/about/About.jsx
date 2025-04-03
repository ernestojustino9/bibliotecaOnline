import React, { useEffect, useRef } from "react";
import Header from "../../components/layout/Header";
import Team from "../../components/team/Team";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <main className="main">
      <Header />
      <div className="container-fluid" id="fundoAbout">
        <div className="about" data-aos="fade-up">
          <div className="about_content">
            <video playsInline autoPlay={"autoplay"} controls loop ref={videoEl}>
              <source
                src="https://drive.google.com/uc?export=view&id=1zfLI7jUVBkFC6nw6krJ40tvXyMlY8RYg"
                type="video/mp4"
              ></source>
            </video>
            <section className="about_data">
              <div className="section_title">
                <h1>Quem somos?</h1>
              </div>
              <p>
                <b>TECNO BASE</b>, (Base Tecnológica), uma empresa focada no ramo de
                Tecnologia, desenvolvendo softwares de Gestão, Comunicação e
                Segurança, provedora de treinamentos e capacitação de educação
                tecnológica, situada na província da Huíla, Município do Lubango,
                bairro Comercial, Rua Dr. António Agostinho Neto.
              </p>

              <p>
                <b>FUNDAÇÃO:</b> 16/09/2012 Por: <b>Bartolomeu Afonso António</b>
              </p>
              <p />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.352091420376!2d13.490770414843992!3d-14.917464689601278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ba34b3beae0d34b%3A0xf94f4d48b11e1a40!2sTecno%20Base!5e0!3m2!1spt-PT!2s!4v1620590601730!5m2!1spt-PT!2s"
                width="100%"
                height="300"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
              <div className="section_title">
                <h1>CRIAÇÃO DA EMPRESA</h1>
              </div>
              <p>
                A <b>Tecno Base</b>, foi criada com o objectivo de fornecer as
                melhores soluções de serviços tecnológicos, especialmente em
                desenvolvimento de softwares de segurança, redes computacionais e de
                informação para as instituições públicas e privadas, empresas do
                mercado, pessoas singulares e ainda também o fornecimento de
                produtos informáticos.
              </p>
              <div className="sub_title">
                <h3>Missão da Empresa</h3>
              </div>
              <p>
                Nossa organização busca cada vez mais oferecer os melhores serviços
                e produtos tecnológicos a todos os clientes. Vender materiais
                tecnológicos exclusivos e indispensáveis para redes de trabalhos,
                que as pessoas sonham em poder comprar, podem comprar e terem
                orgulho de usar, assim como oferecer as melhores formações,
                treinamentos e palestras a todos os clientes e parceiros.
              </p>
              <div className="sub_title">
                <h3>Visão da Empresa</h3>
              </div>
              <p>
                Ser uma das melhores desenvolvedoras de softwares, produtoras e
                vendedora de artigos tecnológicos nacionalmente e
                internacionalmente, prestar os melhores serviços nas áreas de
                segurança de redes computacionais e da informação afim de contribuir
                proactivamente para o melhor desenvolvimento de Angola, da África e
                se possível até mesmo a nível intercontinental.
              </p>
              <div className="sub_title">
                <h3>Valores da Empresa</h3>
              </div>
              <p>
                Amor, Fé, Ética, Respeito, Comprometimento, Humildade e Honestidade,
                sempre na frente de qualquer tomada de decisões perante aos
                fornecedores e principalmente com os clientes e funcionários.
                Respeito com toda a gama de pessoas que fazem nossa empresa crescer
                dia apos dia, para que sempre e qualquer manobra a ser feita não
                prejudique ninguém.
              </p>
              <div className="sub_title">
                <h3>Perfil de Atuação Social </h3>
              </div>
              <p>
                A presente organização está sempre preocupada com a sociedade,
                pensando nas pessoas, buscamos sempre o equilíbrio social e
                econômico, levando em consideração um dos principais objectivos da
                empresa Tecno Base, que é a Educação Tecnológica que nos permite
                contribuir para o combate ao desemprego. Temos parcerias firmadas
                com outras empresas, com vista a manter sempre novas contratações,
                estas empresas mandam informativos para a <b>Tecno Base</b>, se
                encarregar de fazer a parte da capacitação dos candidatos
                selecionados para as mesmas vagas e assim, melhorar a qualidade do
                sistema de empregabilidade público e privado.
              </p>
            </section>
          </div>
        </div>
        <hr />
        {/*  */}
        <Team />
        {/*  */}
      </div>
    </main>

  );
};

export default About;
