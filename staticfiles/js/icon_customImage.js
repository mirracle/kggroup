ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [42.852289, 74.629749],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter([42.854384, 74.636211]), {
            hintContent: 'Собственный значок метки',
            locationUrl: 'http://yandex.ru'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icon_object.png',
            // Размеры метки.
            iconImageSize: [54, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([42.847799, 74.623355], {
            hintContent: 'Собственный значок метки с контентом',            
            locationUrl: 'http://yandex.ru'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icon_object.png',
            // Размеры метки.
            iconImageSize: [54, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myPlacemarkWithContent1 = new ymaps.Placemark([42.853888, 74.646954], {
            hintContent: 'Собственный значок метки с контентом',            
            locationUrl: 'http://yandex.ru'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icon_object.png',
            // Размеры метки.
            iconImageSize: [54, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });



        myPlacemarkWithContent2 = new ymaps.Placemark([42.852514, 74.609954], {
            hintContent: 'Собственный значок метки с контентом',            
            locationUrl: 'http://yandex.ru'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icon_object.png',
            // Размеры метки.
            iconImageSize: [54, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });


        myPlacemarkWithContent3 = new ymaps.Placemark([42.846861, 74.647651], {
            hintContent: 'Собственный значок метки с контентом',            
            locationUrl: 'http://yandex.ru'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icon_object.png',
            // Размеры метки.
            iconImageSize: [54, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });


    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent)
        .add(myPlacemarkWithContent1)
        .add(myPlacemarkWithContent2)
        .add(myPlacemarkWithContent3);
        
        myMap.behaviors.disable('scrollZoom');
    
        myMap.geoObjects.events.add('click', function (e) {
            // Объект на котором произошло событие
            var target = e.get('target');
            
            window.location.href = target.properties.get('locationUrl');
        });
});