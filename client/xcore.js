(function() {
  "use strict";

  enyo.ready(function() {
    xCore.registerExtension({
      name: "Sample Extension",
      loadSubList: function(extensionSubList){
        extensionSubList.createComponent({name: "test", kind: "XV.SampleExtensionSubNav"});
        extensionSubList.render();
      },
      loadWorkspace: function(extensionWorkspace, name){
        var workspaceRelation = {
          "Link 01": "XV.SampleExtensionWorkspace"
        };
        extensionWorkspace.createComponent({name: name, kind: workspaceRelation[name]});
        extensionWorkspace.render();
      }
    });
  });
}());
