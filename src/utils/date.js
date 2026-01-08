export function ISODateToHuman(isoDate){
  const date = new Date(isoDate);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  return new Intl.DateTimeFormat('id-ID', options).format(date);
}