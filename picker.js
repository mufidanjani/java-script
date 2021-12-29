const countainer = document.querySelector('.countainer');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

countainer.addEventListener('click', function(e) {

    if(e.target.className == 'thumb' ){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb){
            //if( thumb.classList.contains('active') ){
            //    thumb.classList.remove('active');
            //}
            thumb.className = 'thumb';
        });
        e.target.classList.add('active');

    }
})