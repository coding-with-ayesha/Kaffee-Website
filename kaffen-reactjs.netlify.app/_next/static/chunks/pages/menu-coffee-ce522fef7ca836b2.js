(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [77], {
        7913: function(e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/menu-coffee", function() {
                return a(9266)
            }])
        },
        5677: function(e, s, a) {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                    value: !0
                }),
                function(e, s) {
                    for (var a in s) Object.defineProperty(e, a, {
                        enumerable: !0,
                        get: s[a]
                    })
                }(s, {
                    noSSR: function() {
                        return n
                    },
                    default: function() {
                        return r
                    }
                });
            let l = a(8754),
                t = (a(7294), l._(a(8976)));

            function i(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function n(e, s) {
                return delete s.webpack, delete s.modules, e(s)
            }

            function r(e, s) {
                let a = t.default,
                    l = {
                        loading: e => {
                            let {
                                error: s,
                                isLoading: a,
                                pastDelay: l
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? l.loader = () => e : "function" == typeof e ? l.loader = e : "object" == typeof e && (l = { ...l,
                    ...e
                }), l = { ...l,
                    ...s
                };
                let r = l.loader;
                return (l.loadableGenerated && (l = { ...l,
                    ...l.loadableGenerated
                }, delete l.loadableGenerated), "boolean" != typeof l.ssr || l.ssr) ? a({ ...l,
                    loader: () => null != r ? r().then(i) : Promise.resolve(i(() => null))
                }) : (delete l.webpack, delete l.modules, n(a, l))
            }("function" == typeof s.default || "object" == typeof s.default && null !== s.default) && void 0 === s.default.__esModule && (Object.defineProperty(s.default, "__esModule", {
                value: !0
            }), Object.assign(s.default, s), e.exports = s.default)
        },
        2254: function(e, s, a) {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), Object.defineProperty(s, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let l = a(8754),
                t = l._(a(7294)),
                i = t.default.createContext(null)
        },
        8976: function(e, s, a) {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), Object.defineProperty(s, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            let l = a(8754),
                t = l._(a(7294)),
                i = a(2254),
                n = [],
                r = [],
                c = !1;

            function d(e) {
                let s = e(),
                    a = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return a.promise = s.then(e => (a.loading = !1, a.loaded = e, e)).catch(e => {
                    throw a.loading = !1, a.error = e, e
                }), a
            }
            class o {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: e,
                        _opts: s
                    } = this;
                    e.loading && ("number" == typeof s.delay && (0 === s.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, s.delay)), "number" == typeof s.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, s.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = { ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...e
                    }, this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, s) {
                    this._loadFn = e, this._opts = s, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            }

            function m(e) {
                return function(e, s) {
                    let a = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, s),
                        l = null;

                    function n() {
                        if (!l) {
                            let s = new o(e, a);
                            l = {
                                getCurrentValue: s.getCurrentValue.bind(s),
                                subscribe: s.subscribe.bind(s),
                                retry: s.retry.bind(s),
                                promise: s.promise.bind(s)
                            }
                        }
                        return l.promise()
                    }
                    if (!c) {
                        let e = a.webpack ? a.webpack() : a.modules;
                        e && r.push(s => {
                            for (let a of e)
                                if (s.includes(a)) return n()
                        })
                    }

                    function d(e, s) {
                        ! function() {
                            n();
                            let e = t.default.useContext(i.LoadableContext);
                            e && Array.isArray(a.modules) && a.modules.forEach(s => {
                                e(s)
                            })
                        }();
                        let r = t.default.useSyncExternalStore(l.subscribe, l.getCurrentValue, l.getCurrentValue);
                        return t.default.useImperativeHandle(s, () => ({
                            retry: l.retry
                        }), []), t.default.useMemo(() => {
                            var s;
                            return r.loading || r.error ? t.default.createElement(a.loading, {
                                isLoading: r.loading,
                                pastDelay: r.pastDelay,
                                timedOut: r.timedOut,
                                error: r.error,
                                retry: l.retry
                            }) : r.loaded ? t.default.createElement((s = r.loaded) && s.default ? s.default : s, e) : null
                        }, [e, r])
                    }
                    return d.preload = () => n(), d.displayName = "LoadableComponent", t.default.forwardRef(d)
                }(d, e)
            }

            function u(e, s) {
                let a = [];
                for (; e.length;) {
                    let l = e.pop();
                    a.push(l(s))
                }
                return Promise.all(a).then(() => {
                    if (e.length) return u(e, s)
                })
            }
            m.preloadAll = () => new Promise((e, s) => {
                u(n).then(e, s)
            }), m.preloadReady = e => (void 0 === e && (e = []), new Promise(s => {
                let a = () => (c = !0, s());
                u(r, e).then(a, a)
            })), window.__NEXT_PRELOADREADY = m.preloadReady;
            let f = m
        },
        9266: function(e, s, a) {
            "use strict";
            a.r(s);
            var l = a(5893),
                t = a(5198),
                i = a(5152),
                n = a.n(i);
            let r = n()(() => Promise.all([a.e(391), a.e(22)]).then(a.bind(a, 1022)), {
                loadableGenerated: {
                    webpack: () => [1022]
                },
                ssr: !1
            });
            s.default = () => (0, l.jsxs)(t.Z, {
                children: [(0, l.jsxs)("section", {
                    className: "section kf-started-inner",
                    children: [(0, l.jsx)("div", {
                        className: "kf-parallax-bg js-parallax",
                        style: {
                            backgroundImage: "url(images/service3.jpg)"
                        }
                    }), (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsx)("h1", {
                            className: "kf-h-title text-anim-1 scroll-animate",
                            "data-splitting": "chars",
                            "data-animate": "active",
                            children: "Coffee Menu"
                        })
                    })]
                }), (0, l.jsx)(r, {}), (0, l.jsx)("section", {
                    className: "section kf-reservation kf-section-no-margin",
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                            className: "kf-reservation-form element-anim-1 scroll-animate",
                            "data-animate": "active",
                            children: [(0, l.jsx)("div", {
                                className: "image-left",
                                style: {
                                    backgroundImage: "url(images/reservation5.jpg)"
                                }
                            }), (0, l.jsx)("div", {
                                className: "image-right",
                                style: {
                                    backgroundImage: "url(images/reservation6.jpg)"
                                }
                            }), (0, l.jsxs)("div", {
                                className: "kf-titles align-center",
                                children: [(0, l.jsx)("div", {
                                    className: "kf-subtitle",
                                    children: "Booking Table"
                                }), (0, l.jsx)("h3", {
                                    className: "kf-title",
                                    children: "Make Your Reservation"
                                })]
                            }), (0, l.jsx)("form", {
                                id: "rform",
                                method: "post",
                                children: (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [(0, l.jsx)("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                        children: (0, l.jsxs)("div", {
                                            className: "kf-field",
                                            children: [(0, l.jsx)("input", {
                                                type: "text",
                                                name: "name",
                                                placeholder: "Full Name"
                                            }), (0, l.jsx)("i", {
                                                className: "far fa-user"
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                        children: (0, l.jsxs)("div", {
                                            className: "kf-field",
                                            children: [(0, l.jsx)("input", {
                                                type: "email",
                                                name: "email",
                                                placeholder: "Email Address"
                                            }), (0, l.jsx)("i", {
                                                className: "fas fa-at"
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                        children: (0, l.jsxs)("div", {
                                            className: "kf-field",
                                            children: [(0, l.jsx)("input", {
                                                type: "tel",
                                                name: "tel",
                                                placeholder: "Phone Number"
                                            }), (0, l.jsx)("i", {
                                                className: "fas fa-mobile-alt"
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                        children: (0, l.jsx)("div", {
                                            className: "kf-field",
                                            children: (0, l.jsxs)("select", {
                                                name: "persons",
                                                children: [(0, l.jsx)("option", {
                                                    children: "1 Person"
                                                }), (0, l.jsx)("option", {
                                                    children: "2 Persons"
                                                }), (0, l.jsx)("option", {
                                                    children: "3 Persons"
                                                }), (0, l.jsx)("option", {
                                                    children: "4 Persons"
                                                })]
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                        children: (0, l.jsxs)("div", {
                                            className: "kf-field",
                                            children: [(0, l.jsx)("input", {
                                                type: "date",
                                                name: "date"
                                            }), (0, l.jsx)("i", {
                                                className: "far fa-calendar-alt"
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                        children: (0, l.jsxs)("div", {
                                            className: "kf-field",
                                            children: [(0, l.jsx)("input", {
                                                type: "text",
                                                name: "time",
                                                placeholder: "Time"
                                            }), (0, l.jsx)("i", {
                                                className: "far fa-clock"
                                            }), " "]
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                        children: (0, l.jsx)("div", {
                                            className: "kf-bts",
                                            children: (0, l.jsxs)("a", {
                                                href: "#",
                                                className: "kf-btn",
                                                onclick: "$('#rform').submit(); return false;",
                                                children: [(0, l.jsx)("span", {
                                                    children: "booking table"
                                                }), (0, l.jsx)("i", {
                                                    className: "fas fa-chevron-right"
                                                })]
                                            })
                                        })
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "alert-success",
                                style: {
                                    display: "none"
                                },
                                children: (0, l.jsx)("p", {
                                    children: "Thanks, your message is sent successfully."
                                })
                            })]
                        })
                    })
                }), (0, l.jsx)("div", {
                    className: "section kf-brands",
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                            className: "kf-brands-items row",
                            children: [(0, l.jsx)("div", {
                                className: "col-xs-12 col-sm-12 col-md-4 col-lg-2",
                                children: (0, l.jsx)("div", {
                                    className: "kf-brands-item element-anim-1 scroll-animate",
                                    "data-animate": "active",
                                    children: (0, l.jsx)("div", {
                                        className: "image",
                                        children: (0, l.jsx)("img", {
                                            src: "images/brand1.png",
                                            alt: "image"
                                        })
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-xs-12 col-sm-12 col-md-4 col-lg-2",
                                children: (0, l.jsx)("div", {
                                    className: "kf-brands-item element-anim-1 scroll-animate",
                                    "data-animate": "active",
                                    children: (0, l.jsx)("div", {
                                        className: "image",
                                        children: (0, l.jsx)("img", {
                                            src: "images/brand2.png",
                                            alt: "image"
                                        })
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-xs-12 col-sm-12 col-md-4 col-lg-2",
                                children: (0, l.jsx)("div", {
                                    className: "kf-brands-item element-anim-1 scroll-animate",
                                    "data-animate": "active",
                                    children: (0, l.jsx)("div", {
                                        className: "image",
                                        children: (0, l.jsx)("img", {
                                            src: "images/brand3.png",
                                            alt: "image"
                                        })
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-xs-12 col-sm-12 col-md-4 col-lg-2",
                                children: (0, l.jsx)("div", {
                                    className: "kf-brands-item element-anim-1 scroll-animate",
                                    "data-animate": "active",
                                    children: (0, l.jsx)("div", {
                                        className: "image",
                                        children: (0, l.jsx)("img", {
                                            src: "images/brand4.png",
                                            alt: "image"
                                        })
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-xs-12 col-sm-12 col-md-4 col-lg-2",
                                children: (0, l.jsx)("div", {
                                    className: "kf-brands-item element-anim-1 scroll-animate",
                                    "data-animate": "active",
                                    children: (0, l.jsx)("div", {
                                        className: "image",
                                        children: (0, l.jsx)("img", {
                                            src: "images/brand5.png",
                                            alt: "image"
                                        })
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-xs-12 col-sm-12 col-md-4 col-lg-2",
                                children: (0, l.jsx)("div", {
                                    className: "kf-brands-item element-anim-1 scroll-animate",
                                    "data-animate": "active",
                                    children: (0, l.jsx)("div", {
                                        className: "image",
                                        children: (0, l.jsx)("img", {
                                            src: "images/brand6.png",
                                            alt: "image"
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })]
            })
        },
        5152: function(e, s, a) {
            e.exports = a(5677)
        }
    },
    function(e) {
        e.O(0, [239, 198, 774, 888, 179], function() {
            return e(e.s = 7913)
        }), _N_E = e.O()
    }
]);