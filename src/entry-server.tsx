import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

interface Option {
  onShellReady: () => void;
}

export function render(url: string, option: Option) {
  const stream = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    option
  );
  return stream;
}
