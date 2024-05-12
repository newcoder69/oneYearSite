window.onscroll = function(){
    var navbar = document.querySelector('.nav-bar');
    var pictureDiv = document.querySelector('.picture-container').getBoundingClientRect();
    if (window.scrollY > pictureDiv.top - navbar.offsetHeight && window.scrollY < pictureDiv.bottom)
    {
        navbar.style.backgroundColor = '#000';

    }else{
        navbar.style.backgroundColor = 'transparent'
    }
};