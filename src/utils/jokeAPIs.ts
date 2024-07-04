// jokeAPIs.ts

export interface JokeAPI {
    url: string;
    extract: (data: any) => string;
    headers?: Record<string, string>;
  }
  
  const jokeAPIs: JokeAPI[] = [
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
  
  export default jokeAPIs;