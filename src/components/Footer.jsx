import React from "react";

import '../styles/footer.css';

const Footer = () => {
    return(
        
       <footer className="footer">
          <div className="footer-contact">
              <div className="container-footer">
                  <div className="contact-form">
                      <div className="direction">
                          <h2>Dirección</h2>
                          <div className="direction-text">
                              <p>
                                  Jacinto Canek 15-A <br />
                                  Col. San Juan Ixhuatepec, C.P. 54180, <br />
                                  Tlalnepantla, Edo. de México. <br />
                                  <br />
                                  <strong>TELS.: </strong> (55) 4426-1914, (55) 4426-4362, <br /> (55) 4426-1034
                                  Y (55) 4426-3060 <br />
                                  <strong>Email: </strong> atencionaclientes@labteso.com
                              </p>
                              
                          </div>
                      </div>
                  </div>
                  <div className="google-map">
                  
                  </div>
              </div>
          </div>
          <div className="footer-container">
              © Copyright 2021 - Laboratorio Teso de México S.A. de C.V.<br />
              Todos los derechos reservados.
          </div>
      </footer>
    
    );
}

export default Footer;