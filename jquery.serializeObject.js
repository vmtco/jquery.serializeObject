(function() {
  (function($) {
    return $.fn.serializeObject = function() {
      var a, objects;
      objects = {};
      a = this.serializeArray();
      $.each(a, function() {
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

}).call(this);

//# sourceMappingURL=jquery.serializeObject.js.map
