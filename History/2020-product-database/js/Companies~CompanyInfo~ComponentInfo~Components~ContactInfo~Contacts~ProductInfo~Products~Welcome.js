(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Companies~CompanyInfo~ComponentInfo~Components~ContactInfo~Contacts~ProductInfo~Products~Welcome"],{"236e":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-snackbar",{attrs:{timeout:0},model:{value:t.showbar,callback:function(e){t.showbar=e},expression:"showbar"}},[a("div",{staticClass:"body-1"},[a("b",{staticClass:"primary--text"},[t._v(t._s(t.counter))]),t._v(" selected ")]),a("v-btn",{attrs:{color:"primary"},on:{click:t.ReportProceed}},[t._v("Create Report")])],1)],1)},s=[],n=a("5530"),o=[],c={},r={},l={},v={},d=function(){return this.$store.state.Interface};l=Object(n["a"])({Interface:d},l),v=Object(n["a"])({msg:""},v);l=Object(n["a"])({counter:function(){return this.$store.state.report.CountItems()||0}},l),r=Object(n["a"])({ReportProceed:function(){var t=this;t.HideBar(),t.Interface.Goto("/ReportMaker")},Select:function(t){var e=this;e.$store.state.report.setItems(t),e.PressConference()},ReportClear:function(){var t=this;t.Select([])}},r),v=Object(n["a"])({showbar:!1},v),r=Object(n["a"])({PressConference:function(){var t=this;t.counter?t.ShowBar():t.HideBar()},ShowBar:function(){var t=this;t.$data.showbar=!0},HideBar:function(){var t=this;t.$data.showbar=!1}},r);var u={name:"el-reporter",props:o,components:c,methods:r,computed:l,data:function(){return v},created:function(){}},p=u,m=a("2877"),f=a("6544"),b=a.n(f),h=a("8336"),g=(a("caad"),a("a9e3"),a("ade3")),_=(a("ca71"),a("8dd9")),x=a("a9ad"),C=a("7560"),y=a("f2e7"),k=a("fe6c"),O=a("58df"),j=a("80d2"),w=a("d9bd"),P=Object(O["a"])(_["a"],x["a"],y["a"],Object(k["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:C["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,a=t.bottom,i=t.footer,s=t.insetFooter,n=t.left,o=t.right,c=t.top;return{paddingBottom:Object(j["g"])(a+i+s),paddingLeft:this.app?Object(j["g"])(n):void 0,paddingRight:this.app?Object(j["g"])(o):void 0,paddingTop:Object(j["g"])(e+c)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(w["e"])("auto-height",this),0==this.timeout&&Object(w["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(j["s"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(g["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(j["s"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:_["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),I=Object(m["a"])(p,i,s,!1,null,null,null);e["a"]=I.exports;b()(I,{VBtn:h["a"],VSnackbar:P})},"50aa":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"el-items-table"},[a("v-data-table",{staticClass:"item-table",attrs:{items:t.items,loading:t.itemsLoading,headers:t.HDR[t.category],"server-items-length":t.itemsCount,"show-select":!!t.ActionSelect,"hide-default-footer":t.hidefooter,"footer-props":{"items-per-page-options":[30,100,500]}},on:{"update:page":t.ActionPage,"click:row":t.ItemPreview,input:t.ActionSelect,"update:items-per-page":t.UI_ChangeItemsPerPage},scopedSlots:t._u([{key:"item.category",fn:function(t){var e=t.item;return[a("el-marker",{attrs:{view:"icon",item:e}})]}},{key:"item.id",fn:function(e){var i=e.item;return[a("div",{staticClass:"d-flex align-end justify-end pt-1 mr-n3"},[a("v-chip",{attrs:{small:"",color:"transparent"},on:{click:function(e){return e.stopPropagation(),t.OpenProfile(i)}}},[t._v(" "+t._s(i.id)+" "),a("v-icon",{staticClass:"ml-1",attrs:{color:"primary"}},[t._v("mdi-open-in-app")])],1)],1)]}},{key:"item.title",fn:function(e){var i=e.item;return[a("div",{staticClass:"pt-2 pb-1 body-1",staticStyle:{cursor:"default"}},[t._v(" "+t._s(i.title)+" ")])]}},{key:"item.types_as_string",fn:function(e){var i=e.item;return[a("div",{staticClass:"clickable-chips py-1"},[i.types&&i.types.length?t._e():a("div",{staticClass:"caption pl-2 grey--text text--lighten-1"},[t._v(" — ")]),t._l(t.EF_SortTypes(i.types),(function(e,i){return a("v-chip",{key:i,staticClass:"ma-0",attrs:{small:"",color:t.EF_ColorType(e)?"":"transparent"},on:{click:function(a){return a.stopPropagation(),t.UI_SendAction({types:{list:[e.id]}})}}},[a("v-icon",{staticClass:"ml-n1 mr-1",attrs:{size:"8",color:"amber"}},[t._v("mdi-checkbox-blank-circle")]),t._v(" "+t._s(e.name)+" ")],1)}))],2)]}},{key:"item.productionStatus",fn:function(e){var i=e.item;return[a("div",{staticClass:"clickable-chips py-1"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-chip",t._g({staticClass:"ma-0",attrs:{small:"",color:"transparent"},on:{click:function(e){return e.stopPropagation(),t.UI_SendAction({"productionStatus.id":{list:[i.productionStatus.id]}})}}},s),[a("v-icon",{staticClass:"ml-n1 mr-1",attrs:{size:"8",color:"grey lighten-2"}},[t._v("mdi-checkbox-blank-circle")]),t._v(" "+t._s(i.productionStatus&&i.productionStatus.name&&("pre-orders/mass production"==i.productionStatus.name?"po/mp":i.productionStatus.name))+" ")],1)]}}],null,!0)},[a("span",[t._v(" "+t._s(i.productionStatus&&i.productionStatus.name)+" ")])])],1)]}},{key:"item.image",fn:function(e){var i=e.item;return[a("div",{staticClass:"d-flex align-center",staticStyle:{"min-height":"60px"}},[i.image_mini?a("div",[a("v-menu",{attrs:{"open-on-hover":"","offset-x":"","offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("div",t._g({},s),[a("v-img",{attrs:{"aspect-ratio":"products"==i.category?.74825:1,src:i.image_mini,width:"44",alt:""}})],1)]}}],null,!0),model:{value:i.hoverImage,callback:function(e){t.$set(i,"hoverImage",e)},expression:"item.hoverImage"}},[i.image_midi?a("v-list",{staticClass:"pa-0",attrs:{tile:""}},[a("v-img",{attrs:{"aspect-ratio":"products"==i.category?.74825:1,src:i.image_midi,width:"200",alt:""}})],1):t._e()],1)],1):a("v-avatar",{attrs:{tile:"",size:"44"}},[a("v-icon",{staticStyle:{opacity:"0.32"},attrs:{large:""}},[t._v("mdi-image")])],1)],1)]}},{key:"item.component_category",fn:function(e){var i=e.item;return[a("div",{staticClass:"body-1 py-1"},[t._v(" "+t._s(i.component_category&&i.component_category.name||"n/a")+" ")])]}},{key:"item.marking",fn:function(e){var i=e.item;return[a("div",{staticClass:"body-1 py-1"},[t._v(" "+t._s(i.marking||"n/a")+" ")])]}},{key:"item.company_title",fn:function(e){var i=e.item;return[a("span",{staticClass:"caption",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.Interface.Goto("/Companies/"+t.ui2api.apid2id(i.company))}}},[t._v(" "+t._s(i.company_title||"n/a")+" "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1)]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("div",{staticClass:"table-actions"},[a("v-icon",{staticClass:"open-icon",on:{click:function(e){return e.stopPropagation(),t.OpenProfile(i)}}},[t._v("mdi-open-in-app")])],1)]}},{key:"item.actions_report",fn:function(e){var i=e.item;return[a("div",{staticClass:"table-actions"},[a("v-btn",{attrs:{text:"",small:"",disabled:""},on:{click:function(t){return t.stopPropagation(),function(t){return!1}()}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-checkbox-marked-outline")]),a("span",{staticClass:"ml-1"},[t._v("Features")])],1),a("v-btn",{attrs:{text:"",small:"",disabled:""},on:{click:function(t){return t.stopPropagation(),function(t){return!1}()}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-checkbox-marked-outline")]),a("span",{staticClass:"ml-1"},[t._v("Images")])],1),a("v-icon",{on:{click:function(e){return e.stopPropagation(),t.RemoveFromReport(i)}}},[t._v("mdi-delete")])],1)]}}]),model:{value:t.table_selection,callback:function(e){t.table_selection=e},expression:"table_selection"}}),a("block-preview",{ref:"Preview"})],1)},s=[],n=(a("99af"),a("4de4"),a("c975"),a("d81d"),a("2909")),o=a("5530"),c=a("1e35"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-sheet",{attrs:{flat:"","dont-hide-overlay":"","content-class":"container pa-0",scrollable:""},model:{value:t.display,callback:function(e){t.display=e},expression:"display"}},[a("v-card",{attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"pa-0 px-3"},[a("v-sheet",{attrs:{tile:""}},[a("header",[a("div",{staticClass:"d-flex align-center px-4 py-4"},[a("div",{staticClass:"preview-title-text d-flex align-center"},[a("span",{staticClass:"title",on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[t._v(" "+t._s(t.ox.title)+" ")]),a("v-chip",{attrs:{small:"",color:"transparent"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("el-marker",{attrs:{view:"icon",iconsize:"small",item:t.ox}}),a("span",{staticClass:"ml-1"},[t._v(t._s(t.ox.id))])],1)],1),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({staticClass:"mx-4",attrs:{color:"blue"},on:{click:function(e){return t.User.BookmarkToggle(t.ox)}}},i),[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"mdi-bookmark":"mdi-bookmark-outline")+" ")])]}}])},[a("span",[t._v(" "+t._s(t.User.BookmarkIs(t.ox)?"Remove Bookmark":"Save Bookmark")+" ")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({attrs:{color:"primary"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},i),[t._v("mdi-open-in-app")])]}}])},[a("span",[t._v(" View More ")])])],1)]),t.itemLoading?a("section",[a("div",{staticClass:"d-flex justify-center align-center",staticStyle:{height:"240px"}},[a("div",{staticClass:"caption"},[t._v("Loading...")])])]):t._e(),t.itemLoading?t._e():a("section",[a("div",{staticStyle:{"min-height":"240px"}},["products"===t.ox.category?[a("div",{staticClass:"d-flex px-3"},[a("div",[a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",{staticClass:"pt-0"},[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Company ")]),a("v-list-item-title",[t.ox.company&&t.ox.company.id?a("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.uiNavigateCompany(t.ox.company.id)}}},[t._v(" "+t._s(t.ox.company.name)+" "),a("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-open-in-app")])],1):a("div",[t._v("n/a")])])],1)],1),a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",{},[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Brand ")]),a("v-list-item-title",[t.ox.brand&&t.ox.brand.id?a("div",{staticStyle:{cursor:"pointer"},on:{click:function(t){return"*issue brands"}}},[t._v(" "+t._s(t.ox.brand.name)+" "),a("v-icon",{attrs:{small:"",color:"secondary"}},[t._v("mdi-open-in-app")])],1):a("div",[t._v("n/a")])])],1)],1),t._l(t.ox.PreviewContent(),(function(e,i){return e?[a("v-list-item",{attrs:{dense:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption",domProps:{textContent:t._s(i)}}),a("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)],1)]:t._e()}))],2),t.ox.types&&t.ox.types.length?[a("div",{staticClass:"px-4"},[a("div",{staticClass:"caption grey--text text--darken-1 px-2 pb-2",staticStyle:{"white-space":"nowrap"}},[t._v(" Product Types ")]),t._l(t.ox.types,(function(e,i){return a("div",{key:i},[a("v-chip",{staticClass:"mr-1 mb-1",attrs:{small:"",color:"transparent"}},[a("v-icon",{staticClass:"ml-n1 mr-1",attrs:{size:"8",color:"amber"}},[t._v("mdi-checkbox-blank-circle")]),t._v(" "+t._s(e.name)+" ")],1)],1)}))],2)]:t._e(),a("div",{staticClass:"flex-grow-1 pb-3"},[a("div",{staticClass:"caption grey--text text--darken-1 pl-4 pb-1"},[t._v(" Description ")]),a("div",{staticClass:"caption px-4 wrapped-dbtext"},[t.ox.description?a("div",{domProps:{innerHTML:t._s(t.ox.description)}}):a("div",[t._v("n/a")])]),a("div",{staticClass:"pt-4"},[a("v-chip",{staticClass:"mx-3 my-1",attrs:{color:"#FFBE40"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("v-avatar",{staticClass:"black darken-4 white--text",attrs:{left:""}},[a("span",{staticClass:"caption"},[t._v(" "+t._s(t.ox.CountComponents())+" ")])]),a("span",{staticClass:"body-2"},[t._v(" Components ")])],1)],1),a("div",{},[a("v-chip",{staticClass:"mx-3 my-1",attrs:{color:"pink lighten-4"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("v-avatar",{staticClass:"black darken-4 white--text",attrs:{left:""}},[a("span",{staticClass:"caption"},[t._v(" "+t._s(t.ox.features.length||0)+" ")])]),a("span",{staticClass:"body-2"},[t._v(" Features ")])],1)],1)]),a("figure",[t.ox.defaultImage?a("v-img",{attrs:{"aspect-ratio":.74825,src:"//"+t.ox.defaultImage.url,width:"180",alt:""}}):t._e()],1)],2)]:t._e(),"components"===t.ox.category?[a("div",{staticClass:"d-flex px-3"},[a("div",[a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Category ")]),a("div",{staticClass:"body-1"},[t._v(" "+t._s(t.ox.component_category&&t.ox.component_category.name||"n/a")+" ")])],1)],1),a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Model on chip / Type ")]),a("div",{staticClass:"body-1"},[t._v(" "+t._s(t.ox.marking||"n/a")+" ")])],1)],1)],1),a("div",[a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Description ")]),a("div",{staticClass:"body-1"},[t._v(" "+t._s(t.ox.description||"n/a")+" ")])],1)],1)],1),a("div",{staticClass:"pt-2"},[a("div",{staticClass:"caption grey--text text--darken-1 px-2 pb-2",staticStyle:{"white-space":"nowrap"}},[t._v(" Used in Products ")]),a("div",{staticClass:"pt-0"},[a("v-chip",{staticClass:"mx-3 my-1",attrs:{color:"#EF746F"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("v-avatar",{staticClass:"black darken-4 white--text",attrs:{left:""}},[a("span",{staticClass:"caption"},[t._v(" "+t._s(t.ox.productsAmount||0)+" ")])]),a("span",{staticClass:"body-2"},[t._v(" Products ")])],1)],1)])])]:t._e(),"companies"===t.ox.category?[a("div",{staticClass:"d-flex px-3"},[a("div",[a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Original Name ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.originalName||"n/a")+" ")])],1)],1),a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Registration Number ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.registrationNumber||"n/a")+" ")])],1)],1),a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Foundation Year ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.foundationYear||"n/a")+" ")])],1)],1),a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Location ")]),a("v-list-item-title",[t._v(" "+t._s(t.ox.location_string||"n/a")+" ")])],1)],1)],1),a("div",{staticClass:"flex-grow-1"},[a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Description ")]),a("div",{staticClass:"body-2"},[t._v(" "+t._s(t.ox.description||"n/a")+" ")])],1)],1),a("div",[a("div",{staticClass:"pt-2"},[a("v-chip",{staticClass:"mx-3 my-1",attrs:{color:"#EF746F"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("v-avatar",{staticClass:"black darken-4 white--text",attrs:{left:""}},[a("span",{staticClass:"caption"},[t._v(" "+t._s(t.ox.productsAmount)+" ")])]),a("span",{staticClass:"body-2"},[t._v(" Products ")])],1)],1),a("div",{staticClass:"pt-0"},[a("v-chip",{staticClass:"mx-3 my-1",attrs:{color:"purple lighten-4"},on:{click:function(e){return t.uiNavigate(t.ox.href)}}},[a("v-avatar",{staticClass:"black darken-4 white--text",attrs:{left:""}},[a("span",{staticClass:"caption"},[t._v(" "+t._s(t.ox.brandsAmount)+" ")])]),a("span",{staticClass:"body-2"},[t._v(" Brands ")])],1)],1)])],1),a("figure",[t.ox.defaultImage?a("v-img",{attrs:{"aspect-ratio":1,src:"//"+t.ox.defaultImage.url,width:"200",alt:""}}):t._e()],1)])]:t._e(),"contacts"===t.ox.category?[a("div",{staticClass:"d-flex px-3"},[a("div",[a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Email ")]),a("div",{staticClass:"body-2"},[t._v(" "+t._s(t.ox.email||"n/a")+" ")])],1)],1),a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Private Phone ")]),a("div",{staticClass:"body-2"},[t._v(" "+t._s(t.ox.privatePhone||"n/a")+" ")])],1)],1),a("v-list-item",{attrs:{dense:"",flat:""}},[a("v-list-item-content",[a("v-list-item-subtitle",{staticClass:"caption"},[t._v(" Work Phone ")]),a("div",{staticClass:"body-2"},[t._v(" "+t._s(t.ox.workPhone||"n/a")+" ")])],1)],1)],1)])]:t._e()],2)])])],1)],1)],1)},l=[],v=a("46bc"),d=a("b643"),u=[],p={},m={},f={},b={},h=function(){return this.$store.state.Interface};f=Object(o["a"])({Interface:h},f),p=Object(o["a"])(Object(o["a"])({},p),{},{BlockPurchase:v["a"]});var g=function(){return this.$store.state.user};f=Object(o["a"])({User:g},f),b=Object(o["a"])({display:!1,ox:!1,msg:""},b),m=Object(o["a"])(Object(o["a"])({},m),{},{uiExit:function(){this.hidePreview()},showPreview:function(t){var e=this;e.$data.ox=t,e.$data.display=!0,e.LoadItem(t)},hidePreview:function(){var t=this;t.$data.ox=!1,t.$data.display=!1},uiNavigate:function(t){var e=this;e.hidePreview(),e.Interface.Goto(t)},uiNavigateCompany:function(t){var e=this;e.hidePreview(),e.Interface.Goto("/Companies/"+t)}}),b=Object(o["a"])({item:{},itemLoading:!1},b),m=Object(o["a"])({LoadItem:function(t){var e=t.id,a=t.category,i=this;i.$data.ox=t,i.$data.item=t,i.$data.itemLoading=!0,d["a"].getListItem({id:e,category:a}).then(i.ItemLoadingComplete).catch(i.ItemLoadingFailed)},ItemLoadingComplete:function(t){var e=this;e.$data.ox=t,e.$data.item=t,e.$data.itemLoading=!1},ItemLoadingFailed:function(t){var e=this;e.$data.itemLoading=!1}},m);var _={name:"el-items-preview",components:p,props:u,methods:m,computed:f,data:function(){return b}},x=_,C=(a("9fab"),a("2877")),y=a("6544"),k=a.n(y),O=a("8212"),j=a("288c"),w=a("b0af"),P=a("99d9"),I=a("cc20"),S=a("132d"),$=a("adda"),T=a("da13"),B=a("5d23"),A=a("8dd9"),L=a("2fa4"),V=a("3a2f"),N=Object(C["a"])(x,r,l,!1,null,"5f0cfe7c",null),F=N.exports;k()(N,{VAvatar:O["a"],VBottomSheet:j["a"],VCard:w["a"],VCardText:P["c"],VChip:I["a"],VIcon:S["a"],VImg:$["a"],VListItem:T["a"],VListItemContent:B["a"],VListItemSubtitle:B["b"],VListItemTitle:B["c"],VSheet:A["a"],VSpacer:L["a"],VTooltip:V["a"]});var E=a("6910"),R=[],D={},U={},H={},M={},z={};z=Object(o["a"])({msg:"",log:[]},z),H=Object(o["a"])({ui2api:function(){return c["a"]}},H);var G=function(){return this.$store.state.Interface};H=Object(o["a"])({Interface:G},H),D=Object(o["a"])({BlockPreview:F},D),R=["items","itemsCount","itemsLoading"].concat(Object(n["a"])(R)),R=["ActionPage","ActionPerPage"].concat(Object(n["a"])(R)),R=["ActionSelect","ActionTag"].concat(Object(n["a"])(R)),R=["filter"].concat(Object(n["a"])(R)),R=["showPreview"].concat(Object(n["a"])(R)),R=["category"].concat(Object(n["a"])(R)),R=["hidefooter"].concat(Object(n["a"])(R)),U=Object(o["a"])({UI_SendAction:function(t){var e=this.$props.ActionTag;e&&"function"===typeof e&&e(t)}},U),D=Object(o["a"])({BlockSingleItem:E["a"]},D),U=Object(o["a"])({RemoveFromReport:function(t){t&&t.id&&this.$store.state.report.RemoveItem(t)}},U),z=Object(o["a"])({table_selection:[]},z),U=Object(o["a"])({ItemPreview:function(t){var e=this;if(!e.$props.showPreview)return!1;t.category.id&&(t.category="components"),e.$refs.Preview.showPreview(t)},ClearSelection:function(){var t=this;t.$data.table_selection=[],"function"!==typeof t.$props.ActionSelect&&t.$props.ActionSelect([])},OpenProfile:function(t){var e=this;if(!t||!t.href)return!1;e.$refs.Preview.hidePreview(),e.Interface.Goto(t.href),e.$vuetify.goTo(0,0,0)},EF_SortTypes:function(t){var e=this.$props.filter||{},a=e.types||[],i=[],s=[],n=function(t){a.indexOf(t.id)<0?s.push(t):i.push(t)};return t&&t.length&&t.map(n),[].concat(i,s)},EF_ColorType:function(t){return this.$props.filter&&this.$props.filter.types&&this.$props.filter.types.indexOf(t.id)>-1},UI_ChangeItemsPerPage:function(t){var e=this;"function"===typeof e.$props.ActionPerPage&&e.$props.ActionPerPage(t)}},U);var W={default:{sortable:!1,filterable:!1,align:"start"},sortable:{sortable:!0,filterable:!0,align:"start"},minwidth:{width:"1%"},actions:{text:"",value:"actions",width:"1%",align:"end",sortable:!1,filterable:!1},image:{text:"Image",value:"image",width:"1%",align:"center",class:"img",sortable:!1,filterable:!1}},J={};J.products=[Object(o["a"])({},W.image),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Product Title",value:"title",width:"30%"}),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Types",value:"types_as_string",width:"40%"}),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Status",value:"productionStatus",width:"12%"}),Object(o["a"])(Object(o["a"])(Object(o["a"])({},W.default),W.minwidth),{},{text:"ID/Card",value:"id",align:"center"})],J.components=[Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Category",value:"component_category"}),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Model on chip / Type",value:"marking"}),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Name",value:"title"}),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Products",value:"productsAmount",align:"end",width:"1%"}),Object(o["a"])(Object(o["a"])(Object(o["a"])({},W.default),W.minwidth),{},{text:"ID/Card",value:"id",align:"center"})],J.companies=[Object(o["a"])(Object(o["a"])({},W.image),{},{text:"Logo"}),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Company",value:"title"}),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Brands",value:"brandsAmount",width:"1%"}),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Products",value:"productsAmount",width:"1%"}),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Location",value:"location_string"}),Object(o["a"])(Object(o["a"])(Object(o["a"])({},W.default),W.minwidth),{},{text:"ID/Card",value:"id",align:"center"})],J.contacts=[Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Name",value:"title"}),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Company",value:"company_title"}),Object(o["a"])(Object(o["a"])({},W.default),{},{text:"Position",value:"position",width:"25%"}),Object(o["a"])(Object(o["a"])(Object(o["a"])({},W.default),W.minwidth),{},{text:"ID/Card",value:"id",align:"center"})],J.reports=[Object(o["a"])(Object(o["a"])(Object(o["a"])({},W.sortable),W.minwidth),{},{text:"",value:"category"}),Object(o["a"])(Object(o["a"])(Object(o["a"])({},W.sortable),W.minwidth),{},{text:"ID",value:"id"}),Object(o["a"])(Object(o["a"])({},W.sortable),{},{text:"Title",value:"title"}),{text:"Report Settings",value:"actions_report",align:"right",sortable:!1,filterable:!1}],z=Object(o["a"])({HDR:J},z);var Y={name:"el-items-table",components:D,props:R,methods:U,computed:H,watch:M,data:function(){return z},mounted:function(){}},q=Y,K=(a("cfc8"),a("8336")),Q=a("8fea"),X=a("8860"),Z=a("e449"),tt=Object(C["a"])(q,i,s,!1,null,null,null);e["a"]=tt.exports;k()(tt,{VAvatar:O["a"],VBtn:K["a"],VChip:I["a"],VDataTable:Q["a"],VIcon:S["a"],VImg:$["a"],VList:X["a"],VMenu:Z["a"],VTooltip:V["a"]})},"8bba":function(t,e,a){},"9fab":function(t,e,a){"use strict";var i=a("8bba"),s=a.n(i);s.a},ca71:function(t,e,a){},cfc8:function(t,e,a){"use strict";var i=a("e15c"),s=a.n(i);s.a},e15c:function(t,e,a){}}]);
//# sourceMappingURL=Companies~CompanyInfo~ComponentInfo~Components~ContactInfo~Contacts~ProductInfo~Products~Welcome.js.map