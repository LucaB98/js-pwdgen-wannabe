console.log('JS OK')

/*
1- chiediamo all'utente il suo nome
2- chiediamo il suo cognome
3- poi chiediamo il suo colore preferito
4- Infine generiamo una password con i dati che l'utente ci ha fornito, nella   forma: nomecognomecolorepreferito23
*/



const firstname = prompt('Qual è il tuo nome?')
console.log(firstname)

const lastname = prompt('Qual è il tuo cognome?')
console.log(lastname)

const favoriteColor = prompt('Il tuo colore preferito?')
console.log(favoriteColor)

let password = document.getElementById('secret').innerHTML = firstname + lastname + favoriteColor +23;
console.log(password)
