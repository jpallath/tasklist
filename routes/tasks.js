var express = require('express'),
    router  = express.Router();

router.get('/tasks', function(req, res, next){
  res.send("TASKFUL")
});

module.exports = router;
