(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, a, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return i(8379)
            }])
        },
        8379: function(e, a, i) {
            "use strict";
            i.r(a), i.d(a, {
                default: function() {
                    return X
                }
            });
            var o = i(5893),
                t = i(9008),
                c = i.n(t),
                n = i(4492),
                s = i.n(n),
                l = i(3854),
                _ = i(5675),
                r = i.n(_),
                d = i(9473),
                h = i(5824),
                m = i(7294),
                v = i(1664),
                x = i.n(v),
                b = i(7285);
            let p = (e, a, i, o) => ({
                    hidden: {
                        x: "left" === e ? "-100%" : "right" === e ? "100%" : 0,
                        y: "up" === e ? "100%" : "down" === e ? "100%" : 0
                    },
                    show: {
                        x: 0,
                        y: 0,
                        transition: {
                            type: a,
                            delay: i,
                            duration: o,
                            ease: "easeOut"
                        }
                    }
                }),
                u = (e, a) => ({
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: e,
                            delayChildren: a
                        }
                    }
                }),
                j = {
                    hidden: {
                        opacity: 0
                    },
                    show: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        return {
                            opacity: 1,
                            transition: {
                                staggerChildren: .1,
                                delayChildren: .1 * e
                            }
                        }
                    }
                },
                g = {
                    hidden: {
                        opacity: 0,
                        y: 20
                    },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "tween",
                            ease: "easeIn"
                        }
                    }
                },
                f = (e, a, i, o) => ({
                    hidden: {
                        x: "left" === e ? 100 : "right" === e ? -100 : 0,
                        y: "up" === e ? 100 : "down" === e ? -100 : 0,
                        opacity: 0
                    },
                    show: {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        transition: {
                            type: a,
                            delay: i,
                            duration: o,
                            ease: "easeOut"
                        }
                    }
                }),
                w = e => ({
                    hidden: {
                        x: "left" === e ? "-100%" : "100%",
                        rotate: 120,
                        opacity: 0
                    },
                    show: {
                        x: 0,
                        rotate: 0,
                        opacity: 1,
                        transition: {
                            type: "spring",
                            duration: .9,
                            delay: .1
                        }
                    }
                }),
                k = {
                    hidden: {
                        opacity: 0,
                        y: 50,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 140
                        }
                    },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 80,
                            delay: .5
                        }
                    }
                },
                N = e => {
                    let {
                        title: a,
                        textStyles: i
                    } = e;
                    return (0, o.jsx)(b.E.h1, {
                        variants: j,
                        className: "".concat(i),
                        children: Array.from(a).map((e, a) => (0, o.jsx)(b.E.span, {
                            variants: g,
                            children: " " === e ? "\xa0" : e
                        }, a))
                    })
                },
                y = e => {
                    let {
                        id: a,
                        head: i,
                        icon1: t,
                        state: c,
                        icon2: n
                    } = e, l = (0, d.I0)(), _ = e => {
                        l((0, h.II)(e))
                    };
                    return (0, o.jsxs)(x(), {
                        onClick: () => _(a),
                        href: "#".concat("Contact Me" === i ? "contact-me" : i.toLowerCase(), "	\n			"),
                        className: "".concat(s().nav_link, " ").concat(c ? s().nav_active : ""),
                        children: [(0, o.jsx)("span", {
                            children: (0, o.jsx)(N, {
                                title: "".concat(i),
                                textStyles: ""
                            })
                        }), (0, o.jsx)("div", {
                            className: "".concat(s().nav_icon, " ").concat(s().mobile, " ").concat(s().huge),
                            children: c ? n : t
                        })]
                    })
                },
                C = () => {
                    let {
                        navToggle: e,
                        isChecked: a,
                        themeToggle: i,
                        navData: t,
                        currentTheme: c
                    } = (0, d.v9)(e => e.app), n = (0, d.I0)(), _ = e => {
                        n((0, h.Dc)(e.target.value))
                    }, v = () => {
                        n((0, h.oz)())
                    }, x = (0, m.useRef)(null);
                    return (0, m.useEffect)(() => {
                        let e = e => {
                            x.current.contains(e.target) || n((0, h.Pn)())
                        };
                        return document.addEventListener("click", e, !0), () => {
                            document.removeEventListener("click", e, !0)
                        }
                    }, [n]), (0, m.useEffect)(() => {
                        n((0, h.Dc)(c))
                    }), (0, o.jsxs)("nav", {
                        className: "".concat(s().nav_block, " ").concat(e ? s().active : "", " "),
                        children: [(0, o.jsxs)("div", {
                            className: s().nav_logo_box,
                            children: [(0, o.jsx)(b.E.div, {
                                variants: f("left", "tween", .2, 1),
                                whileInView: "show",
                                initial: "hidden",
                                viewport: {
                                    once: !0,
                                    amount: .25
                                },
                                className: s().nav_logo_image,
                                children: (0, o.jsx)(r(), {
                                    width: 500,
                                    height: 500,
                                    src: "/profile.jpg",
                                    alt: "A Logo for my brand",
                                    className: s().nav_logo
                                })
                            }), (0, o.jsx)(b.E.div, {
                                className: s().nav_logo_text,
                                variants: f("right", "tween", .1, 1),
                                whileInView: "show",
                                initial: "hidden",
                                viewport: {
                                    once: !1,
                                    amount: .25
                                },
                                children: (0, o.jsx)(b.E.span, {
                                    children: "Isaac"
                                })
                            })]
                        }), (0, o.jsx)("div", {
                            className: "".concat(s().nav_links_box, " "),
                            children: (0, o.jsxs)("ul", {
                                className: "".concat(s().nav_links_block, "  ").concat(e ? s().active : "", " "),
                                children: [null == t ? void 0 : t.map(e => (0, o.jsx)(y, {
                                    id: null == e ? void 0 : e.id,
                                    ...e
                                }, null == e ? void 0 : e.id)), (0, o.jsx)("div", {
                                    className: "".concat(s().nav_logo_image, " ").concat(s().huge),
                                    children: (0, o.jsx)(r(), {
                                        width: 500,
                                        height: 500,
                                        src: "/AiZeek.png",
                                        alt: "A Logo for my brand",
                                        className: s().nav_logo
                                    })
                                })]
                            })
                        }), (0, o.jsx)("div", {
                            className: s().nav_theme_area,
                            onClick: v,
                            children: i ? (0, o.jsx)(l.dvR, {
                                className: "".concat(s().theme_toggle)
                            }) : (0, o.jsx)(l.Moc, {
                                className: "".concat(s().theme_toggle)
                            })
                        }), (0, o.jsxs)("div", {
                            ref: x,
                            className: "".concat(i ? s().active : "", " ").concat(s().theme_box),
                            children: [(0, o.jsx)("div", {
                                className: "".concat(s().theme_desc),
                                children: (0, o.jsx)("h3", {
                                    children: "Pick a theme"
                                })
                            }), (0, o.jsx)("div", {
                                className: "".concat(s().hr)
                            }), (0, o.jsxs)("div", {
                                className: "".concat(s().select_block),
                                children: [(0, o.jsx)("label", {
                                    htmlFor: "black",
                                    className: "".concat(s().radio_label),
                                    children: "Lights Out"
                                }), (0, o.jsx)("input", {
                                    onChange: _,
                                    type: "radio",
                                    name: "theme",
                                    id: "black",
                                    value: "black",
                                    className: "".concat(s().radio)
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "".concat(s().select_block),
                                children: [(0, o.jsx)("label", {
                                    htmlFor: "dim",
                                    className: "".concat(s().radio_label),
                                    children: "Dim"
                                }), (0, o.jsx)("input", {
                                    onChange: _,
                                    type: "radio",
                                    name: "theme",
                                    id: "dim",
                                    value: "dim",
                                    className: "".concat(s().radio)
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "".concat(s().select_block),
                                children: [(0, o.jsx)("label", {
                                    htmlFor: "coffee",
                                    className: "".concat(s().radio_label),
                                    children: "Coffee"
                                }), (0, o.jsx)("input", {
                                    onChange: _,
                                    type: "radio",
                                    name: "theme",
                                    id: "coffee",
                                    value: "coffee",
                                    className: "".concat(s().radio)
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "".concat(s().select_block),
                                children: [(0, o.jsx)("label", {
                                    htmlFor: "light",
                                    className: "".concat(s().radio_label),
                                    children: "Light"
                                }), (0, o.jsx)("input", {
                                    onChange: _,
                                    type: "radio",
                                    name: "theme",
                                    id: "light",
                                    value: "light",
                                    className: "".concat(s().radio)
                                })]
                            })]
                        })]
                    })
                };
            var I = i(7704),
                S = i.n(I);
            let E = e => {
                let {
                    targetRef: a
                } = e, {
                    skillshead: i
                } = (0, d.v9)(e => e.app), t = (0, d.I0)(), c = e => {
                    t((0, h.ht)(e))
                };
                return (0, o.jsxs)("div", {
                    ref: a,
                    id: "skills",
                    className: "".concat(S().skills_section),
                    children: [(0, o.jsxs)(b.E.div, {
                        className: "".concat(S().skills_head_box),
                        children: [(0, o.jsx)("h1", {
                            className: "".concat(S().skills_head),
                            children: "Skills"
                        }), (0, o.jsx)("p", {
                            className: "".concat(S().skills_desc),
                            children: "My technical level"
                        })]
                    }), (0, o.jsx)(b.E.div, {
                        variants: f("up", "tween", 0, 1),
                        whileInView: "show",
                        initial: "hidden",
                        viewport: {
                            once: !1,
                            amount: .2
                        },
                        className: "".concat(S().skills_card_block),
                        children: null == i ? void 0 : i.map(e => (0, o.jsxs)("div", {
                            className: "".concat(S().skills_card_box, " ").concat(e.state ? S().active : "", " "),
                            children: [(0, o.jsxs)("div", {
                                onClick: () => c(e.id),
                                className: "".concat(S().skills_card_head),
                                children: [(0, o.jsx)("div", {
                                    className: "".concat(S().skills_head_icon),
                                    children: null == e ? void 0 : e.icon3
                                }), (0, o.jsx)("h1", {
                                    className: "".concat(S().skills_head_desc),
                                    children: e.desc
                                }), (0, o.jsx)("div", {
                                    className: "".concat(S().skills_head_chev),
                                    children: e.state ? null == e ? void 0 : e.icon1 : null == e ? void 0 : e.icon2
                                })]
                            }), (0, o.jsx)("div", {
                                className: "".concat(S().stack_card_block),
                                children: e.stack.map(e => (0, o.jsxs)("div", {
                                    className: "".concat(S().stack_card_box),
                                    children: [(0, o.jsx)("div", {
                                        className: "".concat(S().stack_card_image),
                                        children: (0, o.jsx)(r(), {
                                            className: "".concat(S().img),
                                            width: 25,
                                            height: 25,
                                            src: e.img,
                                            alt: "alt"
                                        })
                                    }), (0, o.jsx)("h1", {
                                        className: "".concat(S().stack_card_desc),
                                        children: e.desc
                                    })]
                                }, e.id))
                            })]
                        }, e.id))
                    })]
                })
            };
            var F = i(2482),
                H = i.n(F),
                V = i(8138),
                A = i(8193),
                O = i(2585);
            let P = e => {
                let {
                    targetRef: a
                } = e;
                return (0, o.jsx)("section", {
                    ref: a,
                    className: "".concat(H().home, " ").concat(H().section),
                    id: "home",
                    children: (0, o.jsx)("div", {
                        className: "".concat(H().home__container, " ").concat(H().grid),
                        children: (0, o.jsxs)("div", {
                            className: "".concat(H().home__content, " "),
                            children: [(0, o.jsxs)("aside", {
                                className: "".concat(H().home__social),
                                children: [(0, o.jsx)(b.E.div, {
                                    variants: p("left", "tween", 0, 1),
                                    whileInView: "show",
                                    initial: "hidden",
                                    viewport: {
                                        once: !1,
                                        amount: .25
                                    },
                                    children: (0, o.jsx)(x(), {
                                        target: "_blank",
                                        href: "https://www.linkedin.com/in/isaac-iyaye-williams-3143041b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHvVVSyhITLuhOh5vKTGG%2Bg%3D%3D",
                                        className: "".concat(H().home__social_icon),
                                        children: (0, o.jsx)(V.hhW, {
                                            className: "".concat(H().social_icon)
                                        })
                                    })
                                }), (0, o.jsx)(b.E.div, {
                                    variants: p("left", "tween", .1, 1),
                                    whileInView: "show",
                                    initial: "hidden",
                                    viewport: {
                                        once: !1,
                                        amount: .25
                                    },
                                    children: (0, o.jsx)(x(), {
                                        href: "https://github.com/AI-ZeeK",
                                        target: "_blank",
                                        className: "".concat(H().home__social_icon),
                                        children: (0, o.jsx)(A.RrF, {})
                                    })
                                })]
                            }), (0, o.jsx)(b.E.div, {
                                variants: f("left", "tween", .2, 1),
                                whileInView: "show",
                                initial: "hidden",
                                viewport: {
                                    once: !1,
                                    amount: .25
                                },
                                className: "".concat(H().home__Image),
                                children: (0, o.jsxs)("svg", {
                                    className: "".concat(H().home__blob),
                                    viewBox: "120 0 900 1000",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [(0, o.jsxs)("defs", {
                                        children: [(0, o.jsxs)("filter", {
                                            id: "grain",
                                            x: "-50vw",
                                            y: "-50vh",
                                            width: "100vw",
                                            height: "100vh",
                                            children: [(0, o.jsx)("feFlood", {
                                                "flood-color": "#ffffff",
                                                result: "neutral-gray"
                                            }), (0, o.jsx)("feTurbulence", { in: "neutral-gray",
                                                type: "fractalNoise",
                                                baseFrequency: "2.5",
                                                numOctaves: "100",
                                                stitchTiles: "stitch",
                                                result: "noise"
                                            }), (0, o.jsx)("feColorMatrix", { in: "noise",
                                                type: "saturate",
                                                values: "0",
                                                result: "destaturatedNoise"
                                            }), (0, o.jsx)("feComponentTransfer", { in: "desaturatedNoise",
                                                result: "theNoise",
                                                children: (0, o.jsx)("feFuncA", {
                                                    type: "table",
                                                    tableValues: "0 0 0.35 0"
                                                })
                                            }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                                in2: "theNoise",
                                                mode: "soft-light",
                                                result: "noisy-image"
                                            })]
                                        }), (0, o.jsx)("clipPath", {
                                            id: "shape",
                                            children: (0, o.jsx)("path", {
                                                fill: "currentColor",
                                                d: "M882,648Q796,796,648,851.5Q500,907,323.5,880Q147,853,125,676.5Q103,500,169,367.5Q235,235,367.5,162Q500,89,650,144.5Q800,200,884,350Q968,500,882,648Z"
                                            })
                                        })]
                                    }), (0, o.jsxs)("g", {
                                        filter: "url(#grain)",
                                        "clip-path": "url(#shape)",
                                        children: [(0, o.jsx)("path", {
                                            fill: "",
                                            d: "M882,648Q796,796,648,851.5Q500,907,323.5,880Q147,853,125,676.5Q103,500,169,367.5Q235,235,367.5,162Q500,89,650,144.5Q800,200,884,350Q968,500,882,648Z"
                                        }), (0, o.jsx)("image", {
                                            className: "".concat(H().home__blob_Image),
                                            x: "70",
                                            y: "160",
                                            xlinkHref: "/2-preview.png"
                                        })]
                                    })]
                                })
                            }), (0, o.jsxs)(b.E.div, {
                                variants: u,
                                whileInView: "show",
                                initial: "hidden",
                                viewport: {
                                    once: !1,
                                    amount: .25
                                },
                                className: "".concat(H().home__data),
                                children: [(0, o.jsxs)(b.E.h1, {
                                    variants: f("up", "tween", 0, 1),
                                    whileInView: "show",
                                    initial: "hidden",
                                    viewport: {
                                        once: !1,
                                        amount: .25
                                    },
                                    className: "".concat(H().home__title),
                                    children: ["Hi, I am", " ", (0, o.jsx)("span", {
                                        className: "".concat(H().home__title_span),
                                        children: "Isaac"
                                    })]
                                }), (0, o.jsx)(N, {
                                    title: "Full Stack Developer",
                                    textStyles: "".concat(H().home__subtitle)
                                }), (0, o.jsx)(b.E.p, {
                                    variants: f("down", "tween", 0, 1),
                                    whileInView: "show",
                                    initial: "hidden",
                                    viewport: {
                                        once: !1,
                                        amount: .25
                                    },
                                    className: "".concat(H().home__description, " mb-2"),
                                    children: "I am a full stack web developer with a passion for creating high-quality web applications. My technical expertise includes proficiency in front-end and back-end development, as well as experience with various web development frameworks and programming languages. I am also skilled in smart contract development and blockchain integration, allowing me to create efficient and scalable solutions that leverage the power of blockchain technology."
                                }), (0, o.jsx)(b.E.div, {
                                    variants: f("left", "tween", 0, 1.2),
                                    whileInView: "show",
                                    initial: "hidden",
                                    viewport: {
                                        once: !1,
                                        amount: .25
                                    },
                                    children: (0, o.jsxs)(x(), {
                                        href: "#contact-me",
                                        className: "btn_primary ".concat(H().btn_primary, " ").concat(H().button__flex),
                                        children: ["Contact Me", (0, o.jsx)(O.iEt, {
                                            className: "text-[1.4rem] transition ".concat(H().icon)
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                })
            };
            var M = i(7901),
                T = i.n(M);
            let D = () => (0, o.jsxs)("footer", {
                className: T().footer,
                children: [(0, o.jsxs)(b.E.div, {
                    className: T().footer_top,
                    children: [(0, o.jsxs)("div", {
                        className: T().footer_top_head,
                        children: [(0, o.jsx)(b.E.div, {
                            variants: f("left", "tween", 0, 1),
                            whileInView: "show",
                            initial: "hidden",
                            viewport: {
                                once: !1,
                                amount: .25
                            },
                            className: T().footer_top_image,
                            children: (0, o.jsx)(r(), {
                                className: T().img,
                                width: 200,
                                height: 200,
                                src: "/AiZeek.png",
                                alt: "alt"
                            })
                        }), (0, o.jsxs)(b.E.div, {
                            variants: f("right", "tween", 0, 1),
                            whileInView: "show",
                            initial: "hidden",
                            viewport: {
                                once: !1,
                                amount: .25
                            },
                            className: T().footer_top_info,
                            children: [(0, o.jsx)("h1", {
                                children: "Isaac Williams"
                            }), (0, o.jsx)("p", {
                                children: "FullStack Developer"
                            }), (0, o.jsx)("p", {
                                children: "Blockchain Developer"
                            })]
                        })]
                    }), (0, o.jsxs)(b.E.ul, {
                        variants: u,
                        whileInView: "show",
                        initial: "hidden",
                        viewport: {
                            once: !1,
                            amount: .25
                        },
                        className: T().footer_top_links,
                        children: [(0, o.jsx)(b.E.li, {
                            variants: f("left", "tween", 0, 1),
                            whileInView: "show",
                            initial: "hidden",
                            viewport: {
                                once: !1,
                                amount: .25
                            },
                            children: (0, o.jsx)(x(), {
                                href: "#home",
                                children: "Home"
                            })
                        }), (0, o.jsx)(b.E.li, {
                            variants: f("left", "tween", 0, 1),
                            whileInView: "show",
                            initial: "hidden",
                            viewport: {
                                once: !1,
                                amount: .25
                            },
                            children: (0, o.jsx)(x(), {
                                href: "#portfolio",
                                children: "Portfolio"
                            })
                        }), (0, o.jsx)(b.E.li, {
                            variants: f("left", "tween", 0, 1),
                            whileInView: "show",
                            initial: "hidden",
                            viewport: {
                                once: !1,
                                amount: .25
                            },
                            children: (0, o.jsx)(x(), {
                                href: "#services",
                                children: "Services"
                            })
                        })]
                    }), (0, o.jsxs)(b.E.ul, {
                        variants: u,
                        whileInView: "show",
                        initial: "hidden",
                        viewport: {
                            once: !1,
                            amount: .25
                        },
                        className: T().footer_top_socials,
                        children: [(0, o.jsx)(b.E.li, {
                            variants: w("right"),
                            whileInView: "show",
                            initial: "hidden",
                            viewport: {
                                once: !1,
                                amount: .25
                            },
                            children: (0, o.jsx)(x(), {
                                href: "https://www.linkedin.com/in/isaac-iyaye-williams-3143041b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHvVVSyhITLuhOh5vKTGG%2Bg%3D%3D",
                                children: (0, o.jsx)(V.hhW, {})
                            })
                        }), (0, o.jsx)(b.E.li, {
                            variants: w("right"),
                            whileInView: "show",
                            initial: "hidden",
                            viewport: {
                                once: !1,
                                amount: .25
                            },
                            children: (0, o.jsx)(x(), {
                                href: "https://github.com/AI-ZeeK",
                                children: (0, o.jsx)(A.RrF, {})
                            })
                        }), (0, o.jsx)(b.E.li, {
                            variants: w("right"),
                            whileInView: "show",
                            initial: "hidden",
                            viewport: {
                                once: !1,
                                amount: .25
                            },
                            children: (0, o.jsx)(x(), {
                                href: "https://twitter.com/_____Mamba?t=0fdrPb3C-VURWSLabHYhlw&s=09",
                                children: (0, o.jsx)(A.h3E, {})
                            })
                        })]
                    })]
                }), (0, o.jsxs)(b.E.div, {
                    variants: k,
                    whileInView: "show",
                    initial: "hidden",
                    viewport: {
                        once: !1,
                        amount: .25
                    },
                    className: T().footer_bottom,
                    children: [(0, o.jsx)("span", {
                        children: "\xa9 Isaac Tubonibo"
                    }), (0, o.jsx)("strong", {
                        children: "All rights reserved"
                    })]
                }), (0, o.jsx)("div", {
                    className: T().bord_box
                }), (0, o.jsx)("div", {
                    className: T().bord_box_b
                })]
            });
            var Z = i(7762),
                L = i.n(Z),
                Q = i(1306),
                R = i(155);
            let W = async e => {
                    try {
                        let a = await fetch("/api/contact", {
                            method: "POST",
                            body: JSON.stringify(e),
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            }
                        });
                        return a.ok
                    } catch (e) {
                        console.log(e, ";errororororororo")
                    }
                },
                q = () => (0, o.jsxs)("div", {
                    role: "status",
                    children: [(0, o.jsxs)("svg", {
                        "aria-hidden": "true",
                        className: "w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
                        viewBox: "0 0 100 101",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, o.jsx)("path", {
                            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                            fill: "currentColor"
                        }), (0, o.jsx)("path", {
                            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                            fill: "currentFill"
                        })]
                    }), (0, o.jsx)("span", {
                        className: "sr-only",
                        children: "Loading..."
                    })]
                }),
                G = () => {
                    let {
                        formData: e,
                        formSent: a,
                        formBtnAble: i
                    } = (0, d.v9)(e => e.app), t = (0, d.I0)(), c = a => {
                        t((0, h.U5)({ ...e,
                            [a.target.name]: a.target.value
                        })), e.name && e.email && e.message || t((0, h.yP)())
                    }, n = () => {
                        e.name && e.email && e.message || alert("form input empty")
                    }, s = async a => {
                        a.preventDefault(), t((0, h.hv)());
                        let i = await W(e);
                        setTimeout(() => {
                            alert("Email Sent")
                        }, 1500), setTimeout(() => {
                            t((0, h.Pb)()), t((0, h.U5)({
                                name: "",
                                email: "",
                                message: ""
                            }))
                        }, 2e3), console.log(i)
                    };
                    return (0, o.jsxs)("div", {
                        className: "".concat(L().contact_block),
                        children: [(0, o.jsxs)(b.E.div, {
                            className: "".concat(L().contact_advert_block),
                            children: [(0, o.jsxs)(b.E.div, {
                                variants: f("left", "tween", 0, .8),
                                whileInView: "show",
                                initial: "hidden",
                                viewport: {
                                    once: !1,
                                    amount: .25
                                },
                                className: "".concat(L().contact_advert_info),
                                children: [(0, o.jsx)("h2", {
                                    children: "Do you have a project in mind?"
                                }), (0, o.jsx)("p", {
                                    children: "Contact me for your fullstack Web2/Web3 projects"
                                }), (0, o.jsx)(b.E.div, {
                                    children: (0, o.jsxs)(x(), {
                                        href: "#contact-me",
                                        className: "btn_primary ".concat(L().btn_primary),
                                        children: ["Contact Me", (0, o.jsx)(O.iEt, {
                                            className: "text-[1.4rem] transition ".concat(L().icon)
                                        })]
                                    })
                                })]
                            }), (0, o.jsx)(b.E.div, {
                                variants: f("right", "tween", 0, .8),
                                whileInView: "show",
                                initial: "hidden",
                                viewport: {
                                    once: !1,
                                    amount: .25
                                },
                                className: "".concat(L().contact_advert_image),
                                children: (0, o.jsx)(r(), {
                                    className: "".concat(L().img),
                                    width: 200,
                                    height: 200,
                                    alt: "alternate",
                                    src: "/phone214.jpg"
                                })
                            })]
                        }), (0, o.jsxs)("div", {
                            id: "contact-me",
                            className: "".concat(L().contact_middle_block),
                            children: [(0, o.jsx)("h2", {
                                children: "Contact Me"
                            }), (0, o.jsx)("small", {
                                children: "Get in touch"
                            })]
                        }), (0, o.jsxs)("div", {
                            className: "".concat(L().contact_bottom_block),
                            children: [(0, o.jsx)(b.E.div, {
                                variants: f("right", "tween", 0, .8),
                                whileInView: "show",
                                initial: "hidden",
                                viewport: {
                                    once: !1,
                                    amount: .25
                                },
                                className: "".concat(L().contact_info_block),
                                children: Q.kX.map(e => (0, o.jsxs)("div", {
                                    className: "".concat(L().contact_info_box),
                                    children: [(0, o.jsx)(b.E.div, {
                                        className: "".concat(L().info_icon),
                                        children: e.icon
                                    }), (0, o.jsxs)("div", {
                                        children: [(0, o.jsx)("h3", {
                                            children: e.head
                                        }), (0, o.jsx)("small", {
                                            children: e.desc
                                        })]
                                    })]
                                }, e.id))
                            }), (0, o.jsxs)(b.E.form, {
                                onSubmit: s,
                                variants: f("left", "tween", 0, .8),
                                whileInView: "show",
                                initial: "hidden",
                                viewport: {
                                    once: !1,
                                    amount: .25
                                },
                                className: "".concat(L().contact_input_block),
                                children: [(0, o.jsxs)("div", {
                                    className: "".concat(L().contact_input_box),
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "",
                                        children: "Name* "
                                    }), (0, o.jsx)("input", {
                                        className: "".concat(L().contact_input),
                                        type: "text",
                                        placeholder: "Your Full Name",
                                        value: e.name,
                                        name: "name",
                                        required: !0,
                                        onChange: c
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "".concat(L().contact_input_box),
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "",
                                        children: "Email* "
                                    }), (0, o.jsx)("input", {
                                        className: "".concat(L().contact_input),
                                        type: "email",
                                        placeholder: "Your Email Address",
                                        value: e.email,
                                        required: !0,
                                        onChange: c,
                                        name: "email"
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "".concat(L().contact_input_box),
                                    children: [(0, o.jsx)("label", {
                                        htmlFor: "",
                                        children: "Message*"
                                    }), (0, o.jsx)("textarea", {
                                        className: "".concat(L().contact_textarea),
                                        rows: 4,
                                        cols: 2,
                                        placeholder: "Your message",
                                        value: e.message,
                                        required: !0,
                                        name: "message",
                                        onChange: c
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "".concat(L().contact_input_box, " ").concat(L().btn_box),
                                    children: [(0, o.jsx)("button", {
                                        onClick: n,
                                        disabled: i,
                                        type: "submit",
                                        className: "btn_primary ".concat(L().btn_primary),
                                        children: a ? (0, o.jsx)(q, {}) : (0, o.jsxs)(o.Fragment, {
                                            children: ["Send Message", (0, o.jsx)(O.iEt, {
                                                className: "text-[1.4rem] transition ".concat(L().icon)
                                            })]
                                        })
                                    }), (0, o.jsxs)(x(), {
                                        target: "_blank",
                                        href: "https://api.whatsapp.com/send/?phone=2348129405476&text&type=phone_number&app_absent=0",
                                        className: "btn_primary ".concat(L().btn_primary),
                                        children: ["Whatsapp", (0, o.jsx)(R.ff9, {
                                            className: "text-[1.4rem] transition ".concat(L().icon)
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                };
            var B = i(1890),
                J = i.n(B);
            let Y = () => (0, o.jsxs)("div", {
                id: "about",
                className: "".concat(J().about_section),
                children: [(0, o.jsxs)(b.E.div, {
                    className: "".concat(J().about_head_box),
                    children: [(0, o.jsx)("h1", {
                        className: "".concat(J().about_head),
                        children: "About"
                    }), (0, o.jsx)("p", {
                        className: "".concat(J().about_desc),
                        children: "My Introduction"
                    })]
                }), (0, o.jsxs)(b.E.div, {
                    variants: f("left", "tween", 0, .5),
                    whileInView: "show",
                    initial: "hidden",
                    viewport: {
                        once: !1,
                        amount: .05
                    },
                    className: "".concat(J().about_body_block),
                    children: [(0, o.jsx)("div", {
                        className: "".concat(J().about_image),
                        children: (0, o.jsx)(r(), {
                            className: "".concat(J().img),
                            width: 860,
                            height: 860,
                            alt: "alternate",
                            src: "/avel.jpg"
                        })
                    }), (0, o.jsxs)("div", {
                        className: "".concat(J().about_info_block),
                        children: [(0, o.jsx)("div", {
                            className: "".concat(J().about_info_box),
                            children: (0, o.jsxs)("p", {
                                children: ["I am committed to delivering solutions that are not only functional and user-friendly, but also scalable and efficient.", (0, o.jsx)("br", {}), " In addition to my technical skills, I am always eager to learn and explore new possibilities. I am dedicated to staying up-to-date with the latest trends and advancements in the industry, and I consistently research and grow my knowledge to deliver solutions that meet the needs of stakeholders."]
                            })
                        }), (0, o.jsx)("div", {
                            className: "".concat(J().about_info_box),
                            children: (0, o.jsxs)(x(), {
                                href: "https://drive.google.com/file/d/1U67MM0Ts0aRkjLFCXDNLoSnZJkbf4ZY2/view?usp=drivesdk",
                                target: "_blank",
                                className: "".concat(J().btn_primary),
                                children: [(0, o.jsx)("span", {
                                    children: "Download CV"
                                }), (0, o.jsx)(l.yFZ, {
                                    className: "text-[1.4rem] transition ".concat(J().icon)
                                })]
                            })
                        })]
                    })]
                })]
            });
            var K = i(7355),
                U = i.n(K);
            let z = () => (0, o.jsxs)(b.E.section, {
                id: "portfolio",
                className: "".concat(U().service_section),
                children: [(0, o.jsxs)(b.E.div, {
                    className: "".concat(U().service_head_box),
                    children: [(0, o.jsx)("h1", {
                        className: "".concat(U().service_head),
                        children: "Projects"
                    }), (0, o.jsx)("p", {
                        className: "".concat(U().service_desc),
                        children: "Some of my projects"
                    })]
                }), (0, o.jsx)("div", {
                    className: U().service_card_block,
                    children: Q.q.map(e => (0, o.jsxs)("div", {
                        className: U().portfolio,
                        children: [(0, o.jsxs)("div", {
                            className: U().portfolio_card,
                            children: [(0, o.jsxs)("div", {
                                className: U().portfolio_card_img_box,
                                children: [(0, o.jsx)(r(), {
                                    className: U().portfolio_card_img,
                                    width: 500,
                                    height: 500,
                                    src: null == e ? void 0 : e.img,
                                    alt: "ralt"
                                }), " "]
                            }), (0, o.jsx)("div", {
                                className: U().portfolio_card_desc,
                                children: (0, o.jsxs)("div", {
                                    className: U().portfolio_card_box,
                                    children: [(0, o.jsxs)("div", {
                                        className: U().card_desc_head,
                                        children: [(0, o.jsx)("span", {
                                            children: e.head
                                        }), (0, o.jsx)("div", {
                                            className: U().line_through
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        className: U().tech_used_box,
                                        children: [(0, o.jsx)("small", {
                                            children: "tech used"
                                        }), (0, o.jsx)("div", {
                                            className: U().tech_used,
                                            children: e.stack.map((e, a) => (0, o.jsx)("div", {
                                                children: e
                                            }, a))
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        className: U().btn_link_box,
                                        children: [e.weblink && (0, o.jsx)(x(), {
                                            className: U().btn_link,
                                            href: e.weblink,
                                            children: "Demo"
                                        }), (0, o.jsx)(x(), {
                                            className: U().btn_link,
                                            href: e.githublink,
                                            children: "GitHub"
                                        })]
                                    })]
                                })
                            })]
                        }), (0, o.jsx)("div", {
                            className: U().portfolio_desc,
                            children: null == e ? void 0 : e.desc
                        })]
                    }, null == e ? void 0 : e.id))
                })]
            });

            function X() {
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(c(), {
                        children: [(0, o.jsx)("title", {
                            children: "| Isaacs Portfolio"
                        }), (0, o.jsx)("meta", {
                            name: "description",
                            content: "Isaac Tubonibo Iyaye-Williams FullStack Web3 Developer"
                        }), (0, o.jsx)("meta", {
                            name: "Keywords",
                            content: "Isaac, Tubonibo, Portfolio, Website, Full-stack, developer, full, stack, web3, React, Redux, Next, Next.js, Node.js, Nigerian, Programmer, Developer, Blockchain, Solidity, Front, Front-end, Frontend, Fullstack"
                        }), (0, o.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, o.jsx)("meta", {
                            name: "color-scheme",
                            content: "dark light"
                        }), (0, o.jsx)("link", {
                            rel: "icon",
                            href: "/AiZeek.png"
                        })]
                    }), (0, o.jsxs)("div", {
                        children: [(0, o.jsx)("header", {
                            children: (0, o.jsx)(C, {})
                        }), (0, o.jsxs)("main", {
                            className: H().main,
                            children: [(0, o.jsx)(P, {}), (0, o.jsx)("div", {
                                className: "line-through"
                            }), (0, o.jsx)(Y, {}), (0, o.jsx)("div", {
                                className: "line-through"
                            }), (0, o.jsx)(E, {}), (0, o.jsx)("div", {
                                className: "line-through"
                            }), (0, o.jsx)(z, {}), (0, o.jsx)("div", {
                                className: "line-through"
                            }), (0, o.jsx)(G, {})]
                        }), (0, o.jsx)("div", {
                            className: "line-through"
                        }), (0, o.jsx)(D, {})]
                    })]
                })
            }
        },
        1890: function(e) {
            e.exports = {
                about_section: "About_about_section__yOlvY",
                about_head_box: "About_about_head_box__LEp06",
                about_head: "About_about_head__dOZfh",
                about_desc: "About_about_desc__F5rAI",
                about_body_block: "About_about_body_block__KIXkm",
                about_image: "About_about_image__ucMOw",
                img: "About_img__SQwbZ",
                about_info_block: "About_about_info_block__4pRbf",
                about_info_box: "About_about_info_box__DQb8U",
                btn_primary: "About_btn_primary__2cXgR",
                icon: "About_icon__cKJhZ",
                about_ingo_block: "About_about_ingo_block__0vkYP"
            }
        },
        7762: function(e) {
            e.exports = {
                contact_block: "Contact_contact_block__YqzWM",
                contact_advert_block: "Contact_contact_advert_block__lLwmc",
                contact_advert_info: "Contact_contact_advert_info__ZEjRV",
                btn_primary: "Contact_btn_primary__daLjO",
                icon: "Contact_icon__hRiN6",
                contact_advert_image: "Contact_contact_advert_image__jNYfZ",
                img: "Contact_img__hXA5G",
                contact_middle_block: "Contact_contact_middle_block___DVJy",
                contact_bottom_block: "Contact_contact_bottom_block___NeHD",
                contact_info_block: "Contact_contact_info_block__nhq0Q",
                contact_info_box: "Contact_contact_info_box__kG6A6",
                info_icon: "Contact_info_icon__RGvn1",
                contact_input_block: "Contact_contact_input_block__JADdx",
                btn_box: "Contact_btn_box__E6PzT",
                contact_input_box: "Contact_contact_input_box__U3rJy",
                contact_input: "Contact_contact_input__PS9Nx",
                contact_textarea: "Contact_contact_textarea__LGJvx"
            }
        },
        7901: function(e) {
            e.exports = {
                footer: "Footer_footer__oaUOW",
                footer_top: "Footer_footer_top__Yq8kb",
                footer_top_head: "Footer_footer_top_head__vZFu7",
                footer_top_image: "Footer_footer_top_image__UgsvK",
                img: "Footer_img__zEc_W",
                footer_top_info: "Footer_footer_top_info__nCT8p",
                footer_top_links: "Footer_footer_top_links__2w5Lf",
                footer_top_socials: "Footer_footer_top_socials__fUmsr",
                footer_bottom: "Footer_footer_bottom__Y7x4f",
                bord_box: "Footer_bord_box__Sr2Oq",
                bord_box_b: "Footer_bord_box_b__IUidp"
            }
        },
        2482: function(e) {
            e.exports = {
                main: "Home_main__zgAJj",
                section: "Home_section__22yPl",
                home__container: "Home_home__container__2mRzu",
                home__content: "Home_home__content__JWhuB",
                home__social: "Home_home__social__2YeVg",
                home__social_icon: "Home_home__social_icon__8clJ_",
                home__Image: "Home_home__Image__fdxDf",
                home__blob: "Home_home__blob___lFOm",
                home__blob_Image: "Home_home__blob_Image__BddEu",
                home__data: "Home_home__data__XAeMh",
                btn_primary: "Home_btn_primary__NcefC",
                icon: "Home_icon__OPlpZ",
                home__title: "Home_home__title__1Mbix",
                home__title_span: "Home_home__title_span__nr_HJ",
                home__subtitle: "Home_home__subtitle__klvTR",
                home__description: "Home_home__description__etO5o",
                home__scroll: "Home_home__scroll__kqqxc",
                home__scroll_button: "Home_home__scroll_button__j5K34",
                home__scroll_mouse: "Home_home__scroll_mouse__lzpa_",
                home_scroll_name: "Home_home_scroll_name__EPULA",
                home__scroll_arrow: "Home_home__scroll_arrow__jTwlu",
                home_img_box: "Home_home_img_box__ePvYi"
            }
        },
        4492: function(e) {
            e.exports = {
                nav_block: "Navigation_nav_block__Ks2n4",
                nav_logo_box: "Navigation_nav_logo_box__GelCq",
                nav_logo_image: "Navigation_nav_logo_image__Glm7U",
                nav_logo: "Navigation_nav_logo__qy8HC",
                nav_logo_text: "Navigation_nav_logo_text__pmu2e",
                nav_links_box: "Navigation_nav_links_box__Mm18_",
                nav_links_block: "Navigation_nav_links_block__6Htx2",
                nav_link: "Navigation_nav_link__oC1_I",
                nav_active: "Navigation_nav_active__4TEFO",
                nav_icon: "Navigation_nav_icon__5Q9ug",
                theme_box: "Navigation_theme_box__jyeJc",
                active: "Navigation_active__jlNWH",
                hr: "Navigation_hr__a_C4d",
                theme_desc: "Navigation_theme_desc__qZaCY",
                select_block: "Navigation_select_block__qagZM",
                nav_theme_area: "Navigation_nav_theme_area__OxlHx",
                huge: "Navigation_huge__xJNkc",
                mobile: "Navigation_mobile__kYB8y"
            }
        },
        7355: function(e) {
            e.exports = {
                service_section: "Service_service_section__WuzKk",
                portfolio: "Service_portfolio__OvDjz",
                portfolio_card: "Service_portfolio_card__Oldnb",
                portfolio_card_desc: "Service_portfolio_card_desc__mCKP5",
                line_through: "Service_line_through__oLk36",
                service_head_box: "Service_service_head_box__hPFj4",
                service_head: "Service_service_head__atRCF",
                service_desc: "Service_service_desc__4H_wB",
                portfolio_card_img_box: "Service_portfolio_card_img_box___EB7q",
                portfolio_card_img: "Service_portfolio_card_img__uRhsT",
                portfolio_card_box: "Service_portfolio_card_box__6D0c_",
                card_desc_head: "Service_card_desc_head__IiIuh",
                tech_used_box: "Service_tech_used_box__6GTHO",
                tech_used: "Service_tech_used__OThCV",
                btn_link_box: "Service_btn_link_box__slicp",
                btn_link: "Service_btn_link__acjOa",
                service_card_block: "Service_service_card_block__0kqHF",
                portfolio_desc: "Service_portfolio_desc__W4ZuC",
                service_card: "Service_service_card__jc6vO",
                card_desc: "Service_card_desc__dHN__",
                service_info: "Service_service_info__K4QNs",
                card_icon_box: "Service_card_icon_box__Geo1S",
                card_icon: "Service_card_icon__gHW5v",
                service_icon: "Service_service_icon__wzCm1"
            }
        },
        7704: function(e) {
            e.exports = {
                skills_section: "Skills_skills_section__XV9FL",
                skills_head_box: "Skills_skills_head_box__wnk_K",
                skills_head: "Skills_skills_head__jRVGl",
                skills_desc: "Skills_skills_desc__RhP9y",
                skills_card_block: "Skills_skills_card_block__7RMPg",
                skills_card_box: "Skills_skills_card_box__RJLus",
                active: "Skills_active__j8JIS",
                skills_card_head: "Skills_skills_card_head__xW1kq",
                skills_head_icon: "Skills_skills_head_icon__agbGc",
                skills_head_chev: "Skills_skills_head_chev__aoBmV",
                skills_head_desc: "Skills_skills_head_desc__CZomx",
                stack_card_block: "Skills_stack_card_block__feuP9",
                stack_card_box: "Skills_stack_card_box__jNT_6",
                stack_card_image: "Skills_stack_card_image__B3lP_",
                img: "Skills_img__W9XWx"
            }
        }
    },
    function(e) {
        e.O(0, [556, 980, 401, 253, 774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);