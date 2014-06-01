Topic = require './topic'
Capability = require '../../capabilities/calendar'
_ = require 'underscore'
$ = require 'jquery-deferred'

class CalendarEventTopic extends Topic
  @parsers: [{
    # schedule an event
    regex: /schedule/i
    contexts: [{
      name: "people"
      extract: (->)
    }]
    needs: []
  }]

  constructor: ->
    @eventCreated = $.Deferred()

  #TODO: do link up
  perform: ->
    ###
    capability = new Capability
    text = "Playing with llamas tomorrow"
    capability.createEvent(@user, {text: text}).then ->
      @eventCreated.resolve()

    @eventCreated.then ->
      @conversation.trigger("interruption", @, "Created event")
    ###
    @eventCreated.resolve()

  response: ->
    ###
    unless @contexts.people
      "Who do you want to meet with?"
    ###
    if @eventCreated.state() is "resolved"
      "I've created your event for you: \"Playing with llamas tomorrow\""
    else
      "Creating the event. I'll tell you when I'm done"

CalendarEventTopic.canUnderstand = Topic.canUnderstand

module.exports = CalendarEventTopic







