import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculadora = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 via-blue-800 to-black">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 space-y-4">
        <h1 className="text-3xl font-bold text-white text-center mb-4">Calculadora</h1>
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-4 text-right text-2xl bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleClick('7')} className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">7</button>
          <button onClick={() => handleClick('8')} className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">8</button>
          <button onClick={() => handleClick('9')} className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">9</button>
          <button onClick={() => handleClick('/')} className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors">/</button>
          
          <button onClick={() => handleClick('4')} className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">4</button>
          <button onClick={() => handleClick('5')} className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">5</button>
          <button onClick={() => handleClick('6')} className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">6</button>
          <button onClick={() => handleClick('*')} className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors">*</button>
          
          <button onClick={() => handleClick('1')} className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">1</button>
          <button onClick={() => handleClick('2')} className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">2</button>
          <button onClick={() => handleClick('3')} className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">3</button>
          <button onClick={() => handleClick('-')} className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors">-</button>
          
          <button onClick={handleClear} className="p-4 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors col-span-2">C</button>
          <button onClick={() => handleClick('0')} className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">0</button>
          <button onClick={() => handleClick('.')} className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">.</button>
          <button onClick={() => handleClick('+')} className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors">+</button>
          
          <button onClick={handleCalculate} className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors col-span-4">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
