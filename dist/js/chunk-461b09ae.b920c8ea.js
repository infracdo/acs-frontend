(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-461b09ae"],{"055f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{attrs:{justify:"left"}},[s("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"primary",dark:"",center:""}},"v-btn",n,!1),i),[t._v(" Add Tenant ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("User Profile")])]),s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"Filled",required:"",solo:""}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"middle name",hint:"example of helper text only on focus"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"last name*",hint:"example of persistent helper text","persistent-hint":"",required:"",outline:""}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Email*",required:""}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Password*",type:"password",required:""}})],1),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-autocomplete",{attrs:{items:["CDO","DVO","MAKATI","CEBU"],label:"Sites"}})],1),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-switch",{attrs:{label:"Toggle test"},model:{value:t.closeOnClick,callback:function(e){t.closeOnClick=e},expression:"closeOnClick"}})],1),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-checkbox",{attrs:{label:"check box"},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1)],1)],1),s("small",[t._v("*indicates required field")])],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.localStorage.setItem("lastname","Smith")}}},[t._v(" Save ")])],1)],1)],1)],1)},n=[],a={name:"Administration",data:function(){return{dialog:!1}}},l=a,o=s("2877"),r=s("6544"),c=s.n(r),h=(s("2bfd"),s("b974")),d=s("8654"),u=s("d9f7"),m=s("80d2");const p={...h["b"],offsetY:!0,offsetOverflow:!0,transition:!1};var v=h["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:h["a"].options.props.menuProps.type,default:()=>p},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...h["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(m["q"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=h["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...p,...t}},searchIsDirty(){return null!=this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=h["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){t!==e&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===m["w"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===m["w"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==m["w"].backspace&&t!==m["w"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,n=t!==i-1?t:t-1,a=this.selectedItems[n];a?this.selectItem(e):this.setValue(this.multiple?[]:void 0),this.selectedIndex=n},clearableCallback(){this.internalSearch=void 0,h["a"].options.methods.clearableCallback.call(this)},genInput(){const t=d["a"].options.methods.genInput.call(this);return t.data=Object(u["a"])(t.data,{attrs:{"aria-activedescendant":Object(m["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(m["o"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=h["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?h["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;h["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){h["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){h["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){h["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],n=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}),f=s("8336"),g=s("b0af"),I=s("99d9"),x=s("ac7c"),b=s("62ad"),S=s("a523"),y=(s("368e"),s("480e")),w=s("4ad4"),C=s("b848"),k=s("75eb"),D=s("e707"),A=s("e4d3"),$=s("21be"),O=s("f2e7"),T=s("a293"),V=s("58df"),_=s("d9bd");const F=Object(V["a"])(w["a"],C["a"],k["a"],D["a"],A["a"],$["a"],O["a"]);var E=F.extend({name:"v-dialog",directives:{ClickOutside:T["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(_["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):D["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(y["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(m["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),B=s("0fd9"),M=s("2fa4"),L=s("b73d"),j=Object(o["a"])(l,i,n,!1,null,null,null);e["default"]=j.exports;c()(j,{VAutocomplete:v,VBtn:f["a"],VCard:g["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCheckbox:x["a"],VCol:b["a"],VContainer:S["a"],VDialog:E,VRow:B["a"],VSpacer:M["a"],VSwitch:L["a"],VTextField:d["a"]})},"2bfd":function(t,e,s){},"368e":function(t,e,s){}}]);
//# sourceMappingURL=chunk-461b09ae.b920c8ea.js.map