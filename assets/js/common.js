// add toggle functionality to abstract and bibtex buttons
$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});

// bootstrap-toc
$(document).ready(function () {
    if($('#toc-sidebar').length){
        var navSelector = "#toc-sidebar";
        var $myNav = $(navSelector);
        var $scope = $('d-article');
        if ($scope.length) {
            Toc.init({ $nav: $myNav, $scope: $scope });
        } else {
            Toc.init($myNav);
        }
        // bootstrap-toc generates anchor IDs from heading text, so year
        // headings end up with IDs like "2026". Those are valid HTML but
        // invalid as CSS selectors — `document.querySelector('#2026')`
        // fails, which Bootstrap scrollspy uses to locate each section.
        // Without that, the active TOC item gets stuck on the first
        // (alphabetic-ID) section. Prefix any numeric IDs to fix.
        $myNav.find('a[href^="#"]').each(function () {
            var $link = $(this);
            var id = $link.attr('href').slice(1);
            if (/^\d/.test(id)) {
                var newId = 'sec-' + id;
                $('[id="' + id + '"]').attr('id', newId);
                $link.attr('href', '#' + newId);
            }
        });
        // Bind scrollspy to body so it tracks window scroll. Use an offset
        // matching the fixed navbar height plus a small buffer so a section
        // becomes "active" as its heading scrolls under the navbar, not
        // when it has fully scrolled off the screen.
        $("body").scrollspy({
            target: navSelector,
            offset: ($('.navbar').outerHeight() || 60) + 20
        });
    }
});

// Heading offsetTop values can shift after fonts, images, and other async
// content finish loading — without a refresh, scrollspy keeps the stale
// offsets from $(document).ready and the active TOC item gets stuck on
// the first section.
$(window).on('load', function () {
    if ($('#toc-sidebar').length) {
        $('body').scrollspy('refresh');
    }
});

