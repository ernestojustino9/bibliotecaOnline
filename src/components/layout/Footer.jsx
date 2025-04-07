import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!-- ======= Footer ======= --> */}
      {/* <footer className="bg-dark text-lg-start"  style={{backgroundColor: "black"}}> */}
      <footer className="bg-dark text-lg-start">
        {/* <hr className="m-0" />
        <div className="text-center py-4 align-items-center">
          <p>Follow MDB on social media</p>
          <a href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" className="btn btn-primary m-1" role="button"
            data-mdb-ripple-init rel="nofollow" target="_blank">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.facebook.com/mdbootstrap" className="btn btn-primary m-1" role="button" rel="nofollow"
            data-mdb-ripple-init target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/MDBootstrap" className="btn btn-primary m-1" role="button" rel="nofollow"
            data-mdb-ripple-init target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/mdbootstrap/mdb-ui-kit" className="btn btn-primary m-1" role="button" rel="nofollow"
            data-mdb-ripple-init target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div> */}
        {/* <div className="text-center p-3 navbar-blue" style={{backgroundColor: "black"}} > */}
        <div
          className="text-center p-3 navbar-blue"
          style={{ color: "#fff", fontWeight: "bold" }}
        >
          © 2025
          <a className="text-dark" href="https://www.facebook.com/ejdeveloper">
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              {" "}
              EJ-Developer
            </span>
          </a>
        </div>
      </footer>
      {/*  */}
    </div>
  );
};

export default Footer;
