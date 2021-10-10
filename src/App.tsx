import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from './contexts/AuthContext'
import { ConfirmDialogProvider } from './contexts/ConfirmDialogContext'
import { Routes } from './routes'
import { GlobalTheme } from './styles/GlobalTheme'

export default function App() {
  return (
    <BrowserRouter>
      <ConfirmDialogProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ConfirmDialogProvider>
      
      <GlobalTheme />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  )
}