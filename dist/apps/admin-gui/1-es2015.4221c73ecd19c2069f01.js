(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{BAI5:function(e,t,s){"use strict";s.d(t,"a",(function(){return T}));var i=s("Ssnw"),r=s("X2Q7"),n=s("iyZ4"),a=s("EM62"),c=s("sEIs"),o=s("2kYt"),l=s("0XDM"),b=s("A8Ay"),u=s("csyo"),p=s("K9kF"),h=s("s2Ay");function d(e,t){1&e&&(a.Sb(0,"h1",6),a.Jc(1),a.ec(2,"translate"),a.Rb()),2&e&&(a.Ab(1),a.Lc(" ",a.fc(2,1,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.YOU_ARE_MEMBER"),"\n"))}function f(e,t){1&e&&(a.Sb(0,"h1",6),a.Jc(1),a.ec(2,"translate"),a.Rb()),2&e&&(a.Ab(1),a.Lc(" ",a.fc(2,1,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.USER_IS_MEMBER"),"\n"))}function m(e,t){1&e&&a.Nb(0,"mat-spinner",7)}const g=function(){return["select","expiration","menu","recent"]};function S(e,t){if(1&e){const e=a.Tb();a.Sb(0,"perun-web-apps-groups-list",8),a.Zb("page",(function(t){return a.xc(e),a.dc().pageChanged(t)})),a.Rb()}if(2&e){const e=a.dc();a.kc("pageSize",e.pageSize)("groups",e.membersGroups)("hideColumns",a.oc(5,g))("disableMembers",!1)("filter",e.memberFilterValue)}}function I(e,t){1&e&&a.Nb(0,"mat-spinner",7)}function E(e,t){if(1&e){const e=a.Tb();a.Sb(0,"perun-web-apps-groups-list",8),a.Zb("page",(function(t){return a.xc(e),a.dc(2).adminPageChanged(t)})),a.Rb()}if(2&e){const e=a.dc(2);a.kc("pageSize",e.adminPageSize)("groups",e.adminsGroups)("hideColumns",a.oc(5,g))("disableMembers",!1)("filter",e.adminFilterValue)}}function R(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",9),a.Sb(1,"h1",6),a.Jc(2),a.ec(3,"translate"),a.Rb(),a.Sb(4,"perun-web-apps-refresh-button",1),a.Zb("refresh",(function(){return a.xc(e),a.dc().refreshAdminTable()})),a.Rb(),a.Sb(5,"perun-web-apps-immediate-filter",2),a.Zb("filter",(function(t){return a.xc(e),a.dc().adminFilter(t)})),a.Rb(),a.Hc(6,I,1,0,"mat-spinner",3),a.Hc(7,E,1,6,"perun-web-apps-groups-list",4),a.Rb()}if(2&e){const e=a.dc();a.Ab(2),a.Lc(" ",a.fc(3,4,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.USER_IS_ADMIN")," "),a.Ab(3),a.kc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Ab(1),a.kc("ngIf",e.adminRefresh),a.Ab(1),a.kc("ngIf",!e.adminRefresh)}}let T=(()=>{class e{constructor(e,t,s,i,r,a){this.usersService=e,this.memberService=t,this.tableConfigService=s,this.groupService=i,this.store=r,this.route=a,this.memberFilterValue="",this.adminFilterValue="",this.vos=[],this.membersGroups=[],this.adminsGroups=[],this.tableId=n.W,this.adminTableId=n.V}ngOnInit(){this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.adminPageSize=this.tableConfigService.getTablePageSize(this.adminTableId),!0===(this.showPrincipal=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.params.subscribe(e=>this.userId=e.userId),this.refreshAdminTable(),this.refreshMemberTable()}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}adminPageChanged(e){this.adminPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.adminTableId,e.pageSize)}memberFilter(e){this.memberFilterValue=e}adminFilter(e){this.adminFilterValue=e}refreshAdminTable(){this.adminRefresh=!0,this.usersService.getGroupsWhereUserIsAdmin(this.userId).subscribe(e=>{this.adminsGroups=e,this.adminRefresh=!1})}refreshMemberTable(){this.memberRefresh=!0,this.membersGroups=[],this.usersService.getVosWhereUserIsMember(this.userId).subscribe(e=>{this.vos=e;for(const t of this.vos)this.memberService.getMemberByUser(t.id,this.userId).subscribe(e=>{this.groupService.getMemberGroups(e.id).subscribe(e=>{this.membersGroups=this.membersGroups.concat(e),this.vos.indexOf(t)===this.vos.length-1&&(this.memberRefresh=!1)})})})}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(r.p),a.Mb(r.i),a.Mb(n.kb),a.Mb(r.h),a.Mb(i.k),a.Mb(c.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-user-groups"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Eb("router-component",!0)},decls:7,vars:6,consts:[["class","page-subtitle",4,"ngIf"],[3,"refresh"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","groups","hideColumns","disableMembers","filter","page",4,"ngIf"],["class","mt-5",4,"ngIf"],[1,"page-subtitle"],[1,"ml-auto","mr-auto"],[3,"pageSize","groups","hideColumns","disableMembers","filter","page"],[1,"mt-5"]],template:function(e,t){1&e&&(a.Hc(0,d,3,3,"h1",0),a.Hc(1,f,3,3,"h1",0),a.Sb(2,"perun-web-apps-refresh-button",1),a.Zb("refresh",(function(){return t.refreshMemberTable()})),a.Rb(),a.Sb(3,"perun-web-apps-immediate-filter",2),a.Zb("filter",(function(e){return t.memberFilter(e)})),a.Rb(),a.Hc(4,m,1,0,"mat-spinner",3),a.Hc(5,S,1,6,"perun-web-apps-groups-list",4),a.Hc(6,R,8,6,"div",5)),2&e&&(a.kc("ngIf",t.showPrincipal),a.Ab(1),a.kc("ngIf",!t.showPrincipal),a.Ab(2),a.kc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Ab(1),a.kc("ngIf",t.memberRefresh),a.Ab(1),a.kc("ngIf",!t.memberRefresh),a.Ab(1),a.kc("ngIf",!t.showPrincipal))},directives:[o.t,l.a,b.a,u.c,p.a],pipes:[h.d],styles:[""]}),e})()},ECIY:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var i=s("X2Q7"),r=s("Ssnw"),n=s("EM62"),a=s("sEIs"),c=s("2kYt"),o=s("bdug"),l=s("csyo"),b=s("s2Ay");function u(e,t){if(1&e&&n.Nb(0,"app-two-entity-attribute-page",3),2&e){const e=n.dc();n.kc("entityValues",e.facilities)("firstEntity","user")("firstEntityId",e.userId)("secondEntity","facility")}}function p(e,t){1&e&&n.Nb(0,"mat-spinner",4)}let h=(()=>{class e{constructor(e,t,s,i){this.route=e,this.storage=t,this.facilitiesManagerService=s,this.store=i,this.facilities=[]}ngOnInit(){this.loading=!0,!0===(this.showPrincipal=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.parent.params.subscribe(e=>this.userId=e.userId),this.facilitiesManagerService.getAssignedFacilitiesByUser(this.userId).subscribe(e=>{this.facilities=e,this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(a.a),n.Mb(r.k),n.Mb(i.g),n.Mb(r.k))},e.\u0275cmp=n.Gb({type:e,selectors:[["app-user-settings-facility-attributes"]],decls:5,vars:5,consts:[[1,"page-subtitle"],[3,"entityValues","firstEntity","firstEntityId","secondEntity",4,"ngIf"],["class","ml-auto mr-auto",4,"ngIf"],[3,"entityValues","firstEntity","firstEntityId","secondEntity"],[1,"ml-auto","mr-auto"]],template:function(e,t){1&e&&(n.Sb(0,"h1",0),n.Jc(1),n.ec(2,"translate"),n.Rb(),n.Hc(3,u,1,4,"app-two-entity-attribute-page",1),n.Hc(4,p,1,0,"mat-spinner",2)),2&e&&(n.Ab(1),n.Kc(n.fc(2,3,"USER_DETAIL.SETTINGS.FACILITY_ATTRIBUTES.TITLE")),n.Ab(2),n.kc("ngIf",!t.loading),n.Ab(1),n.kc("ngIf",t.loading))},directives:[c.t,o.a,l.c],pipes:[b.d],styles:[""]}),e})()},"Q/gj":function(e,t,s){"use strict";s.d(t,"a",(function(){return k}));var i=s("Ssnw"),r=(s("HHEo"),s("cqs0")),n=s("8clQ"),a=s("mEf3"),c=s("X2Q7"),o=s("iyZ4"),l=s("+0js"),b=s("IDQ9"),u=s("EM62"),p=s("sEIs"),h=s("OZ4H"),d=s("s2Ay"),f=s("KZIX"),m=s("0XDM"),g=s("PBFl"),S=s("A8Ay"),I=s("2kYt"),E=s("csyo"),R=s("LKLE"),T=s("bdug");const A=["list"];function v(e,t){1&e&&(u.Jc(0),u.ec(1,"translate")),2&e&&u.Lc(" ",u.fc(1,1,"ADMIN_USER.ENTITY")," ")}function M(e,t){1&e&&u.Nb(0,"mat-spinner",11)}function y(e,t){if(1&e){const e=u.Tb();u.Sb(0,"perun-web-apps-attributes-list",12,13),u.Zb("page",(function(t){return u.xc(e),u.dc().pageChanged(t)})),u.Rb()}if(2&e){const e=u.dc();u.kc("pageSize",e.pageSize)("filterValue",e.filterValue)("attributes",e.attributes)("selection",e.selection)}}function N(e,t){1&e&&(u.Jc(0),u.ec(1,"translate"),u.ec(2,"translate")),2&e&&u.Mc(" ",u.fc(1,2,"ADMIN_USER.ENTITY")," - ",u.fc(2,4,"FACILITY_DETAIL.ENTITY")," ")}function U(e,t){if(1&e&&u.Nb(0,"app-two-entity-attribute-page",16),2&e){const e=u.dc(3);u.kc("firstEntity","user")("firstEntityId",e.userId)("secondEntity","facility")}}function P(e,t){if(1&e&&u.Hc(0,U,1,3,"app-two-entity-attribute-page",15),2&e){const e=u.dc(2);u.kc("ngIf",!e.loading)}}function w(e,t){1&e&&(u.Sb(0,"mat-tab"),u.Hc(1,N,3,6,"ng-template",2),u.Hc(2,P,1,1,"ng-template",14),u.Rb())}let k=(()=>{class e{constructor(e,t,s,i,n,a,c,l){this.route=e,this.attributesManager=t,this.notificator=s,this.dialog=i,this.translate=n,this.tableConfigService=a,this.store=c,this.authResolver=l,this.selection=new r.c(!0,[]),this.attributes=[],this.filterValue="",this.tableId=o.o,this.translate.get("USER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE").subscribe(e=>this.saveSuccessMessage=e),this.translate.get("USER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE").subscribe(e=>this.deleteSuccessMessage=e)}ngOnInit(){this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe(e=>{this.userId=e.userId,void 0===this.userId&&(this.userId=this.store.getPerunPrincipal().userId),this.userFacilityAttAuth=this.authResolver.isAuthorized("getAssignedFacilities_User_policy",[{id:this.userId,beanName:"User"}]),this.refreshTable()})}onCreate(){const e=Object(n.n)();e.width="1050px",e.data={entityId:this.userId,entity:"user",notEmptyAttributes:this.attributes,style:"user-theme"},this.dialog.open(b.a,e).afterClosed().subscribe(e=>{e&&this.refreshTable()})}onSave(){this.list.updateMapAttributes();const e=Object(n.n)();e.width="450px",e.data={entityId:this.userId,entity:"user",attributes:this.selection.selected},this.dialog.open(l.f,e).afterClosed().subscribe(e=>{e&&this.refreshTable()})}onDelete(){const e=Object(n.n)();e.width="450px",e.data={entityId:this.userId,entity:"user",attributes:this.selection.selected},this.dialog.open(a.a,e).afterClosed().subscribe(e=>{e&&this.refreshTable()})}refreshTable(){this.loading=!0,this.attributesManager.getUserAttributes(this.userId).subscribe(e=>{this.attributes=e,this.selection.clear(),this.loading=!1})}applyFilter(e){this.filterValue=e}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(p.a),u.Mb(c.c),u.Mb(i.j),u.Mb(h.b),u.Mb(d.e),u.Mb(o.kb),u.Mb(i.k),u.Mb(i.g))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-user-settings-attributes"]],viewQuery:function(e,t){var s;1&e&&u.Qc(A,!0),2&e&&u.sc(s=u.ac())&&(t.list=s.first)},hostVars:2,hostBindings:function(e,t){2&e&&u.Eb("router-component",!0)},decls:20,vars:18,consts:[[1,"page-subtitle"],[1,"mb-2"],["matTabLabel",""],[1,"mt-2",3,"refresh"],["mat-flat-button","","color","accent",1,"mr-2","mt-2",3,"click"],["mat-flat-button","","color","accent",1,"mr-2","mt-2",3,"disabled","click"],["mat-flat-button","","color","warn",1,"mt-2",3,"disabled","click"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","filterValue","attributes","selection","page",4,"ngIf"],[4,"ngIf"],[1,"ml-auto","mr-auto"],[3,"pageSize","filterValue","attributes","selection","page"],["list",""],["matTabContent",""],[3,"firstEntity","firstEntityId","secondEntity",4,"ngIf"],[3,"firstEntity","firstEntityId","secondEntity"]],template:function(e,t){1&e&&(u.Sb(0,"h1",0),u.Jc(1),u.ec(2,"translate"),u.Rb(),u.Sb(3,"mat-tab-group"),u.Sb(4,"mat-tab",1),u.Hc(5,v,2,3,"ng-template",2),u.Sb(6,"perun-web-apps-refresh-button",3),u.Zb("refresh",(function(){return t.refreshTable()})),u.Rb(),u.Sb(7,"button",4),u.Zb("click",(function(){return t.onCreate()})),u.Jc(8),u.ec(9,"translate"),u.Rb(),u.Sb(10,"button",5),u.Zb("click",(function(){return t.onSave()})),u.Jc(11),u.ec(12,"translate"),u.Rb(),u.Sb(13,"button",6),u.Zb("click",(function(){return t.onDelete()})),u.Jc(14),u.ec(15,"translate"),u.Rb(),u.Sb(16,"perun-web-apps-immediate-filter",7),u.Zb("filter",(function(e){return t.applyFilter(e)})),u.Rb(),u.Hc(17,M,1,0,"mat-spinner",8),u.Hc(18,y,2,4,"perun-web-apps-attributes-list",9),u.Rb(),u.Hc(19,w,3,0,"mat-tab",10),u.Rb()),2&e&&(u.Ab(1),u.Kc(u.fc(2,10,"USER_DETAIL.SETTINGS.ATTRIBUTES.TITLE")),u.Ab(7),u.Lc(" ",u.fc(9,12,"USER_DETAIL.SETTINGS.ATTRIBUTES.CREATE")," "),u.Ab(2),u.kc("disabled",0===t.selection.selected.length),u.Ab(1),u.Lc(" ",u.fc(12,14,"USER_DETAIL.SETTINGS.ATTRIBUTES.SAVE")," "),u.Ab(2),u.kc("disabled",0===t.selection.selected.length),u.Ab(1),u.Lc(" ",u.fc(15,16,"USER_DETAIL.SETTINGS.ATTRIBUTES.DELETE")," "),u.Ab(2),u.kc("placeholder","SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER"),u.Ab(1),u.kc("ngIf",t.loading),u.Ab(1),u.kc("ngIf",!t.loading),u.Ab(1),u.kc("ngIf",t.userFacilityAttAuth))},directives:[f.c,f.a,f.d,m.a,g.b,S.a,I.t,E.c,R.a,f.b,T.a],pipes:[d.d],styles:[""]}),e})()},QOlj:function(e,t,s){"use strict";s.d(t,"a",(function(){return v}));var i=s("X2Q7"),r=s("FlRo"),n=s("Ssnw"),a=s("nyAh"),c=s("8clQ"),o=s("+0js"),l=s("EM62"),b=s("sEIs"),u=s("OZ4H"),p=s("2kYt"),h=s("ZG5M"),d=s("Meci"),f=s("PBFl"),m=s("bFHC"),g=s("s2Ay");function S(e,t){1&e&&l.Nb(0,"th",12)}function I(e,t){if(1&e&&(l.Sb(0,"td",13),l.Jc(1),l.Rb()),2&e){const e=t.$implicit;l.Ab(1),l.Lc(" ",e.displayName,": ")}}function E(e,t){1&e&&l.Nb(0,"th",12)}function R(e,t){if(1&e){const e=l.Tb();l.Sb(0,"td",14),l.Jc(1),l.Sb(2,"button",15),l.Zb("click",(function(){return l.xc(e),l.dc(2).changeEmail()})),l.Sb(3,"mat-icon"),l.Jc(4,"edit"),l.Rb(),l.Rb(),l.Rb()}if(2&e){const e=t.$implicit;l.Ab(1),l.Lc(" ",e.value," ")}}function T(e,t){1&e&&l.Nb(0,"tr",16)}function A(e,t){if(1&e&&(l.Sb(0,"div",2),l.Sb(1,"mat-card",3),l.Sb(2,"mat-card-header"),l.Sb(3,"mat-card-title"),l.Sb(4,"h1",4),l.Jc(5),l.ec(6,"translate"),l.Rb(),l.Rb(),l.Rb(),l.Sb(7,"mat-card-content"),l.Sb(8,"table",5),l.Qb(9,6),l.Hc(10,S,1,0,"th",7),l.Hc(11,I,2,1,"td",8),l.Pb(),l.Qb(12,9),l.Hc(13,E,1,0,"th",7),l.Hc(14,R,5,1,"td",10),l.Pb(),l.Hc(15,T,1,0,"tr",11),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e){const e=l.dc();l.Ab(5),l.Kc(l.fc(6,3,"USER_DETAIL.OVERVIEW.GENERAL_SETTINGS")),l.Ab(3),l.kc("dataSource",e.mailDataSource),l.Ab(7),l.kc("matRowDefColumns",e.displayedColumns)}}let v=(()=>{class e{constructor(e,t,s,i,r){this.userService=e,this.attributeService=t,this.storeService=s,this.route=i,this.dialog=r,this.navItems=[],this.displayedColumns=["name","value"],this.inMyProfile=!1}ngOnInit(){this.route.params.subscribe(e=>{void 0!==e.userId?this.userService.getUserById(e.userId).subscribe(e=>{this.user=e,this.initNavItems()}):(this.inMyProfile=!0,this.userID=this.storeService.getPerunPrincipal().user.id,this.attributeService.getUserAttributeByName(this.userID,a.a.USER_DEF_PREFERRED_MAIL).subscribe(e=>{this.preferredMail=e,this.handleMailNotDefined(),this.mailDataSource=new r.o([this.preferredMail]),this.initNavItems()}))})}initNavItems(){this.navItems=[{cssIcon:"perun-vo",url:"organizations",label:"MENU_ITEMS.ADMIN.ORGANIZATIONS",style:"user-btn"},{cssIcon:"perun-group",url:"groups",label:"MENU_ITEMS.ADMIN.GROUPS",style:"user-btn"}],window.location.pathname.startsWith("/admin")&&this.navItems.push({cssIcon:"perun-group",url:"identities",label:"MENU_ITEMS.USER.IDENTITIES",style:"user-btn"},{cssIcon:"perun-resource",url:"resources",label:"MENU_ITEMS.USER.RESOURCES",style:"user-btn"}),this.navItems.push({cssIcon:"perun-attributes",url:"attributes",label:"MENU_ITEMS.USER.ATTRIBUTES",style:"user-btn"}),this.navItems.push({cssIcon:"perun-settings2",url:"settings",label:"MENU_ITEMS.ADMIN.SETTINGS",style:"user-btn"})}changeEmail(){const e=Object(c.n)();e.width="350px",e.data={userId:this.userID},this.dialog.open(o.c,e).afterClosed().subscribe(e=>{e&&this.attributeService.getUserAttributeByName(this.userID,a.a.USER_DEF_PREFERRED_MAIL).subscribe(e=>{this.preferredMail=e,this.handleMailNotDefined(),this.mailDataSource=new r.o([this.preferredMail])})})}handleMailNotDefined(){null==this.preferredMail&&(this.preferredMail={id:-1,beanName:"Attribute",displayName:Object(c.s)(a.a.USER_DEF_PREFERRED_MAIL.split(":").pop()),value:Object("-")})}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(i.p),l.Mb(i.c),l.Mb(n.k),l.Mb(b.a),l.Mb(u.b))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-user-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&l.Eb("router-component",!0)},decls:2,vars:3,consts:[["class","align-cards",4,"ngIf"],[3,"items","size"],[1,"align-cards"],[1,"mat-elevation-z3"],[1,"page-subtitle"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["class","font-weight-bold","mat-cell","",4,"matCellDef"],["matColumnDef","value"],["mat-cell","",4,"matCellDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",1,"font-weight-bold"],["mat-cell",""],["mat-icon-button","",1,"ml-3",3,"click"],["mat-row",""]],template:function(e,t){1&e&&(l.Hc(0,A,16,5,"div",0),l.Nb(1,"perun-web-apps-menu-buttons-field",1)),2&e&&(l.kc("ngIf",t.inMyProfile),l.Ab(1),l.kc("items",t.navItems)("size","small"))},directives:[p.t,h.a,d.a,d.f,d.m,d.d,r.n,r.c,r.i,r.b,r.m,r.h,r.a,f.b,m.a,r.l],pipes:[g.d],styles:[".align-cards[_ngcontent-%COMP%]{margin:1rem;display:inline-block;vertical-align:top}"]}),e})()},S5du:function(e,t,s){"use strict";s.d(t,"a",(function(){return R}));var i=s("X2Q7"),r=s("Ssnw"),n=s("iyZ4"),a=s("EM62"),c=s("sEIs"),o=s("2kYt"),l=s("0XDM"),b=s("A8Ay"),u=s("csyo"),p=s("WXqB"),h=s("s2Ay");function d(e,t){1&e&&(a.Sb(0,"h1",6),a.Jc(1),a.ec(2,"translate"),a.Rb()),2&e&&(a.Ab(1),a.Lc(" ",a.fc(2,1,"SHARED_LIB.PERUN.ORGANIZATIONS.YOU_ARE_MEMBER"),"\n"))}function f(e,t){1&e&&(a.Sb(0,"h1",6),a.Jc(1),a.ec(2,"translate"),a.Rb()),2&e&&(a.Ab(1),a.Lc(" ",a.fc(2,1,"SHARED_LIB.PERUN.ORGANIZATIONS.USER_IS_MEMBER"),"\n"))}function m(e,t){1&e&&a.Nb(0,"mat-spinner",7)}function g(e,t){if(1&e){const e=a.Tb();a.Sb(0,"perun-web-apps-vo-select-table",8),a.Zb("page",(function(t){return a.xc(e),a.dc().memberPageChanged(t)})),a.Rb()}if(2&e){const e=a.dc();a.kc("displayedColumns",e.displayedColumns)("pageSize",e.memberPageSize)("filterValue",e.memberFilterValue)("vos",e.vosWhereIsMember)}}function S(e,t){1&e&&a.Nb(0,"mat-spinner",7)}function I(e,t){if(1&e){const e=a.Tb();a.Sb(0,"perun-web-apps-vo-select-table",8),a.Zb("page",(function(t){return a.xc(e),a.dc(2).adminPageChanged(t)})),a.Rb()}if(2&e){const e=a.dc(2);a.kc("displayedColumns",e.displayedColumns)("pageSize",e.adminPageSize)("filterValue",e.adminFilterValue)("vos",e.vosWhereIsAdmin)}}function E(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",9),a.Sb(1,"h1",6),a.Jc(2),a.ec(3,"translate"),a.Rb(),a.Sb(4,"perun-web-apps-refresh-button",1),a.Zb("refresh",(function(){return a.xc(e),a.dc().refreshAdminTable()})),a.Rb(),a.Sb(5,"perun-web-apps-immediate-filter",2),a.Zb("filter",(function(t){return a.xc(e),a.dc().applyAdminFilter(t)})),a.Rb(),a.Hc(6,S,1,0,"mat-spinner",3),a.Hc(7,I,1,4,"perun-web-apps-vo-select-table",4),a.Rb()}if(2&e){const e=a.dc();a.Ab(2),a.Kc(a.fc(3,4,"SHARED_LIB.PERUN.ORGANIZATIONS.USER_IS_ADMIN")),a.Ab(3),a.kc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Ab(1),a.kc("ngIf",e.adminRefresh),a.Ab(1),a.kc("ngIf",!e.adminRefresh)}}let R=(()=>{class e{constructor(e,t,s,i,r){this.usersService=e,this.authResolver=t,this.tableConfigService=s,this.store=i,this.route=r,this.adminFilterValue="",this.memberFilterValue="",this.displayedColumns=["id","name"],this.adminTableId=n.Y,this.memberTableId=n.Z}ngOnInit(){this.adminPageSize=this.tableConfigService.getTablePageSize(this.adminTableId),this.memberPageSize=this.tableConfigService.getTablePageSize(this.memberTableId),!0===(this.isMyProfile=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.params.subscribe(e=>this.userId=e.userId),this.refreshAdminTable(),this.refreshMemberTable()}refreshMemberTable(){this.memberRefresh=!0,this.usersService.getVosWhereUserIsMember(this.userId).subscribe(e=>{this.vosWhereIsMember=e,this.memberRefresh=!1},()=>this.memberRefresh=!1)}refreshAdminTable(){this.adminRefresh=!0,this.usersService.getVosWhereUserIsAdmin(this.userId).subscribe(e=>{this.vosWhereIsAdmin=e,this.adminRefresh=!1},()=>this.adminRefresh=!1)}applyMemberFilter(e){this.memberFilterValue=e}adminPageChanged(e){this.adminPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.adminTableId,e.pageSize)}memberPageChanged(e){this.memberPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.memberTableId,e.pageSize)}applyAdminFilter(e){this.adminFilterValue=e}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(i.p),a.Mb(r.g),a.Mb(n.kb),a.Mb(r.k),a.Mb(c.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-user-organizations"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Eb("router-component",!0)},decls:7,vars:6,consts:[["class","page-subtitle",4,"ngIf"],[3,"refresh"],[3,"placeholder","filter"],["class","mr-auto ml-auto",4,"ngIf"],[3,"displayedColumns","pageSize","filterValue","vos","page",4,"ngIf"],["class","mt-5",4,"ngIf"],[1,"page-subtitle"],[1,"mr-auto","ml-auto"],[3,"displayedColumns","pageSize","filterValue","vos","page"],[1,"mt-5"]],template:function(e,t){1&e&&(a.Hc(0,d,3,3,"h1",0),a.Hc(1,f,3,3,"h1",0),a.Sb(2,"perun-web-apps-refresh-button",1),a.Zb("refresh",(function(){return t.refreshMemberTable()})),a.Rb(),a.Sb(3,"perun-web-apps-immediate-filter",2),a.Zb("filter",(function(e){return t.applyMemberFilter(e)})),a.Rb(),a.Hc(4,m,1,0,"mat-spinner",3),a.Hc(5,g,1,4,"perun-web-apps-vo-select-table",4),a.Hc(6,E,8,6,"div",5)),2&e&&(a.kc("ngIf",t.isMyProfile),a.Ab(1),a.kc("ngIf",!t.isMyProfile),a.Ab(2),a.kc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Ab(1),a.kc("ngIf",t.memberRefresh),a.Ab(1),a.kc("ngIf",!t.memberRefresh),a.Ab(1),a.kc("ngIf",!t.isMyProfile))},directives:[o.t,l.a,b.a,u.c,p.a],pipes:[h.d],styles:[""]}),e})()},faZ6:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var i=s("EM62"),r=s("ma6z");let n=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["app-user-settings"]],hostVars:2,hostBindings:function(e,t){2&e&&i.Eb("router-component",!0)},decls:1,vars:0,template:function(e,t){1&e&&i.Nb(0,"app-animated-router-outlet")},directives:[r.a],styles:[""]}),e})()},m1kt:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var i=s("X2Q7"),r=s("EM62"),n=s("sEIs"),a=s("2kYt"),c=s("csyo"),o=s("ZG5M");function l(e,t){1&e&&r.Nb(0,"mat-spinner",2)}function b(e,t){if(1&e&&(r.Sb(0,"div"),r.Nb(1,"perun-web-apps-menu-buttons-field",3),r.Rb()),2&e){const e=r.dc();r.Ab(1),r.kc("items",e.navItems)("size","small")}}let u=(()=>{class e{constructor(e,t){this.route=e,this.userManager=t,this.navItems=[],this.loading=!1}ngOnInit(){window.location.pathname.startsWith("/admin")?(this.loading=!0,this.route.parent.parent.params.subscribe(e=>{this.userManager.getUserById(e.userId).subscribe(e=>{this.isServiceUser=e.serviceUser,this.initNavItems(),this.loading=!1},()=>this.loading=!1)})):this.initNavItems()}initNavItems(){this.navItems=[],window.location.pathname.startsWith("/admin")?(this.navItems.push(this.isServiceUser?{cssIcon:"perun-service-identity",url:"associated-users",label:"MENU_ITEMS.USER.ASSOCIATED_USERS",style:"user-btn"}:{cssIcon:"perun-service-identity",url:"service-identities",label:"MENU_ITEMS.USER.SERVICE_IDENTITIES",style:"user-btn"}),this.navItems.push({cssIcon:"perun-group",url:"roles",label:"MENU_ITEMS.USER.ROLES",style:"user-btn"})):this.navItems.push({cssIcon:"perun-settings2",url:"passwordReset",label:"MENU_ITEMS.USER.PASSWORD_RESET",style:"user-btn"},{cssIcon:"perun-settings2",url:"guiConfig",label:"MENU_ITEMS.USER.GUI_CONFIG",style:"user-btn"})}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(n.a),r.Mb(i.p))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-user-settings-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&r.Eb("router-component",!0)},decls:2,vars:2,consts:[["class","mr-auto ml-auto",4,"ngIf"],[4,"ngIf"],[1,"mr-auto","ml-auto"],[3,"items","size"]],template:function(e,t){1&e&&(r.Hc(0,l,1,0,"mat-spinner",0),r.Hc(1,b,2,2,"div",1)),2&e&&(r.kc("ngIf",t.loading),r.Ab(1),r.kc("ngIf",!t.loading))},directives:[a.t,c.c,o.a],styles:[""]}),e})()},zrcO:function(e,t,s){"use strict";s.r(t),s.d(t,"UsersModule",(function(){return ue}));var i=s("2kYt"),r=s("sEIs"),n=s("S5du"),a=s("BAI5"),c=s("faZ6"),o=s("m1kt"),l=s("Q/gj"),b=s("ECIY"),u=s("HHEo"),p=s("8clQ"),h=s("iyZ4"),d=s("EM62"),f=s("29Wa"),m=s("R7+U"),g=s("mFH5"),S=s("s2Ay");function I(e,t){if(1&e&&(d.Sb(0,"mat-option",5),d.Jc(1),d.Rb()),2&e){const e=t.$implicit;d.kc("value",e),d.Ab(1),d.Lc(" ",e," ")}}let E=(()=>{class e{constructor(e){this.guiConfigService=e,this.tablePageSizeOptions=p.a}ngOnInit(){this.preferredTablePageSize=this.guiConfigService.getNumber(h.c)}updatePreferredTablePageSize(){this.guiConfigService.setNumber(h.c,this.preferredTablePageSize)}}return e.\u0275fac=function(t){return new(t||e)(d.Mb(h.b))},e.\u0275cmp=d.Gb({type:e,selectors:[["app-user-settings-app-configuration"]],decls:10,vars:8,consts:[[1,"page-subtitle"],[1,"col-12","col-lg-6","p-0"],[1,"w-100"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(d.Sb(0,"h1",0),d.Jc(1),d.ec(2,"translate"),d.Rb(),d.Sb(3,"div",1),d.Sb(4,"mat-form-field",2),d.Sb(5,"mat-label"),d.Jc(6),d.ec(7,"translate"),d.Rb(),d.Sb(8,"mat-select",3),d.Zb("valueChange",(function(e){return t.preferredTablePageSize=e}))("valueChange",(function(){return t.updatePreferredTablePageSize()})),d.Hc(9,I,2,2,"mat-option",4),d.Rb(),d.Rb(),d.Rb()),2&e&&(d.Ab(1),d.Kc(d.fc(2,4,"USER_DETAIL.SETTINGS.GUI_CONFIG.TITLE")),d.Ab(5),d.Kc(d.fc(7,6,"USER_DETAIL.SETTINGS.GUI_CONFIG.PREF_TABLE_PAGE_SIZE")),d.Ab(2),d.kc("value",t.preferredTablePageSize),d.Ab(1),d.kc("ngForOf",t.tablePageSizeOptions))},directives:[f.c,f.g,m.a,i.s,g.l],pipes:[S.d],styles:[""]}),e})();var R=s("QOlj"),T=s("4sdY"),A=s("Ssnw"),v=s("EtYo"),M=s("bFHC"),y=s("Y2X+"),N=s("ma6z"),U=s("j+u3");const P=function(){return{color:"black"}},w=function(){return["/myProfile"]};function k(e,t){if(1&e&&(d.Sb(0,"div",1),d.Nb(1,"perun-web-apps-back-button"),d.Sb(2,"div",2),d.Nb(3,"mat-icon",3),d.ec(4,"translate"),d.Sb(5,"div",4),d.Sb(6,"div",5),d.Sb(7,"a",6),d.Jc(8),d.ec(9,"userFullName"),d.Rb(),d.Sb(10,"span",7),d.Jc(11),d.Rb(),d.Rb(),d.Sb(12,"span",8),d.Jc(13),d.ec(14,"translate"),d.ec(15,"translate"),d.Rb(),d.Rb(),d.Rb(),d.Nb(16,"app-animated-router-outlet"),d.Rb()),2&e){const e=d.dc();d.Ab(3),d.lc("matTooltip",d.fc(4,8,"MENU_ITEMS.USER.ENTITY")),d.kc("ngStyle",d.oc(16,P)),d.Ab(4),d.kc("routerLink",d.oc(17,w)),d.Ab(1),d.Lc(" ",d.fc(9,10,e.user)," "),d.Ab(3),d.Lc(" \xa0#",e.user.id," "),d.Ab(2),d.Nc(" ",d.fc(14,12,"MENU_ITEMS.USER.ENTITY"),", ",d.fc(15,14,"MENU_ITEMS.USER.USER_TYPE"),": ",e.getUserType()," ")}}const C=[{path:"",component:(()=>{class e{constructor(e,t,s){this.sideMenuService=e,this.store=t,this.router=s}ngOnInit(){this.path=this.router.url,this.router.events.subscribe(e=>{this.path=this.router.url}),this.principal=this.store.getPerunPrincipal(),this.user=this.principal.user,this.sideMenuService.setUserItems([])}getUserType(){return this.user.serviceUser?"Service":"Person"}}return e.\u0275fac=function(t){return new(t||e)(d.Mb(T.a),d.Mb(A.k),d.Mb(r.f))},e.\u0275cmp=d.Gb({type:e,selectors:[["app-user-profile"]],decls:1,vars:1,consts:[["class","container-fluid pl-xl-5 pr-xl-5 user-theme",4,"ngIf"],[1,"container-fluid","pl-xl-5","pr-xl-5","user-theme"],[1,"d-flex","page-title-headtitle"],["svgIcon","perun-user-dark",1,"perun-icon","perun-icon-detail",3,"matTooltip","ngStyle"],[1,"page-title-block"],[1,"page-title-headline","d-flex","align-items-center"],[1,"user-link",3,"routerLink"],[1,"text-muted"],[1,"mt-1","entity-info"]],template:function(e,t){1&e&&d.Hc(0,k,17,18,"div",0),2&e&&d.kc("ngIf",void 0!==t.user)},directives:[i.t,v.a,M.a,y.a,i.w,r.i,N.a],pipes:[S.d,U.a],styles:[""]}),e})(),children:[{path:"",component:R.a,data:{animation:"UserOverviewPage"}},{path:"attributes",component:l.a,data:{animation:"UserAttributesPage"}},{path:"organizations",component:n.a,data:{animation:"UserOrganizationsPage",showPrincipal:!0}},{path:"groups",component:a.a,data:{animation:"UserGroupsPage",showPrincipal:!0}},{path:"settings",component:c.a,children:[{path:"",component:o.a,data:{animation:"UserSettingsOverviewPage"}},{path:"facilityAttributes",component:b.a,data:{animation:"UserSettingsFacilityAttributesPage",showPrincipal:!0}},{path:"passwordReset",component:u.b,data:{animation:"PasswordResetPage"}},{path:"guiConfig",component:E,data:{animation:"UserAppConfigurationPage"}}]}]}];let _=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)},imports:[[r.j.forChild(C)],r.j]}),e})();var z=s("ulve"),O=s("Cd2c"),D=s("nIj0"),L=s("lQ7A"),F=s("3Uyd"),H=s("PBFl"),G=s("cePI"),Z=s("FlRo"),V=s("KZIX"),B=s("QcI7"),J=s("+Tre"),x=s("OZ4H"),Y=s("W1gw"),j=s("csyo"),Q=s("66mq"),W=s("k8N0"),K=s("gcUQ"),X=s("F1o0"),q=s("zmEM"),$=s("iAde"),ee=s("Meci"),te=s("x9Az"),se=s("oqI+"),ie=s("S17y"),re=s("Jb3d"),ne=s("mWkV"),ae=s("qvOF"),ce=s("KoHB"),oe=s("f3iV"),le=s("t47Z"),be=s("PCNd");let ue=(()=>{class e{constructor(e){this.translate=e,e.addLangs(["en","cs"])}}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)(d.Wb(S.e))},imports:[[i.c,_,z.b,O.c,f.e,D.A,D.k,M.b,L.g,F.b,S.c.forChild({}),H.c,G.c,Z.p,V.g,B.e,H.c,J.b,x.h,m.b,Y.b,j.b,Q.b,y.b,W.b,K.g,g.j,X.c,q.b,g.p,$.b,ee.j,te.g,se.g,ee.j,ie.g,re.c,ne.b,ae.g,ce.a,oe.b,u.c,h.a,le.b,be.a]]}),e})()}}]);