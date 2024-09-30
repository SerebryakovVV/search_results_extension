console.log("extension says hello");


   // nodelist doesn't allow to modify 
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
   console.log(linksArray);


   let currentLink = 0;
   h3s[currentLink].style.borderLeft = "1px solid red";

   // .focus() 
   // and then .click() or enter

   document.addEventListener('keydown', (e)=>{
       if (e.altKey && e.key === "j" && currentLink < linksArray.length - 1) {
           h3s[currentLink].style.borderLeft = "none";
           currentLink++;
           h3s[currentLink].style.borderLeft = "1px solid red";
           h3s[currentLink].scrollIntoView({ behavior: 'smooth', block: 'center' });
           
           console.log("first");
       }
       if (e.altKey && e.key === "k" && currentLink > 0) {
           h3s[currentLink].style.borderLeft = "none";
           currentLink--;
           h3s[currentLink].style.borderLeft = "1px solid red";
           h3s[currentLink].scrollIntoView({ behavior: 'smooth', block: 'center' });
           console.log("second");
       }
       if (e.key === "Enter") {
           linksArray[currentLink].click()
           console.log("third");
       }
   })