import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import axios from "axios";
import { Fragment } from "react/jsx-runtime";
import { Qclient } from "../../main";

interface IPost {
  id: number;
  title: string;
  content: string;
}

async function getPost(id: string) {
  const Fetch = await axios.get<IPost>(`http://localhost:3001/posts/${id}`);
  if (!Fetch.data) {
    throw Error(`Post ${id} Not Found`);
  }
  return Fetch.data;
}

export const Route = createFileRoute("/post/$id")({
  loader: ({ params: { id } }) => {
    return Qclient.ensureQueryData({
      queryKey: ["post", id],
      queryFn: () => getPost(id),
    });
  },
  component: RouteComponent,
  pendingComponent: () => <h1>Loading...</h1>,
  errorComponent: ({ error }) => <h1>{error.stack}</h1>,
});

function RouteComponent() {
  const Post = useLoaderData({ from: "/post/$id" }) as IPost;

  return (
    <Fragment>
      <div key={Post.id}>
        <h4>{Post.title}</h4>
        <p>{Post.content}</p>
      </div>
    </Fragment>
  );
}
