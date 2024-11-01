/*
S-TASK:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2

@MITASK
*/
function missingNumber(arr: number[]): number {
  const n = arr.length;
  const expectedSum = (n * (n + 1)) / 2; // 0 dan n gacha bo'lgan sonlar yig'indisi
  const actualSum = arr.reduce((acc, num) => acc + num, 0); // Berilgan arraydagi sonlar yig'indisi
  return expectedSum - actualSum; // Tushib qolgan son
}

// Misol
console.log(missingNumber([3, 0, 1]));

/*
R-TASK:

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;

@MITASK
*/
/*
function calculate(expression: string): number {
  // Stringni "+" bo'yicha bo'lib, har bir sonni olish
  const numbers = expression.split("+").map(Number);
  // Sonlarni yig'indisini hisoblash
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

// Misol
console.log(calculate("5+8"));
console.log(calculate("10+35+50+40+30"));
*/
/*Q-TASK:

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

@MITASK
*/
/*
function hasProperty(obj: object, prop: string): boolean {
  return prop in obj;
}

// Misol uchun:

const car = { brand: "Toyota", model: "Corolla", year: 2020 };

console.log(hasProperty(car, "model"));
console.log(hasProperty(car, "color"));
console.log(hasProperty(car, "year"));
console.log(hasProperty(car, "brand"));
console.log(hasProperty(car, "make"));
*/
/*
P-TASK:

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

@MITASK
*/
/*
function objectToArray(obj: Record<string, any>): [string, any][] {
  return Object.entries(obj) as [string, any][];
}

// Misol
const result = objectToArray({ a: 32, b: 35 });
console.log(result);
*/
/*O-TASK:

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

@MITASK
*/
/*
function calculateSumOfNumbers(arr: any): number {
  return arr.reduce((count: number, ele: any) => {
    return (count += typeof ele === "number" ? ele : 0);
  }, 0);
}

// Misol
const result = calculateSumOfNumbers([100, "100", { son: 10 }, true, 375]);
console.log(result);
*/
/*N-TASK: 

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

@MITASK 
*/
/*
function palindromCheck(str: string): boolean {
  // Kichik harflarga o'tkazish va bo'sh joylarni olib tashlash
  const cleanedStr = str.toLowerCase().replace(/\s+/g, "");

  // Qaytgan stringni orqaga o'girish
  const reversedStr = cleanedStr.split("").reverse().join("");

  // O'xshashlikni tekshirish
  return cleanedStr === reversedStr;
}

// Misol uchun
console.log(palindromCheck("Anna")); // true
console.log(palindromCheck("stepfather")); // false
*/
/* 
M-TASK: 
Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin. 
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];



@MITASK
*/
/*
function getSquareNumbers(
  numbers: number[]
): { number: number; square: number }[] {
  return numbers.map((num) => ({
    number: num,
    square: num * num,
  }));
}

// Misol uchun:
const result = getSquareNumbers([7, 5, 9]);
console.log(result);
*/
/*
L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
*/
/*
function reverseSentence(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// Misol
console.log(reverseSentence("I am doing my homework!"));
*/
/*
K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;

*/
/*
function countVowels(input: string): number {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of input) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Misol uchun
console.log(countVowels("development"));
console.log(countVowels("administration"));
*/
/*J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
*/
/*

function findLongestWord(sentence: string): string {
  // Stringni bo'shliqqa qarab ajratamiz
  const words: string[] = sentence.split(" ");

  // Eng uzun sozni topish uchun boshlang'ich qiymat
  let longestWord: string = "";

  // Har bir sozni tekshiramiz
  for (const word of words) {
    // Agar hozirgi so'z eng uzun so'zdan uzun bo'lsa
    if (word.length > longestWord.length) {
      longestWord = word; // Yangilaymiz
    }
  }

  return longestWord; // Eng uzun sozni qaytaramiz
}

console.log(findLongestWord("I am frontend developer Henry in Korea"));
*/
/**
 * modern frontend development(SINGLE PAGE APPLICATION DEB HAM ATALADI) VA SPA DA frontendimiz json data qabul qiladi backend dan va browserda joyshlashb olgan single page applicationimiz owa json datadan html ni ozi xosil qiladi
 * modern frontend development( yani S.P.A.) REACT LIBRARY sidan foydalanadi. react library framework emas (User's application ini  REACT DA QLAMIZ)
 * traditional frontend development (BSSR DEB HAM ATALADI ) VA EJS FRAMEWORK ORQALI AMALGA OSHIRILADI( BUrak loyihamiz adminkasini EJS da qilyapmiz)
 */

/*I-TASK:

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

*/
/*
function majorityElement(nums: number[]): number | null {
  const countMap: { [key: number]: number } = {};

  nums.forEach((num) => {
    if (countMap[num]) {
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  });

  let majorityElement: number | null = null;
  let maxCount = 0;

  for (const num in countMap) {
    if (countMap[num] > maxCount) {
      maxCount = countMap[num];
      majorityElement = Number(num);
    }
  }

  return majorityElement;
}

console.log(majorityElement([5, 1, 2, 3, 4, 5, 2, 2, 8]));
*/

/*Project Standards:
-Login standards;
-Naming standards: function, method , variable => CamelCase
class=> Pascal
folders, file=>Kebab case
css class=> Snake case
- Error handling

 *
/**request:
 * Traditional API (form POST)
 * REST API
 * GraphQL API
 * 
 * frontend development:
 * Traditional FD => SSR=> EJS
 * MODERN FD => SPA=> REACT
 * 
 
 */
/**COOKIE LAR  HAR BIR REQUESTGA JOINT QILIB OLADI
 * COOKIE OZINI OZI DESTROY QILA OLADI
 */
//validation:
/**
 * frontend validation
 
 * backend validation
 *  database validation
 */
/*H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

@MITASK*/
/*
function getDigits(input: string): string {
  let digits = "";

  for (const char of input) {
    if (/\d/.test(char)) {
      digits += char;
    }
  }

  return digits;
}

// Misol uchun funksiyani chaqirish
const result = getDigits("m14i1tapqrstv879uuu888uuu");
console.log(result);
*/
/*H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

@MITASK
*/
/*
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
*/
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
