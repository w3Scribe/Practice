function printTable(number, times, i = 1) {
  if (i > times) return;
  console.log(number * i);
  printTable(number, times, i + 1);
}

printTable(6, 10);
