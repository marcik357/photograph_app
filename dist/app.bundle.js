!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=332)}({332:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(n);var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,a;return n=e,(t=[{key:"post",value:function(e,n){return new Promise(function(t,r){fetch(e,{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return t(e)}).catch(function(e){return r(e)})})}},{key:"get",value:function(e){var n=new u;return new Promise(function(t,r){fetch(e,{method:"GET",headers:{"x-access-token":n.token}}).then(function(e){return e.json()}).then(function(e){return t(e)}).catch(function(e){return r(e)})})}}])&&r(n.prototype,t),a&&r(n,a),e}(),o="https://mlp-demo.herokuapp.com/api";function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"login",value:function(e,n){var t=new a;return new Promise(function(r,a){t.post("".concat(o,"/public/auth/login"),{email:e,password:n}).then(function(e){if(!e.auth)return a(e);localStorage.setItem("sn_user_id",e.id),localStorage.setItem("sn_user_token",e.token),r(e)}).catch(function(e){return a(e)})})}},{key:"logout",value:function(){var e=this;return new Promise(function(n,t){localStorage.removeItem("sn_user_id"),localStorage.removeItem("sn_user_token"),localStorage.removeItem("sn_user_type",e._user.type),n()})}},{key:"signUp",value:function(e){var n=new a;return new Promise(function(t,r){n.post("".concat(o,"/public/auth/signup"),e).then(function(e){if(!e.auth)return r(e);t(e)}).catch(function(e){return r(e)})})}},{key:"token",get:function(){return localStorage.getItem("sn_user_token")}},{key:"userId",get:function(){return localStorage.getItem("sn_user_id")}},{key:"userIsAdmin",get:function(){return"admin"===localStorage.getItem("sn_user_type")}}])&&i(n.prototype,t),r&&i(n,r),e}();function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"navigate",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;location.addData=n,location.hash=e}}])&&c(n.prototype,t),r&&c(n,r),e}();function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._authService=new u,this._routing=new s}var n,t,r;return n=e,(t=[{key:"canActive",value:function(){return!!this._authService.token||(this._routing.navigate("/login"),!1)}}])&&l(n.prototype,t),r&&l(n,r),e}();function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._authService=new u,this._routing=new s}var n,t,r;return n=e,(t=[{key:"canActive",value:function(){return!!this._authService.userIsAdmin||(this._routing.navigate("/"),!1)}}])&&d(n.prototype,t),r&&d(n,r),e}();function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"render",value:function(){return"<div>\n              <h1>Home page</h1>\n              <div>\n                <a href='/#/login' class=\"btn btn-primary\">Login</a>\n                <a href='/#/signup' class=\"btn btn-success\">Sign up</a>\n              </div>\n            </div>"}}])&&m(n.prototype,t),r&&m(n,r),e}();function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"render",value:function(){return"<div>\n              <h1>404</h1>\n              <p>Page not found</p>\n            </div>"}}])&&p(n.prototype,t),r&&p(n,r),e}();function w(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._modalContainer=document.querySelector("modals")}var n,t,r;return n=e,(t=[{key:"render",value:function(e){var n=this._getTemplate(e);this._modalContainer.innerHTML=n;var t=document.querySelector(".modal");this._showModal(t),this._hideModal(t)}},{key:"_showModal",value:function(e){setTimeout(function(){e.classList.add("show")},100)}},{key:"_hideModal",value:function(e){var n=this;setTimeout(function(){e.classList.remove("show"),n._modalContainer.innerHTML=""},3e3)}},{key:"_getTemplate",value:function(e){return'\x3c!-- Modal --\x3e\n                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style=\'display: block; background: rgba(33, 37, 41, .7);\'>\n                    <div class="modal-dialog modal-dialog-centered" role="document">\n                        <div class="modal-content">\n                            <div class="modal-body">\n                                '.concat(e,"\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                ")}}])&&w(n.prototype,t),r&&w(n,r),e}(),g=/^\S+@[a-z]+\.[a-z]+$/,_=/[A-Z][a-z]+/,k=/\+\d{3}\d{3}\d{2}\d{2}/,x=/[A-Z][a-z]+/,S=/0[1-9]|1[0-9]|2[0-9]|3[01]/,P=/0[1-9]|1[0-2]/,R=/19[2-9][0-9]|20[0-1][0-9]/;function q(e,n,t,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,a)}function j(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._authService=new u,this._modal=new b,this._routing=new s}var n,t,r;return n=e,(t=[{key:"beforeRender",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._authService.token&&this._routing.navigate("/users/".concat(this._authService.userId));case 2:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,a){var o=e.apply(n,t);function i(e){q(o,r,a,i,u,"next",e)}function u(e){q(o,r,a,i,u,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return'\n        <div class="auth-wrap d-flex mt-5">\n            <div class="auth-form col col-6 mx-auto my-auto">\n                <h3>Login to Social.</h3>\n                <p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>\n                <form name="loginForm" novalidate>\n                    <div class="form-group">\n                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^S+@[a-z]+.[a-z]+$">\n                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="S+">\n                        <div class="d-flex mt-5">\n                            <button type="submit" class="btn btn-primary btn-sm mb-3">Login</button>\n                        </div>\n                        <a href=\'#/signup\' class="btn btn-primary">Sign up</a>\n                        \n                        <a href=\'#/\' class="btn btn-success">Go to home page</a>\n                    </div>\n                </form>\n            </div>\n            \x3c!-- /.auth-form --\x3e\n            <div class="auth-bg col col-6">\n\n            </div>\n            \x3c!-- /.auth-bg --\x3e\n        </div>\n        \x3c!-- /.auth-wrap --\x3e\n        '}},{key:"afterRender",value:function(){var e=this;document.forms.loginForm.addEventListener("submit",function(n){n.preventDefault();var t=n.target.elements,r=t.email,a=t.password;return g.test(r.value)?r.value&&a.value?void e._authService.login(r.value,a.value).then(function(n){e._routing.navigate("/users/".concat(n.id),{myData:"My data"})}).catch(function(n){return e._modal.render(n.message)}):alert("Заполните все поля"):alert("Укажите верный email")})}}])&&j(n.prototype,t),r&&j(n,r),e}();function C(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._authService=new u,this._modal=new b}var n,t,r;return n=e,(t=[{key:"render",value:function(){return'\n        <div class="auth-wrap d-flex mt-5">\n            <div class="auth-form col col-6 mx-auto my-auto">\n                <h3>Login to Social.</h3>\n                <p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>\n                <form name="signUpForm" novalidate>\n                    <div class="form-group">\n                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^S+@[a-z]+.[a-z]+$">\n                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="w+">\n                        <input type="nickname" class="form-control form-control-sm mt-3" id="nickname" placeholder="nickname" required data-pattern="S+">\n                        <input type="first_name" class="form-control form-control-sm mt-3" id="first_name" placeholder="first name" required data-pattern="[A-Z][a-z]+">\n                        <input type="last_name" class="form-control form-control-sm mt-3" id="last_name" placeholder="last name" required data-pattern="[A-Z][a-z]+">\n                        <input type="phone" class="form-control form-control-sm mt-3" id="phone" placeholder="+380988507793" required data-pattern="+d{3}d{3}d{2}d{2}">\n                        <select name="gender_orientation" id="gender_orientation" class="form-control form-control-sm mt-3">\n                            <option disabled selected>Choose your gender</option>\n                            <option value="male">Male</option>\n                            <option value="female">Female</option>\n                        </select>\n                        <input type="city" class="form-control form-control-sm mt-3" id="city" placeholder="City" required data-pattern="[A-Z][a-z]+">\n                        <input type="country" class="form-control form-control-sm mt-3" id="country" placeholder="Country" required data-pattern="[A-Z][a-z]+">                        \n                        <input type="date_of_birth_day" class="form-control form-control-sm mt-3" id="date_of_birth_day" placeholder="Enter day of your birthday (exm. 02)" required data-pattern="0[1-9]|1[0-9]|2[0-9]|3[01]">                        \n                        <input type="date_of_birth_month" class="form-control form-control-sm mt-3" id="date_of_birth_month" placeholder="Enter month of your birthday (exm. 05)" required data-pattern="0[1-9]|1[0-2]">                        \n                        <input type="date_of_birth_year" class="form-control form-control-sm mt-3" id="date_of_birth_year" placeholder="Enter year of your birthday (exm. 1990)" required data-pattern="19[2-9][0-9]|20[0-1][0-9]">                        \n                        <div class="d-flex mt-5">\n                            <button type="submit" class="btn btn-primary btn-sm">Sign up</button>\n                        </div>\n                        <a href=\'#/login\'>Login</a>\n                        <div></div>\n                        <a href=\'#/\'>Go to home page</a>\n                    </div>\n                </form>\n            </div>\n            \x3c!-- /.auth-form --\x3e\n            <div class="auth-bg col col-6">\n\n            </div>\n            \x3c!-- /.auth-bg --\x3e\n        </div>\n        \x3c!-- /.auth-wrap --\x3e\n        '}},{key:"afterRender",value:function(){var e=this;document.forms.signUpForm.addEventListener("submit",function(n){n.preventDefault();var t=n.target.elements,r=t.email,a=t.password,o=t.nickname,i=t.first_name,u=t.last_name,c=t.phone,s=t.gender_orientation,l=t.city,f=t.country,d=t.date_of_birth_day,v=t.date_of_birth_month,m=t.date_of_birth_year;if(!g.test(r.value))return console.warn("Укажите верный email");if(!_.test(i.value))return console.warn("Укажите верное имя");if(!_.test(u.value))return console.warn("Укажите верную фамилию");if(!k.test(c.value))return console.warn("Укажите номер телефона в формате +380988507793");if(!x.test(l.value))return console.warn("Укажите верный город");if(!x.test(f.value))return console.warn("Укажите верную страну");if(!S.test(d.value))return console.warn("Укажите день рождения в формате 01");if(!P.test(v.value))return console.warn("Укажите месяц рождения в формате 05");if(!R.test(m.value))return console.warn("Укажите год рождения в формате 1990");if(!(r.value&&a.value&&o.value&&i.value&&u.value&&c.value&&s.value&&l.value&&f.value&&d.value&&v.value&&m.value))return alert("Заполните все поля");var h={email:document.querySelector("#email").value,password:document.querySelector("#password").value,nickname:document.querySelector("#nickname").value,first_name:document.querySelector("#first_name").value,last_name:document.querySelector("#last_name").value,phone:document.querySelector("#phone").value,gender_orientation:document.querySelector("#gender_orientation").value,city:document.querySelector("#city").value,country:document.querySelector("#country").value,date_of_birth_day:document.querySelector("#date_of_birth_day").value,date_of_birth_month:document.querySelector("#date_of_birth_month").value,date_of_birth_year:document.querySelector("#date_of_birth_year").value};e._authService.signUp(h).then(function(e){return console.log(e)}).catch(function(n){return e._modal.render(n.message)})})}}])&&C(n.prototype,t),r&&C(n,r),e}();function I(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"parseRequestUrl",value:function(){var e=location.hash.slice(1).toLowerCase()||"/",n=e.split("/");return{resource:n[1],id:n[2],url:e}}}])&&I(n.prototype,t),r&&I(n,r),e}();function L(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"getUser",value:function(e){var n=new a;return new Promise(function(t,r){n.get("".concat(o,"/public/users/get-info/").concat(e)).then(function(e){return t(e)}).catch(function(e){return r(e)})})}}])&&L(n.prototype,t),r&&L(n,r),e}();function U(e,n,t,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,a)}function A(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._activeRoute=new O,this._authService=new u,this._userService=new M,this._authUserId=this._authService.userId,this._user=null}var n,t,r;return n=e,(t=[{key:"beforeRender",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._activeUserId=this._activeRoute.parseRequestUrl().id,e.next=3,this._userService.getUser(this._activeUserId);case 3:this._user=e.sent,localStorage.setItem("sn_user_type",this._user.type);case 5:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,a){var o=e.apply(n,t);function i(e){U(o,r,a,i,u,"next",e)}function u(e){U(o,r,a,i,u,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            \x3c!-- Component styles --\x3e\n            <style>\n                ".concat(this.style,'\n            </style>\n            \x3c!-- Component html --\x3e\n            <div class="user-cover-container"\n                style="background: url(').concat(this._user.cover,') no-repeat center / cover;"\n            >\n            </div>\n            <div class="user-avatar-container d-flex justify-content-center">\n                <div class="user-avatar">\n                    <img src="').concat(this._user.avatar,'">\n                </div>\n            </div>\n        ')}},{key:"style",get:function(){return"\n            img {\n                max-width: 100%;\n            }\n            .user-cover-container {\n                height: 400px;\n                width: 100%;\n            }\n            .user-avatar-container {\n                transform: translateY(-50%);\n            }\n            .user-avatar {\n                width: 138px;\n                height: 138px;\n                border-radius: 50%;\n                overflow: hidden;\n            }\n        "}}])&&A(n.prototype,t),r&&A(n,r),e}();function H(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Z=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"getNews",value:function(){var e=new a;return new Promise(function(n,t){e.get("".concat(o,"/public/news")).then(function(e){return n(e)}).catch(function(e){return t(e)})})}}])&&H(n.prototype,t),r&&H(n,r),e}();function F(e,n,t,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,a)}function D(e){return function(){var n=this,t=arguments;return new Promise(function(r,a){var o=e.apply(n,t);function i(e){F(o,r,a,i,u,"next",e)}function u(e){F(o,r,a,i,u,"throw",e)}i(void 0)})}}function N(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=document.querySelector("app-container"),W=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._activeRoute=new O,this._authService=new u,this._newsService=new Z,this._authUserId=this._authService.userId,this._news=null}var n,t,r;return n=e,(t=[{key:"beforeRender",value:function(){var e=D(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._activeUserId=this._activeRoute.parseRequestUrl().id,e.next=3,this._newsService.getNews(this._activeUserId);case 3:this._news=e.sent;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=D(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,'<div class="container justify-content-center mt-5"><div class="row"></div></div>';case 2:G.innerHTML=e.sent,n=0;case 4:if(!(n<this._news.news.length)){e.next=10;break}return e.next=7,document.querySelector(".row").insertAdjacentHTML("afterbegin",'\n            <div class="col-4 mb-5">\n                <div class="d-flex flex-column justify-content-between card text-center shadow px-3 py-3 h-100">\n                    <img src="'.concat(this._news.news[n].owner.avatar,'" class="mx-auto user-avatar w-25">\n                    <div class="mb-3">').concat(this._news.news[n].owner.full_name,'</div>\n                    <img src="').concat(this._news.news[n].pictures[0].url,'" class="w-100">\n                </div>\n            </div>\n            '));case 7:n++,e.next=4;break;case 10:case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}])&&N(n.prototype,t),r&&N(n,r),e}();function $(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"getWinners",value:function(){var e=new a;return new Promise(function(n,t){e.get("".concat(o,"/public/winners?part=1&limit=25")).then(function(e){return n(e)}).catch(function(e){return t(e)})})}}])&&$(n.prototype,t),r&&$(n,r),e}();function Y(e,n,t,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,a)}function B(e){return function(){var n=this,t=arguments;return new Promise(function(r,a){var o=e.apply(n,t);function i(e){Y(o,r,a,i,u,"next",e)}function u(e){Y(o,r,a,i,u,"throw",e)}i(void 0)})}}function K(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=document.querySelector("app-container"),V=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._activeRoute=new O,this._authService=new u,this._winnersService=new J,this._authUserId=this._authService.userId,this._winners=null}var n,t,r;return n=e,(t=[{key:"beforeRender",value:function(){var e=B(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._activeUserId=this._activeRoute.parseRequestUrl().id,e.next=3,this._winnersService.getWinners();case 3:this._winners=e.sent;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=B(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,'<div class="container justify-content-center mt-5"><div class="row"></div></div>';case 2:Q.innerHTML=e.sent,n=0;case 4:if(!(n<this._winners.winners.length)){e.next=10;break}return e.next=7,document.querySelector(".row").insertAdjacentHTML("afterbegin",'\n            <div class="col-md-3 col-sm-4 mb-5">\n                <div class="d-flex flex-column justify-content-between card text-center shadow px-3 py-3 h-100">\n                    <img src="'.concat(this._winners.winners[n].member_id.user_id.avatar,'" class="mx-auto user-avatar w-100">\n                    <div>').concat(this._winners.winners[n].member_id.user_id.full_name,"</div>\n                </div>\n            </div>\n            "));case 7:n++,e.next=4;break;case 10:case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}])&&K(n.prototype,t),r&&K(n,r),e}();function X(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ee=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"render",value:function(){return"<h1>Admin Profile page</h1>\n        "}}])&&X(n.prototype,t),r&&X(n,r),e}(),ne=new f,te=new v,re={"/":{component:new h},"/login":{component:new T},"/users/:id":{component:new z,guards:[ne]},404:{component:new y},"/signup":{component:new E},"/news":{component:new W,guards:[ne]},"/winners":{component:new V},"/admin-panel":{component:new ee,guards:[ne,te]}};function ae(e,n,t,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,a)}function oe(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ie=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._authService=new u,this._routing=new s,this._userId=null}var n,t,r;return n=e,(t=[{key:"beforeRender",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._userId=this._authService.userId;case 1:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,a){var o=e.apply(n,t);function i(e){ae(o,r,a,i,u,"next",e)}function u(e){ae(o,r,a,i,u,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){if(!this._authService.token)return"";var e=this._authService.userIsAdmin;return'\n            <nav class="navbar navbar-light bg-light">\n                <a class="navbar-brand">App</a>\n                <ul class="navbar-nav d-flex flex-row">\n                    <li class="nav-item">\n                        <a class="nav-link" href="/#/">Home</a>\n                    </li>    \n                    <li class="nav-item ml-3" >\n                        <a class="nav-link" href="/#/users/'.concat(this._userId,'">My profile</a>\n                    </li>\n                    <li class="nav-item ml-3">\n                        <a class="nav-link" href="/#/news">News</a>\n                    </li>\n                    <li class="nav-item ml-3">\n                        <a class="nav-link" href="/#/winners">Winners</a>\n                    </li>\n                    ').concat(e?'<li class="nav-item ml-3">\n                            <a class="nav-link" href="/#/admin-panel">Admine Panel</a>\n                        </li>':"",'\n                    \n                </ul>\n                <button class="btn btn-primary logout-btn">Logout</button>\n            </nav>\n        ')}},{key:"afterRender",value:function(){var e=this;if(!this._authService.token)return"";document.querySelector(".logout-btn").addEventListener("click",function(n){e._authService.logout().then(function(){return e._routing.navigate("/login")})})}}])&&oe(n.prototype,t),r&&oe(n,r),e}();function ue(e,n,t,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,a)}var ce=new O,se=function(){var e,n=(e=regeneratorRuntime.mark(function e(){var n,t,r,a,o,i,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.querySelector("app-header"),t=document.querySelector("app-container"),r=ce.parseRequestUrl(),a=(r.resource?"/".concat(r.resource):"/")+(r.id?"/:id":""),o=re[a]?re[a].component:re[404].component,!(i=re[a]?re[a].guards:null)){e.next=11;break}if(i.every(function(e){return e.canActive()})){e.next=10;break}return e.abrupt("return");case 10:case 11:if(!n){e.next=18;break}return u=new ie,e.next=16,u.beforeRender();case 16:n.innerHTML=u.render(),u.afterRender();case 18:if(!o.beforeRender){e.next=22;break}return e.next=22,o.beforeRender();case 22:t.innerHTML=o.render(),o.afterRender&&o.afterRender();case 25:case"end":return e.stop()}},e)}),function(){var n=this,t=arguments;return new Promise(function(r,a){var o=e.apply(n,t);function i(e){ue(o,r,a,i,u,"next",e)}function u(e){ue(o,r,a,i,u,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}();window.addEventListener("load",se),window.addEventListener("hashchange",se)}});