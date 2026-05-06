export default function Table({ children, className = '' }) {
  return (
    <div className={`overflow-x-auto rounded-lg border border-gray-200 ${className}`}>
      <table className="w-full">{children}</table>
    </div>
  )
}

export function TableHeader({ children, className = '' }) {
  return (
    <thead className={`bg-gray-50 border-b border-gray-200 ${className}`}>
      {children}
    </thead>
  )
}

export function TableBody({ children, className = '' }) {
  return <tbody className={className}>{children}</tbody>
}

export function TableRow({ children, className = '', hover = true }) {
  return (
    <tr
      className={`border-b border-gray-200 ${hover ? 'hover:bg-gray-50 transition-colors' : ''} ${className}`}
    >
      {children}
    </tr>
  )
}

export function TableHead({ children, className = '' }) {
  return (
    <th
      className={`px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide ${className}`}
    >
      {children}
    </th>
  )
}

export function TableCell({ children, className = '' }) {
  return <td className={`px-6 py-4 text-sm text-gray-700 ${className}`}>{children}</td>
}
