function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
var ytp = ytp || {};
! function(jQuery, ytp) {
    var nAgt = navigator.userAgent;
    if (!jQuery.browser) {
        jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
        else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
        else if (-1 != nAgt.indexOf("Trident")) {
            jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
            var start = nAgt.indexOf("rv:") + 3,
                end = start + 4;
            jQuery.browser.fullVersion = nAgt.substring(start, end)
        } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
    }
    jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.fn.CSSAnimate = function(e, r, t, a, o) {
        function l(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }

        function i(e, r) {
            return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + r : e
        }
        return jQuery.support.CSStransition = function() {
            var e = (document.body || document.documentElement).style;
            return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
        }(), this.each(function() {
            var n = this,
                u = jQuery(this);
            n.id = n.id || "CSSA_" + (new Date).getTime();
            var s = s || {
                type: "noEvent"
            };
            if (n.CSSAIsRunning && n.eventType == s.type) n.CSSqueue = function() {
                u.CSSAnimate(e, r, t, a, o)
            };
            else if (n.CSSqueue = null, n.eventType = s.type, 0 !== u.length && e) {
                if (n.CSSAIsRunning = !0, "function" == typeof r && (o = r, r = jQuery.fx.speeds._default), "function" == typeof t && (o = t, t = 0), "function" == typeof a && (o = a, a = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof r)
                    for (var y in jQuery.fx.speeds) {
                        if (r == y) {
                            r = jQuery.fx.speeds[y];
                            break
                        }
                        r = jQuery.fx.speeds._default
                    }
                if (r || (r = jQuery.fx.speeds._default), jQuery.support.CSStransition) {
                    s = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    }, s[a] && (a = s[a]);
                    var p = "",
                        d = "transitionEnd";
                    jQuery.browser.webkit ? (p = "-webkit-", d = "webkitTransitionEnd") : jQuery.browser.mozilla ? (p = "-moz-", d = "transitionend") : jQuery.browser.opera ? (p = "-o-", d = "otransitionend") : jQuery.browser.msie && (p = "-ms-", d = "msTransitionEnd"), s = [];
                    for (c in e) y = c, "transform" === y && (y = p + "transform", e[y] = e[c], delete e[c]), "filter" === y && (y = p + "filter", e[y] = e[c], delete e[c]), ("transform-origin" === y || "origin" === y) && (y = p + "transform-origin", e[y] = e[c], delete e[c]), "x" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " translateX(" + i(e[c], "px") + ")", delete e[c]), "y" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " translateY(" + i(e[c], "px") + ")", delete e[c]), "z" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " translateZ(" + i(e[c], "px") + ")", delete e[c]), "rotate" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " rotate(" + i(e[c], "deg") + ")", delete e[c]), "rotateX" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " rotateX(" + i(e[c], "deg") + ")", delete e[c]), "rotateY" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " rotateY(" + i(e[c], "deg") + ")", delete e[c]), "rotateZ" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " rotateZ(" + i(e[c], "deg") + ")", delete e[c]), "scale" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " scale(" + i(e[c], "") + ")", delete e[c]), "scaleX" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " scaleX(" + i(e[c], "") + ")", delete e[c]), "scaleY" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " scaleY(" + i(e[c], "") + ")", delete e[c]), "scaleZ" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " scaleZ(" + i(e[c], "") + ")", delete e[c]), "skew" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " skew(" + i(e[c], "deg") + ")", delete e[c]), "skewX" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " skewX(" + i(e[c], "deg") + ")", delete e[c]), "skewY" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " skewY(" + i(e[c], "deg") + ")", delete e[c]), "perspective" === y && (y = p + "transform", e[y] = e[y] || "", e[y] += " perspective(" + i(e[c], "px") + ")", delete e[c]), 0 > s.indexOf(y) && s.push(l(y));
                    var c = s.join(","),
                        P = function() {
                            u.off(d + "." + n.id), clearTimeout(n.timeout), u.css(p + "transition", ""), "function" == typeof o && o(u), n.called = !0, n.CSSAIsRunning = !1, "function" == typeof n.CSSqueue && (n.CSSqueue(), n.CSSqueue = null)
                        },
                        T = {};
                    jQuery.extend(T, e), T[p + "transition-property"] = c, T[p + "transition-duration"] = r + "ms", T[p + "transition-delay"] = t + "ms", T[p + "transition-style"] = "preserve-3d", T[p + "transition-timing-function"] = a, setTimeout(function() {
                        u.one(d + "." + n.id, P), u.css(T)
                    }, 1), n.timeout = setTimeout(function() {
                        u.called || !o ? (u.called = !1, n.CSSAIsRunning = !1) : (u.css(p + "transition", ""), o(u), n.CSSAIsRunning = !1, "function" == typeof n.CSSqueue && (n.CSSqueue(), n.CSSqueue = null))
                    }, r + t + 100)
                } else {
                    for (var c in e) "transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c];
                    o && "string" != typeof o || (o = "linear"), u.animate(e, r, o)
                }
            }
        })
    }, ! function(e) {
        /iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());
        var r = "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1;
        e.simpleSlider = {
            defaults: {
                initialval: 0,
                scale: 100,
                orientation: "h",
                readonly: !1,
                callback: !1
            },
            events: {
                start: r ? "touchstart" : "mousedown",
                end: r ? "touchend" : "mouseup",
                move: r ? "touchmove" : "mousemove"
            },
            init: function(t) {
                return this.each(function() {
                    var a = this,
                        o = e(a);
                    o.addClass("simpleSlider"), a.opt = {}, e.extend(a.opt, e.simpleSlider.defaults, t), e.extend(a.opt, o.data());
                    var l = "h" == a.opt.orientation ? "horizontal" : "vertical",
                        i = e("<div/>").addClass("level").addClass(l);
                    o.prepend(i), a.level = i, o.css({
                        cursor: "default"
                    }), "auto" == a.opt.scale && (a.opt.scale = e(a).outerWidth()), o.updateSliderVal(), a.opt.readonly || (o.on(e.simpleSlider.events.start, function(e) {
                        r && (e = e.changedTouches[0]), a.canSlide = !0, o.updateSliderVal(e), o.css({
                            cursor: "col-resize"
                        }), e.preventDefault(), e.stopPropagation()
                    }), e(document).on(e.simpleSlider.events.move, function(t) {
                        r && (t = t.changedTouches[0]), a.canSlide && (e(document).css({
                            cursor: "default"
                        }), o.updateSliderVal(t), t.preventDefault(), t.stopPropagation())
                    }).on(e.simpleSlider.events.end, function() {
                        e(document).css({
                            cursor: "auto"
                        }), a.canSlide = !1, o.css({
                            cursor: "auto"
                        })
                    }))
                })
            },
            updateSliderVal: function(r) {
                function t(e, r) {
                    return Math.floor(100 * e / r)
                }
                var a = this,
                    o = a.get(0);
                o.opt.initialval = "number" == typeof o.opt.initialval ? o.opt.initialval : o.opt.initialval(o);
                var l = e(o).outerWidth(),
                    i = e(o).outerHeight();
                o.x = "object" == typeof r ? r.clientX + document.body.scrollLeft - a.offset().left : "number" == typeof r ? r * l / o.opt.scale : o.opt.initialval * l / o.opt.scale, o.y = "object" == typeof r ? r.clientY + document.body.scrollTop - a.offset().top : "number" == typeof r ? (o.opt.scale - o.opt.initialval - r) * i / o.opt.scale : o.opt.initialval * i / o.opt.scale, o.y = a.outerHeight() - o.y, o.scaleX = o.x * o.opt.scale / l, o.scaleY = o.y * o.opt.scale / i, o.outOfRangeX = o.scaleX > o.opt.scale ? o.scaleX - o.opt.scale : o.scaleX < 0 ? o.scaleX : 0, o.outOfRangeY = o.scaleY > o.opt.scale ? o.scaleY - o.opt.scale : o.scaleY < 0 ? o.scaleY : 0, o.outOfRange = "h" == o.opt.orientation ? o.outOfRangeX : o.outOfRangeY, o.value = "undefined" != typeof r ? "h" == o.opt.orientation ? o.x >= a.outerWidth() ? o.opt.scale : o.x <= 0 ? 0 : o.scaleX : o.y >= a.outerHeight() ? o.opt.scale : o.y <= 0 ? 0 : o.scaleY : "h" == o.opt.orientation ? o.scaleX : o.scaleY, "h" == o.opt.orientation ? o.level.width(t(o.x, l) + "%") : o.level.height(t(o.y, i)), "function" == typeof o.opt.callback && o.opt.callback(o)
            }
        }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
    }(jQuery), jQuery.mbStorage = {
        set: function(e, r) {
            r = JSON.stringify(r), localStorage.setItem(e, r)
        },
        get: function(e) {
            return localStorage[e] ? JSON.parse(localStorage[e]) : null
        },
        remove: function(e) {
            e ? localStorage.removeItem(e) : localStorage.clear()
        }
    };
    var getYTPVideoID = function(e) {
        var r, t;
        return e.indexOf("youtu.be") > 0 ? (r = e.substr(e.lastIndexOf("/") + 1, e.length), t = r.indexOf("?list=") > 0 ? r.substr(r.lastIndexOf("="), r.length) : null, r = t ? r.substr(0, r.lastIndexOf("?")) : r) : e.indexOf("http") > -1 ? (r = e.match(/[\\?&]v=([^&#]*)/)[1], t = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (r = e.length > 15 ? null : e, t = r ? null : e), {
            videoID: r,
            playlistID: t
        }
    };
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.9.1",
        author: "Matteo Bicocchi",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            gaTrack: !0,
            optimizeDisplay: !0,
            onReady: function() {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        locationProtocol: "https:",
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this,
                    $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filtersEnabled = !0, YTPlayer.filters = {
                    grayscale: {
                        value: 0,
                        unit: "%"
                    },
                    hue_rotate: {
                        value: 0,
                        unit: "deg"
                    },
                    invert: {
                        value: 0,
                        unit: "%"
                    },
                    opacity: {
                        value: 0,
                        unit: "%"
                    },
                    saturate: {
                        value: 0,
                        unit: "%"
                    },
                    sepia: {
                        value: 0,
                        unit: "%"
                    },
                    brightness: {
                        value: 0,
                        unit: "%"
                    },
                    contrast: {
                        value: 0,
                        unit: "%"
                    },
                    blur: {
                        value: 0,
                        unit: "px"
                    }
                }, $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 == property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options, property)), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function() {
                    var e = !1;
                    try {
                        self.location.href != top.location.href && (e = !0)
                    } catch (r) {
                        e = !0
                    }
                    return e
                };
                YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1,
                    playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;
                YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                    html5: 1
                }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"),
                    overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay");
                if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    if (YTPlayer.canPlayOnMobile = isPlayer && 0 == jQuery(this).children().length, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return void $YTPlayer.remove();
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    if (wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            minWidth: "100%",
                            minHeight: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }), playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden"
                        }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function() {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({
                            boxSizing: "border-box"
                        }), wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                            position: "relative"
                        }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
                            opacity: 1
                        }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible")
                        }), ytp.YTAPIReady) setTimeout(function() {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100);
                    else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script></script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    jQuery(document).on("YTAPIReady", function() {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function() {
                            if (!YTPlayer.isInit) {
                                if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                    if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                        YTPlayer.opt.containment.css({
                                            maxWidth: "100%"
                                        });
                                        var h = .6 * YTPlayer.opt.containment.outerWidth();
                                        YTPlayer.opt.containment.css({
                                            maxHeight: h
                                        })
                                    }
                                    return void new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        height: "100%",
                                        width: "100%",
                                        events: {
                                            onReady: function(e) {
                                                YTPlayer.player = e.target, playerBox.css({
                                                    opacity: 1
                                                }), YTPlayer.wrapper.css({
                                                    opacity: 1
                                                })
                                            }
                                        }
                                    })
                                }
                                new YT.Player(playerID, {
                                    videoId: YTPlayer.videoID.toString(),
                                    playerVars: playerVars,
                                    events: {
                                        onReady: function(e) {
                                            if (YTPlayer.player = e.target, !YTPlayer.isReady) {
                                                YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? !1 : !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function() {
                                                    $YTPlayer.optimizeDisplay()
                                                }), jQuery.mbYTPlayer.checkForState(YTPlayer);
                                                var r = jQuery.Event("YTPUnstarted");
                                                r.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(r)
                                            }
                                        },
                                        onStateChange: function(event) {
                                            if ("function" == typeof event.target.getPlayerState) {
                                                var state = event.target.getPlayerState();
                                                if (YTPlayer.state != state) {
                                                    YTPlayer.state = state;
                                                    var eventType;
                                                    switch (state) {
                                                        case -1:
                                                            eventType = "YTPUnstarted";
                                                            break;
                                                        case 0:
                                                            eventType = "YTPEnd";
                                                            break;
                                                        case 1:
                                                            eventType = "YTPStart", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.videoData.title || YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.videoData.title || YTPlayer.videoID.toString());
                                                            break;
                                                        case 2:
                                                            eventType = "YTPPause", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 3:
                                                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 5:
                                                            eventType = "YTPCued"
                                                    }
                                                    var YTPevent = jQuery.Event(eventType);
                                                    YTPevent.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPevent)
                                                }
                                            }
                                        },
                                        onPlaybackQualityChange: function(e) {
                                            var r = e.target.getPlaybackQuality(),
                                                t = jQuery.Event("YTPQualityChange");
                                            t.quality = r, jQuery(YTPlayer).trigger(t)
                                        },
                                        onError: function(e) {
                                            150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                        }
                                    }
                                })
                            }
                        }))
                    })
                }
            })
        },
        getDataFromAPI: function(e) {
            if (e.videoData = jQuery.mbStorage.get("YYTPlayer_data_" + e.videoID), e.videoData) setTimeout(function() {
                e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.dataReceived = !0, jQuery(e).trigger("YTPChanged");
                var r = jQuery.Event("YTPData");
                r.prop = {};
                for (var t in e.videoData) r.prop[t] = e.videoData[t];
                jQuery(e).trigger(r)
            }, 500);
            else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON("https://www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(r) {
                function t(r) {
                    e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = r.channelTitle, e.videoData.title = r.title, e.videoData.description = r.description.length < 400 ? r.description : r.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = r.thumbnails.maxres ? r.thumbnails.maxres.url : null, e.videoData.thumb_high = r.thumbnails.high ? r.thumbnails.high.url : null, e.videoData.thumb_medium = r.thumbnails.medium ? r.thumbnails.medium.url : null, jQuery.mbStorage.set("YYTPlayer_data_" + e.videoID, e.videoData)
                }
                e.dataReceived = !0, jQuery(e).trigger("YTPChanged"), t(r.items[0].snippet);
                var a = jQuery.Event("YTPData");
                a.prop = {};
                for (var o in e.videoData) a.prop[o] = e.videoData[o];
                jQuery(e).trigger(a)
            });
            else {
                if (e.hasData = !1, setTimeout(function() {
                        jQuery(e).trigger("YTPChanged")
                    }, 50), e.isPlayer && !e.opt.autoPlay) {
                    var r = "https://i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + r + ") center center",
                        backgroundSize: "cover"
                    })
                }
                e.videoData = null, e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio
            }
            jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                if (!e.hasData && (e.hasData = !0, e.isPlayer && !e.opt.autoPlay)) {
                    var r = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + r + ") center center",
                        backgroundSize: "cover"
                    })
                }
            }), e.isPlayer && !e.opt.autoPlay && (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            var e = this.get(0);
            return e.videoData
        },
        getVideoID: function() {
            var e = this.get(0);
            return e.videoID || !1
        },
        setVideoQuality: function(e) {
            var r = this.get(0);
            jQuery.browser.chrome || r.player.setPlaybackQuality(e)
        },
        playlist: function(e, r, t) {
            var a = this,
                o = a.get(0);
            return o.isPlayList = !0, r && (e = jQuery.shuffle(e)), o.videoID || (o.videos = e, o.videoCounter = 0, o.videoLength = e.length, jQuery(o).data("property", e[0]), jQuery(o).mb_YTPlayer()), "function" == typeof t && jQuery(o).on("YTPChanged", function() {
                t(o)
            }), jQuery(o).on("YTPEnd", function() {
                jQuery(o).playNext()
            }), a
        },
        playNext: function() {
            var e = this.get(0);
            e.videoCounter++, e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        playPrev: function() {
            var e = this.get(0);
            e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        changeMovie: function(e) {
            var r = this.get(0);
            r.opt.startAt = 0, r.opt.stopAt = 0, r.opt.mute = !0, r.hasData = !1, r.hasChanged = !0, e && jQuery.extend(r.opt, r.defaultOpt, e), r.videoID = getYTPVideoID(r.opt.videoURL).videoID, jQuery(r.playerEl).CSSAnimate({
                opacity: 0
            }, 200, function() {
                jQuery(r).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + r.videoID), 1, r.opt.quality), jQuery.mbYTPlayer.checkForState(r), jQuery(r).optimizeDisplay(), jQuery.mbYTPlayer.getDataFromAPI(r)
            })
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var e = this.get(0);
            ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null;
            var r = e.wrapper;
            r.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState)
        },
        fullscreen: function(real) {
            function hideMouse() {
                YTPlayer.overlay.css({
                    cursor: "none"
                })
            }

            function RunPrefixMethod(e, r) {
                for (var t, a, o = ["webkit", "moz", "ms", "o", ""], l = 0; l < o.length && !e[t];) {
                    if (t = r, "" == o[l] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)), t = o[l] + t, a = typeof e[t], "undefined" != a) return o = [o[l]], "function" == a ? e[t]() : e[t];
                    l++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id),
                fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    e ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500), videoWrapper.css({
                        zIndex: 0
                    }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({
                cursor: "auto"
            }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, 500), videoWrapper.css({
                zIndex: 0
            })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(e) {
                YTPlayer.overlay.css({
                    cursor: "auto"
                }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }), hideMouse(), real ? (videoWrapper.css({
                opacity: 0
            }), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                videoWrapper.CSSAnimate({
                    opacity: 1
                }, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, 500)) : videoWrapper.css({
                zIndex: 1e4
            }).CSSAnimate({
                opacity: 1
            }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0)
        },
        toggleLoops: function() {
            var e = this.get(0),
                r = e.opt;
            1 == r.loop ? r.loop = 0 : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(), r.loop = 1)
        },
        play: function() {
            var e = this.get(0);
            if (e.isReady) {
                var r = jQuery("#controlBar_" + e.id),
                    t = r.find(".mb_YTPPlaypause");
                t.html(jQuery.mbYTPlayer.controls.pause), e.player.playVideo(), e.wrapper.CSSAnimate({
                    opacity: e.isAlone ? 1 : e.opt.opacity
                }, 2e3), jQuery(e.playerEl).CSSAnimate({
                    opacity: 1
                }, 1e3), jQuery(e).css("background-image", "none")
            }
        },
        togglePlay: function(e) {
            var r = this.get(0);
            1 == r.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(r.state)
        },
        stop: function() {
            var e = this.get(0),
                r = jQuery("#controlBar_" + e.id),
                t = r.find(".mb_YTPPlaypause");
            t.html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo()
        },
        pause: function() {
            var e = this.get(0),
                r = jQuery("#controlBar_" + e.id),
                t = r.find(".mb_YTPPlaypause");
            t.html(jQuery.mbYTPlayer.controls.play), e.player.pauseVideo()
        },
        seekTo: function(e) {
            var r = this.get(0);
            r.player.seekTo(e, !0)
        },
        setVolume: function(e) {
            var r = this.get(0);
            e || r.opt.vol || 0 != r.player.getVolume() ? !e && r.player.getVolume() > 0 || e && r.opt.vol == e ? r.isMute ? jQuery(r).YTPUnmute() : jQuery(r).YTPMute() : (r.opt.vol = e, r.player.setVolume(r.opt.vol), r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e)) : jQuery(r).YTPUnmute()
        },
        mute: function() {
            var e = this.get(0);
            if (!e.isMute) {
                e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(0);
                var r = jQuery("#controlBar_" + e.id),
                    t = r.find(".mb_YTPMuteUnmute");
                t.html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                var a = jQuery.Event("YTPMuted");
                a.time = e.player.time, e.canTrigger && jQuery(e).trigger(a)
            }
        },
        unmute: function() {
            var e = this.get(0);
            if (e.isMute) {
                e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10);
                var r = jQuery("#controlBar_" + e.id),
                    t = r.find(".mb_YTPMuteUnmute");
                t.html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                var a = jQuery.Event("YTPUnmuted");
                a.time = e.player.time, e.canTrigger && jQuery(e).trigger(a)
            }
        },
        applyFilter: function(e, r) {
            var t = this.get(0);
            return t.filters[e].value = r, t.filtersEnabled && this.YTPEnableFilters(), this
        },
        applyFilters: function(e) {
            var r = this.get(0);
            return this.on("YTPReady", function() {
                for (var t in e) r.filters[t].value = e[t], jQuery(r).YTPApplyFilter(t, e[t]);
                jQuery(r).trigger("YTPFiltersApplied")
            }), this
        },
        toggleFilter: function(e, r) {
            var t = this.get(0);
            return t.filters[e].value = t.filters[e].value ? 0 : r, t.filtersEnabled && this.YTPEnableFilters(), this
        },
        disableFilters: function() {
            var e = this.get(0),
                r = jQuery(e.playerEl);
            return r.css("-webkit-filter", ""), r.css("filter", ""), e.filtersEnabled = !1, this
        },
        enableFilters: function() {
            var e = this.get(0),
                r = jQuery(e.playerEl),
                t = "";
            for (var a in e.filters) e.filters[a].value && (t += a.replace("_", "-") + "(" + e.filters[a].value + e.filters[a].unit + ") ");
            return r.css("-webkit-filter", t), r.css("filter", t), e.filtersEnabled = !0, this
        },
        toggleFilters: function(e) {
            var r = this.get(0);
            return r.filtersEnabled ? (jQuery(r).trigger("YTPDisableFilters"), jQuery(r).YTPDisableFilters()) : (jQuery(r).YTPEnableFilters(), jQuery(r).trigger("YTPEnableFilters")), "function" == typeof e && e(r.filtersEnabled), this
        },
        removeFilter: function(e, r) {
            "function" == typeof e && (r = e, e = null);
            var t = this.get(0);
            if (e) this.YTPApplyFilter(e, 0), "function" == typeof r && r(e);
            else
                for (var a in t.filters) this.YTPApplyFilter(a, 0), "function" == typeof r && r(a);
            return this
        },
        manageProgress: function() {
            var e = this.get(0),
                r = jQuery("#controlBar_" + e.id),
                t = r.find(".mb_YTPProgress"),
                a = r.find(".mb_YTPLoaded"),
                o = r.find(".mb_YTPseekbar"),
                l = t.outerWidth(),
                i = Math.floor(e.player.getCurrentTime()),
                n = Math.floor(e.player.getDuration()),
                u = i * l / n,
                s = 0,
                y = 100 * e.player.getVideoLoadedFraction();
            return a.css({
                left: s,
                width: y + "%"
            }), o.css({
                left: 0,
                width: u
            }), {
                totalTime: n,
                currentTime: i
            }
        },
        buildControls: function(YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                    playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                        1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                    }),
                    MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                        0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                    }),
                    volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                        display: "inline-block"
                    });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                    vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                        window.open(vURL, "viewOnYT")
                    }),
                    onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                        jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                    }),
                    progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                        timeBar.css({
                            width: e.clientX - timeBar.offset().left
                        }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        });
                        var r = Math.floor(YTPlayer.player.getDuration());
                        YTPlayer["goto"] = timeBar.outerWidth() * r / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        })
                    }),
                    loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                    timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function(e) {
                        0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                    }
                })
            }
        },
        checkForState: function(YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 1e3;
            return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function() {
                var prog = jQuery(YTPlayer).YTPManageProgress(),
                    $YTPlayer = jQuery(YTPlayer),
                    data = YTPlayer.opt,
                    startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 0,
                    stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.player.time != prog.currentTime) {
                    var YTPevent = jQuery.Event("YTPTime");
                    YTPevent.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPevent)
                }
                if (YTPlayer.player.time = prog.currentTime, 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && YTPlayer.controlBar.find(".mb_YTPTime").html(prog.totalTime ? jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime) : "-- : -- / -- : --"), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 3) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function() {
                            YTPlayer.isEnded = !1
                        }, 2e3), YTPlayer.isPlayList) {
                        clearInterval(YTPlayer.getState);
                        var YTPEnd = jQuery.Event("YTPEnd");
                        return YTPEnd.time = YTPlayer.player.time, void jQuery(YTPlayer).trigger(YTPEnd)
                    }
                    data.loop ? YTPlayer.player.seekTo(startAt, !0) : (YTPlayer.player.pauseVideo(), YTPlayer.wrapper.CSSAnimate({
                        opacity: 0
                    }, 1e3, function() {
                        var e = jQuery.Event("YTPEnd");
                        if (e.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), !YTPlayer.isBackground) {
                            var r = YTPlayer.videoData.thumb_max || YTPlayer.videoData.thumb_high || YTPlayer.videoData.thumb_medium;
                            YTPlayer.opt.containment.css({
                                background: "rgba(0,0,0,0.5) url(" + r + ") center center",
                                backgroundSize: "cover"
                            })
                        }
                    }))
                }
            }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
        },
        checkForStart: function(e) {
            var r = jQuery(e);
            if (!jQuery.contains(document, e)) return void jQuery(e).YTPPlayerDestroy();
            if (jQuery.browser.chrome && (e.opt.quality = "default"), e.player.pauseVideo(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
                var t = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                e.overlay.addClass(e.isRetina ? t + " retina" : t)
            } else e.overlay.removeClass(function(e, r) {
                var t = r.split(" "),
                    a = [];
                return jQuery.each(t, function(e, r) {
                    /raster.*/.test(r) && a.push(r)
                }), a.push("retina"), a.join(" ")
            });
            e.checkForStartAt = setInterval(function() {
                jQuery(e).YTPMute();
                var t = e.opt.startAt ? e.opt.startAt : 1,
                    a = e.player.getVideoLoadedFraction() > t / e.player.getDuration();
                if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= t && a) {
                    clearInterval(e.checkForStartAt), e.isReady = !0, "function" == typeof e.opt.onReady && e.opt.onReady(e);
                    var o = jQuery.Event("YTPReady");
                    jQuery(e).trigger(o), e.player.pauseVideo(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay ? (r.YTPPlay(), r.css("background-image", "none"), jQuery(e.playerEl).CSSAnimate({
                        opacity: 1
                    }, 1e3), e.wrapper.CSSAnimate({
                        opacity: e.isAlone ? 1 : e.opt.opacity
                    }, 1e3)) : e.player.pauseVideo(), e.isPlayer && !e.opt.autoPlay && (e.loading.html("Ready"), setTimeout(function() {
                        e.loading.fadeOut()
                    }, 100)), e.controlBar && e.controlBar.slideDown(1e3)
                } else t >= 0 && e.player.seekTo(t, !0)
            }, 1e3)
        },
        formatTime: function(e) {
            var r = Math.floor(e / 60),
                t = Math.floor(e - 60 * r);
            return (9 >= r ? "0" + r : r) + " : " + (9 >= t ? "0" + t : t)
        }
    }, jQuery.fn.toggleVolume = function() {
        var e = this.get(0);
        if (e) return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1)
    }, jQuery.fn.optimizeDisplay = function() {
        var e = this.get(0),
            r = e.opt,
            t = jQuery(e.playerEl),
            a = {},
            o = e.wrapper;
        a.width = o.outerWidth(), a.height = o.outerHeight();
        var l = 24,
            i = 100,
            n = {};
        r.optimizeDisplay ? (n.width = a.width + a.width * l / 100, n.height = Math.ceil("16/9" == r.ratio ? 9 * a.width / 16 : 3 * a.width / 4), n.marginTop = -((n.height - a.height) / 2), n.marginLeft = -(a.width * (l / 2) / 100), n.height < a.height && (n.height = a.height + a.height * l / 100, n.width = Math.floor("16/9" == r.ratio ? 16 * a.height / 9 : 4 * a.height / 3), n.marginTop = -(a.height * (l / 2) / 100), n.marginLeft = -((n.width - a.width) / 2)), n.width += i, n.height += i, n.marginTop -= i / 2, n.marginLeft -= i / 2) : (n.width = "100%", n.height = "100%", n.marginTop = 0, n.marginLeft = 0), t.css({
            width: n.width,
            height: n.height,
            marginTop: n.marginTop,
            marginLeft: n.marginLeft
        })
    }, jQuery.shuffle = function(e) {
        for (var r = e.slice(), t = r.length, a = t; a--;) {
            var o = parseInt(Math.random() * t),
                l = r[a];
            r[a] = r[o], r[o] = l
        }
        return r
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp);