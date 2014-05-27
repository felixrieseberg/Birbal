var googleCalendar = require('../apiGoogleCalendar.js');
var q = require(q);

var calendar = function () {

    // async: create an event. Options: calendarId, text
    this.createEvent = function (user, options) {
        var deferred = q.defer();
        // Do we have access to Google Calendar?
        if (user.google.token == "" || user.google.token != null || user.google.token != undefined) {
            deferred.reject({ "error": "No Google authorization present", "resolve": "" });
        } else {
            var accessToken = user.google.token;
            var calendarId = options.calendarId;
            var text = options.text;

            var apiCalendar = new CalendarAPI();
            apiCalendar.newCalendarEntry(accessToken, calendarId, text, function (error, response) {
                if (error) {
                    deferred.reject({ "error": "Google unwilling to add event" });
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