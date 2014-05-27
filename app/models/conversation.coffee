class Conversation
  constructor: (@user, @client)->
    @topic = null
    @contexts = []

  receive: (message)->
    @topic ?= @initTopic(message)
    response = @topic.receive(message)
    @client.send(respones)
