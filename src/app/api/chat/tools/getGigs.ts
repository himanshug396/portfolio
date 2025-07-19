import { tool } from 'ai';
import { z } from 'zod';

export const getGigs = tool({
  description:
    "Gives a summary of what kind of gigs I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my job or role search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m excited for 👇

- 📅 **Duration**: Short contracts or full-time roles starting anytime.
- 🌍 **Location**: Preferably remote (I may fly on-site for collaboration.)
- 🧑‍💻 **Focus**: AI development, full-stack web apps, SaaS, FinTech or personal growth systems.
- 🛠️ **Stack**: TypeScript, NestJS/React/Next.js, Python, AWS etc.
- 💼 **Visa**: May require sponsorship depending on location (except UK/India).
- ✅ **What I bring**: Real experience with backend, infrastructure development, AI engineering and building innovative products
- 🔥 I move fast, learn faster, and I’m always eager for big challenges

📬 **Contact me** via:
- Email: himanshugupta396@gmail.com
- LinkedIn: [linkedin.com/in/himanshug396](https://www.linkedin.com/in/himanshug396/)
- GitHub: [github.com/himanshug396](https://github.com/himanshug396)

Let's build something great together ✌️
    `;
  },
});
