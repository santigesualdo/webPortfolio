init_jssor_slider1 = function (containerId) {
            
            var max = $('.slideSanti').length - 1;
            var min = 0;
            var last = 0;
                        
            var options = {
                $AutoPlay: false,                                   //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $FillMode: 4,                                   // 0: stretch, 1: contain (keep aspect ratio and put all inside slide), 2: cover (keep aspect ratio and cover whole slide), 4: actual size, 5: contain for large image and actual size for small image, default value is 0
                $BulletNavigatorOptions: {                          //[Optional] Options to specify and enable navigator or not
                    $Class: $JssorBulletNavigator$,                 //[Required] Class to create navigator instance
                    $ChanceToShow: 3,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 0,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                    $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                    $SpacingX: 10,                                  //[Optional] Horizontal space between each item in pixel, default value is 0
                    $SpacingY: 50,                                  //[Optional] Vertical space between each item in pixel, default value is 0
                    $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                }
            };
            
            var jssor_1_slider = new $JssorSlider$(containerId, options);
            
            
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 746);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    jssor_1_slider.$Delay(ScaleSlider, 30);
                }
            }
            
            function OnSwipeEnd(position, virtualPosition)
            {
                var str = "#textContainer"+last;
                $(str).css('display','none');
                last = Math.ceil(position);
                str = "#textContainer"+last;                
                $(str).css('display','inline');               
            }

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 600);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            //ScaleSlider();

            jssor_1_slider.$On($JssorSlider$.$EVT_SWIPE_END, OnSwipeEnd);

            jssor_1_slider.$Jssor$.$AddEvent(window, "load", ScaleSlider);
            jssor_1_slider.$Jssor$.$AddEvent(window, "resize", $Jssor$.$WindowResizeFilter(window, ScaleSlider));
            jssor_1_slider.$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);


            
    

};