/*
 AngularJS v1.5.6-build.4825+sha.a4e4fee
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(D,c){'use strict';function w(s,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,e,b,f,y){function k(){n&&(g.cancel(n),n=null);l&&(l.$destroy(),l=null);m&&(n=g.leave(m),n.then(function(){n=null}),m=null)}function z(){var b=s.current&&s.current.locals;if(c.isDefined(b&&b.$template)){var b=a.$new(),f=s.current;m=y(b,function(b){g.enter(b,null,m||e).then(function(){!c.isDefined(u)||u&&!a.$eval(u)||h()});k()});l=f.scope=b;l.$emit("$viewContentLoaded");
l.$eval(r)}else k()}var l,m,n,u=b.autoscroll,r=b.onload||"";a.$on("$routeChangeSuccess",z);z()}}}function v(c,h,g){return{restrict:"ECA",priority:-400,link:function(a,e){var b=g.current,f=b.locals;e.html(f.$template);var y=c(e.contents());if(b.controller){f.$scope=a;var k=h(b.controller,f);b.controllerAs&&(a[b.controllerAs]=k);e.data("$ngControllerController",k);e.children().data("$ngControllerController",k)}a[b.resolveAs||"$resolve"]=f;y(a)}}}var r=c.module("ngRoute",["ng"]).provider("$route",function(){function s(a,
e){return c.extend(Object.create(a),e)}function h(a,c){var b=c.caseInsensitiveMatch,f={originalPath:a,regexp:a},g=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g,function(a,c,b,e){a="?"===e||"*?"===e?"?":null;e="*"===e||"*?"===e?"*":null;g.push({name:b,optional:!!a});c=c||"";return""+(a?"":c)+"(?:"+(a?c:"")+(e&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=new RegExp("^"+a+"$",b?"i":"");return f}var g={};this.when=function(a,e){var b=
c.copy(e);c.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);c.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=c.extend(b,a&&h(a,b));if(a){var f="/"===a[a.length-1]?a.substr(0,a.length-1):a+"/";g[f]=c.extend({redirectTo:a},h(f,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest",
"$sce",function(a,e,b,f,h,k,r){function l(q){var d=t.current;(A=(p=w())&&d&&p.$$route===d.$$route&&c.equals(p.pathParams,d.pathParams)&&!p.reloadOnSearch&&!x)||!d&&!p||a.$broadcast("$routeChangeStart",p,d).defaultPrevented&&q&&q.preventDefault()}function m(){var q=t.current,d=p;if(A)q.params=d.params,c.copy(q.params,b),a.$broadcast("$routeUpdate",q);else if(d||q){x=!1;if((t.current=d)&&d.redirectTo){var B=e.url(),g;c.isString(d.redirectTo)?(e.path(v(d.redirectTo,d.params)).search(d.params).replace(),
g=e.url()):(g=d.redirectTo(d.pathParams,e.path(),e.search()),e.url(g).replace());if(c.isDefined(g)&&B!==g)return}f.when(d).then(n).then(function(e){d===t.current&&(d&&(d.locals=e,c.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,q))},function(c){d===t.current&&a.$broadcast("$routeChangeError",d,q,c)})}}function n(a){if(a){var d=c.extend({},a.resolve);c.forEach(d,function(a,b){d[b]=c.isString(a)?h.get(a):h.invoke(a,null,null,b)});a=u(a);c.isDefined(a)&&(d.$template=a);return f.all(d)}}function u(a){var d,
b;c.isDefined(d=a.template)?c.isFunction(d)&&(d=d(a.params)):c.isDefined(b=a.templateUrl)&&(c.isFunction(b)&&(b=b(a.params)),c.isDefined(b)&&(a.loadedTemplateUrl=r.valueOf(b),d=k(b)));return d}function w(){var a,d;c.forEach(g,function(b,g){var f;if(f=!d){var h=e.path();f=b.keys;var l={};if(b.regexp)if(h=b.regexp.exec(h)){for(var k=1,n=h.length;k<n;++k){var m=f[k-1],p=h[k];m&&p&&(l[m.name]=p)}f=l}else f=null;else f=null;f=a=f}f&&(d=s(b,{params:c.extend({},e.search(),a),pathParams:a}),d.$$route=b)});
return d||g[null]&&s(g[null],{params:{},pathParams:{}})}function v(a,b){var e=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)e.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),g=f[1];e.push(b[g]);e.push(f[2]||"");delete b[g]}});return e.join("")}var x=!1,p,A,t={routes:g,reload:function(){x=!0;var b={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;x=!1}};a.$evalAsync(function(){l(b);b.defaultPrevented||m()})},updateParams:function(a){if(this.current&&this.current.$$route)a=
c.extend({},this.current.params,a),e.path(v(this.current.$$route.originalPath,a)),e.search(a);else throw C("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",m);return t}]}),C=c.$$minErr("ngRoute");r.provider("$routeParams",function(){this.$get=function(){return{}}});r.directive("ngView",w);r.directive("ngView",v);w.$inject=["$route","$anchorScroll","$animate"];v.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map