Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n                            <li ><a "),d={},e={},b.buffer.push(k(c.action.call(a,"filterHappeningsByCity","cityNavItems","item",{hash:{},contexts:[a,a,a],types:["STRING","ID","ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("> "),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"item.title",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(" </a></li>\n                          "),f}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push('<div>\n  <div class="navbar navbar-fixed-top">\n    <div class="navbar-inner">\n      <div class="container-fluid">\n        <div class="brand">\n          Happenings Project Example Client\n        </div>\n\n        <ul class="nav pull-right">\n                      <li class="divider-vertical"></li>\n                      <li class="dropdown">\n                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">'),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"navStructure.city",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(' <b class="caret"></b></a>\n                          <ul class="dropdown-menu">\n                          '),h={},i={},g=c.each.call(b,"item","in","cityNavItems",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push('\n                          </ul>\n           \n                      </li>\n                    </ul>\n\n\n      </div>\n    </div>\n  </div>\n  <div class="container-fluid" id="main">\n    '),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("\n  </div>\n</div>\n"),j}),Ember.TEMPLATES.details=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n<img  "),d={src:a},e={src:"STRING"},b.buffer.push(n(c.bindAttr.call(a,{hash:{src:"details.main_image_url"},contexts:[],types:[],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(" >\n"),f}function g(a,b){var d,e,f,g="";return b.buffer.push('\n<div class="well">\n	<h5>Happening at:</h5>\n	<br>\n	'),e={},f={},b.buffer.push(n(c._triageMustache.call(a,"details.venue_name",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push("\n	"),e={},f={},d=c["if"].call(a,"details.venue_url",{hash:{},inverse:o.noop,fn:o.program(4,h,b),contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n	<br>\n	"),e={},f={},b.buffer.push(n(c._triageMustache.call(a,"details.venue_address",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push("\n\n	"),e={},f={},d=c["if"].call(a,"details.venue_image_url",{hash:{},inverse:o.noop,fn:o.program(6,i,b),contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n	</div>\n"),g}function h(a,b){var d,e,f="";return b.buffer.push('\n		<a target="_blank" '),d={href:a},e={href:"STRING"},b.buffer.push(n(c.bindAttr.call(a,{hash:{href:"details.venue_url"},contexts:[],types:[],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(" >site</a>\n	"),f}function i(a,b){var d,e,f="";return b.buffer.push("\n		<img  "),d={src:a},e={src:"STRING"},b.buffer.push(n(c.bindAttr.call(a,{hash:{src:"details.venue_image_url"},contexts:[],types:[],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(" >\n	"),f}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var j,k,l,m="",n=this.escapeExpression,o=this;return e.buffer.push('<div class="well" style="">\n<h4 style="display:inline-block;" >'),k={},l={},e.buffer.push(n(c._triageMustache.call(b,"details.name",{hash:{},contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}))),e.buffer.push(' </h4>\n<a target="_blank" '),l={href:b},k={href:"STRING"},e.buffer.push(n(c.bindAttr.call(b,{hash:{href:"details.source_url"},contexts:[],types:[],hashContexts:l,hashTypes:k,data:e}))),e.buffer.push(' >site</a>\n <div style="display:inline-block;" > ( '),k={},l={},e.buffer.push(n(c._triageMustache.call(b,"details.start_date",{hash:{},contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}))),e.buffer.push(") </div>\n<br>\n"),k={},l={},j=c["if"].call(b,"details.main_image_url",{hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n"),l={unescaped:b},k={unescaped:"STRING"},j=c._triageMustache.call(b,"details.description_html",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n"),k={},l={},j=c["if"].call(b,"details.hasVenue",{hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n\n</div>\n"),m}),Ember.TEMPLATES.happening=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n              <li "),d={"class":a},e={"class":"STRING"},b.buffer.push(l(c.bindAttr.call(a,{hash:{"class":"item.cssClass"},contexts:[],types:[],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(">\n                <a "),e={},d={},b.buffer.push(l(c.action.call(a,"filterHappeningsByCategory","categoryNavItems","item",{hash:{},contexts:[a,a,a],types:["STRING","ID","ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push("> "),e={},d={},b.buffer.push(l(c._triageMustache.call(a,"item.title",{hash:{},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(" \n                </a>\n              </li>\n            "),f}function g(a,b){var d,e,f="";return b.buffer.push("\n              <li "),d={"class":a},e={"class":"STRING"},b.buffer.push(l(c.bindAttr.call(a,{hash:{"class":"item.cssClass"},contexts:[],types:[],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(">\n                <a "),d={on:a},e={on:"STRING"},b.buffer.push(l(c.action.call(a,"filterHappeningsByRange","rangeNavItems","item",{hash:{on:"mouseEnter"},contexts:[a,a,a],types:["STRING","ID","ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push("> \n                  "),e={},d={},b.buffer.push(l(c._triageMustache.call(a,"item.title",{hash:{},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(" \n                </a>\n              </li>\n            "),f}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this;return e.buffer.push('    <div class="row-fluid">\n      <div>\n        <div class="span2" >\n        <div class="span2" style="position:fixed">\n           <div class="well sidebar-nav">\n            <span class="nav-header"></span>\n            <ul class="nav nav-list">\n            '),i={},j={},h=c.each.call(b,"item","in","controllers.application.categoryNavItems",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n            </ul>\n          </div>\n\n          <div class="well sidebar-nav">\n            <span class="nav-header"></span>\n            <ul class="nav nav-list">\n            '),i={},j={},h=c.each.call(b,"item","in","controllers.application.rangeNavItems",{hash:{},inverse:m.noop,fn:m.program(3,g,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n            </ul>\n          </div>\n\n        </div>\n        </div>\n\n        <div class="span10">\n					'),i={},j={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push("\n        </div>\n      </div>\n    </div>\n\n\n"),k}),Ember.TEMPLATES["happening/cinema"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n			<li "),d={"class":a},e={"class":"STRING"},b.buffer.push(l(c.bindAttr.call(a,{hash:{"class":"item.cssClass"},contexts:[],types:[],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(" >\n				<a "),d={on:a},e={on:"STRING"},b.buffer.push(l(c.action.call(a,"showMovieScreenings","content","item.screenings",{hash:{on:"mouseEnter"},contexts:[a,a,a],types:["STRING","ID","ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(">\n					"),e={},d={},b.buffer.push(l(c._triageMustache.call(a,"item.isActive",{hash:{},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push("\n	   "),e={},d={},b.buffer.push(l(c._triageMustache.call(a,"item.name",{hash:{},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push("\n				</a>\n			</li>\n			"),f}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push("<h1>\n	"),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"headerTitle",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('\n</h1>\n<div class="row">\n	<div class="span3" style="max-height:350px;overflow-y:scroll;">\n\n		<ul class="nav nav-list">\n			'),h={},i={},g=c.each.call(b,"item","in","content",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push('\n		</ul>\n	</div>\n\n	<div class="span9">'),h={},i={},j={hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.outlet,g?g.call(b,"screenings",j):n.call(b,"outlet","screenings",j)))),e.buffer.push("</div>\n</div>"),k}),Ember.TEMPLATES["happening/other"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("\n<h1>No results found.</h1>\n")}function g(a,b){var d,e,f,g,i="";return b.buffer.push("\n<h1>\n	"),e={},f={},b.buffer.push(l(c._triageMustache.call(a,"headerTitle",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push('\n</h1>\n<div class="row">\n	<div class="span3" style="max-height:450px;overflow-y:scroll;">\n\n		<ul class="nav nav-list">\n			'),e={},f={},d=c.each.call(a,"item","in","content",{hash:{},inverse:m.noop,fn:m.program(4,h,b),contexts:[a,a,a],types:["ID","ID","ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push('\n		</ul>\n	</div>\n\n	<div class="span9">'),e={},f={},g={hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b},b.buffer.push(l((d=c.outlet,d?d.call(a,"details",g):n.call(a,"outlet","details",g)))),b.buffer.push("</div>\n</div>\n"),i}function h(a,b){var d,e,f="";return b.buffer.push("\n			<li "),d={"class":a},e={"class":"STRING"},b.buffer.push(l(c.bindAttr.call(a,{hash:{"class":"item.cssClass"},contexts:[],types:[],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(" >\n				<a "),d={on:a},e={on:"STRING"},b.buffer.push(l(c.action.call(a,"showOtherDetails","content","item",{hash:{on:"mouseEnter"},contexts:[a,a,a],types:["STRING","ID","ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(">\n					"),e={},d={},b.buffer.push(l(c._triageMustache.call(a,"item.isActive",{hash:{},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push("\n	   "),e={},d={},b.buffer.push(l(c._triageMustache.call(a,"item.name",{hash:{},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push("\n				</a>\n			</li>\n			"),f}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var i,j,k,l=this.escapeExpression,m=this,n=c.helperMissing;j={},k={},i=c["if"].call(b,"noResults",{hash:{},inverse:m.program(3,g,e),fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),i||0===i?e.buffer.push(i):e.buffer.push("")}),Ember.TEMPLATES["happening/when"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n  <li>"),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"item.name",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("  ( "),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"item.start_date",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(")  "),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"item.city",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(" </li>\n"),f}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push("<h1>"),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"headerTitle",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('</h1>\n<ul class="nav nav-list">\n'),h={},i={},g=c.each.call(b,"item","in","content",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n</ul>\n\n"),j}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push('<div class="well">\n  Welcome to Yeoman and Ember.js!\n</div>\n')}),Ember.TEMPLATES.screenings=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g="";return b.buffer.push("\n	  <li > <h4>	"),e={},f={},b.buffer.push(k(c._triageMustache.call(a,"item.movie_happening.venue_name",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push("  \n	  			 </h4>\n	  			"),e={},f={},b.buffer.push(k(c._triageMustache.call(a,"item.movie_happening.venue_address",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push("\n\n	  			 <div> at these times "),f={unescaped:a},e={unescaped:"STRING"},d=c._triageMustache.call(a,"item.movie_happening.show_times",{hash:{unescaped:"true"},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("</div>\n	  </li>\n	    	<br>\n	  <li></li>\n	"),g}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push('<div class="well" style="">\n'),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"screenings.movie_name",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(' is showing at:\n<ul class="nav nav-list">\n	'),h={},i={},g=c.each.call(b,"item","in","screenings",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n</ul>\n</div>\n"),j}),Ember.TEMPLATES.screenings_nav=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n  <li>"),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"item.title",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("  ( "),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"item.start_date",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(")  "),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"item.city",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(" </li>\n"),f}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push("\n"),h={},i={},g=c.each.call(b,"item","in","controllers.happening.content",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push('\n\n  <li class="active" ><a '),h={},i={},e.buffer.push(k(c.action.call(b,"showMovieScreenings","item.screenings",{hash:{},contexts:[b,b],types:["STRING","ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(">bbbbb </a></li>"),j});