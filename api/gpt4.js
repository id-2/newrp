import axios from 'axios';

export async function fetchGPT4Response(input) {
  try {
    const response = await axios.post('https://api.openai.com/v4/chat/completions', {
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.'
        },
        {
          role: 'user',
          content: input
        }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].message.content;
    } else {
      throw new Error('No response from GPT-4 API');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}