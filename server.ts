import fs from 'node:fs/promises';
import express from 'express';

const port = 5173;
const app = express();

const { createServer } = await import('vite');
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use(vite.middlewares);
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl;
    const template = await fs.readFile('./index.html', 'utf-8');
    const transformHTML = await vite.transformIndexHtml(url, template);
    const HTML = transformHTML.split('<!--app-->');
    const render = (await vite.ssrLoadModule('./src/entry-server.tsx')).render;
    const stream = await render(url, {
      onShellReady() {
        res.write(HTML[0]);
        stream.pipe(res);
        res.write(HTML[1]);
      },
    });
  } catch (e) {
    console.error(e);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
