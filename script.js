let data =[
    {
        id: 1,
        name: "Sandeep anumalla",
        title: "Web developer",
        image:"Sandeep.jpg",
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem ipsa accusamus vitae quo ullam architecto labore? Accusamus excepturi ducimus impedit eveniet at maiores cupiditate, aliquid dolores culpa labore hic!",
    },
    {
        id: 2,
        name: "Andrea Hersey",
        title: "Musician",
        image:"90.jpg",
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem ipsa accusamus vitae quo ullam architecto labore? Accusamus excepturi ducimus impedit eveniet at maiores cupiditate, aliquid dolores culpa labore hic!",
    },
    {
        id: 3,
        name: "Angelica Ferguson",
        title: "Artist",
        image:"79.jpg",
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem ipsa accusamus vitae quo ullam architecto labore? Accusamus excepturi ducimus impedit eveniet at maiores cupiditate, aliquid dolores culpa labore hic!",
    },
    {
        id: 4,
        name: "Sharon Robbins",
        title: "Writer",
        image:"73.jpg",
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem ipsa accusamus vitae quo ullam architecto labore? Accusamus excepturi ducimus impedit eveniet at maiores cupiditate, aliquid dolores culpa labore hic!",
    },
    {
        id: 5,
        name: "Harley Erickson",
        title: "Singer",
        image:"32.jpg",
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem ipsa accusamus vitae quo ullam architecto labore? Accusamus excepturi ducimus impedit eveniet at maiores cupiditate, aliquid dolores culpa labore hic!",
    }



]

const dp = document.getElementById("dp");
const person_name = document.querySelector(".person_name").children[0];
const title = document.querySelector(".person_title").children[0];
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const comments = document.querySelector(".comment").children[0];
const surpriseButton = document.querySelector(".surpriseMe");

const showData = (person)=>{
    const currentPerson = data[person];
    dp.style.background= "url("+currentPerson.image+")";
    dp.style.backgroundSize= "cover";
    person_name.textContent = currentPerson.name;
    title.textContent = currentPerson.title;
    comments.textContent = currentPerson.comment;
}


let current = 0;
nextButton.addEventListener("click",()=>{
    current++;
    
    if(current > data.length-1){
        current=0;
    }
    showData(current);

})

prevButton.addEventListener("click",()=>{
    
    
    if(current <= 0){
        current=data.length;
    }
    current--;
    console.log("clicked",current);
    showData(current);

})





surpriseButton.addEventListener("click",()=>{
    const random = Math.floor(Math.random()*5);
    showData(random);
})