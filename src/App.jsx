import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { ResultPage } from "./pages/ResultPage"
import { Card } from "./components/Card"


function App() {

  const routes = createBrowserRouter([

    {path: '/', element: <HomePage />},
    {path:'/result', element: <ResultPage />}
  ])

  return (
    <>
      <RouterProvider router={routes} >
        <Card>
          
        </Card>
      </RouterProvider>
    </>
  )
}

export default App
