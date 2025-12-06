import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import './styles/tailwind.css';

function AppLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/',
        element: <Body></Body>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu></RestaurantMenu>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
