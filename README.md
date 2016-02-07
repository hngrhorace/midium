# Midium - Web MIDI API wrapper
Midium is a very simple, device oriented Web MIDI API wrapper. It makes you able to send and receive notes and other messages from MIDI devices with writing less code.

TODO: write documentation

```javascript
var moog = Midium.select('moog');
moog.noteOn('c#4');

setTimeout(function() {
    moog.noteOff('c#4');
}, 1000);
```

```javascript
var all = Midium.select('');

all.onNoteOn(function(event) {
	playSound(event.note);
});

all.onNoteOff(function(event) {
	stopSound(event.note);
});
```
