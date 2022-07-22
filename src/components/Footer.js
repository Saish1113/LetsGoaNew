import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {
  toast,
  ToastContainer
} from 'react-toastify';
import Axios from 'axios';
import {useState,useEffect} from 'react';

function Footer() {

  const [mail, setmail]=useState('');
  const [loginStatus, setLoginStatus] = useState("");
  const [serrmsg,setAErrmsg]=useState('');

  const handleSubmition=(e)=>{
    e.preventDefault();

    setAErrmsg("");

    register();
    // navigate('/Flight');
    document.getElementById('mail').value='';
    

 }

  const register = () => {
    Axios.post("http://localhost:3001/footer", {
        
        mail:mail,
  
       
        
     
     
      //password: passwordReg,
    }).then((response) => {
      console.log(response.data.message);
      //setLoginStatus({message: "Personal Details is successfull"});
      //console.log(loginStatus);
      if(response.data.message=="success"){
       toast.success('subscription is successfull');
       var id=document.getElementById("mail");
       id.innerHTML="";
  
       
      }
       else
       {
          toast.error("failure")
       }
    });
    // toast.success('subscription is successfull');
  };

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button  id="button1" onClick={handleSubmition} type="submit" style="color:red;">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <a href='/Mailer'>
            <h2>Contact Us</h2>
            <Link to='/'>Lets Goa Ltd.</Link>
            <Link to='/'>MCA Department,Goa University</Link>
            <Link to='/'>Email : <a>letsgoa@gmail.com</a></Link>
            <Link to='/'>Phone : 1234567890/0987654321</Link>
            </a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              LETS GOA
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/officialgoatourism'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/user/GoaTourismOfficial'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/TourismGoa'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.pinterest.com/tourismgoa'              
              target='_blank'
              aria-label='Pinterest'
            >
              <i class="fa-brands fa-pinterest"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
