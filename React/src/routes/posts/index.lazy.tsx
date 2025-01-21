import { createLazyFileRoute } from "@tanstack/react-router";
import { Fragment, Suspense, use } from "react";

export const Route = createLazyFileRoute("/posts/")({
  component: RouteComponent,
});

interface IPost {
  id: number;
  title: string;
  content: string;
}

function FetchPosts(): Promise<IPost[] | void> {
  return fetch("http://localhost:3001/posts")
    .then((response) => {
      if (!response.ok) throw new Error("Failed To Fetch The Use Posts");
    })
    .then((data) => data)
    .catch((error: Error) => {
      console.error(error.message);
      return [];
    });
}

const PostData = FetchPosts();

function RouteComponent() {
  const Posts = use<IPost[]>(PostData as Promise<IPost[]>);

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
  );
}
