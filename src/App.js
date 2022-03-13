import React from 'react';
import AppLayout from './components/AppLayout';
import { Routes, Route } from 'react-router-dom';
import 'tw-elements';

import { Home, About, Contact } from './views/App'


const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />

      </Routes>
    </AppLayout>
      );
};

export default App;