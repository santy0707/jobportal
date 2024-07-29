import React from 'react'
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
 } from "react-router-dom";
import HomePage from './Pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import AddJob from './Pages/AddJob';
import NotFound from './Pages/NotFound';

const router = createBrowserRouter(
      createRoutesFromElements (
          <Route path='/' element={<MainLayout/>} > 
              <Route index element={<HomePage />} />
              <Route path='/jobs' element={<JobsPage />} />
              <Route path='/add-job' element={<AddJob />} />
              <Route path='*' element={<NotFound />} />
          </Route>
      )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
