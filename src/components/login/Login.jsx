import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import * as yup from "yup";

const Login = () => {
  //
  const { login } = useContext(AuthContext);
  //
  const [close, setClose] = useState(false);

  //
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(values);
  };
  //VALIDACAO
  const SignupSchema = yup.object().shape({
    email: yup
      .string("O campo email obrigatório!")
      .required("O campo email obrigatório!")
      .email("e-mail inválido!")
      .matches(/^(?!.*@[^,]*,)/),

    password: yup
      .string("O campo senha obrigatório!")
      .required("O campo senha obrigatório!")
      .min(6, "A senha deve ter no mínimo 6 caracteres!")
      .max(10, "A senha deve ter no máximo 10 caracteres!"),
  });
  //
  return (
    <div>
      {/*  */}
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div
            className="col-9"
            style={{ textAlign: "center", margin: "0 auto" }}
          >
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Digite seu email" 
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Digite a Senha"
                onChange={handleChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>
        </form>
      </div>
      {/*  */}
    </div>
  );
};

export default Login;
