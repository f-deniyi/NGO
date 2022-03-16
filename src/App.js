import React from 'react';
import AppLayout from './components/AppLayout';
import 'tw-elements';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact } from './views/App'
import Projects from './views/App/Projects';


const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/projects' element={<Projects />} />
      </Routes>
    </AppLayout>
      );
};

export default App;