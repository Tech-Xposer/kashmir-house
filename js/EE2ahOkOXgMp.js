!function(l){"use strict";var i={},a=l(document),s=l("body"),d={},r=l("head"),e=l("html").attr("lang");function p(e,t){if(0<t-e){var o=Math.ceil((t-e)/1e3),n=[];return[60,60,24].forEach(function(e){n.unshift(Math.floor(o%e)),o/=e}),n.unshift(Math.floor(o)),n}return!1}function c(o,n,e){n||(clearInterval(i[e]),n=[0,0,0,0]),o.html(""),["days","hours","min","sec"].forEach(function(e,t){o.append(l("<span>",{class:"countdown-item "+e}).append(l("<span>",{class:"countdown-amount",text:n[t].toString().padStart(2,"0")})).append(l("<span>",{class:"countdown-period",text:loftoceanElementorFront.countDown[e]})))})}var t,o="en";e&&(t=e.split("-")[0],o=void 0===l.datepicker.regional[t]?void 0===l.datepicker.regional[e]?"en":e:t),l.datepicker.setDefaults(l.datepicker.regional[o]),l(window).on("elementor/frontend/init",function(){var e,t,o,n=l("body").find(".elementor-widget.elementor-widget-pt_button > .elementor-widget-container > .pt-button-popup");n.length&&n.each(function(){var e=l(this),t=e.data("popup-hash");t&&!d[t]&&(d[t]=e)}),l("body").on("click",".elementor-widget > .elementor-widget-container .elementor-button-link.popup-box-enabled",function(e){var t=l(this),o=t.closest(".elementor-widget"),n=!1;if(o.length&&!o.hasClass("elementor-element-edit-mode")&&t.data("popup-hash")){t=t.data("popup-hash");if(d[t]?n=d[t]:(n=o.find(".pt-button-popup"),d[t]=n.detach()),!1!==n&&n.length){e.preventDefault();e=s.children(".pt-button-popup.show");return a.trigger("beforeopen.popupbox.loftocean",[this]),e.length&&(e.removeClass("show"),e.each(function(){l(this).data("popup-hash")&&(d[l(this).data("popup-hash")]=l(this).detach())})),n.appendTo(s).addClass("show"),!1}}}).on("click",".pt-popup.pt-popup-box.pt-button-popup.show .close-button",function(e){e.preventDefault(),e.stopImmediatePropagation();e=l(this).closest(".pt-button-popup");return e.removeClass("show"),e.data("popup-hash")&&(d[e.data("popup-hash")]=e.detach()),!1}).on("click",function(e){var t,o=l(".pt-popup.pt-popup-box.pt-button-popup.show");o.length&&!o.hasClass("close-manually")&&((e=(t=l(e.target)).attr("class"))&&/ui-/.test(e)||(t.parents(".pt-button-popup").length||t.hasClass("pt-button-popup"))&&(t.hasClass("container")||t.parents(".container").length)||o.removeClass("show"))}),elementorFrontend.hooks.addAction("frontend/element_ready/global",function(e){e.css("background-image")&&(e.hasClass("pt-parallax-on-scroll")?l("body").trigger("add.loftoceanParallax",e):e.css("background-image",""))}),elementorFrontend.hooks.addAction("frontend/element_ready/pt_button.default",function(e){var t,o=e.children(".elementor-widget-container").children("a.elementor-button-link"),n=e.data("id");o.length&&(e.hasClass("elementor-element-edit-mode")&&"undefined"!=typeof elementor?(e=s.children(".pt-button-popup")).length&&(t=elementor.panel.$el.find(".elementor-control-popup_box_preview .elementor-control-input-wrapper button"),e.each(function(){var e=l(this);e.data("popup-hash")?(e.removeClass("show"),d[e.data("popup-hash")]=e.detach()):l(this).hasClass("pt-button-popup-"+n)&&l(this).remove()}),t.trigger("click")):!(t=o.siblings(".pt-button-popup")).length||(o=t.find('link[type="text/css"], style')).length&&t.before(o))}),elementorFrontend.hooks.addAction("frontend/element_ready/wp-widget-loftocean-widget_facebook.default",function(e){s.hasClass("elementor-editor-active")&&"undefined"!=typeof FB&&e.find(".loftocean-fb-page").length&&(e.find(".loftocean-fb-page").attr("fb-xfbml-state")||FB.XFBML.parse())}),elementorFrontend.hooks.addAction("frontend/element_ready/wp-widget-loftocean-widget-posts.default",function(e){s.hasClass("elementor-editor-active")&&(e.find('[data-show-list-number="on"]').length?e.addClass("with-post-number"):e.removeClass("with-post-number"))}),elementorFrontend.hooks.addAction("frontend/element_ready/wp-widget-loftocean-widget-instagram.default",function(e){s.hasClass("elementor-editor-active")&&e.find(".elementor-instagram-settings").length&&e.addClass(e.find(".elementor-instagram-settings").data("columns"))}),elementorFrontend.hooks.addAction("frontend/element_ready/pt_rounded_image.default",function(e){e=e.find(".pt-gallery.gallery-carousel .pt-gallery-wrap");e.length&&e.slick({dots:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:4e3,pauseOnHover:!1})}),elementorFrontend.hooks.addAction("frontend/element_ready/pt_testimonials.default",function(e){var t,o=e.find(".testimonials-slider");o.length&&(t=o.data("column"),e=[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}],e={dots:"on"==o.data("show-dots"),arrows:"on"==o.data("show-arrows"),slidesToShow:t,slidesToScroll:1,infinite:!0,speed:500,autoplay:"on"==o.data("autoplay"),autoplaySpeed:o.data("autoplay-speed"),pauseOnHover:!1,responsive:t<3?e.slice(-t):e},1==t&&(e.fade=!0),o.find(".pt-ts-wrap").slick(e))}),elementorFrontend.hooks.addAction("frontend/element_ready/pt_blog.default",function(e){!s.hasClass("elementor-editor-active")||(e=e.find(".posts.layout-masonry")).length&&a.trigger("patiotime.initMasonry",e)}),elementorFrontend.hooks.addAction("frontend/element_ready/pt_gallery.default",function(e){var t,o=e.find(".pt-gallery.gallery-carousel");o.length&&(t=o.data("column"),e=[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}],e={dots:"on"==o.data("show-dots"),arrows:"on"==o.data("show-arrows"),slidesToShow:t,slidesToScroll:1,infinite:!0,speed:500,autoplay:"on"==o.data("autoplay"),autoplaySpeed:o.data("autoplay-speed"),pauseOnHover:!1,responsive:t<3?e.slice(-t):e},1==t&&(e.fade="on"==o.data("fade")),o.find(".pt-gallery-wrap").slick(e))}),elementorFrontend.hooks.addAction("frontend/element_ready/pt_info_box.default",function(e){var t,o=e.find(".pt-info-box.info-box-carousel");o.length&&(t=o.data("column"),e=[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}],o.find(".pt-info-box-wrap").css("display","block").slick({dots:"on"==o.data("show-dots"),arrows:"on"==o.data("show-arrows"),slidesToShow:t,slidesToScroll:1,infinite:!0,speed:500,autoplay:"on"==o.data("autoplay"),autoplaySpeed:3e3,pauseOnHover:!1,responsive:t<2?e.slice(-t):e}))}),elementorFrontend.hooks.addAction("frontend/element_ready/pt_open_table.default",function(e){var o,n,a,i,s=e.find(".pt-open-table-wrap form");s.length&&(o=s.find(".pick-restaurant"),n=s.find("[name=rid], [name=restref]"),a=s.find("input.pick-date"),i=s.data("date-format")?s.data("date-format"):"yy-mm-dd",a.datepicker({dateFormat:i,minDate:s.data("book-in-advance")}),r.find("#loftocean-open-table-date-picker").length||r.append(l("<style>",{type:"text/css",id:"loftocean-open-table-date-picker",text:"#ui-datepicker-div { z-index: 100005 !important; }"})),o.length&&o.on("change",function(){l(this).removeClass("error")}),s.on("click",".button",function(e){e.preventDefault();var t="T"+s.find(".pick-time").val(),e=!1;"yy-mm-dd"==i?t=a.val()+t:(a.datepicker("option","dateFormat","yy-mm-dd"),t=a.val()+t,a.datepicker("option","dateFormat",i)),s.find("[name=dateTime]").val(t),o.length&&((t=o.val())?n.val(t):(e=!0,o.addClass("error"))),e||(s.data("popup-new-window")?window.open(s.attr("action")+"?"+s.serialize(),s.attr("title"),"popup"):s.submit())}))}),elementorFrontend.hooks.addAction("frontend/element_ready/pt_countdown.default",function(e){var t,o,n,a=e.find(".pt-countdown-wrap");a.length&&(n=a.data("end-date"),n=new Date(n),t=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds()),o=e.data("id"),clearInterval(i[o]),c(a,p((new Date).getTime(),t),o),i[o]=setInterval(function(){c(a,p((new Date).getTime(),t),o)},1e3))}),elementorFrontend.hooks.addAction("frontend/element_ready/pt_tabs.default",function(e){var t,o=e.find(".pt-tabs .tab-title-link");o.length&&(t=e.find(".elementor-tabs-content-wrapper .elementor-tab-content"),o.on("click",function(e){e.preventDefault();e=l(this).parent();e.hasClass("elementor-active")||(e.addClass("elementor-active").siblings().removeClass("elementor-active"),t.addClass("hide").removeClass("elementor-active").filter(l(this).attr("href")).removeClass("hide").addClass("elementor-active"))}))}),elementorFrontend.hooks.addAction("frontend/element_ready/pt_slider.default",function(e){var n,e=e.find(".pt-slider");e.length&&(n="current-item",e.find(".pt-slider-item").removeClass("hide"),e.find(".pt-slider-wrap").on("init",function(e,t){var o=t.slickCurrentSlide();t=t.$slider,l(t).length&&l(t).find(".pt-parallax-on-scroll").length&&l(t).find(".pt-parallax-on-scroll").each(function(){s.trigger("loftoceanParallaxCheck",l(this))}),l(this).find(".pt-slider-item").filter("[data-slick-index="+o+"]").addClass(n)}).on("afterChange",function(e,t,o){l(this).find(".pt-slider-item").length;l(this).find(".pt-slider-item").removeClass(n).filter("[data-slick-index="+o+"]").first().addClass(n)}).slick({dots:"on"==e.data("show-dots"),arrows:"on"==e.data("show-arrows"),slidesToShow:1,slidesToScroll:1,infinite:!0,speed:500,autoplay:"on"==e.data("autoplay"),autoplaySpeed:e.data("autoplay-speed")||5e3,pauseOnHover:!1,fade:!0}))}),s.hasClass("elementor-editor-active")||(e=window.location.hash||!1,t=!0,(n=!!window.location.search&&new URLSearchParams(window.location.search))&&(t=!n.get("disable-auto-scroll")),e=!!e&&e.substr(1),t&&e&&((o=l('.pt-tabs .elementor-tab-title a[data-id="'+e+'"]'))&&o.length&&setTimeout(function(){o.trigger("click"),o.data("auto-scroll")&&"on"==o.data("auto-scroll")&&l("html, body").animate({scrollTop:o.offset().top-50},200)},100)))})}(jQuery);