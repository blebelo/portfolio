import { buildContext } from '@/lib/ai/knowledge';
import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

const SYSTEM_PROMPT = `You are Benny Lebelo's portfolio assistant. You answer only about Benny's background, projects, skills, experience, and education. Be factual, concise, and recruiter-friendly. If information is missing, clearly say you do not know from the provided context.`;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { message?: string };
    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json({ answer: 'Please ask a question about Benny’s background, skills, or projects.' }, { status: 400 });
    }

    if (!client) {
      return NextResponse.json({
        answer:
          'The chat assistant is not configured yet. Please set OPENAI_API_KEY in the deployment environment to enable AI answers.'
      });
    }

    const completion = await client.responses.create({
      model: process.env.OPENAI_MODEL ?? 'gpt-4.1-mini',
      input: [
        { role: 'system', content: `${SYSTEM_PROMPT}\n\nKnowledge base:\n${buildContext()}` },
        { role: 'user', content: message }
      ],
      max_output_tokens: 320
    });

    const answer = completion.output_text || 'I could not produce an answer. Please try again.';
    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json(
      { answer: 'I hit an unexpected error while answering. Please try again in a moment.' },
      { status: 500 }
    );
  }
}
