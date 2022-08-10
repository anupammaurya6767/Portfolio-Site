import { Progress } from '@chakra-ui/react';
import { Heading } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { Tooltip } from '@chakra-ui/react';


const Badges = (props)=> {



return (
    <Tooltip hasArrow label={props.value} placement="auto-end" bg="orange">
    <motion.div 
    initial = {{x:-50}}
    whileInView = {{x:20}}
    transition = {{duration:2,type:'spring'}}
    className='m-4 p-4'>
    <Heading>{props.icon}{props.head}</Heading>
    <Progress value={props.value} size='md' colorScheme='orange' hasStripe isAnimated />
    </motion.div>
    </Tooltip>
);

}

export default Badges;