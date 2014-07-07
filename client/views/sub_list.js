enyo.kind({
  name: "XV.SampleExtensionSubNav",  
  kind: "enyo.DataList",
  classes: "extension-sub-list",
  fit: true,
  handlers: {
    ontap: "subListItemTap"
  },
  events: {
    onSubListSelect: ""
  },
  published: {
    collection: null
  },
  components: [
    {components: [
      {name: "item", classes: "item"}
    ],
     bindings: [
       {from: ".model.name", to: ".$.item.content"}
     ]}
  ],
  create: enyo.inherit(function (sup) {
    return function () {
      this.collection = new enyo.Collection(this.data);
      sup.apply(this, arguments);
    };
  }),
  subListItemTap: function(inSender, inEvent) {
    this.doSubListSelect(inEvent.originator.content);
  },
  data: [
    {name: "Link 01"},
    {name: "Link 02"},
    {name: "Link 03"},
    {name: "Link 04"},
    {name: "Link 05"},
    {name: "Link 06"},
    {name: "Link 07"},
    {name: "Link 08"},
    {name: "Link 09"}
  ]
});
