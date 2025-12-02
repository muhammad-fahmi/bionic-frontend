import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './normalize.css';
import router from './routes/route';

if (import.meta.env.MODE === 'development') {
  // dev code
  axios.defaults.baseURL = 'http://localhost:8080/';
} else {
  // production code
  axios.defaults.baseURL = 'https://bionic-natura.cloud/bionic-backend';
}


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
