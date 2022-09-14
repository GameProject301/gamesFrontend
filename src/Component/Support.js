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
          <Form.Label className='fontLabel'>User name </Form.Label>
          <Form.Control className='boxSupp' type="text" placeholder="User" name='user_name' required />
          <Form.Label className='fontLabel'>Email address</Form.Label>
          <Form.Control className='boxSupp' type="email" placeholder="name@example.com" name='user_email' required />
          <Form.Label className='fontLabel'>subject</Form.Label>
          <Form.Control className='boxSupp' type="subject" placeholder="Subject" name='subject' required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='fontLabel' >enter your problem</Form.Label>
          <Form.Control as="textarea" rows={3} name='message' placeholder="describe your problem" className='boxSupp'/>
          <Button type='submit' className='button' variant="warning" >Send</Button>
        </Form.Group>
      </Form>
      <a href="https://www.facebook.com/Pro-player-Website-105079872354301" target='_blank' el='noreferrer noopener'
        className="facebookSocial"  rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="4x" color='black' />
      </a>
      <a href="https://www.instagram.com/proplayers99s/" target='_blank' el='noreferrer noopener' className="instagramSocial" rel='noreferrer'>
        <FontAwesomeIcon icon={faInstagram} size="4x" color='black' />
      </a>
      </>
    );
}
export default Support;