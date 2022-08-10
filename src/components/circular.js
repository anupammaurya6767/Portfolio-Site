import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Badges from "./badges";
import {Activity, EmojiSmile, Lightning, LightningCharge} from "react-bootstrap-icons";


const Banner = () => 
{


    const transition = {duration:2,type:'spring'};

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
        return (
          <motion.section
            variants={transition_varia}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="banner"
            id="home"
          >
            <Container>
              <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={7}>
                 <Badges head="React" value= "92" icon={<Activity size={25} />}/>
                  <Badges head="NodeJs" value= "85" icon={<Lightning size={25}/>}/>
                  <Badges head="ExpressJs" value= "88" icon={<LightningCharge size={25}/>}/>
                  <Badges head="MongoDb" value= "80" icon={<EmojiSmile size={25}/>}/>
                </Col>
                <Col xs={12} md={6} xl={5}></Col>
              </Row>
            </Container>
          </motion.section>
        );
    }
export default Banner;