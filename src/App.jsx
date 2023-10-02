
import {TypeNav} from './components'
import { SearchProvider } from './context/SearchContext'
import { UserProvider } from './context/UserProvider'
import { AppRouter } from './routes/AppRouter'


function App() {


  return (
    <>
     <SearchProvider>
    <UserProvider>
     <header className="p-4 bg-dark text-end">
      <TypeNav/>
     </header>
     <main className='text-dark text-center container my-5'>
      <AppRouter/>
     </main>
     </UserProvider>
     </SearchProvider>
     
    </>
  )
}

export default App
