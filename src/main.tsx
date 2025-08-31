import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/global.css'
import { AddBar } from './components/addBar'
import { Todo } from './components/todo'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

  <header className='fade-in'>
    <span className='flex flex-row items-base justify-center h-auto gap-4'>
      <h1 className="text-white fredoka-Font-200 text-6xl">To-do List</h1>
      <h4 className='text-white fredoka-font-100 text-4xl'>api</h4>
    </span>
  </header>

  {/* elements */}
  <AddBar/>
  <Todo/>
  </StrictMode>,
)
