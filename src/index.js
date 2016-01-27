var Nota = require('./core/nota');

require('./inputShorthands');
require('./outputShorthands');

Nota.Utils = require('./midiUtils');
Nota.MIDIStatus = require('./midiStatusEnum');

module.exports = Nota;
global.Nota = Nota;
