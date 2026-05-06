import { Download, FileText } from 'lucide-react'
import Layout from '../components/layout/Layout'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Table, { TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table'
import { reports } from '../data/mockMetrics'

export default function Reportes() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reportes</h1>
          <p className="text-gray-600 mt-1">Generación y exportación de reportes</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Tipos de Reportes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map((report) => (
              <Card key={report.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-3 bg-violet-100 rounded-lg">
                      <FileText className="w-5 h-5 text-violet-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{report.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{report.frequency}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{report.description}</p>

                  <div className="text-xs text-gray-500 mb-4">
                    Última generación: {report.lastGenerated}
                  </div>

                  <Button variant="primary" size="sm" className="w-full">
                    Generar Ahora
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
            <CardDescription>Personaliza el rango de datos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Desde</label>
                <input
                  type="date"
                  defaultValue="2024-05-01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hasta</label>
                <input
                  type="date"
                  defaultValue="2024-05-06"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Operador</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-400">
                  <option>Todos</option>
                  <option>Alfredo Barraza</option>
                  <option>Laura Méndez</option>
                  <option>Carlos Ruiz</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Equipo</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-400">
                  <option>Todos</option>
                  <option>Contratación</option>
                  <option>Supervisión</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reportes Recientes</CardTitle>
            <CardDescription>Últimos reportes generados</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Periodo</TableHead>
                  <TableHead>Generado Por</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead className="text-right">Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium text-gray-900">{report.name}</TableCell>
                    <TableCell>
                      <Badge label={report.frequency} />
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {report.lastGenerated.split(' ')[0]}
                    </TableCell>
                    <TableCell className="text-gray-600">Sistema</TableCell>
                    <TableCell className="text-gray-600">{report.lastGenerated}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center gap-2 justify-end">
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <select className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:border-violet-400">
                          <option>PDF</option>
                          <option>Excel</option>
                          <option>CSV</option>
                        </select>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Exportar Datos</CardTitle>
            <CardDescription>Descarga datos en diferentes formatos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-violet-400 transition-colors cursor-pointer">
                <div className="inline-block p-3 bg-blue-100 rounded-lg mb-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Exportar a Excel</h3>
                <p className="text-xs text-gray-600 mb-3">Formato .xlsx con todos los datos</p>
                <Button variant="ghost" size="sm">
                  Descargar
                </Button>
              </div>

              <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-violet-400 transition-colors cursor-pointer">
                <div className="inline-block p-3 bg-green-100 rounded-lg mb-3">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Exportar a CSV</h3>
                <p className="text-xs text-gray-600 mb-3">Formato .csv compatible con cualquier editor</p>
                <Button variant="ghost" size="sm">
                  Descargar
                </Button>
              </div>

              <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-violet-400 transition-colors cursor-pointer">
                <div className="inline-block p-3 bg-red-100 rounded-lg mb-3">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Exportar a PDF</h3>
                <p className="text-xs text-gray-600 mb-3">Reporte formateado y listo para imprimir</p>
                <Button variant="ghost" size="sm">
                  Descargar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
