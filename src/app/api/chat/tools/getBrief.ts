import { tool } from 'ai';
import { z } from 'zod';

export const getBriefer = tool({
  description:
    'This tool show my briefer.',
  parameters: z.object({}),
  execute: async () => {
    return "You can download my briefer by clicking on the link above.";
  },
});
