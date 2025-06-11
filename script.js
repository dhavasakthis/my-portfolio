$(document).ready(function() {
    // Smooth scrolling for nav links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    });

    // Certificate enlargement with modal
    $('.cert-image').on('click', function() {
        const src = $(this).attr('src');
        if ($(this).hasClass('enlarged')) {
            $(this).removeClass('enlarged');
            $('#modal-overlay').remove();
        } else {
            $('.cert-image').removeClass('enlarged');
            $(this).html(`
                <div id="modal-overlay">
                    <img src="${src}" alt="Enlarged Certificate">
                    <span class="modal-close">&times;</span>
                </div>
            `).appendTo('body');
            $(this).addClass('enlarged');
        }
    });

    // Close modal on click
    $(document).on('click', '.modal-close, #modal-overlay', function() {
        $('#modal-overlay').remove();
        $('.cert-image').removeClass('enlarged');
    });

    // Project details toggle
    window.toggleDetails = function(element) {
        const details = $(element).find('.project-details');
        $('.project-details').not(details).slideUp('fast');
        details.slideToggle('fast');
    };

    // Section animations on scroll
    const sections = $('section');
    $(window).on('scroll', function() {
        sections.each(function() {
            const top = $(this).offset().top - $(window).height() / 1.5;
            if ($(window).scrollTop() > top) {
                $(this).addClass('visible');
            }
        });
    });
});
