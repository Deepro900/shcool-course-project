import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import Main from './Component/Header/Main';
import Course from './Component/Course/Course';
import About from './Component/About/About';
//import { productLoder } from './ProductLoder/ProductLoder';
//import { } from './ProductLoder/Prod uctLoder';


function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('school.json'),
          element: <Home></Home>
        },
        {
          path: '/course',
          //loader: productLoder,
          element: < Course ></Course >
        },
        {
          path: '/about',
          loader: () => fetch('school.json'),
          element: <About></About>
        }
      ]
    }

  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>



    </div>



  );
}

export default App;
