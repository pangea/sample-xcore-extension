(function() {
  'use strict';

  enyo.ready(function() {
    xCore.registerExtension({
      name: 'Sample Extension',
      loadSubList: function(extensionSubList){
        extensionSubList.createComponent({name: "SampleExtensionModules", kind: "XV.SampleExtensionSublist"});
        extensionSubList.render();
      },
      loadWorkspace: function(extensionWorkspace, item){
        extensionWorkspace.createComponent(item);
        extensionWorkspace.render();
      }
    });
  });
})();
