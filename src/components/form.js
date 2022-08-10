import { Container, Form, Row, Col  } from "react-bootstrap";
import { Mailbox } from 'react-bootstrap-icons';
import headerImg from "../assets/img/cc2.png";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from "react";
import Check from "./check";

const Contact = () => {

  const form = useRef();
  const [name, usename] = useState("");
  const [email, useemail] = useState("");
  const [text, usetext] = useState("");
  const [alertr, setAlertr] = useState(false);
  const [alertw, setAlertw] = useState(false);

  const updatename = (e)=>{
    usename(e.target.value);
  }
  const updateemail = (e)=>{
    useemail(e.target.value);
  }
  const updatetext = (e)=>{
    usetext(e.target.value);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8b2v2au', 'template_80vxrm8', form.current, 'IG76RBbNbbbQAdzPV')
      .then((result) => {
        setAlertr(true);
        setTimeout(()=>{
          setAlertr(false)},1000);
          usename("");
          useemail("");
          usetext("");
         
      }, (error) => {
        setAlertw(true);
        setTimeout(()=>{
          setAlertw(false)},1000);
          usename("");
          useemail("");
          usetext("");
         
      });
  };
  const transition = {duration:1,type:'spring'};

  const transition_varia = {
    hidden: {
      opacity:0
    },
    visible: {
      opacity:1,
      transition: {transition}
    },

    exit: {
      x: '100vw',
      transition :{
       ease: 'easeInOut'
      }
    }
  }

    return(
        <motion.section
        variants={transition_varia}
        initial= "hidden"
        animate = "visible"
        exit = "exit"
        className="banner" id="home">
          {alertr && <Check type="success"  msg = "Your message has been successfully received." />}
                  {alertw && <Check type="danger"  msg = "An error occured try again later." />}
                <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline mb-5">Let's Connect</span>
                    <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Tanjirou Kamado" name="user_name" required value={name} onChange={updatename}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"  >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="user_email" required value={email} onChange={updateemail} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" required value={text} onChange={updatetext}/>
      </Form.Group>
      <motion.button 
        initial = {{x:-50}}
        whileInView = {{x:20}}
        transition = {transition}
        className="p-2"
        type="submit">Let's Connect <Mailbox size={25} /></motion.button>
    </Form>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                    <div className="animate__animated animate__zoomIn ">
                       <img src={headerImg} alt="Header Img"/> 
                       </div>
                    </Col>
                </Row>
                </Container>
            </motion.section>
    );

}

export default Contact;
