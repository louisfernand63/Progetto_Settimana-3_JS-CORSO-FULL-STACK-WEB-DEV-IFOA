/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sum;
sum = 10 + 20;
//console.log(sum);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let random;
random = Math.floor(Math.random() * 20);
//console.log(random);



/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let me;
me = {
  name: "Giulia",
  surname: "Verdi",
  age: 22
}
/*
console.log(me.name);
console.log(me.surname);
console.log(me.age);*/


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function removeAge() {
  delete me.age;
}
//removeAge();
//console.log(me.age);
//console.log(me);


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function addSkills() {
  me.skills = ["HTML", "CSS", "Javascript"];
}
addSkills();
/*console.log(me.skills);
console.log(me);*/


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function addSkills1() {
  me.skills.push("Python");
}
addSkills1();
/*
console.log(me.skills);
console.log(me);
*/


/* ESERCIZIO H
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function addSkills2() {
  me.skills.unshift("Java");
}
addSkills2();
/*
console.log(me.skills);
console.log(me);
*/


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function removeSkills() {
  me.skills.pop();
}
removeSkills();
/*
console.log(me.skills);
console.log(me);
*/

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function dice() {
  let numeroCasuale = 0;
  numeroCasuale = Math.floor(Math.random() * 6) + 1;
  //console.log(numeroCasuale);

  return numeroCasuale;
}
//dice();


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function whoIsBigger(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else if (numero2 > numero1) {
    return numero2;
  } else {
    return "Sono entrambi uguali";
  }
}
/*
console.log(whoIsBigger(1, 2));
console.log(whoIsBigger(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)));
console.log(whoIsBigger(2, 1));
console.log(whoIsBigger(2, 2));
console.log(whoIsBigger(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)));
*/


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function splitMe(stringa) {
  let array = stringa.split(" ");
  //console.log(array);
  return array;
}
/*
splitMe("Mi chiamo Patrcice EMERY LUMUMBA");
console.log(splitMe("Mi chiamo Patrcice EMERY LUMUMBA"));
*/

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function deleteOne(stringa, b) {
  if (b) {
    //console.log(stringa);
    //console.log(stringa.slice(1));
    return stringa.slice(1);
  } else {
    //console.log(stringa);
    //console.log(stringa.slice(0, -1));
    return stringa.slice(0, -1);
  }
}
/*
console.log(deleteOne("I am in love with coding", true));
console.log(deleteOne("I am in love with coding", false));
console.log(deleteOne("I am in love with coding", true));
console.log(deleteOne("I am in love with coding", false));
*/


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function onlyLetters(stringa) {
  //console.log(stringa);
  //console.log(stringa.replace(/\d/g, ''));
  return stringa.replace(/\d/g, '');
}

//console.log(onlyLetters("I have 4 five-star hotels, and 1 billion dollars."));


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function isThisAnEmail(stringa) {
  if (stringa.includes("@")) {
    //console.log(stringa);
    //console.log(true);
    //console.log(stringa.slice(stringa.indexOf("@") + 1));
    //return stringa.slice(stringa.indexOf("@") + 1);
    return true;
  }
  else {
    return false;
  }
}
/*isThisAnEmail("test@test.com");
console.log(isThisAnEmail("test@test.com"));*/

/*isThisAnEmail("testtest.com");
console.log(isThisAnEmail("testtest.com"));*/



