import { GoogleGenerativeAI } from '@google/generative-ai';
import * as readline from 'readline';

const apiKey = Bun.env.GOOGLE_API_KEY;

if (!apiKey) {
  console.error('GOOGLE_API_KEY is not defined.');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

async function generateResult(prompt: string): Promise<string> {
  const genContent = await model.generateContent(prompt)
  return genContent.response.text()
}

console.log('How can I help you?');

const ReadLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '\n> ',
});

ReadLine.on('line', input => generateResult(input).then(console.log))