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

/* неделя 9 задание 1*/
let timeOfDay = prompt("Введите время суток (утро, день, вечер):").trim();
if (typeof timeOfDay !== "string" || timeOfDay === "") {
  alert(
    "Ошибка: Пожалуйста, введите пожалуйста корректное время суток (утро, день или вечер)."
  );
} else {
  let drink;
  if (timeOfDay.toLowerCase() === "утро") {
    drink = "кофе";
  } else if (timeOfDay.toLowerCase() === "день") {
    drink = "чай";
  } else if (timeOfDay.toLowerCase() === "вечер") {
    drink = "горячий шоколад";
  } else {
    alert("Ошибка: Используйте только указанные значения.");
  }

  if (drink) {
    alert(`Рекомендуем выпить: ${drink}.`);
  }
}

/*задание 2 */
let user = {
  name: prompt("Введите ваше имя:").trim(),
  age: parseInt(prompt("Введите ваш возраст:").trim(), 10),
  subject: prompt("Введите ваш предмет:").trim(),
  grade: prompt("Введите вашу оценку:").trim(),
};
console.log("Изначальная информация о пользователе:", user);
user.age += 5;
console.log("Обновленная информация:", user);

/*задание 3 */
const movies = [
  {
    title: "Начало",
    director: "Кристофер Нолан",
    year: 2010,
    genre: "фантастика",
  },
  {
    title: "Форрест Гамп",
    director: "Роберт Земекис",
    year: 1994,
    genre: "драма",
  },
  {
    title: "Криминальное чтиво",
    director: "Квентин Тарантино",
    year: 1994,
    genre: "боевик",
  },
  {
    title: "Зеленая миля",
    director: "Фрэнк Дарабонт",
    year: 1999,
    genre: "триллер",
  },
  {
    title: "Жизнь прекрасна",
    director: "Роберто Бениньи",
    year: 1997,
    genre: "комедия/драма",
  },
];
console.log("Режиссер второго фильма:", movies[1].director);
console.log("Жанр четвертого фильма:", movies[3].genre);

/*задание 4*/
let shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
shoppingList.unshift("вода");
console.log("добавили товар в начало:", shoppingList);

shoppingList.pop();
console.log("удалили последний товар:", shoppingList);

shoppingList.splice(2, 1, "йогурт", "овсянка");
console.log("заменили третий элемент:", shoppingList);
