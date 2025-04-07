import { createContext, useEffect, useState } from "react";
import api from "../service/api";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { USER_KEY, TOKEN_KEY, entrar, sair } from "../service/auth";
import { createSession } from "../service/UsuarioService";
// import { Loading } from "../components/loading";
import * as messages from "../../src/components/message/toastr";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(true);
    // const router = useRouter();
    const navigate = useNavigate();

    useEffect(() => {
        const storageUser = Cookies.get(USER_KEY);
        const storageToken = Cookies.get(TOKEN_KEY);
        if (storageToken && storageUser) {
            setUser(JSON.parse(storageUser));
            api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;
        }
        setLoading(false);
    }, [status]);

    const login = async (dados) => {
        try {
            const { data } = await createSession(dados);
            //const user = jwtDecode(data.accessToken);
            const user = jwtDecode(data);
            // setUser(user);
            setUser(user.sub);
            console.log(user.sub);
            // console.log(user.nome);
            Cookies.set(USER_KEY, JSON.stringify(user));
            entrar(data);
            setStatus("Login successful");
            //
            messages.mensagemSucesso("Login com sucesso!");
            //
            // navigate("/formation");
        } catch (error) {
            messages.mensagemErro("Email ou senha incoreto...!");
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            sair();
            setUser(null);
            setStatus("");
        } catch (error) {
            messages.mensagemErro(error.message);
        }
        // navigate("/login")
    };

    // if (loading) return <Loading />;
    return (
        <AuthContext.Provider
            value={{ isAuthenticated: !!user, user, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// export default function useAuth() {
//   return useContext(AuthContext);
// }
