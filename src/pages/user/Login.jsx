import React, { useContext, useState } from 'react'
import * as messages from "../../components/message/toastr";
import {
    CircularProgress
} from "@mui/material";
import { AuthContext } from '../../contexts/Auth';


const Login = ({setOpen}) => {
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        email: "",
        senha: "",
    });

    const fecharModal = async ()=>{
        setOpen()
    }
    const handleChange = ({ currentTarget: input }) => {
        const { name, value } = input;
        setValues({ ...values, [name]: value });
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            login(values);
            fecharModal();
        } catch (error) {
            messages.mensagemErro(error, "Ocorreu um erro. Tente novamente!")
        } finally {
            setLoading(false);
        }
    };
    //
    return (
        <div>
            <div className="form-input-content">
                {/* <div className="card login-form mb-0"> */}
                <div >
                    <div className="card-body pt-5" style={{ textAlign: "center" }}>
                        <a className="text-center" href="#"> <h4>Biblioteca Online</h4></a>

                        <form className="mt-5 mb-5 login-input" onSubmit={handleLogin}>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email"
                                    name='email'
                                    // value={email}
                                    onChange={handleChange} />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"
                                    name="senha"
                                    // value={senha}
                                    onChange={handleChange} />
                            </div>
                            <br />
                            <button className="btn primary_btn w-100" style={{ color: "#fff" }}>
                                {loading ? (
                                    <CircularProgress size={24} sx={{ color: "#fff" }} />
                                ) : (
                                    "Entrar"
                                )}</button>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login