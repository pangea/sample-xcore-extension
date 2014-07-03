(function() {
  "use strict";

  enyo.ready(function() {
    xCore.registerExtension({
      name: "Sample Extension",
      loadSubList: function(extensionSubList){
        extensionSubList.createComponent({name: "test", kind: "XV.SampleExtensionSubNav"});
        extensionSubList.render();
      }
    });
  });
}());
