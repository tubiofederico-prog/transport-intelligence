import { Link, useLocation } from 'react-router-dom'
import {
  BarChart3,
  MessageSquare,
  Brain,
  Truck,
  Route,
  Zap,
  TrendingUp,
  Eye,
  Users,
  FileText,
} from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', path: '/', icon: BarChart3 },
  { name: 'Comunicaciones', path: '/comunicaciones', icon: MessageSquare },
  { name: 'Análisis IA', path: '/analisis-ia', icon: Brain },
  { name: 'Proveedores', path: '/proveedores', icon: Truck },
  { name: 'Viajes', path: '/viajes', icon: Route },
  { name: 'Automatizaciones', path: '/automatizaciones', icon: Zap },
  { name: 'Métricas', path: '/metricas', icon: TrendingUp },
  { name: 'Supervisión', path: '/supervision', icon: Eye },
  { name: 'Usuarios', path: '/usuarios', icon: Users },
  { name: 'Reportes', path: '/reportes', icon: FileText },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-tight">Transport Intelligence</h1>
        <p className="text-xs text-gray-400 mt-1">Plataforma de Gestión</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-violet-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 text-gray-200">
          <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-xs font-bold">
            AB
          </div>
          <div className="text-xs">
            <p className="font-medium">Alfredo B.</p>
            <p className="text-gray-400">Supervisor</p>
          </div>
        </div>
      </div>
    </div>
  )
}
