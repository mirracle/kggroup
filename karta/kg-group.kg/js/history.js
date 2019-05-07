(function($){
    $(window).load(function(){
        var progressYears = $('.progress-years a');
        var yearTabs = $('.year');
        var progressMonths = $('.progress-months a');
        var progressImages = $('.progress-preview a');

        progressYears.click(function(e){
            e.preventDefault();

            if($(this).hasClass('active')){
                return false;
            }

            progressYears.removeClass('active');
            yearTabs.removeClass('active');
            var y = $(this).attr('href');
            $(y).addClass('active');
            $(this).addClass('active');

            $('a:eq(0)', y).trigger('click');

            return false;
        });

        progressMonths.click(function(e){
            e.preventDefault();

            progressMonths.removeClass('active');
            $(this).addClass('active');

            $('.progress-preview').mCustomScrollbar('scrollTo', $(this).attr('href'));

            return false;
        });

        progressImages.click(function(e){
            e.preventDefault();
            return false;
        });

        $('.progress-preview').mCustomScrollbar({
            horizontalScroll:true,
            advanced:{ autoExpandHorizontalScroll:true },
            theme:"dark-thin"
        });

        $('.progress-slider ul').jcarousel({
            scroll:1,
            visible:1,
            buttonNextHTML: '<div class="arrow next"></div>',
            buttonPrevHTML: '<div class="arrow prev"></div>',
            initCallback: function (carousel, obejctli, liindex, listate) {
                $('.progress-preview a').bind('click', function(e) {
                    var i = $('.progress-preview a').index($(this)) + 1;

                    progressYears.removeClass('active');
                    progressMonths.removeClass('active');
                    var y = $(this).data('year');
                    var m = $(this).data('month');

                    $('#h-year-' + y).addClass('active');
                    yearTabs.removeClass('active');
                    $('#year-' + y).addClass('active');
                    progressMonths.removeClass('active');
                    $('#h-year-' + y + '-month-'+m).addClass('active');

                    carousel.scroll($.jcarousel.intval(i));

                    return false;
                });

                progressMonths.bind('click',function() {
                    var m = $(this).attr('href');
                    var i = $('.progress-preview a' + m).index() + 1;
                    carousel.scroll($.jcarousel.intval(i));
                });
            },
            itemVisibleInCallback: function(carousel, el, index){
                //$('.progress-preview').mCustomScrollbar('scrollTo', '.img-' + index);
            }
        });

        $('.progress-slider img').dblclick(function(){
            window.open($(this).attr('src'), '_blank');
        });
    });
})(jQuery);