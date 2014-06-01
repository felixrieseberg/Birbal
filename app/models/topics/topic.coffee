_ = require 'underscore'

class Topic
  @parsers: [
  ]

  @canUnderstand: (message)->
    _(@parsers).any (p)-> p.regex.exec message

  canUnderstand: (message)->
    @constructor.canUnderstand(message)

  constructor: (attrs)->
    @user = attrs.user
    @contexts = attrs.contexts
    @conversation = attrs.conversation

  parsers: ->
    @constructor.parsers

  receive: (message)->
    parser = _(@parsers()).find (p)->
      p.regex.exec message

    parser.contexts.map (c)->
      context = c.extract message
      @contexts[c.name] = context if context

    @perform()
    @response()

module.exports = Topic
    
   

  
  
  


