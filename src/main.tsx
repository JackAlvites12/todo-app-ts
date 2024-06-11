import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import 'boxicons'
import { TodoProvider } from './context/TodoProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
    </TodoProvider>
  </React.StrictMode>,
)
