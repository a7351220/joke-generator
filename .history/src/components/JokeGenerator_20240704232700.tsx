'use client';

import { useState } from 'react';

// 模擬翻譯功能
const translateToMeme = (text: string): string => {
  // 這裡實現一個簡單的"翻譯"，將某些英文單詞替換成中文
  return text
    .replace(/joke/gi, '笑話')
    .replace(/funny/gi, '搞笑')
    .replace(/laugh/gi, '笑')
    .replace(/humor/gi, '幽默')
    // 可以繼續添加更多替換規則
    ;
};

export default function JokeGenerator() {
  const [joke, setJoke] = useState<string>('點擊下方按鈕來生成一個冷笑話!');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateJoke = async () => {
    setIsLoading(true);
    try {
      // 移除了語言過濾器
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await response.json();
      
      if (data.error) {
        setJoke('抱歉，冷笑話生成器暫時罷工了。也許這就是最冷的笑話？');
      } else {
        // "翻譯" 笑話
        const translatedJoke = translateToMeme(data.joke);
        setJoke(translatedJoke);
      }
    } catch (error) {
      console.error('獲取笑話時出錯:', error);
      setJoke('網絡開小差了，冷笑話生成器需要休息一下。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">隨機冷笑話生成器</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <p className="text-lg mb-4">{joke}</p>
        <button
          onClick={generateJoke}
          disabled={isLoading}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? '生成中...' : '生成新笑話'}
        </button>
      </div>
    </div>
  );
}