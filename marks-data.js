let students = [
  {
    name: "Hasan anamul",
    roll: 01,
    marks: {
      bn: 78,
      en: 82,
      ss: 72,
      s: 76,
    },
  },
  {
    name: "Rafinul akon",
    roll: 02,
    marks: {
      bn: 68,
      en: 72,
      ss: 52,
      s: 76,
    },
  },
  {
    name: "Jubayer akon",
    roll: 03,
    marks: {
      bn: 58,
      en: 82,
      ss: 79,
      s: 86,
    },
  },
  {
    name: "Shahin akon",
    roll: 04,
    marks: {
      bn: 70,
      en: 62,
      ss: 74,
      s: 86,
    },
  },
];

students.map((data) => {
  console.log(data.name);
});
