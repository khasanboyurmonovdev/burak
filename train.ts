/*H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

@MITASK
*/
let str = getPositive([3, -6, 2, 15, -26, 38, -5, 5]);
function getPositive(numbers: number[]): string {
  // Filter orqali faqat musbat sonlarni olish
  const positiveNumbers = numbers.filter((num) => num > 0);
  // Musbat sonlarni string holatiga o'tkazish
  const positiveString = positiveNumbers.join("");
  return positiveString;
}
console.log(typeof str);
// Misol uchun:
console.log(getPositive([3, -6, 2, 15, -26, 38, -5, 5]));

/*G-TASK: 
Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
@MITASK */
/*
function getHighestIndex(arr) {
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

// Misol:
console.log(getHighestIndex([70, 80, 101, 1111, 999]));
*/
