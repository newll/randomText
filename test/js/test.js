  $(function() {
    var init;
    init = function() {
      var random, random02;
      random = new RandomTxt($(".randomTxt"));
      random02 = new RandomTxt($(".randomTxt02"));
      random.update();
      random02.update();
      $(".randomTxt").mouseover(function() {
        return random.update();
      });
      return $(".randomTxt02").mouseover(function() {
        return random02.update();
      });
    };
    init();
  });
