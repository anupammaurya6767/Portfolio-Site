import Banner from './banner';
import {
  Routes,
  Route,
} from "react-router-dom";
import Contact from './form';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const AnimatedRoutes = () => {
    const location = useLocation();

    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Banner />}>
            </Route>
            <Route path='/contact' element={<Contact />}>
            </Route>
    </Routes>
    </AnimatePresence>
    );
}

export default AnimatedRoutes;