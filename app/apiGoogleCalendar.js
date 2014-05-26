var gcal = require('google-calendar');

var apiCalendar = function () {

    this.listCalendars = function (accessToken) {
        var googleCalendar = new gcal.GoogleCalendar(accessToken);
    }

    this.quickAdd = function (accessToken, calendarId, text, callback) {

        var googleCalendar = new gcal.GoogleCalendar(accessToken);

        if (calendarId == null || calendarId == "") {
            calendarId = 'primary';
        }

        // Text: The text describing the event to be created. (string)
        //text = text;

        console.log("Trying to create a new event: " + "\n" +
            "Access Token: " + accessToken + "\n" +
            "Text: " + text);

        googleCalendar.events.quickAdd(calendarId, text, function (error, data) {
            if (error) {
                callback(new Error(error));
                console.log(error);

            } else if (data) {
                callback(null, data);
                console.log(data);
            }
        });
    };

}

module.exports = apiCalendar;