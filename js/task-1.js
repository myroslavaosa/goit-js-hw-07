const liItem = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${liItem}`);

const getH2 = document.querySelectorAll("h2");
getH2.forEach(h2 => {
    console.log(`Category: ${h2.textContent}`);
    
    const parentItem = h2.parentElement;
    
    const allLi = parentItem.querySelectorAll("ul li").length;
    console.log(`Elements: ${allLi}`);
});