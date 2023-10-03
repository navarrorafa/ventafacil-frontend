
import {TypeNav} from './components'
import { SearchProvider } from './context/SearchContext'
import { UserProvider } from './context/UserProvider'
import { AppRouter } from './routes/AppRouter'


function App() {


  return (
    <>
     <SearchProvider>
    <UserProvider>
     <header className="px-5 pb-4 bg-dark text-end">
      <TypeNav/>
     </header>
     <main className='text-dark text-center container my-5'>
      <AppRouter/>
     </main>
     <footer className="p-5 bg-dark d-flex justify-content-between"><p className='text-primary h2'>ventaFacilApp©</p><p className='text-primary'>TheBridgeSchool - Txema-Carlos-Rafael - Devs'23</p></footer>
     </UserProvider>
     </SearchProvider>
     
    </>
  )
}

export default App
