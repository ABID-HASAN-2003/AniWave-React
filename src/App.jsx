import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import RouterLayout from './RouteLayout'
import Home from './Pages/Home'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouterLayout></RouterLayout>}>
        <Route index element={<Home/>}/>
      </Route>
    )
  )
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
