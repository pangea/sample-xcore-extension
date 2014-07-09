enyo.kind({
  name: "XV.SampleExtensionWorkspace", 
  kind: "enyo.DataList",
  fit: true,
  components: [
    {classes: "item-holder", components: [
      {name: "item"},
      {name: "item2"},
      {name: "item3"}
    ],
     bindings: [
       {from: ".model.name", to: ".$.item.content"},
       {from: ".model.name2", to: ".$.item2.content"},
       {from: ".model.name3", to: ".$.item3.content"}
     ]}
  ],
  create: enyo.inherit(function (sup) {
    return function () {
      this.collection = new XM.SampleModelCollection(this.data);
      sup.apply(this, arguments);
    };
  }),
  data: [
    new XM.SampleModel({name: "This is a test workspace", name2: "This is a test workspace", name3: "This is a test workspace"})
  ]
});
