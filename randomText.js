  var RandomTxt;

  RandomTxt = (function() {
    function RandomTxt(targetDOM) {
      var THIS, enterHD, masterWord, _count, _local_count, _timer;
      THIS = this;
      THIS.target = $(targetDOM);
      THIS.originalword = $(targetDOM).text();
      THIS.max = $(targetDOM).text().length;
      THIS.targetNum = "";
      _timer = "";
      _local_count = 0;
      _count = 0;
      masterWord = "";
      this.update = function(targetDOM) {
        _local_count = 0;
        _count = 0;
        masterWord = "";
        THIS.targetNum = 10520;
        $(THIS.target).text("");
        clearInterval(_timer);
        return _timer = setInterval(enterHD, 5);
      };
      enterHD = function(x) {
        var i, randomTxt, _i, _ref, _temp, _temp2;
        _local_count++;
        randomTxt = "abcdefghijklm---nopqrstux--,nzdfaskfjewefuwieo--ufaw-[@:;:;:].:;^-^¥-;;:";
        _temp = "";
        _temp2 = "";
        for (i = _i = _count, _ref = THIS.max; _count <= _ref ? _i < _ref : _i > _ref; i = _count <= _ref ? ++_i : --_i) {
          _temp2 += randomTxt.substr(Math.floor(Math.random() * randomTxt.length), 1);
        }
        _temp = masterWord + _temp2;
        $(THIS.target).text(_temp);
        THIS.targetNum = THIS.targetNum * 0.85;
        if (_count > (THIS.max - 4)) {
          THIS.targetNum = 11;
        }
        if (_local_count > THIS.targetNum) {
          masterWord += THIS.originalword.substr(_count, 1);
          _local_count = 0;
          _count++;
        }
        if (_count > THIS.max) {
          clearInterval(_timer);
          return $(targetDOM).text(THIS.originalword);
        }
      };
    }

    return RandomTxt;

  })();