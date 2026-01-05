import Layout from './pages/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Privacy, Terms } from './components/TermsPolicy';
import Missing from './pages/Missing';
import Contact from './pages/Contact';

function App() {
  return (
      <Routes>
        <Route path='/*' element={<Layout/>}>
          <Route index element={<Home />}/> 
          <Route path='contact' element={<Contact />}/>
          <Route path='about' element={<About />}/>
          <Route path='privacy' element={<Privacy />}/>
          <Route path='terms' element={<Terms />}/>
          <Route path='*' element={<Missing />}/>
        </Route>
      </Routes>   
  );
}

export default App;
