/* eslint-disable no-unused-vars */
import {useRef} from 'react';
import "./supp.css";
import emailjs from '@emailjs/browser'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
const Support = () => {
    const form   = useRef();
    let sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs.sendForm('service_r39tcxi', 'template_narl90l', form.current, 'Px_RaJVw8pf2bLgDz')
          .then((result) => {
            alert("Your message has been sent successfully");
          }, (error) => {
              console.log(error.message);
          });
          e.target.reset();
       
      

      };


    return (
        <>
        <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User name </Form.Label>
          <Form.Control type="text" placeholder="User" name='user_name' required />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name='user_email' required />
          <Form.Label>subject</Form.Label>
          <Form.Control type="subject" placeholder="Subject" name='subject' required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>enter your problem</Form.Label>
          <Form.Control as="textarea" rows={3} name='message' />
          <Button type='submit' className='button' >Send</Button>
        </Form.Group>
      </Form>
      <a href="https://www.facebook.com/Pro-player-Website-105079872354301" target='_blank' el='noreferrer noopener'
    
        className="facebookSocial" el='noreferrer' rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="4x" />
      </a>
      <a href="https://www.instagram.com/proplayers99s/" target='_blank' el='noreferrer noopener' className="instagramSocial" rel='noreferrer'>
        <FontAwesomeIcon icon={faInstagram} size="4x" />
      </a>
      
      </>

      
       
    );
}
export default Support;


 // <section>
        //     <div className="container">
        //         <h2 className="--text-center">Support</h2>
        //         <form ref={form} onSubmit={sendEmail} className='formCont'>
        //             <input type="text" placeholder="Name" name='user_name' required/>
        //             <input type="email" placeholder="Email" name='user_email' required/>
        //             <input type="subject" placeholder="Subject" name='subject' required/>
        //             <textarea name='message' cols="30" rows="10" placeholder="enter your problem" ></textarea>
        //             <button type='submit' className='button' >Send</button>
        //         </form>
        //     </div>
        // </section>