import {useRef} from 'react';
import "./supp.css";
import emailjs from '@emailjs/browser'

const Support = () => {
    const form   = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r39tcxi', 'template_narl90l', form.current, 'Px_RaJVw8pf2bLgDz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
       
      

      };


    return (
        <section>
            <div className="container">
                <h2 className="--text-center">Support</h2>
                <form ref={form} onSubmit={sendEmail} className='formCont'>
                    <input type="text" placeholder="Name" name='user_name' required/>
                    <input type="email" placeholder="Email" name='user_email' required/>
                    <input type="subject" placeholder="Subject" name='subject' required/>
                    <textarea name='message' cols="30" rows="10" placeholder="enter your problem" ></textarea>
                    <button type='submit' className='button' >Send</button>
                </form>
            </div>
        </section>
    );
}
export default Support;

