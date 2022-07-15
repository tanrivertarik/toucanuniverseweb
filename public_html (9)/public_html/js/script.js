$(document).ready(function(){

    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    var modal = $('.ud-modal');
        modalWrapper = $('.ud-modal .wrapper');
    
    $(document).on('click', '#ud-modal-open', function(){
        modal.css('visibility', 'visible');
        
        setTimeout(() => {
            modal.css('opacity', 1);
        }, 50);
    });

    $(document).on('click', '#ud-modal-close', function(){
        modal.css('opacity', 0);
    
        setTimeout(() => {
            modal.css('visibility', 'hidden');
        }, 200);
    });

    var mobileMenu = $('.ud-mobile-menu');
        mobileMenuOpen = $('#ud-mobile-menu-open');
        mobileMenuClose = $('#ud-mobile-menu-close');

    mobileMenuOpen.click(function(){
        mobileMenu.css('top', 0);
        mobileMenu.css('visibility', 'visible');
    });

    mobileMenuClose.click(function(){
        mobileMenu.css('top', '-100%');

        setTimeout(() => {
            mobileMenu.css('visibility', 'hidden');
        }, 400);
    });

    var count = 1;//Number(document.getElementById('#count'));
        countMinus = $('.ud-modal #count-minus');
        countPlus = $('.ud-modal #count-plus');

    countMinus.click(function(){
        if(count > 1){
            count--;
            setPriceOnSite(count);
            $('#count').html(count);
        }
    });

    countPlus.click(function(){
        count++;
        setPriceOnSite(count);
        $('#count').html(count);
    });

    var date = new Date('January 25, 2022 20:00:00');
    $('#ud-countdown').countdown({
        until: date,
        format: 'dHM'
    });
    $.countdown.setDefaults($.countdown.regionalOptions['tr']);

    var countDownAmount = $('#ud-countdown').countdown('getTimes');
    if(countDownAmount[3] == 0 && countDownAmount[4] == 0 && countDownAmount[5] == 0 && countDownAmount[6] == 0){
        $('#ud-countdown').remove();

        $('.ud-landing-section .wrapper').append(`
        <div class="button-container wow fadeInDown">
            <button id="ud-modal-open">Mint now!</button>
        </div>
        `);
    }

});

