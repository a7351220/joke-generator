'use client';

import { useState } from 'react';

// 改進的"翻譯"函數
const translateToMeme = (text: string): string => {
  // 這個函數會嘗試將整個句子轉換為一個中文風格的句子
  // 注意：這不是真正的翻譯，只是一個有趣的轉換
  return text
    .replace(/\b(I|you|he|she|it|we|they)\b/gi, '鼠鼠')
    .replace(/\b(am|is|are|was|were)\b/gi, '是')
    .replace(/\b(a|an|the)\b/gi, '個')
    .replace(/\b(in|on|at)\b/gi, '在')
    .replace(/\b(and)\b/gi, '和')
    .replace(/\b(or)\b/gi, '或')
    .replace(/\b(but)\b/gi, '但是')
    .replace(/\b(if)\b/gi, '如果')
    .replace(/\b(because)\b/gi, '因為')
    .replace(/\b(with)\b/gi, '帶著')
    .replace(/\b(for)\b/gi, '為了')
    .replace(/\b(to)\b/gi, '去')
    .replace(/\b(of)\b/gi, '的')
    .replace(/\b(by)\b/gi, '通過')
    .replace(/\b(from)\b/gi, '從')
    .replace(/\?(.*)/g, '？$1喵')
    .replace(/\.(.*)/g, '。$1汪')
    .replace(/\!(.*)/g, '！$1嗷')
    + '（笑死）';
};

export default function JokeGenerator() {
  const [originalJoke, setOriginalJoke] = useState<string>('');
  const [translatedJoke, setTranslatedJoke] = useState<string>('點擊下方按鈕來生成一個冷笑話!');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateJoke = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await response.json();
      
      if (data.error) {
        setOriginalJoke('Sorry, the joke generator is on strike. Maybe this is the coldest joke?');
        setTranslatedJoke('抱歉，冷笑話生成器罷工了。也許這就是最冷的笑話？');
      } else {
        setOriginalJoke(data.joke);
        setTranslatedJoke(translateToMeme(data.joke));
      }
    } catch (error) {
      console.error('獲取笑話時出錯:', error);
      setOriginalJoke('Network error. The joke generator needs a break.');
      setTranslatedJoke('網絡開小差了，冷笑話生成器需要休息一下。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">隨機冷笑話生成器</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold mb-2">原文：</h2>
        <p className="text-lg mb-4">{originalJoke || '尚未生成笑話'}</p>
        <h2 className="text-xl font-semibold mb-2">鼠鼠翻譯：</h2>
        <p className="text-lg mb-4">{translatedJoke}</p>
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