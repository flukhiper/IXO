export function generateId (name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')     // remove non-alphanumeric (optional)
    .replace(/\s+/g, '-');           // collapse space to dash
}