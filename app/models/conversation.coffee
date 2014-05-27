Topics = require('./topics')

class Conversation
  constructor: (attrs)->
    @user = attrs.user
    @client = attrs.client
    @topic = null
    @contexts = {}

  receive: (message)->
    @topic ?= @initTopic(message)
    response = @topic.receive(message)
    @client.send(response)

  initTopic: (message)->
    return @topic if @topic?.canUnderstand(message)
    topicClass = Topics.find (topicClass)->
      topicClass.canUnderstand(message)

    new topicClass
      user: @user
      contexts: @contexts

