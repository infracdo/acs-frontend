(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64c5394d"],{"0ebd":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.device,search:e.search,"item-key":"serial_number","single-select":e.singleSelect,"show-select":"",loading:e.dataloaded<1,"loading-text":"Loading... Please wait"},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[e.selected.length>0?i("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[i("v-btn",e._g(e._b({attrs:{color:"primary",dark:"",icon:""}},"v-btn",o,!1),a),[i("v-icon",{attrs:{dark:""}},[e._v("mdi-dots-vertical")])],1)]}}],null,!1,2221821419)},[i("v-list",e._l(e.items,(function(t,a){return i("v-list-item",{key:a,on:{click:function(t){return e.actions(a)}}},[i("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1):e._e(),i("v-toolbar-title",[e._v("Devices")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),i("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[i("v-btn",e._g({attrs:{color:"primary",dark:"",icon:""},on:{click:e.initialize}},Object.assign({},a)),[i("v-icon",[e._v("mdi-cached")])],1)]}}])},[i("span",[e._v("Refresh")])]),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"1000px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:e.initGroup}},"v-btn",o,!1),a),[e._v(" New Device ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-card-text",[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"1",md:"1"}},[i("v-subheader",[i("div",{domProps:{innerHTML:e._s("Serial Number <strong>*</strong>")}})])],1),i("v-col",{attrs:{cols:"4",md:"4"}},[i("v-text-field",{attrs:{disabled:-1!=e.editedIndex,rules:e.serialRules,required:"",outlined:"",dense:""},on:{focus:function(t){e.alert=!1}},model:{value:e.editedItem.serial_number,callback:function(t){e.$set(e.editedItem,"serial_number",t)},expression:"editedItem.serial_number"}})],1),i("v-spacer"),i("v-col",{attrs:{cols:"1",md:"1"}},[i("v-subheader",[i("div",{domProps:{innerHTML:e._s("Parent Group <strong>*</strong>")}})])],1),i("v-col",{attrs:{cols:"4",md:"4"}},[i("v-select",{attrs:{items:e.group_list,"item-value":"editedItem.parent[0]",rules:[function(e){return!!e||"Group is required"}],outlined:"",dense:""},model:{value:e.editedItem.parent,callback:function(t){e.$set(e.editedItem,"parent",t)},expression:"editedItem.parent"}})],1)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"1",md:"1"}},[i("v-subheader",[i("div",{domProps:{innerHTML:e._s("Device Alias <strong>*</strong>")}})])],1),i("v-col",{attrs:{cols:"4",md:"4"}},[i("v-text-field",{attrs:{rules:[function(e){return!!e||"Name is required"}],required:"",outlined:"",dense:""},model:{value:e.editedItem.device_name,callback:function(t){e.$set(e.editedItem,"device_name",t)},expression:"editedItem.device_name"}})],1),i("v-spacer"),i("v-col",{attrs:{cols:"1",md:"1"}},[i("v-subheader",[i("div",{domProps:{innerHTML:e._s("Device Type <strong>*</strong>")}})])],1),i("v-col",{attrs:{cols:"4",md:"4"}},[i("v-select",{attrs:{items:["Access Point","Switch","Router"],"item-value":"Access Point",rules:[function(e){return!!e||"Device type is required"}],outlined:"",dense:""},model:{value:e.editedItem.device_type,callback:function(t){e.$set(e.editedItem,"device_type",t)},expression:"editedItem.device_type"}})],1)],1),i("v-subheader",[i("div",{domProps:{innerHTML:e._s("<strong>* </strong> indicates required field")}})])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),i("v-btn",{attrs:{disabled:!e.valid||!e.editedItem.device_name||!e.editedItem.parent||!e.editedItem.serial_number,color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.dialogMove,callback:function(t){e.dialogMove=t},expression:"dialogMove"}},[i("v-card",[i("v-card-title",[e._v(" Select Group ")]),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"3",md:"3"}},[i("v-subheader",[e._v("Parent Group")])],1),i("v-col",{attrs:{cols:"6",md:"6"}},[i("v-select",{attrs:{items:e.group_list,"item-value":"editedItem.parent[0]",rules:[function(e){return!!e||"Group is required"}],outlined:"",dense:""},model:{value:e.editedItem.parent,callback:function(t){e.$set(e.editedItem,"parent",t)},expression:"editedItem.parent"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeMove}},[e._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.moveConfirm}},[e._v("OK")]),i("v-spacer")],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[e._v("Are you sure you want to delete this item?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),i("v-spacer")],1)],1)],1),i("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.dialogcli,callback:function(t){e.dialogcli=t},expression:"dialogcli"}},[i("v-layout",{staticClass:"fill-height",attrs:{column:""}},[i("v-card",{attrs:{"min-height":"500","max-width":"600","max-height":"500",dark:""}},[i("v-card-title",{staticClass:"headline"},[e._v(e._s(e.cliheader))]),i("v-card-text",[i("v-textarea",{attrs:{rows:"17",readonly:"",densed:"",outlined:"","no-resize":""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)],1),i("v-card",[i("v-row",{staticClass:"mx-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"8",md:"8"}},[i("v-text-field",{staticClass:"mt-2",attrs:{required:"",outlined:"",dense:""},model:{value:e.getcode,callback:function(t){e.getcode=t},expression:"getcode"}})],1),i("v-col",{attrs:{cols:"2",md:"2"}},[i("v-btn",{staticClass:"mt-2",attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.sendcode(e.getcode)}}},[e._v("send code")])],1),i("v-col",{attrs:{cols:"1",md:"1"}},[i("v-btn",{staticClass:"mt-2",attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.code=""}}},[e._v("clear")])],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.status",fn:function(t){var a=t.item;return["white"!=e.getColor(a.status)?i("v-icon",{attrs:{small:"",color:e.getColor(a.status)}},[e._v(" mdi-checkbox-blank-circle ")]):e._e(),"white"==e.getColor(a.status)?i("v-icon",{attrs:{small:""}},[e._v(" mdi-checkbox-blank-circle-outline ")]):e._e(),e._v(" "+e._s(a.status)+" ")]}},{key:"item.actions",fn:function(t){var a=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(t){return e.opencli(a)}}},[e._v(" mdi-console ")])]}},{key:"no-data",fn:function(){return[e._v(" No data to display ")]},proxy:!0}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),i("v-card",{staticClass:"mt-4"},[i("v-expansion-panels",{attrs:{multiple:""}},[i("v-expansion-panel",[i("v-expansion-panel-header",[e._v("Show rogue devices")]),i("v-expansion-panel-content",[i("rogue-ap")],1)],1)],1)],1)],1)},o=[],s=(i("c975"),i("a434"),i("c427")),n=i("814f"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.device,search:e.search,"item-key":"serial_number","single-select":e.singleSelect,"show-select":"",loading:e.dataloaded<1,"loading-text":"Loading... Please wait"},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[e.selected.length>0?i("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[i("v-btn",e._g(e._b({attrs:{color:"primary",dark:"",icon:""}},"v-btn",o,!1),a),[i("v-icon",{attrs:{dark:""}},[e._v("mdi-dots-vertical")])],1)]}}],null,!1,2221821419)},[i("v-list",e._l(e.items,(function(t,a){return i("v-list-item",{key:a,on:{click:function(t){return e.actions(a)}}},[i("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1):e._e(),i("v-toolbar-title",[e._v("Rogue Devices")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),i("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[i("v-btn",e._g({attrs:{color:"primary",dark:"",icon:""},on:{click:e.initialize}},Object.assign({},a)),[i("v-icon",[e._v("mdi-cached")])],1)]}}])},[i("span",[e._v("Refresh")])]),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"1000px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-card-text",[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"1",md:"1"}},[i("v-subheader",[i("div",{domProps:{innerHTML:e._s("Serial Number <strong>*</strong>")}})])],1),i("v-col",{attrs:{cols:"4",md:"4"}},[i("v-text-field",{attrs:{disabled:-1!=e.editedIndex,rules:e.serialRules,required:"",outlined:"",dense:""},on:{focus:function(t){e.alert=!1}},model:{value:e.editedItem.serial_number,callback:function(t){e.$set(e.editedItem,"serial_number",t)},expression:"editedItem.serial_number"}})],1),i("v-spacer"),i("v-col",{attrs:{cols:"1",md:"1"}},[i("v-subheader",[i("div",{domProps:{innerHTML:e._s("Parent Group <strong>*</strong>")}})])],1),i("v-col",{attrs:{cols:"4",md:"4"}},[i("v-select",{attrs:{items:e.group_list,"item-value":"editedItem.parent[0]",rules:[function(e){return!!e||"Group is required"}],outlined:"",dense:""},model:{value:e.editedItem.parent,callback:function(t){e.$set(e.editedItem,"parent",t)},expression:"editedItem.parent"}})],1)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"1",md:"1"}},[i("v-subheader",[i("div",{domProps:{innerHTML:e._s("Device Alias <strong>*</strong>")}})])],1),i("v-col",{attrs:{cols:"4",md:"4"}},[i("v-text-field",{attrs:{rules:[function(e){return!!e||"Name is required"}],required:"",outlined:"",dense:""},model:{value:e.editedItem.device_name,callback:function(t){e.$set(e.editedItem,"device_name",t)},expression:"editedItem.device_name"}})],1),i("v-spacer"),i("v-col",{attrs:{cols:"1",md:"1"}},[i("v-subheader",[i("div",{domProps:{innerHTML:e._s("Device Type <strong>*</strong>")}})])],1),i("v-col",{attrs:{cols:"4",md:"4"}},[i("v-select",{attrs:{items:["Access Point","Switch","Router"],"item-value":"Access Point",rules:[function(e){return!!e||"Device type is required"}],outlined:"",dense:""},model:{value:e.editedItem.device_type,callback:function(t){e.$set(e.editedItem,"device_type",t)},expression:"editedItem.device_type"}})],1)],1),i("v-subheader",[i("div",{domProps:{innerHTML:e._s("<strong>* </strong> indicates required field")}})])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),i("v-btn",{attrs:{disabled:!e.valid||!e.editedItem.device_name||!e.editedItem.parent||!e.editedItem.serial_number,color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.dialogMove,callback:function(t){e.dialogMove=t},expression:"dialogMove"}},[i("v-card",[i("v-card-title",[e._v(" Select Group ")]),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"3",md:"3"}},[i("v-subheader",[e._v("Parent Group")])],1),i("v-col",{attrs:{cols:"6",md:"6"}},[i("v-select",{attrs:{items:e.group_list,"item-value":"editedItem.parent[0]",rules:[function(e){return!!e||"Group is required"}],outlined:"",dense:""},model:{value:e.editedItem.parent,callback:function(t){e.$set(e.editedItem,"parent",t)},expression:"editedItem.parent"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeMove}},[e._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.moveConfirm}},[e._v("OK")]),i("v-spacer")],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[e._v("Are you sure you want to delete this item?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),i("v-spacer")],1)],1)],1),i("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.dialogcli,callback:function(t){e.dialogcli=t},expression:"dialogcli"}},[i("v-layout",{staticClass:"fill-height",attrs:{column:""}},[i("v-card",{attrs:{"min-height":"500","max-width":"600","max-height":"500",dark:""}},[i("v-card-title",{staticClass:"headline"},[e._v(e._s(e.cliheader))]),i("v-card-text",[i("v-textarea",{attrs:{rows:"17",readonly:"",densed:"",outlined:"","no-resize":""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)],1),i("v-card",[i("v-row",{staticClass:"mx-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"8",md:"8"}},[i("v-text-field",{staticClass:"mt-2",attrs:{required:"",outlined:"",dense:""},model:{value:e.getcode,callback:function(t){e.getcode=t},expression:"getcode"}})],1),i("v-col",{attrs:{cols:"2",md:"2"}},[i("v-btn",{staticClass:"mt-2",attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.sendcode(e.getcode)}}},[e._v("send code")])],1),i("v-col",{attrs:{cols:"1",md:"1"}},[i("v-btn",{staticClass:"mt-2",attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.code=""}}},[e._v("clear")])],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.status",fn:function(t){var a=t.item;return["white"!=e.getColor(a.status)?i("v-icon",{attrs:{small:"",color:e.getColor(a.status)}},[e._v(" mdi-checkbox-blank-circle ")]):e._e(),"white"==e.getColor(a.status)?i("v-icon",{attrs:{small:""}},[e._v(" mdi-checkbox-blank-circle-outline ")]):e._e(),e._v(" "+e._s(a.status)+" ")]}},{key:"item.actions",fn:function(t){var a=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(t){return e.opencli(a)}}},[e._v(" mdi-console ")])]}},{key:"no-data",fn:function(){return[e._v(" No data to display ")]},proxy:!0}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},l=[],c={name:"rogue",data:function(){return{dataloaded:0,vsave:!0,valid:!1,singleSelect:!1,alert:!1,parent_watcher:"",serialList:[],selected:[],search:"",code:"",cliheader:"",cliserial:"",apname:"acs#",mode_url:"exec",mode_prompt:"",mode_idtx:"0",mode_idtx1:"0",mode_idtx2:"0",mode_stridx:"",getcode:"",dialog:!1,dialogDelete:!1,dialogcli:!1,dialogMove:!1,headers:[{text:"Status",value:"status"},{text:"Device_name",align:"start",sortable:!1,value:"device_name"},{text:"Serial number",value:"serial_number"},{text:"Group",value:"parent"},{text:"Mac address",value:"mac_address"},{text:"Offline time",value:"date_offline"},{text:"Modified time",value:"date_modified"},{text:"Action",value:"actions",sortable:!1}],serialRules:[function(e){return!!e||"Serial is required"},function(e){return e&&e.length>=10||"Invalid Serial"},function(e){return e&&e.length<=14||"Invalid Serial"}],group_list:[],serial_list:[],device:[],items:[{title:"restart"},{title:"move"},{title:"delete"}],editedIndex:-1,editedItem:{id:"",status:"offline",device_name:"",activated:"",date_created:"",date_modified:"",date_offline:"",group_name:"",location:"",mac_address:"",parent:"/apollo",device_type:"Acess Point",serial_number:""},defaultItem:{id:"",status:"offline",device_name:"",activated:"",date_created:"",date_modified:"",date_offline:"",group_name:"",location:"",mac_address:"",parent:"",device_type:"Acess Point",serial_number:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Device":"Edit Device"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize(),this.todo()},beforeDestroy:function(){clearInterval(this.timer)},methods:{todo:function(){this.timer=setInterval(function(){this.selected.length<=0&&this.initialize()}.bind(this),15e3)},initialize:function(){var e=this,t="hehe";console.log(t),this.dataloaded=0,s["a"].get("/getdevice",{timeout:5e3}).then((function(t){var i;for(i in e.device=[],t.data)e.serialList.push(t.data[i].serial_number),"unassigned"==t.data[i].parent&&e.device.push(t.data[i]);console.log(t.data),e.dataloaded=1,console.log("device refresh")})).catch((function(t){console.log(t),e.dataloaded=1})),s["a"].get("/getgroup").then((function(t){var i,a=new Array;for(i in t.data)a[i]=t.data[i].parent+"/"+t.data[i].group_name;e.group_list=a,e.group_list||(e.editedItem.parent=e.group_list[0]),console.log(t.data)})).catch((function(e){console.log(e)}))},getColor:function(e){return"syncing"==e?"orange":"online"==e?"green":"white"},editItem:function(e){this.dialog=!0,this.parent_watcher=e.parent,this.editedIndex=this.device.indexOf(e),this.editedItem=Object.assign({},e)},initGroup:function(){var e=this;s["a"].get("/getgroup").then((function(t){var i,a=new Array;for(i in t.data)a[i]=t.data[i].parent+"/"+t.data[i].group_name;e.group_list=a,e.group_list||(e.editedItem.parent=e.group_list[0]),console.log(t.data)})).catch((function(e){console.log(e)})),this.serialRules.push((function(t){return e.serialList.indexOf(t)<0||"Serial already exist"}))},closeMove:function(){this.dialogMove=!1},moveConfirm:function(){var e;new Array;for(e in this.selected)console.log(this.device.indexOf(this.selected[e])),-1!=this.device.indexOf(this.selected[e])&&(this.device[this.device.indexOf(this.selected[e])].parent=this.editedItem.parent),this.editedItem=Object.assign({},this.device[this.device.indexOf(this.selected[e])]),s["a"].put("/updatedevice/"+this.editedItem.id,this.editedItem).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),this.closeMove(),n["a"].get("/MoveDeviceGroup/"+this.selected[e].serial_number).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));this.selected=[]},deleteItem:function(e){this.editedIndex=this.device.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.device.splice(this.editedIndex,1),this.closeDelete(),s["a"].delete("/deletedevice/"+this.editedItem.id).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},actions:function(e){if(2==e){new Array;for(t in this.selected)console.log(this.selected[t].device_name),this.device.splice(this.device.indexOf(this.selected[t]),1),s["a"].delete("/deletedevice/"+this.selected[t].id).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));this.selected=[]}else if(0==e){var t;new Array;for(t in this.selected)n["a"].get("/Reboot/"+this.selected[t].serial_number).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),console.log(this.selected[t].id);this.selected=[]}else 1==e&&(this.dialogMove=!0)},opencli:function(e){this.dialogcli=!0,this.code="",this.apname="acs#",this.mode_url="exec",this.mode_prompt="",this.mode_idtx="0",this.mode_idtx1="0",this.mode_idtx2="0",this.mode_stridx="",this.cliserial=e.serial_number,null==e.device_name?this.cliheader=e.serial_number:this.cliheader=e.device_name},sendcode:function(e){var t=this;this.getcode="";var i="{,"+this.mode_url+","+this.mode_idtx+","+this.mode_idtx1+","+this.mode_idtx2+","+this.mode_stridx+","+this.mode_prompt+"}";console.log(i),this.code+=e+"\n",n["a"].post("/WebCli/"+this.cliserial+", "+e,i).then((function(e){t.code+=e.data.content,t.apname=e.data.mode_tip,t.mode_url=e.data.mode_url,t.mode_idtx=e.data.mode_idtx,t.mode_idtx1=e.data.mode_idtx1,t.mode_idtx2=e.data.mode_idtx2,t.mode_stridx=e.data.mode_stridx,t.mode_prompt=e.data.mode_prompt,t.code+=t.apname,console.log(e.data)})).catch((function(e){console.log(e)})),console.log(this.cliserial)},close:function(){var e=this;this.serialRules.splice(3,1),this.$refs.form.resetValidation(),this.valid=!1,this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedItem.parent=e.group_list[0],e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;if(this.valid)if(this.$refs.form.resetValidation(),this.editedIndex>-1)Object.assign(this.device[this.editedIndex],this.editedItem),console.log(this.editedItem),s["a"].put("/updatedevice/"+this.editedItem.id,this.editedItem).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),this.close(),this.parent_watcher!=this.editedItem.parent&&n["a"].get("/MoveDeviceGroup/"+this.editedItem.serial_number).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));else{new Array;var t,i=!0;for(t in this.device)this.device[t].serial_number==this.editedItem.serial_number&&(i=!1);i?(this.device.push(this.editedItem),s["a"].post("/adddevice",this.editedItem).then((function(t){e.device[e.device.length-1].id=t.data.id,console.log(e.editedItem)})).catch((function(e){console.log(e)})),this.close()):this.alert=!0}}}},r=c,u=i("2877"),v=i("6544"),m=i.n(v),h=i("8336"),f=i("b0af"),p=i("99d9"),g=i("62ad"),_=i("8fea"),x=i("169a"),b=i("ce7e"),I=i("4bd4"),k=i("132d"),y=(i("20f6"),i("e8f2")),w=Object(y["a"])("layout"),C=i("8860"),V=i("da13"),D=i("5d23"),S=i("e449"),T=i("0fd9"),O=i("b974"),M=i("2fa4"),P=i("e0c7"),A=i("8654"),L=i("a844"),G=i("71d9"),$=i("2a7f"),H=i("3a2f"),R=Object(u["a"])(r,d,l,!1,null,null,null),j=R.exports;m()(R,{VBtn:h["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:g["a"],VDataTable:_["a"],VDialog:x["a"],VDivider:b["a"],VForm:I["a"],VIcon:k["a"],VLayout:w,VList:C["a"],VListItem:V["a"],VListItemTitle:D["c"],VMenu:S["a"],VRow:T["a"],VSelect:O["a"],VSpacer:M["a"],VSubheader:P["a"],VTextField:A["a"],VTextarea:L["a"],VToolbar:G["a"],VToolbarTitle:$["a"],VTooltip:H["a"]});var q={components:{"rogue-ap":j},data:function(){return{dataloaded:0,vsave:!0,valid:!1,singleSelect:!1,alert:!1,parent_watcher:"",serialList:[],selected:[],search:"",code:"",cliheader:"",cliserial:"",apname:"acs#",mode_url:"exec",mode_prompt:"",mode_idtx:"0",mode_idtx1:"0",mode_idtx2:"0",mode_stridx:"",getcode:"",dialog:!1,dialogDelete:!1,dialogcli:!1,dialogMove:!1,headers:[{text:"Status",value:"status"},{text:"Device_name",align:"start",sortable:!1,value:"device_name"},{text:"Serial number",value:"serial_number"},{text:"Group",value:"parent"},{text:"Mac address",value:"mac_address"},{text:"Offline time",value:"date_offline"},{text:"Modified time",value:"date_modified"},{text:"Action",value:"actions",sortable:!1}],serialRules:[function(e){return!!e||"Serial is required"},function(e){return e&&e.length>=10||"Invalid Serial"},function(e){return e&&e.length<=14||"Invalid Serial"}],group_list:[],serial_list:[],device:[],items:[{title:"restart"},{title:"move"},{title:"delete"}],editedIndex:-1,editedItem:{id:"",status:"offline",device_name:"",activated:"",date_created:"",date_modified:"",date_offline:"",group_name:"",location:"",mac_address:"",parent:"/apollo",device_type:"Acess Point",serial_number:""},defaultItem:{id:"",status:"offline",device_name:"",activated:"",date_created:"",date_modified:"",date_offline:"",group_name:"",location:"",mac_address:"",parent:"",device_type:"Acess Point",serial_number:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Device":"Edit Device"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize(),this.todo()},beforeDestroy:function(){clearInterval(this.timer)},methods:{todo:function(){this.timer=setInterval(function(){this.selected.length<=0&&this.initialize()}.bind(this),15e3)},initialize:function(){var e=this;this.dataloaded=0,s["a"].get("/getdevice",{timeout:5e3}).then((function(t){var i;for(i in e.device=[],t.data)e.serialList.push(t.data[i].serial_number),"unassigned"!=t.data[i].parent&&e.device.push(t.data[i]);e.dataloaded=1,console.log("device refresh"),console.log(e.selected)})).catch((function(t){console.log(t),e.dataloaded=1})),s["a"].get("/getgroup").then((function(t){var i,a=new Array;for(i in t.data)a[i]=t.data[i].parent+"/"+t.data[i].group_name;e.group_list=a,e.group_list||(e.editedItem.parent=e.group_list[0]),console.log(t.data)})).catch((function(e){console.log(e)}))},getColor:function(e){return"syncing"==e?"orange":"online"==e?"green":"white"},editItem:function(e){this.dialog=!0,this.parent_watcher=e.parent,this.editedIndex=this.device.indexOf(e),this.editedItem=Object.assign({},e)},initGroup:function(){var e=this;s["a"].get("/getgroup").then((function(t){var i,a=new Array;for(i in t.data)a[i]=t.data[i].parent+"/"+t.data[i].group_name;e.group_list=a,e.group_list||(e.editedItem.parent=e.group_list[0]),console.log(t.data)})).catch((function(e){console.log(e)})),this.serialRules.push((function(t){return e.serialList.indexOf(t)<0||"Serial already exist"}))},closeMove:function(){this.dialogMove=!1},moveConfirm:function(){var e;new Array;for(e in this.selected)console.log(this.device.indexOf(this.selected[e])),-1!=this.device.indexOf(this.selected[e])&&(this.device[this.device.indexOf(this.selected[e])].parent=this.editedItem.parent),this.editedItem=Object.assign({},this.device[this.device.indexOf(this.selected[e])]),s["a"].put("/updatedevice/"+this.editedItem.id,this.editedItem).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),this.closeMove(),n["a"].get("/MoveDeviceGroup/"+this.selected[e].serial_number).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));this.selected=[]},deleteItem:function(e){this.editedIndex=this.device.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.device.splice(this.editedIndex,1),this.closeDelete(),s["a"].delete("/deletedevice/"+this.editedItem.id).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},actions:function(e){if(2==e){new Array;for(t in this.selected)console.log(this.selected[t].device_name),this.device.splice(this.device.indexOf(this.selected[t]),1),s["a"].delete("/deletedevice/"+this.selected[t].id).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));this.selected=[]}else if(0==e){var t;new Array;for(t in this.selected)n["a"].get("/Reboot/"+this.selected[t].serial_number).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),console.log(this.selected[t].id);this.selected=[]}else 1==e&&(this.dialogMove=!0)},opencli:function(e){this.dialogcli=!0,this.code="",this.apname="acs#",this.mode_url="exec",this.mode_prompt="",this.mode_idtx="0",this.mode_idtx1="0",this.mode_idtx2="0",this.mode_stridx="",this.cliserial=e.serial_number,null==e.device_name?this.cliheader=e.serial_number:this.cliheader=e.device_name},sendcode:function(e){var t=this;this.getcode="";var i="{,"+this.mode_url+","+this.mode_idtx+","+this.mode_idtx1+","+this.mode_idtx2+","+this.mode_stridx+","+this.mode_prompt+"}";console.log(i),this.code+=e+"\n",n["a"].post("/WebCli/"+this.cliserial+", "+e,i).then((function(e){t.code+=e.data.content,t.apname=e.data.mode_tip,t.mode_url=e.data.mode_url,t.mode_idtx=e.data.mode_idtx,t.mode_idtx1=e.data.mode_idtx1,t.mode_idtx2=e.data.mode_idtx2,t.mode_stridx=e.data.mode_stridx,t.mode_prompt=e.data.mode_prompt,t.code+=t.apname,console.log(e.data)})).catch((function(e){console.log(e)})),console.log(this.cliserial)},close:function(){var e=this;this.serialRules.splice(3,1),this.$refs.form.resetValidation(),this.valid=!1,this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedItem.parent=e.group_list[0],e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;if(this.valid)if(this.$refs.form.resetValidation(),this.editedIndex>-1)Object.assign(this.device[this.editedIndex],this.editedItem),console.log(this.editedItem),s["a"].put("/updatedevice/"+this.editedItem.id,this.editedItem).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),this.close(),this.parent_watcher!=this.editedItem.parent&&n["a"].get("/MoveDeviceGroup/"+this.editedItem.serial_number).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));else{new Array;var t,i=!0;for(t in this.device)this.device[t].serial_number==this.editedItem.serial_number&&(i=!1);i?(this.device.push(this.editedItem),s["a"].post("/adddevice",this.editedItem).then((function(t){e.device[e.device.length-1].id=t.data.id,console.log(e.editedItem)})).catch((function(e){console.log(e)})),this.close()):this.alert=!0}}}},z=q,N=i("cd55"),E=i("49e2"),F=i("c865"),K=i("0393"),B=Object(u["a"])(z,a,o,!1,null,null,null);t["default"]=B.exports;m()(B,{VBtn:h["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:g["a"],VDataTable:_["a"],VDialog:x["a"],VDivider:b["a"],VExpansionPanel:N["a"],VExpansionPanelContent:E["a"],VExpansionPanelHeader:F["a"],VExpansionPanels:K["a"],VForm:I["a"],VIcon:k["a"],VLayout:w,VList:C["a"],VListItem:V["a"],VListItemTitle:D["c"],VMenu:S["a"],VRow:T["a"],VSelect:O["a"],VSpacer:M["a"],VSubheader:P["a"],VTextField:A["a"],VTextarea:L["a"],VToolbar:G["a"],VToolbarTitle:$["a"],VTooltip:H["a"]})},1681:function(e,t,i){},"814f":function(e,t,i){"use strict";var a=i("bc3a"),o=i.n(a);t["a"]=o.a.create({baseURL:"http://"+window.location.hostname+":7547",headers:{"Content-type":"application/json"}})},a844:function(e,t,i){"use strict";i("1681");var a=i("8654"),o=i("58df");const s=Object(o["a"])(a["a"]);t["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...a["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(i,t)+"px"},genInput(){const e=a["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){a["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},e8f2:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var a=i("a026");function o(e){return a["a"].extend({name:"v-"+e,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:i,data:a,children:o}){a.staticClass=`${e} ${a.staticClass||""}`.trim();const{attrs:s}=a;if(s){a.attrs={};const e=Object.keys(s).filter(e=>{if("slot"===e)return!1;const t=s[e];return e.startsWith("data-")?(a.attrs[e]=t,!1):t||"string"===typeof t});e.length&&(a.staticClass+=" "+e.join(" "))}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),t(i.tag,a,o)}})}}}]);
//# sourceMappingURL=chunk-64c5394d.f7665502.js.map