import React from 'react';
import InputForm from '../components/InputForm';
import ResponseDisplay from '../components/ResponseDisplay';
import '../styles/globals.css';

export default function Home() {
  const [userInput, setUserInput] = React.useState('');
  const [apiResponse, setApiResponse] = React.useState('');

  const handleInputSubmit = async (input) => {
    setUserInput(input);
    const response = await fetchGPT4Response(input);
    setApiResponse(response);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">GPT-4 Chat Completion</h1>
      <InputForm onSubmit={handleInputSubmit} />
      <ResponseDisplay response={apiResponse} />
    </div>
  );
}

async function fetchGPT4Response(input) {
  const res = await fetch('/api/gpt4', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: input }),
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await res.json();
  return data;
}