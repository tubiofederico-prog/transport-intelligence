import { useState } from 'react'
import { Search } from 'lucide-react'
import Layout from '../components/layout/Layout'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Table, { TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table'
import Modal from '../components/ui/Modal'
import { providers } from '../data/mockData'

export default function Proveedores() {
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({
    status: 'Todos',
    vehicle: 'Todos',
  })

  const filtered = providers.filter(
    (p) =>
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.contact.toLowerCase().includes(search.toLowerCase())) &&
      (filters.status === 'Todos' || p.status === filters.status) &&
      (filters.vehicle === 'Todos' || p.vehicle === filters.vehicle)
  )

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Proveedores / Transportistas</h1>
          <p className="text-gray-600 mt-1">Gestión de base de datos de proveedores</p>
        </div>

        <Card>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por nombre o contacto..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-400"
                />
              </div>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-400"
              >
                <option>Todos</option>
                <option>Habilitado</option>
                <option>Pendiente</option>
              </select>
              <select
                value={filters.vehicle}
                onChange={(e) => setFilters({ ...filters, vehicle: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-400"
              >
                <option>Todos</option>
                <option>Camión</option>
                <option>Tractomula</option>
                <option>Doble trocha</option>
              </select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Empresa</TableHead>
                  <TableHead>Contacto</TableHead>
                  <TableHead>Teléfono</TableHead>
                  <TableHead>Vehículo</TableHead>
                  <TableHead>Zona</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Viajes</TableHead>
                  <TableHead className="text-right">Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((provider) => (
                  <TableRow key={provider.id}>
                    <TableCell className="font-medium text-gray-900">{provider.name}</TableCell>
                    <TableCell className="text-gray-600">{provider.contact}</TableCell>
                    <TableCell className="text-gray-600">{provider.phone}</TableCell>
                    <TableCell className="text-gray-600">{provider.vehicle}</TableCell>
                    <TableCell className="text-gray-600">{provider.zone}</TableCell>
                    <TableCell>
                      <Badge label={provider.status} />
                    </TableCell>
                    <TableCell className="text-gray-600">{provider.trips}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedProvider(provider)}
                      >
                        Ver perfil
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
        isOpen={!!selectedProvider}
        onClose={() => setSelectedProvider(null)}
        title={selectedProvider?.name}
        size="xl"
      >
        {selectedProvider && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-semibold">Contacto</p>
                <p className="text-sm font-medium text-gray-900 mt-2">{selectedProvider.contact}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-semibold">Teléfono</p>
                <p className="text-sm font-medium text-gray-900 mt-2">{selectedProvider.phone}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
                <p className="text-sm font-medium text-gray-900 mt-2">{selectedProvider.email}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-semibold">Estado</p>
                <Badge label={selectedProvider.status} />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Información Operativa</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Tipo Vehículo</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">{selectedProvider.vehicle}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Zona</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">{selectedProvider.zone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Viajes Realizados</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">{selectedProvider.trips}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Confiabilidad</p>
                  <p className="text-sm font-bold text-violet-600 mt-1">{selectedProvider.reliability}/10</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentación</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-900">Licencia de conducción</span>
                  <Badge label="Actualizado" />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-900">SOAT</span>
                  <Badge label={selectedProvider.documents} />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-900">Revisión técnica</span>
                  <Badge label="Actualizado" />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-900">Antecedentes</span>
                  <Badge label="Aprobado" />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Actividad Reciente</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Última interacción</p>
                    <p className="text-xs text-gray-600">{selectedProvider.lastInteraction}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end pt-4">
              <Button variant="secondary" onClick={() => setSelectedProvider(null)}>
                Cerrar
              </Button>
              <Button variant="primary">
                Editar Perfil
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  )
}
