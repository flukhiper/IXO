import { NextResponse, type NextRequest } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '@/configs/cloudinary';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

const getCloudinaryUrlSignature = (folder: string) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder, use_filename: true },
    CLOUDINARY_API_SECRET || ''
  );
  return {
    timestamp,
    signature,
    apiKey: CLOUDINARY_API_KEY,
    cloudName: CLOUDINARY_CLOUD_NAME,
    url: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
  };
};

export async function GET (request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const folder = searchParams.get('folder') || 'default';

  const {
    signature,
    timestamp,
    apiKey,
    url
  } = getCloudinaryUrlSignature(folder);
  
  return NextResponse.json({
    timestamp,
    signature,
    folder,
    apiKey,
    url
  });
}
