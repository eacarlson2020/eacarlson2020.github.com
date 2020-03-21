let pageTop;
    let bodyTag = document.querySelector('body');

    window.addEventListener('scroll', function(){

        pageTop = window.pageYOffset || document.document.scrollTop;

        switch(true){
            case pageTop < 10: bodyTag.className="one";break;
            case pageTop < 250: bodyTag.className="two"; break;
            case pageTop < 500: bodyTag.className="three"; break;
            case pageTop < 2500: bodyTag.className="four"; break;
            default: bodyTag.className="five";
        }
});

const imgTag = document.querySelector('img');

imgTag.addEventListener('mouseover', function(){
  imgTag.className="appear";
});


