

// pages/api/chat.js
import fetch from 'node-fetch';


export default async function handler(req, res) {
if (req.method !== 'POST') return res.status(405).end();
const { message } = req.body;
if (!message) return res.status(400).json({ error: 'No message' });


try {
const OPENAI_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_KEY) return res.status(500).json({ error: 'Missing API key' });


const systemPrompt = `You are PulseBot, a friendly, concise, non-diagnostic health assistant for chronic disease patients in Latvia. Always prioritize safety: if the user presents alarming symptoms, advise seeking immediate medical care and do not provide definitive diagnoses.`;


const payload = {
model: 'gpt-4o-mini',
messages: [
{ role: 'system', content: systemPrompt },
{ role: 'user', content: message }
],
max_tokens: 300,
};


const r = await fetch('https://api.openai.com/v1/chat/completions', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${OPENAI_KEY}`,
},
body: JSON.stringify(payload),
});


if (!r.ok) {
const errTxt = await r.text();
console.error('OpenAI error', errTxt);
return res.status(500).json({ error: 'OpenAI request failed' });
}


const data = await r.json();
const reply = data.choices?.[0]?.message?.content ?? "I'm sorry, I couldn't form a response.";
return res.status(200).json({ reply });
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Server error' });
}
}
