"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [198], {
        5198: function(e, s, l) {
            l.d(s, {
                Z: function() {
                    return j
                }
            });
            var a = l(5893),
                i = l(7294),
                c = e => {
                    let s = (0, i.useRef)();
                    return (0, i.useEffect)(() => {
                        let l = l => {
                            s.current.contains(l.target) || e()
                        };
                        return document.addEventListener("mousedown", l), () => {
                            document.removeEventListener("mousedown", l)
                        }
                    }), s
                };
            let r = e => {
                let {
                    close: s,
                    src: l
                } = e, r = c(() => {
                    s(!1)
                });
                return (0, a.jsxs)(i.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "mfp-bg mfp-ready",
                        onClick: () => s(!1)
                    }), (0, a.jsx)("div", {
                        className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                        tabIndex: -1,
                        style: {
                            overflow: "hidden auto"
                        },
                        children: (0, a.jsxs)("div", {
                            className: "mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",
                            children: [(0, a.jsx)("div", {
                                className: "mfp-content",
                                ref: r,
                                children: (0, a.jsx)("div", {
                                    className: "mfp-iframe-scaler",
                                    children: (0, a.jsx)("img", {
                                        className: "mfp-img",
                                        src: l
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "mfp-preloader",
                                children: "Loading..."
                            })]
                        })
                    })]
                })
            };
            var n = () => {
                let [e, s] = (0, i.useState)(!1), [l, c] = (0, i.useState)(null);
                return (0, i.useEffect)(() => {
                    setTimeout(() => {
                        let e = document.querySelectorAll("a");
                        e.forEach(e => {
                            e.href.includes("images/") && null === e.getAttribute("download") && e.addEventListener("click", l => {
                                l.preventDefault(), c(e.href), s(!0)
                            })
                        })
                    }, 1500)
                }, []), (0, a.jsx)(i.Fragment, {
                    children: e && (0, a.jsx)(r, {
                        close: () => s(!1),
                        src: l
                    })
                })
            };
            let d = () => {
                    let e = document.querySelectorAll(".scroll-animate"),
                        s = window.innerHeight / 5 * 5 - 20;
                    e.forEach(e => {
                        let l = e.getBoundingClientRect().top;
                        l < s && (e.style.visibility = "visible", e.classList.add("animate__active"))
                    })
                },
                h = () => {
                    window.addEventListener("scroll", () => {
                        let e = window.scrollY,
                            s = document.querySelectorAll(".kf-header");
                        for (let l = 0; l < s.length; l++) {
                            let a = s[l];
                            a && (e > 10 ? a.classList.add("fixed") : a.classList.remove("fixed"))
                        }
                    })
                };
            var o = () => (0, a.jsx)("div", {
                    className: "kf-footer",
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsxs)("div", {
                            className: "row",
                            children: [(0, a.jsx)("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                                children: (0, a.jsx)("div", {
                                    className: "kf-logo element-anim-1 scroll-animate",
                                    "data-animate": "active",
                                    children: (0, a.jsx)("a", {
                                        href: "index.html",
                                        children: (0, a.jsx)("img", {
                                            src: "images/logo.png",
                                            alt: "image"
                                        })
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                                children: (0, a.jsxs)("div", {
                                    className: "kf-f-hours element-anim-1 scroll-animate",
                                    "data-animate": "active",
                                    children: [(0, a.jsx)("h5", {
                                        children: "Working Hours"
                                    }), (0, a.jsxs)("ul", {
                                        children: [(0, a.jsxs)("li", {
                                            children: ["Sunday - Thursday", (0, a.jsx)("em", {
                                                children: "08:00 am - 09:00pm"
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            children: ["Only Friday", (0, a.jsx)("em", {
                                                children: "03:00 pm - 09:00pm"
                                            })]
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)("strong", {
                                                children: "Saturday Close"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                                children: (0, a.jsxs)("div", {
                                    className: "kf-f-contact element-anim-1 scroll-animate",
                                    "data-animate": "active",
                                    children: [(0, a.jsx)("h5", {
                                        children: "Contact Us"
                                    }), (0, a.jsxs)("ul", {
                                        children: [(0, a.jsxs)("li", {
                                            children: [(0, a.jsx)("i", {
                                                className: "las la-map-marker"
                                            }), (0, a.jsx)("em", {
                                                children: "Location :"
                                            }), "55 Main Street, New York"]
                                        }), (0, a.jsxs)("li", {
                                            children: [(0, a.jsx)("i", {
                                                className: "las la-envelope-open-text"
                                            }), (0, a.jsx)("em", {
                                                children: "Email Address :"
                                            }), "kaffendev@gmail.com"]
                                        }), (0, a.jsxs)("li", {
                                            children: [(0, a.jsx)("i", {
                                                className: "las la-phone"
                                            }), (0, a.jsx)("em", {
                                                children: "Phone Number :"
                                            }), "+012 (345) 678 99"]
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                                children: (0, a.jsxs)("div", {
                                    className: "kf-f-gallery element-anim-1 scroll-animate",
                                    "data-animate": "active",
                                    children: [(0, a.jsx)("h5", {
                                        children: "Gallery"
                                    }), (0, a.jsxs)("ul", {
                                        children: [(0, a.jsx)("li", {
                                            children: (0, a.jsx)("a", {
                                                href: "images/grid_gal1.jpg",
                                                className: "kf-image-hover has-popup-image",
                                                children: (0, a.jsx)("img", {
                                                    src: "images/grid_gal1.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)("a", {
                                                href: "images/grid_gal2.jpg",
                                                className: "kf-image-hover has-popup-image",
                                                children: (0, a.jsx)("img", {
                                                    src: "images/grid_gal2.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)("a", {
                                                href: "images/grid_gal3.jpg",
                                                className: "kf-image-hover has-popup-image",
                                                children: (0, a.jsx)("img", {
                                                    src: "images/grid_gal3.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)("a", {
                                                href: "images/grid_gal4.jpg",
                                                className: "kf-image-hover has-popup-image",
                                                children: (0, a.jsx)("img", {
                                                    src: "images/grid_gal4.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)("a", {
                                                href: "images/grid_gal5.jpg",
                                                className: "kf-image-hover has-popup-image",
                                                children: (0, a.jsx)("img", {
                                                    src: "images/grid_gal5.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)("a", {
                                                href: "images/grid_gal6.jpg",
                                                className: "kf-image-hover has-popup-image",
                                                children: (0, a.jsx)("img", {
                                                    src: "images/grid_gal1.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "row",
                            children: (0, a.jsx)("div", {
                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center",
                                children: (0, a.jsx)("div", {
                                    className: "kf-copyright element-anim-1 scroll-animate",
                                    "data-animate": "active",
                                    children: "Copyright \xa9 2022 Kaffen. All Rights Reserved."
                                })
                            })
                        })]
                    })
                }),
                m = l(1664),
                t = l.n(m),
                x = () => {
                    (0, i.useEffect)(() => {
                        h()
                    }, []);
                    let [e, s] = (0, i.useState)(!1);
                    (0, i.useEffect)(() => {
                        document.querySelector("header").className.includes("animated") && setTimeout(() => {
                            document.querySelector("header").classList.add("opened", "show")
                        }, 800)
                    }, [e]);
                    let [l, c] = (0, i.useState)(""), r = e => c(l === e ? "" : e), n = e => e === l ? {
                        display: "block"
                    } : {
                        display: "none"
                    };
                    return (0, a.jsxs)("header", {
                        className: "kf-header ".concat(e ? "animated" : ""),
                        children: [(0, a.jsx)("div", {
                            className: "kf-topline",
                            children: (0, a.jsxs)("div", {
                                className: "row",
                                children: [(0, a.jsx)("div", {
                                    className: "col-xs-12 col-sm-6 col-md-4 col-lg-4",
                                    children: (0, a.jsxs)("div", {
                                        className: "kf-h-group",
                                        children: [(0, a.jsx)("i", {
                                            className: "far fa-clock"
                                        }), " ", (0, a.jsx)("em", {
                                            children: "opening hours :"
                                        }), " 08:00 am - 09:00 pm"]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center",
                                    children: (0, a.jsxs)("div", {
                                        className: "kf-h-social",
                                        children: [(0, a.jsx)("a", {
                                            href: "facebook.com",
                                            target: "blank",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }), (0, a.jsx)("a", {
                                            href: "twitter.com",
                                            target: "blank",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }), (0, a.jsx)("a", {
                                            href: "instagram.com",
                                            target: "blank",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }), (0, a.jsx)("a", {
                                            href: "youtube.com",
                                            target: "blank",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-youtube"
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right",
                                    children: (0, a.jsxs)("div", {
                                        className: "kf-h-group",
                                        children: [(0, a.jsx)("i", {
                                            className: "fas fa-map-marker-alt"
                                        }), " ", (0, a.jsx)("em", {
                                            children: "Location :"
                                        }), " 55 main street, new york"]
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "kf-navbar",
                            children: (0, a.jsxs)("div", {
                                className: "row",
                                children: [(0, a.jsx)("div", {
                                    className: "col-xs-12 col-sm-6 col-md-3 col-lg-3",
                                    children: (0, a.jsx)("div", {
                                        className: "kf-logo",
                                        children: (0, a.jsx)(t(), {
                                            href: "/",
                                            children: (0, a.jsx)("img", {
                                                src: "images/logo.png",
                                                alt: "image"
                                            })
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center",
                                    children: (0, a.jsx)("div", {
                                        className: "kf-main-menu",
                                        children: (0, a.jsxs)("ul", {
                                            children: [(0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)(t(), {
                                                    href: "/",
                                                    children: ["Home", (0, a.jsx)("i", {
                                                        className: "las la-angle-down"
                                                    })]
                                                }), (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "/",
                                                            children: "Coffee House"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "index-2",
                                                            children: "Restaurant"
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "about",
                                                    children: "About"
                                                })
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)(t(), {
                                                    href: "menu-coffee",
                                                    children: ["Menu", (0, a.jsx)("i", {
                                                        className: "las la-angle-down"
                                                    })]
                                                }), (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "menu-coffee",
                                                            children: "Menu Coffee"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "menu-restaurant",
                                                            children: "Menu Restaurant"
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("a", {
                                                    href: "#",
                                                    children: ["Pages", (0, a.jsx)("i", {
                                                        className: "las la-angle-down"
                                                    })]
                                                }), (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "services",
                                                            children: "Service"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "reservation",
                                                            children: "Reservation"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "history",
                                                            children: "History"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "team",
                                                            children: "Our Chefs"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "gallery",
                                                            children: "Gallery"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "faq",
                                                            children: "FAQ"
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("a", {
                                                    href: "#",
                                                    children: ["Blog", (0, a.jsx)("i", {
                                                        className: "las la-angle-down"
                                                    })]
                                                }), (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "blog-grid",
                                                            children: "Blog Grid"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "blog",
                                                            children: "Blog Standard"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "blog-single",
                                                            children: "Blog Single"
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "contacts",
                                                    children: "Contacts"
                                                })
                                            })]
                                        })
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right",
                                    children: [(0, a.jsx)("a", {
                                        href: "#",
                                        className: "kf-menu-btn ".concat(e ? "active" : ""),
                                        onClick: () => s(!e),
                                        children: (0, a.jsx)("span", {})
                                    }), (0, a.jsx)(t(), {
                                        href: "reservation",
                                        className: "kf-btn h-btn",
                                        children: (0, a.jsx)("span", {
                                            children: "Book a table"
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsxs)("div", {
                            className: "kf-navbar-mobile",
                            children: [(0, a.jsx)("div", {
                                className: "kf-main-menu",
                                children: (0, a.jsxs)("ul", {
                                    children: [(0, a.jsxs)("li", {
                                        className: "has-children",
                                        children: [(0, a.jsx)(t(), {
                                            href: "/",
                                            children: "Home"
                                        }), (0, a.jsx)("i", {
                                            className: "las la-angle-down",
                                            onClick: () => r("home")
                                        }), (0, a.jsxs)("ul", {
                                            style: n("home"),
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "/",
                                                    children: "Coffee House"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "index-2",
                                                    children: "Restaurant"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsx)("li", {
                                        children: (0, a.jsx)(t(), {
                                            href: "about",
                                            children: "About"
                                        })
                                    }), (0, a.jsxs)("li", {
                                        className: "has-children",
                                        children: [(0, a.jsx)(t(), {
                                            href: "menu-coffee",
                                            children: "Menu"
                                        }), (0, a.jsx)("i", {
                                            className: "las la-angle-down",
                                            onClick: () => r("Menu")
                                        }), (0, a.jsxs)("ul", {
                                            style: n("Menu"),
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "menu-coffee",
                                                    children: "Menu Coffee"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "menu-restaurant",
                                                    children: "Menu Restaurant"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsxs)("li", {
                                        className: "has-children",
                                        children: [(0, a.jsx)("a", {
                                            href: "#",
                                            children: "Pages"
                                        }), (0, a.jsx)("i", {
                                            className: "las la-angle-down",
                                            onClick: () => r("Pages")
                                        }), (0, a.jsxs)("ul", {
                                            style: n("Pages"),
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "services",
                                                    children: "Service"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "reservation",
                                                    children: "Reservation"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "history",
                                                    children: "History"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "team",
                                                    children: "Our Chefs"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "gallery",
                                                    children: "Gallery"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "faq",
                                                    children: "FAQ"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsxs)("li", {
                                        className: "has-children",
                                        children: [(0, a.jsx)("a", {
                                            href: "#",
                                            children: "Blog"
                                        }), (0, a.jsx)("i", {
                                            className: "las la-angle-down",
                                            onClick: () => r("Blog")
                                        }), (0, a.jsxs)("ul", {
                                            style: n("Blog"),
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "blog-grid",
                                                    children: "Blog Grid"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "blog",
                                                    children: "Blog Standard"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "blog-single",
                                                    children: "Blog Single"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsx)("li", {
                                        children: (0, a.jsx)(t(), {
                                            href: "contacts",
                                            children: "Contacts"
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "kf-topline",
                                children: (0, a.jsxs)("div", {
                                    className: "row",
                                    children: [(0, a.jsx)("div", {
                                        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                        children: (0, a.jsxs)(t(), {
                                            href: "reservation",
                                            className: "kf-btn h-btn",
                                            children: [(0, a.jsx)("span", {
                                                children: "Book a table"
                                            }), (0, a.jsx)("i", {
                                                className: "fas fa-chevron-right"
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                        children: (0, a.jsxs)("div", {
                                            className: "kf-h-social",
                                            children: [(0, a.jsx)("a", {
                                                href: "facebook.com",
                                                target: "blank",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            }), (0, a.jsx)("a", {
                                                href: "twitter.com",
                                                target: "blank",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }), (0, a.jsx)("a", {
                                                href: "instagram.com",
                                                target: "blank",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            }), (0, a.jsx)("a", {
                                                href: "youtube.com",
                                                target: "blank",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-youtube"
                                                })
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                        children: (0, a.jsxs)("div", {
                                            className: "kf-h-group",
                                            children: [(0, a.jsx)("i", {
                                                className: "far fa-clock"
                                            }), " ", (0, a.jsx)("em", {
                                                children: "opening hours :"
                                            }), " 08:00 am - 09:00 pm"]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                        children: (0, a.jsxs)("div", {
                                            className: "kf-h-group",
                                            children: [(0, a.jsx)("i", {
                                                className: "fas fa-map-marker-alt"
                                            }), " ", (0, a.jsx)("em", {
                                                children: "Location :"
                                            }), " 55 main street, new york"]
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                },
                j = e => {
                    let {
                        children: s
                    } = e;
                    return (0, i.useEffect)(() => {
                        d(), window.addEventListener("scroll", d)
                    }, []), (0, i.useEffect)(() => {
                        window.Splitting = l(8041), Splitting()
                    }), (0, i.useEffect)(() => {
                        let {
                            jarallax: e,
                            jarallaxVideo: s
                        } = l(1014);
                        s(), e(document.querySelectorAll(".js-parallax"), {
                            speed: .65,
                            type: "scroll"
                        })
                    }, []), (0, a.jsxs)(i.Fragment, {
                        children: [(0, a.jsx)(n, {}), (0, a.jsxs)("div", {
                            className: "bg",
                            children: [(0, a.jsx)(x, {}), (0, a.jsx)("div", {
                                className: "wrapper",
                                children: s
                            }), (0, a.jsx)(o, {})]
                        }), (0, a.jsxs)("div", {
                            className: "bsl-popup",
                            "data-theme": "kaffen",
                            "data-category": "react",
                            children: [(0, a.jsx)("div", {
                                className: "bsl-popup__buttons"
                            }), (0, a.jsxs)("div", {
                                className: "bsl-popup__content bsl-popup__content-related",
                                children: [(0, a.jsx)("div", {
                                    className: "bsl-popup__menu"
                                }), (0, a.jsxs)("div", {
                                    className: "bsl-popup__tabs",
                                    children: [(0, a.jsx)("div", {
                                        className: "bsl-popup__tab bsl-popup__tab-demo"
                                    }), (0, a.jsx)("div", {
                                        className: "bsl-popup__tab bsl-popup__tab-all"
                                    }), (0, a.jsx)("div", {
                                        className: "bsl-popup__tab bsl-popup__tab-related"
                                    }), (0, a.jsx)("div", {
                                        className: "bsl-popup__tab bsl-popup__tab-version"
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "bsl-popup__content bsl-popup__content-help"
                            })]
                        })]
                    })
                }
        }
    }
]);