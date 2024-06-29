import dayjs from 'dayjs';

export function humanizeDate(date: string) {
  return date ? dayjs(date).format('MMMM YYYY') : '';
}
