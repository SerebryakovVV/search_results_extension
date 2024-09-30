let h3s = document.querySelectorAll('h3:not(div.Wt5Tfe h3)');
let linksArray = [];
for (let i = 0; i < h3s.length; i++) {
   let link = h3s[i].querySelector('a');
   if (link) {
       linksArray.push(link);
       continue;
    }
   linksArray.push(h3s[i]);
}
   
let currentLink = 0;
h3s[currentLink].style.borderLeft = "1px solid red";

document.addEventListener('keydown', (e)=>{
    if (e.altKey && e.key === "j" && currentLink < linksArray.length - 1) {
        h3s[currentLink].style.borderLeft = "none";
        currentLink++;
        h3s[currentLink].style.borderLeft = "1px solid red";
        h3s[currentLink].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (e.altKey && e.key === "k" && currentLink > 0) {
        h3s[currentLink].style.borderLeft = "none";
        currentLink--;
        h3s[currentLink].style.borderLeft = "1px solid red";
        h3s[currentLink].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (e.key === "Enter") {
        linksArray[currentLink].click();
    }
})