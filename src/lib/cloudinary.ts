export interface CloudinaryResource {
  public_id: string;
  width: number;
  height: number;
  format: string;
  secure_url: string;
}

interface CloudinarySearchResponse {
  resources: CloudinaryResource[];
  total_count: number;
}

/**
 * Fetch all images from the "soulbliss" Cloudinary folder.
 * This runs at BUILD TIME only (static export).
 */
export async function getGalleryImages(): Promise<CloudinaryResource[]> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "Missing Cloudinary credentials. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in .env.local"
    );
  }

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;
  const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${credentials}`,
    },
    body: JSON.stringify({
      expression: "folder:soulbliss",
      max_results: 100,
      sort_by: [{ created_at: "desc" }],
    }),
  });

  if (!res.ok) {
    throw new Error(`Cloudinary API error: ${res.status} ${res.statusText}`);
  }

  const data: CloudinarySearchResponse = await res.json();
  return data.resources;
}
