'use client';

import { useState } from 'react';

export default function JokeGenerator() {
  const [joke, setJoke] = useState<string>('點擊下方按鈕來生成一個冷笑話!');

  const generateJoke = async () => {
    try {
      // 這裡我們使用一個免費的笑話 API
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single&lang=zh');
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error('獲取笑話時出錯:', error);
      setJoke('糟糕,笑話生成器罷工了。也許這就是最大的冷笑話?');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">隨機冷笑話生成器</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <p className="text-lg mb-4">{joke}</p>
        <button
          onClick={generateJoke}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          生成新笑話
        </button>
      </div>
    </div>
  );
}'use client';

import { useState } from 'react';

export default function JokeGenerator() {
  const [joke, setJoke] = useState<string>('點擊下方按鈕來生成一個冷笑話!');

  const generateJoke = async () => {
    try {
      // 這裡我們使用一個免費的笑話 API
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single&lang=zh');
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error('獲取笑話時出錯:', error);
      setJoke('糟糕,笑話生成器罷工了。也許這就是最大的冷笑話?');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">隨機冷笑話生成器</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <p className="text-lg mb-4">{joke}</p>
        <button
          onClick={generateJoke}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          生成新笑話
        </button>
      </div>
    </div>
  );
}