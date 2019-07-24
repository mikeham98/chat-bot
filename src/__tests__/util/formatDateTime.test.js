import formatDateTime from '../../app/util/formatDateTime';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

describe('formatDateTime', () => {
    it('should return N/A', () => {
        const dateTime = 'Hello world';
        expect(formatDateTime(dateTime)).toBe('N/A');
    });
    it('should return day of the week, hours/minutes, am/pm', () => {
        const dateTime = new Date();
        const day = dateTime.getDay();
        let hours = dateTime.getHours();
        const dayTime = hours >= 12 ? 'pm' : 'am';
        hours = hours === 0 ? 12 : hours;
        hours = hours > 12 ? hours - 12 : hours;
        let minutes = dateTime.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;

        expect(formatDateTime(dateTime)).toBe(`${days[day]} ${hours}:${minutes} ${dayTime}`);
    });
    it('should return date, month name, hours/minutes, am/pm', () => {
        const dateTime = new Date();
        dateTime.setDate(dateTime.getDate() - 7);
        const date = dateTime.getDate();
        const month = dateTime.getMonth();
        let hours = dateTime.getHours();
        const dayTime = hours >= 12 ? 'pm' : 'am';
        hours = hours === 0 ? 12 : hours;
        hours = hours > 12 ? hours - 12 : hours;
        let minutes = dateTime.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;

        expect(formatDateTime(dateTime)).toBe(`${date} ${months[month]} ${hours}:${minutes} ${dayTime}`);
    });
    it('should return date, month name, year, hours/minutes, am/pm', () => {
        const dateTime = new Date();
        dateTime.setDate(dateTime.getDate() - 365);
        const year = dateTime.getFullYear();
        const date = dateTime.getDate();
        const month = dateTime.getMonth();
        let hours = dateTime.getHours();
        const dayTime = hours >= 12 ? 'pm' : 'am';
        hours = hours === 0 ? 12 : hours;
        hours = hours > 12 ? hours - 12 : hours;
        let minutes = dateTime.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;
        expect(formatDateTime(dateTime)).toBe(`${date} ${months[month]} ${year} ${hours}:${minutes} ${dayTime}`);
    });
});