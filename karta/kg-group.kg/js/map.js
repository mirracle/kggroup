(function($){
    var trackerPath = (function() {
        var module = {}, paper, path, path_id, offset;

        var init = function() {
            offset = $('.carousel-container').offset();
            paper = Raphael(offset.left, offset.top, $('.carousel-container').width(), $('.carousel-container').height());
        }

        var drawLine = function(object) {
            var image = object.find('.circle');
            var tracker = $('.tracker-individual-blip-selected');
            var x = image.offset().left - offset.left + image.width() - 2;
            var y = image.offset().top - offset.top + image.height() - 2;
            var left = tracker.offset().left - offset.left + tracker.width() / 2;
            var top = tracker.offset().top - offset.top + tracker.height();
            //remove path from previous instance
            if (path_id !== undefined) {
                path = paper.getById(path_id);
                if (path !== null) {
                    path.remove();
                }
            }
            path = paper.path('M' + x + ' ' + y + 'L' + left + ' ' + top);
            path.attr({stroke: '#fff', 'stroke-opacity': 1, 'stroke-width': 1 });
            path_id = path.id;
        }

        var hideLine = function(object) {
            if (path !== undefined && !path.removed) {
                path.remove();
            }
        }

        return {
            init: function() {
                init();
            },
            draw: function(object) {
                drawLine(object);
            },
            hide: function(object) {
                hideLine(object);
            }
        }
    }());




    var filterMapObjects = (function(){
        var filter = {min: 0, max: 100, types: ["1", "2", "3"]};
        var objects = [], container, carousel;
        var list = [], _list = [], floor = 0;

        var init = function(object) {
            container = object;

            container.find('.carousel-feature').each(function(){
                var object = {};

                object.classes = $(this).attr('class');

                object.id = $(this).data('bid');
                object.address = $(this).data('address');
                object.floor = $(this).data('floor');

                object.top = $(this).data('y');
                object.left = $(this).data('x');
                object.type = $(this).data('type');
                object.image = $(this).find('img').attr('src');
                object.link = $(this).find('.carousel-caption a').attr('href');
                object.title = $(this).find('.carousel-caption a').html();
                objects.push(object);

                list.push(object.id);
                _list.push(object.id);
            });
            display();
        }

        var display = function() {
            carousel = container.featureCarousel({
                autoPlay: true,
                carouselSpeed: 2000,
                movedToCenter: function (object) { trackerPath.draw(object); },
                leavingCenter: function (object) { trackerPath.hide(object); }
            });
        }

        var process = function() {
            var filtered = [];
            trackerPath.hide();
            carousel.destroy();
            for (var i = 0; i < objects.length; i++) {
                if(floor > 0){
                    if(list.indexOf(objects[i].id) > -1 && objects[i].floor <= floor){
                        filtered.push(objects[i]);
                    }
                }else{
                    if(list.indexOf(objects[i].id) > -1){
                        filtered.push(objects[i]);
                    }
                }
            }

            if (filtered.length == 0) {
                for (var i = 0; i < objects.length; i++) {
                    filtered.push(objects[i]);
                }
            }

            for (var i = 0; i < filtered.length; i++) {
                var feature = $('<div/>').attr({
                    'class': filtered[i].classes,
                    'data-type': filtered[i].type,
                    'data-bid': filtered[i].id,
                    'data-address': filtered[i].address,
                    'data-y': filtered[i].top,
                    'data-x': filtered[i].left
                });
                feature.append(
                    $('<a/>').attr({
                        href: filtered[i].link
                    }).append(
                            $('<img>').attr({
                                alt: filtered[i].title,
                                src: filtered[i].image,
                                'class': 'carousel-image'
                            })
                        )
                );

                var d = $('<div/>').attr('class', 'carousel-caption');
                d.append($('<a/>').attr({href: filtered[i].link}).html(filtered[i].title));
                d.append($('<span/>').text(filtered[i].address));
                d.append($('<div/>').attr({class: 'circle'}));
                feature.append(d);

                container.append(feature);
            }

            display();
        }

        var setList = function(l) {
            list = l;
        }

        var setFloor = function(l) {
            floor = l;
        }

        var restoreList = function() {
            list = _list;
        }

        return {
            init : function(object) {
                init(object);
            },
            process : function () {
                process();
            },
            setList: function(l) {
                setList(l);
            },
            setFloor: function(l) {
                setFloor(l);
            },
            clearFilter: function(){
                restoreList();
            }
        }
    }());

    $(function($) {
        if ($('.carousel-container').length) {
            filterMapObjects.init($("#carousel"));
            trackerPath.init();

            if($('#filter-btn').length){
                $('#filter-btn').click(function(e){
                    var list = [], floor = 0;

                    $('.buildings-cb').each(function(){
                        if(this.checked){
                            list.push(parseInt(this.value));
                        }
                    });

                    floor = parseInt($('#floor').val());

                    if(list.length == 1 && floor >= 2){
                        location.href = '/ru/buildings/'+ list[0] +'/plan.html#floor' + floor;
                    } 

                    filterMapObjects.setFloor(floor);

                    if(list.length){
                        filterMapObjects.setList(list);
                    }else{
                        filterMapObjects.clearFilter();
                    }

                    filterMapObjects.process();
                });
            }
        }
    });



    /*$(function() {
        if ($('.carousel-container').length) {
            trackerPath.init();

            var carousel = $("#carousel").featureCarousel({
                autoPlay: false,
                movedToCenter: function (object) { trackerPath.draw(object); },
                leavingCenter: function (object) { trackerPath.hide(object); }
            });
        }

        if($('#filter-btn').length){
            $('#filter-btn').click(function(e){

            });
        }
    });*/
})(jQuery);
