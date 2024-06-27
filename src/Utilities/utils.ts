import { DateTime } from 'luxon';

export function formatDate(dateString: string): string {
  const date = DateTime.fromISO(dateString);
  return date.toFormat("MMM d, yyyy h:mm a");
}
