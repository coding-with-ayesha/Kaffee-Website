(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function(e, n, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return s(806)
            }])
        },
        806: function(e, n, s) {
            "use strict";
            s.r(n), s.d(n, {
                default: function() {
                    return a
                }
            });
            var i = s(5893),
                t = s(7294),
                r = () => {
                    let [e, n] = (0, t.useState)(!1);
                    return (0, t.useEffect)(() => {
                        setTimeout(() => {
                            n(!0)
                        }, 1500)
                    }, []), (0, i.jsx)("div", {
                        className: "preloader ".concat(e ? "loaded" : ""),
                        children: (0, i.jsx)("div", {
                            className: "centrize full-width",
                            style: {
                                display: e ? "none" : "table"
                            },
                            children: (0, i.jsx)("div", {
                                className: "vertical-center",
                                children: (0, i.jsxs)("div", {
                                    className: "spinner-logo",
                                    children: [(0, i.jsx)("img", {
                                        src: "images/logo.png",
                                        alt: "image"
                                    }), (0, i.jsx)("div", {
                                        className: "spinner-dot",
                                        children: (0, i.jsx)("div", {
                                            className: "spinner-line"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                };
            s(3814);
            var a = e => {
                let {
                    Component: n,
                    pageProps: s
                } = e;
                return (0, i.jsxs)(t.Fragment, {
                    children: [(0, i.jsx)(r, {}), (0, i.jsx)(n, { ...s
                    })]
                })
            }
        },
        3814: function() {}
    },
    function(e) {
        var n = function(n) {
            return e(e.s = n)
        };
        e.O(0, [774, 179], function() {
            return n(1118), n(6885)
        }), _N_E = e.O()
    }
]);