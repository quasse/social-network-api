module.exports = (timestamp) => {
  let months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const dateObj = new Date(timestamp);

  const formattedMonth = months[dateObj.getMonth()];

  const dayOfMonth = dateObj.getDate();

  const year = dateObj.getFullYear();

  let hour = dateObj.getHours();

  const minutes = dateObj.getMinutes();

  return `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes}`;
};
