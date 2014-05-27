var q = require(q);

var time = function() {
    
    this.currentTimeIn = function(user, options) {
        var deferred = q.defer();
        var date =  new Date().toDateString();
        deferred.resolve(date);
    };

}

module.exports = time;