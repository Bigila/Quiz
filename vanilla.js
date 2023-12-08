
let details = [
      
   {
      id:1,
     question: 'Q1: Where is Taj Mahal ?',
     option1:'Agra',
     option2:'Varanasi',
     option3:'Haryana',
     option4:'Karnataka',
  
   },

   {
      id:2,
      question: 'Q2: Where is Kashi Vishwanath temple ?',
      option1:'Delhi',
      option2:'Varanasi',
      option3:'Haryana',
      option4:'Karnataka',
     
   },

   {
      id:3,
      question: 'Q3: Which one is capital of india ?',
      option1:'Punjab',
      option2:'New Delhi',
      option3:'Haryana',
      option4:'Karnataka',
 
   },

   {
      id:4,
      question: 'Q4: What is 2+2 ?',
      option1:'1',
      option2:'4',
      option3:'33',
      option4:'44',
  
   },

   {
      id:5,
      question: 'Q5: What is 4*4?',
      option1:'9',
      option2:'16',
      option3:'2',
      option4:'0',
  
   }

];

let html = '' ;
details.forEach(data => {

html+= `

            <h1 class="heading">${data.question}</h1>
            <div>
               <button  data-product-id=${data.id} class="options">${data.option1}</button>
               <button  data-product-id=${data.id} class="options">${data.option2}</button>
               <button  data-product-id=${data.id} class="options">${data.option3}</button>
               <button  data-product-id=${data.id} class="options">${data.option4}</button>
            </div>
`;



})

document.querySelector('.container').innerHTML = html;





let answer = [] ;
answer.push(details[0].option1 + details[0].id);
answer.push(details[1].option2 + details[1].id);
answer.push(details[2].option2 + details[2].id);
answer.push(details[3].option2 + details[3].id);
answer.push(details[4].option2 + details[4].id);




let scores = 0;
let right = 0;
let wrong = 0;
let n = 0 ;
let selected =[];


   document.querySelectorAll('.options').forEach((item) => {
      let id = item.dataset.productId;
   
 
   let matchingId;
      for(let i =0; i<details.length; i++) {
        if( item.dataset.productId == details[i].id) {
         matchingId =  details[i];
        item.addEventListener("click", () => {
         
          item.style.backgroundColor = "rgb(90,90,110)" ;
         
           selected.push(item.innerHTML + id);
           
   
        })
       
        }
       
      }
      
   return selected;
    
   });


document.querySelector(".submit").addEventListener("click", () => {
   console.log(answer)
   console.log(selected);
  for(let i =0; i<selected.length; i++) {
   if(answer.indexOf(selected[i]) > -1) {
      right+= 1;
   } else {
      wrong+=1;
   }
  }
scores = scores + right ;
  console.log(right);
  console.log(wrong);
  console.log(scores);
 
  document.querySelector('.result').innerHTML =`
  Answers--

  Q1 : Agra,
  Q2: Varanasi,
  Q3: New Delhi,
  Q4: 4,
  Q5:16
  `;

  alert(`Your score : ${scores} 
  Right: ${right}
  Wrong:${wrong}`);
 
})





