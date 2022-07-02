const year = () => {
  return new Date().getFullYear();
};

const monthLong = () => {
  return new Date().toLocaleString("default", { month: "long" });
};

const monthShort = () => {
  return new Date().toLocaleString("default", { month: "short" });
};

const month = () => {
  return new Date().getMonth() + 1;
};

const calendarFullString = () => {
  return new Date().toDateString();
};

const calendarNumber = () => {
  return new Date().toLocaleDateString();
};

const calendarString = () => {
  let full = new Date().toDateString();
  return full.split(" ").slice(1).join(" ");
};

const weekDay = () => {
  let full = new Date().toDateString();
  let day = full.split(" ").slice(0, 1).join("");
  return day;
};

const day = () => {
  return new Date().toDateString().split(" ").slice(2, 3).join(" ");
};

const current = {
  year,
  month,
  monthLong,
  monthShort,
  calendarFullString,
  calendarNumber,
  calendarString,
  weekDay,
  day,
};

module.exports = current;
