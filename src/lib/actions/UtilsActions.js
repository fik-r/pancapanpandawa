"use server"

import fs from 'fs';
import path from 'path';

export async function uploadImage(file) {
    const uploadsDir = path.join(process.cwd(), 'public/uploads');

    if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
    }

    if (!file) {
        throw new Error('No file provided');
    }

    const sanitizedFilename = file.name
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .replace(/[^a-zA-Z0-9._-]/g, ''); // Remove unsafe characters

    const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
    const filename = `${timestamp}_${sanitizedFilename}`;
    const filePath = path.join(uploadsDir, filename);

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    return `/uploads/${filename}`;
}