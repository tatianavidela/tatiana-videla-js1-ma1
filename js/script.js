// Question 1:

const cat = {
    complain: catSays
};

function catSays(sound) {
    console.log(sound)
};
catSays("Meow!");


// Question 2:

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3: 

heading.style.fontSize = "2em";


// Question 4:

heading.classList.add("subheading");


// Question 5:

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red"
};


// Question 6:

const resultsContainer = document.querySelector (".results");

resultsContainer.innerHTML = `<p>New paragraph </p> `;
resultsContainer.style.backgroundColor = "yellow";


// Question 7:
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function myList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
};

myList (cats)


// Question 8:
function createCats (cats) {
    
    let catsInfo = "";

    for(let i = 0; i < cats.length; i++){
        
        let displayAge = "Age unknown";

        if(cats[i].age){
            displayAge = cats[i].age;
        }

        catsInfo = catsInfo + 
        `<div>
            <h5> ${cats[i].name}</h5>
            <p>${displayAge}</p>
        </div>`;
    }

    return catsInfo
    
}

const finalhtml = createCats(cats);
const catsContainer = document.querySelector(".cat-container");

catsContainer.innerHTML = finalhtml;

