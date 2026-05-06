import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import Layout from '../components/layout/Layout'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import Table, { TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table'
import Badge from '../components/ui/Badge'
import {
  tripsPerDayData,
  providerPerformanceData,
  operatorMetrics,
  tripsByStatusData,
} from '../data/mockMetrics'

export default function Metricas() {
  const colors = ['#8b5cf6', '#6366f1', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b']

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Métricas</h1>
          <p className="text-gray-600 mt-1">Análisis y reportes de desempeño</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Viajes por Día</CardTitle>
              <CardDescription>Últimos 6 días</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={tripsPerDayData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                  <Line
                    type="monotone"
                    dataKey="trips"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    dot={{ fill: '#8b5cf6', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Viajes por Estado</CardTitle>
              <CardDescription>Distribución actual</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={tripsByStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name} (${(percentage * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {tripsByStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Performance por Proveedor</CardTitle>
            <CardDescription>Ranking de operación</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={providerPerformanceData} layout="vertical" margin={{ left: 150 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#9ca3af" />
                <YAxis dataKey="name" type="category" width={140} stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                <Bar dataKey="performance" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

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
                    <TableCell className="font-medium text-gray-900">{op.name}</TableCell>
                    <TableCell className="text-right text-gray-600">{op.calls}</TableCell>
                    <TableCell className="text-right text-gray-600">{op.messages}</TableCell>
                    <TableCell className="text-right text-gray-600">{op.assignments}</TableCell>
                    <TableCell className="text-right">
                      <span className="font-medium text-violet-600">{op.conversion}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-violet-600"
                            style={{ width: `${op.efficiency.replace('%', '')}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600">{op.efficiency}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Promedio de Llamadas</CardTitle>
              <CardDescription>Por operador</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-violet-600">
                {Math.round(operatorMetrics.reduce((a, b) => a + b.calls, 0) / operatorMetrics.length)}
              </p>
              <p className="text-sm text-gray-600 mt-2">Llamadas por operador por día</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Promedio de Mensajes</CardTitle>
              <CardDescription>Por operador</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">
                {Math.round(operatorMetrics.reduce((a, b) => a + b.messages, 0) / operatorMetrics.length)}
              </p>
              <p className="text-sm text-gray-600 mt-2">Mensajes por operador por día</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Promedio de Conversión</CardTitle>
              <CardDescription>General</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">
                {(
                  operatorMetrics.reduce(
                    (a, b) => a + parseFloat(b.conversion),
                    0
                  ) / operatorMetrics.length
                ).toFixed(1)}
                %
              </p>
              <p className="text-sm text-gray-600 mt-2">Tasa de conversión general</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
