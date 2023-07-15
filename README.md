# Next.js GPT-4 Chat App

This is a one-page Next.js web application with Tailwind CSS, vanilla JavaScript, and HTML. It provides a UI to make an input and send it to request a streaming response via chatcompletion GPT-4 API.

## Prerequisites

- Node.js
- npm

## Installation

Clone the repository and install the dependencies:

```
git clone https://github.com/yourusername/yourrepository.git
cd yourrepository
npm install
```

## Running the Application

To start the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This application is ready to be deployed using Vercel. 

1. Install Vercel CLI:

```
npm i -g vercel
```

2. Link your project:

```
vercel
```

3. Deploy your project:

```
vercel --prod
```

## Structure

- `pages/index.js`: The main page of the application.
- `components/InputForm.js`: The component for user input.
- `components/ResponseDisplay.js`: The component to display the GPT-4 API response.
- `public/styles.css`: Global styles.
- `styles/globals.css`: Global styles for Next.js.
- `styles/Home.module.css`: Styles for the home page.
- `api/gpt4.js`: The API request to GPT-4.
- `next.config.js`: Configuration for Next.js.
- `postcss.config.js`: Configuration for PostCSS.
- `tailwind.config.js`: Configuration for Tailwind CSS.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)