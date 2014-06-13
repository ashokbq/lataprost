$(document)
    .bind('pagebeforeshow', function () {
          $("#an-obj-g1 #indiv").hide();
  			  $("#an-obj-g2 #indiv").hide();
					$("#an-obj-g41 #indiv").hide();
					$("#an-obj-g42 #indiv").hide();
    });


$(document).ready(function (e) {
	
 $(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 500,

				closeEffect : 'elastic',
				closeSpeed  : 500,

				closeClick : true,
				
				arrows :false,
				
				helpers : {
					overlay : null
				}
			});		
        if ('#page4.ui-page-active') {
            $("#an-scene-4")
                .addClass('run t-0');
        }
				
				
				
        var options = {
            direction: 'left'
        };

        // Set the duration (default: 400 milliseconds)
        var duration = 2000;

$('#btnall').click(function(){	
 	 $("#an-obj-g1 #indiv").show("slow");
 	 $("#an-obj-g2 #indiv").show("slow");  	 
});	

$('#btnall2').click(function(){	
 	$("#an-obj-g41 #indiv").show('slide', options, duration);
 	$("#an-obj-g42 #indiv").show('slide', options, duration);	 
});					


        $('#btn1')
            .click(function () {
                $("#an-obj-g1 #indiv")
                    .toggle("slow");

            });
        $('#btn2')
            .click(function () {
                $("#an-obj-g2 #indiv")
                    .toggle("slow");

            });

        $('#btn3')
            .click(function () {
                $("#an-obj-g41 #indiv")
                    .toggle('slide', options, duration);
            });
        $('#btn4')
            .click(function () {
                $("#an-obj-g42 #indiv")
                    .toggle('slide', options, duration);
            });
    });

/* Swipping through pages */
$(document)
    .on('swipeleft', 'article', function (event) {

        if (event.handled !== true) // This will prevent event triggering more then once
        {
            var nextpage = $(this)
                .next('article[data-role="page"]');
            // swipe using id of next page if exists
            if (nextpage.length > 0) {
                $.mobile.changePage(nextpage, {
                    transition: "slide",
                    reverse: false
                }, true, true);
            }
            event.handled = true;

            return false;
        }
    });

$(document)
    .on('swiperight', 'article', function (event) {
        if (event.handled !== true) // This will prevent event triggering more then once
        {
            var prevpage = $(this)
                .prev('article[data-role="page"]');
            if (prevpage.length > 0) {
                $.mobile.changePage(prevpage, {
                    transition: "slide",
                    reverse: true
                }, true, true);
            }
            event.handled = true;
        }
        return false;
    });