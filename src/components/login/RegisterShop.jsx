import React, { useEffect, useState } from "react";
import { createRegsister } from "../../service/LoginService";
import { getMunicipios } from "../../service/MunicipioService";
import { getProvincias } from "../../service/ProvinciaService";
import { cadastroShop } from "../validationInput/schema";
import * as messages from "../../components/message/toastr";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";


const RegisterShop = () => {
  const [municipios, setMunicipios] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const initialValues = {
    nome: "",
    email: "",
    dataDeNascimento: "",
    telefone: "",
    bi: "",
    password: "",
    confirpassword: "",
    municipioId: "",
    provinciaId: "",
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
  //LISTAR MUNICIPIOS, PROVINCIA, HABILIDADEACADEMICA, HABILIDADEESCOLAR
  useEffect(() => {
    getAllMunicipios();
    getAllProvincias();
  }, []);

  const getAllMunicipios = () => {
    getMunicipios()
      .then((response) => {
        setMunicipios(response.data.dados);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllProvincias = () => {
    getProvincias()
      .then((response) => {
        setProvincias(response.data.dados);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="row">
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
          </div>
          <br />
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <TextField
                  id="bi"
                  name="bi"
                  placeholder="Bilhete de Identidade"
                  type="text"
                  value={values.bi}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.bi)}
                  helperText={errors.bi}
                />
              </div>
            </div>
            <div className="col-6">
              <p>Data de Nascimento</p>
              <div className="input-group">
                <TextField
                  id="dataDeNascimento"
                  name="dataDeNascimento"
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
          <br />
          <div className="row">
            <div className="col-6">
              <div className="input-group">
                <TextField
                  id="telefone"
                  name="telefone"
                  placeholder="Telefone "
                  type="text"
                  value={values.telefone}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.telefone)}
                  helperText={errors.telefone}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <select
                  name="provinciaId"
                  id="provinciaId"
                  value={values.provinciaId}
                  className="form-control"
                  onChange={handleChange}
                  style={{ height: "58px" }}
                >
                  <option value="">Provincia</option>
                  {provincias.map((provincia) => (
                    <option value={provincia._id}>{provincia.descricao}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
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
          </div>
          <br />
          <div className="row">
            <div className="col-6">
              <div className="input-group">
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
            <div className="col-6">
              <div className="input-group">
                <TextField
                  id="confirpassword"
                  name="confirpassword"
                  placeholder="Senha "
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
          </div>
          <br />
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
        </form>
      </div>
    </div>
  );
};

export default RegisterShop;
