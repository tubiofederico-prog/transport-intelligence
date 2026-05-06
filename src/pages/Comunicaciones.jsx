import { useState } from 'react'
import { Play, Pause } from 'lucide-react'
import Layout from '../components/layout/Layout'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Table, { TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table'
import Modal from '../components/ui/Modal'
import { communications } from '../data/mockData'

export default function Comunicaciones() {
  const [selectedComm, setSelectedComm] = useState(null)
  const [filters, setFilters] = useState({
    type: 'Todos',
    status: 'Todos',
  })

  const filtered = communications.filter(
    (c) =>
      (filters.type === 'Todos' || c.type === filters.type) &&
      (filters.status === 'Todos' || c.status === filters.status)
  )

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Comunicaciones</h1>
          <p className="text-gray-600 mt-1">Gestión de llamadas y mensajes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Registro de Comunicaciones</CardTitle>
              <CardDescription>Llamadas y WhatsApp</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-400"
                >
                  <option>Todos</option>
                  <option>Llamada</option>
                  <option>WhatsApp</option>
                </select>
                <select
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-400"
                >
                  <option>Todos</option>
                  <option>Completado</option>
                  <option>Pendiente</option>
                  <option>Sin respuesta</option>
                </select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Proveedor</TableHead>
                    <TableHead>Usuario</TableHead>
                    <TableHead>Fecha/Hora</TableHead>
                    <TableHead>Resultado</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((comm) => (
                    <TableRow key={comm.id}>
                      <TableCell>
                        <Badge label={comm.type} />
                      </TableCell>
                      <TableCell className="font-medium text-gray-900">{comm.provider}</TableCell>
                      <TableCell className="text-gray-600">{comm.user}</TableCell>
                      <TableCell className="text-gray-600">{comm.date}</TableCell>
                      <TableCell>
                        <span className="text-sm text-gray-700">{comm.result}</span>
                      </TableCell>
                      <TableCell>
                        <Badge label={comm.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedComm(comm)}
                        >
                          Ver detalle
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estadísticas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-violet-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Total comunicaciones</p>
                  <p className="text-2xl font-bold text-violet-600">{communications.length}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Completadas</p>
                  <p className="text-2xl font-bold text-green-600">
                    {communications.filter((c) => c.status === 'Completado').length}
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Pendientes</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {communications.filter((c) => c.status === 'Pendiente').length}
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Tasa de éxito</p>
                  <p className="text-2xl font-bold text-blue-600">78%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Modal
        isOpen={!!selectedComm}
        onClose={() => setSelectedComm(null)}
        title={`Detalle - ${selectedComm?.provider}`}
        size="lg"
      >
        {selectedComm && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Tipo</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{selectedComm.type}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Contacto</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{selectedComm.contact}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Teléfono</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{selectedComm.phone}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Operador</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{selectedComm.user}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Transcripción</p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedComm.transcription || 'Sin transcripción disponible'}
                </p>
              </div>
            </div>

            {selectedComm.type === 'Llamada' && (
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Audio</p>
                <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <button className="p-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors">
                    <Play className="w-4 h-4" />
                  </button>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{selectedComm.duration}</p>
                    <div className="w-full h-1 bg-gray-300 rounded mt-2" />
                  </div>
                  <span className="text-xs text-gray-600">{selectedComm.duration}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Resultado</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{selectedComm.result}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Estado</p>
                <Badge label={selectedComm.status} />
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Etiquetas</p>
              <div className="flex flex-wrap gap-2">
                {selectedComm.tags.map((tag, idx) => (
                  <Badge key={idx} label={tag} />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Notas</p>
              <p className="text-sm text-gray-700 mt-1">{selectedComm.notes}</p>
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  )
}
