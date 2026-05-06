import { useState } from 'react'
import { Plus, Edit2, Trash2, ArrowRight } from 'lucide-react'
import Layout from '../components/layout/Layout'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { automations, templates } from '../data/mockData'

export default function Automatizaciones() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Automatizaciones</h1>
          <p className="text-gray-600 mt-1">Gestión de flujos y campañas automáticas</p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Campañas Automáticas</h2>
            <Button variant="primary" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Nueva Campaña
            </Button>
          </div>

          <div className="space-y-3">
            {automations.map((auto) => (
              <Card key={auto.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{auto.name}</h3>
                      <Badge label={auto.status} />
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{auto.type}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Disparador</p>
                        <p className="text-gray-900 mt-1">{auto.triggers}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Tasa de Éxito</p>
                        <p className="text-gray-900 mt-1">{auto.successRate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Creada</p>
                        <p className="text-gray-900 mt-1">{auto.createdAt}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Mensaje</p>
                        <p className="text-gray-900 mt-1 truncate">{auto.message}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Constructor Visual de Flujo</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="p-4 bg-violet-50 border-2 border-violet-600 rounded-lg">
                  <p className="text-sm font-semibold text-violet-900">1. Nuevo viaje disponible</p>
                  <p className="text-xs text-violet-700 mt-1">Se dispara automáticamente cuando hay un nuevo viaje en el sistema</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900">2. Filtrar proveedores</p>
                  <p className="text-xs text-blue-700 mt-1">Por zona, tipo de vehículo y confiabilidad</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm font-semibold text-green-900">3. Enviar mensaje</p>
                  <p className="text-xs text-green-700 mt-1">WhatsApp o Llamada automática a proveedores filtrados</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm font-semibold text-yellow-900">4. Esperar respuesta</p>
                  <p className="text-xs text-yellow-700 mt-1">Hasta 30 minutos o timeout</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">5. Clasificar respuesta con IA</p>
                  <p className="text-xs text-purple-700 mt-1">Intención, sentimiento y score de probabilidad</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                </div>

                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                  <p className="text-sm font-semibold text-indigo-900">6. Notificar operador</p>
                  <p className="text-xs text-indigo-700 mt-1">En tiempo real si es oportunidad o viaje aceptado</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Templates de Mensajes</h2>
            <Button variant="primary" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Template
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <Card key={template.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-semibold text-gray-900">{template.name}</h3>
                    <Badge label={template.category} />
                    <p className="text-sm text-gray-600 mt-3 line-clamp-3">{template.content}</p>
                  </div>
                  <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                    <button className="flex-1 px-3 py-2 text-sm text-violet-600 hover:bg-violet-50 rounded transition-colors font-medium">
                      Usar
                    </button>
                    <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
