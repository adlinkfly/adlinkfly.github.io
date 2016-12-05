$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});
$(function() {
  var inputText;
  var $matching = $();
  // Delay function
  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();
  $("#input").keyup(function(){
    // Delay function invoked to make sure user stopped typing
    delay(function(){
      inputText = $("#input").val().toLowerCase();
      // Check to see if input field is empty
      if ((inputText.length) > 0) {            
        $('.mix').each(function() {
          $this = $("this");
          // add item to be filtered out if input text matches items inside the title   
          if($(this).children('.title').text().toLowerCase().match(inputText)) {
            $matching = $matching.add(this);
          }
          else {
            // removes any previously matched item
            $matching = $matching.not(this);
          }
        });
        $("#Library").mixItUp('filter', $matching);
      }
      else {
        // resets the filter to show all item if input is empty
        $("#Library").mixItUp('filter', 'all');
      }
    }, 200 );
  });
  $("#Library").mixItUp({
    load: {
      sort: 'random'
    },
    pagination: {
      limit: 18,
      loop: true,
    },
    callbacks: {
      onMixStart: function(state){
        $(".info-up").html('Loading Links...');
        $(".info-down").html('Loading Links...');
      },
      onMixEnd: function(state){
        $(".info-up").html('Displaying '+state.totalShow+' item(s) on Page '+state.activePage+'.');
        $(".info-down").html('Displaying '+state.totalShow+' item(s) on Page '+state.activePage+'.');
		$(".pager").click(function(){$('html,body').animate({scrollTop:$("#MixTop").offset().top},500);});
      },
      onMixFail: function(state){
        $(".info-up").html('Displaying '+state.totalShow+' items');
        $(".info-down").html('');
		$(".pager").click(function(){$('html,body').animate({scrollTop:$("#MixTop").offset().top},500);});
      },
    },
  });
});

/* InfoLinks */
var infolinks_pid = 2915188;
var infolinks_wsid = 0;
var infoscript=document.createElement('script');
infoscript.setAttribute('src', '//resources.infolinks.com/js/infolinks_main.js');
document.body.appendChild(infoscript);

/* Google Analytics */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-88269110-1', 'auto');
ga('send', 'pageview');

/* StatCounter */
var sc_project=11178035; 
var sc_invisible=1; 
var sc_security="74f5292e";
var sc_script=document.createElement('script');
sc_script.setAttribute('src', '//statcounter.com/counter/counter.js');
document.body.appendChild(sc_script);

/* AddThis */
setTimeout(function(){
  var addthisScript = document.createElement('script');
  addthisScript.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-583e42fbd9e86109');
  document.body.appendChild(addthisScript);
},1500);

/* Password */
/*window.onload = function () {
  var x = location.hash.substring(1);
  document.getElementById("pass").innerHTML = x;
};*/