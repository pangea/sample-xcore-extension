enyo.kind({
  name: "XV.SampleExtensionSubNav",
  kind: "List",
  classes: "extension-sub-list",
  fit: true,
  handlers: {
    onSetupItem: "setupItem"
  },
  components: [
    {name: "sampleExtensionSubListItem", classes: "item", ontap: "sampleExtensionSubListItemTap", components: [
    ]}
  ],
  data: [],
  create: function () {
    this.inherited(arguments);
    this.data = [];
    
    for(var i=0;i<10; i++){
      this.data.push("Link " + i);
    }
    this.setCount(this.data.length);
  },
  setupItem: function (inSender, inEvent) {
    this.inherited(arguments);

    var i = inEvent.index;
    this.$.sampleExtensionSubListItem.setContent(this.data[i]);
    this.$.sampleExtensionSubListItem.addRemoveClass("selected", this.isSelected(i));    
  },
  sampleExtensionSubListItemTap: function(inSender, inEvent) {
    console.log( 'We Side Bar' );
  }
});
