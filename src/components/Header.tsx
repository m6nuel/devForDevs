import { useAuth, useSigninCheck } from "reactfire"
import { Button } from "./ui/button"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const Header = () => {

  const auth = useAuth()
  const { status, data: signInCheckResult } = useSigninCheck() //verifica si hay session iniciada
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    navigate('/dashboard')
  }

  const handleLogout = async () => {
    await signOut(auth)
  }

  return (
    <div className="bg-gray-700 py-4">
      <div className="container flex items-center">
        <p className="text-white">ReactFire</p>
        <nav className="ml-auto">
          {
            status === 'loading' ? (
              <Button disabled>Loading...</Button>
            ) : signInCheckResult.signedIn ? (
              <Button className="bg-red-600 hover:bg-red-400" onClick={handleLogout}>Sign Out</Button>
            ) : (
              <Button onClick={handleGoogleSignIn}>Google Sign In</Button>

            )
          }
        </nav>        
      </div>

    </div>
  )
}
export default Header