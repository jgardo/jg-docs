!function(){function o(o,t,a){return t in o?Object.defineProperty(o,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[t]=a,o}function t(o,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Q2Bp:function(a,n,e){"use strict";e.r(n),e.d(n,"ion_backdrop",(function(){return s}));var r=e("A36C"),i=e("Zgba"),c=e("y08P"),s=function(){function a(o){!function(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),Object(r.o)(this,o),this.ionBackdropTap=Object(r.g)(this,"ionBackdropTap",7),this.blocker=c.a.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}var n,e,s;return n=a,(e=[{key:"connectedCallback",value:function(){this.stopPropagation&&this.blocker.block()}},{key:"disconnectedCallback",value:function(){this.blocker.unblock()}},{key:"onMouseDown",value:function(o){this.emitTap(o)}},{key:"emitTap",value:function(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}},{key:"render",value:function(){var t,a=Object(i.b)(this);return Object(r.j)(r.c,{tabindex:"-1",class:(t={},o(t,a,!0),o(t,"backdrop-hide",!this.visible),o(t,"backdrop-no-tappable",!this.tappable),t)})}}])&&t(n.prototype,e),s&&t(n,s),a}();s.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}])}();