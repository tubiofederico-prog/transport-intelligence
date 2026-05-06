import { Phone, MessageSquare, Navigation, CheckCircle, TrendingUp, Users } from 'lucide-react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  Cell,
} from 'recharts'
import Layout from '../components/layout/Layout'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import StatCard from '../components/ui/StatCard'
import Badge from '../components/ui/Badge'
import Table, { TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table'
import Avatar from '../components/ui/Avatar'
import {
  dailyActivityData,
  conversionFunnelData,
  operatorMetrics,
  getKPIs,
  alerts,
  recentMovements,
} from '../data/mockMetrics'

export default function Dashboard() {
  const kpis = getKPIs()
  const colors = ['#8b5cf6', '#6366f1', '#3b82f6', '#06b6d4']

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Resumen general de la operación</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            icon={Phone}
            title="Llamadas Realizadas"
            value={kpis.callsToday}
            subtitle="Hoy"
          />
          <StatCard
            icon={MessageSquare}
            title="Mensajes Enviados"
            value={kpis.messagestoday}
            subtitle="Hoy"
          />
          <StatCard
            icon={Navigation}
            title="Viajes Disponibles"
            value={kpis.availableTrips}
            subtitle="Sin asignar"
          />
          <StatCard
            icon={CheckCircle}
            title="Viajes Asignados"
            value={kpis.assignedTrips}
            subtitle="Este mes"
          />
          <StatCard
            icon={TrendingUp}
            title="Tasa de Conversión"
            value={`${kpis.conversionRate}%`}
            subtitle="Contactado → Asignado"
          />
          <StatCard
            icon={Users}
            title="Operadores Activos"
            value={kpis.activeOperators}
            subtitle="Conectados ahora"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Actividad Diaria</CardTitle>
              <CardDescription>Llamadas, mensajes y viajes de los últimos 7 días</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dailyActivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                  <Legend />
                  <Bar dataKey="calls" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="messages" fill="#6366f1" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="trips" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Embudo de Conversión</CardTitle>
              <CardDescription>Contactado a Asignado</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <FunnelChart margin={{ top: 20, right: 160, bottom: 20, left: 0 }}>
                  <Tooltip />
                  <Funnel dataKey="value" data={conversionFunnelData} fill="#8b5cf6">
                    {conversionFunnelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Funnel>
                </FunnelChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Últimos Movimientos</CardTitle>
              <CardDescription>Actividad reciente del equipo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMovements.map((movement) => (
                  <div key={movement.id} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                    <div className="w-2 h-2 rounded-full bg-violet-600 mt-2 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900">{movement.type}</p>
                      <p className="text-sm text-gray-600 mt-0.5">{movement.description}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span>{movement.user}</span>
                        <span>•</span>
                        <span>{movement.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alertas Operativas</CardTitle>
              <CardDescription>Eventos que requieren atención</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-3 rounded-lg border-l-4 ${
                      alert.type === 'critical'
                        ? 'bg-red-50 border-l-red-500'
                        : 'bg-yellow-50 border-l-yellow-500'
                    }`}
                  >
                    <p className="text-sm font-semibold text-gray-900">{alert.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{alert.description}</p>
                    <p className="text-xs text-gray-500 mt-2">{alert.timestamp}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Ranking de Operadores</CardTitle>
            <CardDescription>Métricas de desempeño</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operador</TableHead>
                  <TableHead className="text-right">Llamadas</TableHead>
                  <TableHead className="text-right">Mensajes</TableHead>
                  <TableHead className="text-right">Asignaciones</TableHead>
                  <TableHead className="text-right">Conversión</TableHead>
                  <TableHead className="text-right">Eficiencia</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {operatorMetrics.map((op, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar initials={op.name.split(' ').map(n => n[0]).join('')} name={op.name} />
                        <span className="font-medium text-gray-900">{op.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-gray-600">{op.calls}</TableCell>
                    <TableCell className="text-right text-gray-600">{op.messages}</TableCell>
                    <TableCell className="text-right text-gray-600">{op.assignments}</TableCell>
                    <TableCell className="text-right">
                      <span className="font-medium text-violet-600">{op.conversion}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge label={`${op.efficiency}`} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
