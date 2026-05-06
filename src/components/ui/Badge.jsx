const statusColors = {
  'Habilitado': 'bg-green-100 text-green-800',
  'Pendiente': 'bg-yellow-100 text-yellow-800',
  'Inactivo': 'bg-gray-100 text-gray-800',
  'Urgente': 'bg-red-100 text-red-800',
  'Asignado': 'bg-blue-100 text-blue-800',
  'En negociación': 'bg-purple-100 text-purple-800',
  'Sin respuesta': 'bg-orange-100 text-orange-800',
  'No disponible': 'bg-red-100 text-red-800',
  'Aceptado': 'bg-green-100 text-green-800',
  'Completado': 'bg-green-100 text-green-800',
  'Interesado': 'bg-blue-100 text-blue-800',
  'Activa': 'bg-green-100 text-green-800',
  'Pausada': 'bg-yellow-100 text-yellow-800',
  'En revisión': 'bg-orange-100 text-orange-800',
  'active': 'bg-green-100 text-green-800',
  'inactive': 'bg-gray-100 text-gray-800',
}

export default function Badge({ label, variant = 'default' }) {
  const colorClass = statusColors[label] || 'bg-gray-100 text-gray-800'
  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClass}`}>
      {label}
    </span>
  )
}
