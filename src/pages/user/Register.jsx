import React, { useState } from 'react'
import * as Yup from "yup";
import {
    CircularProgress
} from "@mui/material";
import * as messages from "../../components/message/toastr";
import { registroSchema } from '../../components/validation/Schema';
import { createUser } from "../../service/UsuarioService";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Register = ({setOpen}) => {

    //SALVAR
    const [usuario, setUsuario] = useState({
        nome: "",
        sobrenome: "",
        nacionalidade: "",
        endereco: "",
        bilheteDeIdentidade: "",
        genero: "",
        dataDeNascimento: "",
        // telefone: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    const { nome, sobrenome, nacionalidade, endereco, bilheteDeIdentidade, genero, dataDeNascimento, email, senha, confirmarSenha } = usuario;
    const [telefone, setTelefone] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const fecharModal = async ()=>{
        setOpen()
    }

    const limpar = async() =>{
        setUsuario({
            nome: "",
            sobrenome: "",
            nacionalidade: "",
            endereco: "",
            bilheteDeIdentidade: "",
            genero: "",
            dataDeNascimento: "",
            telefone: "",
            email: "",
            senha: "",
            confirmarSenha: "",
        });
    }

    // 
    const handleChange = (e, errorMessage) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: errorMessage || "",
        }));
    };
    // 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const usuario = {
            nome, sobrenome, nacionalidade, endereco, bilheteDeIdentidade, genero, dataDeNascimento, telefone, email, senha, confirmarSenha
        };
        setLoading(true)
        try {
            registroSchema.validateSync(usuario, { abortEarly: false });
            const { data } = await createUser(usuario);
            if (data) {
                messages.mensagemSucesso("Conta criada com sucesso!");
                limpar()
                fecharModal()
            }
        } catch (error) {
        
            if (error instanceof Yup.ValidationError) {
                const validationErrors = {};
                error.inner.forEach((e) => {
                    validationErrors[e.path] = e.message;
                });
                setErrors(validationErrors);
            } else {
                const errorMessage = error.response?.data?.message || error.message;
                messages.mensagemErro(`${errorMessage}`);
                // messages.mensagemErro(`Ocorreu um erro. Tente novamente!: ${errorMessage}`);
                // toast.error(`Erro ao salvar funcionário: ${errorMessage}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="form-input-content">
                {/* <div className="card login-form mb-0"> */}
                <div >
                    <div className="card-body pt-5" style={{ textAlign: "center" }}>
                        <a className="text-center" href="#"> <h4>Biblioteca Online</h4></a>
                        {/*  */}
                        <form className="mt-5 mb-5 login-input" onSubmit={handleSubmit}>
                            <div class="container text-center">
                                <div class="row">
                                    <div class="col">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Nome"
                                            name='nome'
                                            value={nome}
                                            onChange={handleChange} />
                                        {errors.nome && (
                                            <div className="error-text">{errors.nome}</div>
                                        )}
                                    </div>
                                    <div class="col">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Sobrenome"
                                            name='sobrenome'
                                            value={sobrenome}
                                            onChange={handleChange} />
                                        {errors.sobrenome && (
                                            <div className="error-text">{errors.sobrenome}</div>
                                        )}
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Nacionalidade"
                                            name='nacionalidade'
                                            value={nacionalidade}
                                            onChange={handleChange} />
                                        {errors.nacionalidade && (
                                            <div className="error-text">{errors.nacionalidade}</div>
                                        )}
                                    </div>
                                    <div class="col">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Endereço"
                                            name='endereco'
                                            value={endereco}
                                            onChange={handleChange} />
                                        {errors.endereco && (
                                            <div className="error-text">{errors.endereco}</div>
                                        )}
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col">
                                        <input type="email"
                                            className="form-control"
                                            placeholder="Endereço"
                                            name='email'
                                            value={email}
                                            onChange={handleChange} />
                                        {errors.email && (
                                            <div className="error-text">{errors.email}</div>
                                        )}
                                    </div>
                                    <div class="col">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Bilhete De Identidade"
                                            name='bilheteDeIdentidade'
                                            value={bilheteDeIdentidade}
                                            onChange={handleChange} />
                                        {errors.bilheteDeIdentidade && (
                                            <div className="error-text">{errors.bilheteDeIdentidade}</div>
                                        )}
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                     <div class="col">
                                        <PhoneInput
                                            defaultCountry="ao"
                                            disableSearchIcon={true}
                                            disableDropdown={true}
                                                    inputStyle={{

                                                width: "100%",
                                                outline: "none",
                                            }}
                                            value={telefone}
                                            onChange={(telefone) => setTelefone(telefone)}
                                        />
                                        {errors.telefone && (
                                            <div className="error-text">{errors.telefone}</div>
                                        )}
                                    </div> 
                                    <div class="col">
                                    <select
                                        className="form-control"
                                        placeholder="Genero"
                                        name='genero'
                                        value={genero}
                                        onChange={handleChange}>
                                        <option value="">Selecionar</option>
                                        <option value="M">Masculino</option>
                                        <option value="F">Femenino</option>
                                    </select>
                                    {errors.genero && (
                                        <div className="error-text">{errors.genero}</div>
                                    )}
                                    </div>
                                </div>
                                <br />

                                <br />
                                <div class="row">
                                    <div class="col">
                                    <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Senha"
                                            name="senha"
                                            value={senha}
                                            onChange={handleChange} />
                                        {errors.senha && (
                                            <div className="error-text">{errors.senha}</div>
                                        )}
                                    </div>
                                    <div class="col">
                                    <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirmar a Senha"
                                            name="confirmarSenha"
                                            value={confirmarSenha}
                                            onChange={handleChange} />
                                        {errors.confirmarSenha && (
                                            <div className="error-text">{errors.confirmarSenha}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <button className="btn primary_btn w-100" style={{ color: "#fff" }}>
                                {loading ? (
                                    <CircularProgress size={24} sx={{ color: "#fff" }} />
                                ) : (
                                    "Criar conta"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register