/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function whatDayIsIt() {
  let today = new Date();
  //console.log(today);

  let day = today.getDay();
  //console.log(day);

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //console.log(days);

  return days[day];
}
//whatDayIsIt();
//console.log(whatDayIsIt());


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function rollTheDices(num) {
  let sum = 0;
  let values = [];
  for (let i = 0; i < num; i++) {
    let dice1 = dice();
    //console.log(dice1);

    sum += dice1;
    //console.log(sum);

    values.push(dice1);
    //console.log(values);
  }
  return {
    sum: sum,
    values: values
  };
}
/*rollTheDices(2);
//console.log(rollTheDices(2));*/


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function howManyDays(date) {
  let now1 = new Date();
  //console.log(date);

  let diff = now1.getTime() - date.getTime();
  //console.log(diff);

  return Math.floor(diff / (1000 * 3600 * 24)); // calcolo dei giorni trascorsi dalla data inserita come parametro : 2022-01
  //console.log(Math.floor(diff / (1000 * 3600 * 24))); // calcolo e stampo dei giorni trascorsi dalla data inserita come parametro : 2022-01-01
}
/*
howManyDays(new Date("2022-01-01")); // funziona bene 
//console.log(howManyDays("2019-01-01")); // non da nessun risultato 
//console.log(howManyDays(new Date("2022-01-01"))); // mi da undefine, non ho capito perche 
*/



/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function isTodayMyBirthday(date) {
  let date1 = "1997-06-09";
  let myBirthday = `My Birth Day is ${date1}`;
  console.log(myBirthday);

  if (date1 === date) {
    //return true;
    console.log("true");
  } else {
    //return false;
    console.log("false");
  }
}
//isTodayMyBirthday("1997-06-09");
//isTodayMyBirthday("2023-01-16");
//console.log(isTodayMyBirthday("1997-06-09"));


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function deleteProp(obj, prop) {
  delete obj[prop];
  //console.log(obj);

  return obj;
}
//deleteProp({ a: 1, b: 2, nome: "giulia" }, "a");
//console.log(deleteProp({ a: 1, b: 2, nome: "Giulia" }, "a"));
//console.log(deleteProp({ a: 1, b: 2, nome: "Giulia" }, "b"));
//console.log(deleteProp({ a: 1, b: 2, nome: "Giulia" }, "nome"));


/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 12   // ESERCIZIO GIA FATTO IN PRECEDENZA, QUINDI HO LAVORATO AD FARE ALTRO PER TESTARE E FARE PROVE.
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function newestMovie(movies) {
  return movies.sort((a, b) => {
    return a.Year - b.Year;
  })[movies.length - 1];
}
newestMovie(movies);
//console.log(newestMovie(movies));

function oldestMovie(movies) {
  return movies.sort((a, b) => {
    return a.Year - b.Year;
  })[0];
}
oldestMovie(movies);
//console.log(oldestMovie(movies));


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function countMovies(movies) {
  return movies.length;
}
countMovies(movies);
//console.log(countMovies(movies));


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function onlyTheYears(movies) {
  return movies.map((movie) => {
    return movie.Year;
  });
}
//onlyTheYears(movies);
//console.log(onlyTheYears(movies));


/* ESERCIZIO 15  // ANCHE QUESTO ESERCIZIO ERA GIA STATO FATTO A LEZIONE, QUINDI HO MESSO SIA < 2000 CHE > 2000.
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function onlyInLastMillennium(movies) {
  return movies.filter((movie) => {
    return movie.Year < 2000;
  });
}
//onlyInLastMillennium(movies);
//console.log(onlyInLastMillennium(movies));

function onlyInLastMillennium1(movies) {
  return movies.filter((movie) => {
    return movie.Year > 2000;
  });
}
//onlyInLastMillennium1(movies);
//console.log(onlyInLastMillennium1(movies));



/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function sumAllTheYears(movies) {
  for (let i = 0; i < movies.length; i++) {
    //console.log(movies[i].Year);

    let year = movies[i].Year;
    //console.log(year);

    let sumAll = year + year;
    //console.log(sumAll);

    return sumAll;
  }
}
sumAllTheYears(movies);
//console.log(sumAllTheYears(movies));


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function searchByTitle(stringa) {
  for (let i = 0; i < movies.length; i++) {
    //console.log(movies[i].Title);

    let title1 = movies[i].Title;
    //console.log(title1);

    if (title1.includes(stringa)) {
      return movies[i];
      //console.log(movies[i]);
    }
  }
}
//searchByTitle("Tar");
//console.log(searchByTitle("Tar"));

//searchByTitle("Aven");
//console.log(searchByTitle("Aven"));


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function searchAndDivide(stringa) {
  let match = [];
  let unmatch = [];

  for (let i = 0; i < movies.length; i++) {
    //console.log(movies[i].Title);

    let title1 = movies[i].Title;
    //console.log(title1);

    if (title1.includes(stringa)) {
      match.push(movies[i]);
      //console.log(movies[i]);
    } else {
      unmatch.push(movies[i]);
      //console.log(movies[i]);
    }
  }
  return {
    match: match,
    unmatch: unmatch,
  };
}
//searchAndDivide("Tar");
//console.log(searchAndDivide("Tar"));

//searchAndDivide("Aven");
//console.log(searchAndDivide("Aven"));


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
/* SCRIVI QUI LA TUA RISPOSTA*/
function removeIndex(index) {
  let newMovies = [];
  for (let i = 0; i < movies.length; i++) {
    if (i !== index) {
      newMovies.push(movies[i]);
    }
  }
  return newMovies;
}
//console.log(movies);

