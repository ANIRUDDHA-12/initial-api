// fetch -  axios -> to make api call and get data
// libraries-> [cllection of code written by js developers to handle making api call and getting data easiliy]

async function getData(){
    let input=document.getElementById("searchBox")
    let data = await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch="+input.value)
  
    let city = await data.json();
    for(i=0;i<city.query.search.length;i++){
      console.log(city.query.search[i].title)
      console.log(city.query.search[i].snippet)
      createCard(city.query.search[i].title,city.query.search[i].snippet)
    }
  }

  getData()
  let first=document.getElementById("content")


function createCard( title,description){
let card=document.createElement("section")
card.setAttribute("class","container")
let cardHeader=document.createElement("h3")
let carDescription=document.createElement("p")
cardHeader.style="font-family: Verdana, Geneva, Tahoma, sans-serif;height:auto;margin:20px;"
cardHeader.innerText=title
carDescription.innerText=description
card.append(cardHeader,carDescription)
console.log(card)
first.appendChild(card)
}  



  