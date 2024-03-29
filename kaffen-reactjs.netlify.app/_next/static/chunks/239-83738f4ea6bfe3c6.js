(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [239], {
        1014: function(e, t, i) {
            "use strict";
            let o, n, s;
            i.r(t), i.d(t, {
                jarallax: function() {
                    return O
                },
                jarallaxElement: function() {
                    return L
                },
                jarallaxVideo: function() {
                    return k
                }
            });
            var a, r = {
                    type: "scroll",
                    speed: .5,
                    containerClass: "jarallax-container",
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: !1,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null,
                    videoClass: "jarallax-video",
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoLoop: !0,
                    videoPlayOnlyVisible: !0,
                    videoLazyLoading: !0,
                    disableVideo: !1,
                    onVideoInsert: null,
                    onVideoWorkerInit: null
                },
                l = "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {};
            let {
                navigator: p
            } = l, u = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent);

            function d() {
                o = l.innerWidth || document.documentElement.clientWidth, u ? (!s && document.body && ((s = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(s)), n = (s ? s.clientHeight : 0) || l.innerHeight || document.documentElement.clientHeight) : n = l.innerHeight || document.documentElement.clientHeight
            }

            function c() {
                return {
                    width: o,
                    height: n
                }
            }
            d(), l.addEventListener("resize", d), l.addEventListener("orientationchange", d), l.addEventListener("load", d), a = () => {
                d()
            }, "complete" === document.readyState || "interactive" === document.readyState ? a() : document.addEventListener("DOMContentLoaded", a, {
                capture: !0,
                once: !0,
                passive: !0
            });
            let h = [];

            function m() {
                if (!h.length) return;
                let {
                    width: e,
                    height: t
                } = c();
                h.forEach((i, o) => {
                    let {
                        instance: n,
                        oldData: s
                    } = i;
                    if (!n.isVisible()) return;
                    let a = n.$item.getBoundingClientRect(),
                        r = {
                            width: a.width,
                            height: a.height,
                            top: a.top,
                            bottom: a.bottom,
                            wndW: e,
                            wndH: t
                        },
                        l = !s || s.wndW !== r.wndW || s.wndH !== r.wndH || s.width !== r.width || s.height !== r.height,
                        p = l || !s || s.top !== r.top || s.bottom !== r.bottom;
                    h[o].oldData = r, l && n.onResize(), p && n.onScroll()
                }), l.requestAnimationFrame(m)
            }
            let f = new l.IntersectionObserver(e => {
                    e.forEach(e => {
                        e.target.jarallax.isElementInViewport = e.isIntersecting
                    })
                }, {
                    rootMargin: "50px"
                }),
                {
                    navigator: y
                } = l,
                g = 0;
            class v {
                constructor(e, t) {
                    let i = this;
                    i.instanceID = g, g += 1, i.$item = e, i.defaults = { ...r
                    };
                    let o = i.$item.dataset || {},
                        n = {};
                    if (Object.keys(o).forEach(e => {
                            let t = e.substr(0, 1).toLowerCase() + e.substr(1);
                            t && void 0 !== i.defaults[t] && (n[t] = o[e])
                        }), i.options = i.extend({}, i.defaults, n, t), i.pureOptions = i.extend({}, i.options), Object.keys(i.options).forEach(e => {
                            "true" === i.options[e] ? i.options[e] = !0 : "false" === i.options[e] && (i.options[e] = !1)
                        }), i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed))), "string" == typeof i.options.disableParallax && (i.options.disableParallax = new RegExp(i.options.disableParallax)), i.options.disableParallax instanceof RegExp) {
                        let e = i.options.disableParallax;
                        i.options.disableParallax = () => e.test(y.userAgent)
                    }
                    if ("function" != typeof i.options.disableParallax && (i.options.disableParallax = () => !1), "string" == typeof i.options.disableVideo && (i.options.disableVideo = new RegExp(i.options.disableVideo)), i.options.disableVideo instanceof RegExp) {
                        let e = i.options.disableVideo;
                        i.options.disableVideo = () => e.test(y.userAgent)
                    }
                    "function" != typeof i.options.disableVideo && (i.options.disableVideo = () => !1);
                    let s = i.options.elementInViewport;
                    s && "object" == typeof s && void 0 !== s.length && ([s] = s), s instanceof Element || (s = null), i.options.elementInViewport = s, i.image = {
                        src: i.options.imgSrc || null,
                        $container: null,
                        useImgTag: !1,
                        position: "fixed"
                    }, i.initImg() && i.canInitParallax() && i.init()
                }
                css(e, t) {
                    return "string" == typeof t ? l.getComputedStyle(e).getPropertyValue(t) : (Object.keys(t).forEach(i => {
                        e.style[i] = t[i]
                    }), e)
                }
                extend(e, ...t) {
                    return function(e, ...t) {
                        return e = e || {}, Object.keys(t).forEach(i => {
                            t[i] && Object.keys(t[i]).forEach(o => {
                                e[o] = t[i][o]
                            })
                        }), e
                    }(e, ...t)
                }
                getWindowData() {
                    let {
                        width: e,
                        height: t
                    } = c();
                    return {
                        width: e,
                        height: t,
                        y: document.documentElement.scrollTop
                    }
                }
                initImg() {
                    let e = this.options.imgElement;
                    return e && "string" == typeof e && (e = this.$item.querySelector(e)), e instanceof Element || (this.options.imgSrc ? (e = new Image).src = this.options.imgSrc : e = null), e && (this.options.keepImg ? this.image.$item = e.cloneNode(!0) : (this.image.$item = e, this.image.$itemParent = e.parentNode), this.image.useImgTag = !0), !!this.image.$item || (null === this.image.src && (this.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", this.image.bgImage = this.css(this.$item, "background-image")), !(!this.image.bgImage || "none" === this.image.bgImage))
                }
                canInitParallax() {
                    return !this.options.disableParallax()
                }
                init() {
                    let e = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        },
                        t = {
                            pointerEvents: "none",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden"
                        };
                    if (!this.options.keepImg) {
                        let e = this.$item.getAttribute("style");
                        if (e && this.$item.setAttribute("data-jarallax-original-styles", e), this.image.useImgTag) {
                            let e = this.image.$item.getAttribute("style");
                            e && this.image.$item.setAttribute("data-jarallax-original-styles", e)
                        }
                    }
                    if ("static" === this.css(this.$item, "position") && this.css(this.$item, {
                            position: "relative"
                        }), "auto" === this.css(this.$item, "z-index") && this.css(this.$item, {
                            zIndex: 0
                        }), this.image.$container = document.createElement("div"), this.css(this.image.$container, e), this.css(this.image.$container, {
                            "z-index": this.options.zIndex
                        }), "fixed" === this.image.position && this.css(this.image.$container, {
                            "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                        }), this.image.$container.setAttribute("id", `jarallax-container-${this.instanceID}`), this.options.containerClass && this.image.$container.setAttribute("class", this.options.containerClass), this.$item.appendChild(this.image.$container), this.image.useImgTag ? t = this.extend({
                            "object-fit": this.options.imgSize,
                            "object-position": this.options.imgPosition,
                            "max-width": "none"
                        }, e, t) : (this.image.$item = document.createElement("div"), this.image.src && (t = this.extend({
                            "background-position": this.options.imgPosition,
                            "background-size": this.options.imgSize,
                            "background-repeat": this.options.imgRepeat,
                            "background-image": this.image.bgImage || `url("${this.image.src}")`
                        }, e, t))), ("opacity" === this.options.type || "scale" === this.options.type || "scale-opacity" === this.options.type || 1 === this.options.speed) && (this.image.position = "absolute"), "fixed" === this.image.position) {
                        let e = (function(e) {
                            let t = [];
                            for (; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
                            return t
                        })(this.$item).filter(e => {
                            let t = l.getComputedStyle(e),
                                i = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                            return i && "none" !== i || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                        });
                        this.image.position = e.length ? "absolute" : "fixed"
                    }
                    t.position = this.image.position, this.css(this.image.$item, t), this.image.$container.appendChild(this.image.$item), this.onResize(), this.onScroll(!0), this.options.onInit && this.options.onInit.call(this), "none" !== this.css(this.$item, "background-image") && this.css(this.$item, {
                        "background-image": "none"
                    }), h.push({
                        instance: this
                    }), 1 === h.length && l.requestAnimationFrame(m), f.observe(this.options.elementInViewport || this.$item)
                }
                destroy() {
                    var e;
                    e = this, h.forEach((t, i) => {
                        t.instance.instanceID === e.instanceID && h.splice(i, 1)
                    }), f.unobserve(e.options.elementInViewport || e.$item);
                    let t = this.$item.getAttribute("data-jarallax-original-styles");
                    if (this.$item.removeAttribute("data-jarallax-original-styles"), t ? this.$item.setAttribute("style", t) : this.$item.removeAttribute("style"), this.image.useImgTag) {
                        let e = this.image.$item.getAttribute("data-jarallax-original-styles");
                        this.image.$item.removeAttribute("data-jarallax-original-styles"), e ? this.image.$item.setAttribute("style", t) : this.image.$item.removeAttribute("style"), this.image.$itemParent && this.image.$itemParent.appendChild(this.image.$item)
                    }
                    this.image.$container && this.image.$container.parentNode.removeChild(this.image.$container), this.options.onDestroy && this.options.onDestroy.call(this), delete this.$item.jarallax
                }
                coverImage() {
                    let {
                        height: e
                    } = c(), t = this.image.$container.getBoundingClientRect(), i = t.height, {
                        speed: o
                    } = this.options, n = "scroll" === this.options.type || "scroll-opacity" === this.options.type, s = 0, a = i, r = 0;
                    return n && (o < 0 ? (s = o * Math.max(i, e), e < i && (s -= o * (i - e))) : s = o * (i + e), o > 1 ? a = Math.abs(s - e) : o < 0 ? a = s / o + Math.abs(s) : a += (e - i) * (1 - o), s /= 2), this.parallaxScrollDistance = s, r = n ? (e - a) / 2 : (i - a) / 2, this.css(this.image.$item, {
                        height: `${a}px`,
                        marginTop: `${r}px`,
                        left: "fixed" === this.image.position ? `${t.left}px` : "0",
                        width: `${t.width}px`
                    }), this.options.onCoverImage && this.options.onCoverImage.call(this), {
                        image: {
                            height: a,
                            marginTop: r
                        },
                        container: t
                    }
                }
                isVisible() {
                    return this.isElementInViewport || !1
                }
                onScroll(e) {
                    if (!e && !this.isVisible()) return;
                    let {
                        height: t
                    } = c(), i = this.$item.getBoundingClientRect(), o = i.top, n = i.height, s = {}, a = Math.max(0, n + o), r = Math.max(0, -o), l = Math.max(0, o + n - t), p = Math.max(0, n - (o + n - t)), u = 1 - 2 * ((t - o) / (t + n)), d = 1;
                    if (n < t ? d = 1 - (r || l) / n : a <= t ? d = a / t : p <= t && (d = p / t), ("opacity" === this.options.type || "scale-opacity" === this.options.type || "scroll-opacity" === this.options.type) && (s.transform = "translate3d(0,0,0)", s.opacity = d), "scale" === this.options.type || "scale-opacity" === this.options.type) {
                        let e = 1;
                        this.options.speed < 0 ? e -= this.options.speed * d : e += this.options.speed * (1 - d), s.transform = `scale(${e}) translate3d(0,0,0)`
                    }
                    if ("scroll" === this.options.type || "scroll-opacity" === this.options.type) {
                        let e = this.parallaxScrollDistance * u;
                        "absolute" === this.image.position && (e -= o), s.transform = `translate3d(0,${e}px,0)`
                    }
                    this.css(this.image.$item, s), this.options.onScroll && this.options.onScroll.call(this, {
                        section: i,
                        beforeTop: Math.max(0, o),
                        beforeTopEnd: a,
                        afterTop: r,
                        beforeBottom: l,
                        beforeBottomEnd: p,
                        afterBottom: Math.max(0, -o + t - n),
                        visiblePercent: d,
                        fromViewportCenter: u
                    })
                }
                onResize() {
                    this.coverImage()
                }
            }
            let b = function(e, t, ...i) {
                let o;
                ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
                let n = e.length,
                    s = 0;
                for (; s < n; s += 1)
                    if ("object" == typeof t || void 0 === t ? e[s].jarallax || (e[s].jarallax = new v(e[s], t)) : e[s].jarallax && (o = e[s].jarallax[t].apply(e[s].jarallax, i)), void 0 !== o) return o;
                return e
            };
            b.constructor = v;
            var $ = "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {};

            function I() {
                this.doneCallbacks = [], this.failCallbacks = []
            }
            I.prototype = {
                execute(e, t) {
                    let i = e.length;
                    for (t = Array.prototype.slice.call(t); i;) e[i -= 1].apply(null, t)
                },
                resolve(...e) {
                    this.execute(this.doneCallbacks, e)
                },
                reject(...e) {
                    this.execute(this.failCallbacks, e)
                },
                done(e) {
                    this.doneCallbacks.push(e)
                },
                fail(e) {
                    this.failCallbacks.push(e)
                }
            };
            var A = {
                autoplay: !1,
                loop: !1,
                mute: !1,
                volume: 100,
                showControls: !0,
                accessibilityHidden: !1,
                startTime: 0,
                endTime: 0
            };
            let x = 0,
                E = 0,
                w = 0,
                T = 0,
                V = 0,
                C = new I,
                P = new I;
            class j {
                constructor(e, t) {
                    this.url = e, this.options_default = { ...A
                    }, this.options = function(e, ...t) {
                        return e = e || {}, Object.keys(t).forEach(i => {
                            t[i] && Object.keys(t[i]).forEach(o => {
                                e[o] = t[i][o]
                            })
                        }), e
                    }({}, this.options_default, t), this.videoID = this.parseURL(e), this.videoID && (this.ID = x, x += 1, this.loadAPI(), this.init())
                }
                parseURL(e) {
                    let t = function(e) {
                            let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=)([^#\&\?]*).*/);
                            return !!t && 11 === t[1].length && t[1]
                        }(e),
                        i = function(e) {
                            let t = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
                            return !!t && !!t[3] && t[3]
                        }(e),
                        o = function(e) {
                            let t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),
                                i = {},
                                o = 0;
                            return t.forEach(e => {
                                let t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                                t && t[1] && t[2] && (i["ogv" === t[1] ? "ogg" : t[1]] = t[2], o = 1)
                            }), !!o && i
                        }(e);
                    return t ? (this.type = "youtube", t) : i ? (this.type = "vimeo", i) : !!o && (this.type = "local", o)
                }
                isValid() {
                    return !!this.videoID
                }
                on(e, t) {
                    this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
                }
                off(e, t) {
                    this.userEventsList && this.userEventsList[e] && (t ? this.userEventsList[e].forEach((i, o) => {
                        i === t && (this.userEventsList[e][o] = !1)
                    }) : delete this.userEventsList[e])
                }
                fire(e, ...t) {
                    this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach(e => {
                        e && e.apply(this, t)
                    })
                }
                play(e) {
                    let t = this;
                    t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), $.YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(e => {
                        e && t.player.play()
                    })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.paused && t.player.play()))
                }
                pause() {
                    let e = this;
                    e.player && ("youtube" === e.type && e.player.pauseVideo && $.YT.PlayerState.PLAYING === e.player.getPlayerState() && e.player.pauseVideo(), "vimeo" === e.type && e.player.getPaused().then(t => {
                        t || e.player.pause()
                    }), "local" !== e.type || e.player.paused || e.player.pause())
                }
                mute() {
                    this.player && ("youtube" === this.type && this.player.mute && this.player.mute(), "vimeo" === this.type && this.player.setVolume && this.setVolume(0), "local" === this.type && (this.$video.muted = !0))
                }
                unmute() {
                    this.player && ("youtube" === this.type && this.player.mute && this.player.unMute(), "vimeo" === this.type && this.player.setVolume && this.setVolume(this.options.volume || 100), "local" === this.type && (this.$video.muted = !1))
                }
                setVolume(e = !1) {
                    this.player && "number" == typeof e && ("youtube" === this.type && this.player.setVolume && this.player.setVolume(e), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(e / 100), "local" === this.type && (this.$video.volume = e / 100))
                }
                getVolume(e) {
                    if (!this.player) {
                        e(!1);
                        return
                    }
                    "youtube" === this.type && this.player.getVolume && e(this.player.getVolume()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(t => {
                        e(100 * t)
                    }), "local" === this.type && e(100 * this.$video.volume)
                }
                getMuted(e) {
                    if (!this.player) {
                        e(null);
                        return
                    }
                    "youtube" === this.type && this.player.isMuted && e(this.player.isMuted()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(t => {
                        e(!!t)
                    }), "local" === this.type && e(this.$video.muted)
                }
                getImageURL(e) {
                    let t = this;
                    if (t.videoImage) {
                        e(t.videoImage);
                        return
                    }
                    if ("youtube" === t.type) {
                        let i = ["maxresdefault", "sddefault", "hqdefault", "0"],
                            o = 0,
                            n = new Image;
                        n.onload = function() {
                            120 !== (this.naturalWidth || this.width) || o === i.length - 1 ? (t.videoImage = `https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`, e(t.videoImage)) : (o += 1, this.src = `https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`)
                        }, n.src = `https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`
                    }
                    if ("vimeo" === t.type) {
                        let i = $.innerWidth || 1920;
                        $.devicePixelRatio && (i *= $.devicePixelRatio), i = Math.min(i, 1920);
                        let o = new XMLHttpRequest;
                        o.open("GET", `https://vimeo.com/api/oembed.json?url=${t.url}&width=${i}`, !0), o.onreadystatechange = function() {
                            if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                                let i = JSON.parse(this.responseText);
                                i.thumbnail_url && (t.videoImage = i.thumbnail_url, e(t.videoImage))
                            }
                        }, o.send(), o = null
                    }
                }
                getIframe(e) {
                    this.getVideo(e)
                }
                getVideo(e) {
                    let t = this;
                    if (t.$video) {
                        e(t.$video);
                        return
                    }
                    t.onAPIready(() => {
                        let i;
                        if (t.$video || ((i = document.createElement("div")).style.display = "none"), "youtube" === t.type) {
                            let e, o;
                            t.playerOptions = {
                                host: "https://www.youtube-nocookie.com",
                                videoId: t.videoID,
                                playerVars: {
                                    autohide: 1,
                                    rel: 0,
                                    autoplay: 0,
                                    playsinline: 1
                                }
                            }, t.options.showControls || (t.playerOptions.playerVars.iv_load_policy = 3, t.playerOptions.playerVars.modestbranding = 1, t.playerOptions.playerVars.controls = 0, t.playerOptions.playerVars.showinfo = 0, t.playerOptions.playerVars.disablekb = 1), t.playerOptions.events = {
                                onReady(e) {
                                    t.options.mute ? e.target.mute() : "number" == typeof t.options.volume && e.target.setVolume(t.options.volume), t.options.autoplay && t.play(t.options.startTime), t.fire("ready", e), t.options.loop && !t.options.endTime && (t.options.endTime = t.player.getDuration() - .1), setInterval(() => {
                                        t.getVolume(i => {
                                            t.options.volume !== i && (t.options.volume = i, t.fire("volumechange", e))
                                        })
                                    }, 150)
                                },
                                onStateChange(i) {
                                    t.options.loop && i.data === $.YT.PlayerState.ENDED && t.play(t.options.startTime), e || i.data !== $.YT.PlayerState.PLAYING || (e = 1, t.fire("started", i)), i.data === $.YT.PlayerState.PLAYING && t.fire("play", i), i.data === $.YT.PlayerState.PAUSED && t.fire("pause", i), i.data === $.YT.PlayerState.ENDED && t.fire("ended", i), i.data === $.YT.PlayerState.PLAYING ? o = setInterval(() => {
                                        t.fire("timeupdate", i), t.options.endTime && t.player.getCurrentTime() >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                                    }, 150) : clearInterval(o)
                                },
                                onError(e) {
                                    t.fire("error", e)
                                }
                            };
                            let n = !t.$video;
                            if (n) {
                                let e = document.createElement("div");
                                e.setAttribute("id", t.playerID), i.appendChild(e), document.body.appendChild(i)
                            }
                            t.player = t.player || new $.YT.Player(t.playerID, t.playerOptions), n && (t.$video = document.getElementById(t.playerID), t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"), t.$video.setAttribute("aria-hidden", "true")), t.videoWidth = parseInt(t.$video.getAttribute("width"), 10) || 1280, t.videoHeight = parseInt(t.$video.getAttribute("height"), 10) || 720)
                        }
                        if ("vimeo" === t.type) {
                            let e;
                            if (t.playerOptions = {
                                    dnt: 1,
                                    id: t.videoID,
                                    autopause: 0,
                                    transparent: 0,
                                    autoplay: t.options.autoplay ? 1 : 0,
                                    loop: t.options.loop ? 1 : 0,
                                    muted: t.options.mute || 0 === t.options.volume ? 1 : 0
                                }, t.options.showControls || (t.playerOptions.controls = 0), !t.options.showControls && t.options.loop && t.options.autoplay && (t.playerOptions.background = 1), !t.$video) {
                                let e = "";
                                Object.keys(t.playerOptions).forEach(i => {
                                    "" !== e && (e += "&"), e += `${i}=${encodeURIComponent(t.playerOptions[i])}`
                                }), t.$video = document.createElement("iframe"), t.$video.setAttribute("id", t.playerID), t.$video.setAttribute("src", `https://player.vimeo.com/video/${t.videoID}?${e}`), t.$video.setAttribute("frameborder", "0"), t.$video.setAttribute("mozallowfullscreen", ""), t.$video.setAttribute("allowfullscreen", ""), t.$video.setAttribute("title", "Vimeo video player"), t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"), t.$video.setAttribute("aria-hidden", "true")), i.appendChild(t.$video), document.body.appendChild(i)
                            }
                            t.player = t.player || new $.Vimeo.Player(t.$video, t.playerOptions), t.options.mute || "number" != typeof t.options.volume || t.setVolume(t.options.volume), t.options.startTime && t.options.autoplay && t.player.setCurrentTime(t.options.startTime), t.player.getVideoWidth().then(e => {
                                t.videoWidth = e || 1280
                            }), t.player.getVideoHeight().then(e => {
                                t.videoHeight = e || 720
                            }), t.player.on("timeupdate", i => {
                                e || (t.fire("started", i), e = 1), t.fire("timeupdate", i), t.options.endTime && t.options.endTime && i.seconds >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                            }), t.player.on("play", e => {
                                t.fire("play", e), t.options.startTime && 0 === e.seconds && t.play(t.options.startTime)
                            }), t.player.on("pause", e => {
                                t.fire("pause", e)
                            }), t.player.on("ended", e => {
                                t.fire("ended", e)
                            }), t.player.on("loaded", e => {
                                t.fire("ready", e)
                            }), t.player.on("volumechange", e => {
                                t.getVolume(e => {
                                    t.options.volume = e
                                }), t.fire("volumechange", e)
                            }), t.player.on("error", e => {
                                t.fire("error", e)
                            })
                        }
                        if ("local" === t.type) {
                            let e;
                            t.$video || (t.$video = document.createElement("video"), t.player = t.$video, t.options.showControls && (t.$video.controls = !0), "number" == typeof t.options.volume && t.setVolume(t.options.volume), t.options.mute && t.mute(), t.options.loop && (t.$video.loop = !0), t.$video.setAttribute("playsinline", ""), t.$video.setAttribute("webkit-playsinline", ""), t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"), t.$video.setAttribute("aria-hidden", "true")), t.$video.setAttribute("id", t.playerID), i.appendChild(t.$video), document.body.appendChild(i), Object.keys(t.videoID).forEach(e => {
                                ! function(e, t, i) {
                                    let o = document.createElement("source");
                                    o.src = t, o.type = i, e.appendChild(o)
                                }(t.$video, t.videoID[e], `video/${e}`)
                            })), t.player.addEventListener("playing", i => {
                                e || t.fire("started", i), e = 1
                            }), t.player.addEventListener("timeupdate", function(e) {
                                t.fire("timeupdate", e), t.options.endTime && t.options.endTime && this.currentTime >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                            }), t.player.addEventListener("play", e => {
                                t.fire("play", e)
                            }), t.player.addEventListener("pause", e => {
                                t.fire("pause", e)
                            }), t.player.addEventListener("ended", e => {
                                t.fire("ended", e)
                            }), t.player.addEventListener("loadedmetadata", function() {
                                t.videoWidth = this.videoWidth || 1280, t.videoHeight = this.videoHeight || 720, t.fire("ready"), t.options.autoplay && t.play(t.options.startTime)
                            }), t.player.addEventListener("volumechange", e => {
                                t.getVolume(e => {
                                    t.options.volume = e
                                }), t.fire("volumechange", e)
                            }), t.player.addEventListener("error", e => {
                                t.fire("error", e)
                            })
                        }
                        e(t.$video)
                    })
                }
                init() {
                    this.playerID = `VideoWorker-${this.ID}`
                }
                loadAPI() {
                    if (E && w) return;
                    let e = "";
                    if ("youtube" !== this.type || E || (E = 1, e = "https://www.youtube.com/iframe_api"), "vimeo" === this.type && !w) {
                        if (w = 1, void 0 !== $.Vimeo) return;
                        e = "https://player.vimeo.com/api/player.js"
                    }
                    if (!e) return;
                    let t = document.createElement("script"),
                        i = document.getElementsByTagName("head")[0];
                    t.src = e, i.appendChild(t)
                }
                onAPIready(e) {
                    if ("youtube" === this.type && (void 0 !== $.YT && 0 !== $.YT.loaded || T ? "object" == typeof $.YT && 1 === $.YT.loaded ? e() : C.done(() => {
                            e()
                        }) : (T = 1, $.onYouTubeIframeAPIReady = function() {
                            $.onYouTubeIframeAPIReady = null, C.resolve("done"), e()
                        })), "vimeo" === this.type) {
                        if (void 0 !== $.Vimeo || V) void 0 !== $.Vimeo ? e() : P.done(() => {
                            e()
                        });
                        else {
                            V = 1;
                            let t = setInterval(() => {
                                void 0 !== $.Vimeo && (clearInterval(t), P.resolve("done"), e())
                            }, 20)
                        }
                    }
                    "local" === this.type && e()
                }
            }
            let O = b,
                k = function() {
                    return function(e = l.jarallax) {
                        if (void 0 === e) return;
                        let t = e.constructor,
                            i = t.prototype.onScroll;
                        t.prototype.onScroll = function() {
                            let e = this;
                            i.apply(e);
                            let t = !e.isVideoInserted && e.video && (!e.options.videoLazyLoading || e.isElementInViewport) && !e.options.disableVideo();
                            t && (e.isVideoInserted = !0, e.video.getVideo(t => {
                                let i = t.parentNode;
                                e.css(t, {
                                    position: e.image.position,
                                    top: "0px",
                                    left: "0px",
                                    right: "0px",
                                    bottom: "0px",
                                    width: "100%",
                                    height: "100%",
                                    maxWidth: "none",
                                    maxHeight: "none",
                                    pointerEvents: "none",
                                    transformStyle: "preserve-3d",
                                    backfaceVisibility: "hidden",
                                    margin: 0,
                                    zIndex: -1
                                }), e.$video = t, "local" === e.video.type && (e.image.src ? e.$video.setAttribute("poster", e.image.src) : e.image.$item && "IMG" === e.image.$item.tagName && e.image.$item.src && e.$video.setAttribute("poster", e.image.$item.src)), e.options.videoClass && e.$video.setAttribute("class", `${e.options.videoClass} ${e.options.videoClass}-${e.video.type}`), e.image.$container.appendChild(t), i.parentNode.removeChild(i), e.options.onVideoInsert && e.options.onVideoInsert.call(e)
                            }))
                        };
                        let o = t.prototype.coverImage;
                        t.prototype.coverImage = function() {
                            let e = o.apply(this),
                                t = !!this.image.$item && this.image.$item.nodeName;
                            if (e && this.video && t && ("IFRAME" === t || "VIDEO" === t)) {
                                let i = e.image.height,
                                    o = i * this.image.width / this.image.height,
                                    n = (e.container.width - o) / 2,
                                    s = e.image.marginTop;
                                e.container.width > o && (i = (o = e.container.width) * this.image.height / this.image.width, n = 0, s += (e.image.height - i) / 2), "IFRAME" === t && (i += 400, s -= 200), this.css(this.$video, {
                                    width: `${o}px`,
                                    marginLeft: `${n}px`,
                                    height: `${i}px`,
                                    marginTop: `${s}px`
                                })
                            }
                            return e
                        };
                        let n = t.prototype.initImg;
                        t.prototype.initImg = function() {
                            let e = n.apply(this);
                            return (this.options.videoSrc || (this.options.videoSrc = this.$item.getAttribute("data-jarallax-video") || null), this.options.videoSrc) ? (this.defaultInitImgResult = e, !0) : e
                        };
                        let s = t.prototype.canInitParallax;
                        t.prototype.canInitParallax = function() {
                            let e = this,
                                t = s.apply(e);
                            if (!e.options.videoSrc) return t;
                            let i = new j(e.options.videoSrc, {
                                autoplay: !0,
                                loop: e.options.videoLoop,
                                showControls: !1,
                                accessibilityHidden: !0,
                                startTime: e.options.videoStartTime || 0,
                                endTime: e.options.videoEndTime || 0,
                                mute: !e.options.videoVolume,
                                volume: e.options.videoVolume || 0
                            });

                            function o() {
                                e.image.$default_item && (e.image.$item = e.image.$default_item, e.image.$item.style.display = "block", e.coverImage(), e.onScroll())
                            }
                            if (e.options.onVideoWorkerInit && e.options.onVideoWorkerInit.call(e, i), i.isValid()) {
                                if (this.options.disableParallax() && (t = !0, e.image.position = "absolute", e.options.type = "scroll", e.options.speed = 1), t) {
                                    if (i.on("ready", () => {
                                            if (e.options.videoPlayOnlyVisible) {
                                                let t = e.onScroll;
                                                e.onScroll = function() {
                                                    t.apply(e), e.videoError || !e.options.videoLoop && (e.options.videoLoop || e.videoEnded) || (e.isVisible() ? i.play() : i.pause())
                                                }
                                            } else i.play()
                                        }), i.on("started", () => {
                                            e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.video.videoWidth || 1280, e.image.height = e.video.videoHeight || 720, e.coverImage(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
                                        }), i.on("ended", () => {
                                            e.videoEnded = !0, e.options.videoLoop || o()
                                        }), i.on("error", () => {
                                            e.videoError = !0, o()
                                        }), e.video = i, !e.defaultInitImgResult && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "local" !== i.type)) return i.getImageURL(t => {
                                        e.image.bgImage = `url("${t}")`, e.init()
                                    }), !1
                                } else e.defaultInitImgResult || i.getImageURL(t => {
                                    let i = e.$item.getAttribute("style");
                                    i && e.$item.setAttribute("data-jarallax-original-styles", i), e.css(e.$item, {
                                        "background-image": `url("${t}")`,
                                        "background-position": "center",
                                        "background-size": "cover"
                                    })
                                })
                            }
                            return t
                        };
                        let a = t.prototype.destroy;
                        t.prototype.destroy = function() {
                            this.image.$default_item && (this.image.$item = this.image.$default_item, delete this.image.$default_item), a.apply(this)
                        }
                    }(O)
                },
                L = function() {
                    return function(e = l.jarallax) {
                        if (console.warn("Jarallax Element extension is DEPRECATED, please, avoid using it. We recommend you look at something like `lax.js` library <https://github.com/alexfoxy/lax.js>. It is much more powerful and has a less code (in cases when you don't want to add parallax backgrounds)."), void 0 === e) return;
                        let t = e.constructor;
                        ["initImg", "canInitParallax", "init", "destroy", "coverImage", "isVisible", "onScroll", "onResize"].forEach(e => {
                            let i = t.prototype[e];
                            t.prototype[e] = function(...t) {
                                if ("initImg" === e && null !== this.$item.getAttribute("data-jarallax-element") && (this.options.type = "element", this.pureOptions.speed = this.$item.getAttribute("data-jarallax-element") || "100"), "element" !== this.options.type) return i.apply(this, t);
                                switch (this.pureOptions.threshold = this.$item.getAttribute("data-threshold") || "", e) {
                                    case "init":
                                        {
                                            let e = `${this.pureOptions.speed}`.split(" ");this.options.speed = this.pureOptions.speed || 0,
                                            this.options.speedY = e[0] ? parseFloat(e[0]) : 0,
                                            this.options.speedX = e[1] ? parseFloat(e[1]) : 0;
                                            let o = this.pureOptions.threshold.split(" ");this.options.thresholdY = o[0] ? parseFloat(o[0]) : null,
                                            this.options.thresholdX = o[1] ? parseFloat(o[1]) : null,
                                            i.apply(this, t);
                                            let n = this.$item.getAttribute("data-jarallax-original-styles");
                                            return n && this.$item.setAttribute("style", n),
                                            !0
                                        }
                                    case "onResize":
                                        {
                                            let e = this.css(this.$item, "transform");this.css(this.$item, {
                                                transform: ""
                                            });
                                            let t = this.$item.getBoundingClientRect();this.itemData = {
                                                width: t.width,
                                                height: t.height,
                                                y: t.top + this.getWindowData().y,
                                                x: t.left
                                            },
                                            this.css(this.$item, {
                                                transform: e
                                            });
                                            break
                                        }
                                    case "onScroll":
                                        {
                                            let e = this.getWindowData(),
                                                t = (e.y + e.height / 2 - this.itemData.y - this.itemData.height / 2) / (e.height / 2),
                                                i = t * this.options.speedY,
                                                o = t * this.options.speedX,
                                                n = i,
                                                s = o;null !== this.options.thresholdY && i > this.options.thresholdY && (n = 0),
                                            null !== this.options.thresholdX && o > this.options.thresholdX && (s = 0),
                                            this.css(this.$item, {
                                                transform: `translate3d(${s}px,${n}px,0)`
                                            });
                                            break
                                        }
                                    case "initImg":
                                    case "isVisible":
                                    case "coverImage":
                                        return !0
                                }
                                return i.apply(this, t)
                            }
                        })
                    }(O)
                }
        },
        3991: function(e, t) {
            "use strict";
            var i, o;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var i in t) Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: t[i]
                    })
                }(t, {
                    PrefetchKind: function() {
                        return i
                    },
                    ACTION_REFRESH: function() {
                        return n
                    },
                    ACTION_NAVIGATE: function() {
                        return s
                    },
                    ACTION_RESTORE: function() {
                        return a
                    },
                    ACTION_SERVER_PATCH: function() {
                        return r
                    },
                    ACTION_PREFETCH: function() {
                        return l
                    },
                    ACTION_FAST_REFRESH: function() {
                        return p
                    },
                    ACTION_SERVER_ACTION: function() {
                        return u
                    }
                });
            let n = "refresh",
                s = "navigate",
                a = "restore",
                r = "server-patch",
                l = "prefetch",
                p = "fast-refresh",
                u = "server-action";
            (o = i || (i = {})).AUTO = "auto", o.FULL = "full", o.TEMPORARY = "temporary", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1516: function(e, t) {
            "use strict";

            function i(e, t, i, o) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return i
                }
            }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        5569: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return $
                }
            });
            let o = i(8754),
                n = o._(i(7294)),
                s = i(4532),
                a = i(3353),
                r = i(1410),
                l = i(9064),
                p = i(370),
                u = i(9955),
                d = i(4224),
                c = i(508),
                h = i(1516),
                m = i(4266),
                f = i(3991),
                y = new Set;

            function g(e, t, i, o, n, s) {
                if (!s && !(0, a.isLocalURL)(t)) return;
                if (!o.bypassPrefetchedCheck) {
                    let n = void 0 !== o.locale ? o.locale : "locale" in e ? e.locale : void 0,
                        s = t + "%" + i + "%" + n;
                    if (y.has(s)) return;
                    y.add(s)
                }
                let r = s ? e.prefetch(t, n) : e.prefetch(t, i, o);
                Promise.resolve(r).catch(e => {})
            }

            function v(e) {
                return "string" == typeof e ? e : (0, r.formatUrl)(e)
            }
            let b = n.default.forwardRef(function(e, t) {
                    let i, o;
                    let {
                        href: r,
                        as: y,
                        children: b,
                        prefetch: $ = null,
                        passHref: I,
                        replace: A,
                        shallow: x,
                        scroll: E,
                        locale: w,
                        onClick: T,
                        onMouseEnter: V,
                        onTouchStart: C,
                        legacyBehavior: P = !1,
                        ...j
                    } = e;
                    i = b, P && ("string" == typeof i || "number" == typeof i) && (i = n.default.createElement("a", null, i));
                    let O = !1 !== $,
                        k = null === $ ? f.PrefetchKind.AUTO : f.PrefetchKind.FULL,
                        L = n.default.useContext(u.RouterContext),
                        S = n.default.useContext(d.AppRouterContext),
                        R = null != L ? L : S,
                        _ = !L,
                        {
                            href: M,
                            as: D
                        } = n.default.useMemo(() => {
                            if (!L) {
                                let e = v(r);
                                return {
                                    href: e,
                                    as: y ? v(y) : e
                                }
                            }
                            let [e, t] = (0, s.resolveHref)(L, r, !0);
                            return {
                                href: e,
                                as: y ? (0, s.resolveHref)(L, y) : t || e
                            }
                        }, [L, r, y]),
                        N = n.default.useRef(M),
                        H = n.default.useRef(D);
                    P && (o = n.default.Children.only(i));
                    let Y = P ? o && "object" == typeof o && o.ref : t,
                        [z, W, B] = (0, c.useIntersection)({
                            rootMargin: "200px"
                        }),
                        F = n.default.useCallback(e => {
                            (H.current !== D || N.current !== M) && (B(), H.current = D, N.current = M), z(e), Y && ("function" == typeof Y ? Y(e) : "object" == typeof Y && (Y.current = e))
                        }, [D, Y, M, B, z]);
                    n.default.useEffect(() => {
                        R && W && O && g(R, M, D, {
                            locale: w
                        }, {
                            kind: k
                        }, _)
                    }, [D, M, W, w, O, null == L ? void 0 : L.locale, R, _, k]);
                    let U = {
                        ref: F,
                        onClick(e) {
                            P || "function" != typeof T || T(e), P && o.props && "function" == typeof o.props.onClick && o.props.onClick(e), R && !e.defaultPrevented && function(e, t, i, o, s, r, l, p, u, d) {
                                let {
                                    nodeName: c
                                } = e.currentTarget, h = "A" === c.toUpperCase();
                                if (h && (function(e) {
                                        let t = e.currentTarget,
                                            i = t.getAttribute("target");
                                        return i && "_self" !== i || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                    }(e) || !u && !(0, a.isLocalURL)(i))) return;
                                e.preventDefault();
                                let m = () => {
                                    "beforePopState" in t ? t[s ? "replace" : "push"](i, o, {
                                        shallow: r,
                                        locale: p,
                                        scroll: l
                                    }) : t[s ? "replace" : "push"](o || i, {
                                        forceOptimisticNavigation: !d
                                    })
                                };
                                u ? n.default.startTransition(m) : m()
                            }(e, R, M, D, A, x, E, w, _, O)
                        },
                        onMouseEnter(e) {
                            P || "function" != typeof V || V(e), P && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), R && (O || !_) && g(R, M, D, {
                                locale: w,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: k
                            }, _)
                        },
                        onTouchStart(e) {
                            P || "function" != typeof C || C(e), P && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), R && (O || !_) && g(R, M, D, {
                                locale: w,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: k
                            }, _)
                        }
                    };
                    if ((0, l.isAbsoluteUrl)(D)) U.href = D;
                    else if (!P || I || "a" === o.type && !("href" in o.props)) {
                        let e = void 0 !== w ? w : null == L ? void 0 : L.locale,
                            t = (null == L ? void 0 : L.isLocaleDomain) && (0, h.getDomainLocale)(D, e, null == L ? void 0 : L.locales, null == L ? void 0 : L.domainLocales);
                        U.href = t || (0, m.addBasePath)((0, p.addLocale)(D, e, null == L ? void 0 : L.defaultLocale))
                    }
                    return P ? n.default.cloneElement(o, U) : n.default.createElement("a", { ...j,
                        ...U
                    }, i)
                }),
                $ = b;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        508: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let o = i(7294),
                n = i(29),
                s = "function" == typeof IntersectionObserver,
                a = new Map,
                r = [];

            function l(e) {
                let {
                    rootRef: t,
                    rootMargin: i,
                    disabled: l
                } = e, p = l || !s, [u, d] = (0, o.useState)(!1), c = (0, o.useRef)(null), h = (0, o.useCallback)(e => {
                    c.current = e
                }, []);
                (0, o.useEffect)(() => {
                    if (s) {
                        if (p || u) return;
                        let e = c.current;
                        if (e && e.tagName) {
                            let o = function(e, t, i) {
                                let {
                                    id: o,
                                    observer: n,
                                    elements: s
                                } = function(e) {
                                    let t;
                                    let i = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        o = r.find(e => e.root === i.root && e.margin === i.margin);
                                    if (o && (t = a.get(o))) return t;
                                    let n = new Map,
                                        s = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = n.get(e.target),
                                                    i = e.isIntersecting || e.intersectionRatio > 0;
                                                t && i && t(i)
                                            })
                                        }, e);
                                    return t = {
                                        id: i,
                                        observer: s,
                                        elements: n
                                    }, r.push(i), a.set(i, t), t
                                }(i);
                                return s.set(e, t), n.observe(e),
                                    function() {
                                        if (s.delete(e), n.unobserve(e), 0 === s.size) {
                                            n.disconnect(), a.delete(o);
                                            let e = r.findIndex(e => e.root === o.root && e.margin === o.margin);
                                            e > -1 && r.splice(e, 1)
                                        }
                                    }
                            }(e, e => e && d(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: i
                            });
                            return o
                        }
                    } else if (!u) {
                        let e = (0, n.requestIdleCallback)(() => d(!0));
                        return () => (0, n.cancelIdleCallback)(e)
                    }
                }, [p, i, t, u, c.current]);
                let m = (0, o.useCallback)(() => {
                    d(!1)
                }, []);
                return [h, u, m]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1664: function(e, t, i) {
            e.exports = i(5569)
        },
        8041: function(e) {
            e.exports = function() {
                "use strict";
                var e = document,
                    t = e.createTextNode.bind(e);

                function i(e, t, i) {
                    e.style.setProperty(t, i)
                }

                function o(e, t) {
                    return e.appendChild(t)
                }

                function n(t, i, n, s) {
                    var a = e.createElement("span");
                    return i && (a.className = i), n && (s || a.setAttribute("data-" + i, n), a.textContent = n), t && o(t, a) || a
                }

                function s(e, t) {
                    return e.getAttribute("data-" + t)
                }

                function a(t, i) {
                    return t && 0 != t.length ? t.nodeName ? [t] : [].slice.call(t[0].nodeName ? t : (i || e).querySelectorAll(t)) : []
                }

                function r(e) {
                    for (var t = []; e--;) t[e] = [];
                    return t
                }

                function l(e, t) {
                    e && e.some(t)
                }

                function p(e) {
                    return function(t) {
                        return e[t]
                    }
                }
                var u = {};

                function d(e, t, i, o) {
                    return {
                        by: e,
                        depends: t,
                        key: i,
                        split: o
                    }
                }

                function c(e) {
                    u[e.by] = e
                }

                function h(e, i, s, r, p) {
                    e.normalize();
                    var u = [],
                        d = document.createDocumentFragment();
                    r && u.push(e.previousSibling);
                    var c = [];
                    return a(e.childNodes).some(function(e) {
                        if (e.tagName && !e.hasChildNodes()) {
                            c.push(e);
                            return
                        }
                        if (e.childNodes && e.childNodes.length) {
                            c.push(e), u.push.apply(u, h(e, i, s, r, p));
                            return
                        }
                        var o = e.wholeText || "",
                            a = o.trim();
                        a.length && (" " === o[0] && c.push(t(" ")), l(a.split(s), function(e, t) {
                            t && p && c.push(n(d, "whitespace", " ", p));
                            var o = n(d, i, e);
                            u.push(o), c.push(o)
                        }), " " === o[o.length - 1] && c.push(t(" ")))
                    }), l(c, function(e) {
                        o(d, e)
                    }), e.innerHTML = "", o(e, d), u
                }
                var m = "words",
                    f = d(m, 0, "word", function(e) {
                        return h(e, "word", /\s+/, 0, 1)
                    }),
                    y = "chars",
                    g = d(y, [m], "char", function(e, t, i) {
                        var o = [];
                        return l(i[m], function(e, i) {
                            o.push.apply(o, h(e, "char", "", t.whitespace && i))
                        }), o
                    });

                function v(e) {
                    var t = (e = e || {}).key;
                    return a(e.target || "[data-splitting]").map(function(o) {
                        var n = o["\uD83C\uDF4C"];
                        if (!e.force && n) return n;
                        n = o["\uD83C\uDF4C"] = {
                            el: o
                        };
                        var a = (function e(t, i, o) {
                                var n = o.indexOf(t);
                                if (-1 == n) o.unshift(t), l(u[t].depends, function(i) {
                                    e(i, t, o)
                                });
                                else {
                                    var s = o.indexOf(i);
                                    o.splice(n, 1), o.splice(s, 0, t)
                                }
                                return o
                            })(e.by || s(o, "splitting") || y, 0, []).map(p(u)),
                            r = function(e, t) {
                                for (var i in t) e[i] = t[i];
                                return e
                            }({}, e);
                        return l(a, function(e) {
                            if (e.split) {
                                var s, a, p = e.by,
                                    u = (t ? "-" + t : "") + e.key,
                                    d = e.split(o, r, n);
                                u && (a = (s = "--" + u) + "-index", l(d, function(e, t) {
                                    Array.isArray(e) ? l(e, function(e) {
                                        i(e, a, t)
                                    }) : i(e, a, t)
                                }), i(o, s + "-total", d.length)), n[p] = d, o.classList.add(p)
                            }
                        }), o.classList.add("splitting"), n
                    })
                }

                function b(e, t, i) {
                    var o = a(t.matching || e.children, e),
                        n = {};
                    return l(o, function(e) {
                        var t = Math.round(e[i]);
                        (n[t] || (n[t] = [])).push(e)
                    }), Object.keys(n).map(Number).sort($).map(p(n))
                }

                function $(e, t) {
                    return e - t
                }
                v.html = function(e) {
                    var t = (e = e || {}).target = n();
                    return t.innerHTML = e.content, v(e), t.outerHTML
                }, v.add = c;
                var I = d("lines", [m], "line", function(e, t, i) {
                        return b(e, {
                            matching: i[m]
                        }, "offsetTop")
                    }),
                    A = d("items", 0, "item", function(e, t) {
                        return a(t.matching || e.children, e)
                    }),
                    x = d("rows", 0, "row", function(e, t) {
                        return b(e, t, "offsetTop")
                    }),
                    E = d("cols", 0, "col", function(e, t) {
                        return b(e, t, "offsetLeft")
                    }),
                    w = d("grid", ["rows", "cols"]),
                    T = "layout",
                    V = d(T, 0, 0, function(e, t) {
                        var r = t.rows = +(t.rows || s(e, "rows") || 1),
                            l = t.columns = +(t.columns || s(e, "columns") || 1);
                        if (t.image = t.image || s(e, "image") || e.currentSrc || e.src, t.image) {
                            var p = a("img", e)[0];
                            t.image = p && (p.currentSrc || p.src)
                        }
                        t.image && i(e, "background-image", "url(" + t.image + ")");
                        for (var u = r * l, d = [], c = n(0, "cell-grid"); u--;) {
                            var h = n(c, "cell");
                            n(h, "cell-inner"), d.push(h)
                        }
                        return o(e, c), d
                    }),
                    C = d("cellRows", [T], "row", function(e, t, i) {
                        var o = t.rows,
                            n = r(o);
                        return l(i[T], function(e, t, i) {
                            n[Math.floor(t / (i.length / o))].push(e)
                        }), n
                    }),
                    P = d("cellColumns", [T], "col", function(e, t, i) {
                        var o = t.columns,
                            n = r(o);
                        return l(i[T], function(e, t) {
                            n[t % o].push(e)
                        }), n
                    }),
                    j = d("cells", ["cellRows", "cellColumns"], "cell", function(e, t, i) {
                        return i[T]
                    });
                return c(f), c(g), c(I), c(A), c(x), c(E), c(w), c(V), c(C), c(P), c(j), v
            }()
        }
    }
]);