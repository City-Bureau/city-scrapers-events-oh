const currentYear = (new Date()).getFullYear();
const years = [currentYear, currentYear + 1];

const config = {
  EVENT_SOURCES: [
    "https://cityscrapers.blob.core.windows.net/meetings-feed-cle/upcoming.json",
    "https://cityscrapers.blob.core.windows.net/meetings-feed-akr/upcoming.json",
  ],
  REGION_OPTIONS: [
    { label: "Cleveland", value: "cle" },
    { label: "Cuyahoga County", value: "cuya" },
    { label: "Akron", value: "akr" },
    { label: "Summit County", value: "summ" },
  ],
  MONTH_OPTIONS: [
    { label: "January", value: 0 },
    { label: "February", value: 1 },
    { label: "March", value: 2 },
    { label: "April", value: 3 },
    { label: "May", value: 4 },
    { label: "June", value: 5 },
    { label: "July", value: 6 },
    { label: "August", value: 7 },
    { label: "September", value: 8 },
    { label: "October", value: 9 },
    { label: "November", value: 10 },
    { label: "December", value: 11 }
  ],
  YEAR_OPTIONS: years.map(y => {
    return { label: y, value: y };
  })
};

export default config;
