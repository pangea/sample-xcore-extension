enyo.kind({
  name: "XV.SampleExtensionSubNav",  
  events: {
    onSubListSelect: ""
  },
  components: [
    {name: "list", kind: "enyo.DataList", classes: "extension-sub-list", fit: true, allowTransitions: false, renderDelay: null, components: [
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
    {from: ".collection", to: ".$.list.collection"}
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
    this.$.list.select(0);
    this.doSubListSelect(this.$.list.selected().get("name"));
  },
  subListItemTap: function(inSender, inEvent) {
    this.doSubListSelect(inEvent.originator.name);
    this.$.list.select(inEvent.index);
  }
});
