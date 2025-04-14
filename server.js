// Import necessary modules
import { join } from 'path';
import { readFileSync, statSync, createReadStream } from 'fs';
import { createServer } from 'http';

const port = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf'
};

// Create a simple Node.js server
const server = createServer((req, res) => {
    let url = new URL(req.url, `http://${req.headers.host}`);
    let path = url.pathname;

    // Default to index.html for root path
    if (path === '/' || path === '') {
        path = '/index.html';
    }

    try {
        // Get file path
        const filePath = join(process.cwd(), path);
        const fileExt = filePath.substring(filePath.lastIndexOf('.'));

        // Check if file exists
        try {
            statSync(filePath);
        } catch (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
            return;
        }

        // Set correct MIME type
        const mimeType = mimeTypes[fileExt] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mimeType });

        // Stream the file to the response
        const fileStream = createReadStream(filePath);
        fileStream.pipe(res);

    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
});
