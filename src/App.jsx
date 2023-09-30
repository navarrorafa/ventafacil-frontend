
import {TypeNav} from './components'
import { SearchProvider } from './context/SearchContext'
import { UserProvider } from './context/UserProvider'
import { AppRouter } from './routes/AppRouter'


function App() {


  return (
    <>
     <SearchProvider>
    <UserProvider>
     <header>
      <TypeNav/>
     </header>
     <main>
      <AppRouter/>
     </main>
     </UserProvider>
     </SearchProvider>
    </>
  )
}

export default App
