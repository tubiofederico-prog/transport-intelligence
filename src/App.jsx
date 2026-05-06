import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Comunicaciones from './pages/Comunicaciones'
import AnalisisIA from './pages/AnalisisIA'
import Proveedores from './pages/Proveedores'
import Viajes from './pages/Viajes'
import Automatizaciones from './pages/Automatizaciones'
import Metricas from './pages/Metricas'
import Supervision from './pages/Supervision'
import Usuarios from './pages/Usuarios'
import Reportes from './pages/Reportes'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/comunicaciones" element={<Comunicaciones />} />
        <Route path="/analisis-ia" element={<AnalisisIA />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/viajes" element={<Viajes />} />
        <Route path="/automatizaciones" element={<Automatizaciones />} />
        <Route path="/metricas" element={<Metricas />} />
        <Route path="/supervision" element={<Supervision />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </Router>
  )
}
