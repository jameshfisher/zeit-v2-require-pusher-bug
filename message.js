module.exports = (req, res) => {
  var Pusher = require('pusher');
  res.end('The time is: ' + new Date());
}