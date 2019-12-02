"use strict";

function formatString{ rez = formatString <= 41 ? formatString : formatString.slice(0, 41) + "..." }



console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'),
)
