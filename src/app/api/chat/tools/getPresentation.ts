import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Himanshu Gupta. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Himanshu Gupta, a developer specializing in full-stack engineering leveraging AI. I'm passionate about building innovative products that empower lives or drive money.",
    };
  },
});
