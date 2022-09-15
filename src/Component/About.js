import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
  import { faFacebook,faInstagram,faGithub} from "@fortawesome/free-brands-svg-icons"
class About extends React.Component{
    render(){
  return (
    <>
    <div class="section">
    <div class="container">
      <div class="row text-left mb-5">
        <div class="col-12">
          <h1 class="font-weight-bold heading text-primary mb-4">About Us</h1>
        </div>
        <div class="col-lg-12">
          <p class="text-50" style={{color:"white"}}>
          ProPlayer is the largest video game database and game discovery service. And we are gladly sharing our 500,000+ games, search, and machine learning recommendations with the world
          500,000+ games for all of platforms including mobiles.
          </p>
       
        </div>
      </div>
    </div>
  </div>
 <hr style={{color:"white"}}/>
<div class="container-xxl py-6">
            <div class="container">
                <div class="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{"max-width": '600px'}}>
                    <div class="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Team</div>
                    <h2 class="mb-5">Meet Our Team Members</h2>
                </div>
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item">
                            <h5>Alaa abualadoos</h5>
                            <p class="mb-4">full stack developer</p>
                            <img class="img-fluid rounded-circle w-100 mb-4" src="https://avatars.githubusercontent.com/u/70916159?v=4" alt=""/>
                            <div class="d-flex justify-content-center">
                            <a class="btn btn-square text-primary bg-white m-1" href=""> <FontAwesomeIcon icon={faGithub}  className="githb" /></a>
                                <a class="btn btn-square text-primary bg-white m-1" href="https://www.instagram.com/3lo0sh_00/"><FontAwesomeIcon icon={faInstagram} className="githb"/></a>
                                <a class="btn btn-square text-primary bg-white m-1" href=""><FontAwesomeIcon icon={faFacebook} className="githb"/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item">
                            <h5>Abdallah Mosa</h5>
                            <p class="mb-4">full stack developer</p>
                            <img class="img-fluid rounded-circle w-100 mb-4" src="https://avatars.githubusercontent.com/u/109727654?v=4" alt=""/>
                            <div class="d-flex justify-content-center">
                                <a class="btn btn-square text-primary bg-white m-1" href="https://github.com/AbdallahMosa"> <FontAwesomeIcon icon={faGithub}  className="githb" /></a>
                                <a class="btn btn-square text-primary bg-white m-1" href=""><FontAwesomeIcon icon={faInstagram} className="githb"/></a>
                                <a class="btn btn-square text-primary bg-white m-1" href=""><FontAwesomeIcon icon={faFacebook} className="githb"/></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item">
                            <h5>Ashar almomani</h5>
                            <p class="mb-4">full stack developer</p>
                            <img class="img-fluid rounded-circle w-100 mb-4" src="https://avatars.githubusercontent.com/u/109731916?v=4" alt=""/>
                            <div class="d-flex justify-content-center">
                            <a class="btn btn-square text-primary bg-white m-1" href="https://github.com/Ashar121299"> <FontAwesomeIcon icon={faGithub}  className="githb" /></a>
                                <a class="btn btn-square text-primary bg-white m-1" href=""><FontAwesomeIcon icon={faInstagram} className="githb"/></a>
                                <a class="btn btn-square text-primary bg-white m-1" href=""><FontAwesomeIcon icon={faFacebook} className="githb"/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" >
                        <div class="team-item">
                            <h5>Bashar Tefah</h5>
                            <p class="mb-4">full stack developer</p>
                            <img class="img-fluid rounded-circle w-100 mb-4" src="https://avatars.githubusercontent.com/u/82683829?v=4" alt=""/>
                            <div class="d-flex justify-content-center">
                            <a class="btn btn-square text-primary bg-white m-1" href=""> <FontAwesomeIcon icon={faGithub}  className="githb" /></a>
                                <a class="btn btn-square text-primary bg-white m-1" href=""><FontAwesomeIcon icon={faInstagram} className="githb"/></a>
                                <a class="btn btn-square text-primary bg-white m-1" href=""><FontAwesomeIcon icon={faFacebook} className="githb"/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" >
                        <div class="team-item">
                            <h5>Ismail Al amir</h5>
                            <p class="mb-4">full stack developer</p>
                            <img class="img-fluid rounded-circle w-100 mb-4" src="https://avatars.githubusercontent.com/u/109903994?v=4" alt=""/>
                            <div class="d-flex justify-content-center">
                            <a class="btn btn-square text-primary bg-white m-1" href="https://github.com/IsmailAlamir"> <FontAwesomeIcon icon={faGithub}  className="githb" /></a>
                                <a class="btn btn-square text-primary bg-white m-1" href=""><FontAwesomeIcon icon={faInstagram} className="githb"/></a>
                                <a class="btn btn-square text-primary bg-white m-1" href=""><FontAwesomeIcon icon={faFacebook} className="githb"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
  );
    }

}
export default About ;