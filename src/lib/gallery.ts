import fs from "fs";
import path from "path";

export interface GalleryImage {
  filename: string;
  src: string;
  alt: string;
}

const SUPPORTED = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

export function getGalleryImages(): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", "images", "gallery");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => {
      const ext = path.extname(f).toLowerCase();
      return SUPPORTED.includes(ext);
    });
  } catch {
    return [];
  }
  return files.map((filename) => ({
    filename,
    src: `/images/gallery/${filename}`,
    alt: `Soul Bliss — ${path.basename(filename, path.extname(filename)).replace(/[-_]/g, " ")}`,
  }));
}
