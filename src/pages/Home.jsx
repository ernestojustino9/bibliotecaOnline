import React from "react";

import Header from "../components/layout/Header";
import Carrousel from "../components/carrousel/Carrousel";
import livro1 from "/src/assets//img/livro1.webp";
import livro2 from "/src/assets//img/livro2.png";
import livro3 from "/src/assets//img/livro3.jpg";
import livro4 from "/src/assets//img/livro4.jpg";
import livro5 from "/src/assets//img/livro6.jpg";
import livro6 from "/src/assets//img/livro7.webp";
import livro7 from "/src/assets//img/livro9.webp";
import livro10 from "/src/assets//img/livro10.webp";

const Home = () => {
  return (
    <div>
      <Header />
      <br />
      <Carrousel />
      <main id="main">
        <div class="mask d-flex align-items-center h-100"></div>
        <div class="container">
          <br />
          {/* <div class="row">
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Earnings (Monthly)
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        $40,000
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Earnings (Annual)
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        $215,000
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Tasks
                      </div>
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                            50%
                          </div>
                        </div>
                        <div class="col">
                          <div class="progress progress-sm mr-2">
                            <div
                              class="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Pending Requests
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        18
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/*  */}
          <div class="row" id="livros">
            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-header">
                  <img
                    src={livro1}
                    class="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
                <hr />
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      {/* <div class="text-xs font-weight-bold  text-uppercase mb-1">
                        <h6 class="font-weight-bold">Titulo: </h6>
                        <span class="text-primary">Biblioteca online</span>
                      </div> */}
                      {/* <!-- <div class="h5 mb-0 font-weight-bold text-gray-800"> --> */}
                      <div class="mb-0 font-weight-bold text-gray-800">
                        <h3>Autor: </h3>
                        <span> Ej-Develeper</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                      Ler
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 2 --> */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-header">
                  <img
                    src={livro2}
                    class="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
                <hr />
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      {/* <div class="text-xs font-weight-bold  text-uppercase mb-1">
                        <h6 class="font-weight-bold">Titulo: </h6>
                        <span class="text-primary">Biblioteca online</span>
                      </div> */}
                      {/* <!-- <div class="h5 mb-0 font-weight-bold text-gray-800"> --> */}
                      <div class="mb-0 font-weight-bold text-gray-800">
                        <h3>Autor: </h3>
                        <span> Ej-Develeper</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                      Ler
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 3 --> */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-header">
                  <img
                    src={livro3}
                    class="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
                <hr />
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      {/* <div class="text-xs font-weight-bold  text-uppercase mb-1">
                        <h6 class="font-weight-bold">Titulo: </h6>
                        <span class="text-primary">Biblioteca online</span>
                      </div> */}
                      {/* <!-- <div class="h5 mb-0 font-weight-bold text-gray-800"> --> */}
                      <div class="mb-0 font-weight-bold text-gray-800">
                        <h3>Autor: </h3>
                        <span> Ej-Develeper</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                      Ler
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  --> */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-header">
                  <img
                    src={livro4}
                    class="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
                <hr />
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold  text-uppercase mb-1">
                        <h6 class="font-weight-bold">Titulo: </h6>
                        <span class="text-primary">Biblioteca online</span>
                      </div>
                      {/* <!-- <div class="h5 mb-0 font-weight-bold text-gray-800"> --> */}
                      <div class="mb-0 font-weight-bold text-gray-800">
                        <h3>Autor: </h3>
                        <span> Ej-Develeper</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Outros */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-header">
                  <img
                    src={livro5}
                    class="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
                <hr />
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      {/* <div class="text-xs font-weight-bold  text-uppercase mb-1">
                        <h6 class="font-weight-bold">Titulo: </h6>
                        <span class="text-primary">Biblioteca online</span>
                      </div> */}
                      {/* <!-- <div class="h5 mb-0 font-weight-bold text-gray-800"> --> */}
                      <div class="mb-0 font-weight-bold text-gray-800">
                        <h3>Autor: </h3>
                        <span> Ej-Develeper</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                      Ler
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 2 --> */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-header">
                  <img
                    src={livro6}
                    class="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
                <hr />
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      {/* <div class="text-xs font-weight-bold  text-uppercase mb-1">
                        <h6 class="font-weight-bold">Titulo: </h6>
                        <span class="text-primary">Biblioteca online</span>
                      </div> */}
                      {/* <!-- <div class="h5 mb-0 font-weight-bold text-gray-800"> --> */}
                      <div class="mb-0 font-weight-bold text-gray-800">
                        <h3>Autor: </h3>
                        <span> Ej-Develeper</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                      Ler
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 3 --> */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-header">
                  <img
                    src={livro7}
                    class="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
                <hr />
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      {/* <div class="text-xs font-weight-bold  text-uppercase mb-1">
                        <h6 class="font-weight-bold">Titulo: </h6>
                        <span class="text-primary">Biblioteca online</span>
                      </div> */}
                      {/* <!-- <div class="h5 mb-0 font-weight-bold text-gray-800"> --> */}
                      <div class="mb-0 font-weight-bold text-gray-800">
                        <h3>Autor: </h3>
                        <span> Ej-Develeper</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                      Ler
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  --> */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-header">
                  <img
                    src={livro10}
                    class="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
                <hr />
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      {/* <div class="text-xs font-weight-bold  text-uppercase mb-1">
                        <h6 class="font-weight-bold">Titulo: </h6>
                        <span class="text-primary">Biblioteca online</span>
                      </div> */}
                      {/* <!-- <div class="h5 mb-0 font-weight-bold text-gray-800"> --> */}
                      <div class="mb-0 font-weight-bold text-gray-800">
                        <h3>Autor: </h3>
                        <span> Ej-Develeper</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                      Ler
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
