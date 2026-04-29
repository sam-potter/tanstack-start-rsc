import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { createFromFetch } from '@tanstack/react-start/rsc'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const query = useQuery({
    queryKey: ["ServerComponent"],
    queryFn: () => createFromFetch(fetch('/rsc/ServerComponent'))
  })
  
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
      {query.status === 'success' ? query.data : undefined}
    </div>
  )
}
