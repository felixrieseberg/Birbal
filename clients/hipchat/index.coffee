Connector = require "./src/connector"
Promise = require "./src/promises"
BackboneEvents = require "backbone-events-standalone"


class HipchatClient
  constructor: ()->
    @connector = new Connector
      jid: @clientId
      password: @clientPassword
      logger: {debug: (->), warn: (->)}

    @connected = Promise()
    @connector.onConnect =>
      @connected.resolve()
    @connector.onPrivateMessage (from, message)=>
      @receive(from, message)
    @connector.connect()


  send: (userId, message)->
    hipchatId = @userToHipchatId(userId)
    @connected.then =>
      @connector.message hipchatId, message

  receive: (hipchatId, message)->
    userId= @hipchatToUserId(hipchatId)
    @trigger("receive", userId, message)

  # TODO
  hipchatToUserId: (hipchatId)->
    1

  userToHipchatId: (userId)->
    "116277_859510@chat.hipchat.com"

  clientId: "116277_859534@chat.hipchat.com"
  clientPassword: "botbotbot"



BackboneEvents.mixin(HipchatClient::)
module.exports = HipchatClient

