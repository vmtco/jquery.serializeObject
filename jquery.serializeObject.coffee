( ($) ->
    $.fn.serializeObject = ->
        objects = {}
        items = this.serializeArray()
        $.each items, ->
            if objects[this.name] isnt undefined
                unless objects[this.name].push
                    objects[this.name] = [objects[this.name]]
                objects[this.name].push(this.value or "")
            else
                objects[this.name] = this.value or ""
        objects
    return
)(jQuery)