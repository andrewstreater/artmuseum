import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GalleryNavigation from './components/GalleryNavigation';
import harvardArt from './data/harvardArt'

const router = createBrowserRouter([
  {
    path: 'galleries',
    element: <GalleryNavigation galleries={harvardArt.records}/>
  },
{
  path:'/',
  element:
   <>
  <h2>Harvard Art Museum</h2>
  <p>Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.</p>
  </>
},
    {
      path: '*',
      element: <h2>Page Not Found</h2>
    }
])

function App() {
  return(
  <div>
    <RouterProvider router={router} />
  </div>
  )

}

export default App;
