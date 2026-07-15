// Placeholder image utility helpers.
export function getImagePreviewUrl(file) {
  return file ? URL.createObjectURL(file) : ''
}
