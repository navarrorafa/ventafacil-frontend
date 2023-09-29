
import {TypeNav} from './components'
import { UserProvider } from './context/UserProvider'
import { AppRouter } from './routes/AppRouter'


function App() {


  return (
    <>
    <UserProvider>
     <header>
      <TypeNav/>
     </header>
     <main>
      <AppRouter/>
     </main>
     </UserProvider>
    </>
  )
}

export default App
