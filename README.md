# Joke Generator

A fun and interactive web application that generates random jokes using multiple API sources. Built with Next.js 14 and styled with Tailwind CSS, this project showcases a modern, responsive design with a Tiffany Green color scheme.

## Features

- Random joke generation from multiple API sources
- Sleek, modern UI design
- Responsive layout suitable for various devices
- Easy-to-use interface with a single-click joke generation

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/joke-generator.git
   ```

2. Navigate to the project directory:
   ```
   cd joke-generator
   ```

3. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
joke-generator/
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   └── JokeGenerator.tsx
    └── utils/
        └── jokeAPIs.ts
```

## Usage

Click the arrow button to generate a new random joke. The joke will be fetched from one of the configured API sources and displayed on the screen.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Joke APIs used in this project:
  - [JokeAPI](https://sv443.net/jokeapi/v2/)
  - [Official Joke API](https://github.com/15Dkatz/official_joke_api)
  - [icanhazdadjoke](https://icanhazdadjoke.com/api)