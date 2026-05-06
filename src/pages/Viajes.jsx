import { useState } from 'react'
import Layout from '../components/layout/Layout'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Table, { TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table'
import Modal from '../components/ui/Modal'
import { trips } from '../data/mockData'

export default function Viajes() {
  const [selectedTrip, setSelectedTrip] = useState(null)
  const [filters, setFilters] = useState({
    status: 'Todos',
    priority: 'Todos',
  })

  const filtered = trips.filter(
    (t) =>
      (filters.status === 'Todos' || t.status === filters.status) &&
      (filters.priority === 'Todos' || t.priority === filters.priority)
  )

  const urgentTrips = filtered.filter((t) => t.priority === 'Urgente')

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Viajes</h1>
          <p className="text-gray-600 mt-1">Gestión de viajes disponibles</p>
        </div>

        {urgentTrips.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">Viajes Urgentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {urgentTrips.map((trip) => (
                <Card key={trip.id} className="border-l-4 border-l-red-500 cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedTrip(trip)}>
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm text-gray-600 font-medium">{trip.id}</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">{trip.origin} → {trip.destination}</p>
                      </div>
                      <Badge label="Urgente" />
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{trip.cargo}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Vence: {trip.deadline}</span>
                      {trip.provider ? (
                        <Badge label={trip.status} />
                      ) : (
                        <span className="text-red-600 font-semibold">Sin asignar</span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Todos los Viajes</CardTitle>
            <CardDescription>Gestión completa de viajes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 mb-4">
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-400"
              >
                <option>Todos</option>
                <option>Asignado</option>
                <option>Pendiente</option>
                <option>En negociación</option>
              </select>
              <select
                value={filters.priority}
                onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-400"
              >
                <option>Todos</option>
                <option>Urgente</option>
                <option>Alta</option>
                <option>Media</option>
              </select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Origen - Destino</TableHead>
                  <TableHead>Cargo</TableHead>
                  <TableHead>Proveedor</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Prioridad</TableHead>
                  <TableHead>Vencimiento</TableHead>
                  <TableHead className="text-right">Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((trip) => (
                  <TableRow key={trip.id}>
                    <TableCell className="font-mono text-sm text-gray-600">{trip.id}</TableCell>
                    <TableCell className="text-gray-900 font-medium">{trip.origin} → {trip.destination}</TableCell>
                    <TableCell className="text-gray-600">{trip.cargo}</TableCell>
                    <TableCell className="text-gray-600">{trip.provider || '-'}</TableCell>
                    <TableCell>
                      <Badge label={trip.status} />
                    </TableCell>
                    <TableCell>
                      <Badge
                        label={trip.priority}
                        variant={
                          trip.priority === 'Urgente'
                            ? 'danger'
                            : trip.priority === 'Alta'
                            ? 'warning'
                            : 'default'
                        }
                      />
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm">{trip.deadline}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedTrip(trip)}
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
      </div>

      <Modal
        isOpen={!!selectedTrip}
        onClose={() => setSelectedTrip(null)}
        title={`Viaje ${selectedTrip?.id}`}
        size="xl"
      >
        {selectedTrip && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-semibold">Origen</p>
                <p className="text-sm font-medium text-gray-900 mt-2">{selectedTrip.origin}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-semibold">Destino</p>
                <p className="text-sm font-medium text-gray-900 mt-2">{selectedTrip.destination}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-semibold">Cargo</p>
                <p className="text-sm font-medium text-gray-900 mt-2">{selectedTrip.cargo}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-semibold">Peso</p>
                <p className="text-sm font-medium text-gray-900 mt-2">{selectedTrip.weight}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Estado</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase font-semibold">Estado</p>
                  <Badge label={selectedTrip.status} />
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase font-semibold">Prioridad</p>
                  <Badge label={selectedTrip.priority} />
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase font-semibold">Vencimiento</p>
                  <p className="text-sm font-medium text-gray-900 mt-2">{selectedTrip.deadline}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Información de Asignación</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase font-semibold">Proveedor Asignado</p>
                  <p className="text-sm font-medium text-gray-900 mt-2">
                    {selectedTrip.provider || 'Sin asignar'}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase font-semibold">Intentos de Contacto</p>
                  <p className="text-sm font-medium text-gray-900 mt-2">{selectedTrip.attempts}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contactos</h3>
              <div className="space-y-2">
                {selectedTrip.contacts.map((contact, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                    <span className="text-sm text-gray-700">{contact}</span>
                    <span className="text-xs text-gray-500">Contactado</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 justify-end pt-4">
              <Button variant="secondary" onClick={() => setSelectedTrip(null)}>
                Cerrar
              </Button>
              {!selectedTrip.provider && (
                <Button variant="primary">
                  Asignar Proveedor
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  )
}
