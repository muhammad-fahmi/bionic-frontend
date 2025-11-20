import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './normalize.css';
import router from './routes/route';


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
