"use strict";

const filter = document.querySelector('#filter');
const result = document.querySelector("#result");
const listItems = [];

getUser();
filter.addEventListener("input", (e) => searchUser(e.target.value));

async function getUser(){
    const res = await fetch("https://randomuser.me/api?results=30")
    const {results} = await res.json();

    
    result.innerHTML = "";

    results.forEach(user =>{
        const userTag = document.createElement("li");
        listItems.push(userTag);
        userTag.innerHTML =`
        <img src =${user.picture.large}>
        <div class ="user-info">
        <h4 class ="title"> ${user.name.first} ${user.name.last}</h4>
        <small>${user.location.state}</small>
        </div>
        `;

        result.appendChild(userTag);
    })

}


function searchUser(input){
    listItems.forEach(messenger =>{
        if(messenger.innerText.toLowerCase().includes(input.toLowerCase())){
            messenger.classList.remove("hide");
        }else{
            messenger.classList.add("hide");
        }
    })
    
}
