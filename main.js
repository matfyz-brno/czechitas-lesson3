/*let title = document.querySelector("h1");
let vstup_uzivatele = prompt("Zadej nový nadpis");
title.innerHTML = vstup_uzivatele; 

let result = document.querySelector(".result")
const start = 15;
const delka = Number(prompt('Zadej délku závodu:'));
const konec = (start + delka) % 24;
result.innerHTML = konec; */

/*let user_name = prompt("Jaké je Vaše jméno a příjmení?: ");
let user_age = Number(prompt("Jaký je Váš věk?: "));
let user_name_age = document.querySelector(".name_age");

user_name_age.innerHTML = "Uživatel " + user_name + " má věk " 
 + user_age; */

let hour_salary = Number(prompt(" Jaká je Vaše hodinová mzda v korunách? :"));
let complete_salary = (hour_salary * 8 * 21);
let salary = document.querySelector(".salary")