
let myLeads =[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItem = "";
    for(let i = 0; i< leads.length; i++){
        //listItem +="<li> <a target='_blank' href='#'>"+ myLeads[i] + "</a></li>";
        listItem += `
            <li>
                <a target="_blank" href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `

    }

    ulEl.innerHTML = listItem;
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    render(myLeads);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));

    console.log(localStorage.getItem("myLeads"))
})

// let boxContent = document.getElementById("box");
// boxContent.addEventListener("click", function(){
//     console.log("I want to open the box! When it's clicked");
// })

//console.log( Boolean(""))//false
//console.log( Boolean("0"))//true
//console.log( Boolean(100))//true
//console.log( Boolean(null))//false
//console.log( Boolean([0]))//true
//console.log( Boolean(-0))//false