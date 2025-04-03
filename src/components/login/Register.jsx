import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { createRegsister } from "../../service/LoginService";
import { getMunicipios, getMunicipiosProvincia } from "../../service/MunicipioService";
import * as messages from "../../components/message/toastr";
import TextField from "@mui/material/TextField";
import { cadastroShop } from "../validationInput/schema";
import { getProvincias } from "../../service/ProvinciaService";

const Register = () => {
  //
  const [municipios, setMunicipios] = useState([]);
  const [provincias, setProvincias] = useState([]);
  //SALVAR
  const initialValues = {
    nome: "",
    sobrenome: "",
    telefone: "",
    email: "",
    bilhetePassaporte: "",
    endereco: "",
    nacionalidade: "",
    genero: "",
    password: "",
    dataDeNascimento: "",
    municipioId: "",
    confirpassword: ""
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

  const verMunicio = async (e) => {
    await getMunicipiosProvincia(e.target.value)
      .then((response) => {
        console.log(response.data)
        setMunicipios(response.data.dados)
      })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      cadastroShop.validateSync(values, { abortEarly: false });
      const { data } = await createRegsister(values);
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
  //LISTAR MUNICIPIOS
  useEffect(() => {
    // getAllMunicipios();
    getAllProvincias();
  }, []);

  //
  const getAllProvincias = () => {
    getProvincias()
      .then((response) => {
        setProvincias(response.data.dados);
        console.log(response.data.dados, "Dados Todos os municipios");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllMunicipios = () => {
    getMunicipios()
      .then((response) => {
        // setMunicipios(response.data.dados);
        console.log(response.data.dados, "Dados Todos os municipios");
      })
      .catch((error) => {
        console.log(error);
      });
  };




  //
  return (
    <div>
      {/*  */}
      <div className="row">
        {/*  */}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <TextField
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  type="text"
                  value={values.nome}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.nome)}
                  helperText={errors.nome}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <TextField
                  id="sobrenome"
                  name="sobrenome"
                  placeholder="SobreNome"
                  type="sobrenome"
                  value={values.sobrenome}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.sobrenome)}
                  helperText={errors.sobrenome}
                />
              </div>
            </div>
          </div>
          <br />
          {/*  */}
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <TextField
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <TextField
                  id="telefone"
                  name="telefone"
                  placeholder="Telefone"
                  type="telefone"
                  value={values.telefone}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.telefone)}
                  helperText={errors.telefone}
                />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <TextField
                  id="bilhetePassaporte"
                  name="bilhetePassaporte"
                  placeholder="Bilhete de Identidade"
                  type="text"
                  value={values.bilhetePassaporte}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.bilhetePassaporte)}
                  helperText={errors.bilhetePassaporte}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">



                <TextField
                  id="dataDeNascimento"
                  name="dataDeNascimento"
                  placeholder="Data De Nascimento"
                  type="date"
                  value={values.dataDeNascimento}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.dataDeNascimento)}
                  helperText={errors.dataDeNascimento}
                />
              </div>
            </div>
          </div>
          {/*  */}
          <br />
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <select
                  name="nacionalidade"
                  id="nacionalidade"
                  value={values.nacionalidade}
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Nacionalidade</option>
                  <option value="Angolana" selected>Angolana</option>
                  <option value="Brasileira">Brasileira</option>
                  <option value="Portuguesa">Portuguesa</option>
                </select>

              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <select
                  name="genero"
                  id="genero"
                  value={values.genero}
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Gênero</option>
                  <option value="M" selected>Masculino</option>
                  <option value="F">Feminino</option>
                </select>

              </div>
            </div>
          </div>
          {/*  */}
          <br />
          {/*  */}
          <div className="row">
            {/* <div className="col-12"> */}
            <div className="col-6">
              <div className="input-group">
                <select
                  name="provinciaId"
                  id="provinciaId"
                  // value={values.municipioId}
                  className="form-control"
                  onChange={(e) => verMunicio(e)}
                >
                  <option value="">Provincias</option>
                  {provincias.map((provincia) => (
                    <option value={provincia._id}>{provincia.descricao}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <select
                  name="municipioId"
                  id="municipioId"
                  value={values.municipioId}
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Municipio</option>
                  {municipios.map((municipio) => (
                    <option value={municipio._id}>{municipio.descricao}</option>
                  ))}
                </select>
              </div>
            </div>
            {/*  */}
          </div>
          <br />
          {/*  */}
          <div className="row">
            {/*  */}
              <div className="col-6">
                <TextField
                  id="endereco"
                  name="endereco"
                  placeholder="Bairro"
                  type="text"
                  value={values.endereco}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.endereco)}
                  helperText={errors.endereco}
                />
            </div>
            {/*  */}
            <div className="col-6">
              <TextField
                id="password"
                name="password"
                placeholder="Senha "
                type="password"
                value={values.password}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                error={Boolean(errors.password)}
                helperText={errors.password}
              />
            </div>
          </div>
          <br />
          {/*  */}
          <div className="row">
            <div className="col-6">
              <div className="input-group">
                <TextField
                  id="confirpassword"
                  name="confirpassword"
                  placeholder="Confirmação da Senha "
                  type="password"
                  value={values.confirpassword}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.confirpassword)}
                  helperText={errors.confirpassword}
                />
              </div>
            </div>
            {/* */}
          </div>
          <br />
          {/*  */}
          <br />
          <div>
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#006e2e",
                color: "#fff",
                width: "100%",
              }}
            >
              Salvar
            </button>
          </div>
          {/*  */}
        </form>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default Register;
