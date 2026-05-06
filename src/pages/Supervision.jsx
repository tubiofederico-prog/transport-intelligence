import { Activity, AlertCircle } from 'lucide-react'
import Layout from '../components/layout/Layout'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Avatar from '../components/ui/Avatar'
import { users } from '../data/mockData'

const statusColor = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-800',
  'on-call': 'bg-blue-100 text-blue-800',
}

export default function Supervision() {
  const activeUsers = users.filter((u) => u.status === 'active')
  const inactiveUsers = users.filter((u) => u.status === 'inactive')

  const mockStatuses = {
    1: 'Activo',
    2: 'En llamada',
    3: 'Activo',
    4: 'Sin actividad',
    5: 'Gestionando viaje',
  }

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Supervisión del Equipo</h1>
          <p className="text-gray-600 mt-1">Control en tiempo real de operadores</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Operadores Activos</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">{activeUsers.length}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Inactivos</p>
                  <p className="text-3xl font-bold text-yellow-600 mt-2">{inactiveUsers.length}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total Operadores</p>
                  <p className="text-3xl font-bold text-blue-600 mt-2">{users.length}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Control Tower - Estado en Tiempo Real</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => {
              const status = mockStatuses[user.id]
              const statusBadgeLabel =
                status === 'Activo'
                  ? 'Activo'
                  : status === 'En llamada'
                  ? 'En llamada'
                  : status === 'Sin actividad'
                  ? 'Inactivo'
                  : 'Gestionando'

              return (
                <Card key={user.id}>
                  <div className="pb-4 border-b border-gray-200 mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar initials={user.avatar} name={user.name} size="md" />
                      <div>
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-600">{user.role}</p>
                      </div>
                    </div>
                    <Badge
                      label={user.status === 'active' ? 'En línea' : 'Offline'}
                      variant={user.status === 'active' ? 'success' : 'default'}
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500 uppercase font-semibold">Estado</p>
                      <Badge label={statusBadgeLabel} />
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500 uppercase font-semibold">Llamadas (hoy)</p>
                      <p className="text-sm font-bold text-violet-600">{user.calls}</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500 uppercase font-semibold">Mensajes (hoy)</p>
                      <p className="text-sm font-bold text-blue-600">{user.messages}</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500 uppercase font-semibold">Conversión</p>
                      <p className="text-sm font-bold text-green-600">{user.conversions}</p>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500 uppercase font-semibold">Último evento</p>
                      <p className="text-xs text-gray-600">{user.lastSeen}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Alertas de Supervisión</CardTitle>
            <CardDescription>Eventos que requieren atención</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 bg-yellow-50 border-l-4 border-l-yellow-500 rounded">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-yellow-900">Baja actividad en Mariana Torres</p>
                    <p className="text-xs text-yellow-800 mt-1">0 llamadas y 0 mensajes en las últimas 4 horas</p>
                  </div>
                  <span className="text-xs text-yellow-600 font-medium">Ahora</span>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-l-yellow-500 rounded">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-yellow-900">Carlos Ruiz sin actividad</p>
                    <p className="text-xs text-yellow-800 mt-1">Último evento hace 12 minutos</p>
                  </div>
                  <span className="text-xs text-yellow-600 font-medium">Hace 1 min</span>
                </div>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-l-green-500 rounded">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-green-900">Juan Pérez - Actividad normal</p>
                    <p className="text-xs text-green-800 mt-1">50 llamadas y 145 mensajes en el día</p>
                  </div>
                  <span className="text-xs text-green-600 font-medium">Activo</span>
                </div>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-l-green-500 rounded">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-green-900">Alfredo Barraza - Cumpliendo objetivos</p>
                    <p className="text-xs text-green-800 mt-1">45 llamadas, conversión 8.2%, tasa de eficiencia 92%</p>
                  </div>
                  <span className="text-xs text-green-600 font-medium">Activo</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Historial de Actividad por Operador</CardTitle>
            <CardDescription>Últimas 24 horas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.slice(0, 3).map((user) => (
                <div key={user.id} className="flex items-center gap-4">
                  <Avatar initials={user.avatar} name={user.name} size="sm" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <span className="text-xs text-gray-600">{user.lastSeen}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-violet-600"
                        style={{ width: `${(user.calls / 50) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
