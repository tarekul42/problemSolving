const startDateStr = "29/09/2009";
const endDateStr = "07/09/2026";
const dayName = "thursday";

/*
    console.log("start date: ", startDateStr);
    console.log("End date: ", endDateStr);
    console.log("day: ", dayName);
*/

const parseDateUTC = (dateStr) => {
  const parts = dateStr.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  return new Date(Date.UTC(year, month, day));
};

const formatUTCDate = (date) => {
  if (!(date instanceof Date)) {
    throw new Error("Invalid Date object passed to formatUTCDate");
  }
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// const startDateUTC = parseDateUTC(startDateStr);
// const endDateUTC = parseDateUTC(endDateStr);

// console.log(formatUTCDate(startDateUTC));
// console.log(formatUTCDate(endDateUTC));

// --------------------------
// convert day name to number
// --------------------------

const dayNameToNumber = (dayName) => {
  const days = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  const day = dayName.trim().toLowerCase();
  if (!(day in days)) {
    throw new Error("Invalid day name: ", dayName);
  }

  return days[day];
};
// testing
/*
    console.log(dayNameToNumber("Friday"));
    console.log(dayNameToNumber("  monday  "));
    console.log(dayNameToNumber("SUNDAY "))
*/

// ------------------------------
// count how many times the target weekday occurs between two dates
// -------------------------------

const countSpecificWeekdays = (startDate, endDate, targetDayNumber) => {
  let count = 0;
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    if (currentDate.getUTCDay() === targetDayNumber) {
      count++;
    }
    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
  }

  return count;
};

const countWeekdays = (startDate, endDate, targetDay) =>{
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const totalDays = Math.floor((endDate - startDate) / millisecondsPerDay) + 1;

    const startDay = startDate.getUTCDay();
    
    const fullWeeks = Math.floor(totalDays / 7);

    let count = fullWeeks;

    const leftOverDays = totalDays % 7;

    const endPartialDay = (startDay + leftOverDays - 1) % 7;

    if((startDay <= endPartialDay && targetDay >= startDay && targetDay <= endPartialDay) || 
    (startDay > endPartialDay && (targetDay >= startDay || targetDay <= endPartialDay) )) {
        count ++;
    }
    return count;
}
// testing
const startDateUTC = parseDateUTC(startDateStr);
const endDateUTC = parseDateUTC(endDateStr);
const targetDayNumber = dayNameToNumber(dayName);

const totalDays = countWeekdays(
  startDateUTC,
  endDateUTC,
  targetDayNumber
);
console.log(
  `Beetween ${formatUTCDate(startDateUTC)} and ${formatUTCDate(
    endDateUTC
  )}, there are ${totalDays} ${dayName}s`
);
