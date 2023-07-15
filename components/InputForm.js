import React, { useState } from 'react';

const InputForm = ({ handleSubmit }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(input);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col items-center mt-10">
      <input
        id="inputField"
        type="text"
        value={input}
        onChange={handleInputChange}
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        placeholder="Enter your text here..."
      />
      <button type="submit" className="mt-5 bg-blue-500 text-white px-10 py-2 rounded">Submit</button>
    </form>
  );
};

export default InputForm;