/*J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
*/

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

 */
/**
 * Traditional API
 * REST API
 * GraphQL API
 * ....
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
