Input.js
========
Input.js is a JavaScript library to map controller and OS-specific USB enumerations provided by the [Gamepad API](https://wiki.mozilla.org/JoystickAPI) in [Mozilla Firefox](http://www.mozilla.org/firefox/) to an ideal virtual gamepad. While developed for use in [Paladin](https://wiki.mozilla.org/Paladin), Mozilla's open source 3D gaming initiative, Input.js is designed to be used by any web application.

Info
----
* License: MIT (see included LICENSE file for full license)
* Author: Jon Buckley [website](http://jbuckley.ca)
* Github Repo: <https://github.com/jbuck/input.js>

Supported Controllers
---------------------
* Logitech Chillstream on Windows
* Playstation 3 on Mac OS X
* Xbox 360 on Mac OS X and Windows

How to use Input.js in three steps
----------------------------------
* Load your copy of Input.js into your webpage:

```
<script type="text/javascript" src="input.js"></script>
```

* Create the Device object:

```
var gamepad;
window.addEventListener("MozGamepadConnected", function(e) {
  gamepad = new Input.Device(e.gamepad);
});
```

* Use it:

```
if (gamepad.buttons.BUTTON_A) {
  player.jump();
}
player.move(gamepad.buttons.LEFT_STICK_X, gamepad.buttons.LEFT_STICK_Y);
```

The API
-------
You should read the [Gamepad API](https://wiki.mozilla.org/JoystickAPI) as a background primer.
There are 5 properties on the Input.Device object:

* axes - An object that holds all of axis properties. They each return a value from -1.0 to +1.0.
  * Left_Stick_X
  * Left_Stick_Y
  * Right_Stick_X
  * Right_Stick_X
* buttons - An object that holds all of the button properties. They each return a value from 0.0 to 1.0. Buttons can be digital or analog
  * A_Button - Cross on the PS3
  * B_Button - Circle on the PS3
  * X_Button - Triangle on the PS3
  * Y_Button - Square on the PS3
  * Left_Stick_Button - L3 on the PS3
  * Right_Stick_Button - R3 on the PS3
  * Start_Button -
  * Back_Button - Select on the PS3
  * Home_Button - Xbox or PS button in the middle of the controller
  * Pad_Up - Up on the digital pad
  * Pad_Down - Down on the digital pad
  * Pad_Left - Left on the digital pad
  * Pad_Right - Right on the digital pad
  * Left_Trigger_1 - Left Bumper on the Xbox 360, L1 on the PS3
  * Right_Trigger_1 - Right Bumper on the Xbox 360, R1 on the PS3
  * Left_Trigger_2 - Left Trigger on the Xbox 360, L2 on the PS3
  * Right_Trigger_2 - Right Trigger on the Xbox 360, R2 on the PS3
* connected - A boolean that returns the current connected state of the device
* id - A string with the USB vendor ID, USB device ID, and OS device name
* index - A number starting at zero that represents the order the device was plugged in. Persists across reconnects.
