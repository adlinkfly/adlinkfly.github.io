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
          if($(this).children().children('.title').text().toLowerCase().match(inputText)) {
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