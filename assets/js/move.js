var container = document.getElementsByClassName('about');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var elem1 = document.getElementsByClassName('move-elements')[0];
var elem2 = document.getElementsByClassName('move-elements')[1];

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop / scrollArea || 0;

    elem1.style.left = -500 + scrollPercent * window.innerWidth * 0.3 + 'px';
    elem2.style.right = -500 + scrollPercent * window.innerWidth * 0.3 + 'px';
});