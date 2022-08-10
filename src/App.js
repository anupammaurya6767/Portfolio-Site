import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/animatedRoutes';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  
  return (
    <ChakraProvider>
    <BrowserRouter>
    <NavBar />
    
    <AnimatedRoutes />
  </BrowserRouter>
  </ChakraProvider>
  );
}

export default App;
