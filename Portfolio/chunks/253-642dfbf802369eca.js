(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [253], {
        227: function(e, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.getDomainLocale = function(e, i, n, r) {
                return !1
            }, ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
                value: !0
            }), Object.assign(i.default, i), e.exports = i.default)
        },
        9749: function(e, i, n) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var r = n(6495).Z,
                o = n(2648).Z,
                s = n(1598).Z,
                a = n(7273).Z,
                l = s(n(7294)),
                u = o(n(3121)),
                h = n(2675),
                c = n(139),
                d = n(8730);
            n(7238);
            var p = o(n(9824));
            let f = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            };

            function m(e) {
                return void 0 !== e.default
            }

            function v(e) {
                return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function g(e, i, n, o, s, a, l) {
                if (!e || e["data-loaded-src"] === i) return;
                e["data-loaded-src"] = i;
                let u = "decode" in e ? e.decode() : Promise.resolve();
                u.catch(() => {}).then(() => {
                    if (e.parentNode) {
                        if ("blur" === n && a(!0), null == o ? void 0 : o.current) {
                            let i = new Event("load");
                            Object.defineProperty(i, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1,
                                s = !1;
                            o.current(r({}, i, {
                                nativeEvent: i,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => s,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, i.preventDefault()
                                },
                                stopPropagation: () => {
                                    s = !0, i.stopPropagation()
                                }
                            }))
                        }(null == s ? void 0 : s.current) && s.current(e)
                    }
                })
            }
            let y = l.forwardRef((e, i) => {
                    var {
                        imgAttributes: n,
                        heightInt: o,
                        widthInt: s,
                        qualityInt: u,
                        className: h,
                        imgStyle: c,
                        blurStyle: d,
                        isLazy: p,
                        fill: f,
                        placeholder: m,
                        loading: v,
                        srcString: y,
                        config: x,
                        unoptimized: b,
                        loader: w,
                        onLoadRef: P,
                        onLoadingCompleteRef: E,
                        setBlurComplete: T,
                        setShowAltText: A,
                        onLoad: V,
                        onError: S
                    } = e, C = a(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                    return v = p ? "lazy" : v, l.default.createElement(l.default.Fragment, null, l.default.createElement("img", Object.assign({}, C, n, {
                        width: s,
                        height: o,
                        decoding: "async",
                        "data-nimg": f ? "fill" : "1",
                        className: h,
                        loading: v,
                        style: r({}, c, d),
                        ref: l.useCallback(e => {
                            i && ("function" == typeof i ? i(e) : "object" == typeof i && (i.current = e)), e && (S && (e.src = e.src), e.complete && g(e, y, m, P, E, T, b))
                        }, [y, m, P, E, T, S, b, i]),
                        onLoad: e => {
                            let i = e.currentTarget;
                            g(i, y, m, P, E, T, b)
                        },
                        onError: e => {
                            A(!0), "blur" === m && T(!0), S && S(e)
                        }
                    })))
                }),
                x = l.forwardRef((e, i) => {
                    let n, o;
                    var s, {
                            src: g,
                            sizes: x,
                            unoptimized: b = !1,
                            priority: w = !1,
                            loading: P,
                            className: E,
                            quality: T,
                            width: A,
                            height: V,
                            fill: S,
                            style: C,
                            onLoad: M,
                            onLoadingComplete: k,
                            placeholder: R = "empty",
                            blurDataURL: B,
                            layout: L,
                            objectFit: j,
                            objectPosition: D,
                            lazyBoundary: O,
                            lazyRoot: F
                        } = e,
                        I = a(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
                    let U = l.useContext(d.ImageConfigContext),
                        N = l.useMemo(() => {
                            let e = f || U || c.imageConfigDefault,
                                i = [...e.deviceSizes, ...e.imageSizes].sort((e, i) => e - i),
                                n = e.deviceSizes.sort((e, i) => e - i);
                            return r({}, e, {
                                allSizes: i,
                                deviceSizes: n
                            })
                        }, [U]),
                        z = I,
                        $ = z.loader || p.default;
                    delete z.loader;
                    let _ = "__next_img_default" in $;
                    if (_) {
                        if ("custom" === N.loader) throw Error('Image with src "'.concat(g, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                    } else {
                        let e = $;
                        $ = i => {
                            let {
                                config: n
                            } = i, r = a(i, ["config"]);
                            return e(r)
                        }
                    }
                    if (L) {
                        "fill" === L && (S = !0);
                        let e = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        }[L];
                        e && (C = r({}, C, e));
                        let i = {
                            responsive: "100vw",
                            fill: "100vw"
                        }[L];
                        i && !x && (x = i)
                    }
                    let W = "",
                        H = v(A),
                        Y = v(V);
                    if ("object" == typeof(s = g) && (m(s) || void 0 !== s.src)) {
                        let e = m(g) ? g.default : g;
                        if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
                        if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
                        if (n = e.blurWidth, o = e.blurHeight, B = B || e.blurDataURL, W = e.src, !S) {
                            if (H || Y) {
                                if (H && !Y) {
                                    let i = H / e.width;
                                    Y = Math.round(e.height * i)
                                } else if (!H && Y) {
                                    let i = Y / e.height;
                                    H = Math.round(e.width * i)
                                }
                            } else H = e.width, Y = e.height
                        }
                    }
                    let X = !w && ("lazy" === P || void 0 === P);
                    ((g = "string" == typeof g ? g : W).startsWith("data:") || g.startsWith("blob:")) && (b = !0, X = !1), N.unoptimized && (b = !0), _ && g.endsWith(".svg") && !N.dangerouslyAllowSVG && (b = !0);
                    let [q, G] = l.useState(!1), [Z, K] = l.useState(!1), J = v(T), Q = Object.assign(S ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: j,
                        objectPosition: D
                    } : {}, Z ? {} : {
                        color: "transparent"
                    }, C), tt = "blur" === R && B && !q ? {
                        backgroundSize: Q.objectFit || "cover",
                        backgroundPosition: Q.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(h.getImageBlurSvg({
                            widthInt: H,
                            heightInt: Y,
                            blurWidth: n,
                            blurHeight: o,
                            blurDataURL: B
                        }), '")')
                    } : {}, te = function(e) {
                        let {
                            config: i,
                            src: n,
                            unoptimized: r,
                            width: o,
                            quality: s,
                            sizes: a,
                            loader: l
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: u,
                            kind: h
                        } = function(e, i, n) {
                            let {
                                deviceSizes: r,
                                allSizes: o
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    i = [];
                                for (let r; r = e.exec(n); r) i.push(parseInt(r[2]));
                                if (i.length) {
                                    let e = .01 * Math.min(...i);
                                    return {
                                        widths: o.filter(i => i >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof i) return {
                                widths: r,
                                kind: "w"
                            };
                            let s = [...new Set([i, 2 * i].map(e => o.find(i => i >= e) || o[o.length - 1]))];
                            return {
                                widths: s,
                                kind: "x"
                            }
                        }(i, o, a), c = u.length - 1;
                        return {
                            sizes: a || "w" !== h ? a : "100vw",
                            srcSet: u.map((e, r) => "".concat(l({
                                config: i,
                                src: n,
                                quality: s,
                                width: e
                            }), " ").concat("w" === h ? e : r + 1).concat(h)).join(", "),
                            src: l({
                                config: i,
                                src: n,
                                quality: s,
                                width: u[c]
                            })
                        }
                    }({
                        config: N,
                        src: g,
                        unoptimized: b,
                        width: H,
                        quality: J,
                        sizes: x,
                        loader: $
                    }), ti = g, tn = {
                        imageSrcSet: te.srcSet,
                        imageSizes: te.sizes,
                        crossOrigin: z.crossOrigin
                    }, tr = l.useRef(M);
                    l.useEffect(() => {
                        tr.current = M
                    }, [M]);
                    let to = l.useRef(k);
                    l.useEffect(() => {
                        to.current = k
                    }, [k]);
                    let ts = r({
                        isLazy: X,
                        imgAttributes: te,
                        heightInt: Y,
                        widthInt: H,
                        qualityInt: J,
                        className: E,
                        imgStyle: Q,
                        blurStyle: tt,
                        loading: P,
                        config: N,
                        fill: S,
                        unoptimized: b,
                        placeholder: R,
                        loader: $,
                        srcString: ti,
                        onLoadRef: tr,
                        onLoadingCompleteRef: to,
                        setBlurComplete: G,
                        setShowAltText: K
                    }, z);
                    return l.default.createElement(l.default.Fragment, null, l.default.createElement(y, Object.assign({}, ts, {
                        ref: i
                    })), w ? l.default.createElement(u.default, null, l.default.createElement("link", Object.assign({
                        key: "__nimg-" + te.src + te.srcSet + te.sizes,
                        rel: "preload",
                        as: "image",
                        href: te.srcSet ? void 0 : te.src
                    }, tn))) : null)
                });
            i.default = x, ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
                value: !0
            }), Object.assign(i.default, i), e.exports = i.default)
        },
        1551: function(e, i, n) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var r = n(2648).Z,
                o = n(7273).Z,
                s = r(n(7294)),
                a = n(1003),
                l = n(7795),
                u = n(4465),
                h = n(2692),
                c = n(8245),
                d = n(9246),
                p = n(227),
                f = n(3468);
            let m = new Set;

            function v(e, i, n, r) {
                if (a.isLocalURL(i)) {
                    if (!r.bypassPrefetchedCheck) {
                        let o = void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0,
                            s = i + "%" + n + "%" + o;
                        if (m.has(s)) return;
                        m.add(s)
                    }
                    Promise.resolve(e.prefetch(i, n, r)).catch(e => {})
                }
            }

            function g(e) {
                return "string" == typeof e ? e : l.formatUrl(e)
            }
            let y = s.default.forwardRef(function(e, i) {
                let n, r;
                let {
                    href: l,
                    as: m,
                    children: y,
                    prefetch: x,
                    passHref: b,
                    replace: w,
                    shallow: P,
                    scroll: E,
                    locale: T,
                    onClick: A,
                    onMouseEnter: V,
                    onTouchStart: S,
                    legacyBehavior: C = !1
                } = e, M = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = y, C && ("string" == typeof n || "number" == typeof n) && (n = s.default.createElement("a", null, n));
                let k = !1 !== x,
                    R = s.default.useContext(h.RouterContext),
                    B = s.default.useContext(c.AppRouterContext),
                    L = null != R ? R : B,
                    j = !R,
                    {
                        href: D,
                        as: O
                    } = s.default.useMemo(() => {
                        if (!R) {
                            let e = g(l);
                            return {
                                href: e,
                                as: m ? g(m) : e
                            }
                        }
                        let [e, i] = a.resolveHref(R, l, !0);
                        return {
                            href: e,
                            as: m ? a.resolveHref(R, m) : i || e
                        }
                    }, [R, l, m]),
                    F = s.default.useRef(D),
                    I = s.default.useRef(O);
                C && (r = s.default.Children.only(n));
                let U = C ? r && "object" == typeof r && r.ref : i,
                    [N, z, $] = d.useIntersection({
                        rootMargin: "200px"
                    }),
                    _ = s.default.useCallback(e => {
                        (I.current !== O || F.current !== D) && ($(), I.current = O, F.current = D), N(e), U && ("function" == typeof U ? U(e) : "object" == typeof U && (U.current = e))
                    }, [O, U, D, $, N]);
                s.default.useEffect(() => {
                    L && z && k && v(L, D, O, {
                        locale: T
                    })
                }, [O, D, z, T, k, null == R ? void 0 : R.locale, L]);
                let W = {
                    ref: _,
                    onClick(e) {
                        C || "function" != typeof A || A(e), C && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), L && !e.defaultPrevented && function(e, i, n, r, o, l, u, h, c, d) {
                            let {
                                nodeName: p
                            } = e.currentTarget, f = "A" === p.toUpperCase();
                            if (f && (function(e) {
                                    let {
                                        target: i
                                    } = e.currentTarget;
                                    return i && "_self" !== i || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !a.isLocalURL(n))) return;
                            e.preventDefault();
                            let m = () => {
                                "beforePopState" in i ? i[o ? "replace" : "push"](n, r, {
                                    shallow: l,
                                    locale: h,
                                    scroll: u
                                }) : i[o ? "replace" : "push"](r || n, {
                                    forceOptimisticNavigation: !d
                                })
                            };
                            c ? s.default.startTransition(m) : m()
                        }(e, L, D, O, w, P, E, T, j, k)
                    },
                    onMouseEnter(e) {
                        C || "function" != typeof V || V(e), C && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), L && (k || !j) && v(L, D, O, {
                            locale: T,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    },
                    onTouchStart(e) {
                        C || "function" != typeof S || S(e), C && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), L && (k || !j) && v(L, D, O, {
                            locale: T,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    }
                };
                if (!C || b || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== T ? T : null == R ? void 0 : R.locale,
                        i = (null == R ? void 0 : R.isLocaleDomain) && p.getDomainLocale(O, e, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales);
                    W.href = i || f.addBasePath(u.addLocale(O, e, null == R ? void 0 : R.defaultLocale))
                }
                return C ? s.default.cloneElement(r, W) : s.default.createElement("a", Object.assign({}, M, W), n)
            });
            i.default = y, ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
                value: !0
            }), Object.assign(i.default, i), e.exports = i.default)
        },
        9246: function(e, i, n) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.useIntersection = function(e) {
                let {
                    rootRef: i,
                    rootMargin: n,
                    disabled: u
                } = e, h = u || !s, [c, d] = r.useState(!1), p = r.useRef(null), f = r.useCallback(e => {
                    p.current = e
                }, []);
                r.useEffect(() => {
                    if (s) {
                        if (h || c) return;
                        let e = p.current;
                        if (e && e.tagName) {
                            let r = function(e, i, n) {
                                let {
                                    id: r,
                                    observer: o,
                                    elements: s
                                } = function(e) {
                                    let i;
                                    let n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = l.find(e => e.root === n.root && e.margin === n.margin);
                                    if (r && (i = a.get(r))) return i;
                                    let o = new Map,
                                        s = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let i = o.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                i && n && i(n)
                                            })
                                        }, e);
                                    return i = {
                                        id: n,
                                        observer: s,
                                        elements: o
                                    }, l.push(n), a.set(n, i), i
                                }(n);
                                return s.set(e, i), o.observe(e),
                                    function() {
                                        if (s.delete(e), o.unobserve(e), 0 === s.size) {
                                            o.disconnect(), a.delete(r);
                                            let e = l.findIndex(e => e.root === r.root && e.margin === r.margin);
                                            e > -1 && l.splice(e, 1)
                                        }
                                    }
                            }(e, e => e && d(e), {
                                root: null == i ? void 0 : i.current,
                                rootMargin: n
                            });
                            return r
                        }
                    } else if (!c) {
                        let e = o.requestIdleCallback(() => d(!0));
                        return () => o.cancelIdleCallback(e)
                    }
                }, [h, n, i, c, p.current]);
                let m = r.useCallback(() => {
                    d(!1)
                }, []);
                return [f, c, m]
            };
            var r = n(7294),
                o = n(4686);
            let s = "function" == typeof IntersectionObserver,
                a = new Map,
                l = [];
            ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
                value: !0
            }), Object.assign(i.default, i), e.exports = i.default)
        },
        2675: function(e, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.getImageBlurSvg = function(e) {
                let {
                    widthInt: i,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: o,
                    blurDataURL: s
                } = e, a = r || i, l = o || n, u = s.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return a && l ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a, " ").concat(l, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r && o ? "1" : "20", "'/%3E").concat(u, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s, "'/%3E%3C/svg%3E")
            }
        },
        9824: function(e, i) {
            "use strict";

            function n(e) {
                let {
                    config: i,
                    src: n,
                    width: r,
                    quality: o
                } = e;
                return "".concat(i.path, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0, n.__next_img_default = !0, i.default = n
        },
        9008: function(e, i, n) {
            e.exports = n(3121)
        },
        5675: function(e, i, n) {
            e.exports = n(9749)
        },
        1664: function(e, i, n) {
            e.exports = n(1551)
        },
        7285: function(e, i, n) {
            "use strict";
            n.d(i, {
                E: function() {
                    return r9
                }
            });
            var r, o, s, a, l, u = n(7294);
            let h = (0, u.createContext)({
                    transformPagePoint: e => e,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                c = (0, u.createContext)({}),
                d = (0, u.createContext)(null),
                p = "undefined" != typeof document,
                f = p ? u.useLayoutEffect : u.useEffect,
                m = (0, u.createContext)({
                    strict: !1
                });

            function v(e) {
                return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }

            function g(e) {
                return "string" == typeof e || Array.isArray(e)
            }

            function y(e) {
                return "object" == typeof e && "function" == typeof e.start
            }
            let x = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

            function b(e) {
                return y(e.animate) || x.some(i => g(e[i]))
            }

            function w(e) {
                return Boolean(b(e) || e.variants)
            }

            function P(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }
            let E = e => ({
                    isEnabled: i => e.some(e => !!i[e])
                }),
                T = {
                    measureLayout: E(["layout", "layoutId", "drag"]),
                    animation: E(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: E(["exit"]),
                    drag: E(["drag", "dragControls"]),
                    focus: E(["whileFocus"]),
                    hover: E(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: E(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: E(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: E(["whileInView", "onViewportEnter", "onViewportLeave"])
                };

            function A(e) {
                let i = (0, u.useRef)(null);
                return null === i.current && (i.current = e()), i.current
            }
            let V = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                S = 1,
                C = (0, u.createContext)({});
            class M extends u.Component {
                getSnapshotBeforeUpdate() {
                    let {
                        visualElement: e,
                        props: i
                    } = this.props;
                    return e && e.setProps(i), null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }
            let k = (0, u.createContext)({}),
                R = Symbol.for("motionComponentSymbol"),
                B = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function L(e) {
                if ("string" != typeof e || e.includes("-"));
                else if (B.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
                return !1
            }
            let j = {},
                D = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                O = new Set(D);

            function F(e, {
                layout: i,
                layoutId: n
            }) {
                return O.has(e) || e.startsWith("origin") || (i || void 0 !== n) && (!!j[e] || "opacity" === e)
            }
            let I = e => !!(null == e ? void 0 : e.getVelocity),
                U = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                N = (e, i) => D.indexOf(e) - D.indexOf(i);

            function z(e) {
                return e.startsWith("--")
            }
            let $ = (e, i) => i && "number" == typeof e ? i.transform(e) : e,
                _ = (e, i, n) => Math.min(Math.max(n, e), i),
                W = {
                    test: e => "number" == typeof e,
                    parse: parseFloat,
                    transform: e => e
                },
                H = { ...W,
                    transform: e => _(0, 1, e)
                },
                Y = { ...W,
                    default: 1
                },
                X = e => Math.round(1e5 * e) / 1e5,
                q = /(-)?([\d]*\.?[\d])+/g,
                G = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                Z = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function K(e) {
                return "string" == typeof e
            }
            let J = e => ({
                    test: i => K(i) && i.endsWith(e) && 1 === i.split(" ").length,
                    parse: parseFloat,
                    transform: i => `${i}${e}`
                }),
                Q = J("deg"),
                tt = J("%"),
                te = J("px"),
                ti = J("vh"),
                tn = J("vw"),
                tr = { ...tt,
                    parse: e => tt.parse(e) / 100,
                    transform: e => tt.transform(100 * e)
                },
                to = { ...W,
                    transform: Math.round
                },
                ts = {
                    borderWidth: te,
                    borderTopWidth: te,
                    borderRightWidth: te,
                    borderBottomWidth: te,
                    borderLeftWidth: te,
                    borderRadius: te,
                    radius: te,
                    borderTopLeftRadius: te,
                    borderTopRightRadius: te,
                    borderBottomRightRadius: te,
                    borderBottomLeftRadius: te,
                    width: te,
                    maxWidth: te,
                    height: te,
                    maxHeight: te,
                    size: te,
                    top: te,
                    right: te,
                    bottom: te,
                    left: te,
                    padding: te,
                    paddingTop: te,
                    paddingRight: te,
                    paddingBottom: te,
                    paddingLeft: te,
                    margin: te,
                    marginTop: te,
                    marginRight: te,
                    marginBottom: te,
                    marginLeft: te,
                    rotate: Q,
                    rotateX: Q,
                    rotateY: Q,
                    rotateZ: Q,
                    scale: Y,
                    scaleX: Y,
                    scaleY: Y,
                    scaleZ: Y,
                    skew: Q,
                    skewX: Q,
                    skewY: Q,
                    distance: te,
                    translateX: te,
                    translateY: te,
                    translateZ: te,
                    x: te,
                    y: te,
                    z: te,
                    perspective: te,
                    transformPerspective: te,
                    opacity: H,
                    originX: tr,
                    originY: tr,
                    originZ: te,
                    zIndex: to,
                    fillOpacity: H,
                    strokeOpacity: H,
                    numOctaves: to
                };

            function ta(e, i, n, r) {
                let {
                    style: o,
                    vars: s,
                    transform: a,
                    transformKeys: l,
                    transformOrigin: u
                } = e;
                l.length = 0;
                let h = !1,
                    c = !1,
                    d = !0;
                for (let e in i) {
                    let n = i[e];
                    if (z(e)) {
                        s[e] = n;
                        continue
                    }
                    let r = ts[e],
                        p = $(n, r);
                    if (O.has(e)) {
                        if (h = !0, a[e] = p, l.push(e), !d) continue;
                        n !== (r.default || 0) && (d = !1)
                    } else e.startsWith("origin") ? (c = !0, u[e] = p) : o[e] = p
                }
                if (!i.transform && (h || r ? o.transform = function({
                        transform: e,
                        transformKeys: i
                    }, {
                        enableHardwareAcceleration: n = !0,
                        allowTransformNone: r = !0
                    }, o, s) {
                        let a = "";
                        for (let n of (i.sort(N), i)) a += `${U[n]||n}(${e[n]}) `;
                        return n && !e.z && (a += "translateZ(0)"), a = a.trim(), s ? a = s(e, o ? "" : a) : r && o && (a = "none"), a
                    }(e, n, d, r) : o.transform && (o.transform = "none")), c) {
                    let {
                        originX: e = "50%",
                        originY: i = "50%",
                        originZ: n = 0
                    } = u;
                    o.transformOrigin = `${e} ${i} ${n}`
                }
            }
            let tl = () => ({
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            });

            function tu(e, i, n) {
                for (let r in i) I(i[r]) || F(r, n) || (e[r] = i[r])
            }

            function th(e, i, n) {
                let r = {},
                    o = function(e, i, n) {
                        let r = e.style || {},
                            o = {};
                        return tu(o, r, e), Object.assign(o, function({
                            transformTemplate: e
                        }, i, n) {
                            return (0, u.useMemo)(() => {
                                let r = tl();
                                return ta(r, i, {
                                    enableHardwareAcceleration: !n
                                }, e), Object.assign({}, r.vars, r.style)
                            }, [i])
                        }(e, i, n)), e.transformValues ? e.transformValues(o) : o
                    }(e, i, n);
                return e.drag && !1 !== e.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r
            }
            let tc = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function td(e) {
                return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || tc.has(e)
            }
            let tp = e => !td(e);
            try {
                (r = require("@emotion/is-prop-valid").default) && (tp = e => e.startsWith("on") ? !td(e) : r(e))
            } catch (e) {}

            function tf(e, i, n) {
                return "string" == typeof e ? e : te.transform(i + n * e)
            }
            let tm = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                tv = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function tg(e, {
                attrX: i,
                attrY: n,
                originX: r,
                originY: o,
                pathLength: s,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, c, d) {
                if (ta(e, u, h, d), c) {
                    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                    return
                }
                e.attrs = e.style, e.style = {};
                let {
                    attrs: p,
                    style: f,
                    dimensions: m
                } = e;
                p.transform && (m && (f.transform = p.transform), delete p.transform), m && (void 0 !== r || void 0 !== o || f.transform) && (f.transformOrigin = function(e, i, n) {
                    let r = tf(i, e.x, e.width),
                        o = tf(n, e.y, e.height);
                    return `${r} ${o}`
                }(m, void 0 !== r ? r : .5, void 0 !== o ? o : .5)), void 0 !== i && (p.x = i), void 0 !== n && (p.y = n), void 0 !== s && function(e, i, n = 1, r = 0, o = !0) {
                    e.pathLength = 1;
                    let s = o ? tm : tv;
                    e[s.offset] = te.transform(-r);
                    let a = te.transform(i),
                        l = te.transform(n);
                    e[s.array] = `${a} ${l}`
                }(p, s, a, l, !1)
            }
            let ty = () => ({ ...tl(),
                    attrs: {}
                }),
                tx = e => "string" == typeof e && "svg" === e.toLowerCase();

            function tb(e, i, n, r) {
                let o = (0, u.useMemo)(() => {
                    let n = ty();
                    return tg(n, i, {
                        enableHardwareAcceleration: !1
                    }, tx(r), e.transformTemplate), { ...n.attrs,
                        style: { ...n.style
                        }
                    }
                }, [i]);
                if (e.style) {
                    let i = {};
                    tu(i, e.style, e), o.style = { ...i,
                        ...o.style
                    }
                }
                return o
            }
            let tw = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function tP(e, {
                style: i,
                vars: n
            }, r, o) {
                for (let s in Object.assign(e.style, i, o && o.getProjectionStyles(r)), n) e.style.setProperty(s, n[s])
            }
            let tE = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function tT(e, i, n, r) {
                for (let n in tP(e, i, void 0, r), i.attrs) e.setAttribute(tE.has(n) ? n : tw(n), i.attrs[n])
            }

            function tA(e, i) {
                let {
                    style: n
                } = e, r = {};
                for (let o in n)(I(n[o]) || i.style && I(i.style[o]) || F(o, e)) && (r[o] = n[o]);
                return r
            }

            function tV(e, i) {
                let n = tA(e, i);
                for (let r in e)
                    if (I(e[r]) || I(i[r])) {
                        let i = "x" === r || "y" === r ? "attr" + r.toUpperCase() : r;
                        n[i] = e[r]
                    }
                return n
            }

            function tS(e, i, n, r = {}, o = {}) {
                return "function" == typeof i && (i = i(void 0 !== n ? n : e.custom, r, o)), "string" == typeof i && (i = e.variants && e.variants[i]), "function" == typeof i && (i = i(void 0 !== n ? n : e.custom, r, o)), i
            }
            let tC = e => Array.isArray(e),
                tM = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
                tk = e => tC(e) ? e[e.length - 1] || 0 : e;

            function tR(e) {
                let i = I(e) ? e.get() : e;
                return tM(i) ? i.toValue() : i
            }
            let tB = e => (i, n) => {
                    let r = (0, u.useContext)(c),
                        o = (0, u.useContext)(d),
                        s = () => (function({
                            scrapeMotionValuesFromProps: e,
                            createRenderState: i,
                            onMount: n
                        }, r, o, s) {
                            let a = {
                                latestValues: function(e, i, n, r) {
                                    let o = {},
                                        s = r(e, {});
                                    for (let e in s) o[e] = tR(s[e]);
                                    let {
                                        initial: a,
                                        animate: l
                                    } = e, u = b(e), h = w(e);
                                    i && h && !u && !1 !== e.inherit && (void 0 === a && (a = i.initial), void 0 === l && (l = i.animate));
                                    let c = !!n && !1 === n.initial;
                                    c = c || !1 === a;
                                    let d = c ? l : a;
                                    if (d && "boolean" != typeof d && !y(d)) {
                                        let i = Array.isArray(d) ? d : [d];
                                        i.forEach(i => {
                                            let n = tS(e, i);
                                            if (!n) return;
                                            let {
                                                transitionEnd: r,
                                                transition: s,
                                                ...a
                                            } = n;
                                            for (let e in a) {
                                                let i = a[e];
                                                if (Array.isArray(i)) {
                                                    let e = c ? i.length - 1 : 0;
                                                    i = i[e]
                                                }
                                                null !== i && (o[e] = i)
                                            }
                                            for (let e in r) o[e] = r[e]
                                        })
                                    }
                                    return o
                                }(r, o, s, e),
                                renderState: i()
                            };
                            return n && (a.mount = e => n(r, e, a)), a
                        })(e, i, r, o);
                    return n ? s() : A(s)
                },
                tL = {
                    useVisualState: tB({
                        scrapeMotionValuesFromProps: tV,
                        createRenderState: ty,
                        onMount: (e, i, {
                            renderState: n,
                            latestValues: r
                        }) => {
                            try {
                                n.dimensions = "function" == typeof i.getBBox ? i.getBBox() : i.getBoundingClientRect()
                            } catch (e) {
                                n.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            tg(n, r, {
                                enableHardwareAcceleration: !1
                            }, tx(i.tagName), e.transformTemplate), tT(i, n)
                        }
                    })
                },
                tj = {
                    useVisualState: tB({
                        scrapeMotionValuesFromProps: tA,
                        createRenderState: tl
                    })
                };

            function tD(e, i, n, r = {
                passive: !0
            }) {
                return e.addEventListener(i, n, r), () => e.removeEventListener(i, n)
            }

            function tO(e, i, n, r) {
                (0, u.useEffect)(() => {
                    let o = e.current;
                    if (n && o) return tD(o, i, n, r)
                }, [e, i, n, r])
            }(o = a || (a = {})).Animate = "animate", o.Hover = "whileHover", o.Tap = "whileTap", o.Drag = "whileDrag", o.Focus = "whileFocus", o.InView = "whileInView", o.Exit = "exit";
            let tF = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

            function tI(e, i = "page") {
                return {
                    point: {
                        x: e[i + "X"],
                        y: e[i + "Y"]
                    }
                }
            }
            let tU = e => i => tF(i) && e(i, tI(i));

            function tN(e, i, n, r) {
                return tD(e, i, tU(n), r)
            }

            function tz(e, i, n, r) {
                return tO(e, i, n && tU(n), r)
            }

            function t$(e) {
                let i = null;
                return () => {
                    let n = () => {
                        i = null
                    };
                    return null === i && (i = e, n)
                }
            }
            let t_ = t$("dragHorizontal"),
                tW = t$("dragVertical");

            function tH(e) {
                let i = !1;
                if ("y" === e) i = tW();
                else if ("x" === e) i = t_();
                else {
                    let e = t_(),
                        n = tW();
                    e && n ? i = () => {
                        e(), n()
                    } : (e && e(), n && n())
                }
                return i
            }

            function tY() {
                let e = tH(!0);
                return !e || (e(), !1)
            }

            function tX(e, i, n, r) {
                return (o, s) => {
                    !("touch" === o.type || tY()) && (n && e.animationState && e.animationState.setActive(a.Hover, i), r && r(o, s))
                }
            }
            let tq = (e, i) => !!i && (e === i || tq(e, i.parentElement));

            function tG(e) {
                return (0, u.useEffect)(() => () => e(), [])
            }
            let tZ = (e, i) => n => i(e(n)),
                tK = (...e) => e.reduce(tZ);

            function tJ(e, i) {
                if (!i) return;
                let n = new PointerEvent("pointer" + e);
                i(n, tI(n))
            }
            let tQ = new WeakMap,
                t0 = new WeakMap,
                t1 = e => {
                    let i = tQ.get(e.target);
                    i && i(e)
                },
                t2 = e => {
                    e.forEach(t1)
                },
                t5 = {
                    some: 0,
                    all: 1
                };

            function t3(e, i, n, {
                root: r,
                margin: o,
                amount: s = "some",
                once: l
            }) {
                (0, u.useEffect)(() => {
                    if (!e || !n.current) return;
                    let u = {
                            root: null == r ? void 0 : r.current,
                            rootMargin: o,
                            threshold: "number" == typeof s ? s : t5[s]
                        },
                        h = e => {
                            let {
                                isIntersecting: r
                            } = e;
                            if (i.isInView === r || (i.isInView = r, l && !r && i.hasEnteredView)) return;
                            r && (i.hasEnteredView = !0), n.animationState && n.animationState.setActive(a.InView, r);
                            let o = n.getProps(),
                                s = r ? o.onViewportEnter : o.onViewportLeave;
                            s && s(e)
                        };
                    return function(e, i, n) {
                        let r = function({
                            root: e,
                            ...i
                        }) {
                            let n = e || document;
                            t0.has(n) || t0.set(n, {});
                            let r = t0.get(n),
                                o = JSON.stringify(i);
                            return r[o] || (r[o] = new IntersectionObserver(t2, {
                                root: e,
                                ...i
                            })), r[o]
                        }(i);
                        return tQ.set(e, n), r.observe(e), () => {
                            tQ.delete(e), r.unobserve(e)
                        }
                    }(n.current, u, h)
                }, [e, r, o, s])
            }

            function t9(e, i, n, {
                fallback: r = !0
            }) {
                (0, u.useEffect)(() => {
                    e && r && requestAnimationFrame(() => {
                        i.hasEnteredView = !0;
                        let {
                            onViewportEnter: e
                        } = n.getProps();
                        e && e(null), n.animationState && n.animationState.setActive(a.InView, !0)
                    })
                }, [e])
            }
            let t4 = e => i => (e(i), null),
                t6 = {
                    inView: t4(function({
                        visualElement: e,
                        whileInView: i,
                        onViewportEnter: n,
                        onViewportLeave: r,
                        viewport: o = {}
                    }) {
                        let s = (0, u.useRef)({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            a = Boolean(i || n || r);
                        o.once && s.current.hasEnteredView && (a = !1);
                        let l = "undefined" == typeof IntersectionObserver ? t9 : t3;
                        l(a, s.current, e, o)
                    }),
                    tap: t4(function({
                        onTap: e,
                        onTapStart: i,
                        onTapCancel: n,
                        whileTap: r,
                        visualElement: o,
                        ...s
                    }) {
                        let l = e || i || n || r,
                            h = (0, u.useRef)(!1),
                            c = (0, u.useRef)(null),
                            d = {
                                passive: !(i || e || n || s.onPointerDown)
                            };

                        function p() {
                            c.current && c.current(), c.current = null
                        }

                        function f() {
                            p(), h.current = !1;
                            let e = o.getProps();
                            return e.whileTap && o.animationState && o.animationState.setActive(a.Tap, !1), !tY()
                        }

                        function m(e, i) {
                            var n, r, s, a;
                            f() && (tq(o.current, e.target) ? null === (a = (s = o.getProps()).onTap) || void 0 === a || a.call(s, e, i) : null === (r = (n = o.getProps()).onTapCancel) || void 0 === r || r.call(n, e, i))
                        }

                        function v(e, i) {
                            var n, r;
                            f() && (null === (r = (n = o.getProps()).onTapCancel) || void 0 === r || r.call(n, e, i))
                        }

                        function g(e, i) {
                            var n;
                            let r = o.getProps();
                            r.whileTap && o.animationState && o.animationState.setActive(a.Tap, !0), null === (n = r.onTapStart) || void 0 === n || n.call(r, e, i)
                        }
                        let y = [Boolean(i), Boolean(e), Boolean(r), o],
                            x = (0, u.useCallback)((e, i) => {
                                p(), h.current || (h.current = !0, c.current = tK(tN(window, "pointerup", m, d), tN(window, "pointercancel", v, d)), g(e, i))
                            }, y);
                        tz(o, "pointerdown", l ? x : void 0, d);
                        let b = (0, u.useCallback)(() => {
                            let e = tD(o.current, "keydown", e => {
                                    "Enter" !== e.key || h.current || (h.current = !0, c.current = tD(o.current, "keyup", () => {
                                        "Enter" === e.key && f() && tJ("up", o.getProps().onTap)
                                    }, d), tJ("down", g))
                                }),
                                i = tD(o.current, "blur", () => {
                                    e(), i(), h.current && tJ("cancel", v)
                                })
                        }, y);
                        tO(o, "focus", l ? b : void 0), tG(p)
                    }),
                    focus: t4(function({
                        whileFocus: e,
                        visualElement: i
                    }) {
                        let n = (0, u.useRef)(!1),
                            {
                                animationState: r
                            } = i,
                            o = (0, u.useCallback)(() => {
                                let e = !1;
                                try {
                                    e = i.current.matches(":focus-visible")
                                } catch (i) {
                                    e = !0
                                }
                                e && r && (r.setActive(a.Focus, !0), n.current = !0)
                            }, [r]),
                            s = (0, u.useCallback)(() => {
                                n.current && r && (r.setActive(a.Focus, !1), n.current = !1)
                            }, [r]);
                        tO(i, "focus", e ? o : void 0), tO(i, "blur", e ? s : void 0)
                    }),
                    hover: t4(function({
                        onHoverStart: e,
                        onHoverEnd: i,
                        whileHover: n,
                        visualElement: r
                    }) {
                        tz(r, "pointerenter", (0, u.useMemo)(() => e || n ? tX(r, !0, Boolean(n), e) : void 0, [e, Boolean(n), r]), {
                            passive: !e
                        }), tz(r, "pointerleave", (0, u.useMemo)(() => i || n ? tX(r, !1, Boolean(n), i) : void 0, [e, Boolean(n), r]), {
                            passive: !i
                        })
                    })
                };

            function t7() {
                let e = (0, u.useContext)(d);
                if (null === e) return [!0, null];
                let {
                    isPresent: i,
                    onExitComplete: n,
                    register: r
                } = e, o = (0, u.useId)();
                (0, u.useEffect)(() => r(o), []);
                let s = () => n && n(o);
                return !i && n ? [!1, s] : [!0]
            }

            function t8(e, i) {
                if (!Array.isArray(i)) return !1;
                let n = i.length;
                if (n !== e.length) return !1;
                for (let r = 0; r < n; r++)
                    if (i[r] !== e[r]) return !1;
                return !0
            }
            let et = e => /^\-?\d*\.?\d+$/.test(e),
                ee = e => /^0[^.\s]+$/.test(e),
                ei = {
                    delta: 0,
                    timestamp: 0
                },
                en = 1 / 60 * 1e3,
                er = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
                eo = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(er()), en),
                es = !0,
                ea = !1,
                el = !1,
                eu = ["read", "update", "preRender", "render", "postRender"],
                eh = eu.reduce((e, i) => (e[i] = function(e) {
                    let i = [],
                        n = [],
                        r = 0,
                        o = !1,
                        s = !1,
                        a = new WeakSet,
                        l = {
                            schedule: (e, s = !1, l = !1) => {
                                let u = l && o,
                                    h = u ? i : n;
                                return s && a.add(e), -1 === h.indexOf(e) && (h.push(e), u && o && (r = i.length)), e
                            },
                            cancel: e => {
                                let i = n.indexOf(e); - 1 !== i && n.splice(i, 1), a.delete(e)
                            },
                            process: u => {
                                if (o) {
                                    s = !0;
                                    return
                                }
                                if (o = !0, [i, n] = [n, i], n.length = 0, r = i.length)
                                    for (let n = 0; n < r; n++) {
                                        let r = i[n];
                                        r(u), a.has(r) && (l.schedule(r), e())
                                    }
                                o = !1, s && (s = !1, l.process(u))
                            }
                        };
                    return l
                }(() => ea = !0), e), {}),
                ec = eu.reduce((e, i) => {
                    let n = eh[i];
                    return e[i] = (e, i = !1, r = !1) => (ea || ev(), n.schedule(e, i, r)), e
                }, {}),
                ed = eu.reduce((e, i) => (e[i] = eh[i].cancel, e), {}),
                ep = eu.reduce((e, i) => (e[i] = () => eh[i].process(ei), e), {}),
                ef = e => eh[e].process(ei),
                em = e => {
                    ea = !1, ei.delta = es ? en : Math.max(Math.min(e - ei.timestamp, 40), 1), ei.timestamp = e, el = !0, eu.forEach(ef), el = !1, ea && (es = !1, eo(em))
                },
                ev = () => {
                    ea = !0, es = !0, el || eo(em)
                };

            function eg(e, i) {
                -1 === e.indexOf(i) && e.push(i)
            }

            function ey(e, i) {
                let n = e.indexOf(i);
                n > -1 && e.splice(n, 1)
            }
            class ex {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return eg(this.subscriptions, e), () => ey(this.subscriptions, e)
                }
                notify(e, i, n) {
                    let r = this.subscriptions.length;
                    if (r) {
                        if (1 === r) this.subscriptions[0](e, i, n);
                        else
                            for (let o = 0; o < r; o++) {
                                let r = this.subscriptions[o];
                                r && r(e, i, n)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }

            function eb(e, i) {
                return i ? e * (1e3 / i) : 0
            }
            let ew = e => !isNaN(parseFloat(e));
            class eP {
                constructor(e, i = {}) {
                    this.version = "9.0.2", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, i = !0) => {
                        this.prev = this.current, this.current = e;
                        let {
                            delta: n,
                            timestamp: r
                        } = ei;
                        this.lastUpdated !== r && (this.timeDelta = n, this.lastUpdated = r, ec.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => ec.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: e
                    }) => {
                        e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = ew(this.current), this.owner = i.owner
                }
                onChange(e) {
                    return this.on("change", e)
                }
                on(e, i) {
                    this.events[e] || (this.events[e] = new ex);
                    let n = this.events[e].add(i);
                    return "change" === e ? () => {
                        n(), ec.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : n
                }
                clearListeners() {
                    for (let e in this.events) this.events[e].clear()
                }
                attach(e, i) {
                    this.passiveEffect = e, this.stopPassiveEffect = i
                }
                set(e, i = !0) {
                    i && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, i)
                }
                setWithVelocity(e, i, n) {
                    this.set(i), this.prev = e, this.timeDelta = n
                }
                jump(e) {
                    this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? eb(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(e) {
                    return this.stop(), new Promise(i => {
                        this.hasAnimated = !0, this.animation = e(i) || null, this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    this.animation = null
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function eE(e, i) {
                return new eP(e, i)
            }
            let eT = (e, i) => n => Boolean(K(n) && Z.test(n) && n.startsWith(e) || i && Object.prototype.hasOwnProperty.call(n, i)),
                eA = (e, i, n) => r => {
                    if (!K(r)) return r;
                    let [o, s, a, l] = r.match(q);
                    return {
                        [e]: parseFloat(o),
                        [i]: parseFloat(s),
                        [n]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                },
                eV = e => _(0, 255, e),
                eS = { ...W,
                    transform: e => Math.round(eV(e))
                },
                eC = {
                    test: eT("rgb", "red"),
                    parse: eA("red", "green", "blue"),
                    transform: ({
                        red: e,
                        green: i,
                        blue: n,
                        alpha: r = 1
                    }) => "rgba(" + eS.transform(e) + ", " + eS.transform(i) + ", " + eS.transform(n) + ", " + X(H.transform(r)) + ")"
                },
                eM = {
                    test: eT("#"),
                    parse: function(e) {
                        let i = "",
                            n = "",
                            r = "",
                            o = "";
                        return e.length > 5 ? (i = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (i = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), i += i, n += n, r += r, o += o), {
                            red: parseInt(i, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(r, 16),
                            alpha: o ? parseInt(o, 16) / 255 : 1
                        }
                    },
                    transform: eC.transform
                },
                ek = {
                    test: eT("hsl", "hue"),
                    parse: eA("hue", "saturation", "lightness"),
                    transform: ({
                        hue: e,
                        saturation: i,
                        lightness: n,
                        alpha: r = 1
                    }) => "hsla(" + Math.round(e) + ", " + tt.transform(X(i)) + ", " + tt.transform(X(n)) + ", " + X(H.transform(r)) + ")"
                },
                eR = {
                    test: e => eC.test(e) || eM.test(e) || ek.test(e),
                    parse: e => eC.test(e) ? eC.parse(e) : ek.test(e) ? ek.parse(e) : eM.parse(e),
                    transform: e => K(e) ? e : e.hasOwnProperty("red") ? eC.transform(e) : ek.transform(e)
                },
                eB = "${c}",
                eL = "${n}";

            function ej(e) {
                "number" == typeof e && (e = `${e}`);
                let i = [],
                    n = 0,
                    r = 0,
                    o = e.match(G);
                o && (n = o.length, e = e.replace(G, eB), i.push(...o.map(eR.parse)));
                let s = e.match(q);
                return s && (r = s.length, e = e.replace(q, eL), i.push(...s.map(W.parse))), {
                    values: i,
                    numColors: n,
                    numNumbers: r,
                    tokenised: e
                }
            }

            function eD(e) {
                return ej(e).values
            }

            function eO(e) {
                let {
                    values: i,
                    numColors: n,
                    tokenised: r
                } = ej(e), o = i.length;
                return e => {
                    let i = r;
                    for (let r = 0; r < o; r++) i = i.replace(r < n ? eB : eL, r < n ? eR.transform(e[r]) : X(e[r]));
                    return i
                }
            }
            let eF = e => "number" == typeof e ? 0 : e,
                eI = {
                    test: function(e) {
                        var i, n;
                        return isNaN(e) && K(e) && ((null === (i = e.match(q)) || void 0 === i ? void 0 : i.length) || 0) + ((null === (n = e.match(G)) || void 0 === n ? void 0 : n.length) || 0) > 0
                    },
                    parse: eD,
                    createTransformer: eO,
                    getAnimatableNone: function(e) {
                        let i = eD(e),
                            n = eO(e);
                        return n(i.map(eF))
                    }
                },
                eU = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function eN(e) {
                let [i, n] = e.slice(0, -1).split("(");
                if ("drop-shadow" === i) return e;
                let [r] = n.match(q) || [];
                if (!r) return e;
                let o = n.replace(r, ""),
                    s = eU.has(i) ? 1 : 0;
                return r !== n && (s *= 100), i + "(" + s + o + ")"
            }
            let ez = /([a-z-]*)\(.*?\)/g,
                e$ = { ...eI,
                    getAnimatableNone: e => {
                        let i = e.match(ez);
                        return i ? i.map(eN).join(" ") : e
                    }
                },
                e_ = { ...ts,
                    color: eR,
                    backgroundColor: eR,
                    outlineColor: eR,
                    fill: eR,
                    stroke: eR,
                    borderColor: eR,
                    borderTopColor: eR,
                    borderRightColor: eR,
                    borderBottomColor: eR,
                    borderLeftColor: eR,
                    filter: e$,
                    WebkitFilter: e$
                },
                eW = e => e_[e];

            function eH(e, i) {
                var n;
                let r = eW(e);
                return r !== e$ && (r = eI), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, i)
            }
            let eY = e => i => i.test(e),
                eX = [W, te, tt, Q, tn, ti, {
                    test: e => "auto" === e,
                    parse: e => e
                }],
                eq = e => eX.find(eY(e)),
                eG = [...eX, eR, eI],
                eZ = e => eG.find(eY(e));

            function eK(e, i, n) {
                let r = e.getProps();
                return tS(r, i, void 0 !== n ? n : r.custom, function(e) {
                    let i = {};
                    return e.values.forEach((e, n) => i[n] = e.get()), i
                }(e), function(e) {
                    let i = {};
                    return e.values.forEach((e, n) => i[n] = e.getVelocity()), i
                }(e))
            }

            function eJ(e) {
                return Boolean(I(e) && e.add)
            }
            let eQ = "data-" + tw("framerAppearId");
            var e0 = function() {},
                e1 = function() {};
            let e2 = e => 1e3 * e,
                e5 = {
                    current: !1
                },
                e3 = e => i => i <= .5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2,
                e9 = e => i => 1 - e(1 - i),
                e4 = e => e * e,
                e6 = e9(e4),
                e7 = e3(e4),
                e8 = (e, i, n) => -n * e + n * i + e;

            function it(e, i, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (i - e) * 6 * n : n < .5 ? i : n < 2 / 3 ? e + (i - e) * (2 / 3 - n) * 6 : e
            }
            let ie = (e, i, n) => {
                    let r = e * e;
                    return Math.sqrt(Math.max(0, n * (i * i - r) + r))
                },
                ii = [eM, eC, ek],
                ir = e => ii.find(i => i.test(e));

            function io(e) {
                let i = ir(e);
                e1(Boolean(i), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
                let n = i.parse(e);
                return i === ek && (n = function({
                    hue: e,
                    saturation: i,
                    lightness: n,
                    alpha: r
                }) {
                    e /= 360, n /= 100;
                    let o = 0,
                        s = 0,
                        a = 0;
                    if (i /= 100) {
                        let r = n < .5 ? n * (1 + i) : n + i - n * i,
                            l = 2 * n - r;
                        o = it(l, r, e + 1 / 3), s = it(l, r, e), a = it(l, r, e - 1 / 3)
                    } else o = s = a = n;
                    return {
                        red: Math.round(255 * o),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * a),
                        alpha: r
                    }
                }(n)), n
            }
            let is = (e, i) => {
                let n = io(e),
                    r = io(i),
                    o = { ...n
                    };
                return e => (o.red = ie(n.red, r.red, e), o.green = ie(n.green, r.green, e), o.blue = ie(n.blue, r.blue, e), o.alpha = e8(n.alpha, r.alpha, e), eC.transform(o))
            };

            function ia(e, i) {
                return "number" == typeof e ? n => e8(e, i, n) : eR.test(e) ? is(e, i) : ih(e, i)
            }
            let il = (e, i) => {
                    let n = [...e],
                        r = n.length,
                        o = e.map((e, n) => ia(e, i[n]));
                    return e => {
                        for (let i = 0; i < r; i++) n[i] = o[i](e);
                        return n
                    }
                },
                iu = (e, i) => {
                    let n = { ...e,
                            ...i
                        },
                        r = {};
                    for (let o in n) void 0 !== e[o] && void 0 !== i[o] && (r[o] = ia(e[o], i[o]));
                    return e => {
                        for (let i in r) n[i] = r[i](e);
                        return n
                    }
                },
                ih = (e, i) => {
                    let n = eI.createTransformer(i),
                        r = ej(e),
                        o = ej(i),
                        s = r.numColors === o.numColors && r.numNumbers >= o.numNumbers;
                    return s ? tK(il(r.values, o.values), n) : (e0(!0, `Complex values '${e}' and '${i}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?i:e}`)
                },
                ic = (e, i, n) => {
                    let r = i - e;
                    return 0 === r ? 1 : (n - e) / r
                },
                id = (e, i) => n => e8(e, i, n);

            function ip(e, i, {
                clamp: n = !0,
                ease: r,
                mixer: o
            } = {}) {
                let s = e.length;
                e1(s === i.length, "Both input and output ranges must be the same length"), e1(!r || !Array.isArray(r) || r.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[s - 1] && (e = [...e].reverse(), i = [...i].reverse());
                let a = function(e, i, n) {
                        let r = [],
                            o = n || function(e) {
                                if ("number" == typeof e);
                                else if ("string" == typeof e) return eR.test(e) ? is : ih;
                                else if (Array.isArray(e)) return il;
                                else if ("object" == typeof e) return iu;
                                return id
                            }(e[0]),
                            s = e.length - 1;
                        for (let n = 0; n < s; n++) {
                            let s = o(e[n], e[n + 1]);
                            if (i) {
                                let e = Array.isArray(i) ? i[n] : i;
                                s = tK(e, s)
                            }
                            r.push(s)
                        }
                        return r
                    }(i, r, o),
                    l = a.length,
                    u = i => {
                        let n = 0;
                        if (l > 1)
                            for (; n < e.length - 2 && !(i < e[n + 1]); n++);
                        let r = ic(e[n], e[n + 1], i);
                        return a[n](r)
                    };
                return n ? i => u(_(e[0], e[s - 1], i)) : u
            }
            let im = e => e,
                iv = (e, i, n) => (((1 - 3 * n + 3 * i) * e + (3 * n - 6 * i)) * e + 3 * i) * e;

            function ig(e, i, n, r) {
                if (e === i && n === r) return im;
                let o = i => (function(e, i, n, r, o) {
                    let s, a;
                    let l = 0;
                    do(s = iv(a = i + (n - i) / 2, r, o) - e) > 0 ? n = a : i = a; while (Math.abs(s) > 1e-7 && ++l < 12);
                    return a
                })(i, 0, 1, e, n);
                return e => 0 === e || 1 === e ? e : iv(o(e), i, r)
            }
            let iy = e => 1 - Math.sin(Math.acos(e)),
                ix = e9(iy),
                ib = e3(ix),
                iw = ig(.33, 1.53, .69, .99),
                iP = e9(iw),
                iE = e3(iP),
                iT = e => (e *= 2) < 1 ? .5 * iP(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
                iA = {
                    linear: im,
                    easeIn: e4,
                    easeInOut: e7,
                    easeOut: e6,
                    circIn: iy,
                    circInOut: ib,
                    circOut: ix,
                    backIn: iP,
                    backInOut: iE,
                    backOut: iw,
                    anticipate: iT
                },
                iV = e => {
                    if (Array.isArray(e)) {
                        e1(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        let [i, n, r, o] = e;
                        return ig(i, n, r, o)
                    }
                    return "string" == typeof e ? (e1(void 0 !== iA[e], `Invalid easing type '${e}'`), iA[e]) : e
                },
                iS = e => Array.isArray(e) && "number" != typeof e[0];

            function iC({
                keyframes: e,
                ease: i = e7,
                times: n,
                duration: r = 300
            }) {
                e = [...e];
                let o = iS(i) ? i.map(iV) : iV(i),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    a = (n && n.length === e.length ? n : function(e) {
                        let i = e.length;
                        return e.map((e, n) => 0 !== n ? n / (i - 1) : 0)
                    }(e)).map(e => e * r);

                function l() {
                    var i;
                    return ip(a, e, {
                        ease: Array.isArray(o) ? o : (i = e).map(() => o || e7).splice(0, i.length - 1)
                    })
                }
                let u = l();
                return {
                    next: e => (s.value = u(e), s.done = e >= r, s),
                    flipTarget: () => {
                        e.reverse(), u = l()
                    }
                }
            }

            function iM(e, i) {
                return e * Math.sqrt(1 - i * i)
            }
            let ik = ["duration", "bounce"],
                iR = ["stiffness", "damping", "mass"];

            function iB(e, i) {
                return i.some(i => void 0 !== e[i])
            }

            function iL({
                keyframes: e,
                restDelta: i,
                restSpeed: n,
                ...r
            }) {
                let o = e[0],
                    s = e[e.length - 1],
                    a = {
                        done: !1,
                        value: o
                    },
                    {
                        stiffness: l,
                        damping: u,
                        mass: h,
                        velocity: c,
                        duration: d,
                        isResolvedFromDuration: p
                    } = function(e) {
                        let i = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...e
                        };
                        if (!iB(e, iR) && iB(e, ik)) {
                            let n = function({
                                duration: e = 800,
                                bounce: i = .25,
                                velocity: n = 0,
                                mass: r = 1
                            }) {
                                let o, s;
                                e0(e <= 1e4, "Spring duration must be 10 seconds or less");
                                let a = 1 - i;
                                a = _(.05, 1, a), e = _(.01, 10, e / 1e3), a < 1 ? (o = i => {
                                    let r = i * a,
                                        o = r * e,
                                        s = iM(i, a);
                                    return .001 - (r - n) / s * Math.exp(-o)
                                }, s = i => {
                                    let r = i * a,
                                        s = r * e,
                                        l = Math.pow(a, 2) * Math.pow(i, 2) * e,
                                        u = iM(Math.pow(i, 2), a),
                                        h = -o(i) + .001 > 0 ? -1 : 1;
                                    return h * ((s * n + n - l) * Math.exp(-s)) / u
                                }) : (o = i => {
                                    let r = Math.exp(-i * e),
                                        o = (i - n) * e + 1;
                                    return -.001 + r * o
                                }, s = i => {
                                    let r = Math.exp(-i * e),
                                        o = (n - i) * (e * e);
                                    return r * o
                                });
                                let l = 5 / e,
                                    u = function(e, i, n) {
                                        let r = n;
                                        for (let n = 1; n < 12; n++) r -= e(r) / i(r);
                                        return r
                                    }(o, s, l);
                                if (e *= 1e3, isNaN(u)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: e
                                }; {
                                    let i = Math.pow(u, 2) * r;
                                    return {
                                        stiffness: i,
                                        damping: 2 * a * Math.sqrt(r * i),
                                        duration: e
                                    }
                                }
                            }(e);
                            (i = { ...i,
                                ...n,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return i
                    }(r),
                    f = ij,
                    m = c ? -(c / 1e3) : 0,
                    v = u / (2 * Math.sqrt(l * h));

                function g() {
                    let e = s - o,
                        r = Math.sqrt(l / h) / 1e3,
                        a = 5 > Math.abs(e);
                    if (n || (n = a ? .01 : 2), i || (i = a ? .005 : .5), v < 1) {
                        let i = iM(r, v);
                        f = n => s - Math.exp(-v * r * n) * ((m + v * r * e) / i * Math.sin(i * n) + e * Math.cos(i * n))
                    } else if (1 === v) f = i => s - Math.exp(-r * i) * (e + (m + r * e) * i);
                    else {
                        let i = r * Math.sqrt(v * v - 1);
                        f = n => {
                            let o = Math.min(i * n, 300);
                            return s - Math.exp(-v * r * n) * ((m + v * r * e) * Math.sinh(o) + i * e * Math.cosh(o)) / i
                        }
                    }
                }
                return g(), {
                    next: e => {
                        let r = f(e);
                        if (p) a.done = e >= d;
                        else {
                            let o = m;
                            if (0 !== e) {
                                if (v < 1) {
                                    let i = Math.max(0, e - 5);
                                    o = eb(r - f(i), e - i)
                                } else o = 0
                            }
                            let l = Math.abs(o) <= n,
                                u = Math.abs(s - r) <= i;
                            a.done = l && u
                        }
                        return a.value = a.done ? s : r, a
                    },
                    flipTarget: () => {
                        m = -m, [o, s] = [s, o], g()
                    }
                }
            }
            iL.needsInterpolation = (e, i) => "string" == typeof e || "string" == typeof i;
            let ij = e => 0,
                iD = {
                    decay: function({
                        keyframes: e = [0],
                        velocity: i = 0,
                        power: n = .8,
                        timeConstant: r = 350,
                        restDelta: o = .5,
                        modifyTarget: s
                    }) {
                        let a = e[0],
                            l = {
                                done: !1,
                                value: a
                            },
                            u = n * i,
                            h = a + u,
                            c = void 0 === s ? h : s(h);
                        return c !== h && (u = c - a), {
                            next: e => {
                                let i = -u * Math.exp(-e / r);
                                return l.done = !(i > o || i < -o), l.value = l.done ? c : c + i, l
                            },
                            flipTarget: () => {}
                        }
                    },
                    keyframes: iC,
                    tween: iC,
                    spring: iL
                };

            function iO(e, i, n = 0) {
                return e - i - n
            }
            let iF = e => {
                let i = ({
                    delta: i
                }) => e(i);
                return {
                    start: () => ec.update(i, !0),
                    stop: () => ed.update(i)
                }
            };

            function iI({
                duration: e,
                driver: i = iF,
                elapsed: n = 0,
                repeat: r = 0,
                repeatType: o = "loop",
                repeatDelay: s = 0,
                keyframes: a,
                autoplay: l = !0,
                onPlay: u,
                onStop: h,
                onComplete: c,
                onRepeat: d,
                onUpdate: p,
                type: f = "keyframes",
                ...m
            }) {
                var v;
                let g, y;
                let x = n,
                    b = 0,
                    w = e,
                    P = !1,
                    E = !0,
                    T = iD[a.length > 2 ? "keyframes" : f] || iC,
                    A = a[0],
                    V = a[a.length - 1],
                    S = {
                        done: !1,
                        value: A
                    };
                (null === (v = T.needsInterpolation) || void 0 === v ? void 0 : v.call(T, A, V)) && (y = ip([0, 100], [A, V], {
                    clamp: !1
                }), a = [0, 100]);
                let C = T({ ...m,
                    duration: e,
                    keyframes: a
                });

                function M(e) {
                    if (E || (e = -e), n += e, P || (S = C.next(Math.max(0, n)), y && (S.value = y(S.value)), P = E ? S.done : n <= 0), p && p(S.value), P) {
                        if (0 === b && (w = void 0 !== w ? w : n), b < r) {
                            var i, a;
                            i = n, a = w, (E ? i >= a + s : i <= -s) && (b++, "reverse" === o ? n = function(e, i = 0, n = 0, r = !0) {
                                return r ? iO(i + -e, i, n) : i - (e - i) + n
                            }(n, w, s, E = b % 2 == 0) : (n = iO(n, w, s), "mirror" === o && C.flipTarget()), P = !1, d && d())
                        } else g && g.stop(), c && c()
                    }
                }
                return l && (u && u(), (g = i(M)).start()), {
                    stop: () => {
                        h && h(), g && g.stop()
                    },
                    set currentTime(t) {
                        n = x, M(t)
                    },
                    sample: i => {
                        n = x;
                        let r = e && "number" == typeof e ? Math.max(.5 * e, 50) : 50,
                            o = 0;
                        for (M(0); o <= i;) {
                            let e = i - o;
                            M(Math.min(e, r)), o += r
                        }
                        return S
                    }
                }
            }
            let iU = ([e, i, n, r]) => `cubic-bezier(${e}, ${i}, ${n}, ${r})`,
                iN = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: iU([0, .65, .55, 1]),
                    circOut: iU([.55, 0, 1, .45]),
                    backIn: iU([.31, .01, .66, -.59]),
                    backOut: iU([.33, 1.53, .69, .99])
                },
                iz = {
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
                },
                i$ = {},
                i_ = {};
            for (let e in iz) i_[e] = () => (void 0 === i$[e] && (i$[e] = iz[e]()), i$[e]);
            let iW = new Set(["opacity"]);

            function iH(e, i) {
                let n = performance.now(),
                    r = ({
                        timestamp: o
                    }) => {
                        let s = o - n;
                        s >= i && (ed.read(r), e(s - i))
                    };
                return ec.read(r, !0), () => ed.read(r)
            }
            let iY = () => ({
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                }),
                iX = e => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                iq = () => ({
                    type: "keyframes",
                    ease: "linear",
                    duration: .3
                }),
                iG = {
                    type: "keyframes",
                    duration: .8
                },
                iZ = {
                    x: iY,
                    y: iY,
                    z: iY,
                    rotate: iY,
                    rotateX: iY,
                    rotateY: iY,
                    rotateZ: iY,
                    scaleX: iX,
                    scaleY: iX,
                    scale: iX,
                    opacity: iq,
                    backgroundColor: iq,
                    color: iq,
                    default: iX
                },
                iK = (e, {
                    keyframes: i
                }) => {
                    if (i.length > 2) return iG; {
                        let n = iZ[e] || iZ.default;
                        return n(i[1])
                    }
                },
                iJ = (e, i) => "zIndex" !== e && !!("number" == typeof i || Array.isArray(i) || "string" == typeof i && eI.test(i) && !i.startsWith("url("));

            function iQ(e) {
                return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
            }

            function i0(e) {
                return "number" == typeof e ? 0 : eH("", e)
            }

            function i1(e, i) {
                return e[i] || e.default || e
            }
            let i2 = (e, i, n, r = {}) => o => {
                let s = i1(r, e) || {},
                    a = s.delay || r.delay || 0,
                    {
                        elapsed: l = 0
                    } = r;
                l -= e2(a);
                let u = function(e, i, n, r) {
                        let o = iJ(i, n),
                            s = void 0 !== r.from ? r.from : e.get();
                        return ("none" === s && o && "string" == typeof n ? s = eH(i, n) : iQ(s) && "string" == typeof n ? s = i0(n) : !Array.isArray(n) && iQ(n) && "string" == typeof s && (n = i0(s)), Array.isArray(n)) ? (null === n[0] && (n[0] = s), n) : [s, n]
                    }(i, e, n, s),
                    h = u[0],
                    c = u[u.length - 1],
                    d = iJ(e, h),
                    p = iJ(e, c);
                e0(d === p, `You are trying to animate ${e} from "${h}" to "${c}". ${h} is not an animatable value - to enable this animation set ${h} to a value animatable to ${c} via the \`style\` property.`);
                let f = {
                    keyframes: u,
                    velocity: i.getVelocity(),
                    ...s,
                    elapsed: l,
                    onUpdate: e => {
                        i.set(e), s.onUpdate && s.onUpdate(e)
                    },
                    onComplete: () => {
                        o(), s.onComplete && s.onComplete()
                    }
                };
                if (!d || !p || e5.current || !1 === s.type) return function({
                    keyframes: e,
                    elapsed: i,
                    onUpdate: n,
                    onComplete: r
                }) {
                    let o = () => {
                        n && n(e[e.length - 1]), r && r()
                    };
                    return i ? {
                        stop: iH(o, -i)
                    } : o()
                }(f);
                if ("inertia" === s.type) return function({
                    keyframes: e,
                    velocity: i = 0,
                    min: n,
                    max: r,
                    power: o = .8,
                    timeConstant: s = 750,
                    bounceStiffness: a = 500,
                    bounceDamping: l = 10,
                    restDelta: u = 1,
                    modifyTarget: h,
                    driver: c,
                    onUpdate: d,
                    onComplete: p,
                    onStop: f
                }) {
                    let m;
                    let v = e[0];

                    function g(e) {
                        return void 0 !== n && e < n || void 0 !== r && e > r
                    }

                    function y(e) {
                        return void 0 === n ? r : void 0 === r ? n : Math.abs(n - e) < Math.abs(r - e) ? n : r
                    }

                    function x(e) {
                        null == m || m.stop(), m = iI({
                            keyframes: [0, 1],
                            velocity: 0,
                            ...e,
                            driver: c,
                            onUpdate: i => {
                                var n;
                                null == d || d(i), null === (n = e.onUpdate) || void 0 === n || n.call(e, i)
                            },
                            onComplete: p,
                            onStop: f
                        })
                    }

                    function b(e) {
                        x({
                            type: "spring",
                            stiffness: a,
                            damping: l,
                            restDelta: u,
                            ...e
                        })
                    }
                    if (g(v)) b({
                        velocity: i,
                        keyframes: [v, y(v)]
                    });
                    else {
                        let e, r, a = o * i + v;
                        void 0 !== h && (a = h(a));
                        let l = y(a),
                            c = l === n ? -1 : 1,
                            d = n => {
                                e = r, r = n, i = eb(n - e, ei.delta), (1 === c && n > l || -1 === c && n < l) && b({
                                    keyframes: [n, l],
                                    velocity: i
                                })
                            };
                        x({
                            type: "decay",
                            keyframes: [v, 0],
                            velocity: i,
                            timeConstant: s,
                            power: o,
                            restDelta: u,
                            modifyTarget: h,
                            onUpdate: g(a) ? d : void 0
                        })
                    }
                    return {
                        stop: () => null == m ? void 0 : m.stop()
                    }
                }(f);
                ! function({
                    when: e,
                    delay: i,
                    delayChildren: n,
                    staggerChildren: r,
                    staggerDirection: o,
                    repeat: s,
                    repeatType: a,
                    repeatDelay: l,
                    from: u,
                    elapsed: h,
                    ...c
                }) {
                    return !!Object.keys(c).length
                }(s) && (f = { ...f,
                    ...iK(e, f)
                }), f.duration && (f.duration = e2(f.duration)), f.repeatDelay && (f.repeatDelay = e2(f.repeatDelay));
                let m = i.owner,
                    v = m && m.current;
                if (m && v instanceof HTMLElement && !(null == m ? void 0 : m.getProps().onUpdate)) {
                    let n = function(e, i, {
                        onUpdate: n,
                        onComplete: r,
                        ...o
                    }) {
                        var s;
                        let a = i_.waapi() && iW.has(i) && !o.repeatDelay && "mirror" !== o.repeatType && 0 !== o.damping;
                        if (!a) return !1;
                        let {
                            keyframes: l,
                            duration: u = 300,
                            elapsed: h = 0,
                            ease: c
                        } = o;
                        if ("spring" === o.type || !(!(s = o.ease) || Array.isArray(s) || "string" == typeof s && iN[s])) {
                            if (o.repeat === 1 / 0) return;
                            let e = iI({ ...o,
                                    elapsed: 0
                                }),
                                i = {
                                    done: !1,
                                    value: l[0]
                                },
                                n = [],
                                r = 0;
                            for (; !i.done && r < 2e4;) n.push((i = e.sample(r)).value), r += 10;
                            l = n, u = r - 10, c = "linear"
                        }
                        let d = function(e, i, n, {
                            delay: r = 0,
                            duration: o,
                            repeat: s = 0,
                            repeatType: a = "loop",
                            ease: l,
                            times: u
                        } = {}) {
                            return e.animate({
                                [i]: n,
                                offset: u
                            }, {
                                delay: r,
                                duration: o,
                                easing: function(e) {
                                    if (e) return Array.isArray(e) ? iU(e) : iN[e]
                                }(l),
                                fill: "both",
                                iterations: s + 1,
                                direction: "reverse" === a ? "alternate" : "normal"
                            })
                        }(e.owner.current, i, l, { ...o,
                            delay: -h,
                            duration: u,
                            ease: c
                        });
                        return d.onfinish = () => {
                            e.set(function(e, {
                                repeat: i,
                                repeatType: n = "loop"
                            }) {
                                let r = i && "loop" !== n && i % 2 == 1 ? 0 : e.length - 1;
                                return e[r]
                            }(l, o)), ec.update(() => d.cancel()), r && r()
                        }, {
                            get currentTime() {
                                return d.currentTime || 0
                            },
                            set currentTime(t) {
                                d.currentTime = t
                            },
                            stop: () => {
                                let {
                                    currentTime: i
                                } = d;
                                if (i) {
                                    let n = iI({ ...o,
                                        autoplay: !1
                                    });
                                    e.setWithVelocity(n.sample(i - 10).value, n.sample(i).value, 10)
                                }
                                ec.update(() => d.cancel())
                            }
                        }
                    }(i, e, f);
                    if (n) return n
                }
                return iI(f)
            };

            function i5(e, i, n = {}) {
                var r;
                let o = eK(e, i, n.custom),
                    {
                        transition: s = e.getDefaultTransition() || {}
                    } = o || {};
                n.transitionOverride && (s = n.transitionOverride);
                let a = o ? () => i3(e, o, n) : () => Promise.resolve(),
                    l = (null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size) ? (r = 0) => {
                        let {
                            delayChildren: o = 0,
                            staggerChildren: a,
                            staggerDirection: l
                        } = s;
                        return function(e, i, n = 0, r = 0, o = 1, s) {
                            let a = [],
                                l = (e.variantChildren.size - 1) * r,
                                u = 1 === o ? (e = 0) => e * r : (e = 0) => l - e * r;
                            return Array.from(e.variantChildren).sort(i9).forEach((e, r) => {
                                e.notify("AnimationStart", i), a.push(i5(e, i, { ...s,
                                    delay: n + u(r)
                                }).then(() => e.notify("AnimationComplete", i)))
                            }), Promise.all(a)
                        }(e, i, o + r, a, l, n)
                    } : () => Promise.resolve(),
                    {
                        when: u
                    } = s;
                if (!u) return Promise.all([a(), l(n.delay)]); {
                    let [e, i] = "beforeChildren" === u ? [a, l] : [l, a];
                    return e().then(i)
                }
            }

            function i3(e, i, {
                delay: n = 0,
                transitionOverride: r,
                type: o
            } = {}) {
                var s;
                let {
                    transition: a = e.getDefaultTransition(),
                    transitionEnd: l,
                    ...u
                } = e.makeTargetAnimatable(i), h = e.getValue("willChange");
                r && (a = r);
                let c = [],
                    d = o && (null === (s = e.animationState) || void 0 === s ? void 0 : s.getState()[o]);
                for (let i in u) {
                    let r = e.getValue(i),
                        o = u[i];
                    if (!r || void 0 === o || d && function({
                            protectedKeys: e,
                            needsAnimating: i
                        }, n) {
                            let r = e.hasOwnProperty(n) && !0 !== i[n];
                            return i[n] = !1, r
                        }(d, i)) continue;
                    let s = {
                        delay: n,
                        elapsed: 0,
                        ...a
                    };
                    if (window.HandoffAppearAnimations && !r.hasAnimated) {
                        let n = e.getProps()[eQ];
                        n && (s.elapsed = window.HandoffAppearAnimations(n, i, r, ec))
                    }
                    let l = r.start(i2(i, r, o, e.shouldReduceMotion && O.has(i) ? {
                        type: !1
                    } : s));
                    eJ(h) && (h.add(i), l = l.then(() => h.remove(i))), c.push(l)
                }
                return Promise.all(c).then(() => {
                    l && function(e, i) {
                        let n = eK(e, i),
                            {
                                transitionEnd: r = {},
                                transition: o = {},
                                ...s
                            } = n ? e.makeTargetAnimatable(n, !1) : {};
                        for (let i in s = { ...s,
                                ...r
                            }) {
                            var a;
                            let n = tk(s[i]);
                            a = i, e.hasValue(a) ? e.getValue(a).set(n) : e.addValue(a, eE(n))
                        }
                    }(e, l)
                })
            }

            function i9(e, i) {
                return e.sortNodePosition(i)
            }
            let i4 = [a.Animate, a.InView, a.Focus, a.Hover, a.Tap, a.Drag, a.Exit],
                i6 = [...i4].reverse(),
                i7 = i4.length;

            function i8(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let nt = {
                    animation: t4(({
                        visualElement: e,
                        animate: i
                    }) => {
                        e.animationState || (e.animationState = function(e) {
                            let i = i => Promise.all(i.map(({
                                    animation: i,
                                    options: n
                                }) => (function(e, i, n = {}) {
                                    let r;
                                    if (e.notify("AnimationStart", i), Array.isArray(i)) {
                                        let o = i.map(i => i5(e, i, n));
                                        r = Promise.all(o)
                                    } else if ("string" == typeof i) r = i5(e, i, n);
                                    else {
                                        let o = "function" == typeof i ? eK(e, i, n.custom) : i;
                                        r = i3(e, o, n)
                                    }
                                    return r.then(() => e.notify("AnimationComplete", i))
                                })(e, i, n))),
                                n = {
                                    [a.Animate]: i8(!0),
                                    [a.InView]: i8(),
                                    [a.Hover]: i8(),
                                    [a.Tap]: i8(),
                                    [a.Drag]: i8(),
                                    [a.Focus]: i8(),
                                    [a.Exit]: i8()
                                },
                                r = !0,
                                o = (i, n) => {
                                    let r = eK(e, n);
                                    if (r) {
                                        let {
                                            transition: e,
                                            transitionEnd: n,
                                            ...o
                                        } = r;
                                        i = { ...i,
                                            ...o,
                                            ...n
                                        }
                                    }
                                    return i
                                };

                            function s(s, a) {
                                let l = e.getProps(),
                                    u = e.getVariantContext(!0) || {},
                                    h = [],
                                    c = new Set,
                                    d = {},
                                    p = 1 / 0;
                                for (let i = 0; i < i7; i++) {
                                    var f;
                                    let m = i6[i],
                                        v = n[m],
                                        x = void 0 !== l[m] ? l[m] : u[m],
                                        b = g(x),
                                        w = m === a ? v.isActive : null;
                                    !1 === w && (p = i);
                                    let P = x === u[m] && x !== l[m] && b;
                                    if (P && r && e.manuallyAnimateOnMount && (P = !1), v.protectedKeys = { ...d
                                        }, !v.isActive && null === w || !x && !v.prevProp || y(x) || "boolean" == typeof x) continue;
                                    let E = (f = v.prevProp, "string" == typeof x ? x !== f : !!Array.isArray(x) && !t8(x, f)),
                                        T = E || m === a && v.isActive && !P && b || i > p && b,
                                        A = Array.isArray(x) ? x : [x],
                                        V = A.reduce(o, {});
                                    !1 === w && (V = {});
                                    let {
                                        prevResolvedValues: S = {}
                                    } = v, C = { ...S,
                                        ...V
                                    }, M = e => {
                                        T = !0, c.delete(e), v.needsAnimating[e] = !0
                                    };
                                    for (let e in C) {
                                        let i = V[e],
                                            n = S[e];
                                        d.hasOwnProperty(e) || (i !== n ? tC(i) && tC(n) ? !t8(i, n) || E ? M(e) : v.protectedKeys[e] = !0 : void 0 !== i ? M(e) : c.add(e) : void 0 !== i && c.has(e) ? M(e) : v.protectedKeys[e] = !0)
                                    }
                                    v.prevProp = x, v.prevResolvedValues = V, v.isActive && (d = { ...d,
                                        ...V
                                    }), r && e.blockInitialAnimation && (T = !1), T && !P && h.push(...A.map(e => ({
                                        animation: e,
                                        options: {
                                            type: m,
                                            ...s
                                        }
                                    })))
                                }
                                if (c.size) {
                                    let i = {};
                                    c.forEach(n => {
                                        let r = e.getBaseTarget(n);
                                        void 0 !== r && (i[n] = r)
                                    }), h.push({
                                        animation: i
                                    })
                                }
                                let m = Boolean(h.length);
                                return r && !1 === l.initial && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? i(h) : Promise.resolve()
                            }
                            return {
                                animateChanges: s,
                                setActive: function(i, r, o) {
                                    var a;
                                    if (n[i].isActive === r) return Promise.resolve();
                                    null === (a = e.variantChildren) || void 0 === a || a.forEach(e => {
                                        var n;
                                        return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(i, r)
                                    }), n[i].isActive = r;
                                    let l = s(o, i);
                                    for (let e in n) n[e].protectedKeys = {};
                                    return l
                                },
                                setAnimateFunction: function(n) {
                                    i = n(e)
                                },
                                getState: () => n
                            }
                        }(e)), y(i) && (0, u.useEffect)(() => i.subscribe(e), [i])
                    }),
                    exit: t4(e => {
                        let {
                            custom: i,
                            visualElement: n
                        } = e, [r, o] = t7(), s = (0, u.useContext)(d);
                        (0, u.useEffect)(() => {
                            n.isPresent = r;
                            let e = n.animationState && n.animationState.setActive(a.Exit, !r, {
                                custom: s && s.custom || i
                            });
                            e && !r && e.then(o)
                        }, [r])
                    })
                },
                ne = (e, i) => Math.abs(e - i);
            class ni {
                constructor(e, i, {
                    transformPagePoint: n
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let e = no(this.lastMoveEventInfo, this.history),
                                i = null !== this.startEvent,
                                n = function(e, i) {
                                    let n = ne(e.x, i.x),
                                        r = ne(e.y, i.y);
                                    return Math.sqrt(n ** 2 + r ** 2)
                                }(e.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!i && !n) return;
                            let {
                                point: r
                            } = e, {
                                timestamp: o
                            } = ei;
                            this.history.push({ ...r,
                                timestamp: o
                            });
                            let {
                                onStart: s,
                                onMove: a
                            } = this.handlers;
                            i || (s && s(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, e)
                        }, this.handlePointerMove = (e, i) => {
                            this.lastMoveEvent = e, this.lastMoveEventInfo = nn(i, this.transformPagePoint), ec.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (e, i) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: n,
                                onSessionEnd: r
                            } = this.handlers, o = no("pointercancel" === e.type ? this.lastMoveEventInfo : nn(i, this.transformPagePoint), this.history);
                            this.startEvent && n && n(e, o), r && r(e, o)
                        }, !tF(e)) return;
                    this.handlers = i, this.transformPagePoint = n;
                    let r = tI(e),
                        o = nn(r, this.transformPagePoint),
                        {
                            point: s
                        } = o,
                        {
                            timestamp: a
                        } = ei;
                    this.history = [{ ...s,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = i;
                    l && l(e, no(o, this.history)), this.removeListeners = tK(tN(window, "pointermove", this.handlePointerMove), tN(window, "pointerup", this.handlePointerUp), tN(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(e) {
                    this.handlers = e
                }
                end() {
                    this.removeListeners && this.removeListeners(), ed.update(this.updatePoint)
                }
            }

            function nn(e, i) {
                return i ? {
                    point: i(e.point)
                } : e
            }

            function nr(e, i) {
                return {
                    x: e.x - i.x,
                    y: e.y - i.y
                }
            }

            function no({
                point: e
            }, i) {
                return {
                    point: e,
                    delta: nr(e, ns(i)),
                    offset: nr(e, i[0]),
                    velocity: function(e, i) {
                        if (e.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let n = e.length - 1,
                            r = null,
                            o = ns(e);
                        for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > e2(.1)));) n--;
                        if (!r) return {
                            x: 0,
                            y: 0
                        };
                        let s = (o.timestamp - r.timestamp) / 1e3;
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (o.x - r.x) / s,
                            y: (o.y - r.y) / s
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(i, 0)
                }
            }

            function ns(e) {
                return e[e.length - 1]
            }

            function na(e) {
                return e.max - e.min
            }

            function nl(e, i = 0, n = .01) {
                return Math.abs(e - i) <= n
            }

            function nu(e, i, n, r = .5) {
                e.origin = r, e.originPoint = e8(i.min, i.max, e.origin), e.scale = na(n) / na(i), (nl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = e8(n.min, n.max, e.origin) - e.originPoint, (nl(e.translate) || isNaN(e.translate)) && (e.translate = 0)
            }

            function nh(e, i, n, r) {
                nu(e.x, i.x, n.x, null == r ? void 0 : r.originX), nu(e.y, i.y, n.y, null == r ? void 0 : r.originY)
            }

            function nc(e, i, n) {
                e.min = n.min + i.min, e.max = e.min + na(i)
            }

            function nd(e, i, n) {
                e.min = i.min - n.min, e.max = e.min + na(i)
            }

            function np(e, i, n) {
                nd(e.x, i.x, n.x), nd(e.y, i.y, n.y)
            }

            function nf(e, i, n) {
                return {
                    min: void 0 !== i ? e.min + i : void 0,
                    max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
                }
            }

            function nm(e, i) {
                let n = i.min - e.min,
                    r = i.max - e.max;
                return i.max - i.min < e.max - e.min && ([n, r] = [r, n]), {
                    min: n,
                    max: r
                }
            }

            function nv(e, i, n) {
                return {
                    min: ng(e, i),
                    max: ng(e, n)
                }
            }

            function ng(e, i) {
                return "number" == typeof e ? e : e[i] || 0
            }
            let ny = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                nx = () => ({
                    x: ny(),
                    y: ny()
                }),
                nb = () => ({
                    min: 0,
                    max: 0
                }),
                nw = () => ({
                    x: nb(),
                    y: nb()
                });

            function nP(e) {
                return [e("x"), e("y")]
            }

            function nE({
                top: e,
                left: i,
                right: n,
                bottom: r
            }) {
                return {
                    x: {
                        min: i,
                        max: n
                    },
                    y: {
                        min: e,
                        max: r
                    }
                }
            }

            function nT(e) {
                return void 0 === e || 1 === e
            }

            function nA({
                scale: e,
                scaleX: i,
                scaleY: n
            }) {
                return !nT(e) || !nT(i) || !nT(n)
            }

            function nV(e) {
                return nA(e) || nS(e) || e.z || e.rotate || e.rotateX || e.rotateY
            }

            function nS(e) {
                var i, n;
                return (i = e.x) && "0%" !== i || (n = e.y) && "0%" !== n
            }

            function nC(e, i, n, r, o) {
                return void 0 !== o && (e = r + o * (e - r)), r + n * (e - r) + i
            }

            function nM(e, i = 0, n = 1, r, o) {
                e.min = nC(e.min, i, n, r, o), e.max = nC(e.max, i, n, r, o)
            }

            function nk(e, {
                x: i,
                y: n
            }) {
                nM(e.x, i.translate, i.scale, i.originPoint), nM(e.y, n.translate, n.scale, n.originPoint)
            }

            function nR(e) {
                return Number.isInteger(e) ? e : e > 1.0000000000001 || e < .999999999999 ? e : 1
            }

            function nB(e, i) {
                e.min = e.min + i, e.max = e.max + i
            }

            function nL(e, i, [n, r, o]) {
                let s = void 0 !== i[o] ? i[o] : .5,
                    a = e8(e.min, e.max, s);
                nM(e, i[n], i[r], a, i.scale)
            }
            let nj = ["x", "scaleX", "originX"],
                nD = ["y", "scaleY", "originY"];

            function nO(e, i) {
                nL(e.x, i, nj), nL(e.y, i, nD)
            }

            function nF(e, i) {
                return nE(function(e, i) {
                    if (!i) return e;
                    let n = i({
                            x: e.left,
                            y: e.top
                        }),
                        r = i({
                            x: e.right,
                            y: e.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(e.getBoundingClientRect(), i))
            }
            let nI = new WeakMap;
            class nU {
                constructor(e) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = nw(), this.visualElement = e
                }
                start(e, {
                    snapToCursor: i = !1
                } = {}) {
                    if (!1 === this.visualElement.isPresent) return;
                    let n = e => {
                            this.stopAnimation(), i && this.snapToCursor(tI(e, "page").point)
                        },
                        r = (e, i) => {
                            var n;
                            let {
                                drag: r,
                                dragPropagation: o,
                                onDragStart: s
                            } = this.getProps();
                            (!r || o || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tH(r), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nP(e => {
                                var i, n;
                                let r = this.getAxisMotionValue(e).get() || 0;
                                if (tt.test(r)) {
                                    let o = null === (n = null === (i = this.visualElement.projection) || void 0 === i ? void 0 : i.layout) || void 0 === n ? void 0 : n.layoutBox[e];
                                    if (o) {
                                        let e = na(o);
                                        r = e * (parseFloat(r) / 100)
                                    }
                                }
                                this.originPoint[e] = r
                            }), null == s || s(e, i), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(a.Drag, !0))
                        },
                        o = (e, i) => {
                            let {
                                dragPropagation: n,
                                dragDirectionLock: r,
                                onDirectionLock: o,
                                onDrag: s
                            } = this.getProps();
                            if (!n && !this.openGlobalLock) return;
                            let {
                                offset: a
                            } = i;
                            if (r && null === this.currentDirection) {
                                this.currentDirection = function(e, i = 10) {
                                    let n = null;
                                    return Math.abs(e.y) > i ? n = "y" : Math.abs(e.x) > i && (n = "x"), n
                                }(a), null !== this.currentDirection && (null == o || o(this.currentDirection));
                                return
                            }
                            this.updateAxis("x", i.point, a), this.updateAxis("y", i.point, a), this.visualElement.render(), null == s || s(e, i)
                        },
                        s = (e, i) => this.stop(e, i);
                    this.panSession = new ni(e, {
                        onSessionStart: n,
                        onStart: r,
                        onMove: o,
                        onSessionEnd: s
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(e, i) {
                    let n = this.isDragging;
                    if (this.cancel(), !n) return;
                    let {
                        velocity: r
                    } = i;
                    this.startAnimation(r);
                    let {
                        onDragEnd: o
                    } = this.getProps();
                    null == o || o(e, i)
                }
                cancel() {
                    var e, i;
                    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = void 0;
                    let {
                        dragPropagation: n
                    } = this.getProps();
                    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (i = this.visualElement.animationState) || void 0 === i || i.setActive(a.Drag, !1)
                }
                updateAxis(e, i, n) {
                    let {
                        drag: r
                    } = this.getProps();
                    if (!n || !nN(e, r, this.currentDirection)) return;
                    let o = this.getAxisMotionValue(e),
                        s = this.originPoint[e] + n[e];
                    this.constraints && this.constraints[e] && (s = function(e, {
                        min: i,
                        max: n
                    }, r) {
                        return void 0 !== i && e < i ? e = r ? e8(i, e, r.min) : Math.max(e, i) : void 0 !== n && e > n && (e = r ? e8(n, e, r.max) : Math.min(e, n)), e
                    }(s, this.constraints[e], this.elastic[e])), o.set(s)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), {
                        layout: n
                    } = this.visualElement.projection || {}, r = this.constraints;
                    e && v(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(e, {
                        top: i,
                        left: n,
                        bottom: r,
                        right: o
                    }) {
                        return {
                            x: nf(e.x, n, o),
                            y: nf(e.y, i, r)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(e = .35) {
                        return !1 === e ? e = 0 : !0 === e && (e = .35), {
                            x: nv(e, "left", "right"),
                            y: nv(e, "top", "bottom")
                        }
                    }(i), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && nP(e => {
                        this.getAxisMotionValue(e) && (this.constraints[e] = function(e, i) {
                            let n = {};
                            return void 0 !== i.min && (n.min = i.min - e.min), void 0 !== i.max && (n.max = i.max - e.min), n
                        }(n.layoutBox[e], this.constraints[e]))
                    })
                }
                resolveRefConstraints() {
                    var e;
                    let {
                        dragConstraints: i,
                        onMeasureDragConstraints: n
                    } = this.getProps();
                    if (!i || !v(i)) return !1;
                    let r = i.current;
                    e1(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: o
                    } = this.visualElement;
                    if (!o || !o.layout) return !1;
                    let s = function(e, i, n) {
                            let r = nF(e, n),
                                {
                                    scroll: o
                                } = i;
                            return o && (nB(r.x, o.offset.x), nB(r.y, o.offset.y)), r
                        }(r, o.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: nm((e = o.layout.layoutBox).x, s.x),
                            y: nm(e.y, s.y)
                        };
                    if (n) {
                        let e = n(function({
                            x: e,
                            y: i
                        }) {
                            return {
                                top: i.min,
                                right: e.max,
                                bottom: i.max,
                                left: e.min
                            }
                        }(a));
                        this.hasMutatedConstraints = !!e, e && (a = nE(e))
                    }
                    return a
                }
                startAnimation(e) {
                    let {
                        drag: i,
                        dragMomentum: n,
                        dragElastic: r,
                        dragTransition: o,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: a
                    } = this.getProps(), l = this.constraints || {}, u = nP(a => {
                        if (!nN(a, i, this.currentDirection)) return;
                        let u = (null == l ? void 0 : l[a]) || {};
                        s && (u = {
                            min: 0,
                            max: 0
                        });
                        let h = {
                            type: "inertia",
                            velocity: n ? e[a] : 0,
                            bounceStiffness: r ? 200 : 1e6,
                            bounceDamping: r ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...o,
                            ...u
                        };
                        return this.startAxisValueAnimation(a, h)
                    });
                    return Promise.all(u).then(a)
                }
                startAxisValueAnimation(e, i) {
                    let n = this.getAxisMotionValue(e);
                    return n.start(i2(e, n, 0, i))
                }
                stopAnimation() {
                    nP(e => this.getAxisMotionValue(e).stop())
                }
                getAxisMotionValue(e) {
                    var i;
                    let n = "_drag" + e.toUpperCase(),
                        r = this.visualElement.getProps()[n];
                    return r || this.visualElement.getValue(e, (null === (i = this.visualElement.getProps().initial) || void 0 === i ? void 0 : i[e]) || 0)
                }
                snapToCursor(e) {
                    nP(i => {
                        let {
                            drag: n
                        } = this.getProps();
                        if (!nN(i, n, this.currentDirection)) return;
                        let {
                            projection: r
                        } = this.visualElement, o = this.getAxisMotionValue(i);
                        if (r && r.layout) {
                            let {
                                min: n,
                                max: s
                            } = r.layout.layoutBox[i];
                            o.set(e[i] - e8(n, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    var e;
                    if (!this.visualElement.current) return;
                    let {
                        drag: i,
                        dragConstraints: n
                    } = this.getProps(), {
                        projection: r
                    } = this.visualElement;
                    if (!v(n) || !r || !this.constraints) return;
                    this.stopAnimation();
                    let o = {
                        x: 0,
                        y: 0
                    };
                    nP(e => {
                        let i = this.getAxisMotionValue(e);
                        if (i) {
                            let n = i.get();
                            o[e] = function(e, i) {
                                let n = .5,
                                    r = na(e),
                                    o = na(i);
                                return o > r ? n = ic(i.min, i.max - r, e.min) : r > o && (n = ic(e.min, e.max - o, i.min)), _(0, 1, n)
                            }({
                                min: n,
                                max: n
                            }, this.constraints[e])
                        }
                    });
                    let {
                        transformTemplate: s
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = s ? s({}, "") : "none", null === (e = r.root) || void 0 === e || e.updateScroll(), r.updateLayout(), this.resolveConstraints(), nP(e => {
                        if (!nN(e, i, null)) return;
                        let n = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        n.set(e8(r, s, o[e]))
                    })
                }
                addListeners() {
                    var e;
                    if (!this.visualElement.current) return;
                    nI.set(this.visualElement, this);
                    let i = this.visualElement.current,
                        n = tN(i, "pointerdown", e => {
                            let {
                                drag: i,
                                dragListener: n = !0
                            } = this.getProps();
                            i && n && this.start(e)
                        }),
                        r = () => {
                            let {
                                dragConstraints: e
                            } = this.getProps();
                            v(e) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: o
                        } = this.visualElement,
                        s = o.addEventListener("measure", r);
                    o && !o.layout && (null === (e = o.root) || void 0 === e || e.updateScroll(), o.updateLayout()), r();
                    let a = tD(window, "resize", () => this.scalePositionWithinConstraints()),
                        l = o.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: i
                        }) => {
                            this.isDragging && i && (nP(i => {
                                let n = this.getAxisMotionValue(i);
                                n && (this.originPoint[i] += e[i].translate, n.set(n.get() + e[i].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        a(), n(), s(), null == l || l()
                    }
                }
                getProps() {
                    let e = this.visualElement.getProps(),
                        {
                            drag: i = !1,
                            dragDirectionLock: n = !1,
                            dragPropagation: r = !1,
                            dragConstraints: o = !1,
                            dragElastic: s = .35,
                            dragMomentum: a = !0
                        } = e;
                    return { ...e,
                        drag: i,
                        dragDirectionLock: n,
                        dragPropagation: r,
                        dragConstraints: o,
                        dragElastic: s,
                        dragMomentum: a
                    }
                }
            }

            function nN(e, i, n) {
                return (!0 === i || i === e) && (null === n || n === e)
            }
            let nz = {
                pan: t4(function({
                    onPan: e,
                    onPanStart: i,
                    onPanEnd: n,
                    onPanSessionStart: r,
                    visualElement: o
                }) {
                    let s = (0, u.useRef)(null),
                        {
                            transformPagePoint: a
                        } = (0, u.useContext)(h),
                        l = {
                            onSessionStart: r,
                            onStart: i,
                            onMove: e,
                            onEnd: (e, i) => {
                                s.current = null, n && n(e, i)
                            }
                        };
                    (0, u.useEffect)(() => {
                        null !== s.current && s.current.updateHandlers(l)
                    }), tz(o, "pointerdown", (e || i || n || r) && function(e) {
                        s.current = new ni(e, l, {
                            transformPagePoint: a
                        })
                    }), tG(() => s.current && s.current.end())
                }),
                drag: t4(function(e) {
                    let {
                        dragControls: i,
                        visualElement: n
                    } = e, r = A(() => new nU(n));
                    (0, u.useEffect)(() => i && i.subscribe(r), [r, i]), (0, u.useEffect)(() => r.addListeners(), [r])
                })
            };

            function n$(e) {
                return "string" == typeof e && e.startsWith("var(--")
            }
            let n_ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function nW(e, i, n = 1) {
                e1(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                let [r, o] = function(e) {
                    let i = n_.exec(e);
                    if (!i) return [, ];
                    let [, n, r] = i;
                    return [n, r]
                }(e);
                if (!r) return;
                let s = window.getComputedStyle(i).getPropertyValue(r);
                return s ? s.trim() : n$(o) ? nW(o, i, n + 1) : o
            }
            let nH = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                nY = e => nH.has(e),
                nX = e => Object.keys(e).some(nY),
                nq = e => e === W || e === te;
            (s = l || (l = {})).width = "width", s.height = "height", s.left = "left", s.right = "right", s.top = "top", s.bottom = "bottom";
            let nG = (e, i) => parseFloat(e.split(", ")[i]),
                nZ = (e, i) => (n, {
                    transform: r
                }) => {
                    if ("none" === r || !r) return 0;
                    let o = r.match(/^matrix3d\((.+)\)$/);
                    if (o) return nG(o[1], i); {
                        let i = r.match(/^matrix\((.+)\)$/);
                        return i ? nG(i[1], e) : 0
                    }
                },
                nK = new Set(["x", "y", "z"]),
                nJ = D.filter(e => !nK.has(e)),
                nQ = {
                    width: ({
                        x: e
                    }, {
                        paddingLeft: i = "0",
                        paddingRight: n = "0"
                    }) => e.max - e.min - parseFloat(i) - parseFloat(n),
                    height: ({
                        y: e
                    }, {
                        paddingTop: i = "0",
                        paddingBottom: n = "0"
                    }) => e.max - e.min - parseFloat(i) - parseFloat(n),
                    top: (e, {
                        top: i
                    }) => parseFloat(i),
                    left: (e, {
                        left: i
                    }) => parseFloat(i),
                    bottom: ({
                        y: e
                    }, {
                        top: i
                    }) => parseFloat(i) + (e.max - e.min),
                    right: ({
                        x: e
                    }, {
                        left: i
                    }) => parseFloat(i) + (e.max - e.min),
                    x: nZ(4, 13),
                    y: nZ(5, 14)
                },
                n0 = (e, i, n) => {
                    let r = i.measureViewportBox(),
                        o = i.current,
                        s = getComputedStyle(o),
                        {
                            display: a
                        } = s,
                        l = {};
                    "none" === a && i.setStaticValue("display", e.display || "block"), n.forEach(e => {
                        l[e] = nQ[e](r, s)
                    }), i.render();
                    let u = i.measureViewportBox();
                    return n.forEach(n => {
                        let r = i.getValue(n);
                        r && r.jump(l[n]), e[n] = nQ[n](u, s)
                    }), e
                },
                n1 = (e, i, n = {}, r = {}) => {
                    i = { ...i
                    }, r = { ...r
                    };
                    let o = Object.keys(i).filter(nY),
                        s = [],
                        a = !1,
                        l = [];
                    if (o.forEach(o => {
                            let u;
                            let h = e.getValue(o);
                            if (!e.hasValue(o)) return;
                            let c = n[o],
                                d = eq(c),
                                p = i[o];
                            if (tC(p)) {
                                let e = p.length,
                                    i = null === p[0] ? 1 : 0;
                                d = eq(c = p[i]);
                                for (let n = i; n < e; n++) u ? e1(eq(p[n]) === u, "All keyframes must be of the same type") : e1((u = eq(p[n])) === d || nq(d) && nq(u), "Keyframes must be of the same dimension as the current value")
                            } else u = eq(p);
                            if (d !== u) {
                                if (nq(d) && nq(u)) {
                                    let e = h.get();
                                    "string" == typeof e && h.set(parseFloat(e)), "string" == typeof p ? i[o] = parseFloat(p) : Array.isArray(p) && u === te && (i[o] = p.map(parseFloat))
                                } else(null == d ? void 0 : d.transform) && (null == u ? void 0 : u.transform) && (0 === c || 0 === p) ? 0 === c ? h.set(u.transform(c)) : i[o] = d.transform(p) : (a || (s = function(e) {
                                    let i = [];
                                    return nJ.forEach(n => {
                                        let r = e.getValue(n);
                                        void 0 !== r && (i.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                    }), i.length && e.render(), i
                                }(e), a = !0), l.push(o), r[o] = void 0 !== r[o] ? r[o] : i[o], h.jump(p))
                            }
                        }), !l.length) return {
                        target: i,
                        transitionEnd: r
                    }; {
                        let n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                            o = n0(i, e, l);
                        return s.length && s.forEach(([i, n]) => {
                            e.getValue(i).set(n)
                        }), e.render(), p && null !== n && window.scrollTo({
                            top: n
                        }), {
                            target: o,
                            transitionEnd: r
                        }
                    }
                },
                n2 = (e, i, n, r) => {
                    var o, s;
                    let a = function(e, { ...i
                    }, n) {
                        let r = e.current;
                        if (!(r instanceof Element)) return {
                            target: i,
                            transitionEnd: n
                        };
                        for (let o in n && (n = { ...n
                            }), e.values.forEach(e => {
                                let i = e.get();
                                if (!n$(i)) return;
                                let n = nW(i, r);
                                n && e.set(n)
                            }), i) {
                            let e = i[o];
                            if (!n$(e)) continue;
                            let s = nW(e, r);
                            s && (i[o] = s, n && void 0 === n[o] && (n[o] = e))
                        }
                        return {
                            target: i,
                            transitionEnd: n
                        }
                    }(e, i, r);
                    return i = a.target, r = a.transitionEnd, o = i, s = r, nX(o) ? n1(e, o, n, s) : {
                        target: o,
                        transitionEnd: s
                    }
                },
                n5 = {
                    current: null
                },
                n3 = {
                    current: !1
                },
                n9 = Object.keys(T),
                n4 = n9.length,
                n6 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class n7 {
                constructor({
                    parent: e,
                    props: i,
                    reducedMotionConfig: n,
                    visualState: r
                }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => ec.render(this.render, !1, !0);
                    let {
                        latestValues: s,
                        renderState: a
                    } = r;
                    this.latestValues = s, this.baseTarget = { ...s
                    }, this.initialValues = i.initial ? { ...s
                    } : {}, this.renderState = a, this.parent = e, this.props = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.isControllingVariants = b(i), this.isVariantNode = w(i), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
                    let {
                        willChange: l,
                        ...u
                    } = this.scrapeMotionValuesFromProps(i, {});
                    for (let e in u) {
                        let i = u[e];
                        void 0 !== s[e] && I(i) && (i.set(s[e], !1), eJ(l) && l.add(e))
                    }
                }
                scrapeMotionValuesFromProps(e, i) {
                    return {}
                }
                mount(e) {
                    var i;
                    this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (i = this.parent) || void 0 === i ? void 0 : i.addVariantChild(this)), this.values.forEach((e, i) => this.bindToMotionValue(i, e)), n3.current || function() {
                        if (n3.current = !0, p) {
                            if (window.matchMedia) {
                                let e = window.matchMedia("(prefers-reduced-motion)"),
                                    i = () => n5.current = e.matches;
                                e.addListener(i), i()
                            } else n5.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || n5.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
                }
                unmount() {
                    var e, i, n;
                    for (let r in null === (e = this.projection) || void 0 === e || e.unmount(), ed.update(this.notifyUpdate), ed.render(this.render), this.valueSubscriptions.forEach(e => e()), null === (i = this.removeFromVariantTree) || void 0 === i || i.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this), this.events) this.events[r].clear();
                    this.current = null
                }
                bindToMotionValue(e, i) {
                    let n = O.has(e),
                        r = i.on("change", i => {
                            this.latestValues[e] = i, this.props.onUpdate && ec.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        o = i.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(e, () => {
                        r(), o()
                    })
                }
                sortNodePosition(e) {
                    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
                }
                loadFeatures({
                    children: e,
                    ...i
                }, n, r, o, s, a) {
                    let l = [];
                    for (let e = 0; e < n4; e++) {
                        let n = n9[e],
                            {
                                isEnabled: r,
                                Component: o
                            } = T[n];
                        r(i) && o && l.push((0, u.createElement)(o, {
                            key: n,
                            ...i,
                            visualElement: this
                        }))
                    }
                    if (!this.projection && s) {
                        this.projection = new s(o, this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: e,
                            layout: n,
                            drag: r,
                            dragConstraints: l,
                            layoutScroll: u,
                            layoutRoot: h
                        } = i;
                        this.projection.setOptions({
                            layoutId: e,
                            layout: n,
                            alwaysMeasureLayout: Boolean(r) || l && v(l),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: a,
                            layoutScroll: u,
                            layoutRoot: h
                        })
                    }
                    return l
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : nw()
                }
                getStaticValue(e) {
                    return this.latestValues[e]
                }
                setStaticValue(e, i) {
                    this.latestValues[e] = i
                }
                makeTargetAnimatable(e, i = !0) {
                    return this.makeTargetAnimatableFromInstance(e, this.props, i)
                }
                setProps(e) {
                    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender();
                    let i = this.props;
                    this.props = e;
                    for (let i = 0; i < n6.length; i++) {
                        let n = n6[i];
                        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                        let r = e["on" + n];
                        r && (this.propEventSubscriptions[n] = this.on(n, r))
                    }
                    this.prevMotionValues = function(e, i, n) {
                        let {
                            willChange: r
                        } = i;
                        for (let o in i) {
                            let s = i[o],
                                a = n[o];
                            if (I(s)) e.addValue(o, s), eJ(r) && r.add(o);
                            else if (I(a)) e.addValue(o, eE(s, {
                                owner: e
                            })), eJ(r) && r.remove(o);
                            else if (a !== s) {
                                if (e.hasValue(o)) {
                                    let i = e.getValue(o);
                                    i.hasAnimated || i.set(s)
                                } else {
                                    let i = e.getStaticValue(o);
                                    e.addValue(o, eE(void 0 !== i ? i : s, {
                                        owner: e
                                    }))
                                }
                            }
                        }
                        for (let r in n) void 0 === i[r] && e.removeValue(r);
                        return i
                    }(this, this.scrapeMotionValuesFromProps(e, i), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(e) {
                    var i;
                    return null === (i = this.props.variants) || void 0 === i ? void 0 : i[e]
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    var e;
                    return this.isVariantNode ? this : null === (e = this.parent) || void 0 === e ? void 0 : e.getClosestVariantNode()
                }
                getVariantContext(e = !1) {
                    var i, n;
                    if (e) return null === (i = this.parent) || void 0 === i ? void 0 : i.getVariantContext();
                    if (!this.isControllingVariants) {
                        let e = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
                        return void 0 !== this.props.initial && (e.initial = this.props.initial), e
                    }
                    let r = {};
                    for (let e = 0; e < rt; e++) {
                        let i = n8[e],
                            n = this.props[i];
                        (g(n) || !1 === n) && (r[i] = n)
                    }
                    return r
                }
                addVariantChild(e) {
                    var i;
                    let n = this.getClosestVariantNode();
                    if (n) return null === (i = n.variantChildren) || void 0 === i || i.add(e), () => n.variantChildren.delete(e)
                }
                addValue(e, i) {
                    i !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, i)), this.values.set(e, i), this.latestValues[e] = i.get()
                }
                removeValue(e) {
                    var i;
                    this.values.delete(e), null === (i = this.valueSubscriptions.get(e)) || void 0 === i || i(), this.valueSubscriptions.delete(e), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
                }
                hasValue(e) {
                    return this.values.has(e)
                }
                getValue(e, i) {
                    if (this.props.values && this.props.values[e]) return this.props.values[e];
                    let n = this.values.get(e);
                    return void 0 === n && void 0 !== i && (n = eE(i, {
                        owner: this
                    }), this.addValue(e, n)), n
                }
                readValue(e) {
                    return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
                }
                setBaseTarget(e, i) {
                    this.baseTarget[e] = i
                }
                getBaseTarget(e) {
                    var i;
                    let {
                        initial: n
                    } = this.props, r = "string" == typeof n || "object" == typeof n ? null === (i = tS(this.props, n)) || void 0 === i ? void 0 : i[e] : void 0;
                    if (n && void 0 !== r) return r;
                    let o = this.getBaseTargetFromProps(this.props, e);
                    return void 0 === o || I(o) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : o
                }
                on(e, i) {
                    return this.events[e] || (this.events[e] = new ex), this.events[e].add(i)
                }
                notify(e, ...i) {
                    var n;
                    null === (n = this.events[e]) || void 0 === n || n.notify(...i)
                }
            }
            let n8 = ["initial", ...i4],
                rt = n8.length;
            class re extends n7 {
                sortInstanceNodePosition(e, i) {
                    return 2 & e.compareDocumentPosition(i) ? 1 : -1
                }
                getBaseTargetFromProps(e, i) {
                    var n;
                    return null === (n = e.style) || void 0 === n ? void 0 : n[i]
                }
                removeValueFromRenderState(e, {
                    vars: i,
                    style: n
                }) {
                    delete i[e], delete n[e]
                }
                makeTargetAnimatableFromInstance({
                    transition: e,
                    transitionEnd: i,
                    ...n
                }, {
                    transformValues: r
                }, o) {
                    let s = function(e, i, n) {
                        var r;
                        let o = {};
                        for (let s in e) {
                            let e = function(e, i) {
                                if (!i) return;
                                let n = i[e] || i.default || i;
                                return n.from
                            }(s, i);
                            o[s] = void 0 !== e ? e : null === (r = n.getValue(s)) || void 0 === r ? void 0 : r.get()
                        }
                        return o
                    }(n, e || {}, this);
                    if (r && (i && (i = r(i)), n && (n = r(n)), s && (s = r(s))), o) {
                        ! function(e, i, n) {
                            var r, o;
                            let s = Object.keys(i).filter(i => !e.hasValue(i)),
                                a = s.length;
                            if (a)
                                for (let l = 0; l < a; l++) {
                                    let a = s[l],
                                        u = i[a],
                                        h = null;
                                    Array.isArray(u) && (h = u[0]), null === h && (h = null !== (o = null !== (r = n[a]) && void 0 !== r ? r : e.readValue(a)) && void 0 !== o ? o : i[a]), null != h && ("string" == typeof h && (et(h) || ee(h)) ? h = parseFloat(h) : !eZ(h) && eI.test(u) && (h = eH(a, u)), e.addValue(a, eE(h, {
                                        owner: e
                                    })), void 0 === n[a] && (n[a] = h), null !== h && e.setBaseTarget(a, h))
                                }
                        }(this, n, s);
                        let e = n2(this, n, s, i);
                        i = e.transitionEnd, n = e.target
                    }
                    return {
                        transition: e,
                        transitionEnd: i,
                        ...n
                    }
                }
            }
            class ri extends re {
                readValueFromInstance(e, i) {
                    if (O.has(i)) {
                        let e = eW(i);
                        return e && e.default || 0
                    } {
                        let n = window.getComputedStyle(e),
                            r = (z(i) ? n.getPropertyValue(i) : n[i]) || 0;
                        return "string" == typeof r ? r.trim() : r
                    }
                }
                measureInstanceViewportBox(e, {
                    transformPagePoint: i
                }) {
                    return nF(e, i)
                }
                build(e, i, n, r) {
                    ta(e, i, n, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(e, i) {
                    return tA(e, i)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: e
                    } = this.props;
                    I(e) && (this.childSubscription = e.on("change", e => {
                        this.current && (this.current.textContent = `${e}`)
                    }))
                }
                renderInstance(e, i, n, r) {
                    tP(e, i, n, r)
                }
            }
            class rn extends re {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(e, i) {
                    return e[i]
                }
                readValueFromInstance(e, i) {
                    var n;
                    return O.has(i) ? (null === (n = eW(i)) || void 0 === n ? void 0 : n.default) || 0 : (i = tE.has(i) ? i : tw(i), e.getAttribute(i))
                }
                measureInstanceViewportBox() {
                    return nw()
                }
                scrapeMotionValuesFromProps(e, i) {
                    return tV(e, i)
                }
                build(e, i, n, r) {
                    tg(e, i, n, this.isSVGTag, r.transformTemplate)
                }
                renderInstance(e, i, n, r) {
                    tT(e, i, n, r)
                }
                mount(e) {
                    this.isSVGTag = tx(e.tagName), super.mount(e)
                }
            }
            let rr = (e, i) => L(e) ? new rn(i, {
                enableHardwareAcceleration: !1
            }) : new ri(i, {
                enableHardwareAcceleration: !0
            });

            function ro(e, i) {
                return i.max === i.min ? 0 : e / (i.max - i.min) * 100
            }
            let rs = {
                    correct: (e, i) => {
                        if (!i.target) return e;
                        if ("string" == typeof e) {
                            if (!te.test(e)) return e;
                            e = parseFloat(e)
                        }
                        let n = ro(e, i.target.x),
                            r = ro(e, i.target.y);
                        return `${n}% ${r}%`
                    }
                },
                ra = "_$css",
                rl = {
                    correct: (e, {
                        treeScale: i,
                        projectionDelta: n
                    }) => {
                        let r = e,
                            o = e.includes("var("),
                            s = [];
                        o && (e = e.replace(n_, e => (s.push(e), ra)));
                        let a = eI.parse(e);
                        if (a.length > 5) return r;
                        let l = eI.createTransformer(e),
                            u = "number" != typeof a[0] ? 1 : 0,
                            h = n.x.scale * i.x,
                            c = n.y.scale * i.y;
                        a[0 + u] /= h, a[1 + u] /= c;
                        let d = e8(h, c, .5);
                        "number" == typeof a[2 + u] && (a[2 + u] /= d), "number" == typeof a[3 + u] && (a[3 + u] /= d);
                        let p = l(a);
                        if (o) {
                            let e = 0;
                            p = p.replace(ra, () => {
                                let i = s[e];
                                return e++, i
                            })
                        }
                        return p
                    }
                };
            class ru extends u.Component {
                componentDidMount() {
                    let {
                        visualElement: e,
                        layoutGroup: i,
                        switchLayoutGroup: n,
                        layoutId: r
                    } = this.props, {
                        projection: o
                    } = e;
                    Object.assign(j, rh), o && (i.group && i.group.add(o), n && n.register && r && n.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), o.setOptions({ ...o.options,
                        onExitComplete: () => this.safeToRemove()
                    })), V.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(e) {
                    let {
                        layoutDependency: i,
                        visualElement: n,
                        drag: r,
                        isPresent: o
                    } = this.props, s = n.projection;
                    return s && (s.isPresent = o, r || e.layoutDependency !== i || void 0 === i ? s.willUpdate() : this.safeToRemove(), e.isPresent === o || (o ? s.promote() : s.relegate() || ec.postRender(() => {
                        var e;
                        (null === (e = s.getStack()) || void 0 === e ? void 0 : e.members.length) || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: e
                    } = this.props.visualElement;
                    e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
                }
                componentWillUnmount() {
                    let {
                        visualElement: e,
                        layoutGroup: i,
                        switchLayoutGroup: n
                    } = this.props, {
                        projection: r
                    } = e;
                    r && (r.scheduleCheckAfterUnmount(), (null == i ? void 0 : i.group) && i.group.remove(r), (null == n ? void 0 : n.deregister) && n.deregister(r))
                }
                safeToRemove() {
                    let {
                        safeToRemove: e
                    } = this.props;
                    null == e || e()
                }
                render() {
                    return null
                }
            }
            let rh = {
                    borderRadius: { ...rs,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: rs,
                    borderTopRightRadius: rs,
                    borderBottomLeftRadius: rs,
                    borderBottomRightRadius: rs,
                    boxShadow: rl
                },
                rc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                rd = rc.length,
                rp = e => "string" == typeof e ? parseFloat(e) : e,
                rf = e => "number" == typeof e || te.test(e);

            function rm(e, i) {
                return void 0 !== e[i] ? e[i] : e.borderRadius
            }
            let rv = ry(0, .5, ix),
                rg = ry(.5, .95, im);

            function ry(e, i, n) {
                return r => r < e ? 0 : r > i ? 1 : n(ic(e, i, r))
            }

            function rx(e, i) {
                e.min = i.min, e.max = i.max
            }

            function rb(e, i) {
                rx(e.x, i.x), rx(e.y, i.y)
            }

            function rw(e, i, n, r, o) {
                return e -= i, e = r + 1 / n * (e - r), void 0 !== o && (e = r + 1 / o * (e - r)), e
            }

            function rP(e, i, [n, r, o], s, a) {
                ! function(e, i = 0, n = 1, r = .5, o, s = e, a = e) {
                    if (tt.test(i)) {
                        i = parseFloat(i);
                        let e = e8(a.min, a.max, i / 100);
                        i = e - a.min
                    }
                    if ("number" != typeof i) return;
                    let l = e8(s.min, s.max, r);
                    e === s && (l -= i), e.min = rw(e.min, i, n, l, o), e.max = rw(e.max, i, n, l, o)
                }(e, i[n], i[r], i[o], i.scale, s, a)
            }
            let rE = ["x", "scaleX", "originX"],
                rT = ["y", "scaleY", "originY"];

            function rA(e, i, n, r) {
                rP(e.x, i, rE, null == n ? void 0 : n.x, null == r ? void 0 : r.x), rP(e.y, i, rT, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
            }

            function rV(e) {
                return 0 === e.translate && 1 === e.scale
            }

            function rS(e) {
                return rV(e.x) && rV(e.y)
            }

            function rC(e, i) {
                return e.x.min === i.x.min && e.x.max === i.x.max && e.y.min === i.y.min && e.y.max === i.y.max
            }

            function rM(e) {
                return na(e.x) / na(e.y)
            }
            class rk {
                constructor() {
                    this.members = []
                }
                add(e) {
                    eg(this.members, e), e.scheduleRender()
                }
                remove(e) {
                    if (ey(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                        let e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }
                relegate(e) {
                    let i;
                    let n = this.members.findIndex(i => e === i);
                    if (0 === n) return !1;
                    for (let e = n; e >= 0; e--) {
                        let n = this.members[e];
                        if (!1 !== n.isPresent) {
                            i = n;
                            break
                        }
                    }
                    return !!i && (this.promote(i), !0)
                }
                promote(e, i) {
                    var n;
                    let r = this.lead;
                    if (e !== r && (this.prevLead = r, this.lead = e, e.show(), r)) {
                        r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, i && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues), (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0);
                        let {
                            crossfade: o
                        } = e.options;
                        !1 === o && r.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(e => {
                        var i, n, r, o, s;
                        null === (n = (i = e.options).onExitComplete) || void 0 === n || n.call(i), null === (s = null === (r = e.resumingFrom) || void 0 === r ? void 0 : (o = r.options).onExitComplete) || void 0 === s || s.call(o)
                    })
                }
                scheduleRender() {
                    this.members.forEach(e => {
                        e.instance && e.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function rR(e, i, n) {
                let r = "",
                    o = e.x.translate / i.x,
                    s = e.y.translate / i.y;
                if ((o || s) && (r = `translate3d(${o}px, ${s}px, 0) `), (1 !== i.x || 1 !== i.y) && (r += `scale(${1/i.x}, ${1/i.y}) `), n) {
                    let {
                        rotate: e,
                        rotateX: i,
                        rotateY: o
                    } = n;
                    e && (r += `rotate(${e}deg) `), i && (r += `rotateX(${i}deg) `), o && (r += `rotateY(${o}deg) `)
                }
                let a = e.x.scale * i.x,
                    l = e.y.scale * i.y;
                return (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`), r || "none"
            }
            let rB = (e, i) => e.depth - i.depth;
            class rL {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(e) {
                    eg(this.children, e), this.isDirty = !0
                }
                remove(e) {
                    ey(this.children, e), this.isDirty = !0
                }
                forEach(e) {
                    this.isDirty && this.children.sort(rB), this.isDirty = !1, this.children.forEach(e)
                }
            }
            let rj = ["", "X", "Y", "Z"],
                rD = 0;

            function rO({
                attachResizeListener: e,
                defaultParent: i,
                measureScroll: n,
                checkIsScrollRoot: r,
                resetTransform: o
            }) {
                return class {
                    constructor(e, n = {}, r = null == i ? void 0 : i()) {
                        this.id = rD++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.nodes.forEach(rU), this.nodes.forEach(rW), this.nodes.forEach(rH)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = e, this.latestValues = n, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
                        for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new rL)
                    }
                    addEventListener(e, i) {
                        return this.eventHandlers.has(e) || this.eventHandlers.set(e, new ex), this.eventHandlers.get(e).add(i)
                    }
                    notifyListeners(e, ...i) {
                        let n = this.eventHandlers.get(e);
                        null == n || n.notify(...i)
                    }
                    hasListeners(e) {
                        return this.eventHandlers.has(e)
                    }
                    registerPotentialNode(e, i) {
                        this.potentialNodes.set(e, i)
                    }
                    mount(i, n = !1) {
                        var r;
                        if (this.instance) return;
                        this.isSVG = i instanceof SVGElement && "svg" !== i.tagName, this.instance = i;
                        let {
                            layoutId: o,
                            layout: s,
                            visualElement: a
                        } = this.options;
                        if (a && !a.current && a.mount(i), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (s || o) && (this.isLayoutDirty = !0), e) {
                            let n;
                            let r = () => this.root.updateBlockedByResize = !1;
                            e(i, () => {
                                this.root.updateBlockedByResize = !0, n && n(), n = iH(r, 250), V.hasAnimatedSinceResize && (V.hasAnimatedSinceResize = !1, this.nodes.forEach(r_))
                            })
                        }
                        o && this.root.registerSharedNode(o, this), !1 !== this.options.animate && a && (o || s) && this.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: i,
                            hasRelativeTargetChanged: n,
                            layout: r
                        }) => {
                            var o, s, l, u, h;
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let c = null !== (s = null !== (o = this.options.transition) && void 0 !== o ? o : a.getDefaultTransition()) && void 0 !== s ? s : rK,
                                {
                                    onLayoutAnimationStart: d,
                                    onLayoutAnimationComplete: p
                                } = a.getProps(),
                                f = !this.targetLayout || !rC(this.targetLayout, r) || n,
                                m = !i && n;
                            if (this.options.layoutRoot || (null === (l = this.resumeFrom) || void 0 === l ? void 0 : l.instance) || m || i && (f || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, m);
                                let i = { ...i1(c, "layout"),
                                    onPlay: d,
                                    onComplete: p
                                };
                                (a.shouldReduceMotion || this.options.layoutRoot) && (i.delay = 0, i.type = !1), this.startAnimation(i)
                            } else i || 0 !== this.animationProgress || r_(this), this.isLead() && (null === (h = (u = this.options).onExitComplete) || void 0 === h || h.call(u));
                            this.targetLayout = r
                        })
                    }
                    unmount() {
                        var e, i;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (e = this.getStack()) || void 0 === e || e.remove(this), null === (i = this.parent) || void 0 === i || i.children.delete(this), this.instance = void 0, ed.preRender(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        var e;
                        return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
                    }
                    startUpdate() {
                        var e;
                        !this.isUpdateBlocked() && (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(rY), this.animationId++)
                    }
                    getTransformTemplate() {
                        var e;
                        return null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate
                    }
                    willUpdate(e = !0) {
                        var i, n, r;
                        if (this.root.isUpdateBlocked()) {
                            null === (n = (i = this.options).onExitComplete) || void 0 === n || n.call(i);
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let e = 0; e < this.path.length; e++) {
                            let i = this.path[e];
                            i.shouldResetTransform = !0, i.updateScroll("snapshot"), i.options.layoutRoot && i.willUpdate(!1)
                        }
                        let {
                            layoutId: o,
                            layout: s
                        } = this.options;
                        (void 0 !== o || s) && (this.prevTransformTemplateValue = null === (r = this.getTransformTemplate()) || void 0 === r ? void 0 : r(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate"))
                    }
                    didUpdate() {
                        let e = this.isUpdateBlocked();
                        if (e) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(rz);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(rJ), this.potentialNodes.clear()), this.nodes.forEach(r$), this.nodes.forEach(rF), this.nodes.forEach(rI), this.clearAllSnapshots(), ep.update(), ep.preRender(), ep.render())
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(rN), this.sharedNodes.forEach(rX)
                    }
                    scheduleUpdateProjection() {
                        ec.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        ec.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        var e;
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let e = 0; e < this.path.length; e++) {
                                let i = this.path[e];
                                i.updateScroll()
                            }
                        let i = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = nw(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (e = this.options.visualElement) || void 0 === e || e.notify("LayoutMeasure", this.layout.layoutBox, null == i ? void 0 : i.layoutBox)
                    }
                    updateScroll(e = "measure") {
                        let i = Boolean(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (i = !1), i && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: e,
                            isRoot: r(this.instance),
                            offset: n(this.instance)
                        })
                    }
                    resetTransform() {
                        var e;
                        if (!o) return;
                        let i = this.isLayoutDirty || this.shouldResetTransform,
                            n = this.projectionDelta && !rS(this.projectionDelta),
                            r = null === (e = this.getTransformTemplate()) || void 0 === e ? void 0 : e(this.latestValues, ""),
                            s = r !== this.prevTransformTemplateValue;
                        i && (n || nV(this.latestValues) || s) && (o(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(e = !0) {
                        var i;
                        let n = this.measurePageBox(),
                            r = this.removeElementScroll(n);
                        return e && (r = this.removeTransform(r)), rQ((i = r).x), rQ(i.y), {
                            animationId: this.root.animationId,
                            measuredBox: n,
                            layoutBox: r,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return nw();
                        let i = e.measureViewportBox(),
                            {
                                scroll: n
                            } = this.root;
                        return n && (nB(i.x, n.offset.x), nB(i.y, n.offset.y)), i
                    }
                    removeElementScroll(e) {
                        let i = nw();
                        rb(i, e);
                        for (let n = 0; n < this.path.length; n++) {
                            let r = this.path[n],
                                {
                                    scroll: o,
                                    options: s
                                } = r;
                            if (r !== this.root && o && s.layoutScroll) {
                                if (o.isRoot) {
                                    rb(i, e);
                                    let {
                                        scroll: n
                                    } = this.root;
                                    n && (nB(i.x, -n.offset.x), nB(i.y, -n.offset.y))
                                }
                                nB(i.x, o.offset.x), nB(i.y, o.offset.y)
                            }
                        }
                        return i
                    }
                    applyTransform(e, i = !1) {
                        let n = nw();
                        rb(n, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let r = this.path[e];
                            !i && r.options.layoutScroll && r.scroll && r !== r.root && nO(n, {
                                x: -r.scroll.offset.x,
                                y: -r.scroll.offset.y
                            }), nV(r.latestValues) && nO(n, r.latestValues)
                        }
                        return nV(this.latestValues) && nO(n, this.latestValues), n
                    }
                    removeTransform(e) {
                        var i;
                        let n = nw();
                        rb(n, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let r = this.path[e];
                            if (!r.instance || !nV(r.latestValues)) continue;
                            nA(r.latestValues) && r.updateSnapshot();
                            let o = nw(),
                                s = r.measurePageBox();
                            rb(o, s), rA(n, r.latestValues, null === (i = r.snapshot) || void 0 === i ? void 0 : i.layoutBox, o)
                        }
                        return nV(this.latestValues) && rA(n, this.latestValues), n
                    }
                    setTargetDelta(e) {
                        this.targetDelta = e, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
                    }
                    setOptions(e) {
                        this.options = { ...this.options,
                            ...e,
                            crossfade: void 0 === e.crossfade || e.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    resolveTargetDelta() {
                        var e, i, n, r;
                        let o = this.getLead();
                        if (this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
                        let {
                            layout: s,
                            layoutId: a
                        } = this.options;
                        if (this.layout && (s || a)) {
                            if (!this.targetDelta && !this.relativeTarget) {
                                let e = this.getClosestProjectingParent();
                                e && e.layout ? (this.relativeParent = e, this.relativeTarget = nw(), this.relativeTargetOrigin = nw(), np(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), rb(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if ((this.relativeTarget || this.targetDelta) && ((this.target || (this.target = nw(), this.targetWithTransforms = nw()), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target)) ? (i = this.target, n = this.relativeTarget, r = this.relativeParent.target, nc(i.x, n.x, r.x), nc(i.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : rb(this.target, this.layout.layoutBox), nk(this.target, this.targetDelta)) : rb(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                                this.attemptToResolveRelativeTarget = !1;
                                let e = this.getClosestProjectingParent();
                                e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target ? (this.relativeParent = e, this.relativeTarget = nw(), this.relativeTargetOrigin = nw(), np(this.relativeTargetOrigin, this.target, e.target), rb(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || nA(this.parent.latestValues) || nS(this.parent.latestValues) ? void 0 : (this.parent.relativeTarget || this.parent.targetDelta || this.parent.options.layoutRoot) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    calcProjection() {
                        var e;
                        let {
                            isProjectionDirty: i,
                            isTransformDirty: n
                        } = this;
                        this.isProjectionDirty = this.isTransformDirty = !1;
                        let r = this.getLead(),
                            o = Boolean(this.resumingFrom) || this !== r,
                            s = !0;
                        if (i && (s = !1), o && n && (s = !1), s) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(a || l)) return;
                        rb(this.layoutCorrected, this.layout.layoutBox),
                            function(e, i, n, r = !1) {
                                var o, s;
                                let a, l;
                                let u = n.length;
                                if (u) {
                                    i.x = i.y = 1;
                                    for (let h = 0; h < u; h++) l = (a = n[h]).projectionDelta, (null === (s = null === (o = a.instance) || void 0 === o ? void 0 : o.style) || void 0 === s ? void 0 : s.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && nO(e, {
                                        x: -a.scroll.offset.x,
                                        y: -a.scroll.offset.y
                                    }), l && (i.x *= l.x.scale, i.y *= l.y.scale, nk(e, l)), r && nV(a.latestValues) && nO(e, a.latestValues));
                                    i.x = nR(i.x), i.y = nR(i.y)
                                }
                            }(this.layoutCorrected, this.treeScale, this.path, o);
                        let {
                            target: u
                        } = r;
                        if (!u) return;
                        this.projectionDelta || (this.projectionDelta = nx(), this.projectionDeltaWithTransform = nx());
                        let h = this.treeScale.x,
                            c = this.treeScale.y,
                            d = this.projectionTransform;
                        nh(this.projectionDelta, this.layoutCorrected, u, this.latestValues), this.projectionTransform = rR(this.projectionDelta, this.treeScale), (this.projectionTransform !== d || this.treeScale.x !== h || this.treeScale.y !== c) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", u))
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(e = !0) {
                        var i, n, r;
                        null === (n = (i = this.options).scheduleRender) || void 0 === n || n.call(i), e && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(e, i = !1) {
                        var n, r;
                        let o = this.snapshot,
                            s = (null == o ? void 0 : o.latestValues) || {},
                            a = { ...this.latestValues
                            },
                            l = nx();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !i;
                        let u = nw(),
                            h = (null == o ? void 0 : o.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
                            c = 1 >= ((null === (r = this.getStack()) || void 0 === r ? void 0 : r.members.length) || 0),
                            d = Boolean(h && !c && !0 === this.options.crossfade && !this.path.some(rZ));
                        this.animationProgress = 0, this.mixTargetDelta = i => {
                            var n, r, o;
                            let p = i / 1e3;
                            rq(l.x, e.x, p), rq(l.y, e.y, p), this.setTargetDelta(l), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (np(u, this.layout.layoutBox, this.relativeParent.layout.layoutBox), r = this.relativeTarget, o = this.relativeTargetOrigin, rG(r.x, o.x, u.x, p), rG(r.y, o.y, u.y, p)), h && (this.animationValues = a, function(e, i, n, r, o, s) {
                                o ? (e.opacity = e8(0, void 0 !== n.opacity ? n.opacity : 1, rv(r)), e.opacityExit = e8(void 0 !== i.opacity ? i.opacity : 1, 0, rg(r))) : s && (e.opacity = e8(void 0 !== i.opacity ? i.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                                for (let o = 0; o < rd; o++) {
                                    let s = `border${rc[o]}Radius`,
                                        a = rm(i, s),
                                        l = rm(n, s);
                                    if (void 0 === a && void 0 === l) continue;
                                    a || (a = 0), l || (l = 0);
                                    let u = 0 === a || 0 === l || rf(a) === rf(l);
                                    u ? (e[s] = Math.max(e8(rp(a), rp(l), r), 0), (tt.test(l) || tt.test(a)) && (e[s] += "%")) : e[s] = l
                                }(i.rotate || n.rotate) && (e.rotate = e8(i.rotate || 0, n.rotate || 0, r))
                            }(a, s, this.latestValues, p, d, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = p
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(e) {
                        var i, n;
                        this.notifyListeners("animationStart"), null === (i = this.currentAnimation) || void 0 === i || i.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (ed.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ec.update(() => {
                            V.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, i, n = {}) {
                                let r = I(e) ? e : eE(e);
                                return r.start(i2("", r, 1e3, n)), {
                                    stop: () => r.stop(),
                                    isAnimating: () => r.isAnimating()
                                }
                            }(0, 0, { ...e,
                                onUpdate: i => {
                                    var n;
                                    this.mixTargetDelta(i), null === (n = e.onUpdate) || void 0 === n || n.call(e, i)
                                },
                                onComplete: () => {
                                    var i;
                                    null === (i = e.onComplete) || void 0 === i || i.call(e), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        var e;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        var e;
                        this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let e = this.getLead(),
                            {
                                targetWithTransforms: i,
                                target: n,
                                layout: r,
                                latestValues: o
                            } = e;
                        if (i && n && r) {
                            if (this !== e && this.layout && r && r0(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                                n = this.target || nw();
                                let i = na(this.layout.layoutBox.x);
                                n.x.min = e.target.x.min, n.x.max = n.x.min + i;
                                let r = na(this.layout.layoutBox.y);
                                n.y.min = e.target.y.min, n.y.max = n.y.min + r
                            }
                            rb(i, n), nO(i, o), nh(this.projectionDeltaWithTransform, this.layoutCorrected, i, o)
                        }
                    }
                    registerSharedNode(e, i) {
                        var n, r, o;
                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new rk);
                        let s = this.sharedNodes.get(e);
                        s.add(i), i.promote({
                            transition: null === (n = i.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (o = null === (r = i.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(r, i)
                        })
                    }
                    isLead() {
                        let e = this.getStack();
                        return !e || e.lead === this
                    }
                    getLead() {
                        var e;
                        let {
                            layoutId: i
                        } = this.options;
                        return i && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                    }
                    getPrevLead() {
                        var e;
                        let {
                            layoutId: i
                        } = this.options;
                        return i ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: e
                        } = this.options;
                        if (e) return this.root.sharedNodes.get(e)
                    }
                    promote({
                        needsReset: e,
                        transition: i,
                        preserveFollowOpacity: n
                    } = {}) {
                        let r = this.getStack();
                        r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), i && this.setOptions({
                            transition: i
                        })
                    }
                    relegate() {
                        let e = this.getStack();
                        return !!e && e.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return;
                        let i = !1,
                            {
                                latestValues: n
                            } = e;
                        if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (i = !0), !i) return;
                        let r = {};
                        for (let i = 0; i < rj.length; i++) {
                            let o = "rotate" + rj[i];
                            n[o] && (r[o] = n[o], e.setStaticValue(o, 0))
                        }
                        for (let i in null == e || e.render(), r) e.setStaticValue(i, r[i]);
                        e.scheduleRender()
                    }
                    getProjectionStyles(e = {}) {
                        var i, n;
                        let r = {};
                        if (!this.instance || this.isSVG) return r;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        r.visibility = "";
                        let o = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = tR(e.pointerEvents) || "", r.transform = o ? o(this.latestValues, "") : "none", r;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let i = {};
                            return this.options.layoutId && (i.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, i.pointerEvents = tR(e.pointerEvents) || ""), this.hasProjected && !nV(this.latestValues) && (i.transform = o ? o({}, "") : "none", this.hasProjected = !1), i
                        }
                        let a = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), r.transform = rR(this.projectionDeltaWithTransform, this.treeScale, a), o && (r.transform = o(a, r.transform));
                        let {
                            x: l,
                            y: u
                        } = this.projectionDelta;
                        for (let e in r.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, s.animationValues ? r.opacity = s === this ? null !== (n = null !== (i = a.opacity) && void 0 !== i ? i : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : r.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, j) {
                            if (void 0 === a[e]) continue;
                            let {
                                correct: i,
                                applyTo: n
                            } = j[e], o = "none" === r.transform ? a[e] : i(a[e], s);
                            if (n) {
                                let e = n.length;
                                for (let i = 0; i < e; i++) r[n[i]] = o
                            } else r[e] = o
                        }
                        return this.options.layoutId && (r.pointerEvents = s === this ? tR(e.pointerEvents) || "" : "none"), r
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(e => {
                            var i;
                            return null === (i = e.currentAnimation) || void 0 === i ? void 0 : i.stop()
                        }), this.root.nodes.forEach(rz), this.root.sharedNodes.clear()
                    }
                }
            }

            function rF(e) {
                e.updateLayout()
            }

            function rI(e) {
                var i, n, r;
                let o = (null === (i = e.resumeFrom) || void 0 === i ? void 0 : i.snapshot) || e.snapshot;
                if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
                    let {
                        layoutBox: i,
                        measuredBox: n
                    } = e.layout, {
                        animationType: r
                    } = e.options, s = o.source !== e.layout.source;
                    "size" === r ? nP(e => {
                        let n = s ? o.measuredBox[e] : o.layoutBox[e],
                            r = na(n);
                        n.min = i[e].min, n.max = n.min + r
                    }) : r0(r, o.layoutBox, i) && nP(e => {
                        let n = s ? o.measuredBox[e] : o.layoutBox[e],
                            r = na(i[e]);
                        n.max = n.min + r
                    });
                    let a = nx();
                    nh(a, i, o.layoutBox);
                    let l = nx();
                    s ? nh(l, e.applyTransform(n, !0), o.measuredBox) : nh(l, i, o.layoutBox);
                    let u = !rS(a),
                        h = !1;
                    if (!e.resumeFrom) {
                        let n = e.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = n;
                            if (r && s) {
                                let a = nw();
                                np(a, o.layoutBox, r.layoutBox);
                                let l = nw();
                                np(l, i, s.layoutBox), rC(a, l) || (h = !0), n.options.layoutRoot && (e.relativeTarget = l, e.relativeTargetOrigin = a, e.relativeParent = n)
                            }
                        }
                    }
                    e.notifyListeners("didUpdate", {
                        layout: i,
                        snapshot: o,
                        delta: l,
                        layoutDelta: a,
                        hasLayoutChanged: u,
                        hasRelativeTargetChanged: h
                    })
                } else e.isLead() && (null === (r = (n = e.options).onExitComplete) || void 0 === r || r.call(n));
                e.options.transition = void 0
            }

            function rU(e) {
                e.isProjectionDirty || (e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty))
            }

            function rN(e) {
                e.clearSnapshot()
            }

            function rz(e) {
                e.clearMeasurements()
            }

            function r$(e) {
                let {
                    visualElement: i
                } = e.options;
                (null == i ? void 0 : i.getProps().onBeforeLayoutMeasure) && i.notify("BeforeLayoutMeasure"), e.resetTransform()
            }

            function r_(e) {
                e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
            }

            function rW(e) {
                e.resolveTargetDelta()
            }

            function rH(e) {
                e.calcProjection()
            }

            function rY(e) {
                e.resetRotation()
            }

            function rX(e) {
                e.removeLeadSnapshot()
            }

            function rq(e, i, n) {
                e.translate = e8(i.translate, 0, n), e.scale = e8(i.scale, 1, n), e.origin = i.origin, e.originPoint = i.originPoint
            }

            function rG(e, i, n, r) {
                e.min = e8(i.min, n.min, r), e.max = e8(i.max, n.max, r)
            }

            function rZ(e) {
                return e.animationValues && void 0 !== e.animationValues.opacityExit
            }
            let rK = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function rJ(e, i) {
                let n = e.root;
                for (let i = e.path.length - 1; i >= 0; i--)
                    if (Boolean(e.path[i].instance)) {
                        n = e.path[i];
                        break
                    }
                let r = n && n !== e.root ? n.instance : document,
                    o = r.querySelector(`[data-projection-id="${i}"]`);
                o && e.mount(o, !0)
            }

            function rQ(e) {
                e.min = Math.round(e.min), e.max = Math.round(e.max)
            }

            function r0(e, i, n) {
                return "position" === e || "preserve-aspect" === e && !nl(rM(i), rM(n), .2)
            }
            let r1 = rO({
                    attachResizeListener: (e, i) => tD(e, "resize", i),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                r2 = {
                    current: void 0
                },
                r5 = rO({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent: () => {
                        if (!r2.current) {
                            let e = new r1(0, {});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), r2.current = e
                        }
                        return r2.current
                    },
                    resetTransform: (e, i) => {
                        e.style.transform = void 0 !== i ? i : "none"
                    },
                    checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
                }),
                r3 = { ...nt,
                    ...t6,
                    ...nz,
                    measureLayout: function(e) {
                        let [i, n] = t7(), r = (0, u.useContext)(C);
                        return u.createElement(ru, { ...e,
                            layoutGroup: r,
                            switchLayoutGroup: (0, u.useContext)(k),
                            isPresent: i,
                            safeToRemove: n
                        })
                    }
                },
                r9 = function(e) {
                    function i(i, n = {}) {
                        return function({
                            preloadedFeatures: e,
                            createVisualElement: i,
                            projectionNodeConstructor: n,
                            useRender: r,
                            useVisualState: o,
                            Component: s
                        }) {
                            e && function(e) {
                                for (let i in e) "projectionNodeConstructor" === i ? T.projectionNodeConstructor = e[i] : T[i].Component = e[i]
                            }(e);
                            let a = (0, u.forwardRef)(function(a, l) {
                                var y, x;
                                let w = { ...(0, u.useContext)(h),
                                        ...a,
                                        layoutId: function({
                                            layoutId: e
                                        }) {
                                            let i = (0, u.useContext)(C).id;
                                            return i && void 0 !== e ? i + "-" + e : e
                                        }(a)
                                    },
                                    {
                                        isStatic: E
                                    } = w,
                                    R = null,
                                    B = function(e) {
                                        let {
                                            initial: i,
                                            animate: n
                                        } = function(e, i) {
                                            if (b(e)) {
                                                let {
                                                    initial: i,
                                                    animate: n
                                                } = e;
                                                return {
                                                    initial: !1 === i || g(i) ? i : void 0,
                                                    animate: g(n) ? n : void 0
                                                }
                                            }
                                            return !1 !== e.inherit ? i : {}
                                        }(e, (0, u.useContext)(c));
                                        return (0, u.useMemo)(() => ({
                                            initial: i,
                                            animate: n
                                        }), [P(i), P(n)])
                                    }(a),
                                    L = E ? void 0 : A(() => {
                                        if (V.hasEverUpdated) return S++
                                    }),
                                    j = o(a, E);
                                if (!E && p) {
                                    B.visualElement = function(e, i, n, r) {
                                        let o = (0, u.useContext)(c).visualElement,
                                            s = (0, u.useContext)(m),
                                            a = (0, u.useContext)(d),
                                            l = (0, u.useContext)(h).reducedMotion,
                                            p = (0, u.useRef)();
                                        r = r || s.renderer, !p.current && r && (p.current = r(e, {
                                            visualState: i,
                                            parent: o,
                                            props: n,
                                            presenceId: a ? a.id : void 0,
                                            blockInitialAnimation: !!a && !1 === a.initial,
                                            reducedMotionConfig: l
                                        }));
                                        let v = p.current;
                                        f(() => {
                                            v && v.render()
                                        });
                                        let g = window.HandoffAppearAnimations ? f : u.useEffect;
                                        return g(() => {
                                            v && v.animationState && v.animationState.animateChanges()
                                        }), v
                                    }(s, j, w, i);
                                    let r = (0, u.useContext)(k);
                                    B.visualElement && (R = B.visualElement.loadFeatures(w, (0, u.useContext)(m).strict, e, L, n || T.projectionNodeConstructor, r))
                                }
                                return u.createElement(M, {
                                    visualElement: B.visualElement,
                                    props: w
                                }, R, u.createElement(c.Provider, {
                                    value: B
                                }, r(s, a, L, (y = B.visualElement, x = l, (0, u.useCallback)(e => {
                                    e && j.mount && j.mount(e), y && (e ? y.mount(e) : y.unmount()), x && ("function" == typeof x ? x(e) : v(x) && (x.current = e))
                                }, [y])), j, E, B.visualElement)))
                            });
                            return a[R] = s, a
                        }(e(i, n))
                    }
                    if ("undefined" == typeof Proxy) return i;
                    let n = new Map;
                    return new Proxy(i, {
                        get: (e, r) => (n.has(r) || n.set(r, i(r)), n.get(r))
                    })
                }((e, i) => (function(e, {
                    forwardMotionProps: i = !1
                }, n, r, o) {
                    let s = L(e) ? tL : tj;
                    return { ...s,
                        preloadedFeatures: n,
                        useRender: function(e = !1) {
                            let i = (i, n, r, o, {
                                latestValues: s
                            }, a) => {
                                let l = L(i) ? tb : th,
                                    h = l(n, s, a, i),
                                    c = function(e, i, n) {
                                        let r = {};
                                        for (let o in e)("values" !== o || "object" != typeof e.values) && (tp(o) || !0 === n && td(o) || !i && !td(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
                                        return r
                                    }(n, "string" == typeof i, e),
                                    d = { ...c,
                                        ...h,
                                        ref: o
                                    },
                                    {
                                        children: p
                                    } = n,
                                    f = (0, u.useMemo)(() => I(p) ? p.get() : p, [p]);
                                return r && (d["data-projection-id"] = r), (0, u.createElement)(i, { ...d,
                                    children: f
                                })
                            };
                            return i
                        }(i),
                        createVisualElement: r,
                        projectionNodeConstructor: o,
                        Component: e
                    }
                })(e, i, r3, rr, r5))
        }
    }
]);