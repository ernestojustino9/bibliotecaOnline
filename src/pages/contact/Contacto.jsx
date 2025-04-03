import React, { useEffect, useState } from "react";
import { createContacto } from "../../service/ContactoService";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../components/layout/Header";
import { cadastroContacto } from "../../components/validationInput/schema";
import * as messages from "../../components/message/toastr";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";


const Contacto = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  //SALVAR
  const initialValues = {
    email: "",
    assunto: "",
    mensagem: "",
  };

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    const { value, name } = input;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setValues({ ...values, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      cadastroContacto.validateSync(values, { abortEarly: false });
      const { data } = await createContacto(values);
      if (data) {
        messages.mensagemSucesso("Salvo com sucesso", data);
        setValues(initialValues);
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
      } else {
        messages.mensagemErro("Erro ao salvar", error);
      }
    }
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
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <TextField
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <TextField
                        id="assunto"
                        name="assunto"
                        placeholder="Assunto"
                        type="text"
                        value={values.assunto}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        error={Boolean(errors.assunto)}
                        helperText={errors.assunto}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="mensagem"
                      rows="7"
                      placeholder="Mensagem"
                      onChange={handleChange}
                      value={values.mensagem}
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
