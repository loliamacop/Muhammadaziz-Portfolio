import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/main.scss'
import './i18n/index'
import { RouterProvider } from 'react-router-dom'
import { router } from "../src/routes/routes.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
)
