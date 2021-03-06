init_jssor_slider1 = function (containerId) {
            
            var max = $('.slideSanti').length - 1;
            var min = 0;
            var last = 0;
                        
            var options = {
                $AutoPlay: false,                                   //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $SlideDuration: 250,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $FillMode: 3,                                   // 0: stretch, 1: contain (keep aspect ratio and put all inside slide), 2: cover (keep aspect ratio and cover whole slide), 4: actual size, 5: contain for large image and actual size for small image, default value is 0
                $DragOrientation: 3,                             //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0
                $BulletNavigatorOptions: {                          //[Optional] Options to specify and enable navigator or not
                   $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
                   $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                   $AutoCenter: 2,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                   $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                   $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                   $SpacingX: 5,                                  //[Optional] Horizontal space between each item in pixel, default value is 0
                   $SpacingY: 10,                                  //[Optional] Vertical space between each item in pixel, default value is 0
                   $Orientation: 1 
                }
            };
            
            var sliderSanti = new $JssorSlider$(containerId, options);
            
            
            function ScaleSlider() 
            {
                var refSize = sliderSanti.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 746);
                    sliderSanti.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider,30);                    
                }
            }
            
            function OnSwipeEnd(position, virtualPosition)
            {
                var str = "#textContainer"+last;
                $(str).css('display','none');
                last = Math.ceil(position);
                str = "#textContainer"+last;                
                $(str).css('display','block');               
            }

            function SliderClickEventHandler(slideIndex, event)
            {
               var index = '#santigame'+(slideIndex+1);
               $(index)[0].click();
            }

            ScaleSlider();

            sliderSanti.$On($JssorSlider$.$EVT_SWIPE_END, OnSwipeEnd);
            sliderSanti.$On($JssorSlider$.$EVT_CLICK, SliderClickEventHandler);

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);

};