/**
 * Formats a date string into a localized long date format
 * @param dateString - The date string to format (e.g., "2024-06-15")
 * @returns A formatted date string (e.g., "June 15, 2024")
 * @example
 * formatDate("2024-06-15") // Returns "June 15, 2024"
 */
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};
