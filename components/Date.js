import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <span style={{ color: '#94a1b2' }}>
        Joined: <time dateTime={dateString}>{format(date, 'LLL, yyyy')}</time>
    </span>
}