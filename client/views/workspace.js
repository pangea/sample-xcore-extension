enyo.kind({
  name: "XV.SampleExtensionWorkspace", 
  fit: true,
  events: {
    onAlert: ""
  },
  components: [
    {name: 'list', kind: 'enyo.DataList', fit: true, allowTransitions: false, renderDelay: null, components: [
      {components: [
        {classes: "item-holder", components: [
          {name: "item"},
          {name: "item2"},
          {name: "item3"}
        ]}
      ], 
       bindings: [
         {from: ".model.name", to: ".$.item.content"},
         {from: ".model.name2", to: ".$.item2.content"},
         {from: ".model.name3", to: ".$.item3.content"}
       ], ontap: 'testAlert'}
    ]}
  ],
  bindings: [
    {from : '.collection', to: '.$.list.collection'}
  ],
  data: [
    new XM.SampleModel({
      name: "This is a test workspace", 
      name2: "This is a test workspace", 
      name3: "This is a test workspace"
    })
  ],
  create: enyo.inherit(function (sup) {
    return function () {
      this.collection = new XM.SampleModelCollection(this.data);
      sup.apply(this, arguments);
    };
  }),
  testAlert: function(inSender, inEvent) {
    alert = {content: 'warning', type: 'warning'};
    this.doAlert(alert);
  }
});

