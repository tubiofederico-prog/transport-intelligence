export const dailyActivityData = [
  { day: 'Lun', calls: 45, messages: 120, trips: 12 },
  { day: 'Mar', calls: 52, messages: 135, trips: 14 },
  { day: 'Mié', calls: 48, messages: 128, trips: 13 },
  { day: 'Jue', calls: 61, messages: 155, trips: 16 },
  { day: 'Vie', calls: 58, messages: 145, trips: 15 },
  { day: 'Sab', calls: 35, messages: 85, trips: 8 },
  { day: 'Dom', calls: 28, messages: 65, trips: 6 },
]

export const conversionFunnelData = [
  { stage: 'Contactado', value: 152, percentage: 100 },
  { stage: 'Interesado', value: 118, percentage: 77.6 },
  { stage: 'Negociación', value: 85, percentage: 55.9 },
  { stage: 'Asignado', value: 67, percentage: 44.1 },
]

export const operatorMetrics = [
  { name: 'Juan Pérez', calls: 50, messages: 145, assignments: 12, conversion: '9.1%', efficiency: '92%' },
  { name: 'Alfredo Barraza', calls: 45, messages: 120, assignments: 10, conversion: '8.2%', efficiency: '88%' },
  { name: 'Laura Méndez', calls: 32, messages: 98, assignments: 7, conversion: '6.5%', efficiency: '81%' },
  { name: 'Carlos Ruiz', calls: 28, messages: 75, assignments: 6, conversion: '7.1%', efficiency: '85%' },
  { name: 'Mariana Torres', calls: 15, messages: 42, assignments: 3, conversion: '5.3%', efficiency: '72%' },
]

export const tripsByStatusData = [
  { name: 'Asignado', value: 67, fill: '#10b981' },
  { name: 'Pendiente', value: 45, fill: '#f59e0b' },
  { name: 'En negociación', value: 38, fill: '#3b82f6' },
]

export const tripsPerDayData = [
  { date: 'May 1', trips: 8 },
  { date: 'May 2', trips: 12 },
  { date: 'May 3', trips: 10 },
  { date: 'May 4', trips: 14 },
  { date: 'May 5', trips: 15 },
  { date: 'May 6', trips: 16 },
]

export const providerPerformanceData = [
  { name: 'Transportes Andina', performance: 92 },
  { name: 'Rutas Nacionales', performance: 90 },
  { name: 'Carga Norte SAS', performance: 88 },
  { name: 'Logística Rápida', performance: 85 },
  { name: 'Camiones del Valle', performance: 81 },
  { name: 'Flota Central', performance: 79 },
]

export const getKPIs = () => ({
  callsToday: 52,
  messagestoday: 145,
  availableTrips: 18,
  assignedTrips: 67,
  conversionRate: 44.1,
  activeOperators: 4,
})

export const alerts = [
  {
    id: 'ALT-001',
    type: 'warning',
    title: 'Baja actividad de Mariana',
    description: 'Mariana Torres ha tenido 0 llamadas en las últimas 4 horas',
    timestamp: '10 min',
  },
  {
    id: 'ALT-002',
    type: 'critical',
    title: 'Viaje urgente sin asignar',
    description: 'VJ-2024-0005: Maquinaria Medellín-Manizales vence en 2 horas',
    timestamp: '15 min',
  },
  {
    id: 'ALT-003',
    type: 'warning',
    title: 'Proveedor sin respuesta',
    description: 'Juan Carlos López no responde desde hace 6 horas',
    timestamp: '1h',
  },
]

export const recentMovements = [
  {
    id: 1,
    type: 'Viaje Asignado',
    description: 'VJ-2024-0001 asignado a Transportes Andina',
    user: 'Alfredo Barraza',
    timestamp: '14:30',
  },
  {
    id: 2,
    type: 'Llamada Realizada',
    description: 'Llamada a Carga Norte SAS - Sin respuesta',
    user: 'Laura Méndez',
    timestamp: '15:45',
  },
  {
    id: 3,
    type: 'Mensaje Enviado',
    description: 'WhatsApp a Flota Central con oferta de viaje',
    user: 'Juan Pérez',
    timestamp: '17:00',
  },
  {
    id: 4,
    type: 'Viaje Asignado',
    description: 'VJ-2024-0006 asignado a Rutas Nacionales',
    user: 'Alfredo Barraza',
    timestamp: '17:30',
  },
  {
    id: 5,
    type: 'Análisis IA',
    description: 'Conversación clasificada como "Acepta viaje"',
    user: 'Sistema',
    timestamp: '17:35',
  },
]

export const reports = [
  {
    id: 'REP-001',
    name: 'Actividad Diaria',
    description: 'Resumen de llamadas, mensajes y viajes del día',
    lastGenerated: '2024-05-06 18:00',
    frequency: 'Diaria',
  },
  {
    id: 'REP-002',
    name: 'Eficiencia Operativa',
    description: 'Métricas de conversión y asignación de viajes',
    lastGenerated: '2024-05-05 18:00',
    frequency: 'Diaria',
  },
  {
    id: 'REP-003',
    name: 'Viajes No Asignados',
    description: 'Listado de viajes pendientes o en negociación',
    lastGenerated: '2024-05-06 17:00',
    frequency: 'Cada 2 horas',
  },
  {
    id: 'REP-004',
    name: 'Performance por Operador',
    description: 'Ranking y métricas de cada operador',
    lastGenerated: '2024-05-04 18:00',
    frequency: 'Semanal',
  },
  {
    id: 'REP-005',
    name: 'Oportunidades Perdidas',
    description: 'Viajes rechazados y proveedores con baja respuesta',
    lastGenerated: '2024-05-03 18:00',
    frequency: 'Semanal',
  },
]
