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
    <div className="flex items-center justify-center min-h-screen bg-[#0abab5]"> {/* Tiffany Green background */}
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="px-4 py-2 bg-gray-100 flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">冷笑話生成器</h1>
          <p className="text-lg mb-4">{originalJoke || translatedJoke}</p>
          <p className="text-sm text-gray-600 mb-4">
            {isLoading ? '生成中...' : '想要更多笑話？點擊箭頭來生成新的冷笑話。'}
          </p>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">CROWDTIV</div>
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