//removeIndex(1);
//console.log(removeIndex(1));

//removeIndex(8);
//console.log(removeIndex(8));


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
/* SCRIVI QUI LA TUA RISPOSTA*/
function getElementById(id) {
  return document.getElementById(id);
}
//getElementById("container");
//console.log(getElementById("container"));


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
/* SCRIVI QUI LA TUA RISPOSTA*/
function getAllTd() {
  return document.querySelectorAll("td");
}
//getAllTd();
//console.log(getAllTd());


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
/* SCRIVI QUI LA TUA RISPOSTA*/
function printAllTd() {
  let td = getAllTd();
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
    //return td[i].innerText;
  }
}
//printAllTd();
//console.log(printAllTd());


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
/* SCRIVI QUI LA TUA RISPOSTA*/
function addRedBackground() {
  let links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
}
//addRedBackground();
//console.log(addRedBackground());

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
/* SCRIVI QUI LA TUA RISPOSTA*/
function addElement() {
  let list = document.getElementById("myList");
  let li = document.createElement("li");
  li.innerText = "Nuovo elemento";
  list.appendChild(li);
}
//addElement();
//console.log(addElement());

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
/* SCRIVI QUI LA TUA RISPOSTA*/
function emptyList() {
  let list = document.getElementById("myList");
  list.innerHTML = "";
}
//emptyList();
//console.log(emptyList());

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
/* SCRIVI QUI LA TUA RISPOSTA*/
function addClass() {
  let table = document.getElementById("myTable");
  let tr = table.querySelectorAll("tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add("test");
  }
}
//addClass();
//console.log(addClass());


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
/* SCRIVI QUI LA TUA RISPOSTA*/ //NON MI VIANE LA FORMA GIUSTA
function halfTree() {
  let tree = document.getElementById("myTree");
  let tr = tree.querySelectorAll("tr");
  for (let i = 0; i < tr.length; i++) {
    if (i % 2 == 0) {
      tr[i].innerHTML = "*";
    } else {
      tr[i].innerHTML = "***";
    }
  }
}
//halfTree(10);
//console.log(halfTree(20));


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
/* SCRIVI QUI LA TUA RISPOSTA*/  //NON MI VIANE LA FORMA GIUSTA
function tree() {
  let tree = document.getElementById("myTree");
  let tr = tree.querySelectorAll("tr");
  for (let i = 0; i < tr.length; i++) {
    if (i % 2 == 0) {
      tr[i].innerHTML = "*";
    } else {
      tr[i].innerHTML = "***";
    }
  }
}
tree(10);
//console.log(tree(20));

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
/* SCRIVI QUI LA TUA RISPOSTA*/  //DA RIFARE IN QUANTO NON DA RIL RISULTATO CORRETTO.
function isItPrime(num) {
  //let num = document.getElementById("myNumber").value;
  //let prime = true;

  if (num % 1 === 0 && num % num === 0) {
    return true;
  } else {
    return false;
  }

  /*if (prime) {
    return true;
  } else {
    return false;
  }*/
}
//isItPrime(5);
console.log(isItPrime(4));



