import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/Auth";
import Swal from "sweetalert2";

const Header = () => {
  
  // const { isAuthenticated, logout, user } = useContext(AuthContext);
  // const logado = user?._id;
  // const navigate = useNavigate();
  
  // const rota = useLocation();

  // const [ativar, setAtivar] = useState('')
  // useEffect(() => {
  //   setAtivar(rota.pathname)
  // }, [rota])

  // const handleShowMenu = () => {
  //   const nav = document.getElementById("fundoAzulMenu");

  //   if (nav) {
  //     nav.classNameList.toggle("verMenuCima");
  //   }
  // };

  // const handleLogout = () => {
  //   Swal.fire({
  //     text: "Deseja sair?",
  //     showCancelButton: true,
  //     confirmButtonColor: "#9ba235",
  //     cancelButtonColor: "#b46739",
  //     confirmButtonText: "Sim",
  //     cancelButtonText: "Cancelar"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       logout();
  //       navigate("/")
  //     }
  //   })
  // }
  // 
  return (
    <div>
      <header>
        {/* <!-- ======= Header ======= --> */}
        <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block"
          style={{backgroundColor: "black", zIndex: "2000"}}>

          <div className="container-fluid">
            <a className="navbar-brand nav-link" target="_blank" href="https://mdbootstrap.com/docs/standard/">
              <strong>BL</strong>
            </a>
            <button className="navbar-toggler" type="button" data-mdb-collapse-init data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#intro">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                    target="_blank">Livros</a>
                </li>
                {/* <li className="nav-item">
              <a className="nav-link" href="https://mdbootstrap.com/docs/standard/" target="_blank">Solicitacao</a>
            </li> */}
              </ul>

              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                    target="_blank" />
                  <a className="nav-link" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i className="fab fa-youtube"></i>
                    Criar Conta
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- End Header --> */}
    </div>
  );
};

export default Header;
