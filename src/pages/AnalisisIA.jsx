import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import Layout from '../components/layout/Layout'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Modal from '../components/ui/Modal'
import { aiAnalysis } from '../data/mockData'

const intentColors = {
  'Acepta viaje': 'bg-green-100 text-green-800',
  'Sin respuesta': 'bg-orange-100 text-orange-800',
  'No disponible': 'bg-red-100 text-red-800',
  'Pide mejor tarifa': 'bg-blue-100 text-blue-800',
  'Interesado': 'bg-purple-100 text-purple-800',
}

export default function AnalisisIA() {
  const [selectedAnalysis, setSelectedAnalysis] = useState(null)

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Análisis Inteligente</h1>
          <p className="text-gray-600 mt-1">Inteligencia artificial para clasificación de conversaciones</p>
        </div>

        <div className="space-y-4">
          {aiAnalysis.map((analysis) => (
            <Card
              key={analysis.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedAnalysis(analysis)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-violet-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{analysis.provider}</h3>
                    <Badge label={analysis.intent} />
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{analysis.transcription}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Score</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-violet-600"
                            style={{ width: `${analysis.score}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-violet-600">{analysis.score}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Sentimiento</p>
                      <p className="mt-1">
                        <Badge
                          label={analysis.sentiment}
                          variant={
                            analysis.sentiment === 'Positivo'
                              ? 'success'
                              : analysis.sentiment === 'Negativo'
                              ? 'danger'
                              : 'warning'
                          }
                        />
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Contacto</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">{analysis.contact}</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">ID</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">{analysis.communication}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {analysis.tags.map((tag, idx) => (
                      <Badge key={idx} label={tag} />
                    ))}
                  </div>
                </div>

                <button className="ml-4 px-4 py-2 bg-violet-100 text-violet-600 rounded-lg hover:bg-violet-200 transition-colors text-sm font-medium">
                  Ver análisis
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedAnalysis}
        onClose={() => setSelectedAnalysis(null)}
        title="Análisis Detallado"
        size="lg"
      >
        {selectedAnalysis && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg border border-violet-200">
                <p className="text-xs text-gray-600 uppercase font-semibold">Puntuación de Oportunidad</p>
                <p className="text-3xl font-bold text-violet-600 mt-2">{selectedAnalysis.score}</p>
                <p className="text-xs text-gray-600 mt-1">Probabilidad de conversión</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <p className="text-xs text-gray-600 uppercase font-semibold">Sentimiento</p>
                <p className="text-lg font-bold text-blue-600 mt-2">{selectedAnalysis.sentiment}</p>
                <Badge label={selectedAnalysis.sentiment} />
              </div>

              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <p className="text-xs text-gray-600 uppercase font-semibold">Intención Detectada</p>
                <p className="text-sm font-bold text-green-600 mt-2">{selectedAnalysis.intent}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold mb-3">Transcripción Analizada</p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">{selectedAnalysis.transcription}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold mb-3">Etiquetas Automáticas</p>
              <div className="flex flex-wrap gap-2">
                {selectedAnalysis.tags.map((tag, idx) => (
                  <Badge key={idx} label={tag} />
                ))}
              </div>
            </div>

            <div className="bg-violet-50 p-4 rounded-lg border border-violet-200">
              <p className="text-xs text-gray-600 uppercase font-semibold mb-2">Recomendación IA</p>
              <p className="text-sm text-gray-800">
                {selectedAnalysis.intent === 'Acepta viaje'
                  ? 'Proceder inmediatamente con la confirmación del viaje. Alto potencial de cierre.'
                  : selectedAnalysis.intent === 'Pide mejor tarifa'
                  ? 'Contactar con supervisión para negociar tarifa. Proveedor interesado pero sensible al precio.'
                  : selectedAnalysis.intent === 'Sin respuesta'
                  ? 'Programar reintento en 2 horas. Considerar alternate contact.'
                  : 'Reintentar en próxima oportunidad. Mantener en base de datos activa.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Proveedor</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{selectedAnalysis.provider}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Contacto</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{selectedAnalysis.contact}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  )
}
