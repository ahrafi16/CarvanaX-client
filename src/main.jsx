import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './layouts/Home.jsx';
import AddCar from './Routes/AddCar.jsx';
import AllCars from './Routes/AllCars.jsx';
import CarDetails from './Routes/CarDetails.jsx';
import UpdateCar from './Routes/UpdateCar.jsx';
import AdminLogin from './Routes/Adminlogin.jsx';
import { AuthProvider } from './Components/Authcontext.jsx';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          loader: () => fetch('https://carvana-x-server.vercel.app/cars'),
          element: <Home />,
        },
        {
          path: "addcar",
          element: <AddCar />
        },
        {
          path: "allcars",
          loader: () => fetch('https://carvana-x-server.vercel.app/cars'),
          element: <AllCars />
        },
        {
          path: "allcars/:id",
          loader: ({ params }) => fetch(`https://carvana-x-server.vercel.app/cars/${params.id}`),
          element: <CarDetails />
        },
        {
          path: "updateCar/:id",
          loader: ({ params }) => fetch(`https://carvana-x-server.vercel.app/cars/${params.id}`),
          element: <UpdateCar />
        },
        {
          path: '/admin-login',
          element: <AdminLogin />,
        }
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    }
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);