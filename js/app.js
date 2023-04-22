function myFunction(x) {
    if (x.matches) { // If media query matches
        window.onload = function() {
            document.querySelector('.nav-links').className = 'navDispOff';
          };
    } else {
        document.querySelector('.nav-links').classList.remove('navDispOff');
    }
  }
  
  var x = window.matchMedia("(max-width: 780px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  
  
  



const navSlide = () => {
    const burger = document.querySelector(".burger");
    // const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const nav = document.querySelector(".nav-links");
    

    burger.addEventListener("click",() => {

        //toggle nav
        nav.classList.toggle("nav-active");

        //animate nav container
        if (nav.style.animation) {
            nav.style.animation = ""
        } else {
            nav.style.animation = `navLinkFade ease forwards 0.5s`;
        };


        //animate links
        navLinks.forEach((link,index)=>{
           if (link.style.animation) {
               link.style.animation = ""  
           } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
           }
         });

         //burger animation
         burger.classList.toggle("toggle");
         nav.classList.toggle("navDispOff");
         nav.classList.toggle("nav-links");
        
    });    

   
}



navSlide()

//quote Change

var prevQuote = document.querySelector(".arrowContainer #prevQuote");
var nextQuote = document.querySelector(".arrowContainer #nextQuote");
var quotes = document.querySelectorAll(".changeQuote");
var quoteNo = 0
function resetQuotes() {
    quotes.forEach(quote => {
        quote.classList.remove("showQuote")
        quote.classList.add("hideQuote")
    });
}

function assignQuote(quoteNo) {
    for (var q = 0; q < quotes.length; q++) {
        quotes[quoteNo].classList.add("showQuote")
        quotes[quoteNo].classList.remove("hideQuote")
    }
}

prevQuote.addEventListener("click", function() {
    resetQuotes()
    quoteNo = quoteNo - 1
    if ( quoteNo >= 0) {
        assignQuote(quoteNo)
    } else {
        quoteNo = quotes.length - 1
        assignQuote(quoteNo)
    }
})

nextQuote.addEventListener("click", function() {
    resetQuotes()
    quoteNo = quoteNo + 1
    if ( quoteNo < quotes.length) {
        assignQuote(quoteNo)
    } else {
        quoteNo = 0
        assignQuote(quoteNo)
    }
})

setInterval(() => {
    resetQuotes()
    quoteNo = quoteNo + 1
    if ( quoteNo < quotes.length) {
        assignQuote(quoteNo)
    } else {
        quoteNo = 0
        assignQuote(quoteNo)
    }
}, 10000);



var prevProject = document.querySelector(".arrowContainer1 #prevProject");
var nextProject = document.getElementById("nextProject");
var scrollProjectImgs = document.querySelector(".scrollProjectImgs")

function prevScrollBtn() {
    scrollProjectImgs.scrollBy(-320, 0);
}

function nextScrollBtn() {
    scrollProjectImgs.scrollBy(340, 0);
}

setInterval(() => {
    nextScrollBtn();
}, 30000);

prevProject.addEventListener("click", function() {
    prevScrollBtn();
});
nextProject.addEventListener("click", function() {
    nextScrollBtn();
});






