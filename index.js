require("colors");

const Colors = { GREEN: 0, YELLOW: 1, RED: 2 };

let carentColor = Colors.GREEN;
const leftRest = process.argv[2];
const rightRest = process.argv[3];
let noPrimeNum = true;

if (isNaN(leftRest) || isNaN(rightRest)) {
  console.log("Введите два числа");
  return;
}

const isPrimNum = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return true;
};

const chengeColor = () => {
  carentColor++;
  if (carentColor > Colors.RED) carentColor = Colors.GREEN;
};

const colorPrint = (num) => {
  if (noPrimeNum) noPrimeNum = false;
  switch (carentColor) {
    case Colors.RED:
      console.log(`${num}`.red);
      break;
    case Colors.GREEN:
      console.log(`${num}`.green);
      break;
    case Colors.YELLOW:
      console.log(`${num}`.yellow);
      break;
  }
  chengeColor();
};

for (let i = leftRest; i <= rightRest; i++) {
  if (isPrimNum(i)) colorPrint(i);
}
if (noPrimeNum)
  console.log(`что-то пошло не так[${leftRest},${rightRest}]`.red);

