<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="json2.js"></script>
    <script type="text/javascript">
      var output = {};
      var gamepad;
      var keymap;

      function detectOS() {
        var osList = ['Win', 'Mac', 'Linux'];
        for (var i in osList) {
          if (navigator.platform.indexOf(osList[i]) !== -1) {
            return osList[i];
          }
        }
        return 'Unknown';
      }
      
      function buildDropdown() {
        var controls = [
          '---',
          'Left_Stick_X',
          'Left_Stick_Y',
          'Right_Stick_X',
          'Right_Stick_Y',
          'A_Button',
          'B_Button',
          'X_Button',
          'Y_Button',
          'Left_Stick_Button',
          'Right_Stick_Button',
          'Start_Button',
          'Back_Button',
          'Home_Button',
          'Pad_Up',
          'Pad_Down',
          'Pad_Left',
          'Pad_Right',
          'Left_Trigger_1',
          'Right_Trigger_1',
          'Left_Trigger_2',
          'Right_Trigger_2'
        ];
        var dropdown = document.createElement("select");
        for (var n = 0; n < controls.length; n++) {
          var option = document.createElement("option");
          option.text = controls[n];
          option.value = controls[n];
          dropdown.add(option);
        }
        dropdown.addEventListener("change", function(e) {
          keymap[dropdown.className][this.value] = parseInt(this.id.substring(2));
        });
        return dropdown;
      }

      function connectHandler(e) {
        window.removeEventListener("MozGamepadConnected", connectHandler);
        gamepad = e.gamepad;
        var usbVendor = gamepad.id.split('-')[0],
            usbDevice = gamepad.id.split('-')[1],
            os = detectOS();
        document.getElementById('start').style.display = 'none';
        var controlList = document.getElementById('control-list');
        while (controlList.lastChild) {
          controlList.removeChild(controlList.lastChild);
        }

        output = {};
        output[usbVendor] = {};
        output[usbVendor][usbDevice] = {};
        output[usbVendor][usbDevice][os] = keymap = {};
        output[usbVendor][usbDevice][os].axes = {},
        output[usbVendor][usbDevice][os].buttons = {};

        var header = document.createElement("h2");
        header.appendChild(document.createTextNode("Program Gamepad"));
        controlList.appendChild(header);
        
        header = document.createElement("h3");
        header.appendChild(document.createTextNode("Axes"));
        controlList.appendChild(header);

        for (var i = 0; i < gamepad.axes.length; i++) {
          var container = document.createElement("div");
          var axis = document.createElement("progress");
          axis.setAttribute("max", "2");
          axis.setAttribute("value", "1");
          axis.setAttribute("id", "a" + i);
          axis.innerHTML = i;
          container.appendChild(axis);

          var dropdown = buildDropdown();
          dropdown.setAttribute("id", "ad" + i);
          dropdown.className = "axes";
          container.appendChild(dropdown);
          controlList.appendChild(container);
        }

        var header = document.createElement("h3");
        header.appendChild(document.createTextNode("Buttons"));
        controlList.appendChild(header);

        for (var i = 0; i < gamepad.buttons.length; i++) {
          var container = document.createElement("div");
          var button = document.createElement("progress");
          button.setAttribute("max", "1");
          button.setAttribute("value", "0");
          button.setAttribute("id", "b" + i);
          button.innerHTML = i;
          container.appendChild(button);

          var dropdown = buildDropdown();
          dropdown.setAttribute("id", "bd" + i);
          dropdown.className = "buttons";
          container.appendChild(dropdown);
          controlList.appendChild(container);
        }
        
        window.mozRequestAnimationFrame(updateStatus);
      }
      
      function updateStatus(e) {
        var iter = Object.keys(gamepad.axes);
        for (var i in iter) {
          document.getElementById("a" + iter[i]).setAttribute("value", gamepad.axes[iter[i]] + 1);
        }

        iter = Object.keys(gamepad.buttons);
        for (var i in iter) {
          document.getElementById("b" + iter[i]).setAttribute("value", gamepad.buttons[iter[i]]);
        }

        window.mozRequestAnimationFrame(updateStatus);
      }
      
      function generateJSON() {
        document.getElementById('text-output').innerHTML = JSON.stringify(output);
      }
      
      window.addEventListener("MozGamepadConnected", connectHandler);
    </script>
  </head>
  <body>
    <h2 id="start">Press a button on your controller to start</h2>
    <div id="control-list"></div>
    <h2>JSON output</h2>
    <textarea id="text-output"></textarea>
    <input type="button" onClick="generateJSON();" value="Generate JSON">
  </body>
</html>
