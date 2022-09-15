import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { MDBFooter, MDBContainer, MDBRipple } from "mdb-react-ui-kit";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div class="section" style={{ "background-color": "#1E1F29" }}>
          {/* <Container className='add'> */}
          <Row
            xs={3}
            md={6}
            style={{ display: "flex", gap: "70px", justifyContent: "center" }}
          >
            <Col md={2} xs={2} className="ms-4">
              <div class="footer" style={{ textAlign: "center" }}>
                <a href="https://store.steampowered.com/">
                  <img
                    src="https://cdn.boldfonts.com/wp-content/uploads/2020/11/Steam-Logo-Font.jpg"
                    className="steam2"
                  ></img>
                </a>
              </div>
            </Col>
            <Col xs={2} md={2} className="ms-4 ">
              <div class="footer">
                <a  href="https://www.twitch.tv/" > <img
                  src="https://tech3arabi.com/wp-content/uploads/2022/03/%D9%83%D9%8A%D9%81%D9%8A%D8%A9-%D8%AD%D8%B0%D9%81-%D8%AD%D8%B3%D8%A7%D8%A8%D9%83-%D8%B9%D9%84%D9%89-Twitch-%D8%A3%D9%88-%D8%AA%D8%B9%D8%B7%D9%8A%D9%84%D9%87-%D9%85%D8%A4%D9%82%D8%AA%D9%8B%D8%A7-%D9%81%D9%8A-%D8%AE%D8%B7%D9%88%D8%A7%D8%AA-%D8%A8%D8%B3%D9%8A%D8%B7%D8%A9.jpg"
                  className="steam2"
                ></img></a>
               
              </div>
            </Col>
            <Col xs={2} md={2} className="ms-4 ">
              <div class="footer">
                <a href="https://www.nvidia.com/en-us/"  > <img
                  className="steam2"
                  src="data:image/png;base64,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"
                ></img></a>
               
              </div>
            </Col>
          </Row>
          {/* </Container> */}
        </div>
        <div id="bottom-footer" class="section">
          <Container>
            <Row xs={1} md={4} className="g-4">
              <div class="col-md-12 text-center">
                <ul class="footer-payments">
                  <li>
                    <a href="https://github.com/GameProject301">
                      {" "}
                      <FontAwesomeIcon icon={faGithub} className="github" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/proplayers99s/">
                      {" "}
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/Pro-player-Website-105079872354301">
                      <FontAwesomeIcon icon={faFacebook} className="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-cc-discover"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-cc-amex"></i>
                    </a>
                  </li>
                </ul>
                <span class="copyright">
                  &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | made{" "}
                  <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://github.com/GameProject301" target="_blank">
                    ProPlayer team
                  </a>
                </span>
              </div>
            </Row>
          </Container>
        </div>
      </footer>
    );
  }
}
export default Footer;
