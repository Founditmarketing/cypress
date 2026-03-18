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
    
    // Fetch data starting from row 2 up to column G (7 columns)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A2:G',
    });

    const rows = response.data.values || [];
    
    // Map array values to structured objects with grace checks for empty cells
    const inventory = rows.map((row: any[]) => {
      // row[6] could be empty or undefined
      const imagesRaw = row[6] || '';
      const images = imagesRaw ? imagesRaw.split(',').map((img: string) => img.trim()).filter(Boolean) : [];

      return {
        id: row[0] || '',
        sku: row[1] || '',
        name: row[2] || '',
        inStock: row[3] || '',
        regularPrice: row[4] || '',
        categories: row[5] || '',
        images,
      };
    });

    res.status(200).json(inventory);
  } catch (error) {
    console.log('[Google Sheets API Error]:', error);
    console.error('Error fetching from Google Sheets:', error);
    res.status(500).json({ error: 'Failed to fetch inventory from internal server error' });
  }
}
