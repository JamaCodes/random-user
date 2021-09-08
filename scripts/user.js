export const Results = (resultsobject) => {
 
  const dateObj = new Date(resultsobject.registered.date);
   const formattedDate = dateObj.toDateString(); 
  
  return `
     <section class="results">
       <header>
           <h2 class="result__title">${resultsobject.name.first}${resultsobject.name.last}</h2>
       </header>
       <img class="post__image" src="${resultsobject.picture.medium}" />
        <p>${formattedDate}</p>
        <div><button id="getuser--${resultsobject.id}">Get User</button></div>
     </section>
   `
 }

 
