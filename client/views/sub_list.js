enyo.kind({
  name: 'XV.SampleExtensionSublist',
  // classes: "enyo-unselectable enyo-fit",
  events: {
    onNodeTap: "nodeTap",
    onExpand: "nodeExpand",
    onSubListSelect: ""
  },
  components: [
    {kind: "Selection", onSelect: "select", onDeselect: "deselect"},
    {kind: "Scroller", classes: "extension-sub-list", fit: true, components: [
      {kind: "Node", content: "Test1", expandable: true, components: [
        { content: "Test Sub", name: "TestSub", workspace: {name: "Test", kind: "XV.SampleExtensionWorkspace"} },
        {content: "Delta", expandable: true, expanded: false, components: [
          { content: "Test Sub2", name: "TestSub2", workspace: {name: "Test2", kind: "XV.SampleExtensionWorkspace"} }
        ]},
      ]}
    ]}
  ],
  nodeExpand: function(inSender, inEvent) {
    console.log('expanding');
  },
  nodeTap: function(inSender, inEvent) {
    var node = inEvent.originator;
    this.$.selection.select(node.id, node);
    if(node.workspace){
      this.doSubListSelect(node.workspace);
    }
  },
  select: function(inSender, inEvent) {
    inEvent.data.addClass('selected');
  },
  deselect: function(inSender, inEvent) {
    inEvent.data.removeClass('selected');
  }
});
