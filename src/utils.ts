export const convertStrintToDate = (stringDate: string): Date => {
  const dateParts: string[] = stringDate.split('/');
  const [day, month, year] = dateParts;
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}