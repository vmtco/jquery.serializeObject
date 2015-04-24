(function($) {
  $.fn.serializeObject = function() {
    var items, objects;
    objects = {};
    items = this.serializeArray();
    $.each(items, function() {
      if (objects[this.name] !== void 0) {
        if (!objects[this.name].push) {
          objects[this.name] = [objects[this.name]];
        }
        return objects[this.name].push(this.value || "");
      } else {
        return objects[this.name] = this.value || "";
      }
    });
    return objects;
  };
})(jQuery);