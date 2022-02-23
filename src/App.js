import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './utils/protectedRoute';
import { Login,Register } from './components';
import Home from './views/Home';
import {Dashboard,Pages,Groups,Course,Post, Event,Store,Cart,Messages,Notifications,Search} from './views/App'




const App = () => {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      {/* Application */}
      <Route exact path='/app' element={<ProtectedRoutes />}>
        <Route exact path='/app/overview' element={<Dashboard />} />
        <Route exact path='/app/page' element={<Pages />} />
        <Route exact path='/app/friends' element={<Groups />} />
        <Route exact path='/app/course' element={<Course />} />
        <Route exact path='/app/blog' element={<Post />} />
        <Route exact path='/app/store' element={<Store/>} />
        <Route exact path='/app/events' element={<Event />} />
        <Route exact path='/app/cart' element={<Cart />} />
        <Route exact path='/app/messages' element={<Messages />} />
        <Route exact path='/app/notifications' element={<Notifications />} />
        <Route exact path='/app/search' element={<Search />} />
      </Route>
    </Routes>
  );
};

export default App;