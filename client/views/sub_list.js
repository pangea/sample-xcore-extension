enyo.kind({
  name: "XV.SampleExtensionSubNav",  
  events: {
    onSubListSelect: ""
  },
  components: [
    {name: "repeater", kind: "enyo.DataList", classes: "extension-sub-list", fit: true, allowTransitions: false, renderDelay: null, components: [
      {components: [
        {name: "item", classes: "item",ontap: "subListItemTap"}
      ],
       bindings: [
         {from: ".model.name", to: ".$.item.content"},
         {from: ".model.name", to: ".$.item.name"}
       ], ontap: "subListItemTap"}
    ]}
  ],
  bindings: [
    {from: ".collection", to: ".$.repeater.collection"}
  ],
  data: [
    new XM.SampleModel({name: "Link 01"}),
    new XM.SampleModel({name: "Link 02"})
  ],
  create: enyo.inherit(function (sup) {
    return function () {
      this.collection = new XM.SampleModelCollection(this.data);
      sup.apply(this, arguments);
    };
  }),
  rendered: function() {
    this.inherited(arguments);
    this.$.repeater.select(0);
    this.doSubListSelect(this.$.repeater.selected().get("name"));
  },
  subListItemTap: function(inSender, inEvent) {
    this.doSubListSelect(inEvent.originator.name);
    this.$.repeater.select(inEvent.index);
  }
});
