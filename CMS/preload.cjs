// Disables Node.js Happy Eyeballs (autoSelectFamily) which causes ETIMEDOUT
// when connecting to Neon PostgreSQL from environments without IPv6.
const net = require('net');
if (net.setDefaultAutoSelectFamily) {
  net.setDefaultAutoSelectFamily(false);
}
