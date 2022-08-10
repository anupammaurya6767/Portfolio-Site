
import { motion } from "framer-motion";
const SmallDiv = (prop)=> {

     const transition = {duration:2,type:'spring'};

return (
 <motion.div className="banner-small"
 initial = {{x:-50}}
  whileInView = {{x:20}}
  transition = {transition}
 >
    <div>
        <img src={prop.img} alt="crown" />
    </div>
    <div>
      <strong>{prop.text}</strong>

    </div>
 </motion.div>

);

}

export default SmallDiv;