
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider as FrontendProvider } from 'react-redux'
import { Provider as AdminProvider } from 'react-redux'
import storeFE from './frontend/state/index.js'
import adminStore from './admin-kak/state/index.js'
import AdminApp from './AdminApp.jsx'
const isAdminApp = window.location.pathname.startsWith('/admin-ford');
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
     {isAdminApp ? (
      <AdminProvider store={adminStore}>
        <AdminApp />
      </AdminProvider>
    ) : (
      <FrontendProvider store={storeFE}>
        <App />
      </FrontendProvider>
    )}
  </StrictMode>,
)
