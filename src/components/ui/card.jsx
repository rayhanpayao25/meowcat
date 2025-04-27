export function Card({ className = "", ...props }) {
    return (
      <div className={`rounded-lg border border-pink-200 bg-white text-gray-900 shadow-sm ${className}`} {...props} />
    )
  }
  
  export function CardContent({ className = "", ...props }) {
    return <div className={`p-6 pt-0 ${className}`} {...props} />
  }
  