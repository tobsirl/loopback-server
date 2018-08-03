'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  router.get('/ping', function(req, res) {
    res.send('pongaroo');
  });
  router.get('/fibonacci', function(req, res) {
    let fibnum = 20;
    let resFibNum;

    resFibNum = fibonacci(fibnum);
    console.log(`${fibnum}th Fibonacci number is: ${resFibNum}`);
    res.json({msg: `${fibnum}th Fibonacci number is: ${resFibNum}`});

    // function for calculating fibonacci number recursively
    function fibonacci(n) {
      if (n < 2) return 1;
      else return fibonacci(n - 2) + fibonacci(n - 1);
    }
  });
  server.use(router);
};
