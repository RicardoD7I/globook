(function(e){var t={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};e.fn.bxSlider=function(r){if(0==this.length)return this;if(this.length>1)return this.each(function(){e(this).bxSlider(r)}),this;var s={},o=this;t.el=this;var a=e(window).width(),l=e(window).height(),c=function(){s.settings=e.extend({},n,r),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"==s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!=s.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return s.cssPrefix=t[n].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"==s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){e(this).data("origStyle",e(this).attr("style"))}),u()},u=function(){o.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.loader=e('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"==s.settings.mode?100*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),v(),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:h()}),s.settings.pager||s.viewport.parent().css({margin:"0 auto 0px"}),s.children.css({"float":"horizontal"==s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",g()),"horizontal"==s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"==s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"==s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:50,display:"block"})),s.controls.el=e('<div class="bx-controls" />'),s.settings.captions&&E(),s.active.last=s.settings.startSlide==m()-1,s.settings.video&&o.fitVids();var t=s.children.eq(s.settings.startSlide);"all"==s.settings.preloadImages&&(t=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.pager&&w(),s.settings.controls&&T(),s.settings.auto&&s.settings.autoControls&&C(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),d(t,p)},d=function(t,n){var i=t.find("img, iframe").length;if(0==i)return n(),void 0;var r=0;t.find("img, iframe").each(function(){e(this).one("load",function(){++r==i&&n()}).each(function(){this.complete&&e(this).load()})})},p=function(){if(s.settings.infiniteLoop&&"fade"!=s.settings.mode&&!s.settings.ticker){var t="vertical"==s.settings.mode?s.settings.minSlides:s.settings.maxSlides,n=s.children.slice(0,t).clone().addClass("bx-clone"),i=s.children.slice(-t).clone().addClass("bx-clone");o.append(n).prepend(i)}s.loader.remove(),x(),"vertical"==s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(f()),o.redrawSlider(),s.settings.onSliderLoad(s.active.index),s.initialized=!0,s.settings.responsive&&e(window).bind("resize",B),s.settings.auto&&s.settings.autoStart&&q(),s.settings.ticker&&z(),s.settings.pager&&H(s.settings.startSlide),s.settings.controls&&M(),s.settings.touchEnabled&&!s.settings.ticker&&O()},f=function(){var t=0,n=e();if("vertical"==s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var r=1==s.settings.moveSlides?s.active.index:s.active.index*y();for(n=s.children.eq(r),i=1;s.settings.maxSlides-1>=i;i++)n=r+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(r+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"==s.settings.mode?(n.each(function(){t+=e(this).find("img:first").outerHeight()}),s.settings.slideMargin>0&&(t+=s.settings.slideMargin*(s.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).find("img:first").outerHeight(!1)}).get()),t},h=function(){var e="100%";return s.settings.slideWidth>0&&(e="horizontal"==s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),e},g=function(){var e=s.settings.slideWidth,t=s.viewport.width();return 0==s.settings.slideWidth||s.settings.slideWidth>t&&!s.carousel||"vertical"==s.settings.mode?e=t:s.settings.maxSlides>1&&"horizontal"==s.settings.mode&&(t>s.maxThreshold||s.minThreshold>t&&(e=(t-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides)),e},v=function(){var e=1;if("horizontal"==s.settings.mode&&s.settings.slideWidth>0)if(s.viewport.width()<s.minThreshold)e=s.settings.minSlides;else if(s.viewport.width()>s.maxThreshold)e=s.settings.maxSlides;else{var t=s.children.first().width();e=Math.floor(s.viewport.width()/t)}else"vertical"==s.settings.mode&&(e=s.settings.minSlides);return e},m=function(){var e=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)e=s.children.length/y();else for(var t=0,n=0;s.children.length>t;)++e,t=n+v(),n+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();else e=Math.ceil(s.children.length/v());return e},y=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},x=function(){if(s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop){if("horizontal"==s.settings.mode){var e=s.children.last(),t=e.position();b(-(t.left-(s.viewport.width()-e.width())),"reset",0)}else if("vertical"==s.settings.mode){var n=s.children.length-s.settings.minSlides,t=s.children.eq(n).position();b(-t.top,"reset",0)}}else{var t=s.children.eq(s.active.index*y()).position();s.active.index==m()-1&&(s.active.last=!0),void 0!=t&&("horizontal"==s.settings.mode?b(-t.left,"reset",0):"vertical"==s.settings.mode&&b(-t.top,"reset",0))}},b=function(e,t,n,i){if(s.usingCSS){var r="vertical"==s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"==t?(o.css(s.animProp,r),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),j()})):"reset"==t?o.css(s.animProp,r):"ticker"==t&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,r),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(i.resetValue,"reset",0),W()}))}else{var a={};a[s.animProp]=e,"slide"==t?o.animate(a,n,s.settings.easing,function(){j()}):"reset"==t?o.css(s.animProp,e):"ticker"==t&&o.animate(a,speed,"linear",function(){b(i.resetValue,"reset",0),W()})}},S=function(){for(var t="",n=m(),i=0;n>i;i++){var r="";s.settings.buildPager&&e.isFunction(s.settings.buildPager)?(r=s.settings.buildPager(i),s.pagerEl.addClass("bx-custom-pager")):(r=i+1,s.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+r+"</a></div>"}s.pagerEl.html(t)},w=function(){s.settings.pagerCustom?s.pagerEl=e(s.settings.pagerCustom):(s.pagerEl=e('<div class="bx-pager" />'),s.settings.pagerSelector?e(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),S()),s.pagerEl.delegate("a","click",L)},T=function(){s.controls.next=e('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=e('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click",k),s.controls.prev.bind("click",N),s.settings.nextSelector&&e(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&e(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=e('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},C=function(){s.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=e('<div class="bx-controls-auto" />'),s.controls.autoEl.delegate(".bx-start","click",A),s.controls.autoEl.delegate(".bx-stop","click",D),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?e(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),P(s.settings.autoStart?"stop":"start")},E=function(){s.children.each(function(){var t=e(this).find("img:first").attr("title");void 0!=t&&(""+t).length&&e(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},k=function(e){s.settings.auto&&o.stopAuto(),o.goToNextSlide(),e.preventDefault()},N=function(e){s.settings.auto&&o.stopAuto(),o.goToPrevSlide(),e.preventDefault()},A=function(e){o.startAuto(),e.preventDefault()},D=function(e){o.stopAuto(),e.preventDefault()},L=function(t){s.settings.auto&&o.stopAuto();var n=e(t.currentTarget),i=parseInt(n.attr("data-slide-index"));i!=s.active.index&&o.goToSlide(i),t.preventDefault()},H=function(t){var n=s.children.length;return"short"==s.settings.pagerType?(s.settings.maxSlides>1&&(n=Math.ceil(s.children.length/s.settings.maxSlides)),s.pagerEl.html(t+1+s.settings.pagerShortSeparator+n),void 0):(s.pagerEl.find("a").removeClass("active"),s.pagerEl.each(function(n,i){e(i).find("a").eq(t).addClass("active")}),void 0)},j=function(){if(s.settings.infiniteLoop){var e="";0==s.active.index?e=s.children.eq(0).position():s.active.index==m()-1&&s.carousel?e=s.children.eq((m()-1)*y()).position():s.active.index==s.children.length-1&&(e=s.children.eq(s.children.length-1).position()),"horizontal"==s.settings.mode?b(-e.left,"reset",0):"vertical"==s.settings.mode&&b(-e.top,"reset",0)}s.working=!1,s.settings.onSlideAfter(s.children.eq(s.active.index),s.oldIndex,s.active.index)},P=function(e){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[e]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},M=function(){1==m()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0==s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index==m()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},q=function(){s.settings.autoDelay>0?setTimeout(o.startAuto,s.settings.autoDelay):o.startAuto(),s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},z=function(){var t=0;if("next"==s.settings.autoDirection)o.append(s.children.clone().addClass("bx-clone"));else{o.prepend(s.children.clone().addClass("bx-clone"));var n=s.children.first().position();t="horizontal"==s.settings.mode?-n.left:-n.top}b(t,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&!s.usingCSS&&s.viewport.hover(function(){o.stop()},function(){var t=0;s.children.each(function(){t+="horizontal"==s.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var n=s.settings.speed/t,i="horizontal"==s.settings.mode?"left":"top",r=n*(t-Math.abs(parseInt(o.css(i))));W(r)}),W()},W=function(e){speed=e?e:s.settings.speed;var t={left:0,top:0},n={left:0,top:0};"next"==s.settings.autoDirection?t=o.find(".bx-clone").first().position():n=s.children.first().position();var i="horizontal"==s.settings.mode?-t.left:-t.top,r="horizontal"==s.settings.mode?-n.left:-n.top,a={resetValue:r};b(i,"ticker",speed,a)},O=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart",I)},I=function(e){if(s.working)e.preventDefault();else{s.touch.originalPos=o.position();var t=e.originalEvent;s.touch.start.x=t.changedTouches[0].pageX,s.touch.start.y=t.changedTouches[0].pageY,s.viewport.bind("touchmove",_),s.viewport.bind("touchend",F)}},_=function(e){var t=e.originalEvent,n=Math.abs(t.changedTouches[0].pageX-s.touch.start.x),i=Math.abs(t.changedTouches[0].pageY-s.touch.start.y);if(3*n>i&&s.settings.preventDefaultSwipeX?e.preventDefault():3*i>n&&s.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=s.settings.mode&&s.settings.oneToOneTouch){var r=0;if("horizontal"==s.settings.mode){var o=t.changedTouches[0].pageX-s.touch.start.x;r=s.touch.originalPos.left+o}else{var o=t.changedTouches[0].pageY-s.touch.start.y;r=s.touch.originalPos.top+o}b(r,"reset",0)}},F=function(e){s.viewport.unbind("touchmove",_);var t=e.originalEvent,n=0;if(s.touch.end.x=t.changedTouches[0].pageX,s.touch.end.y=t.changedTouches[0].pageY,"fade"==s.settings.mode){var i=Math.abs(s.touch.start.x-s.touch.end.x);i>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())}else{var i=0;"horizontal"==s.settings.mode?(i=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(i=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0==s.active.index&&i>0||s.active.last&&0>i)?b(n,"reset",200):Math.abs(i)>=s.settings.swipeThreshold?(0>i?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):b(n,"reset",200)}s.viewport.unbind("touchend",F)},B=function(){var t=e(window).width(),n=e(window).height();(a!=t||l!=n)&&(a=t,l=n,o.redrawSlider())};return o.goToSlide=function(t,n){if(!s.working&&s.active.index!=t)if(s.working=!0,s.oldIndex=s.active.index,s.active.index=0>t?m()-1:t>=m()?0:t,s.settings.onSlideBefore(s.children.eq(s.active.index),s.oldIndex,s.active.index),"next"==n?s.settings.onSlideNext(s.children.eq(s.active.index),s.oldIndex,s.active.index):"prev"==n&&s.settings.onSlidePrev(s.children.eq(s.active.index),s.oldIndex,s.active.index),s.active.last=s.active.index>=m()-1,s.settings.pager&&H(s.active.index),s.settings.controls&&M(),"fade"==s.settings.mode)s.settings.adaptiveHeight&&s.viewport.height()!=f()&&s.viewport.animate({height:f()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",51).fadeIn(s.settings.speed,function(){e(this).css("zIndex",50),j()});else{s.settings.adaptiveHeight&&s.viewport.height()!=f()&&s.viewport.animate({height:f()},s.settings.adaptiveHeightSpeed);var i=0,r={left:0,top:0};if(!s.settings.infiniteLoop&&s.carousel&&s.active.last)if("horizontal"==s.settings.mode){var a=s.children.eq(s.children.length-1);r=a.position(),i=s.viewport.width()-a.outerWidth()}else{var l=s.children.length-s.settings.minSlides;r=s.children.eq(l).position()}else if(s.carousel&&s.active.last&&"prev"==n){var c=1==s.settings.moveSlides?s.settings.maxSlides-y():(m()-1)*y()-(s.children.length-s.settings.maxSlides),a=o.children(".bx-clone").eq(c);r=a.position()}else if("next"==n&&0==s.active.index)r=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1;else if(t>=0){var u=t*y();r=s.children.eq(u).position()}if(r!==void 0){var d="horizontal"==s.settings.mode?-(r.left-i):-r.top;b(d,"slide",s.settings.speed)}}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var e=parseInt(s.active.index)+1;o.goToSlide(e,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!=s.active.index){var e=parseInt(s.active.index)-1;o.goToSlide(e,"prev")}},o.startAuto=function(e){s.interval||(s.interval=setInterval(function(){"next"==s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&1!=e&&P("stop"))},o.stopAuto=function(e){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&1!=e&&P("start"))},o.getCurrentSlide=function(){return s.active.index},o.getSlideCount=function(){return s.children.length},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(g()),s.viewport.css("height",f()),s.settings.ticker||x(),s.active.last&&(s.active.index=m()-1),s.active.index>=m()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(S(),H(s.active.index))},o.destroySlider=function(){s.initialized&&(s.initialized=!1,e(".bx-clone",this).remove(),s.children.each(function(){void 0!=e(this).data("origStyle")?e(this).attr("style",e(this).data("origStyle")):e(this).removeAttr("style")}),void 0!=e(this).data("origStyle")?this.attr("style",e(this).data("origStyle")):e(this).removeAttr("style"),e(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.pagerEl.remove(),e(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&e(window).unbind("resize",B))},o.reloadSlider=function(e){void 0!=e&&(r=e),o.destroySlider(),c()},c(),this}})(jQuery);