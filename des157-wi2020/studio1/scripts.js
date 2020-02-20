(function(){
  "use strict"
document.getElementById("myform").addEventListener("submit", function(event){
  event.preventDefault();
  const formData = document.querySelectorAll("input[type=text]");
  const words = [];

  for( let i=0; i<formData.length; i++){
      words.push(formData[i].value);    
  }
  console.log(words);
  makeMadLib(words);
  
});


  function makeMadLib(theWords){
   const madlib = `When I went to campus today, I met ${theWords[0]} who was ${theWords[1]}. ${theWords[0]} invited me to a mysterious gathering. I agreed, and together we ${theWords[2]} went to the location of said mysterious gathering. When we arrived we found a crowd of ${theWords[4]} ${theWords[5]} and I was so scared I never went to campus again.`;

    const mlContainer = document.getElementById('madlib');
    mlContainer.innerHTML = `<p>${madlib}</p>`;

      mlContainer.setAttribute("class", "visible");
    }

   //page will transition to dark purple color as user scrolls to reveal eyes that are watching// 
let pageTop;
    let bodyTag = document.querySelector('body');

    window.addEventListener('scroll', function(){

        pageTop = window.pageYOffset || document.document.scrollTop;

        switch(true){
            case pageTop < 10: bodyTag.className="one";break;
            case pageTop < 50: bodyTag.className="two"; break;
            case pageTop < 1500: bodyTag.className="three"; break;
            case pageTop < 2000: bodyTag.className="four"; break;
            default: bodyTag.className="five";
        }
});

  //changes the title of the page and makes it appear and grow larger upon moving their cursor over the letters//
    const h1Tag = document.querySelector('h1');

    h1Tag.addEventListener('mouseover', function(){
      h1Tag.className="big";
    });

    h1Tag.addEventListener('mouseout', function(){
        divTag.removeAttribute('class');
    });


}());