!function(){function e(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=n(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var a=0,g=function(){};return{s:g,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:g}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==i.return||i.return()}finally{if(o)throw r}}}}function t(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),e}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[523],{49523:function(n,i,g){"use strict";g.r(i),g.d(i,{GaugesModule:function(){return v}});var s,o,u=g(38583),l=g(99763),h=g(37716),c={arc:"#EFF0F4",needle:"#ED2930",markings:"#8E8E8E",readings:"#49595e"},d=function(){function e(){a(this,e)}return r(e,[{key:"validateRadius",value:function(e){return isNaN(e)||e<0?100:e}},{key:"validateRange",value:function(e,t){var n={start:e,end:t};return(isNaN(e)||t<0||isNaN(t)||t<0||e>t)&&(n={start:0,end:100}),n}},{key:"validateArc",value:function(e,t){var n={start:e,end:t};return(isNaN(e)||t<0||isNaN(t)||t<0||e>=t)&&(n={start:225,end:135}),n}},{key:"validateMajorMarkings",value:function(e,n,i){var a=[];if(i&&Array.isArray(i)&&i.length)a=i.filter(function(t){return!isNaN(t)&&t>=e&&t<=n});else{var g=(n-e)/6,r=g;for(a=[e];r<n;)a.push(Math.round(r)),r+=g;a.push(n)}return a=t(new Set(a))}},{key:"validateGaugeReadings",value:function(e,n,i){var a=[];if(i&&Array.isArray(i)&&i.length)a=i.filter(function(t){return!isNaN(t)&&t>=e&&t<=n});else{var g=(n-e)/6,r=g;for(a=[e];r<n;)a.push(Math.round(r)),r+=g;a.push(n)}return a=t(new Set(a))}},{key:"validateHighlightOptions",value:function(e,t,n){var i=this,a={arcHighlight:null,valueHighlight:null};return e.arcHighlight&&Array.isArray(e.arcHighlight)&&(a.arcHighlight=e.arcHighlight.filter(function(e){return i.validateArcHighlight(e,t,n)})),e.valueHighlight&&Array.isArray(e.valueHighlight)&&(a.valueHighlight=e.valueHighlight.filter(function(e){return i.validateValueHighlight(e,t,n)})),a}},{key:"validateArcHighlight",value:function(e,t,n){var i=!1;return isNaN(e.rangeMin)||isNaN(e.rangeMax)||e.rangeMin<t||e.rangeMax>n||isNaN(e.radiusOuter)||isNaN(e.radiusInner)||e.radiusOuter<e.radiusInner?i=!0:e.color||"string"==typeof e.color||(i=!0),!i}},{key:"validateValueHighlight",value:function(e,t,n){var i=!1;return isNaN(e.valueMin)||isNaN(e.valueMax)||e.valueMin<t||e.valueMax>n||!e.radius||isNaN(e.radius)?i=!0:e.color||"string"==typeof e.color||(i=!0),!i}},{key:"validateColorCodes",value:function(e){var t=c;return Object.keys(t).forEach(function(n){t[n]=e&&e[n]?e[n]:t[n]}),t}}]),e}(),p=function(){var t=function(){function t(e,n){a(this,t),this.el=e,this.validator=n}return r(t,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(e){e.gaugeValue&&!e.gaugeValue.firstChange&&this.rotateNeedle(),e.gaugeOptions&&(this.validateInput(),this.initialise())}},{key:"validateInput",value:function(){var e=this;return new Promise(function(t){e.gaugeOptions.gaugeClassName=e.gaugeOptions.gaugeClassName?e.gaugeOptions.gaugeClassName.toString():"",e.gaugeOptions.gaugeRadius=e.validator.validateRadius(e.gaugeOptions.gaugeRadius);var n=e.validator.validateRange(e.gaugeOptions.gaugeRangeStart,e.gaugeOptions.gaugeRangeEnd);e.gaugeOptions.gaugeRangeStart=n.start,e.gaugeOptions.gaugeRangeEnd=n.end;var i=e.validator.validateArc(e.gaugeOptions.arcStartAngle,e.gaugeOptions.arcEndAngle);e.gaugeOptions.arcStartAngle=i.start,e.gaugeOptions.arcEndAngle=i.end,e.gaugeOptions.markingMajorDivisions=e.validator.validateMajorMarkings(e.gaugeOptions.gaugeRangeStart,e.gaugeOptions.gaugeRangeEnd,e.gaugeOptions.markingMajorDivisions),e.gaugeOptions.gaugeReadings=e.validator.validateMajorMarkings(e.gaugeOptions.gaugeRangeStart,e.gaugeOptions.gaugeRangeEnd,e.gaugeOptions.gaugeReadings),e.gaugeOptions.colorCodes=e.validator.validateColorCodes(e.gaugeOptions.colorCodes),e.gaugeOptions.highlightOptions=e.gaugeOptions.highlightOptions?e.validator.validateHighlightOptions(e.gaugeOptions.highlightOptions,e.gaugeOptions.gaugeRangeStart,e.gaugeOptions.gaugeRangeEnd):null,t(1)})}},{key:"initialise",value:function(){this.centerX=this.el.nativeElement.offsetWidth/2,this.centerY=this.el.nativeElement.offsetHeight/2,this.gauge=this.el.nativeElement.querySelector(".compass"),this.needle=this.el.nativeElement.querySelector(".needle"),this.gaugeConfigurations={markingOuterRadius:this.gaugeOptions.gaugeRadius-10,minorDivisionInnerRadius:this.gaugeOptions.gaugeRadius-13,majorDivisionInnerRadius:this.gaugeOptions.gaugeRadius-22,markingTextRadius:this.gaugeOptions.gaugeRadius-30,minorDivisions:5},this.needle.setAttribute("src",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#000000",t=encodeURIComponent(e);return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='16.721px' height='93.834px' viewBox='0 0 16.721 93.834' enable-background='new 0 0 16.721 93.834' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='".concat(t,"' d='M13.886,84.243L2.83,83.875c0,0,3.648-70.77,3.956-74.981C7.104,4.562,7.832,0,8.528,0 c0.695,0,1.752,4.268,2.053,8.894C10.883,13.521,13.886,84.243,13.886,84.243z'/%3E%3Cpath fill='").concat(t,"' d='M16.721,85.475c0,4.615-3.743,8.359-8.36,8.359S0,90.09,0,85.475c0-4.62,3.743-8.363,8.36-8.363 S16.721,80.855,16.721,85.475z'/%3E%3Ccircle fill='%23EEEEEE' cx='8.426' cy='85.471' r='2.691'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}(this.gaugeOptions.colorCodes.needle)),this.needleRotation(this.gaugeOptions.arcStartAngle),this.drawArc(this.gaugeOptions.arcStartAngle-10,this.gaugeOptions.arcEndAngle+10,this.gaugeOptions.colorCodes.arc,"1"),this.drawMarkings(),this.rotateNeedle()}},{key:"drawMarkings",value:function(){this.highlightRanges(),this.drawMinorDivisions(),this.drawMajorDivisions(),this.writeGaugeReadings()}},{key:"drawMinorDivisions",value:function(){for(var e=360-this.gaugeOptions.arcStartAngle+this.gaugeOptions.arcEndAngle,t=360/(this.gaugeOptions.markingMajorDivisions.length*this.gaugeConfigurations.minorDivisions),n=t,i=this.gaugeOptions.arcStartAngle+t;n<e;){var a=(i-90)*Math.PI/180,g={outerX:this.centerX+this.gaugeConfigurations.markingOuterRadius*Math.cos(a),outerY:this.centerY+this.gaugeConfigurations.markingOuterRadius*Math.sin(a),innerX:this.centerX+this.gaugeConfigurations.minorDivisionInnerRadius*Math.cos(a),innerY:this.centerY+this.gaugeConfigurations.minorDivisionInnerRadius*Math.sin(a)};this.drawLine(g,"1px",this.gaugeOptions.colorCodes.markings),i+=t,n+=t}}},{key:"drawMajorDivisions",value:function(){var t,n=360-this.gaugeOptions.arcStartAngle+this.gaugeOptions.arcEndAngle,i=this.gaugeOptions.gaugeRangeEnd-this.gaugeOptions.gaugeRangeStart,a=e(this.gaugeOptions.markingMajorDivisions);try{for(a.s();!(t=a.n()).done;){var g=t.value,r=(this.gaugeOptions.arcStartAngle+n/i*(g-this.gaugeOptions.gaugeRangeStart)-90)*Math.PI/180,s={outerX:this.centerX+this.gaugeConfigurations.markingOuterRadius*Math.cos(r),outerY:this.centerY+this.gaugeConfigurations.markingOuterRadius*Math.sin(r),innerX:this.centerX+this.gaugeConfigurations.majorDivisionInnerRadius*Math.cos(r),innerY:this.centerY+this.gaugeConfigurations.majorDivisionInnerRadius*Math.sin(r)};this.drawLine(s,"2px",this.gaugeOptions.colorCodes.markings)}}catch(o){a.e(o)}finally{a.f()}}},{key:"drawLine",value:function(e,t,n){var i=document.createElementNS("http://www.w3.org/2000/svg","line");i.style.strokeWidth=t,this.gauge.appendChild(i),i.setAttribute("x1",""+e.innerX),i.setAttribute("y1",""+e.innerY),i.setAttribute("x2",""+e.outerX),i.setAttribute("y2",""+e.outerY),i.style.stroke=n}},{key:"writeGaugeReadings",value:function(){var t,n=360-this.gaugeOptions.arcStartAngle+this.gaugeOptions.arcEndAngle,i=this.gaugeOptions.gaugeRangeEnd-this.gaugeOptions.gaugeRangeStart,a=e(this.gaugeOptions.gaugeReadings);try{for(a.s();!(t=a.n()).done;){var g=t.value,r=".5rem";window.innerWidth>=1920&&(r=".4rem");var s=(this.gaugeOptions.arcStartAngle+n/i*(g-this.gaugeOptions.gaugeRangeStart)-90)*Math.PI/180,o=this.centerX+this.gaugeConfigurations.markingTextRadius*Math.cos(s)+-5,u=this.centerY+this.gaugeConfigurations.markingTextRadius*Math.sin(s)+2,l=document.createElementNS("http://www.w3.org/2000/svg","text");l.setAttributeNS(null,"x",""+o),l.setAttributeNS(null,"y",""+u),l.setAttributeNS(null,"font-size",r),l.setAttributeNS(null,"font-weight","bold"),l.setAttributeNS(null,"fill",this.gaugeOptions.colorCodes.readings);var h=document.createTextNode(""+g);l.appendChild(h),this.gauge.appendChild(l)}}catch(c){a.e(c)}finally{a.f()}}},{key:"rotateNeedle",value:function(){this.gaugeValue=this.gaugeValue?this.gaugeValue>this.gaugeOptions.gaugeRangeEnd?this.gaugeOptions.gaugeRangeEnd:this.gaugeValue<this.gaugeOptions.gaugeRangeStart?this.gaugeOptions.gaugeRangeStart:this.gaugeValue:this.gaugeOptions.gaugeRangeStart;var e=(360-this.gaugeOptions.arcStartAngle+this.gaugeOptions.arcEndAngle)/(this.gaugeOptions.gaugeRangeEnd-this.gaugeOptions.gaugeRangeStart)*(this.gaugeValue-this.gaugeOptions.gaugeRangeStart);this.needleRotation(this.gaugeOptions.arcStartAngle+e>360?this.gaugeOptions.arcStartAngle+e-360:this.gaugeOptions.arcStartAngle+e)}},{key:"coordinateOnCircle",value:function(e,t,n,i){var a=(i-90)*Math.PI/180;return{x:e+n*Math.cos(a),y:t+n*Math.sin(a)}}},{key:"drawArc",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"1",a=this.coordinateOnCircle(this.centerX,this.centerY,this.gaugeOptions.gaugeRadius,e),g=this.coordinateOnCircle(this.centerX,this.centerY,this.gaugeOptions.gaugeRadius,t),r=document.createElementNS("http://www.w3.org/2000/svg","path"),s="M"+a.x+" "+a.y;s+=" A"+this.gaugeOptions.gaugeRadius,s+=" "+this.gaugeOptions.gaugeRadius,s+=" 0 "+i+" 1",s+=" "+g.x+" "+g.y,r.setAttribute("stroke",n),r.setAttribute("stroke-width","8px"),r.setAttribute("fill","none"),r.setAttribute("d",s),this.gauge.appendChild(r)}},{key:"highlightRanges",value:function(){this.gaugeOptions.highlightOptions&&(this.gaugeOptions.highlightOptions.arcHighlight&&Array.isArray(this.gaugeOptions.highlightOptions.arcHighlight)&&this.gaugeOptions.highlightOptions.arcHighlight.length&&this.arcHighlight(),this.gaugeOptions.highlightOptions.valueHighlight&&Array.isArray(this.gaugeOptions.highlightOptions.valueHighlight)&&this.gaugeOptions.highlightOptions.valueHighlight.length&&this.valueHighlight())}},{key:"arcHighlight",value:function(){var t,n=e(this.gaugeOptions.highlightOptions.arcHighlight);try{for(n.s();!(t=n.n()).done;){var i=t.value,a=document.createElementNS("http://www.w3.org/2000/svg","path"),g=360-this.gaugeOptions.arcStartAngle+this.gaugeOptions.arcEndAngle,r=this.gaugeOptions.gaugeRangeEnd-this.gaugeOptions.gaugeRangeStart,s=this.gaugeOptions.arcStartAngle+g/r*(i.rangeMin-this.gaugeOptions.gaugeRangeStart),o=this.gaugeOptions.arcStartAngle+g/r*(i.rangeMax-this.gaugeOptions.gaugeRangeStart),u=this.coordinateOnCircle(this.centerX,this.centerY,i.radiusInner,s),l=this.coordinateOnCircle(this.centerX,this.centerY,i.radiusOuter,s),h=this.coordinateOnCircle(this.centerX,this.centerY,i.radiusInner,o),c=this.coordinateOnCircle(this.centerX,this.centerY,i.radiusOuter,o),d="M"+u.x+" "+u.y;d+="L"+l.x+" "+l.y,d+="A"+i.radiusOuter+" "+i.radiusOuter+" 0 0 1",d+=" "+c.x+" "+c.y,d+=" L"+h.x+" "+h.y,d+="A"+i.radiusInner+" "+i.radiusInner+" 0 0 0",d+=" "+u.x+" "+u.y,d+=" Z",a.setAttribute("fill",i.color),a.setAttribute("d",d),this.gauge.appendChild(a)}}catch(p){n.e(p)}finally{n.f()}}},{key:"valueHighlight",value:function(){var t,n=e(this.gaugeOptions.highlightOptions.valueHighlight);try{for(n.s();!(t=n.n()).done;){var i=t.value,a=document.createElementNS("http://www.w3.org/2000/svg","path"),g=360-this.gaugeOptions.arcStartAngle+this.gaugeOptions.arcEndAngle,r=this.gaugeOptions.gaugeRangeEnd-this.gaugeOptions.gaugeRangeStart,s=this.gaugeOptions.arcStartAngle+g/r*(i.valueMax-this.gaugeOptions.gaugeRangeStart),o=this.coordinateOnCircle(this.centerX,this.centerY,i.radius,this.gaugeOptions.arcStartAngle+g/r*(i.valueMin-this.gaugeOptions.gaugeRangeStart)),u=this.coordinateOnCircle(this.centerX,this.centerY,i.radius,s),l="M"+this.centerX+" "+this.centerY;l+=" L"+o.x+" "+o.y,l+=" A"+i.radius+" "+i.radius+" 0 0 1",l+=" "+u.x+" "+u.y,l+=" Z",a.setAttribute("fill",i.color),a.setAttribute("d",l),this.gauge.appendChild(a)}}catch(h){n.e(h)}finally{n.f()}}},{key:"needleRotation",value:function(e){e>this.gaugeOptions.arcStartAngle?(this.needle.style.webkitTransform="rotate("+e+"deg)",this.needle.style.msTransform="rotate("+e+"deg)",this.needle.style.transform="rotate("+e+"deg)"):(this.needle.style.webkitTransform="rotate(0deg) rotate("+e+"deg)",this.needle.style.msTransform="rotate(0deg) rotate("+e+"deg)",this.needle.style.transform="rotate(0deg) rotate("+e+"deg)")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(h.Y36(h.SBq),h.Y36(d))},t.\u0275cmp=h.Xpm({type:t,selectors:[["app-speedometer"]],inputs:{gaugeOptions:"gaugeOptions",gaugeValue:"gaugeValue"},features:[h._Bn([d]),h.TTD],decls:7,vars:1,consts:[[1,"speedometer","gauge-container"],[1,"gauge-wrapper"],[1,"compass"],["alt","needle",1,"needle"],[1,"gauge-reading"],[1,"reading-label"]],template:function(e,t){1&e&&(h.TgZ(0,"div",0),h.TgZ(1,"div",1),h.O4$(),h._UZ(2,"svg",2),h.kcU(),h._UZ(3,"img",3),h.qZA(),h.TgZ(4,"div",4),h.TgZ(5,"span",5),h._uU(6),h.qZA(),h.qZA(),h.qZA()),2&e&&(h.xp6(6),h.Oqu(t.gaugeValue))},styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}[_nghost-%COMP%]   .speedometer.gauge-container[_ngcontent-%COMP%]{background:transparent;width:100%;height:100%;display:flex;flex-direction:column;align-items:center}[_nghost-%COMP%]   .speedometer.gauge-container[_ngcontent-%COMP%]   .gauge-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;justify-content:center;position:relative}[_nghost-%COMP%]   .speedometer.gauge-container[_ngcontent-%COMP%]   .gauge-wrapper[_ngcontent-%COMP%]   .compass[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%}[_nghost-%COMP%]   .speedometer.gauge-container[_ngcontent-%COMP%]   .gauge-wrapper[_ngcontent-%COMP%]   .needle[_ngcontent-%COMP%]{position:absolute;bottom:45%;height:80px;transform:rotate(225deg);transform-origin:bottom center;transition:transform 1s}[_nghost-%COMP%]   .speedometer.gauge-container[_ngcontent-%COMP%]   .gauge-reading[_ngcontent-%COMP%]   .reading-label[_ngcontent-%COMP%]{color:#fff}"]}),t}(),f=[{path:"",component:(s=function(){function e(){a(this,e)}return r(e,[{key:"ngOnInit",value:function(){this.setupSpeedometer()}},{key:"setupSpeedometer",value:function(){var e=this;this.speedometerOptions={gaugeRadius:100,gaugeRangeStart:0,gaugeRangeEnd:140,markingMajorDivisions:[0,20,40,60,80,100,120,140],gaugeReadings:[0,20,40,60,80,100,120,140],colorCodes:{arc:"#D9D9E3",needle:"#ED2930",markings:"#D9D9E3",readings:"#D9D9E3"},highlightOptions:{arcHighlight:[{rangeMin:0,rangeMax:50,radiusOuter:55,radiusInner:45,color:"#67C043"},{rangeMin:50,rangeMax:90,radiusOuter:55,radiusInner:45,color:"#F3DE10"},{rangeMin:90,rangeMax:140,radiusOuter:55,radiusInner:45,color:"#F54752"}]}};var t=0,n=[0,35,25,50,30,15,65];setInterval(function(){e.speedometerValue=Math.round(140*Math.random()+0),t=t<n.length-1?t+1:0},3e3)}}]),e}(),s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=h.Xpm({type:s,selectors:[["ngx-gauges"]],decls:26,vars:2,consts:[[1,"row","gauges-container"],[1,"col-12"],[1,"row"],[1,"card","gauge-parent"],[1,"col-md-3","col-sm-12"],[1,"speedometer"],[3,"gaugeOptions","gaugeValue"],[1,"col-md-9","col-sm-12","d-flex","flex-column","justify-content-center","info-text"],[1,"col-md-12","col-sm-12","d-flex","flex-column","justify-content-center"],[1,"info-text"]],template:function(e,t){1&e&&(h.TgZ(0,"div",0),h.TgZ(1,"div",1),h.TgZ(2,"h4"),h._uU(3,"Angular SVG Gauges"),h.qZA(),h.qZA(),h.TgZ(4,"div",1),h.TgZ(5,"div",2),h._UZ(6,"div",1),h.TgZ(7,"div",1),h.TgZ(8,"div",3),h.TgZ(9,"div",2),h.TgZ(10,"div",4),h.TgZ(11,"div",5),h._UZ(12,"app-speedometer",6),h.qZA(),h.qZA(),h.TgZ(13,"div",7),h.TgZ(14,"h4"),h._uU(15,"Speedometer"),h.qZA(),h.TgZ(16,"p"),h._uU(17," This speedometer is a highly configurable gauge. A developer can easily integrate this gauge even without much knowledge in angular. It is possible to configure (almost) everything for this gauge, including the gauge range, gauge markings, colors of readings, markings, needle etc. The inner indicator arcs are also configurable and removable "),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(18,"div",3),h.TgZ(19,"div",2),h.TgZ(20,"div",8),h.TgZ(21,"div",9),h.TgZ(22,"h4"),h._uU(23,"More gauges to come"),h.qZA(),h.TgZ(24,"p"),h._uU(25," There are many more gauges like thermometer, compass, cross needle etc. to follow the speedometer. They will all be available as an npm package shortly. "),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA()),2&e&&(h.xp6(12),h.Q6J("gaugeOptions",t.speedometerOptions)("gaugeValue",t.speedometerValue))},directives:[p],styles:[".gauges-container[_ngcontent-%COMP%]   .gauge-parent[_ngcontent-%COMP%]{background-color:#2f2f2f;margin:10px 0}.gauges-container[_ngcontent-%COMP%]   .gauge-parent[_ngcontent-%COMP%]   .speedometer[_ngcontent-%COMP%]{background:transparent;width:250px;height:250px;padding:10px 0;margin-left:10%}.gauges-container[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]{padding:20px;align-items:flex-start}.gauges-container[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .gauges-container[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}@media screen and (max-width:767px){.gauges-container[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]{align-items:center}.gauges-container[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center}.gauges-container[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}}"]}),s)}],O=function(){var e=function e(){a(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[l.Bz.forChild(f)],l.Bz]}),e}(),v=((o=function e(){a(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275mod=h.oAB({type:o}),o.\u0275inj=h.cJS({imports:[[u.ez,O]]}),o)}}])}();