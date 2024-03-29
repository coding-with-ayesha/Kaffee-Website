"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [546], {
        2546: function(e, t, s) {
            s.d(t, {
                tq: function() {
                    return b
                },
                o5: function() {
                    return y
                }
            });
            var i = s(7294),
                a = s(9360);

            function r(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function l(e, t) {
                let s = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > s.indexOf(e)).forEach(s => {
                    void 0 === e[s] ? e[s] = t[s] : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : l(e[s], t[s]) : e[s] = t[s]
                })
            }

            function n(e = {}) {
                return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function o(e = {}) {
                return e.pagination && void 0 === e.pagination.el
            }

            function d(e = {}) {
                return e.scrollbar && void 0 === e.scrollbar.el
            }

            function p(e = "") {
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    s = [];
                return t.forEach(e => {
                    0 > s.indexOf(e) && s.push(e)
                }), s.join(" ")
            }
            let c = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function u(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }
            let h = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function m(e, t) {
                return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
            }
            let f = (0, i.createContext)(null),
                g = (0, i.createContext)(null);

            function v() {
                return (v = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }).apply(this, arguments)
            }
            let b = (0, i.forwardRef)(function(e, t) {
                let {
                    className: s,
                    tag: f = "div",
                    wrapperTag: b = "div",
                    children: w,
                    onSwiper: y,
                    ...S
                } = void 0 === e ? {} : e, E = !1, [T, x] = (0, i.useState)("swiper"), [C, M] = (0, i.useState)(null), [P, L] = (0, i.useState)(!1), O = (0, i.useRef)(!1), k = (0, i.useRef)(null), z = (0, i.useRef)(null), A = (0, i.useRef)(null), $ = (0, i.useRef)(null), _ = (0, i.useRef)(null), I = (0, i.useRef)(null), D = (0, i.useRef)(null), G = (0, i.useRef)(null), {
                    params: B,
                    passedParams: N,
                    rest: j,
                    events: F
                } = function(e = {}, t = !0) {
                    let s = {
                            on: {}
                        },
                        i = {},
                        n = {};
                    l(s, a.ZP.defaults), l(s, a.ZP.extendedDefaults), s._emitClasses = !0, s.init = !1;
                    let o = {},
                        d = c.map(e => e.replace(/_/, "")),
                        p = Object.assign({}, e);
                    return Object.keys(p).forEach(a => {
                        void 0 !== e[a] && (d.indexOf(a) >= 0 ? r(e[a]) ? (s[a] = {}, n[a] = {}, l(s[a], e[a]), l(n[a], e[a])) : (s[a] = e[a], n[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a] ? t ? i[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : s.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : o[a] = e[a])
                    }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                        !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
                    }), {
                        params: s,
                        passedParams: n,
                        rest: o,
                        events: i
                    }
                }(S), {
                    slides: H,
                    slots: V
                } = function(e) {
                    let t = [],
                        s = {
                            "container-start": [],
                            "container-end": [],
                            "wrapper-start": [],
                            "wrapper-end": []
                        };
                    return i.Children.toArray(e).forEach(e => {
                        if (u(e)) t.push(e);
                        else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
                        else if (e.props && e.props.children) {
                            let a = function e(t) {
                                let s = [];
                                return i.Children.toArray(t).forEach(t => {
                                    u(t) ? s.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => s.push(e))
                                }), s
                            }(e.props.children);
                            a.length > 0 ? a.forEach(e => t.push(e)) : s["container-end"].push(e)
                        } else s["container-end"].push(e)
                    }), {
                        slides: t,
                        slots: s
                    }
                }(w), R = () => {
                    L(!P)
                };
                Object.assign(B.on, {
                    _containerClasses(e, t) {
                        x(t)
                    }
                });
                let q = () => {
                    Object.assign(B.on, F), E = !0;
                    let e = { ...B
                    };
                    if (delete e.wrapperClass, z.current = new a.ZP(e), z.current.virtual && z.current.params.virtual.enabled) {
                        z.current.virtual.slides = H;
                        let e = {
                            cache: !1,
                            slides: H,
                            renderExternal: M,
                            renderExternalUpdate: !1
                        };
                        l(z.current.params.virtual, e), l(z.current.originalParams.virtual, e)
                    }
                };
                k.current || q(), z.current && z.current.on("_beforeBreakpoint", R);
                let X = () => {
                        !E && F && z.current && Object.keys(F).forEach(e => {
                            z.current.on(e, F[e])
                        })
                    },
                    Y = () => {
                        F && z.current && Object.keys(F).forEach(e => {
                            z.current.off(e, F[e])
                        })
                    };
                return (0, i.useEffect)(() => () => {
                    z.current && z.current.off("_beforeBreakpoint", R)
                }), (0, i.useEffect)(() => {
                    !O.current && z.current && (z.current.emitSlidesClasses(), O.current = !0)
                }), m(() => {
                    if (t && (t.current = k.current), k.current) return z.current.destroyed && q(),
                        function({
                            el: e,
                            nextEl: t,
                            prevEl: s,
                            paginationEl: i,
                            scrollbarEl: a,
                            swiper: r
                        }, l) {
                            n(l) && t && s && (r.params.navigation.nextEl = t, r.originalParams.navigation.nextEl = t, r.params.navigation.prevEl = s, r.originalParams.navigation.prevEl = s), o(l) && i && (r.params.pagination.el = i, r.originalParams.pagination.el = i), d(l) && a && (r.params.scrollbar.el = a, r.originalParams.scrollbar.el = a), r.init(e)
                        }({
                            el: k.current,
                            nextEl: _.current,
                            prevEl: I.current,
                            paginationEl: D.current,
                            scrollbarEl: G.current,
                            swiper: z.current
                        }, B), y && y(z.current), () => {
                            z.current && !z.current.destroyed && z.current.destroy(!0, !1)
                        }
                }, []), m(() => {
                    X();
                    let e = function(e, t, s, i, a) {
                        let l = [];
                        if (!t) return l;
                        let n = e => {
                            0 > l.indexOf(e) && l.push(e)
                        };
                        if (s && i) {
                            let e = i.map(a),
                                t = s.map(a);
                            e.join("") !== t.join("") && n("children"), i.length !== s.length && n("children")
                        }
                        let o = c.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                        return o.forEach(s => {
                            if (s in e && s in t) {
                                if (r(e[s]) && r(t[s])) {
                                    let i = Object.keys(e[s]),
                                        a = Object.keys(t[s]);
                                    i.length !== a.length ? n(s) : (i.forEach(i => {
                                        e[s][i] !== t[s][i] && n(s)
                                    }), a.forEach(i => {
                                        e[s][i] !== t[s][i] && n(s)
                                    }))
                                } else e[s] !== t[s] && n(s)
                            }
                        }), l
                    }(N, A.current, H, $.current, e => e.key);
                    return A.current = N, $.current = H, e.length && z.current && !z.current.destroyed && function({
                        swiper: e,
                        slides: t,
                        passedParams: s,
                        changedParams: i,
                        nextEl: a,
                        prevEl: n,
                        scrollbarEl: o,
                        paginationEl: d
                    }) {
                        let p, c, u, h, m, f, g, v;
                        let b = i.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                            {
                                params: w,
                                pagination: y,
                                navigation: S,
                                scrollbar: E,
                                virtual: T,
                                thumbs: x
                            } = e;
                        i.includes("thumbs") && s.thumbs && s.thumbs.swiper && w.thumbs && !w.thumbs.swiper && (p = !0), i.includes("controller") && s.controller && s.controller.control && w.controller && !w.controller.control && (c = !0), i.includes("pagination") && s.pagination && (s.pagination.el || d) && (w.pagination || !1 === w.pagination) && y && !y.el && (u = !0), i.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || o) && (w.scrollbar || !1 === w.scrollbar) && E && !E.el && (h = !0), i.includes("navigation") && s.navigation && (s.navigation.prevEl || n) && (s.navigation.nextEl || a) && (w.navigation || !1 === w.navigation) && S && !S.prevEl && !S.nextEl && (m = !0);
                        let C = t => {
                            e[t] && (e[t].destroy(), "navigation" === t ? (e.isElement && (e[t].prevEl.remove(), e[t].nextEl.remove()), w[t].prevEl = void 0, w[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (e.isElement && e[t].el.remove(), w[t].el = void 0, e[t].el = void 0))
                        };
                        if (i.includes("loop") && e.isElement && (w.loop && !s.loop ? f = !0 : !w.loop && s.loop ? g = !0 : v = !0), b.forEach(e => {
                                if (r(w[e]) && r(s[e])) l(w[e], s[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in s[e] && !s[e].enabled && C(e);
                                else {
                                    let t = s[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && C(e): w[e] = s[e]
                                }
                            }), b.includes("controller") && !c && e.controller && e.controller.control && w.controller && w.controller.control && (e.controller.control = w.controller.control), i.includes("children") && t && T && w.virtual.enabled && (T.slides = t, T.update(!0)), i.includes("children") && t && w.loop && (v = !0), p) {
                            let e = x.init();
                            e && x.update(!0)
                        }
                        c && (e.controller.control = w.controller.control), u && (e.isElement && (!d || "string" == typeof d) && ((d = document.createElement("div")).classList.add("swiper-pagination"), e.el.shadowEl.appendChild(d)), d && (w.pagination.el = d), y.init(), y.render(), y.update()), h && (e.isElement && (!o || "string" == typeof o) && ((o = document.createElement("div")).classList.add("swiper-scrollbar"), e.el.shadowEl.appendChild(o)), o && (w.scrollbar.el = o), E.init(), E.updateSize(), E.setTranslate()), m && (e.isElement && (a && "string" != typeof a || ((a = document.createElement("div")).classList.add("swiper-button-next"), e.el.shadowEl.appendChild(a)), n && "string" != typeof n || ((n = document.createElement("div")).classList.add("swiper-button-prev"), e.el.shadowEl.appendChild(n))), a && (w.navigation.nextEl = a), n && (w.navigation.prevEl = n), S.init(), S.update()), i.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext), i.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev), i.includes("direction") && e.changeDirection(s.direction, !1), (f || v) && e.loopDestroy(), (g || v) && e.loopCreate(), e.update()
                    }({
                        swiper: z.current,
                        slides: H,
                        passedParams: N,
                        changedParams: e,
                        nextEl: _.current,
                        prevEl: I.current,
                        scrollbarEl: G.current,
                        paginationEl: D.current
                    }), () => {
                        Y()
                    }
                }), m(() => {
                    h(z.current)
                }, [C]), i.createElement(f, v({
                    ref: k,
                    className: p(`${T}${s?` ${s}`:""}`)
                }, j), i.createElement(g.Provider, {
                    value: z.current
                }, V["container-start"], i.createElement(b, {
                    className: function(e = "") {
                        return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
                    }(B.wrapperClass)
                }, V["wrapper-start"], B.virtual ? function(e, t, s) {
                    if (!s) return null;
                    let a = e => {
                            let s = e;
                            return e < 0 ? s = t.length + e : s >= t.length && (s -= t.length), s
                        },
                        r = e.isHorizontal() ? {
                            [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
                        } : {
                            top: `${s.offset}px`
                        },
                        {
                            from: l,
                            to: n
                        } = s,
                        o = e.params.loop ? -t.length : 0,
                        d = e.params.loop ? 2 * t.length : t.length,
                        p = [];
                    for (let e = o; e < d; e += 1) e >= l && e <= n && p.push(t[a(e)]);
                    return p.map((t, s) => i.cloneElement(t, {
                        swiper: e,
                        style: r,
                        key: `slide-${s}`
                    }))
                }(z.current, H, C) : H.map((e, t) => i.cloneElement(e, {
                    swiper: z.current,
                    swiperSlideIndex: t
                })), V["wrapper-end"]), n(B) && i.createElement(i.Fragment, null, i.createElement("div", {
                    ref: I,
                    className: "swiper-button-prev"
                }), i.createElement("div", {
                    ref: _,
                    className: "swiper-button-next"
                })), d(B) && i.createElement("div", {
                    ref: G,
                    className: "swiper-scrollbar"
                }), o(B) && i.createElement("div", {
                    ref: D,
                    className: "swiper-pagination"
                }), V["container-end"]))
            });

            function w() {
                return (w = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }).apply(this, arguments)
            }
            b.displayName = "Swiper";
            let y = (0, i.forwardRef)(function(e, t) {
                let {
                    tag: s = "div",
                    children: a,
                    className: r = "",
                    swiper: l,
                    zoom: n,
                    lazy: o,
                    virtualIndex: d,
                    swiperSlideIndex: c,
                    ...u
                } = void 0 === e ? {} : e, h = (0, i.useRef)(null), [g, v] = (0, i.useState)("swiper-slide"), [b, y] = (0, i.useState)(!1);

                function S(e, t, s) {
                    t === h.current && v(s)
                }
                m(() => {
                    if (void 0 !== c && (h.current.swiperSlideIndex = c), t && (t.current = h.current), h.current && l) {
                        if (l.destroyed) {
                            "swiper-slide" !== g && v("swiper-slide");
                            return
                        }
                        return l.on("_slideClass", S), () => {
                            l && l.off("_slideClass", S)
                        }
                    }
                }), m(() => {
                    l && h.current && !l.destroyed && v(l.getSlideClasses(h.current))
                }, [l]);
                let E = {
                        isActive: g.indexOf("swiper-slide-active") >= 0,
                        isVisible: g.indexOf("swiper-slide-visible") >= 0,
                        isPrev: g.indexOf("swiper-slide-prev") >= 0,
                        isNext: g.indexOf("swiper-slide-next") >= 0
                    },
                    T = () => "function" == typeof a ? a(E) : a;
                return i.createElement(s, w({
                    ref: h,
                    className: p(`${g}${r?` ${r}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: () => {
                        y(!0)
                    }
                }, u), n && i.createElement(f.Provider, {
                    value: E
                }, i.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof n ? n : void 0
                }, T(), o && !b && i.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !n && i.createElement(f.Provider, {
                    value: E
                }, T(), o && !b && i.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            y.displayName = "SwiperSlide"
        },
        9360: function(e, t, s) {
            let i, a, r;

            function l(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function n(e = {}, t = {}) {
                Object.keys(t).forEach(s => {
                    void 0 === e[s] ? e[s] = t[s] : l(t[s]) && l(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s])
                })
            }
            s.d(t, {
                pt: function() {
                    return Q
                },
                gI: function() {
                    return er
                },
                xW: function() {
                    return ea
                },
                rj: function() {
                    return ee
                },
                Gk: function() {
                    return X
                },
                W_: function() {
                    return W
                },
                tl: function() {
                    return Z
                },
                VS: function() {
                    return J
                },
                LW: function() {
                    return K
                },
                ZP: function() {
                    return q
                }
            });
            let o = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function d() {
                let e = "undefined" != typeof document ? document : {};
                return n(e, o), e
            }
            let p = {
                document: o,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function c() {
                let e = "undefined" != typeof window ? window : {};
                return n(e, p), e
            }

            function u(e, t = 0) {
                return setTimeout(e, t)
            }

            function h() {
                return Date.now()
            }

            function m(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function f(...e) {
                let t = Object(e[0]),
                    s = ["__proto__", "constructor", "prototype"];
                for (let i = 1; i < e.length; i += 1) {
                    let a = e[i];
                    if (null != a && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(a instanceof HTMLElement) : !a || 1 !== a.nodeType && 11 !== a.nodeType)) {
                        let e = Object.keys(Object(a)).filter(e => 0 > s.indexOf(e));
                        for (let s = 0, i = e.length; s < i; s += 1) {
                            let i = e[s],
                                r = Object.getOwnPropertyDescriptor(a, i);
                            void 0 !== r && r.enumerable && (m(t[i]) && m(a[i]) ? a[i].__swiper__ ? t[i] = a[i] : f(t[i], a[i]) : !m(t[i]) && m(a[i]) ? (t[i] = {}, a[i].__swiper__ ? t[i] = a[i] : f(t[i], a[i])) : t[i] = a[i])
                        }
                    }
                }
                return t
            }

            function g(e, t, s) {
                e.style.setProperty(t, s)
            }

            function v({
                swiper: e,
                targetPosition: t,
                side: s
            }) {
                let i;
                let a = c(),
                    r = -e.translate,
                    l = null,
                    n = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);
                let o = t > r ? "next" : "prev",
                    d = (e, t) => "next" === o && e >= t || "prev" === o && e <= t,
                    p = () => {
                        i = new Date().getTime(), null === l && (l = i);
                        let o = Math.max(Math.min((i - l) / n, 1), 0),
                            c = r + (.5 - Math.cos(o * Math.PI) / 2) * (t - r);
                        if (d(c, t) && (c = t), e.wrapperEl.scrollTo({
                                [s]: c
                            }), d(c, t)) {
                            e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                    [s]: c
                                })
                            }), a.cancelAnimationFrame(e.cssModeFrameID);
                            return
                        }
                        e.cssModeFrameID = a.requestAnimationFrame(p)
                    };
                p()
            }

            function b(e) {
                return e.querySelector(".swiper-slide-transform") || e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform") || e
            }

            function w(e, t = "") {
                return [...e.children].filter(e => e.matches(t))
            }

            function y(e, t = []) {
                let s = document.createElement(e);
                return s.classList.add(...Array.isArray(t) ? t : [t]), s
            }

            function S(e, t) {
                let s = c();
                return s.getComputedStyle(e, null).getPropertyValue(t)
            }

            function E(e) {
                let t, s = e;
                if (s) {
                    for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
                    return t
                }
            }

            function T(e, t) {
                let s = [],
                    i = e.parentElement;
                for (; i;) t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
                return s
            }

            function x(e, t, s) {
                let i = c();
                return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function C() {
                return i || (i = function() {
                    let e = c(),
                        t = d();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), i
            }
            let M = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (s) {
                        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                        t && t.remove()
                    }
                },
                P = (e, t) => {
                    if (!e.slides[t]) return;
                    let s = e.slides[t].querySelector('[loading="lazy"]');
                    s && s.removeAttribute("loading")
                },
                L = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        s = e.slides.length;
                    if (!s || !t || t < 0) return;
                    t = Math.min(t, s);
                    let i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        a = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let s = [a - t];
                        s.push(...Array.from({
                            length: t
                        }).map((e, t) => a + i + t)), e.slides.forEach((t, i) => {
                            s.includes(t.column) && P(e, i)
                        });
                        return
                    }
                    let r = a + i - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let i = a - t; i <= r + t; i += 1) {
                            let t = (i % s + s) % s;
                            (t < a || t > r) && P(e, t)
                        } else
                            for (let i = Math.max(a - t, 0); i <= Math.min(r + t, s - 1); i += 1) i !== a && (i > r || i < a) && P(e, i)
                };

            function O({
                swiper: e,
                runCallbacks: t,
                direction: s,
                step: i
            }) {
                let {
                    activeIndex: a,
                    previousIndex: r
                } = e, l = s;
                if (l || (l = a > r ? "next" : a < r ? "prev" : "reset"), e.emit(`transition${i}`), t && a !== r) {
                    if ("reset" === l) {
                        e.emit(`slideResetTransition${i}`);
                        return
                    }
                    e.emit(`slideChangeTransition${i}`), "next" === l ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)
                }
            }

            function k(e) {
                let t = d(),
                    s = c(),
                    i = this.touchEventsData;
                i.evCache.push(e);
                let {
                    params: a,
                    touches: r,
                    enabled: l
                } = this;
                if (!l || !a.simulateTouch && "mouse" === e.pointerType || this.animating && a.preventInteractionOnTransition) return;
                !this.animating && a.cssMode && a.loop && this.loopFix();
                let n = e;
                n.originalEvent && (n = n.originalEvent);
                let o = n.target;
                if ("wrapper" === a.touchEventsTarget && !this.wrapperEl.contains(o) || "which" in n && 3 === n.which || "button" in n && n.button > 0 || i.isTouched && i.isMoved) return;
                let p = !!a.noSwipingClass && "" !== a.noSwipingClass,
                    u = e.composedPath ? e.composedPath() : e.path;
                p && n.target && n.target.shadowRoot && u && (o = u[0]);
                let m = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                    f = !!(n.target && n.target.shadowRoot);
                if (a.noSwiping && (f ? function(e, t = this) {
                        return function t(s) {
                            if (!s || s === d() || s === c()) return null;
                            s.assignedSlot && (s = s.assignedSlot);
                            let i = s.closest(e);
                            return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                        }(t)
                    }(m, o) : o.closest(m))) {
                    this.allowClick = !0;
                    return
                }
                if (a.swipeHandler && !o.closest(a.swipeHandler)) return;
                r.currentX = n.pageX, r.currentY = n.pageY;
                let g = r.currentX,
                    v = r.currentY,
                    b = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                    w = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (b && (g <= w || g >= s.innerWidth - w)) {
                    if ("prevent" !== b) return;
                    e.preventDefault()
                }
                Object.assign(i, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), r.startX = g, r.startY = v, i.touchStartTime = h(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (i.allowThresholdMove = !1);
                let y = !0;
                o.matches(i.focusableElements) && (y = !1, "SELECT" === o.nodeName && (i.isTouched = !1)), t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== o && t.activeElement.blur();
                let S = y && this.allowTouchMove && a.touchStartPreventDefault;
                (a.touchStartForcePreventDefault || S) && !o.isContentEditable && n.preventDefault(), a.freeMode && a.freeMode.enabled && this.freeMode && this.animating && !a.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", n)
            }

            function z(e) {
                let t;
                let s = d(),
                    i = this.touchEventsData,
                    {
                        params: a,
                        touches: r,
                        rtlTranslate: l,
                        enabled: n
                    } = this;
                if (!n || !a.simulateTouch && "mouse" === e.pointerType) return;
                let o = e;
                if (o.originalEvent && (o = o.originalEvent), !i.isTouched) {
                    i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
                    return
                }
                let p = i.evCache.findIndex(e => e.pointerId === o.pointerId);
                p >= 0 && (i.evCache[p] = o);
                let c = i.evCache.length > 1 ? i.evCache[0] : o,
                    u = c.pageX,
                    m = c.pageY;
                if (o.preventedByNestedSwiper) {
                    r.startX = u, r.startY = m;
                    return
                }
                if (!this.allowTouchMove) {
                    o.target.matches(i.focusableElements) || (this.allowClick = !1), i.isTouched && (Object.assign(r, {
                        startX: u,
                        startY: m,
                        prevX: this.touches.currentX,
                        prevY: this.touches.currentY,
                        currentX: u,
                        currentY: m
                    }), i.touchStartTime = h());
                    return
                }
                if (a.touchReleaseOnEdges && !a.loop) {
                    if (this.isVertical()) {
                        if (m < r.startY && this.translate <= this.maxTranslate() || m > r.startY && this.translate >= this.minTranslate()) {
                            i.isTouched = !1, i.isMoved = !1;
                            return
                        }
                    } else if (u < r.startX && this.translate <= this.maxTranslate() || u > r.startX && this.translate >= this.minTranslate()) return
                }
                if (s.activeElement && o.target === s.activeElement && o.target.matches(i.focusableElements)) {
                    i.isMoved = !0, this.allowClick = !1;
                    return
                }
                if (i.allowTouchCallbacks && this.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
                r.currentX = u, r.currentY = m;
                let f = r.currentX - r.startX,
                    g = r.currentY - r.startY;
                if (this.params.threshold && Math.sqrt(f ** 2 + g ** 2) < this.params.threshold) return;
                if (void 0 === i.isScrolling) {
                    let e;
                    this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = this.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
                }
                if (i.isScrolling && this.emit("touchMoveOpposite", o), void 0 === i.startMoving && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0), i.isScrolling || this.zoom && this.params.zoom && this.params.zoom.enabled && i.evCache.length > 1) {
                    i.isTouched = !1;
                    return
                }
                if (!i.startMoving) return;
                this.allowClick = !1, !a.cssMode && o.cancelable && o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation();
                let v = this.isHorizontal() ? f : g,
                    b = this.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
                a.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), b = Math.abs(b) * (l ? 1 : -1)), r.diff = v, v *= a.touchRatio, l && (v = -v, b = -b);
                let w = this.touchesDirection;
                this.swipeDirection = v > 0 ? "prev" : "next", this.touchesDirection = b > 0 ? "prev" : "next";
                let y = this.params.loop && !a.cssMode;
                if (!i.isMoved) {
                    if (y && this.loopFix({
                            direction: this.swipeDirection
                        }), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        this.wrapperEl.dispatchEvent(e)
                    }
                    i.allowMomentumBounce = !1, a.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", o)
                }
                i.isMoved && w !== this.touchesDirection && y && Math.abs(v) >= 1 && (this.loopFix({
                    direction: this.swipeDirection,
                    setTranslate: !0
                }), t = !0), this.emit("sliderMove", o), i.isMoved = !0, i.currentTranslate = v + i.startTranslate;
                let S = !0,
                    E = a.resistanceRatio;
                if (a.touchReleaseOnEdges && (E = 0), v > 0 ? (y && !t && i.currentTranslate > (a.centeredSlides ? this.minTranslate() - this.size / 2 : this.minTranslate()) && this.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), i.currentTranslate > this.minTranslate() && (S = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + i.startTranslate + v) ** E))) : v < 0 && (y && !t && i.currentTranslate < (a.centeredSlides ? this.maxTranslate() + this.size / 2 : this.maxTranslate()) && this.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: this.slides.length - ("auto" === a.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
                    }), i.currentTranslate < this.maxTranslate() && (S = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - i.startTranslate - v) ** E))), S && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), this.allowSlidePrev || this.allowSlideNext || (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                    if (Math.abs(v) > a.threshold || i.allowThresholdMove) {
                        if (!i.allowThresholdMove) {
                            i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                            return
                        }
                    } else {
                        i.currentTranslate = i.startTranslate;
                        return
                    }
                }
                a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && this.freeMode || a.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
            }

            function A(e) {
                let t;
                let s = this,
                    i = s.touchEventsData,
                    a = i.evCache.findIndex(t => t.pointerId === e.pointerId);
                if (a >= 0 && i.evCache.splice(a, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type)) {
                    let t = "pointercancel" === e.type && (s.browser.isSafari || s.browser.isWebView);
                    if (!t) return
                }
                let {
                    params: r,
                    touches: l,
                    rtlTranslate: n,
                    slidesGrid: o,
                    enabled: d
                } = s;
                if (!d || !r.simulateTouch && "mouse" === e.pointerType) return;
                let p = e;
                if (p.originalEvent && (p = p.originalEvent), i.allowTouchCallbacks && s.emit("touchEnd", p), i.allowTouchCallbacks = !1, !i.isTouched) {
                    i.isMoved && r.grabCursor && s.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
                    return
                }
                r.grabCursor && i.isMoved && i.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
                let c = h(),
                    m = c - i.touchStartTime;
                if (s.allowClick) {
                    let e = p.path || p.composedPath && p.composedPath();
                    s.updateClickedSlide(e && e[0] || p.target), s.emit("tap click", p), m < 300 && c - i.lastClickTime < 300 && s.emit("doubleTap doubleClick", p)
                }
                if (i.lastClickTime = h(), u(() => {
                        s.destroyed || (s.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !s.swipeDirection || 0 === l.diff || i.currentTranslate === i.startTranslate) {
                    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
                    return
                }
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, t = r.followFinger ? n ? s.translate : -s.translate : -i.currentTranslate, r.cssMode) return;
                if (r.freeMode && r.freeMode.enabled) {
                    s.freeMode.onTouchEnd({
                        currentPos: t
                    });
                    return
                }
                let f = 0,
                    g = s.slidesSizesGrid[0];
                for (let e = 0; e < o.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                    let s = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    void 0 !== o[e + s] ? t >= o[e] && t < o[e + s] && (f = e, g = o[e + s] - o[e]) : t >= o[e] && (f = e, g = o[o.length - 1] - o[o.length - 2])
                }
                let v = null,
                    b = null;
                r.rewind && (s.isBeginning ? b = r.virtual && r.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1 : s.isEnd && (v = 0));
                let w = (t - o[f]) / g,
                    y = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                if (m > r.longSwipesMs) {
                    if (!r.longSwipes) {
                        s.slideTo(s.activeIndex);
                        return
                    }
                    "next" === s.swipeDirection && (w >= r.longSwipesRatio ? s.slideTo(r.rewind && s.isEnd ? v : f + y) : s.slideTo(f)), "prev" === s.swipeDirection && (w > 1 - r.longSwipesRatio ? s.slideTo(f + y) : null !== b && w < 0 && Math.abs(w) > r.longSwipesRatio ? s.slideTo(b) : s.slideTo(f))
                } else {
                    if (!r.shortSwipes) {
                        s.slideTo(s.activeIndex);
                        return
                    }
                    let e = s.navigation && (p.target === s.navigation.nextEl || p.target === s.navigation.prevEl);
                    e ? p.target === s.navigation.nextEl ? s.slideTo(f + y) : s.slideTo(f) : ("next" === s.swipeDirection && s.slideTo(null !== v ? v : f + y), "prev" === s.swipeDirection && s.slideTo(null !== b ? b : f))
                }
            }

            function $() {
                let e = this,
                    {
                        params: t,
                        el: s
                    } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: i,
                    allowSlidePrev: a,
                    snapGrid: r
                } = e, l = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let n = l && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || n ? e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
            }

            function _(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function I() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: s
                } = this;
                if (!s) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let i = this.maxTranslate() - this.minTranslate();
                (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }

            function D(e) {
                M(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }
            let G = !1;

            function B() {}
            let N = (e, t) => {
                    let s = d(),
                        {
                            params: i,
                            el: a,
                            wrapperEl: r,
                            device: l
                        } = e,
                        n = !!i.nested,
                        o = "on" === t ? "addEventListener" : "removeEventListener";
                    a[o]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), s[o]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: n
                    }), s[o]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), s[o]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), s[o]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), s[o]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), (i.preventClicks || i.preventClicksPropagation) && a[o]("click", e.onClick, !0), i.cssMode && r[o]("scroll", e.onScroll), i.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $, !0) : e[t]("observerUpdate", $, !0), a[o]("load", e.onLoad, {
                        capture: !0
                    })
                },
                j = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var F = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopedSlides: null,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let H = {
                    eventsEmitter: {
                        on(e, t, s) {
                            let i = this;
                            if (!i.eventsListeners || i.destroyed || "function" != typeof t) return i;
                            let a = s ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t)
                            }), i
                        },
                        once(e, t, s) {
                            let i = this;
                            if (!i.eventsListeners || i.destroyed || "function" != typeof t) return i;

                            function a(...s) {
                                i.off(e, a), a.__emitterProxy && delete a.__emitterProxy, t.apply(i, s)
                            }
                            return a.__emitterProxy = t, i.on(e, a, s)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let s = this;
                            return s.eventsListeners && !s.destroyed && s.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((i, a) => {
                                    (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(a, 1)
                                })
                            }), s
                        },
                        emit(...e) {
                            let t, s, i;
                            let a = this;
                            if (!a.eventsListeners || a.destroyed || !a.eventsListeners) return a;
                            "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], s = e.slice(1, e.length), i = a) : (t = e[0].events, s = e[0].data, i = e[0].context || a), s.unshift(i);
                            let r = Array.isArray(t) ? t : t.split(" ");
                            return r.forEach(e => {
                                a.eventsAnyListeners && a.eventsAnyListeners.length && a.eventsAnyListeners.forEach(t => {
                                    t.apply(i, [e, ...s])
                                }), a.eventsListeners && a.eventsListeners[e] && a.eventsListeners[e].forEach(e => {
                                    e.apply(i, s)
                                })
                            }), a
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let s = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : s.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : s.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(S(s, "padding-left") || 0, 10) - parseInt(S(s, "padding-right") || 0, 10), t = t - parseInt(S(s, "padding-top") || 0, 10) - parseInt(S(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function s(e) {
                                return t.isHorizontal() ? e : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[e]
                            }

                            function i(e, t) {
                                return parseFloat(e.getPropertyValue(s(t)) || 0)
                            }
                            let a = t.params,
                                {
                                    wrapperEl: r,
                                    slidesEl: l,
                                    size: n,
                                    rtlTranslate: o,
                                    wrongRTL: d
                                } = t,
                                p = t.virtual && a.virtual.enabled,
                                c = p ? t.virtual.slides.length : t.slides.length,
                                u = w(l, `.${t.params.slideClass}, swiper-slide`),
                                h = p ? t.virtual.slides.length : u.length,
                                m = [],
                                f = [],
                                v = [],
                                b = a.slidesOffsetBefore;
                            "function" == typeof b && (b = a.slidesOffsetBefore.call(t));
                            let y = a.slidesOffsetAfter;
                            "function" == typeof y && (y = a.slidesOffsetAfter.call(t));
                            let E = t.snapGrid.length,
                                T = t.slidesGrid.length,
                                C = a.spaceBetween,
                                M = -b,
                                P = 0,
                                L = 0;
                            if (void 0 === n) return;
                            "string" == typeof C && C.indexOf("%") >= 0 ? C = parseFloat(C.replace("%", "")) / 100 * n : "string" == typeof C && (C = parseFloat(C)), t.virtualSize = -C, u.forEach(e => {
                                o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), a.centeredSlides && a.cssMode && (g(r, "--swiper-centered-offset-before", ""), g(r, "--swiper-centered-offset-after", ""));
                            let O = a.grid && a.grid.rows > 1 && t.grid;
                            O && t.grid.initSlides(h);
                            let k = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(e => void 0 !== a.breakpoints[e].slidesPerView).length > 0;
                            for (let r = 0; r < h; r += 1) {
                                let l;
                                if (e = 0, u[r] && (l = u[r]), O && t.grid.updateSlide(r, l, h, s), !u[r] || "none" !== S(l, "display")) {
                                    if ("auto" === a.slidesPerView) {
                                        k && (u[r].style[s("width")] = "");
                                        let n = getComputedStyle(l),
                                            o = l.style.transform,
                                            d = l.style.webkitTransform;
                                        if (o && (l.style.transform = "none"), d && (l.style.webkitTransform = "none"), a.roundLengths) e = t.isHorizontal() ? x(l, "width", !0) : x(l, "height", !0);
                                        else {
                                            let t = i(n, "width"),
                                                s = i(n, "padding-left"),
                                                a = i(n, "padding-right"),
                                                r = i(n, "margin-left"),
                                                o = i(n, "margin-right"),
                                                d = n.getPropertyValue("box-sizing");
                                            if (d && "border-box" === d) e = t + r + o;
                                            else {
                                                let {
                                                    clientWidth: i,
                                                    offsetWidth: n
                                                } = l;
                                                e = t + s + a + r + o + (n - i)
                                            }
                                        }
                                        o && (l.style.transform = o), d && (l.style.webkitTransform = d), a.roundLengths && (e = Math.floor(e))
                                    } else e = (n - (a.slidesPerView - 1) * C) / a.slidesPerView, a.roundLengths && (e = Math.floor(e)), u[r] && (u[r].style[s("width")] = `${e}px`);
                                    u[r] && (u[r].swiperSlideSize = e), v.push(e), a.centeredSlides ? (M = M + e / 2 + P / 2 + C, 0 === P && 0 !== r && (M = M - n / 2 - C), 0 === r && (M = M - n / 2 - C), .001 > Math.abs(M) && (M = 0), a.roundLengths && (M = Math.floor(M)), L % a.slidesPerGroup == 0 && m.push(M), f.push(M)) : (a.roundLengths && (M = Math.floor(M)), (L - Math.min(t.params.slidesPerGroupSkip, L)) % t.params.slidesPerGroup == 0 && m.push(M), f.push(M), M = M + e + C), t.virtualSize += e + C, P = e, L += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, n) + y, o && d && ("slide" === a.effect || "coverflow" === a.effect) && (r.style.width = `${t.virtualSize+C}px`), a.setWrapperSize && (r.style[s("width")] = `${t.virtualSize+C}px`), O && t.grid.updateWrapperSize(e, m, s), !a.centeredSlides) {
                                let e = [];
                                for (let s = 0; s < m.length; s += 1) {
                                    let i = m[s];
                                    a.roundLengths && (i = Math.floor(i)), m[s] <= t.virtualSize - n && e.push(i)
                                }
                                m = e, Math.floor(t.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 && m.push(t.virtualSize - n)
                            }
                            if (p && a.loop) {
                                let e = v[0] + C;
                                if (a.slidesPerGroup > 1) {
                                    let s = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / a.slidesPerGroup),
                                        i = e * a.slidesPerGroup;
                                    for (let e = 0; e < s; e += 1) m.push(m[m.length - 1] + i)
                                }
                                for (let s = 0; s < t.virtual.slidesBefore + t.virtual.slidesAfter; s += 1) 1 === a.slidesPerGroup && m.push(m[m.length - 1] + e), f.push(f[f.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === m.length && (m = [0]), 0 !== C) {
                                let e = t.isHorizontal() && o ? "marginLeft" : s("marginRight");
                                u.filter((e, t) => !a.cssMode || !!a.loop || t !== u.length - 1).forEach(t => {
                                    t.style[e] = `${C}px`
                                })
                            }
                            if (a.centeredSlides && a.centeredSlidesBounds) {
                                let e = 0;
                                v.forEach(t => {
                                    e += t + (C || 0)
                                }), e -= C;
                                let t = e - n;
                                m = m.map(e => e <= 0 ? -b : e > t ? t + y : e)
                            }
                            if (a.centerInsufficientSlides) {
                                let e = 0;
                                if (v.forEach(t => {
                                        e += t + (C || 0)
                                    }), (e -= C) < n) {
                                    let t = (n - e) / 2;
                                    m.forEach((e, s) => {
                                        m[s] = e - t
                                    }), f.forEach((e, s) => {
                                        f[s] = e + t
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: u,
                                    snapGrid: m,
                                    slidesGrid: f,
                                    slidesSizesGrid: v
                                }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                                g(r, "--swiper-centered-offset-before", `${-m[0]}px`), g(r, "--swiper-centered-offset-after", `${t.size/2-v[v.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    s = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + s)
                            }
                            if (h !== c && t.emit("slidesLengthChange"), m.length !== E && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), f.length !== T && t.emit("slidesGridLengthChange"), a.watchSlidesProgress && t.updateSlidesOffset(), !p && !a.cssMode && ("slide" === a.effect || "fade" === a.effect)) {
                                let e = `${a.containerModifierClass}backface-hidden`,
                                    s = t.el.classList.contains(e);
                                h <= a.maxBackfaceHiddenSlides ? s || t.el.classList.add(e) : s && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let s = this,
                                i = [],
                                a = s.virtual && s.params.virtual.enabled,
                                r = 0;
                            "number" == typeof e ? s.setTransition(e) : !0 === e && s.setTransition(s.params.speed);
                            let l = e => a ? s.slides[s.getSlideIndexByData(e)] : s.slides[e];
                            if ("auto" !== s.params.slidesPerView && s.params.slidesPerView > 1) {
                                if (s.params.centeredSlides)(s.visibleSlides || []).forEach(e => {
                                    i.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(s.params.slidesPerView); t += 1) {
                                        let e = s.activeIndex + t;
                                        if (e > s.slides.length && !a) break;
                                        i.push(l(e))
                                    }
                            } else i.push(l(s.activeIndex));
                            for (t = 0; t < i.length; t += 1)
                                if (void 0 !== i[t]) {
                                    let e = i[t].offsetHeight;
                                    r = e > r ? e : r
                                }(r || 0 === r) && (s.wrapperEl.style.height = `${r}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let s = 0; s < e.length; s += 1) e[s].swiperSlideOffset = (this.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e = this && this.translate || 0) {
                            let t = this.params,
                                {
                                    slides: s,
                                    rtlTranslate: i,
                                    snapGrid: a
                                } = this;
                            if (0 === s.length) return;
                            void 0 === s[0].swiperSlideOffset && this.updateSlidesOffset();
                            let r = -e;
                            i && (r = e), s.forEach(e => {
                                e.classList.remove(t.slideVisibleClass)
                            }), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            let l = t.spaceBetween;
                            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * this.size : "string" == typeof l && (l = parseFloat(l));
                            for (let e = 0; e < s.length; e += 1) {
                                let n = s[e],
                                    o = n.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (o -= s[0].swiperSlideOffset);
                                let d = (r + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                                    p = (r - a[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                                    c = -(r - o),
                                    u = c + this.slidesSizesGrid[e],
                                    h = c >= 0 && c < this.size - 1 || u > 1 && u <= this.size || c <= 0 && u >= this.size;
                                h && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(e), s[e].classList.add(t.slideVisibleClass)), n.progress = i ? -d : d, n.originalProgress = i ? -p : p
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                s = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: i,
                                    isBeginning: a,
                                    isEnd: r,
                                    progressLoop: l
                                } = this,
                                n = a,
                                o = r;
                            if (0 === s) i = 0, a = !0, r = !0;
                            else {
                                i = (e - this.minTranslate()) / s;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    l = 1 > Math.abs(e - this.maxTranslate());
                                a = t || i <= 0, r = l || i >= 1, t && (i = 0), l && (i = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    s = this.getSlideIndexByData(this.slides.length - 1),
                                    i = this.slidesGrid[t],
                                    a = this.slidesGrid[s],
                                    r = this.slidesGrid[this.slidesGrid.length - 1],
                                    n = Math.abs(e);
                                (l = n >= i ? (n - i) / r : (n + r - a) / r) > 1 && (l -= 1)
                            }
                            Object.assign(this, {
                                progress: i,
                                progressLoop: l,
                                isBeginning: a,
                                isEnd: r
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", i)
                        },
                        updateSlidesClasses: function() {
                            let e;
                            let {
                                slides: t,
                                params: s,
                                slidesEl: i,
                                activeIndex: a
                            } = this, r = this.virtual && s.virtual.enabled, l = e => w(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
                            if (t.forEach(e => {
                                    e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
                                }), r) {
                                if (s.loop) {
                                    let t = a - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = l(`[data-swiper-slide-index="${t}"]`)
                                } else e = l(`[data-swiper-slide-index="${a}"]`)
                            } else e = t[a];
                            if (e) {
                                e.classList.add(s.slideActiveClass);
                                let i = function(e, t) {
                                    let s = [];
                                    for (; e.nextElementSibling;) {
                                        let i = e.nextElementSibling;
                                        t ? i.matches(t) && s.push(i) : s.push(i), e = i
                                    }
                                    return s
                                }(e, `.${s.slideClass}, swiper-slide`)[0];
                                s.loop && !i && (i = t[0]), i && i.classList.add(s.slideNextClass);
                                let a = function(e, t) {
                                    let s = [];
                                    for (; e.previousElementSibling;) {
                                        let i = e.previousElementSibling;
                                        t ? i.matches(t) && s.push(i) : s.push(i), e = i
                                    }
                                    return s
                                }(e, `.${s.slideClass}, swiper-slide`)[0];
                                s.loop, a && a.classList.add(s.slidePrevClass)
                            }
                            this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, s;
                            let i = this,
                                a = i.rtlTranslate ? i.translate : -i.translate,
                                {
                                    snapGrid: r,
                                    params: l,
                                    activeIndex: n,
                                    realIndex: o,
                                    snapIndex: d
                                } = i,
                                p = e,
                                c = e => {
                                    let t = e - i.virtual.slidesBefore;
                                    return t < 0 && (t = i.virtual.slides.length + t), t >= i.virtual.slides.length && (t -= i.virtual.slides.length), t
                                };
                            if (void 0 === p && (p = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: s,
                                        params: i
                                    } = e, a = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? a >= s[e] && a < s[e + 1] - (s[e + 1] - s[e]) / 2 ? t = e : a >= s[e] && a < s[e + 1] && (t = e + 1) : a >= s[e] && (t = e);
                                    return i.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(i)), r.indexOf(a) >= 0) t = r.indexOf(a);
                            else {
                                let e = Math.min(l.slidesPerGroupSkip, p);
                                t = e + Math.floor((p - e) / l.slidesPerGroup)
                            }
                            if (t >= r.length && (t = r.length - 1), p === n) {
                                t !== d && (i.snapIndex = t, i.emit("snapIndexChange")), i.params.loop && i.virtual && i.params.virtual.enabled && (i.realIndex = c(p));
                                return
                            }
                            s = i.virtual && l.virtual.enabled && l.loop ? c(p) : i.slides[p] ? parseInt(i.slides[p].getAttribute("data-swiper-slide-index") || p, 10) : p, Object.assign(i, {
                                previousSnapIndex: d,
                                snapIndex: t,
                                previousRealIndex: o,
                                realIndex: s,
                                previousIndex: n,
                                activeIndex: p
                            }), i.initialized && L(i), i.emit("activeIndexChange"), i.emit("snapIndexChange"), o !== s && i.emit("realIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            let t;
                            let s = this.params,
                                i = e.closest(`.${s.slideClass}, swiper-slide`),
                                a = !1;
                            if (i) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === i) {
                                        a = !0, t = e;
                                        break
                                    }
                            }
                            if (i && a) this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = t;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                            let {
                                params: t,
                                rtlTranslate: s,
                                translate: i,
                                wrapperEl: a
                            } = this;
                            if (t.virtualTranslate) return s ? -i : i;
                            if (t.cssMode) return i;
                            let r = function(e, t = "x") {
                                let s, i, a;
                                let r = c(),
                                    l = function(e) {
                                        let t;
                                        let s = c();
                                        return s.getComputedStyle && (t = s.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                                    }(e, null);
                                return r.WebKitCSSMatrix ? ((i = l.transform || l.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new r.WebKitCSSMatrix("none" === i ? "" : i)) : s = (a = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (i = r.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), i || 0
                            }(a, e);
                            return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: s,
                                params: i,
                                wrapperEl: a,
                                progress: r
                            } = this, l = 0, n = 0;
                            this.isHorizontal() ? l = s ? -e : e : n = e, i.roundLengths && (l = Math.floor(l), n = Math.floor(n)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : n, i.cssMode ? a[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -n : i.virtualTranslate || (this.isHorizontal() ? l -= this.cssOverflowAdjustment() : n -= this.cssOverflowAdjustment(), a.style.transform = `translate3d(${l}px, ${n}px, 0px)`);
                            let o = this.maxTranslate() - this.minTranslate();
                            (0 === o ? 0 : (e - this.minTranslate()) / o) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e = 0, t = this.params.speed, s = !0, i = !0, a) {
                            let r;
                            let l = this,
                                {
                                    params: n,
                                    wrapperEl: o
                                } = l;
                            if (l.animating && n.preventInteractionOnTransition) return !1;
                            let d = l.minTranslate(),
                                p = l.maxTranslate();
                            if (r = i && e > d ? d : i && e < p ? p : e, l.updateProgress(r), n.cssMode) {
                                let e = l.isHorizontal();
                                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -r;
                                else {
                                    if (!l.support.smoothScroll) return v({
                                        swiper: l,
                                        targetPosition: -r,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    o.scrollTo({
                                        [e ? "left" : "top"]: -r,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (l.setTransition(0), l.setTranslate(r), s && (l.emit("beforeTransitionStart", t, a), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(r), s && (l.emit("beforeTransitionStart", t, a), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, s && l.emit("transitionEnd"))
                            }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            let {
                                params: s
                            } = this;
                            s.cssMode || (s.autoHeight && this.updateAutoHeight(), O({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            let {
                                params: s
                            } = this;
                            this.animating = !1, s.cssMode || (this.setTransition(0), O({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e = 0, t = this.params.speed, s = !0, i, a) {
                            let r;
                            "string" == typeof e && (e = parseInt(e, 10));
                            let l = this,
                                n = e;
                            n < 0 && (n = 0);
                            let {
                                params: o,
                                snapGrid: d,
                                slidesGrid: p,
                                previousIndex: c,
                                activeIndex: u,
                                rtlTranslate: h,
                                wrapperEl: m,
                                enabled: f
                            } = l;
                            if (l.animating && o.preventInteractionOnTransition || !f && !i && !a) return !1;
                            let g = Math.min(l.params.slidesPerGroupSkip, n),
                                b = g + Math.floor((n - g) / l.params.slidesPerGroup);
                            b >= d.length && (b = d.length - 1);
                            let w = -d[b];
                            if (o.normalizeSlideIndex)
                                for (let e = 0; e < p.length; e += 1) {
                                    let t = -Math.floor(100 * w),
                                        s = Math.floor(100 * p[e]),
                                        i = Math.floor(100 * p[e + 1]);
                                    void 0 !== p[e + 1] ? t >= s && t < i - (i - s) / 2 ? n = e : t >= s && t < i && (n = e + 1) : t >= s && (n = e)
                                }
                            if (l.initialized && n !== u && (!l.allowSlideNext && (h ? w > l.translate && w > l.minTranslate() : w < l.translate && w < l.minTranslate()) || !l.allowSlidePrev && w > l.translate && w > l.maxTranslate() && (u || 0) !== n)) return !1;
                            if (n !== (c || 0) && s && l.emit("beforeSlideChangeStart"), l.updateProgress(w), r = n > u ? "next" : n < u ? "prev" : "reset", h && -w === l.translate || !h && w === l.translate) return l.updateActiveIndex(n), o.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== o.effect && l.setTranslate(w), "reset" !== r && (l.transitionStart(s, r), l.transitionEnd(s, r)), !1;
                            if (o.cssMode) {
                                let e = l.isHorizontal(),
                                    s = h ? w : -w;
                                if (0 === t) {
                                    let t = l.virtual && l.params.virtual.enabled;
                                    t && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                        m[e ? "scrollLeft" : "scrollTop"] = s
                                    })) : m[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame(() => {
                                        l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1
                                    })
                                } else {
                                    if (!l.support.smoothScroll) return v({
                                        swiper: l,
                                        targetPosition: s,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    m.scrollTo({
                                        [e ? "left" : "top"]: s,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return l.setTransition(t), l.setTranslate(w), l.updateActiveIndex(n), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, i), l.transitionStart(s, r), 0 === t ? l.transitionEnd(s, r) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(s, r))
                            }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e = 0, t = this.params.speed, s = !0, i) {
                            if ("string" == typeof e) {
                                let t = parseInt(e, 10);
                                e = t
                            }
                            let a = e;
                            return this.params.loop && (this.virtual && this.params.virtual.enabled ? a += this.virtual.slidesBefore : a = this.getSlideIndexByData(a)), this.slideTo(a, t, s, i)
                        },
                        slideNext: function(e = this.params.speed, t = !0, s) {
                            let {
                                enabled: i,
                                params: a,
                                animating: r
                            } = this;
                            if (!i) return this;
                            let l = a.slidesPerGroup;
                            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (l = Math.max(this.slidesPerViewDynamic("current", !0), 1));
                            let n = this.activeIndex < a.slidesPerGroupSkip ? 1 : l,
                                o = this.virtual && a.virtual.enabled;
                            if (a.loop) {
                                if (r && !o && a.loopPreventsSliding) return !1;
                                this.loopFix({
                                    direction: "next"
                                }), this._clientLeft = this.wrapperEl.clientLeft
                            }
                            return a.rewind && this.isEnd ? this.slideTo(0, e, t, s) : this.slideTo(this.activeIndex + n, e, t, s)
                        },
                        slidePrev: function(e = this.params.speed, t = !0, s) {
                            let {
                                params: i,
                                snapGrid: a,
                                slidesGrid: r,
                                rtlTranslate: l,
                                enabled: n,
                                animating: o
                            } = this;
                            if (!n) return this;
                            let d = this.virtual && i.virtual.enabled;
                            if (i.loop) {
                                if (o && !d && i.loopPreventsSliding) return !1;
                                this.loopFix({
                                    direction: "prev"
                                }), this._clientLeft = this.wrapperEl.clientLeft
                            }
                            let p = l ? this.translate : -this.translate;

                            function c(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let u = c(p),
                                h = a.map(e => c(e)),
                                m = a[h.indexOf(u) - 1];
                            if (void 0 === m && i.cssMode) {
                                let e;
                                a.forEach((t, s) => {
                                    u >= t && (e = s)
                                }), void 0 !== e && (m = a[e > 0 ? e - 1 : e])
                            }
                            let f = 0;
                            if (void 0 !== m && ((f = r.indexOf(m)) < 0 && (f = this.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = Math.max(f = f - this.slidesPerViewDynamic("previous", !0) + 1, 0))), i.rewind && this.isBeginning) {
                                let i = this.params.virtual && this.params.virtual.enabled && this.virtual ? this.virtual.slides.length - 1 : this.slides.length - 1;
                                return this.slideTo(i, e, t, s)
                            }
                            return this.slideTo(f, e, t, s)
                        },
                        slideReset: function(e = this.params.speed, t = !0, s) {
                            return this.slideTo(this.activeIndex, e, t, s)
                        },
                        slideToClosest: function(e = this.params.speed, t = !0, s, i = .5) {
                            let a = this.activeIndex,
                                r = Math.min(this.params.slidesPerGroupSkip, a),
                                l = r + Math.floor((a - r) / this.params.slidesPerGroup),
                                n = this.rtlTranslate ? this.translate : -this.translate;
                            if (n >= this.snapGrid[l]) {
                                let e = this.snapGrid[l],
                                    t = this.snapGrid[l + 1];
                                n - e > (t - e) * i && (a += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[l - 1],
                                    t = this.snapGrid[l];
                                n - e <= (t - e) * i && (a -= this.params.slidesPerGroup)
                            }
                            return a = Math.min(a = Math.max(a, 0), this.slidesGrid.length - 1), this.slideTo(a, e, t, s)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this,
                                {
                                    params: s,
                                    slidesEl: i
                                } = t,
                                a = "auto" === s.slidesPerView ? t.slidesPerViewDynamic() : s.slidesPerView,
                                r = t.clickedIndex,
                                l = t.isElement ? "swiper-slide" : `.${s.slideClass}`;
                            if (s.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), s.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = t.getSlideIndex(w(i, `${l}[data-swiper-slide-index="${e}"]`)[0]), u(() => {
                                    t.slideTo(r)
                                })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = t.getSlideIndex(w(i, `${l}[data-swiper-slide-index="${e}"]`)[0]), u(() => {
                                    t.slideTo(r)
                                })) : t.slideTo(r)
                            } else t.slideTo(r)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let {
                                params: t,
                                slidesEl: s
                            } = this;
                            if (!t.loop || this.virtual && this.params.virtual.enabled) return;
                            let i = w(s, `.${t.slideClass}, swiper-slide`);
                            i.forEach((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }), this.loopFix({
                                slideRealIndex: e,
                                direction: t.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function({
                            slideRealIndex: e,
                            slideTo: t = !0,
                            direction: s,
                            setTranslate: i,
                            activeSlideIndex: a,
                            byController: r,
                            byMousewheel: l
                        } = {}) {
                            let n = this;
                            if (!n.params.loop) return;
                            n.emit("beforeLoopFix");
                            let {
                                slides: o,
                                allowSlidePrev: d,
                                allowSlideNext: p,
                                slidesEl: c,
                                params: u
                            } = n;
                            if (n.allowSlidePrev = !0, n.allowSlideNext = !0, n.virtual && u.virtual.enabled) {
                                t && (u.centeredSlides || 0 !== n.snapIndex ? u.centeredSlides && n.snapIndex < u.slidesPerView ? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0) : n.snapIndex === n.snapGrid.length - 1 && n.slideTo(n.virtual.slidesBefore, 0, !1, !0) : n.slideTo(n.virtual.slides.length, 0, !1, !0)), n.allowSlidePrev = d, n.allowSlideNext = p, n.emit("loopFix");
                                return
                            }
                            let h = "auto" === u.slidesPerView ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(u.slidesPerView, 10)),
                                m = u.loopedSlides || h;
                            m % u.slidesPerGroup != 0 && (m += u.slidesPerGroup - m % u.slidesPerGroup), n.loopedSlides = m;
                            let f = [],
                                g = [],
                                v = n.activeIndex;
                            void 0 === a ? a = n.getSlideIndex(n.slides.filter(e => e.classList.contains(u.slideActiveClass))[0]) : v = a;
                            let b = "next" === s || !s,
                                w = "prev" === s || !s,
                                y = 0,
                                S = 0;
                            if (a < m) {
                                y = Math.max(m - a, u.slidesPerGroup);
                                for (let e = 0; e < m - a; e += 1) {
                                    let t = e - Math.floor(e / o.length) * o.length;
                                    f.push(o.length - t - 1)
                                }
                            } else if (a > n.slides.length - 2 * m) {
                                S = Math.max(a - (n.slides.length - 2 * m), u.slidesPerGroup);
                                for (let e = 0; e < S; e += 1) {
                                    let t = e - Math.floor(e / o.length) * o.length;
                                    g.push(t)
                                }
                            }
                            if (w && f.forEach(e => {
                                    n.slides[e].swiperLoopMoveDOM = !0, c.prepend(n.slides[e]), n.slides[e].swiperLoopMoveDOM = !1
                                }), b && g.forEach(e => {
                                    n.slides[e].swiperLoopMoveDOM = !0, c.append(n.slides[e]), n.slides[e].swiperLoopMoveDOM = !1
                                }), n.recalcSlides(), "auto" === u.slidesPerView && n.updateSlides(), u.watchSlidesProgress && n.updateSlidesOffset(), t) {
                                if (f.length > 0 && w) {
                                    if (void 0 === e) {
                                        let e = n.slidesGrid[v],
                                            t = n.slidesGrid[v + y],
                                            s = t - e;
                                        l ? n.setTranslate(n.translate - s) : (n.slideTo(v + y, 0, !1, !0), i && (n.touches[n.isHorizontal() ? "startX" : "startY"] += s))
                                    } else i && n.slideToLoop(e, 0, !1, !0)
                                } else if (g.length > 0 && b) {
                                    if (void 0 === e) {
                                        let e = n.slidesGrid[v],
                                            t = n.slidesGrid[v - S],
                                            s = t - e;
                                        l ? n.setTranslate(n.translate - s) : (n.slideTo(v - S, 0, !1, !0), i && (n.touches[n.isHorizontal() ? "startX" : "startY"] += s))
                                    } else n.slideToLoop(e, 0, !1, !0)
                                }
                            }
                            if (n.allowSlidePrev = d, n.allowSlideNext = p, n.controller && n.controller.control && !r) {
                                let t = {
                                    slideRealIndex: e,
                                    slideTo: !1,
                                    direction: s,
                                    setTranslate: i,
                                    activeSlideIndex: a,
                                    byController: !0
                                };
                                Array.isArray(n.controller.control) ? n.controller.control.forEach(e => {
                                    !e.destroyed && e.params.loop && e.loopFix(t)
                                }) : n.controller.control instanceof n.constructor && n.controller.control.params.loop && n.controller.control.loopFix(t)
                            }
                            n.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let s = [];
                            this.slides.forEach(e => {
                                let t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                                s[t] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), s.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = d(),
                                {
                                    params: t
                                } = this;
                            this.onTouchStart = k.bind(this), this.onTouchMove = z.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = I.bind(this)), this.onClick = _.bind(this), this.onLoad = D.bind(this), G || (e.addEventListener("touchstart", B), G = !0), N(this, "on")
                        },
                        detachEvents: function() {
                            N(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: s,
                                    params: i,
                                    el: a
                                } = e,
                                r = i.breakpoints;
                            if (!r || r && 0 === Object.keys(r).length) return;
                            let l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                            if (!l || e.currentBreakpoint === l) return;
                            let n = l in r ? r[l] : void 0,
                                o = n || e.originalParams,
                                d = j(e, i),
                                p = j(e, o),
                                c = i.enabled;
                            d && !p ? (a.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && p && (a.classList.add(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && a.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === o[t]) return;
                                let s = i[t] && i[t].enabled,
                                    a = o[t] && o[t].enabled;
                                s && !a && e[t].disable(), !s && a && e[t].enable()
                            });
                            let u = o.direction && o.direction !== i.direction,
                                h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                            u && s && e.changeDirection(), f(e.params, o);
                            let m = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), c && !m ? e.disable() : !c && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", o)
                        },
                        getBreakpoint: function(e, t = "window", s) {
                            if (!e || "container" === t && !s) return;
                            let i = !1,
                                a = c(),
                                r = "window" === t ? a.innerHeight : s.clientHeight,
                                l = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: r * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < l.length; e += 1) {
                                let {
                                    point: r,
                                    value: n
                                } = l[e];
                                "window" === t ? a.matchMedia(`(min-width: ${n}px)`).matches && (i = r) : n <= s.clientWidth && (i = r)
                            }
                            return i || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: s
                            } = t;
                            if (s) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * s;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: s,
                                el: i,
                                device: a
                            } = this, r = function(e, t) {
                                let s = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(i => {
                                        e[i] && s.push(t + i)
                                    }) : "string" == typeof e && s.push(t + e)
                                }), s
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: s
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: a.android
                            }, {
                                ios: a.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...r), i.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e.classList.remove(...t), this.emitContainerClasses()
                        }
                    }
                },
                V = {};
            class R {
                constructor(...e) {
                    let t, s;
                    1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t, s] = e, s || (s = {}), s = f({}, s), t && !s.el && (s.el = t);
                    let i = d();
                    if (s.el && "string" == typeof s.el && i.querySelectorAll(s.el).length > 1) {
                        let e = [];
                        return i.querySelectorAll(s.el).forEach(t => {
                            let i = f({}, s, {
                                el: t
                            });
                            e.push(new R(i))
                        }), e
                    }
                    let l = this;
                    l.__swiper__ = !0, l.support = C(), l.device = function(e = {}) {
                        return a || (a = function({
                            userAgent: e
                        } = {}) {
                            let t = C(),
                                s = c(),
                                i = s.navigator.platform,
                                a = e || s.navigator.userAgent,
                                r = {
                                    ios: !1,
                                    android: !1
                                },
                                l = s.screen.width,
                                n = s.screen.height,
                                o = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                                d = a.match(/(iPad).*OS\s([\d_]+)/),
                                p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                                u = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                h = "MacIntel" === i;
                            return !d && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${n}`) >= 0 && ((d = a.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), h = !1), o && "Win32" !== i && (r.os = "android", r.android = !0), (d || u || p) && (r.os = "ios", r.ios = !0), r
                        }(e)), a
                    }({
                        userAgent: s.userAgent
                    }), l.browser = (r || (r = function() {
                        let e = c(),
                            t = !1;

                        function s() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }
                        if (s()) {
                            let s = String(e.navigator.userAgent);
                            if (s.includes("Version/")) {
                                let [e, i] = s.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                                t = e < 16 || 16 === e && i < 2
                            }
                        }
                        return {
                            isSafari: t || s(),
                            needPerspectiveFix: t,
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), r), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], s.modules && Array.isArray(s.modules) && l.modules.push(...s.modules);
                    let n = {};
                    l.modules.forEach(e => {
                        var t;
                        e({
                            params: s,
                            swiper: l,
                            extendParams: (t = s, function(e = {}) {
                                let s = Object.keys(e)[0],
                                    i = e[s];
                                if ("object" != typeof i || null === i || (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === t[s] && (t[s] = {
                                        auto: !0
                                    }), !(s in t && "enabled" in i))) {
                                    f(n, e);
                                    return
                                }!0 === t[s] && (t[s] = {
                                    enabled: !0
                                }), "object" != typeof t[s] || "enabled" in t[s] || (t[s].enabled = !0), t[s] || (t[s] = {
                                    enabled: !1
                                }), f(n, e)
                            }),
                            on: l.on.bind(l),
                            once: l.once.bind(l),
                            off: l.off.bind(l),
                            emit: l.emit.bind(l)
                        })
                    });
                    let o = f({}, F, n);
                    return l.params = f({}, o, V, s), l.originalParams = f({}, l.params), l.passedParams = f({}, s), l.params && l.params.on && Object.keys(l.params.on).forEach(e => {
                        l.on(e, l.params.on[e])
                    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                        enabled: l.params.enabled,
                        el: t,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === l.params.direction,
                        isVertical: () => "vertical" === l.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: l.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            evCache: []
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.emit("_swiper"), l.params.init && l.init(), l
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: s
                    } = this, i = w(t, `.${s.slideClass}, swiper-slide`), a = E(i[0]);
                    return E(e) - a
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
                }
                recalcSlides() {
                    let {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = w(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let s = this.minTranslate(),
                        i = this.maxTranslate(),
                        a = (i - s) * e + s;
                    this.translateTo(a, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(s => {
                        let i = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: i
                        }), e.emit("_slideClass", s, i)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    let {
                        params: s,
                        slides: i,
                        slidesGrid: a,
                        slidesSizesGrid: r,
                        size: l,
                        activeIndex: n
                    } = this, o = 1;
                    if (s.centeredSlides) {
                        let e, t = i[n] ? i[n].swiperSlideSize : 0;
                        for (let s = n + 1; s < i.length; s += 1) i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > l && (e = !0));
                        for (let s = n - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > l && (e = !0))
                    } else if ("current" === e)
                        for (let e = n + 1; e < i.length; e += 1) {
                            let s = t ? a[e] + r[e] - a[n] < l : a[e] - a[n] < l;
                            s && (o += 1)
                        } else
                            for (let e = n - 1; e >= 0; e -= 1) {
                                let t = a[n] - a[e] < l;
                                t && (o += 1)
                            }
                    return o
                }
                update() {
                    let e;
                    let t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: s,
                        params: i
                    } = t;

                    function a() {
                        let e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            s = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(s), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && M(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), i.freeMode && i.freeMode.enabled && !i.cssMode) a(), i.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === i.slidesPerView || i.slidesPerView > 1) && t.isEnd && !i.centeredSlides) {
                            let s = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(s.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || a()
                    }
                    i.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t = !0) {
                    let s = this.params.direction;
                    return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${s}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let s = e || t.params.el;
                    if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
                    s.swiper = t, s.shadowEl && (t.isElement = !0);
                    let i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        a = (() => {
                            if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                                let e = s.shadowRoot.querySelector(i());
                                return e
                            }
                            return w(s, i())[0]
                        })();
                    return !a && t.params.createElements && (a = y("div", t.params.wrapperClass), s.append(a), w(s, `.${t.params.slideClass}`).forEach(e => {
                        a.append(e)
                    })), Object.assign(t, {
                        el: s,
                        wrapperEl: a,
                        slidesEl: t.isElement ? s : a,
                        mounted: !0,
                        rtl: "rtl" === s.dir.toLowerCase() || "rtl" === S(s, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === S(s, "direction")),
                        wrongRTL: "-webkit-box" === S(a, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let s = t.mount(e);
                    return !1 === s || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                        e.complete ? M(t, e) : e.addEventListener("load", e => {
                            M(t, e.target)
                        })
                    }), L(t), t.initialized = !0, L(t), t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e = !0, t = !0) {
                    let s = this,
                        {
                            params: i,
                            el: a,
                            wrapperEl: r,
                            slides: l
                        } = s;
                    return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), a.removeAttribute("style"), r.removeAttribute("style"), l && l.length && l.forEach(e => {
                        e.classList.remove(i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(e => {
                        s.off(e)
                    }), !1 !== e && (s.el.swiper = null, function(e) {
                        Object.keys(e).forEach(t => {
                            try {
                                e[t] = null
                            } catch (e) {}
                            try {
                                delete e[t]
                            } catch (e) {}
                        })
                    }(s)), s.destroyed = !0), null
                }
                static extendDefaults(e) {
                    f(V, e)
                }
                static get extendedDefaults() {
                    return V
                }
                static get defaults() {
                    return F
                }
                static installModule(e) {
                    R.prototype.__modules__ || (R.prototype.__modules__ = []);
                    let t = R.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach(e => R.installModule(e)), R) : (R.installModule(e), R)
                }
            }
            Object.keys(H).forEach(e => {
                Object.keys(H[e]).forEach(t => {
                    R.prototype[t] = H[e][t]
                })
            }), R.use([function({
                swiper: e,
                on: t,
                emit: s
            }) {
                let i = c(),
                    a = null,
                    r = null,
                    l = () => {
                        e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"))
                    },
                    n = () => {
                        e && !e.destroyed && e.initialized && (a = new ResizeObserver(t => {
                            r = i.requestAnimationFrame(() => {
                                let {
                                    width: s,
                                    height: i
                                } = e, a = s, r = i;
                                t.forEach(({
                                    contentBoxSize: t,
                                    contentRect: s,
                                    target: i
                                }) => {
                                    i && i !== e.el || (a = s ? s.width : (t[0] || t).inlineSize, r = s ? s.height : (t[0] || t).blockSize)
                                }), (a !== s || r !== i) && l()
                            })
                        })).observe(e.el)
                    },
                    o = () => {
                        r && i.cancelAnimationFrame(r), a && a.unobserve && e.el && (a.unobserve(e.el), a = null)
                    },
                    d = () => {
                        e && !e.destroyed && e.initialized && s("orientationchange")
                    };
                t("init", () => {
                    if (e.params.resizeObserver && void 0 !== i.ResizeObserver) {
                        n();
                        return
                    }
                    i.addEventListener("resize", l), i.addEventListener("orientationchange", d)
                }), t("destroy", () => {
                    o(), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", d)
                })
            }, function({
                swiper: e,
                extendParams: t,
                on: s,
                emit: i
            }) {
                let a = [],
                    r = c(),
                    l = (t, s = {}) => {
                        let l = r.MutationObserver || r.WebkitMutationObserver,
                            n = new l(t => {
                                if (e.__preventObserver__) return;
                                if (1 === t.length) {
                                    i("observerUpdate", t[0]);
                                    return
                                }
                                let s = function() {
                                    i("observerUpdate", t[0])
                                };
                                r.requestAnimationFrame ? r.requestAnimationFrame(s) : r.setTimeout(s, 0)
                            });
                        n.observe(t, {
                            attributes: void 0 === s.attributes || s.attributes,
                            childList: void 0 === s.childList || s.childList,
                            characterData: void 0 === s.characterData || s.characterData
                        }), a.push(n)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), s("init", () => {
                    if (e.params.observer) {
                        if (e.params.observeParents) {
                            let t = T(e.el);
                            for (let e = 0; e < t.length; e += 1) l(t[e])
                        }
                        l(e.el, {
                            childList: e.params.observeSlideChildren
                        }), l(e.wrapperEl, {
                            attributes: !1
                        })
                    }
                }), s("destroy", () => {
                    a.forEach(e => {
                        e.disconnect()
                    }), a.splice(0, a.length)
                })
            }]);
            var q = R;

            function X({
                swiper: e,
                extendParams: t,
                on: s,
                emit: i
            }) {
                let a, r;
                let l = c();
                t({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null,
                        noMousewheelClass: "swiper-no-mousewheel"
                    }
                }), e.mousewheel = {
                    enabled: !1
                };
                let n = h(),
                    o = [];

                function d() {
                    e.enabled && (e.mouseEntered = !0)
                }

                function p() {
                    e.enabled && (e.mouseEntered = !1)
                }

                function m(t) {
                    return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && h() - n < e.params.mousewheel.thresholdTime) && (!!(t.delta >= 6 && h() - n < 60) || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), i("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), i("scroll", t.raw)), n = new l.Date().getTime(), !1))
                }

                function f(t) {
                    var s;
                    let l, n, d, p, c = t;
                    if (!e.enabled || t.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)) return;
                    let f = e.params.mousewheel;
                    e.params.cssMode && c.preventDefault();
                    let g = e.el;
                    "container" !== e.params.mousewheel.eventsTarget && (g = document.querySelector(e.params.mousewheel.eventsTarget));
                    let v = g && g.contains(c.target);
                    if (!e.mouseEntered && !v && !f.releaseOnEdges) return !0;
                    c.originalEvent && (c = c.originalEvent);
                    let b = 0,
                        w = e.rtlTranslate ? -1 : 1,
                        y = (l = 0, n = 0, d = 0, p = 0, "detail" in (s = c) && (n = s.detail), "wheelDelta" in s && (n = -s.wheelDelta / 120), "wheelDeltaY" in s && (n = -s.wheelDeltaY / 120), "wheelDeltaX" in s && (l = -s.wheelDeltaX / 120), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (l = n, n = 0), d = 10 * l, p = 10 * n, "deltaY" in s && (p = s.deltaY), "deltaX" in s && (d = s.deltaX), s.shiftKey && !d && (d = p, p = 0), (d || p) && s.deltaMode && (1 === s.deltaMode ? (d *= 40, p *= 40) : (d *= 800, p *= 800)), d && !l && (l = d < 1 ? -1 : 1), p && !n && (n = p < 1 ? -1 : 1), {
                            spinX: l,
                            spinY: n,
                            pixelX: d,
                            pixelY: p
                        });
                    if (f.forceToAxis) {
                        if (e.isHorizontal()) {
                            if (!(Math.abs(y.pixelX) > Math.abs(y.pixelY))) return !0;
                            b = -y.pixelX * w
                        } else {
                            if (!(Math.abs(y.pixelY) > Math.abs(y.pixelX))) return !0;
                            b = -y.pixelY
                        }
                    } else b = Math.abs(y.pixelX) > Math.abs(y.pixelY) ? -y.pixelX * w : -y.pixelY;
                    if (0 === b) return !0;
                    f.invert && (b = -b);
                    let S = e.getTranslate() + b * f.sensitivity;
                    if (S >= e.minTranslate() && (S = e.minTranslate()), S <= e.maxTranslate() && (S = e.maxTranslate()), (e.params.loop || S !== e.minTranslate() && S !== e.maxTranslate()) && e.params.nested && c.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
                        let t = {
                                time: h(),
                                delta: Math.abs(b),
                                direction: Math.sign(b)
                            },
                            s = r && t.time < r.time + 500 && t.delta <= r.delta && t.direction === r.direction;
                        if (!s) {
                            r = void 0;
                            let l = e.getTranslate() + b * f.sensitivity,
                                n = e.isBeginning,
                                d = e.isEnd;
                            if (l >= e.minTranslate() && (l = e.minTranslate()), l <= e.maxTranslate() && (l = e.maxTranslate()), e.setTransition(0), e.setTranslate(l), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!n && e.isBeginning || !d && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
                                    direction: t.direction < 0 ? "next" : "prev",
                                    byMousewheel: !0
                                }), e.params.freeMode.sticky) {
                                clearTimeout(a), a = void 0, o.length >= 15 && o.shift();
                                let s = o.length ? o[o.length - 1] : void 0,
                                    i = o[0];
                                if (o.push(t), s && (t.delta > s.delta || t.direction !== s.direction)) o.splice(0);
                                else if (o.length >= 15 && t.time - i.time < 500 && i.delta - t.delta >= 1 && t.delta <= 6) {
                                    let s = b > 0 ? .8 : .2;
                                    r = t, o.splice(0), a = u(() => {
                                        e.slideToClosest(e.params.speed, !0, void 0, s)
                                    }, 0)
                                }
                                a || (a = u(() => {
                                    r = t, o.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5)
                                }, 500))
                            }
                            if (s || i("scroll", c), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), l === e.minTranslate() || l === e.maxTranslate()) return !0
                        }
                    } else {
                        let s = {
                            time: h(),
                            delta: Math.abs(b),
                            direction: Math.sign(b),
                            raw: t
                        };
                        o.length >= 2 && o.shift();
                        let i = o.length ? o[o.length - 1] : void 0;
                        if (o.push(s), i ? (s.direction !== i.direction || s.delta > i.delta || s.time > i.time + 150) && m(s) : m(s), function(t) {
                                let s = e.params.mousewheel;
                                if (t.direction < 0) {
                                    if (e.isEnd && !e.params.loop && s.releaseOnEdges) return !0
                                } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges) return !0;
                                return !1
                            }(s)) return !0
                    }
                    return c.preventDefault ? c.preventDefault() : c.returnValue = !1, !1
                }

                function g(t) {
                    let s = e.el;
                    "container" !== e.params.mousewheel.eventsTarget && (s = document.querySelector(e.params.mousewheel.eventsTarget)), s[t]("mouseenter", d), s[t]("mouseleave", p), s[t]("wheel", f)
                }

                function v() {
                    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", f), !0) : !e.mousewheel.enabled && (g("addEventListener"), e.mousewheel.enabled = !0, !0)
                }

                function b() {
                    return e.params.cssMode ? (e.wrapperEl.addEventListener(event, f), !0) : !!e.mousewheel.enabled && (g("removeEventListener"), e.mousewheel.enabled = !1, !0)
                }
                s("init", () => {
                    !e.params.mousewheel.enabled && e.params.cssMode && b(), e.params.mousewheel.enabled && v()
                }), s("destroy", () => {
                    e.params.cssMode && v(), e.mousewheel.enabled && b()
                }), Object.assign(e.mousewheel, {
                    enable: v,
                    disable: b
                })
            }

            function Y(e, t, s, i) {
                return e.params.createElements && Object.keys(i).forEach(a => {
                    if (!s[a] && !0 === s.auto) {
                        let r = w(e.el, `.${i[a]}`)[0];
                        r || ((r = y("div", i[a])).className = i[a], e.el.append(r)), s[a] = r, t[a] = r
                    }
                }), s
            }

            function W({
                swiper: e,
                extendParams: t,
                on: s,
                emit: i
            }) {
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), e.navigation = {
                    nextEl: null,
                    prevEl: null
                };
                let a = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);

                function r(t) {
                    let s;
                    return t && "string" == typeof t && e.isElement && (s = e.el.shadowRoot.querySelector(t)) ? s : (t && ("string" == typeof t && (s = [...document.querySelectorAll(t)]), e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.el.querySelectorAll(t).length && (s = e.el.querySelector(t))), t && !s) ? t : s
                }

                function l(t, s) {
                    let i = e.params.navigation;
                    (t = a(t)).forEach(t => {
                        t && (t.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === t.tagName && (t.disabled = s), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](i.lockClass))
                    })
                }

                function n() {
                    let {
                        nextEl: t,
                        prevEl: s
                    } = e.navigation;
                    if (e.params.loop) {
                        l(s, !1), l(t, !1);
                        return
                    }
                    l(s, e.isBeginning && !e.params.rewind), l(t, e.isEnd && !e.params.rewind)
                }

                function o(t) {
                    t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), i("navigationPrev"))
                }

                function d(t) {
                    t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), i("navigationNext"))
                }

                function p() {
                    let t = e.params.navigation;
                    if (e.params.navigation = Y(e, e.originalParams.navigation, e.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !(t.nextEl || t.prevEl)) return;
                    let s = r(t.nextEl),
                        i = r(t.prevEl);
                    Object.assign(e.navigation, {
                        nextEl: s,
                        prevEl: i
                    }), s = a(s), i = a(i);
                    let l = (s, i) => {
                        s && s.addEventListener("click", "next" === i ? d : o), !e.enabled && s && s.classList.add(...t.lockClass.split(" "))
                    };
                    s.forEach(e => l(e, "next")), i.forEach(e => l(e, "prev"))
                }

                function c() {
                    let {
                        nextEl: t,
                        prevEl: s
                    } = e.navigation;
                    t = a(t), s = a(s);
                    let i = (t, s) => {
                        t.removeEventListener("click", "next" === s ? d : o), t.classList.remove(...e.params.navigation.disabledClass.split(" "))
                    };
                    t.forEach(e => i(e, "next")), s.forEach(e => i(e, "prev"))
                }
                s("init", () => {
                    !1 === e.params.navigation.enabled ? u() : (p(), n())
                }), s("toEdge fromEdge lock unlock", () => {
                    n()
                }), s("destroy", () => {
                    c()
                }), s("enable disable", () => {
                    let {
                        nextEl: t,
                        prevEl: s
                    } = e.navigation;
                    [...t = a(t), ...s = a(s)].filter(e => !!e).forEach(t => t.classList[e.enabled ? "remove" : "add"](e.params.navigation.lockClass))
                }), s("click", (t, s) => {
                    let {
                        nextEl: r,
                        prevEl: l
                    } = e.navigation;
                    r = a(r), l = a(l);
                    let n = s.target;
                    if (e.params.navigation.hideOnClick && !l.includes(n) && !r.includes(n)) {
                        let t;
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                        r.length ? t = r[0].classList.contains(e.params.navigation.hiddenClass) : l.length && (t = l[0].classList.contains(e.params.navigation.hiddenClass)), !0 === t ? i("navigationShow") : i("navigationHide"), [...r, ...l].filter(e => !!e).forEach(t => t.classList.toggle(e.params.navigation.hiddenClass))
                    }
                });
                let u = () => {
                    e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), c()
                };
                Object.assign(e.navigation, {
                    enable: () => {
                        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), p(), n()
                    },
                    disable: u,
                    update: n,
                    init: p,
                    destroy: c
                })
            }

            function U(e = "") {
                return `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function Z({
                swiper: e,
                extendParams: t,
                on: s,
                emit: i
            }) {
                let a;
                let r = "swiper-pagination";
                t({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${r}-bullet`,
                        bulletActiveClass: `${r}-bullet-active`,
                        modifierClass: `${r}-`,
                        currentClass: `${r}-current`,
                        totalClass: `${r}-total`,
                        hiddenClass: `${r}-hidden`,
                        progressbarFillClass: `${r}-progressbar-fill`,
                        progressbarOppositeClass: `${r}-progressbar-opposite`,
                        clickableClass: `${r}-clickable`,
                        lockClass: `${r}-lock`,
                        horizontalClass: `${r}-horizontal`,
                        verticalClass: `${r}-vertical`,
                        paginationDisabledClass: `${r}-disabled`
                    }
                }), e.pagination = {
                    el: null,
                    bullets: []
                };
                let l = 0,
                    n = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);

                function o() {
                    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && 0 === e.pagination.el.length
                }

                function d(t, s) {
                    let {
                        bulletActiveClass: i
                    } = e.params.pagination;
                    t && (t = t[`${"prev"===s?"previous":"next"}ElementSibling`]) && (t.classList.add(`${i}-${s}`), (t = t[`${"prev"===s?"previous":"next"}ElementSibling`]) && t.classList.add(`${i}-${s}-${s}`))
                }

                function p(t) {
                    let s = t.target.closest(U(e.params.pagination.bulletClass));
                    if (!s) return;
                    t.preventDefault();
                    let i = E(s) * e.params.slidesPerGroup;
                    if (e.params.loop) {
                        if (e.realIndex === i) return;
                        let t = e.getSlideIndexByData(i),
                            s = e.getSlideIndexByData(e.realIndex);
                        t > e.slides.length - e.loopedSlides && e.loopFix({
                            direction: t > s ? "next" : "prev",
                            activeSlideIndex: t,
                            slideTo: !1
                        }), e.slideToLoop(i)
                    } else e.slideTo(i)
                }

                function c() {
                    let t, s;
                    let r = e.rtl,
                        p = e.params.pagination;
                    if (o()) return;
                    let c = e.pagination.el;
                    c = n(c);
                    let u = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        h = e.params.loop ? Math.ceil(u / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? (s = e.previousRealIndex || 0, t = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : void 0 !== e.snapIndex ? (t = e.snapIndex, s = e.previousSnapIndex) : (s = e.previousIndex || 0, t = e.activeIndex || 0), "bullets" === p.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        let i, n, o;
                        let u = e.pagination.bullets;
                        if (p.dynamicBullets && (a = x(u[0], e.isHorizontal() ? "width" : "height", !0), c.forEach(t => {
                                t.style[e.isHorizontal() ? "width" : "height"] = `${a*(p.dynamicMainBullets+4)}px`
                            }), p.dynamicMainBullets > 1 && void 0 !== s && ((l += t - (s || 0)) > p.dynamicMainBullets - 1 ? l = p.dynamicMainBullets - 1 : l < 0 && (l = 0)), o = ((n = (i = Math.max(t - l, 0)) + (Math.min(u.length, p.dynamicMainBullets) - 1)) + i) / 2), u.forEach(e => {
                                let t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${p.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                                e.classList.remove(...t)
                            }), c.length > 1) u.forEach(s => {
                            let a = E(s);
                            a === t ? s.classList.add(...p.bulletActiveClass.split(" ")) : e.isElement && s.setAttribute("part", "bullet"), p.dynamicBullets && (a >= i && a <= n && s.classList.add(...`${p.bulletActiveClass}-main`.split(" ")), a === i && d(s, "prev"), a === n && d(s, "next"))
                        });
                        else {
                            let s = u[t];
                            if (s && s.classList.add(...p.bulletActiveClass.split(" ")), e.isElement && u.forEach((e, s) => {
                                    e.setAttribute("part", s === t ? "bullet-active" : "bullet")
                                }), p.dynamicBullets) {
                                let e = u[i],
                                    t = u[n];
                                for (let e = i; e <= n; e += 1) u[e] && u[e].classList.add(...`${p.bulletActiveClass}-main`.split(" "));
                                d(e, "prev"), d(t, "next")
                            }
                        }
                        if (p.dynamicBullets) {
                            let t = Math.min(u.length, p.dynamicMainBullets + 4),
                                s = (a * t - a) / 2 - o * a,
                                i = r ? "right" : "left";
                            u.forEach(t => {
                                t.style[e.isHorizontal() ? i : "top"] = `${s}px`
                            })
                        }
                    }
                    c.forEach((s, a) => {
                        if ("fraction" === p.type && (s.querySelectorAll(U(p.currentClass)).forEach(e => {
                                e.textContent = p.formatFractionCurrent(t + 1)
                            }), s.querySelectorAll(U(p.totalClass)).forEach(e => {
                                e.textContent = p.formatFractionTotal(h)
                            })), "progressbar" === p.type) {
                            let i;
                            i = p.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                            let a = (t + 1) / h,
                                r = 1,
                                l = 1;
                            "horizontal" === i ? r = a : l = a, s.querySelectorAll(U(p.progressbarFillClass)).forEach(t => {
                                t.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${l})`, t.style.transitionDuration = `${e.params.speed}ms`
                            })
                        }
                        "custom" === p.type && p.renderCustom ? (s.innerHTML = p.renderCustom(e, t + 1, h), 0 === a && i("paginationRender", s)) : (0 === a && i("paginationRender", s), i("paginationUpdate", s)), e.params.watchOverflow && e.enabled && s.classList[e.isLocked ? "add" : "remove"](p.lockClass)
                    })
                }

                function u() {
                    let t = e.params.pagination;
                    if (o()) return;
                    let s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        a = e.pagination.el;
                    a = n(a);
                    let r = "";
                    if ("bullets" === t.type) {
                        let i = e.params.loop ? Math.ceil(s / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && e.params.freeMode.enabled && i > s && (i = s);
                        for (let s = 0; s < i; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += `<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`
                    }
                    "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), e.pagination.bullets = [], a.forEach(s => {
                        "custom" !== t.type && (s.innerHTML = r || ""), "bullets" === t.type && e.pagination.bullets.push(...s.querySelectorAll(U(t.bulletClass)))
                    }), "custom" !== t.type && i("paginationRender", a[0])
                }

                function h() {
                    let t;
                    e.params.pagination = Y(e, e.originalParams.pagination, e.params.pagination, {
                        el: "swiper-pagination"
                    });
                    let s = e.params.pagination;
                    s.el && ("string" == typeof s.el && e.isElement && (t = e.el.shadowRoot.querySelector(s.el)), t || "string" != typeof s.el || (t = [...document.querySelectorAll(s.el)]), t || (t = s.el), t && 0 !== t.length && (e.params.uniqueNavElements && "string" == typeof s.el && Array.isArray(t) && t.length > 1 && (t = [...e.el.querySelectorAll(s.el)]).length > 1 && (t = t.filter(t => T(t, ".swiper")[0] === e.el)[0]), Array.isArray(t) && 1 === t.length && (t = t[0]), Object.assign(e.pagination, {
                        el: t
                    }), (t = n(t)).forEach(t => {
                        "bullets" === s.type && s.clickable && t.classList.add(s.clickableClass), t.classList.add(s.modifierClass + s.type), t.classList.add(e.isHorizontal() ? s.horizontalClass : s.verticalClass), "bullets" === s.type && s.dynamicBullets && (t.classList.add(`${s.modifierClass}${s.type}-dynamic`), l = 0, s.dynamicMainBullets < 1 && (s.dynamicMainBullets = 1)), "progressbar" === s.type && s.progressbarOpposite && t.classList.add(s.progressbarOppositeClass), s.clickable && t.addEventListener("click", p), e.enabled || t.classList.add(s.lockClass)
                    })))
                }

                function m() {
                    let t = e.params.pagination;
                    if (o()) return;
                    let s = e.pagination.el;
                    s && (s = n(s)).forEach(s => {
                        s.classList.remove(t.hiddenClass), s.classList.remove(t.modifierClass + t.type), s.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && s.removeEventListener("click", p)
                    }), e.pagination.bullets && e.pagination.bullets.forEach(e => e.classList.remove(...t.bulletActiveClass.split(" ")))
                }
                s("changeDirection", () => {
                    if (!e.pagination || !e.pagination.el) return;
                    let t = e.params.pagination,
                        {
                            el: s
                        } = e.pagination;
                    (s = n(s)).forEach(s => {
                        s.classList.remove(t.horizontalClass, t.verticalClass), s.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass)
                    })
                }), s("init", () => {
                    !1 === e.params.pagination.enabled ? f() : (h(), u(), c())
                }), s("activeIndexChange", () => {
                    void 0 === e.snapIndex && c()
                }), s("snapIndexChange", () => {
                    c()
                }), s("snapGridLengthChange", () => {
                    u(), c()
                }), s("destroy", () => {
                    m()
                }), s("enable disable", () => {
                    let {
                        el: t
                    } = e.pagination;
                    t && (t = n(t)).forEach(t => t.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass))
                }), s("lock unlock", () => {
                    c()
                }), s("click", (t, s) => {
                    let a = s.target,
                        {
                            el: r
                        } = e.pagination;
                    if (Array.isArray(r) || (r = [r].filter(e => !!e)), e.params.pagination.el && e.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(e.params.pagination.bulletClass)) {
                        if (e.navigation && (e.navigation.nextEl && a === e.navigation.nextEl || e.navigation.prevEl && a === e.navigation.prevEl)) return;
                        let t = r[0].classList.contains(e.params.pagination.hiddenClass);
                        !0 === t ? i("paginationShow") : i("paginationHide"), r.forEach(t => t.classList.toggle(e.params.pagination.hiddenClass))
                    }
                });
                let f = () => {
                    e.el.classList.add(e.params.pagination.paginationDisabledClass);
                    let {
                        el: t
                    } = e.pagination;
                    t && (t = n(t)).forEach(t => t.classList.add(e.params.pagination.paginationDisabledClass)), m()
                };
                Object.assign(e.pagination, {
                    enable: () => {
                        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
                        let {
                            el: t
                        } = e.pagination;
                        t && (t = n(t)).forEach(t => t.classList.remove(e.params.pagination.paginationDisabledClass)), h(), u(), c()
                    },
                    disable: f,
                    render: u,
                    update: c,
                    init: h,
                    destroy: m
                })
            }

            function K({
                swiper: e,
                extendParams: t,
                on: s,
                emit: i
            }) {
                let a, r, l, n;
                let o = d(),
                    p = !1,
                    h = null,
                    m = null;

                function f() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    let {
                        scrollbar: t,
                        rtlTranslate: s
                    } = e, {
                        dragEl: i,
                        el: a
                    } = t, n = e.params.scrollbar, o = e.params.loop ? e.progressLoop : e.progress, d = r, p = (l - r) * o;
                    s ? (p = -p) > 0 ? (d = r - p, p = 0) : -p + r > l && (d = l + p) : p < 0 ? (d = r + p, p = 0) : p + r > l && (d = l - p), e.isHorizontal() ? (i.style.transform = `translate3d(${p}px, 0, 0)`, i.style.width = `${d}px`) : (i.style.transform = `translate3d(0px, ${p}px, 0)`, i.style.height = `${d}px`), n.hide && (clearTimeout(h), a.style.opacity = 1, h = setTimeout(() => {
                        a.style.opacity = 0, a.style.transitionDuration = "400ms"
                    }, 1e3))
                }

                function g() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    let {
                        scrollbar: t
                    } = e, {
                        dragEl: s,
                        el: i
                    } = t;
                    s.style.width = "", s.style.height = "", l = e.isHorizontal() ? i.offsetWidth : i.offsetHeight, n = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), r = "auto" === e.params.scrollbar.dragSize ? l * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s.style.width = `${r}px` : s.style.height = `${r}px`, n >= 1 ? i.style.display = "none" : i.style.display = "", e.params.scrollbar.hide && (i.style.opacity = 0), e.params.watchOverflow && e.enabled && t.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass)
                }

                function v(t) {
                    return e.isHorizontal() ? t.clientX : t.clientY
                }

                function b(t) {
                    let s;
                    let {
                        scrollbar: i,
                        rtlTranslate: n
                    } = e, {
                        el: o
                    } = i;
                    s = Math.max(Math.min(s = (v(t) - function(e) {
                        let t = c(),
                            s = d(),
                            i = e.getBoundingClientRect(),
                            a = s.body,
                            r = e.clientTop || a.clientTop || 0,
                            l = e.clientLeft || a.clientLeft || 0,
                            n = e === t ? t.scrollY : e.scrollTop,
                            o = e === t ? t.scrollX : e.scrollLeft;
                        return {
                            top: i.top + n - r,
                            left: i.left + o - l
                        }
                    }(o)[e.isHorizontal() ? "left" : "top"] - (null !== a ? a : r / 2)) / (l - r), 1), 0), n && (s = 1 - s);
                    let p = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * s;
                    e.updateProgress(p), e.setTranslate(p), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                function w(t) {
                    let s = e.params.scrollbar,
                        {
                            scrollbar: r,
                            wrapperEl: l
                        } = e,
                        {
                            el: n,
                            dragEl: o
                        } = r;
                    p = !0, a = t.target === o ? v(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), l.style.transitionDuration = "100ms", o.style.transitionDuration = "100ms", b(t), clearTimeout(m), n.style.transitionDuration = "0ms", s.hide && (n.style.opacity = 1), e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"), i("scrollbarDragStart", t)
                }

                function S(t) {
                    let {
                        scrollbar: s,
                        wrapperEl: a
                    } = e, {
                        el: r,
                        dragEl: l
                    } = s;
                    p && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, b(t), a.style.transitionDuration = "0ms", r.style.transitionDuration = "0ms", l.style.transitionDuration = "0ms", i("scrollbarDragMove", t))
                }

                function E(t) {
                    let s = e.params.scrollbar,
                        {
                            scrollbar: a,
                            wrapperEl: r
                        } = e,
                        {
                            el: l
                        } = a;
                    p && (p = !1, e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "", r.style.transitionDuration = ""), s.hide && (clearTimeout(m), m = u(() => {
                        l.style.opacity = 0, l.style.transitionDuration = "400ms"
                    }, 1e3)), i("scrollbarDragEnd", t), s.snapOnRelease && e.slideToClosest())
                }

                function T(t) {
                    let {
                        scrollbar: s,
                        params: i
                    } = e, a = s.el;
                    if (!a) return;
                    let r = !!i.passiveListeners && {
                            passive: !1,
                            capture: !1
                        },
                        l = !!i.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                    if (!a) return;
                    let n = "on" === t ? "addEventListener" : "removeEventListener";
                    a[n]("pointerdown", w, r), o[n]("pointermove", S, r), o[n]("pointerup", E, l)
                }

                function x() {
                    let t, s;
                    let {
                        scrollbar: i,
                        el: a
                    } = e;
                    e.params.scrollbar = Y(e, e.originalParams.scrollbar, e.params.scrollbar, {
                        el: "swiper-scrollbar"
                    });
                    let r = e.params.scrollbar;
                    r.el && ("string" == typeof r.el && e.isElement && (t = e.el.shadowRoot.querySelector(r.el)), t || "string" != typeof r.el ? t || (t = r.el) : t = o.querySelectorAll(r.el), e.params.uniqueNavElements && "string" == typeof r.el && t.length > 1 && 1 === a.querySelectorAll(r.el).length && (t = a.querySelector(r.el)), t.length > 0 && (t = t[0]), t.classList.add(e.isHorizontal() ? r.horizontalClass : r.verticalClass), !t || (s = t.querySelector(`.${e.params.scrollbar.dragClass}`)) || (s = y("div", e.params.scrollbar.dragClass), t.append(s)), Object.assign(i, {
                        el: t,
                        dragEl: s
                    }), !r.draggable || e.params.scrollbar.el && e.scrollbar.el && T("on"), t && t.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass))
                }

                function C() {
                    let t = e.params.scrollbar,
                        s = e.scrollbar.el;
                    s && s.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.params.scrollbar.el && e.scrollbar.el && T("off")
                }
                t({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                        scrollbarDisabledClass: "swiper-scrollbar-disabled",
                        horizontalClass: "swiper-scrollbar-horizontal",
                        verticalClass: "swiper-scrollbar-vertical"
                    }
                }), e.scrollbar = {
                    el: null,
                    dragEl: null
                }, s("init", () => {
                    !1 === e.params.scrollbar.enabled ? M() : (x(), g(), f())
                }), s("update resize observerUpdate lock unlock", () => {
                    g()
                }), s("setTranslate", () => {
                    f()
                }), s("setTransition", (t, s) => {
                    e.params.scrollbar.el && e.scrollbar.el && (e.scrollbar.dragEl.style.transitionDuration = `${s}ms`)
                }), s("enable disable", () => {
                    let {
                        el: t
                    } = e.scrollbar;
                    t && t.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass)
                }), s("destroy", () => {
                    C()
                });
                let M = () => {
                    e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.el && e.scrollbar.el.classList.add(e.params.scrollbar.scrollbarDisabledClass), C()
                };
                Object.assign(e.scrollbar, {
                    enable: () => {
                        e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.el && e.scrollbar.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass), x(), g(), f()
                    },
                    disable: M,
                    updateSize: g,
                    setTranslate: f,
                    init: x,
                    destroy: C
                })
            }

            function J({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                t({
                    parallax: {
                        enabled: !1
                    }
                });
                let i = (t, s) => {
                        let {
                            rtl: i
                        } = e, a = i ? -1 : 1, r = t.getAttribute("data-swiper-parallax") || "0", l = t.getAttribute("data-swiper-parallax-x"), n = t.getAttribute("data-swiper-parallax-y"), o = t.getAttribute("data-swiper-parallax-scale"), d = t.getAttribute("data-swiper-parallax-opacity"), p = t.getAttribute("data-swiper-parallax-rotate");
                        l || n ? (l = l || "0", n = n || "0") : e.isHorizontal() ? (l = r, n = "0") : (n = r, l = "0"), l = l.indexOf("%") >= 0 ? `${parseInt(l,10)*s*a}%` : `${l*s*a}px`, n = n.indexOf("%") >= 0 ? `${parseInt(n,10)*s}%` : `${n*s}px`, null != d && (t.style.opacity = d - (d - 1) * (1 - Math.abs(s)));
                        let c = `translate3d(${l}, ${n}, 0px)`;
                        null != o && (c += ` scale(${o-(o-1)*(1-Math.abs(s))})`), p && null != p && (c += ` rotate(${-(p*s*1)}deg)`), t.style.transform = c
                    },
                    a = () => {
                        let {
                            el: t,
                            slides: s,
                            progress: a,
                            snapGrid: r
                        } = e;
                        w(t, "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(e => {
                            i(e, a)
                        }), s.forEach((t, s) => {
                            let l = t.progress;
                            e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (l += Math.ceil(s / 2) - a * (r.length - 1)), l = Math.min(Math.max(l, -1), 1), t.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach(e => {
                                i(e, l)
                            })
                        })
                    },
                    r = (t = e.params.speed) => {
                        let {
                            el: s
                        } = e;
                        s.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(e => {
                            let s = parseInt(e.getAttribute("data-swiper-parallax-duration"), 10) || t;
                            0 === t && (s = 0), e.style.transitionDuration = `${s}ms`
                        })
                    };
                s("beforeInit", () => {
                    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                }), s("init", () => {
                    e.params.parallax.enabled && a()
                }), s("setTranslate", () => {
                    e.params.parallax.enabled && a()
                }), s("setTransition", (t, s) => {
                    e.params.parallax.enabled && r(s)
                })
            }

            function Q({
                swiper: e,
                extendParams: t,
                on: s,
                emit: i,
                params: a
            }) {
                let r, l, n, o, p, c, u, h, m;
                e.autoplay = {
                    running: !1,
                    paused: !1,
                    timeLeft: 0
                }, t({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                });
                let f = a && a.autoplay ? a.autoplay.delay : 3e3,
                    g = a && a.autoplay ? a.autoplay.delay : 3e3,
                    v = new Date().getTime;

                function b(t) {
                    e && !e.destroyed && e.wrapperEl && t.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", b), C())
                }
                let w = () => {
                        if (e.destroyed || !e.autoplay.running) return;
                        e.autoplay.paused ? o = !0 : o && (g = n, o = !1);
                        let t = e.autoplay.paused ? n : v + g - new Date().getTime();
                        e.autoplay.timeLeft = t, i("autoplayTimeLeft", t, t / f), l = requestAnimationFrame(() => {
                            w()
                        })
                    },
                    y = () => {
                        let t;
                        if (!(t = e.virtual && e.params.virtual.enabled ? e.slides.filter(e => e.classList.contains("swiper-slide-active"))[0] : e.slides[e.activeIndex])) return;
                        let s = parseInt(t.getAttribute("data-swiper-autoplay"), 10);
                        return s
                    },
                    S = t => {
                        if (e.destroyed || !e.autoplay.running) return;
                        cancelAnimationFrame(l), w();
                        let s = void 0 === t ? e.params.autoplay.delay : t;
                        f = e.params.autoplay.delay, g = e.params.autoplay.delay;
                        let a = y();
                        !Number.isNaN(a) && a > 0 && void 0 === t && (s = a, f = a, g = a), n = s;
                        let o = e.params.speed,
                            d = () => {
                                e && !e.destroyed && (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(o, !0, !0), i("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, o, !0, !0), i("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(o, !0, !0), i("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, o, !0, !0), i("autoplay")), e.params.cssMode && (v = new Date().getTime(), requestAnimationFrame(() => {
                                    S()
                                })))
                            };
                        return s > 0 ? (clearTimeout(r), r = setTimeout(() => {
                            d()
                        }, s)) : requestAnimationFrame(() => {
                            d()
                        }), s
                    },
                    E = () => {
                        e.autoplay.running = !0, S(), i("autoplayStart")
                    },
                    T = () => {
                        e.autoplay.running = !1, clearTimeout(r), cancelAnimationFrame(l), i("autoplayStop")
                    },
                    x = (t, s) => {
                        if (e.destroyed || !e.autoplay.running) return;
                        clearTimeout(r), t || (m = !0);
                        let a = () => {
                            i("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", b) : C()
                        };
                        if (e.autoplay.paused = !0, s) {
                            h && (n = e.params.autoplay.delay), h = !1, a();
                            return
                        }
                        let l = n || e.params.autoplay.delay;
                        n = l - (new Date().getTime() - v), e.isEnd && n < 0 && !e.params.loop || (n < 0 && (n = 0), a())
                    },
                    C = () => {
                        e.isEnd && n < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (v = new Date().getTime(), m ? (m = !1, S(n)) : S(), e.autoplay.paused = !1, i("autoplayResume"))
                    },
                    M = () => {
                        if (e.destroyed || !e.autoplay.running) return;
                        let t = d();
                        "hidden" === t.visibilityState && (m = !0, x(!0)), "visible" === t.visibilityState && C()
                    },
                    P = e => {
                        "mouse" === e.pointerType && (m = !0, x(!0))
                    },
                    L = t => {
                        "mouse" === t.pointerType && e.autoplay.paused && C()
                    },
                    O = () => {
                        e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", P), e.el.addEventListener("pointerleave", L))
                    },
                    k = () => {
                        e.el.removeEventListener("pointerenter", P), e.el.removeEventListener("pointerleave", L)
                    },
                    z = () => {
                        let e = d();
                        e.addEventListener("visibilitychange", M)
                    },
                    A = () => {
                        let e = d();
                        e.removeEventListener("visibilitychange", M)
                    };
                s("init", () => {
                    e.params.autoplay.enabled && (O(), z(), v = new Date().getTime(), E())
                }), s("destroy", () => {
                    k(), A(), e.autoplay.running && T()
                }), s("beforeTransitionStart", (t, s, i) => {
                    !e.destroyed && e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? x(!0, !0) : T())
                }), s("sliderFirstMove", () => {
                    if (!e.destroyed && e.autoplay.running) {
                        if (e.params.autoplay.disableOnInteraction) {
                            T();
                            return
                        }
                        p = !0, c = !1, m = !1, u = setTimeout(() => {
                            m = !0, c = !0, x(!0)
                        }, 200)
                    }
                }), s("touchEnd", () => {
                    if (!e.destroyed && e.autoplay.running && p) {
                        if (clearTimeout(u), clearTimeout(r), e.params.autoplay.disableOnInteraction) {
                            c = !1, p = !1;
                            return
                        }
                        c && e.params.cssMode && C(), c = !1, p = !1
                    }
                }), s("slideChange", () => {
                    !e.destroyed && e.autoplay.running && (h = !0)
                }), Object.assign(e.autoplay, {
                    start: E,
                    stop: T,
                    pause: x,
                    resume: C
                })
            }

            function ee({
                swiper: e,
                extendParams: t
            }) {
                let s, i, a;
                t({
                    grid: {
                        rows: 1,
                        fill: "column"
                    }
                });
                let r = () => {
                    let t = e.params.spaceBetween;
                    return "string" == typeof t && t.indexOf("%") >= 0 ? t = parseFloat(t.replace("%", "")) / 100 * e.size : "string" == typeof t && (t = parseFloat(t)), t
                };
                e.grid = {
                    initSlides: t => {
                        let {
                            slidesPerView: r
                        } = e.params, {
                            rows: l,
                            fill: n
                        } = e.params.grid;
                        a = Math.floor(t / l), s = Math.floor(t / l) === t / l ? t : Math.ceil(t / l) * l, "auto" !== r && "row" === n && (s = Math.max(s, r * l)), i = s / l
                    },
                    updateSlide: (t, l, n, o) => {
                        let d, p, c;
                        let {
                            slidesPerGroup: u
                        } = e.params, h = r(), {
                            rows: m,
                            fill: f
                        } = e.params.grid;
                        if ("row" === f && u > 1) {
                            let e = Math.floor(t / (u * m)),
                                i = t - m * u * e,
                                a = 0 === e ? u : Math.min(Math.ceil((n - e * m * u) / m), u);
                            c = Math.floor(i / a), d = (p = i - c * a + e * u) + c * s / m, l.style.order = d
                        } else "column" === f ? (p = Math.floor(t / m), c = t - p * m, (p > a || p === a && c === m - 1) && (c += 1) >= m && (c = 0, p += 1)) : (c = Math.floor(t / i), p = t - c * i);
                        l.row = c, l.column = p, l.style[o("margin-top")] = 0 !== c ? h && `${h}px` : ""
                    },
                    updateWrapperSize: (t, i, a) => {
                        let {
                            centeredSlides: l,
                            roundLengths: n
                        } = e.params, o = r(), {
                            rows: d
                        } = e.params.grid;
                        if (e.virtualSize = (t + o) * s, e.virtualSize = Math.ceil(e.virtualSize / d) - o, e.wrapperEl.style[a("width")] = `${e.virtualSize+o}px`, l) {
                            let t = [];
                            for (let s = 0; s < i.length; s += 1) {
                                let a = i[s];
                                n && (a = Math.floor(a)), i[s] < e.virtualSize + i[0] && t.push(a)
                            }
                            i.splice(0, i.length), i.push(...t)
                        }
                    }
                }
            }

            function et(e) {
                let t;
                let {
                    effect: s,
                    swiper: i,
                    on: a,
                    setTranslate: r,
                    setTransition: l,
                    overwriteParams: n,
                    perspective: o,
                    recreateShadows: d,
                    getEffectParams: p
                } = e;
                a("beforeInit", () => {
                    if (i.params.effect !== s) return;
                    i.classNames.push(`${i.params.containerModifierClass}${s}`), o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
                    let e = n ? n() : {};
                    Object.assign(i.params, e), Object.assign(i.originalParams, e)
                }), a("setTranslate", () => {
                    i.params.effect === s && r()
                }), a("setTransition", (e, t) => {
                    i.params.effect === s && l(t)
                }), a("transitionEnd", () => {
                    i.params.effect === s && d && p && p().slideShadows && (i.slides.forEach(e => {
                        e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => e.remove())
                    }), d())
                }), a("virtualUpdate", () => {
                    i.params.effect === s && (i.slides.length || (t = !0), requestAnimationFrame(() => {
                        t && i.slides && i.slides.length && (r(), t = !1)
                    }))
                })
            }

            function es(e, t) {
                let s = b(t);
                return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s
            }

            function ei({
                swiper: e,
                duration: t,
                transformElements: s,
                allSlides: i
            }) {
                let {
                    activeIndex: a
                } = e, r = t => {
                    if (!t.parentElement) {
                        let s = e.slides.filter(e => e.shadowEl && e.shadowEl === t.parentNode)[0];
                        return s
                    }
                    return t.parentElement
                };
                if (e.params.virtualTranslate && 0 !== t) {
                    let t = !1;
                    (i ? s : s.filter(t => {
                        let s = t.classList.contains("swiper-slide-transform") ? r(t) : t;
                        return e.getSlideIndex(s) === a
                    })).forEach(s => {
                        var i;
                        (i = () => {
                            if (t || !e || e.destroyed) return;
                            t = !0, e.animating = !1;
                            let s = new window.CustomEvent("transitionend", {
                                bubbles: !0,
                                cancelable: !0
                            });
                            e.wrapperEl.dispatchEvent(s)
                        }) && s.addEventListener("transitionend", function e(t) {
                            t.target === s && (i.call(s, t), s.removeEventListener("transitionend", e))
                        })
                    })
                }
            }

            function ea({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                t({
                    fadeEffect: {
                        crossFade: !1
                    }
                }), et({
                    effect: "fade",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        let {
                            slides: t
                        } = e, s = e.params.fadeEffect;
                        for (let i = 0; i < t.length; i += 1) {
                            let t = e.slides[i],
                                a = t.swiperSlideOffset,
                                r = -a;
                            e.params.virtualTranslate || (r -= e.translate);
                            let l = 0;
                            e.isHorizontal() || (l = r, r = 0);
                            let n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t.progress), 0) : 1 + Math.min(Math.max(t.progress, -1), 0),
                                o = es(s, t);
                            o.style.opacity = n, o.style.transform = `translate3d(${r}px, ${l}px, 0px)`
                        }
                    },
                    setTransition: t => {
                        let s = e.slides.map(e => b(e));
                        s.forEach(e => {
                            e.style.transitionDuration = `${t}ms`
                        }), ei({
                            swiper: e,
                            duration: t,
                            transformElements: s,
                            allSlides: !0
                        })
                    },
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !e.params.cssMode
                    })
                })
            }

            function er({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                t({
                    creativeEffect: {
                        limitProgress: 1,
                        shadowPerProgress: !1,
                        progressMultiplier: 1,
                        perspective: !0,
                        prev: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        },
                        next: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        }
                    }
                });
                let i = e => "string" == typeof e ? e : `${e}px`;
                et({
                    effect: "creative",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        let {
                            slides: t,
                            wrapperEl: s,
                            slidesSizesGrid: a
                        } = e, r = e.params.creativeEffect, {
                            progressMultiplier: l
                        } = r, n = e.params.centeredSlides;
                        if (n) {
                            let t = a[0] / 2 - e.params.slidesOffsetBefore || 0;
                            s.style.transform = `translateX(calc(50% - ${t}px))`
                        }
                        for (let s = 0; s < t.length; s += 1) {
                            let a = t[s],
                                o = a.progress,
                                d = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress),
                                p = d;
                            n || (p = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
                            let c = a.swiperSlideOffset,
                                u = [e.params.cssMode ? -c - e.translate : -c, 0, 0],
                                h = [0, 0, 0],
                                m = !1;
                            e.isHorizontal() || (u[1] = u[0], u[0] = 0);
                            let f = {
                                translate: [0, 0, 0],
                                rotate: [0, 0, 0],
                                scale: 1,
                                opacity: 1
                            };
                            d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach((e, t) => {
                                u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*l)}))`
                            }), h.forEach((e, t) => {
                                h[t] = f.rotate[t] * Math.abs(d * l)
                            }), a.style.zIndex = -Math.abs(Math.round(o)) + t.length;
                            let g = u.join(", "),
                                v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                                w = p < 0 ? `scale(${1+(1-f.scale)*p*l})` : `scale(${1-(1-f.scale)*p*l})`,
                                S = p < 0 ? 1 + (1 - f.opacity) * p * l : 1 - (1 - f.opacity) * p * l,
                                E = `translate3d(${g}) ${v} ${w}`;
                            if (m && f.shadow || !m) {
                                let e = a.querySelector(".swiper-slide-shadow");
                                if (!e && f.shadow && (e = function(e, t, s) {
                                        let i = `swiper-slide-shadow${s?`-${s}`:""}`,
                                            a = b(t),
                                            r = a.querySelector(`.${i}`);
                                        return r || (r = y("div", `swiper-slide-shadow${s?`-${s}`:""}`), a.append(r)), r
                                    }(0, a)), e) {
                                    let t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                                    e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                                }
                            }
                            let T = es(r, a);
                            T.style.transform = E, T.style.opacity = S, f.origin && (T.style.transformOrigin = f.origin)
                        }
                    },
                    setTransition: t => {
                        let s = e.slides.map(e => b(e));
                        s.forEach(e => {
                            e.style.transitionDuration = `${t}ms`, e.querySelectorAll(".swiper-slide-shadow").forEach(e => {
                                e.style.transitionDuration = `${t}ms`
                            })
                        }), ei({
                            swiper: e,
                            duration: t,
                            transformElements: s,
                            allSlides: !0
                        })
                    },
                    perspective: () => e.params.creativeEffect.perspective,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !e.params.cssMode
                    })
                })
            }
        }
    }
]);