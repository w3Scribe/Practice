import OpenAI from 'openai';

const Client = new OpenAI({
  apiKey: Bun.env.OPENAI_API_KEY
})

