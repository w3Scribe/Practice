import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense, use } from "react";
import { POSTS } from "../utils/functions/post";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const Post = use(POSTS);

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        {Post.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        ))}
      </Suspense>
    </div>
  );
}
