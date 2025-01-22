import { createLazyFileRoute } from '@tanstack/react-router'
import { Fragment, Suspense, use } from 'react'

export const Route = createLazyFileRoute('/posts/')({
  component: RouteComponent,
})

interface IPost {
  id: number
  title: string
  content: string
}

async function FetchPosts(): Promise<IPost[]> {
  try {
    const response = await fetch('http://localhost:3001/posts')
    if (!response.ok) throw new Error('Failed To Fetch The Posts')
    return await response.json()
  } catch (error: any) {
    console.error(error.message)
    return []
  }
}

const PostData = FetchPosts()

function RouteComponent() {
  const Posts = use<IPost[]>(PostData)

  return (
    <Fragment>
      <Suspense fallback={<h1>Loading...</h1>}>
        {Posts?.map((p) => (
          <div key={p.id}>
            <h4>{p.title}</h4>
            <p>{p.content}</p>
          </div>
        ))}
      </Suspense>
    </Fragment>
  )
}
