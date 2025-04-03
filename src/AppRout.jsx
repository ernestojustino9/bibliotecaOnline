import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import { AuthContext, AuthProvider } from "./contexts/Auth";

export function AppRout() {
  const Private = ({ children }) => {
    const { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
      return (
        // <div id="inicio-loader">
        //   <div className="loaderSpinner">Carregando</div>
        // </div>
        <div className="spinner is-animating"></div>
      );
    }

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <AuthProvider>
          <Routes>
            {/* Home Pege */}
            <Route exact path="/" element={<Home />} />
            {/* SERVICE PAGES */}
            {/* <Route exact path="/service" element={<Service />} />
            <Route exact path="/viewservice/:id" element={<ViewService />} /> */}
            {/* SHOP PAGES */}
            {/* <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/shops/:id" element={<Shop />} />
            <Route exact path="/viewshop/:id" element={<ViewShop />} />
            <Route
              exact
              path="/viewshopRegister/:id"
              element={<ViewShopRegister />}
            /> */}
            {/* FORMATION PAGES */}
            {/* <Route exact path="/formation" element={<Formation />} />
            <Route
              exact
              path="/inscricaoformation/:id"
              element={<Formation />}
            />
            <Route
              exact
              path="/viewformation/:id"
              element={<ViewFormation />}
            />
            <Route
              exact
              path="/viewFormationInscricao/:id"
              element={<ViewFormationInscricao />}
            /> */}
            {/* COMPROVATIVOS */}
            {/* <Route exact path="/comprovativos" element={<Comprovativos />} />
            <Route
              exact
              path="/relatorioComprovativo/:id"
              element={<RelatorioComprovativo />}
            />
            <Route
              exact
              path="/relatorioComprovativoCart/:id"
              element={<RelatorioComprovativoCart />}
            /> */}
            {/* PROJECTS PAGES */}
            {/* <Route
              exact
              path="/internos"
              element={<ProjectsInternos />}
            />
            <Route
              exact
              path="/viewprojectointerno/:id"
              element={<ViewProjectsInternos />}
            />
            <Route
              exact
              path="/externos"
              element={<ProjectsExternos />}
            />
            <Route
              exact
              path="/viewprojectoexternos/:id"
              element={<ViewProjectsExternos />}
            /> */}
            {/*  */}
            {/* <Route exact path="/tecnoBussiness" element={<TecnoBussiness />} /> */}
            {/* EVENTS PAGES */}
            {/* <Route exact path="/events/internos" element={<EventsInternos />} /> */}
            {/* <Route exact path="/events/externos" element={<EventsExternos />} /> */}
            {/* ABOUT PAGES */}
            {/* <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contacto />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/blogDeitails/:id" element={<BlogDeitails />} /> */}
            {/* Login */}
            {/* <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/registerShop" element={<RegisterShop />} /> */}
          </Routes>
        </AuthProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default AppRout;
