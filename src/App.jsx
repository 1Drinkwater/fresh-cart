import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LayOut from './components/LayOut/LayOut';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import NotFound from './components/NotFound/NotFound';



function App() {
  const [count, setCount] = useState(0)
  const Routes = createBrowserRouter([
    {path:'', element:<LayOut/> ,children:[
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'cart',element:<Cart/>},
      {path:'about',element:<About/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'categories',element:<Categories/>},
      {path:'brands',element:<Brands/>},
      {path:'*',element:<NotFound/>},
    ]}
  ])
  return (
    <>
      <RouterProvider router={Routes}></RouterProvider>
    </>
  )
}

export default App
