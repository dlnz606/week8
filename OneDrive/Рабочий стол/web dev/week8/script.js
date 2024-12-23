/*задание 1*/
const firstName = "Dilnaz";
const lastName = "Mustafinova";
const age = "23";
const logMessage = `Меня зовут ${firstName} ${lastName} и мне ${age} года`;
console.log(logMessage);

/*задание 2*/
const city = "Астана";
console.log("Я родом из города " + city);

/*задание 3*/

let password = "qwerty";
let hasAccess = password.trim().length > 0;
console.log(password);
console.log(hasAccess.toString());

/*задание 4*/

let isMember = false;
isMember = isMember.toString();
console.log(typeof isMember);

/*Задание 5 */
let cartItems = 0;
let nocartItems = !cartItems;
console.log("Корзина пуста? " + nocartItems);

/*Задание 6*/
const avarageScore = 89.75695;
console.log(avarageScore.toFixed(1));

/*Задание 7*/
const greetingMessage =
  "      Приветствуем вас в мире программирования!        ";
const greetingMessagetrim = greetingMessage.trim();
const greetingMessageUpperCase = greetingMessage.toUpperCase();
const greetingMessageIncludes = greetingMessage.includes("программирования");
console.log(greetingMessagetrim);
console.log(greetingMessageUpperCase);
console.log(greetingMessageIncludes);
