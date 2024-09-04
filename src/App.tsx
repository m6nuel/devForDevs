import { AuthProvider, useFirebaseApp } from 'reactfire'
import { Button } from './components/ui/button'
import { getAuth } from 'firebase/auth'

function App() {

  const app = useFirebaseApp()
  const auth = getAuth(app)

  return (
    <AuthProvider sdk={auth} >
      <h1>Con auth provider</h1>     
      <Button>Click me!</Button>
    </AuthProvider>
  )
}

export default App
