import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF,FaInstagram,FaLinkedin, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>

      <div>
      <h2>LogIn With</h2>
      <Button variant="outline-secondary" className='mb-2'> <FaGoogle /> Login with Google</Button>
      <Button variant="outline-success " className='mb-5'> <FaGithub />Login with Github</Button>
      </div>
      
        <div>
        <ListGroup>
 <ListGroup.Item> < FaFacebookF /> Facebook</ListGroup.Item>
 <ListGroup.Item> <FaTwitter />Tweeter</ListGroup.Item>
 <ListGroup.Item> <FaInstagram />Instagram</ListGroup.Item>
 <ListGroup.Item> <FaLinkedin />Linked In</ListGroup.Item>
 
</ListGroup>
   
   </div>
<Qzone></Qzone>

<div><img src={bg} alt="" /></div>

    </div>

    
  );
};

export default RightNav;