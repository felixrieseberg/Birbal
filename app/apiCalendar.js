var gcal = require('google-calendar');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var apiCalendar = function () {

    var self = this;

    this.listCalendars = function (accessToken) {
        var googleCalendar = new gcal.GoogleCalendar(accessToken);
    }

    this.newCalendarEntry = function (accessToken, calendarId, text, sendNotification) {
        EventEmitter.call(this);
        var googleCalendar = new gcal.GoogleCalendar(accessToken);

        if (calendarId == null || calendarId == "") {
            calendarId = 'primary';
        }

        // Text: The text describing the event to be created. (string)
        //text = text;

        // Whether to send notifications about the creation of the event. Optional. The default is False. (boolean)
        sendNotification = sendNotification;

        console.log("Trying to create a new event: " + "\n" +
            "Access Token: " + accessToken + "\n" +
            "Text: " + text + "\n" +
            "Notify: " + sendNotification);

        googleCalendar.events.quickAdd(calendarId, "Lunch with Arjun at 2pm", sendNotification, function (error, data) {
            if (error) {
                //self.emit('error', error);
                console.log(error);

            } else if (data) {
                //self.emit('success', data);
                console.log(data);
            }
        });
    };

}

util.inherits(apiCalendar, EventEmitter);
module.exports = apiCalendar;