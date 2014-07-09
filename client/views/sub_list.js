enyo.kind({
  name: "XV.SampleExtensionSubNav",  
  kind: "enyo.DataList",
  classes: "extension-sub-list",
  fit: true,
  allowTransitions: false,
  handlers: {
    ontap: "subListItemTap"
  },
  events: {
    onSubListSelect: ""
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
      this.collection = new XM.SampleModelCollection(this.data);
      sup.apply(this, arguments);
    };
  }),
  rendered: function() {
    var that = this;
    this.inherited(arguments);
    setTimeout(function(){that.select(0);},1000);
  },
  subListItemTap: function(inSender, inEvent) {
    if(inEvent.model === this.selected()){
      this.doSubListSelect(inEvent.originator.content);
    }
    if(inEvent.originator.content){
      this.select(inEvent.index);
    }
  },
  data: [
    new XM.SampleModel({name: "Link 01"}),
    new XM.SampleModel({name: "Link 02"})
    // new XM.SampleModel({name: "Link 03"}),
    // new XM.SampleModel({name: "Link 04"}),
    // new XM.SampleModel({name: "Link 05"}),
    // new XM.SampleModel({name: "Link 06"}),
    // new XM.SampleModel({name: "Link 07"}),
    // new XM.SampleModel({name: "Link 08"}),
    // new XM.SampleModel({name: "Link 09"})
  ]
});
