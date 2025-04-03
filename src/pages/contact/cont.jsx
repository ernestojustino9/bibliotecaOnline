import React, { useEffect, useState } from "react";
import { createContacto } from "../../service/ContactoService";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../components/layout/Header";

const Contacto = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  //SALVAR
  const [contacto, setContacto] = useState({
    email: "",
    assunto: "",
    mensagem: "",
  });

  //Limpar
  const handleClear = () => {
    setContacto({
      email: "",
      assunto: "",
      mensagem: "",
    });
  };
  const { email, assunto, mensagem } = contacto;
  //

  const onInputChange = (e) => {
    setContacto({ ...contacto, [e.target.name]: e.target.value });
  };

  //Botao Salvar
  const saveUpdateContacto = async (e) => {
    e.preventDefault();

    // if (!(await validate())) return;

    const data = { email, assunto, mensagem };

    //
    await createContacto(data)
      .then((response) => {
        // messages.mensagemSucesso("Salvo com sucesso", response.data);
        console.log("Salvo com sucesso");
        console.log("DADOS => " ,data)
        handleClear();
      })
      .catch((error) => {
        // messages.mensagemErro("Erro ao salvar", error);
        console.log("Erro ao salvar", error);
      });
  };

  //
  return (
    <div>
            <Header />
      <main id="main">
        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-header" id="contact-header">
              <h2>Contacto</h2>
              {/* <!-- <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem
            dolore earum</p> --> */}
            </div>

            <div className="row gx-lg-0 gy-4">
              <div className="col-lg-4">
                <div className="info-container d-flex flex-column align-items-center justify-content-center">
                  <div className="info-item d-flex">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h4>Localizacao:</h4>
                      <p>Bairro comercial, R. 1 de Agosto, Lubango</p>
                    </div>
                  </div>
                  {/* <!-- End Info Item --> */}

                  <div className="info-item d-flex">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h4>Email:</h4>
                      <p>tecnobaseeducation@gmail.com</p>
                    </div>
                  </div>
                  {/* <!-- End Info Item --> */}

                  <div className="info-item d-flex">
                    <i className="bi bi-phone flex-shrink-0"></i>
                    <div>
                      <h4>Telefone:</h4>
                      <p>+244 941 700 069</p>
                    </div>
                  </div>
                  {/* <!-- End Info Item --> */}
                </div>
              </div>

              <div className="col-lg-8">
                <form
                  className="php-email-form"
                  onSubmit={(e) => saveUpdateContacto(e)}
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={(e) => onInputChange(e)}
                        value={email}
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="text"
                        className="form-control"
                        name="assunto"
                        id="assunto"
                        placeholder="Assunto"
                        onChange={(e) => onInputChange(e)}
                        value={assunto}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="mensagem"
                      rows="7"
                      placeholder="Mensagem"
                      onChange={(e) => onInputChange(e)}
                      value={mensagem}
                    ></textarea>
                  </div>
                  {/* <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div> */}
                  <div className="text-center">
                    <button type="submit">Enviar</button>
                  </div>
                </form>
              </div>
              {/* <!-- End Contact Form --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
    </div>
  );
};

export default Contacto;
