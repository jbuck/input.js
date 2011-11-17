(function() {
  var keyCodeBlob = {
    'Firefox' : {
      'Mac' : [
        72,
        74,
        75,
        76,
        87,
        83,
        65,
        68
      ]
    }
  };

  var osList = ['Win', 'Mac', 'Linux'];
  function detectOS() {
    for (var i in osList) {
      if (navigator.platform.indexOf(osList[i]) !== -1) {
        return osList[i];
      }
    }
    return 'Unknown';
  }

  var browserList = ['Firefox', 'Chrome', 'Safari', 'Internet Explorer', 'Opera'];
  function detectBrowser() {
    for (var i in browserList) {
      if (navigator.userAgent.indexOf(browserList[i]) !== -1) {
        return browserList[i];
      }
    }
    return 'Unknown';
  }

  function fakeButton(buttons, index, keyPressed) {
    Object.defineProperty(buttons, index, {
      enumerable: true,
      get: function() { return keyPressed[index]; }
    });
  }

  var FakeDevice = Input.FakeDevice = function() {
    var browser = detectBrowser(),
        os = detectOS(),
        keyboard = keyCodeBlob,
        keyPressed = [0, 0, 0, 0, 0, 0, 0, 0];
        axes = this.axes = {},
        buttons = this.buttons = {};

    if (keyboard && keyboard[browser] && keyboard[browser][os]) {
      keyboard = keyboard[browser][os];
    } else {
      throw "Oops, I didn't add fake gamepad support for " + browser + " on " + os;
    }

    window.addEventListener("keydown", function(e) {
      for (var i in keyboard) {
        if (e.keyCode === keyboard[i]) {
          keyPressed[i] = 1;
          return;
        }
      }
    }, false);

    window.addEventListener("keyup", function(e) {
      for (var i in keyboard) {
        if (e.keyCode === keyboard[i]) {
          keyPressed[i] = 0;
          return;
        }
      }
    }, false);
    
    window.addEventListener("blur", function(e) {
      for (var i in keyPressed) {
        keyPressed[i] = 0;
      }
    }, false);
    
    for (var b in keyboard) {
      fakeButton(buttons, b, keyPressed);
    }

    Object.defineProperty(this, "connected", {
      enumerable: true,
      get: function() { return true; }
    });

    Object.defineProperty(this, "id", {
      enumerable: true,
      get: function() { return "Firefox-Fake Gamepad-Bored on a plane industries"; }
    });

    Object.defineProperty(this, "index", {
      enumerable: true,
      get: function() { return -1; }
    });
  }
}());
