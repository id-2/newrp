import React from 'react';

const ResponseDisplay = ({ response }) => {
  return (
    <div id="responseDisplay" className="mt-4">
      <h2 className="text-xl font-bold">GPT-4 Response:</h2>
      <p className="mt-2">{response}</p>
    </div>
  );
};

export default ResponseDisplay;