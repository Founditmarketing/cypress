import { google } from 'googleapis';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Fetch data starting from row 2 up to column Z to capture all WP data
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A2:Z',
    });

    const rows = response.data.values || [];
    
    // Map array values to structured objects with grace checks for empty cells
    const inventory = rows.map((row: any[]) => {
      // row[9] is Images
      const imagesRaw = row[9] || '';
      const images = imagesRaw ? imagesRaw.split(',').map((img: string) => img.trim()).filter(Boolean) : [];

      return {
        id: row[0] || '', // Using SKU as ID
        sku: row[0] || '',
        name: row[1] || '',
        inStock: row[4] || '',
        regularPrice: row[7] || '',
        categories: row[8] || '',
        images,
        shortDescription: row[2] || '',
        htmlSpecs: row[12] || '',
      };
    });

    res.status(200).json(inventory);
  } catch (error) {
    console.log('[Google Sheets API Error]:', error);
    console.error('Error fetching from Google Sheets:', error);
    res.status(500).json({ error: 'Failed to fetch inventory from internal server error' });
  }
}
