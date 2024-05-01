export function generateStyle(
  className: string[],
  separator: string = ',',
): string {
  return className.toString().split(separator).join(' ')
}
