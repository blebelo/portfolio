import { NextResponse } from 'next/server';

const systemPrompt = `You are Benny Lebelo's portfolio assistant. Answer questions about Benny's background, skills, projects, and experience. Be accurate, concise, and do not invent information.`;

const profileContext = `
Benny Lebelo is a software engineer with full-stack and backend experience.
Strong technologies: C#, ASP.NET, ABP, SQL, Next.js, TypeScript, AWS, Docker, CI/CD.
Has delivered 50+ client-facing BPMN workflows and contributed to integration-heavy systems.
Notable projects include Moipone Academy digitisation platform and an AI support center simulation.
`;

export async function POST(request: Request) {
  const body = await request.json();
  const prompt = String(body?.prompt ?? '').trim();

  if (!prompt) {
    return NextResponse.json({ reply: 'Please provide a question.' }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      reply:
        'OpenAI API key is not configured. Add OPENAI_API_KEY to enable live responses. Based on my profile, I am a full-stack software engineer with strong .NET and Next.js experience.',
    });
  }

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4.1-mini',
      input: [
        { role: 'system', content: systemPrompt },
        { role: 'system', content: profileContext },
        { role: 'user', content: prompt },
      ],
      max_output_tokens: 300,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { reply: 'I could not process that request right now. Please try again shortly.' },
      { status: 502 },
    );
  }

  const data = await response.json();
  const reply = data?.output_text ?? 'Thanks for your question. Please ask in another way.';

  return NextResponse.json({ reply });
}
