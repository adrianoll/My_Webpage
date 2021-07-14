//Responsividade do navbar
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link) =>{
            link.style.animation
                ?(link.style.animation = "")
                :(link.style.animation = "navLinkFade 0.5s ease forwards 0.3s");
    });
}

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

//Transparência
function scroll(){
    var scrollTop = window.pageYOffset;
    if (scrollTop > 30){
        try{
            document.getElementById('antes').id = 'depois'
        }   
        catch (e) {false}
    }
    else{
        try{
            document.getElementById('depois').id = 'antes'
        }
        catch (e){false}
    }
}

//Parallax - NÃO FUNCIONAL
function parallax(){
    //Declarando as variáveis
    var item_1 = document.getElementById('video');
    var item_2 = document.getElementById('title_');

    //Aplicar posição
    item_1 = style.top = -(window.pageYOffset/3) + 'px';
    item_2 = style.top = -(window.pageYOffset/6) + 'px';
}

//Responsividade do navbar
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();

//Transparência ao rolar a tela
window.onscroll = scroll;


//Call Carousel Bootstrap
var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel);

// pré-carregar imagens
var preloadImages = [];
$('.efeito img').each(function() {
    preloadImages.push($(this).attr('src'));
});
$.each(preloadImages, function () {
    $('<img/>').attr('src', this);
});

// Evento click para trocar imagem
$(".navbar img").click(function() {

    var $mini  = $(this),
        $dest  = $(".efeito img"),
        oldSrc = $dest.attr('src');

    // envolvemos o código da troca da imagem pelo método fadeout
    $dest.fadeOut( "slow", function() {
        $dest.on('load', function() {
            $dest.fadeIn("slow");  // acabamos tudo, apresentamos com fadeIn
        }).attr('src', $mini.attr('src'));
        $mini.attr('src', oldSrc);
    });
});
