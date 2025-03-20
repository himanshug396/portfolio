import { SYSTEM_PROMPT } from './prompt';
import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getGigs } from './tools/getGigs';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getSports } from './tools/getSport';
import { getBriefer } from './tools/getBrief';

export const maxDuration = 30;

const openaiClient = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

const modelInputs = async (req: Request) => {
  const { messages } = await req.json();
  console.log('[CHAT-API] Incoming messages:', messages);
  const cleanMessages = stripParts(messages);
  cleanMessages.unshift(SYSTEM_PROMPT);

  const tools = {
    getProjects,
    getPresentation,
    getResume,
    getContact,
    getSkills,
    getSports,
    getCrazy,
    getGigs,
    getBriefer,
  };
  return { messages: cleanMessages, tools };
};

const stripParts = (messages: any[]) => {
  return messages.map(({ role, content }) => ({ role, content }));
};

export async function POST(req: Request) {
  try {
    const { messages, tools } = await modelInputs(req);
    const result = streamText({
      model: openaiClient('mistralai/mistral-small-3.2-24b-instruct:free'),
      messages,
      toolCallStreaming: true,
      tools,
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    console.error('Global error:', err);
    return new Response(errorHandler(err), { status: 500 });
  }
}
