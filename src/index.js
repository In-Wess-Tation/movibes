import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './sites/Home';
import Detail from './sites/Detail';
import Movies from './sites/Movies';
import TvSeries from './sites/TvSeries';
import Upcoming from './sites/Upcoming';
import Logout from './sites/Logout';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />}/>
    <Route path="/detail" element={<Detail />}/>
    <Route path="/movies" element={<Movies />}/>
    <Route path="/tvSeries" element={<TvSeries />}/>
    <Route path="/upcoming" element={<Upcoming />}/>
    <Route path="/logout" element={<Logout />}/>

  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
