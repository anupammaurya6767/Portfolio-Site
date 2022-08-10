import { motion } from "framer-motion";
import { Container } from "react-bootstrap";


const Skills = () => {

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
    }

  return (
    <motion.section
    variants={transition_varia}
    initial= "hidden"
    animate = "visible"
    exit = "exit"


    className="banner" id="home">
    <Container>
    </Container>
</motion.section>
  );

}

export default Skills;