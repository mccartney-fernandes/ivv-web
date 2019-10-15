const months = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ"
];

export const reOrderDate = date => {
  let dateNew = date.split("-");
  return `${dateNew[2]}/${dateNew[1]}/${dateNew[0]}`;
};

export const convertMonths = date => {
  return months[new Date(date).getMonth()];
};
export const convertDay = date => {
  let data = date.split("-");
  return data[2];
};
