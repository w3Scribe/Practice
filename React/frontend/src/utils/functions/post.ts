import axios from "axios";

interface IPost {
  id: number;
  title: string;
  content: string;
}

async function getPostFn() {
  const FetchData = await axios.get<IPost[]>("http://localhost:3001/posts");
  if (FetchData.status !== 200) {
    throw new Error("Failed to fetch data");
  }
  return FetchData.data;
}

export const POSTS = getPostFn();

