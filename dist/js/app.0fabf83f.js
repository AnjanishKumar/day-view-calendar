(function(t){function e(e){for(var a,o,l=e[0],s=e[1],c=e[2],v=0,u=[];v<l.length;v++)o=l[v],i[o]&&u.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=n("ce5b"),r=n.n(i),o=(n("bf40"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{staticStyle:{"z-index":"1000"},attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("Calander")])]),n("v-spacer")],1),n("v-content",[n("calendar-page")],1)],1)}),l=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",[n("v-toolbar",{attrs:{color:"primary"}},[n("div",{staticClass:"title white--text"},[t._v("Day View")]),n("v-spacer"),n("v-btn",{on:{click:t.addEvent}},[t._v("\n        Add Event\n      ")])],1),n("v-card-text",[n("v-select",{attrs:{items:t.timeFormatOption,label:"Time Format"},model:{value:t.timeFormat,callback:function(e){t.timeFormat=e},expression:"timeFormat"}})],1),n("v-card-text",{staticClass:"my-3"},[n("calendar-view-day",{attrs:{events:t.events,format:t.timeFormat},on:{editEvent:t.editEvent}})],1)],1),n("v-dialog",{attrs:{scrollable:"",persistent:"",lazy:"",overlay:!1,"max-width":"500px"},model:{value:t.eventDialog,callback:function(e){t.eventDialog=e},expression:"eventDialog"}},[n("event-editor",{attrs:{event:t.selectedEvent,format:t.timeFormat},on:{cancel:t.closeEditDialog,create:t.onEventCreate,delete:t.onEventDelete,update:t.onEventUpdate}})],1)],1)},c=[],d=n("5176"),v=n.n(d),u=(n("20d6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-form",{ref:"eventForm"},[n("v-card-text",[n("v-text-field",{staticClass:"title pl-4",attrs:{name:"name",placeholder:"Add Label"},model:{value:t.editedEvent.label,callback:function(e){t.$set(t.editedEvent,"label",e)},expression:"editedEvent.label"}}),n("v-dialog",{ref:"startTimeDialog",attrs:{"return-value":t.editedEvent.startTime,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(e){t.$set(t.editedEvent,"startTime",e)}},model:{value:t.startTimeDialog,callback:function(e){t.startTimeDialog=e},expression:"startTimeDialog"}},[n("v-text-field",{attrs:{slot:"activator",value:t._f("formatTime")(t.editedEvent.startTime,t.format),label:"Start Time",rules:t.rules.startTime,"prepend-icon":"access_time",readonly:""},slot:"activator"}),t.startTimeDialog?n("v-time-picker",{attrs:{format:t.format,"full-width":""},model:{value:t.editedEvent.startTime,callback:function(e){t.$set(t.editedEvent,"startTime",e)},expression:"editedEvent.startTime"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.startTimeDialog=!1}}},[t._v("\n            Cancel\n          ")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.$refs.startTimeDialog.save(t.editedEvent.startTime)}}},[t._v("\n            OK\n          ")])],1):t._e()],1),n("v-dialog",{ref:"endTimeDialog",attrs:{"return-value":t.editedEvent.endTime,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(e){t.$set(t.editedEvent,"endTime",e)}},model:{value:t.endTimeDialog,callback:function(e){t.endTimeDialog=e},expression:"endTimeDialog"}},[n("v-text-field",{attrs:{slot:"activator",value:t._f("formatTime")(t.editedEvent.endTime,t.format),label:"End Time",rules:t.rules.endTime,"prepend-icon":"access_time",readonly:""},slot:"activator"}),t.endTimeDialog?n("v-time-picker",{attrs:{format:t.format,"full-width":""},model:{value:t.editedEvent.endTime,callback:function(e){t.$set(t.editedEvent,"endTime",e)},expression:"editedEvent.endTime"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.endTimeDialog=!1}}},[t._v("\n            Cancel\n          ")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.$refs.endTimeDialog.save(t.editedEvent.endTime)}}},[t._v("\n            OK\n          ")])],1):t._e()],1)],1),n("v-card-actions",[t.event?n("v-btn",{attrs:{flat:"",color:"error"},on:{click:function(e){t.$emit("delete",t.event)}}},[t._v("\n      Delete\n    ")]):t._e(),n("v-spacer"),n("v-btn",{attrs:{flat:""},on:{click:function(e){t.$emit("cancel")}}},[t._v("\n      Cancel\n    ")]),n("v-btn",{attrs:{color:"primary"},on:{click:t.saveEvent}},[t._v("\n      "+t._s(t.event?"Update":"Save")+"\n    ")])],1)],1)],1)}),f=[],m=n("e814"),p=n.n(m),h=(n("28a5"),n("768b")),b={props:{event:{type:Object,default:null},format:{type:String,default:"ampm"}},data:function(){var t=this;return{startTimeDialog:!1,endTimeDialog:!1,editedEvent:null,rules:{startTime:[function(e){var n=e.split(":").map(function(t){return p()(t,10)}),a=Object(h["a"])(n,2),i=a[0],r=void 0===i?0:i,o=a[1],l=void 0===o?0:o,s=t.editedEvent.endTime.split(":").map(function(t){return p()(t,10)}),c=Object(h["a"])(s,2),d=c[0],v=void 0===d?0:d,u=c[1],f=void 0===u?0:u,m=60*r+l,b=60*v+f;return b>m||"Event must start before its end time."}],endTime:[function(e){var n=t.editedEvent.startTime.split(":").map(function(t){return p()(t,10)}),a=Object(h["a"])(n,2),i=a[0],r=void 0===i?0:i,o=a[1],l=void 0===o?0:o,s=e.split(":").map(function(t){return p()(t,10)}),c=Object(h["a"])(s,2),d=c[0],v=void 0===d?0:d,u=c[1],f=void 0===u?0:u,m=60*r+l,b=60*v+f;return b>m||"Event must end after its start time."}]}}},watch:{event:{handler:function(t){this.editedEvent=t?v()({},t):this.getDefaultEvent()},immediate:!0}},computed:{},methods:{getDefaultEvent:function(){return{id:"".concat(Math.floor(1e11*Math.random())).concat((new Date).getTime()),label:"",startTime:"00:30",endTime:"01:30"}},saveEvent:function(){this.$refs.eventForm.validate()&&(this.event?this.$emit("update",this.editedEvent):this.$emit("create",this.editedEvent),this.editedEvent=this.getDefaultEvent())}}},g=b,T=n("2877"),E=n("6544"),_=n.n(E),y=n("8336"),x=n("b0af"),w=n("99d9"),D=n("169a"),C=n("4bd4"),O=n("9910"),V=n("2677"),k=n("c964"),j=Object(T["a"])(g,u,f,!1,null,null,null);j.options.__file="EventEditor.vue";var S=j.exports;_()(j,{VBtn:y["a"],VCard:x["a"],VCardActions:w["a"],VCardText:w["b"],VDialog:D["a"],VForm:C["a"],VSpacer:O["a"],VTextField:V["a"],VTimePicker:k["a"]});var $=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:"","d-flex":""}},[n("v-flex",{staticClass:"label-container"},t._l(t.hourList,function(e){return n("div",{key:e,staticClass:"caption cloumn label-item"},[n("span",{staticClass:"label-text text--secondary"},[t._v("\n        "+t._s(t._f("formatTime")(e,t.format))+"\n      ")])])}),0),n("v-flex",{staticClass:"event-container"},[n("div",{staticClass:"grid"},t._l(t.hourList,function(t){return n("div",{key:t,staticClass:"grid-row"})}),0),n("div",{staticClass:"event-list-wrapper"},[n("div",{staticClass:"event-list"},t._l(t.events,function(e){return n("event-item",{key:e.id,style:{top:t.eventAttrMap[e.id].top+"px",height:t.eventAttrMap[e.id].height+"px",zIndex:""+t.eventAttrMap[e.id].zIndex,width:t.eventAttrMap[e.id].width+"%",left:t.eventAttrMap[e.id].left+"%"},attrs:{event:e,format:t.format},on:{edit:function(e){t.$emit("editEvent",e)}}})}),1)])])],1)},A=[],M=(n("55dd"),n("7618")),F=(n("7514"),n("ac6a"),n("75fc")),P=(n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-item",on:{click:function(e){t.$emit("edit",t.event)}}},[n("div",{staticStyle:{overflow:"hidden",height:"100%"}},[n("div",{staticClass:"caption font-weight-medium ellipsis"},[t._v("\n      "+t._s(t.event.label||"(No label)")+"\n    ")]),n("div",{staticClass:"caption text--secondary"},[t._v("\n      "+t._s(t._f("formatTime")(t.event.startTime,t.format))+" - "+t._s(t._f("formatTime")(t.event.endTime,t.format))+"\n    ")])])])}),I=[],z=(n("c5f6"),{props:{event:{type:Object,required:!0},rowHeight:{type:Number,default:40},format:{type:String,default:"ampm"}}}),H=z,L=(n("59a2"),Object(T["a"])(H,P,I,!1,null,null,null));L.options.__file="EventItem.vue";var U=L.exports,B={props:{events:{type:Array,default:function(){return[]}},format:{type:String,default:"ampm",validator:function(t){return["ampm","24hr"].includes(t)}}},components:{EventItem:U},data:function(){return{rowHeight:40}},computed:{hourList:function(){return Object(F["a"])(new Array(24).keys())},eventAttrMap:function(){if(0===this.events.length)return{};var t=[],e=this.rowHeight/60,n=this.events.map(function(t){var e=t.startTime.split(":").map(function(t){return p()(t,10)}),n=Object(h["a"])(e,2),a=n[0],i=n[1],r=t.endTime.split(":").map(function(t){return p()(t,10)}),o=Object(h["a"])(r,2),l=o[0],s=o[1],c=60*a+i,d=60*l+s;return{id:t.id,startHour:a,startTime:c,endTime:d}}),a=this.partitionIntoOverlappingEvents(n);a.forEach(function(n){n.forEach(function(a,i){var r,o,l,s,c,d=i-1;while(d>=0){if(n[d].endTime>a.startTime){s=n[d];break}d-=1}s?(c=t.find(function(t){return t.id===s.id}),c.left>80&&(c=t.find(function(t){return t.id===n[0].id})),r=c.left+10,o=100-r,l=c.zIndex+1):(r=0,o=100,l=1),t.push({id:a.id,top:a.startTime*e,height:(a.endTime-a.startTime)*e,zIndex:l,left:r,width:o})})});var i=0;while(i<t.length){var r=i,o=0;while(r<t.length&&t[i].top===t[r].top)o+=1,r+=1;if(o>1)for(var l=t[i].width/o,s=i+1;s<r;s+=1)t[s].width=l,t[s].left=t[i].left+l*(s-i);i+=o}return t.reduce(function(t,e){return t[e.id]=e,t},{})}},methods:{partitionIntoOverlappingEvents:function(t){if(0===t.length)return[];var e=function(t,e){for(var n=function(n){var a=t[n][0].endTime;if(t[n].forEach(function(t){t.endTime>a&&(a=t.endTime)}),a>e.startTime)return{v:n}},a=0;a<t.length;a+=1){var i=n(a);if("object"===Object(M["a"])(i))return i.v}return-1};t.sort(function(t,e){return t.startTime-e.startTime});var n=[];n[0]=[t[0]];for(var a=1;a<t.length;a+=1){var i=e(n,t[a]);-1!==i?n[i].push(t[a]):n[n.length]=[t[a]]}return n}}},J=B,K=(n("d885"),n("0e8f")),N=n("a722"),q=Object(T["a"])(J,$,A,!1,null,null,null);q.options.__file="CalendarViewDay.vue";var G=q.exports;_()(q,{VFlex:K["a"],VLayout:N["a"]});var Q={name:"Calander",components:{EventEditor:S,CalendarViewDay:G},data:function(){return{timeFormat:"24hr",timeFormatOption:[{text:"12 Hr",value:"ampm"},{text:"24 Hr",value:"24hr"}],eventDialog:!1,selectedEvent:null,events:[]}},methods:{addEvent:function(){this.selectedEvent=null,this.eventDialog=!0},closeEditDialog:function(){this.selectedEvent=null,this.eventDialog=!1},editEvent:function(t){this.selectedEvent=t,this.eventDialog=!0},onEventCreate:function(t){this.events.push(t),this.closeEditDialog()},onEventDelete:function(t){var e=this.events.findIndex(function(e){return e.id===t.id});e>-1&&this.events.splice(e,1),this.closeEditDialog()},onEventUpdate:function(t){v()(this.selectedEvent,t),this.closeEditDialog()}}},R=Q,W=n("a523"),X=n("b56d"),Y=n("71d9"),Z=Object(T["a"])(R,s,c,!1,null,null,null);Z.options.__file="CalendarPage.vue";var tt=Z.exports;_()(Z,{VBtn:y["a"],VCard:x["a"],VCardText:w["b"],VContainer:W["a"],VDialog:D["a"],VSelect:X["a"],VSpacer:O["a"],VToolbar:Y["a"]});var et={name:"App",components:{CalendarPage:tt}},nt=et,at=n("7496"),it=n("549c"),rt=n("2a7f"),ot=Object(T["a"])(nt,o,l,!1,null,null,null);ot.options.__file="App.vue";var lt=ot.exports;_()(ot,{VApp:at["a"],VContent:it["a"],VSpacer:O["a"],VToolbar:Y["a"],VToolbarTitle:rt["a"]});n("6b54");function st(t){return void 0===t?"":t.toString().length<=1?"0".concat(t.toString()):t.toString()}function ct(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"24hr",n=t.toString().split(":").map(function(t){return p()(t,10)}),a=Object(h["a"])(n,2),i=a[0],r=a[1],o=void 0===r?0:r;return"24hr"===e?"".concat(st(i),":").concat(st(o)):"ampm"===e?12===i?"".concat(st(i),":").concat(st(o)," PM"):i>12?"".concat(st(i-12),":").concat(st(o)," PM"):"".concat(st(i),":").concat(st(o)," AM"):t}a["default"].filter("two_digits",st),a["default"].filter("formatTime",ct),a["default"].use(r.a),a["default"].config.productionTip=!0,new a["default"]({render:function(t){return t(lt)}}).$mount("#app")},"59a2":function(t,e,n){"use strict";var a=n("6b3a"),i=n.n(a);i.a},"6b3a":function(t,e,n){},8424:function(t,e,n){},d885:function(t,e,n){"use strict";var a=n("8424"),i=n.n(a);i.a}});
//# sourceMappingURL=app.0fabf83f.js.map