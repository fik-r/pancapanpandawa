import path from 'path';
import fs from 'fs';

export async function GET(req, { params }) {
    const { filename } = await params; // Extract the filename from the route params
    const filePath = path.join(process.cwd(), 'public/uploads', filename);

    if (fs.existsSync(filePath)) {
        // Determine the MIME type based on the file extension
        const ext = path.extname(filename).toLowerCase();
        let contentType = 'application/octet-stream';

        switch (ext) {
            case '.jpg':
            case '.jpeg':
                contentType = 'image/jpeg';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.gif':
                contentType = 'image/gif';
                break;
            case '.webp':
                contentType = 'image/webp';
                break;
            default:
                return new Response(
                    JSON.stringify({ error: 'Unsupported file type' }),
                    { status: 415, headers: { 'Content-Type': 'application/json' } }
                );
        }

        const fileStream = fs.createReadStream(filePath);

        return new Response(fileStream, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'no-store', // Optional: Disable caching for real-time updates
            },
        });
    } else {
        return new Response(JSON.stringify({ error: 'File not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

