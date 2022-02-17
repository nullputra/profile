// date-fns: 日付のフォーマット表示
import { parseISO, format } from 'date-fns'

// dateString: 2020-01-02
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
