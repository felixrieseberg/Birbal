var googleCalendar = require('../apiGoogleCalendar.js');
var q = require(q);
var errors = require('generics').errors;

var calendar = function () {

    // async: create an event. Options: calendarId, text
    this.createEvent = function (user, options) {
        var deferred = q.defer();
        // Do we have access to Google Calendar?
        if (user.google.token == "" || user.google.token != null || user.google.token != undefined) {
            deferred.reject({ "error": errors[1], "resolve": "" });
        } else {
            var accessToken = user.google.token;
            var calendarId = options.calendarId;
            var text = options.text;

            var apiCalendar = new CalendarAPI();
            apiCalendar.newCalendarEntry(accessToken, calendarId, text, function (error, response) {
                if (error) {
                    deferred.reject({ "error": errors[2] });
                } else {
                    deferred.resolve({ "success": "Event created" });
                }
            });
        }

        return deferred.promise;
    }

    this.changeEvent = function (user, options) {

    }

    this.removeEvent = function (user, options) {

    }

}

module.exports = calendar;