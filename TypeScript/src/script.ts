import { PromptTemplate } from '@langchain/core/prompts';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { z } from 'zod';

const inputSchema = z.object({
  topic: z.string().min(3),
  style : z.enum(['haiku', 'sonet', 'free-verse'])
})


const Chat = new ChatGoogleGenerativeAI({
  apiKey: Bun.env.GOOGLE_API_KEY,
  model: 'gemini-2.0-flash-exp',
  temperature: 0.7,
  maxOutputTokens: 1000,
});

const prompt = PromptTemplate.fromTemplate(`
  You are a create writer. generate a shor poem about {topic}.
  Use {style} style.
  `);

const chain = prompt.pipe(Chat)

const validatedChain = chain.withConfig({
  runName: 'ValidatedPoemGenerator',
})

const response = await chain.invoke({
  topic: 'quantum physics',
  style : 'haiku'
})

console.log(response.content)