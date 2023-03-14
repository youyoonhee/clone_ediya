
(function() {
	let headernav = document.getElementById('#header'); 
    window.addEventListener('scroll', function(){
    headernav.classList.add('on')
    })
    console.log('ddd')
})();



$(document).ready(function(){

    $('#fullpage').fullpage({
        autoScrolling : true,
        //scrollHorizontally : true
    });
})


