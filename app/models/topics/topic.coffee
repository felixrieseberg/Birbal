class Topic
  @parsers: [
  ]

  @canUnderstand: (message)->
    @parsers.any (p)-> p.regex.match message

  parsers: 
    @constructor.parsers

  receive: (message)->
    parser = @parsers.find (p) p.regex.match message
    return unless parser

    parser.contexts.map (c)->
      context = c.extract message
      @contexts[c.name] = context

    action = parser.action
    @[action](@contexts) if action
     

  
  
  


