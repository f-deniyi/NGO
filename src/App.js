import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'tw-elements';
import { Home} from './views/App'


const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
  );
};

export default App;