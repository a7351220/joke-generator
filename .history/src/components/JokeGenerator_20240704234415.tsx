'use client';

import { useState } from 'react';

// 定義多個笑話API來源
const jokeAPIs = [
  {
    url: 'https://v2.jokeapi.dev/joke/Any?type=single',
    extract: (data: any) => data.joke
  },
  {
    url: 'https://official-joke-api.appspot.com/random_joke',
    extract: (data: any) => `${data.setup} ${data.punchline}`
  },
  {
    url: 'https://icanhazdadjoke.com/',
    extract: (data: any) => data.joke,
    headers: { 'Accept': 'application/json' }
  }
];

export default function JokeGenerator() {
  const [joke, setJoke] = useState<string>('點擊下方箭頭來生成一個冷笑話!');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateJoke = async () => {
    setIsLoading(true);
    try {
      // 隨機選擇一個API來源
      const api = jokeAPIs[Math.floor(Math.random() * jokeAPIs.length)];
      const response = await fetch(api.url, { headers: api.headers });
      const data = await response.json();
      
      setJoke(api.extract(data));
    } catch (error) {
      console.error('獲取笑話時出錯:', error);
      setJoke('網絡開小差了，冷笑話生成器需要休息一下。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0abab5]">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="px-4 py-2 bg-gray-100 flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">冷笑話生成器</h1>
          <p className="text-lg mb-4">{joke}</p>
          <p className="text-sm text-gray-600 mb-4">
            {isLoading ? '生成中...' : '想要更多笑話？點擊箭頭來生成新的冷笑話。'}
          </p>
          <div className="flex justify-end items-center">
            <button
              onClick={generateJoke}
              disabled={isLoading}
              className="bg-[#0abab5] hover:bg-[#08a29d] text-white p-2 rounded-full transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}