Topics = require './topics'
_ = require 'underscore'

class Conversation
  constructor: (attrs)->
    @user = attrs.user
    @client = attrs.client
    @topic = null
    @contexts = {}

  receive: (message)->
    @topic = @initTopic(message)
    response = @topic?.receive(message)
    response ?= "I didn't understand that"
    @client.send(@user.id, response)

  initTopic: (message)->
    # don't switch topics unless we have to 
    
    return @topic if @topic?.canUnderstand(message)
    console.log Topics
    console.log [{foo: "bar"}]
    topicClass = _(Topics).find (topicClass)->
      topicClass.canUnderstand(message)

    return null unless topicClass
    new topicClass
      user: @user
      contexts: @contexts

  

module.exports = Conversation

