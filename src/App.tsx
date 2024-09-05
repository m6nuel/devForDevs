import { AuthProvider, useFirebaseApp } from 'reactfire'
import { Button } from './components/ui/button'
import { getAuth } from 'firebase/auth'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/router'

function App() {

  const app = useFirebaseApp()
  const auth = getAuth(app) //verifica si hay una seccion activa

  return (
    <AuthProvider sdk={auth} >
      <RouterProvider router={router}>

      </RouterProvider>
      <h1>Con auth provider</h1>     
      <Button>Click me!</Button>
    </AuthProvider>
  )
}

export default App
