import Card from './Card'

export default function StatCard({ icon: Icon, title, value, subtitle, className = '' }) {
  return (
    <Card className={`flex items-start justify-between ${className}`}>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
      {Icon && (
        <div className="p-3 bg-violet-100 rounded-lg ml-4">
          <Icon className="w-6 h-6 text-violet-600" />
        </div>
      )}
    </Card>
  )
}
