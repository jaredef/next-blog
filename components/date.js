import { parseISO, format } from 'date-fns'

/*
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
*/

export default function Date({ dateString }) {
    const date = dateString ? parseISO(dateString) : null;
    const formattedDate = date ? format(date, 'LLLL d, yyyy') : 'Invalid date';
    return <time dateTime={dateString}>{formattedDate}</time>;
  }