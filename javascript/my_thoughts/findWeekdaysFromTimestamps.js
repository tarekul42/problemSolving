/*
  Problem Statement
  Given:

  Two dates as strings in the format DD/MM/YYYY (a start date and an end date, inclusive).

  The name of a weekday (e.g., "Friday", "thursday", etc.).

  Task:
  Write a program in pure JavaScript (no external libraries or packages) that calculates how many times the specified weekday occurs between the two dates, inclusive of both endpoints.

  Example:
  If the input is:

  Start date: "29/09/2009"

  End date: "07/09/2026"

  Day name: "thursday"

  The program should output:

  text
  Between 2009-09-29 and 2026-09-07, there are 885 thursdays
  Requirements:

  Use only pure JavaScript.

  Handle any valid date range and any valid weekday name (case-insensitive).

  Optimize the solution to efficiently handle very large date ranges without iterating day-by-day.
*/
/*
----------------------------------------------
----------------------------------------------
*/

const startDateStr = "29/09/2009";
const endDateStr = "07/09/2025";
const dayName = "sunday";

// parse date string in DD/MM/YYYY format to UTC Date object
const parseDateUTC = (dateStr) => {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
};

// Convert weekday name to number (0-6)
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

  const normalized = dayName.trim().toLowerCase();
  return days[normalized];
};

// Efficiently count weekday occurrences between dates
const countWeekdays = (start, end, targetDay) => {
  const msPerDay = 24 * 60 * 60 * 1000;

  // find first occurrence of target weekday
  const startDay = start.getUTCDay();
  const daysToAdd = (targetDay - startDay + 7) % 7;
  const firstOccurrence = new Date(start);
  firstOccurrence.setUTCDate(firstOccurrence.getUTCDate() + daysToAdd);

  // if first occurrence is after end date, return 0
  if(firstOccurrence > end) return 0;

  // Calculate occurrence after first
  const diff = end - firstOccurrence;
  const daysAfterFirst = Math.floor(diff / msPerDay);
  return Math.floor(daysAfterFirst / 7) + 1;
};

// Fromat date to YYYY-MM-DD
const formatDate = (date) =>{
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Main execution
try {
  const startDate = parseDateUTC(startDateStr);
  const endDate = parseDateUTC(endDateStr);
  const targetDayNum = dayNameToNumber(dayName);

  // validate dates
  if (startDate > endDate) {
    throw new Error("Start date must be before end date");
  }

  const count = countWeekdays(startDate, endDate, targetDayNum);
  const formattedStart = formatDate(startDate);
  const formattedEnd = formatDate(endDate);

  console.log(
    `Between ${formattedStart} and ${formattedEnd}, there are ${count} ${dayName.toLowerCase()}s`
  );
} catch (err) {
  console.error("Error: ", err.message);
}
