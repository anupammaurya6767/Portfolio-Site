import headerImg from "../assets/img/bann.png";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import SmallDiv from "./small";
import thumb from '../assets/img/thumbup.png';
import crown from '../assets/img/crown.png';
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { LinkContainer } from "react-router-bootstrap";

const Banner = () => 
{

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
        x: '-100vw',
        transition :{
         ease: 'easeInOut'
        }
      }


    };
        return(
                <motion.section
                variants={transition_varia}
                initial= "hidden"
                animate = "visible"
                exit = "exit"


                className="banner" id="home">
                <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="animate__animated animate__fadeIn tagg">
                        <span className="tagline">Welcome to my Portfolio</span>
                        <span className="txt-rotater"><h1>{`Hi! I'm Anupam, `} <span className="txt-rotate"><span className="wrap">{
            <Typewriter
            options={{
              strings: [ "Web Developer", "Bots Developer"],
              autoStart: true,
              loop: true,
            }}
          />
                        }</span></span></h1></span>
                            <p>Hi! I am Anupam Maurya, a Full Stack Web Developer/designer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.

 I'm a Full Stack Web Developer having excellent knowledge of HTML, CSS, JavaScript, NodeJs, MongoDb, Bootstrap, Chakra UI.

Being a Full Stack Web Developer I also have good command in Web Designing and I can made you excellent designs in very less times. I'm a future software Engineer as well and hence have a good command in coding language JavaScript.

Wanna know something more about me, just click on the Let's Connect.</p>
                            <LinkContainer to="/contact"><motion.button 
                            className="p-2"
                             initial = {{x:-50}}
                             whileInView = {{x:20}}
                             transition = {transition}
                            onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></motion.button></LinkContainer>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                    <SmallDiv 
                    text="Web Development" img={crown}/>
                   <Row>
                    <Row>
                    <div className="animate__animated animate__zoomIn header-img">
                       <img src={headerImg} alt="Header Img"/> 
                   </div>
                   </Row>
                   <Row>
                    <Col>
                    <div></div>
                    </Col>
                    <Col>
                   <SmallDiv text="Machine Learning" img={thumb}/>
                   </Col>
                   </Row>
                        </Row>
                        
                    </Col>
                </Row>
                </Container>
            </motion.section>


        );
    }
export default Banner;