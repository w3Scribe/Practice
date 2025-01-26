import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

const Chat = new ChatGoogleGenerativeAI({
  apiKey: Bun.env.GOOGLE_API_KEY
})

async function getResponseFn(messages : string) {
  const response = (await Chat.invoke(messages)).content;
  console.log(response);
}

await getResponseFn("Hello, how are you?");