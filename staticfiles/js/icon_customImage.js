ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [42.845358, 74.594538],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter([42.855174, 74.610456]), {
            hintContent: 'Жилой комплекс Байтик',
            locationUrl: 'http://127.0.0.1:8000/object/9/'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'http://test1.webhost.kg/img/icon_object.png',
            // Размеры метки.
            iconImageSize: [54, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([42.827307, 74.582030], {
            hintContent: 'Ордо им. Чынгыза Айтматова',            
            locationUrl: 'http://kg-group.kg/index.html'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'http://test1.webhost.kg/img/icon_object.png',
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

        myPlacemarkWithContent1 = new ymaps.Placemark([42.843422, 74.565999], {
            hintContent: 'Жилой комплекс Джал',            
            locationUrl: 'http://kg-group.kg/djal.html'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'http://test1.webhost.kg/img/icon_object.png',
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
        
        myPlacemarkWithContent2 = new ymaps.Placemark([42.829221, 74.585178], {
            hintContent: 'Жилой комплекс Тынчтык',            
            locationUrl: 'http://kg-group.kg/index.html'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'http://test1.webhost.kg/img/icon_object.png',
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


        myPlacemarkWithContent3 = new ymaps.Placemark([42.837862, 74.591942], {
            hintContent: 'Жилой комплекс Семетей',            
            locationUrl: 'http://kg-group.kg/semtei.html'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'http://test1.webhost.kg/img/icon_object.png',
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
        
        
        myPlacemarkWithContent4 = new ymaps.Placemark([42.845358, 74.594538], {
            hintContent: 'Жилой комплекс Манас',            
            locationUrl: 'http://kg-group.kg/manas.html'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'http://test1.webhost.kg/img/icon_object.png',
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
        
        
           myPlacemarkWithContent5 = new ymaps.Placemark([42.842589, 74.615478], {
            hintContent: 'Жилой комплекс Алымбек Датка',            
            locationUrl: 'http://kg-group.kg/alimbek.html'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'http://test1.webhost.kg/img/icon_object.png',
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
        
                myPlacemarkWithContent6 = new ymaps.Placemark([42.846066, 74.641251], {
            hintContent: 'Жилой комплекс Шабдан баатыр',            
            locationUrl: 'http://kg-group.kg/shabdan.html'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'http://test1.webhost.kg/img/icon_object.png',
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

                    myPlacemarkWithContent7 = new ymaps.Placemark([42.855174, 74.610456], {
            hintContent: 'Головной офис',            
            locationUrl: 'http://kg-group.kg'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'http://test1.webhost.kg/img/map_logo.png',
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
        .add(myPlacemarkWithContent3)
         .add(myPlacemarkWithContent4)
         .add(myPlacemarkWithContent5)
         .add(myPlacemarkWithContent6)
         .add(myPlacemarkWithContent7);
         
         
        myMap.behaviors.disable('scrollZoom');
    
        myMap.geoObjects.events.add('click', function (e) {
            // Объект на котором произошло событие
            var target = e.get('target');
            
            window.location.href = target.properties.get('locationUrl');
        });
});