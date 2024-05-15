const scoreToGrade = {
  90: "A",
  80: "B",
  70: "C",
  60: "D",
};

const keys = Object.keys(scoreToGrade);

const func = (score) => {
  for (let i = 0; i < keys.length; i++) {
    if (score >= keys[i]) {
      return scoreToGrade[keys[i]];
    }
  }
};

console.log(func(85));
