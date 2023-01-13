/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+csharp+css-extras+diff&plugins=line-numbers+show-language+previewers+toolbar+copy-to-clipboard+download-button+diff-highlight */
var _self =
        "undefined" != typeof window
            ? window
            : "undefined" != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope
            ? self
            : {},
    Prism = (function (e) {
        var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            r = {},
            a = {
                manual: e.Prism && e.Prism.manual,
                disableWorkerMessageHandler:
                    e.Prism && e.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(n) {
                        return n instanceof i
                            ? new i(n.type, e(n.content), n.alias)
                            : Array.isArray(n)
                            ? n.map(e)
                            : n
                                  .replace(/&/g, "&amp;")
                                  .replace(/</g, "&lt;")
                                  .replace(/\u00a0/g, " ");
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1);
                    },
                    objId: function (e) {
                        return (
                            e.__id ||
                                Object.defineProperty(e, "__id", {
                                    value: ++t,
                                }),
                            e.__id
                        );
                    },
                    clone: function e(n, t) {
                        var r, i;
                        switch (((t = t || {}), a.util.type(n))) {
                            case "Object":
                                if (((i = a.util.objId(n)), t[i])) return t[i];
                                for (var l in ((r = {}), (t[i] = r), n))
                                    n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                                return r;
                            case "Array":
                                return (
                                    (i = a.util.objId(n)),
                                    t[i]
                                        ? t[i]
                                        : ((r = []),
                                          (t[i] = r),
                                          n.forEach(function (n, a) {
                                              r[a] = e(n, t);
                                          }),
                                          r)
                                );
                            default:
                                return n;
                        }
                    },
                    getLanguage: function (e) {
                        for (; e; ) {
                            var t = n.exec(e.className);
                            if (t) return t[1].toLowerCase();
                            e = e.parentElement;
                        }
                        return "none";
                    },
                    setLanguage: function (e, t) {
                        (e.className = e.className.replace(
                            RegExp(n, "gi"),
                            ""
                        )),
                            e.classList.add("language-" + t);
                    },
                    currentScript: function () {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document)
                            return document.currentScript;
                        try {
                            throw new Error();
                        } catch (r) {
                            var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                                r.stack
                            ) || [])[1];
                            if (e) {
                                var n = document.getElementsByTagName("script");
                                for (var t in n) if (n[t].src == e) return n[t];
                            }
                            return null;
                        }
                    },
                    isActive: function (e, n, t) {
                        for (var r = "no-" + n; e; ) {
                            var a = e.classList;
                            if (a.contains(n)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement;
                        }
                        return !!t;
                    },
                },
                languages: {
                    plain: r,
                    plaintext: r,
                    text: r,
                    txt: r,
                    extend: function (e, n) {
                        var t = a.util.clone(a.languages[e]);
                        for (var r in n) t[r] = n[r];
                        return t;
                    },
                    insertBefore: function (e, n, t, r) {
                        var i = (r = r || a.languages)[e],
                            l = {};
                        for (var o in i)
                            if (i.hasOwnProperty(o)) {
                                if (o == n)
                                    for (var s in t)
                                        t.hasOwnProperty(s) && (l[s] = t[s]);
                                t.hasOwnProperty(o) || (l[o] = i[o]);
                            }
                        var u = r[e];
                        return (
                            (r[e] = l),
                            a.languages.DFS(a.languages, function (n, t) {
                                t === u && n != e && (this[n] = l);
                            }),
                            l
                        );
                    },
                    DFS: function e(n, t, r, i) {
                        i = i || {};
                        var l = a.util.objId;
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                t.call(n, o, n[o], r || o);
                                var s = n[o],
                                    u = a.util.type(s);
                                "Object" !== u || i[l(s)]
                                    ? "Array" !== u ||
                                      i[l(s)] ||
                                      ((i[l(s)] = !0), e(s, t, o, i))
                                    : ((i[l(s)] = !0), e(s, t, null, i));
                            }
                    },
                },
                plugins: {},
                highlightAll: function (e, n) {
                    a.highlightAllUnder(document, e, n);
                },
                highlightAllUnder: function (e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector:
                            'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                    };
                    a.hooks.run("before-highlightall", r),
                        (r.elements = Array.prototype.slice.apply(
                            r.container.querySelectorAll(r.selector)
                        )),
                        a.hooks.run("before-all-elements-highlight", r);
                    for (var i, l = 0; (i = r.elements[l++]); )
                        a.highlightElement(i, !0 === n, r.callback);
                },
                highlightElement: function (n, t, r) {
                    var i = a.util.getLanguage(n),
                        l = a.languages[i];
                    a.util.setLanguage(n, i);
                    var o = n.parentElement;
                    o &&
                        "pre" === o.nodeName.toLowerCase() &&
                        a.util.setLanguage(o, i);
                    var s = {
                        element: n,
                        language: i,
                        grammar: l,
                        code: n.textContent,
                    };
                    function u(e) {
                        (s.highlightedCode = e),
                            a.hooks.run("before-insert", s),
                            (s.element.innerHTML = s.highlightedCode),
                            a.hooks.run("after-highlight", s),
                            a.hooks.run("complete", s),
                            r && r.call(s.element);
                    }
                    if (
                        (a.hooks.run("before-sanity-check", s),
                        (o = s.element.parentElement) &&
                            "pre" === o.nodeName.toLowerCase() &&
                            !o.hasAttribute("tabindex") &&
                            o.setAttribute("tabindex", "0"),
                        !s.code)
                    )
                        return (
                            a.hooks.run("complete", s),
                            void (r && r.call(s.element))
                        );
                    if ((a.hooks.run("before-highlight", s), s.grammar))
                        if (t && e.Worker) {
                            var c = new Worker(a.filename);
                            (c.onmessage = function (e) {
                                u(e.data);
                            }),
                                c.postMessage(
                                    JSON.stringify({
                                        language: s.language,
                                        code: s.code,
                                        immediateClose: !0,
                                    })
                                );
                        } else u(a.highlight(s.code, s.grammar, s.language));
                    else u(a.util.encode(s.code));
                },
                highlight: function (e, n, t) {
                    var r = { code: e, grammar: n, language: t };
                    if ((a.hooks.run("before-tokenize", r), !r.grammar))
                        throw new Error(
                            'The language "' + r.language + '" has no grammar.'
                        );
                    return (
                        (r.tokens = a.tokenize(r.code, r.grammar)),
                        a.hooks.run("after-tokenize", r),
                        i.stringify(a.util.encode(r.tokens), r.language)
                    );
                },
                tokenize: function (e, n) {
                    var t = n.rest;
                    if (t) {
                        for (var r in t) n[r] = t[r];
                        delete n.rest;
                    }
                    var a = new s();
                    return (
                        u(a, a.head, e),
                        o(e, a, n, a.head, 0),
                        (function (e) {
                            for (var n = [], t = e.head.next; t !== e.tail; )
                                n.push(t.value), (t = t.next);
                            return n;
                        })(a)
                    );
                },
                hooks: {
                    all: {},
                    add: function (e, n) {
                        var t = a.hooks.all;
                        (t[e] = t[e] || []), t[e].push(n);
                    },
                    run: function (e, n) {
                        var t = a.hooks.all[e];
                        if (t && t.length)
                            for (var r, i = 0; (r = t[i++]); ) r(n);
                    },
                },
                Token: i,
            };
        function i(e, n, t, r) {
            (this.type = e),
                (this.content = n),
                (this.alias = t),
                (this.length = 0 | (r || "").length);
        }
        function l(e, n, t, r) {
            e.lastIndex = n;
            var a = e.exec(t);
            if (a && r && a[1]) {
                var i = a[1].length;
                (a.index += i), (a[0] = a[0].slice(i));
            }
            return a;
        }
        function o(e, n, t, r, s, g) {
            for (var f in t)
                if (t.hasOwnProperty(f) && t[f]) {
                    var h = t[f];
                    h = Array.isArray(h) ? h : [h];
                    for (var d = 0; d < h.length; ++d) {
                        if (g && g.cause == f + "," + d) return;
                        var v = h[d],
                            p = v.inside,
                            m = !!v.lookbehind,
                            y = !!v.greedy,
                            k = v.alias;
                        if (y && !v.pattern.global) {
                            var x = v.pattern.toString().match(/[imsuy]*$/)[0];
                            v.pattern = RegExp(v.pattern.source, x + "g");
                        }
                        for (
                            var b = v.pattern || v, w = r.next, A = s;
                            w !== n.tail && !(g && A >= g.reach);
                            A += w.value.length, w = w.next
                        ) {
                            var E = w.value;
                            if (n.length > e.length) return;
                            if (!(E instanceof i)) {
                                var P,
                                    L = 1;
                                if (y) {
                                    if (
                                        !(P = l(b, A, e, m)) ||
                                        P.index >= e.length
                                    )
                                        break;
                                    var S = P.index,
                                        O = P.index + P[0].length,
                                        j = A;
                                    for (j += w.value.length; S >= j; )
                                        j += (w = w.next).value.length;
                                    if (
                                        ((A = j -= w.value.length),
                                        w.value instanceof i)
                                    )
                                        continue;
                                    for (
                                        var C = w;
                                        C !== n.tail &&
                                        (j < O || "string" == typeof C.value);
                                        C = C.next
                                    )
                                        L++, (j += C.value.length);
                                    L--, (E = e.slice(A, j)), (P.index -= A);
                                } else if (!(P = l(b, 0, E, m))) continue;
                                S = P.index;
                                var N = P[0],
                                    _ = E.slice(0, S),
                                    M = E.slice(S + N.length),
                                    W = A + E.length;
                                g && W > g.reach && (g.reach = W);
                                var z = w.prev;
                                if (
                                    (_ && ((z = u(n, z, _)), (A += _.length)),
                                    c(n, z, L),
                                    (w = u(
                                        n,
                                        z,
                                        new i(f, p ? a.tokenize(N, p) : N, k, N)
                                    )),
                                    M && u(n, w, M),
                                    L > 1)
                                ) {
                                    var I = { cause: f + "," + d, reach: W };
                                    o(e, n, t, w.prev, A, I),
                                        g &&
                                            I.reach > g.reach &&
                                            (g.reach = I.reach);
                                }
                            }
                        }
                    }
                }
        }
        function s() {
            var e = { value: null, prev: null, next: null },
                n = { value: null, prev: e, next: null };
            (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
        }
        function u(e, n, t) {
            var r = n.next,
                a = { value: t, prev: n, next: r };
            return (n.next = a), (r.prev = a), e.length++, a;
        }
        function c(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
            (n.next = r), (r.prev = n), (e.length -= a);
        }
        if (
            ((e.Prism = a),
            (i.stringify = function e(n, t) {
                if ("string" == typeof n) return n;
                if (Array.isArray(n)) {
                    var r = "";
                    return (
                        n.forEach(function (n) {
                            r += e(n, t);
                        }),
                        r
                    );
                }
                var i = {
                        type: n.type,
                        content: e(n.content, t),
                        tag: "span",
                        classes: ["token", n.type],
                        attributes: {},
                        language: t,
                    },
                    l = n.alias;
                l &&
                    (Array.isArray(l)
                        ? Array.prototype.push.apply(i.classes, l)
                        : i.classes.push(l)),
                    a.hooks.run("wrap", i);
                var o = "";
                for (var s in i.attributes)
                    o +=
                        " " +
                        s +
                        '="' +
                        (i.attributes[s] || "").replace(/"/g, "&quot;") +
                        '"';
                return (
                    "<" +
                    i.tag +
                    ' class="' +
                    i.classes.join(" ") +
                    '"' +
                    o +
                    ">" +
                    i.content +
                    "</" +
                    i.tag +
                    ">"
                );
            }),
            !e.document)
        )
            return e.addEventListener
                ? (a.disableWorkerMessageHandler ||
                      e.addEventListener(
                          "message",
                          function (n) {
                              var t = JSON.parse(n.data),
                                  r = t.language,
                                  i = t.code,
                                  l = t.immediateClose;
                              e.postMessage(a.highlight(i, a.languages[r], r)),
                                  l && e.close();
                          },
                          !1
                      ),
                  a)
                : a;
        var g = a.util.currentScript();
        function f() {
            a.manual || a.highlightAll();
        }
        if (
            (g &&
                ((a.filename = g.src),
                g.hasAttribute("data-manual") && (a.manual = !0)),
            !a.manual)
        ) {
            var h = document.readyState;
            "loading" === h || ("interactive" === h && g && g.defer)
                ? document.addEventListener("DOMContentLoaded", f)
                : window.requestAnimationFrame
                ? window.requestAnimationFrame(f)
                : window.setTimeout(f, 16);
        }
        return a;
    })(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism),
    "undefined" != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
        pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/,
        },
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
        pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                    ],
                },
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
            },
        },
    },
    entity: [
        { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
        /&#x?[\da-f]{1,8};/i,
    ],
}),
    (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
        Prism.languages.markup.entity),
    (Prism.languages.markup.doctype.inside["internal-subset"].inside =
        Prism.languages.markup),
    Prism.hooks.add("wrap", function (a) {
        "entity" === a.type &&
            (a.attributes.title = a.content.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
        value: function (a, e) {
            var s = {};
            (s["language-" + e] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[e],
            }),
                (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var t = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: s,
                },
            };
            t["language-" + e] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[e],
            };
            var n = {};
            (n[a] = {
                pattern: RegExp(
                    "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
                        /__/g,
                        function () {
                            return a;
                        }
                    ),
                    "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: t,
            }),
                Prism.languages.insertBefore("markup", "cdata", n);
        },
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
        value: function (a, e) {
            Prism.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                    "(^|[\"'\\s])(?:" +
                        a +
                        ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))",
                    "i"
                ),
                lookbehind: !0,
                inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern:
                                    /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: !0,
                                alias: [e, "language-" + e],
                                inside: Prism.languages[e],
                            },
                            punctuation: [
                                { pattern: /^=/, alias: "attr-equals" },
                                /"|'/,
                            ],
                        },
                    },
                },
            });
        },
    }),
    (Prism.languages.html = Prism.languages.markup),
    (Prism.languages.mathml = Prism.languages.markup),
    (Prism.languages.svg = Prism.languages.markup),
    (Prism.languages.xml = Prism.languages.extend("markup", {})),
    (Prism.languages.ssml = Prism.languages.xml),
    (Prism.languages.atom = Prism.languages.xml),
    (Prism.languages.rss = Prism.languages.xml);
!(function (s) {
    var e =
        /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: RegExp(
                "@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" +
                    e.source +
                    ")*?(?:;|(?=\\s*\\{))"
            ),
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern:
                        /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector",
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0,
                },
            },
        },
        url: {
            pattern: RegExp(
                "\\burl\\((?:" +
                    e.source +
                    "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)",
                "i"
            ),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + e.source + "$"), alias: "url" },
            },
        },
        selector: {
            pattern: RegExp(
                "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                    e.source +
                    ")*(?=\\s*\\{)"
            ),
            lookbehind: !0,
        },
        string: { pattern: e, greedy: !0 },
        property: {
            pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0,
        },
        important: /!important\b/i,
        function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0,
        },
        punctuation: /[(){};:,]/,
    }),
        (s.languages.css.atrule.inside.rest = s.languages.css);
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.clike = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0,
        },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
    },
    "class-name": {
        pattern:
            /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ },
    },
    keyword:
        /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
};
(Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [
        Prism.languages.clike["class-name"],
        {
            pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0,
        },
    ],
    keyword: [
        { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
        {
            pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0,
        },
    ],
    function:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
        pattern: RegExp(
            "(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"
        ),
        lookbehind: !0,
    },
    operator:
        /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
    (Prism.languages.javascript["class-name"][0].pattern =
        /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: RegExp(
                "((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: Prism.languages.regex,
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/,
            },
        },
        "function-variable": {
            pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function",
        },
        parameter: [
            {
                pattern:
                    /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
            {
                pattern:
                    /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
            {
                pattern:
                    /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
            {
                pattern:
                    /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    Prism.languages.insertBefore("javascript", "string", {
        hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
        "template-string": {
            pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                    pattern:
                        /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation",
                        },
                        rest: Prism.languages.javascript,
                    },
                },
                string: /[\s\S]+/,
            },
        },
        "string-property": {
            pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
        },
    }),
    Prism.languages.insertBefore("javascript", "operator", {
        "literal-property": {
            pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property",
        },
    }),
    Prism.languages.markup &&
        (Prism.languages.markup.tag.addInlined("script", "javascript"),
        Prism.languages.markup.tag.addAttribute(
            "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
            "javascript"
        )),
    (Prism.languages.js = Prism.languages.javascript);
!(function (e) {
    function n(e, n) {
        return e.replace(/<<(\d+)>>/g, function (e, s) {
            return "(?:" + n[+s] + ")";
        });
    }
    function s(e, s, a) {
        return RegExp(n(e, s), a || "");
    }
    function a(e, n) {
        for (var s = 0; s < n; s++)
            e = e.replace(/<<self>>/g, function () {
                return "(?:" + e + ")";
            });
        return e.replace(/<<self>>/g, "[^\\s\\S]");
    }
    var t =
            "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
        r = "class enum interface record struct",
        i =
            "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
        o =
            "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
    function l(e) {
        return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
    }
    var d = l(r),
        p = RegExp(l(t + " " + r + " " + i + " " + o)),
        c = l(r + " " + i + " " + o),
        u = l(t + " " + r + " " + o),
        g = a("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2),
        b = a("\\((?:[^()]|<<self>>)*\\)", 2),
        h = "@?\\b[A-Za-z_]\\w*\\b",
        f = n("<<0>>(?:\\s*<<1>>)?", [h, g]),
        m = n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c, f]),
        k = "\\[\\s*(?:,\\s*)*\\]",
        y = n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [m, k]),
        w = n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g, b, k]),
        v = n("\\(<<0>>+(?:,<<0>>+)+\\)", [w]),
        x = n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [
            v,
            m,
            k,
        ]),
        $ = { keyword: p, punctuation: /[<>()?,.:[\]]/ },
        _ = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",
        B = '"(?:\\\\.|[^\\\\"\r\n])*"';
    (e.languages.csharp = e.languages.extend("clike", {
        string: [
            {
                pattern: s("(^|[^$\\\\])<<0>>", [
                    '@"(?:""|\\\\[^]|[^\\\\"])*"(?!")',
                ]),
                lookbehind: !0,
                greedy: !0,
            },
            {
                pattern: s("(^|[^@$\\\\])<<0>>", [B]),
                lookbehind: !0,
                greedy: !0,
            },
        ],
        "class-name": [
            {
                pattern: s("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m]),
                lookbehind: !0,
                inside: $,
            },
            {
                pattern: s("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [
                    h,
                    x,
                ]),
                lookbehind: !0,
                inside: $,
            },
            { pattern: s("(\\busing\\s+)<<0>>(?=\\s*=)", [h]), lookbehind: !0 },
            {
                pattern: s("(\\b<<0>>\\s+)<<1>>", [d, f]),
                lookbehind: !0,
                inside: $,
            },
            {
                pattern: s("(\\bcatch\\s*\\(\\s*)<<0>>", [m]),
                lookbehind: !0,
                inside: $,
            },
            { pattern: s("(\\bwhere\\s+)<<0>>", [h]), lookbehind: !0 },
            {
                pattern: s("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y]),
                lookbehind: !0,
                inside: $,
            },
            {
                pattern: s(
                    "\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",
                    [x, u, h]
                ),
                inside: $,
            },
        ],
        keyword: p,
        number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
        operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
        punctuation: /\?\.?|::|[{}[\];(),.:]/,
    })),
        e.languages.insertBefore("csharp", "number", {
            range: { pattern: /\.\./, alias: "operator" },
        }),
        e.languages.insertBefore("csharp", "punctuation", {
            "named-parameter": {
                pattern: s("([(,]\\s*)<<0>>(?=\\s*:)", [h]),
                lookbehind: !0,
                alias: "punctuation",
            },
        }),
        e.languages.insertBefore("csharp", "class-name", {
            namespace: {
                pattern: s(
                    "(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",
                    [h]
                ),
                lookbehind: !0,
                inside: { punctuation: /\./ },
            },
            "type-expression": {
                pattern: s(
                    "(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",
                    [b]
                ),
                lookbehind: !0,
                alias: "class-name",
                inside: $,
            },
            "return-type": {
                pattern: s(
                    "<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",
                    [x, m]
                ),
                inside: $,
                alias: "class-name",
            },
            "constructor-invocation": {
                pattern: s("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [x]),
                lookbehind: !0,
                inside: $,
                alias: "class-name",
            },
            "generic-method": {
                pattern: s("<<0>>\\s*<<1>>(?=\\s*\\()", [h, g]),
                inside: {
                    function: s("^<<0>>", [h]),
                    generic: {
                        pattern: RegExp(g),
                        alias: "class-name",
                        inside: $,
                    },
                },
            },
            "type-list": {
                pattern: s(
                    "\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",
                    [d, f, h, x, p.source, b, "\\bnew\\s*\\(\\s*\\)"]
                ),
                lookbehind: !0,
                inside: {
                    "record-arguments": {
                        pattern: s("(^(?!new\\s*\\()<<0>>\\s*)<<1>>", [f, b]),
                        lookbehind: !0,
                        greedy: !0,
                        inside: e.languages.csharp,
                    },
                    keyword: p,
                    "class-name": { pattern: RegExp(x), greedy: !0, inside: $ },
                    punctuation: /[,()]/,
                },
            },
            preprocessor: {
                pattern: /(^[\t ]*)#.*/m,
                lookbehind: !0,
                alias: "property",
                inside: {
                    directive: {
                        pattern:
                            /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                        lookbehind: !0,
                        alias: "keyword",
                    },
                },
            },
        });
    var E = B + "|" + _,
        R = n("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [
            E,
        ]),
        z = a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [R]), 2),
        S =
            "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",
        j = n("<<0>>(?:\\s*\\(<<1>>*\\))?", [m, z]);
    e.languages.insertBefore("csharp", "class-name", {
        attribute: {
            pattern: s(
                "((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",
                [S, j]
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
                target: {
                    pattern: s("^<<0>>(?=\\s*:)", [S]),
                    alias: "keyword",
                },
                "attribute-arguments": {
                    pattern: s("\\(<<0>>*\\)", [z]),
                    inside: e.languages.csharp,
                },
                "class-name": {
                    pattern: RegExp(m),
                    inside: { punctuation: /\./ },
                },
                punctuation: /[:,]/,
            },
        },
    });
    var A = ":[^}\r\n]+",
        F = a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [R]), 2),
        P = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [F, A]),
        U = a(
            n(
                "[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)",
                [E]
            ),
            2
        ),
        Z = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [U, A]);
    function q(n, a) {
        return {
            interpolation: {
                pattern: s("((?:^|[^{])(?:\\{\\{)*)<<0>>", [n]),
                lookbehind: !0,
                inside: {
                    "format-string": {
                        pattern: s("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [
                            a,
                            A,
                        ]),
                        lookbehind: !0,
                        inside: { punctuation: /^:/ },
                    },
                    punctuation: /^\{|\}$/,
                    expression: {
                        pattern: /[\s\S]+/,
                        alias: "language-csharp",
                        inside: e.languages.csharp,
                    },
                },
            },
            string: /[\s\S]+/,
        };
    }
    e.languages.insertBefore("csharp", "string", {
        "interpolation-string": [
            {
                pattern: s(
                    '(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',
                    [P]
                ),
                lookbehind: !0,
                greedy: !0,
                inside: q(P, F),
            },
            {
                pattern: s(
                    '(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',
                    [Z]
                ),
                lookbehind: !0,
                greedy: !0,
                inside: q(Z, U),
            },
        ],
        char: { pattern: RegExp(_), greedy: !0 },
    }),
        (e.languages.dotnet = e.languages.cs = e.languages.csharp);
})(Prism);
!(function (e) {
    var a,
        n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    (e.languages.css.selector = {
        pattern: e.languages.css.selector.pattern,
        lookbehind: !0,
        inside: (a = {
            "pseudo-element":
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+/,
            class: /\.[-\w]+/,
            id: /#[-\w]+/,
            attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                greedy: !0,
                inside: {
                    punctuation: /^\[|\]$/,
                    "case-sensitivity": {
                        pattern: /(\s)[si]$/i,
                        lookbehind: !0,
                        alias: "keyword",
                    },
                    namespace: {
                        pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                        lookbehind: !0,
                        inside: { punctuation: /\|$/ },
                    },
                    "attr-name": {
                        pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                        lookbehind: !0,
                    },
                    "attr-value": [
                        n,
                        {
                            pattern:
                                /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                            lookbehind: !0,
                        },
                    ],
                    operator: /[|~*^$]?=/,
                },
            },
            "n-th": [
                {
                    pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                    lookbehind: !0,
                    inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
            ],
            combinator: />|\+|~|\|\|/,
            punctuation: /[(),]/,
        }),
    }),
        (e.languages.css.atrule.inside["selector-function-argument"].inside =
            a),
        e.languages.insertBefore("css", "property", {
            variable: {
                pattern:
                    /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
            },
        });
    var r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
        i = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
    e.languages.insertBefore("css", "function", {
        operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
        hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
        color: [
            {
                pattern:
                    /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0,
            },
            {
                pattern:
                    /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                    unit: r,
                    number: i,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/,
                },
            },
        ],
        entity: /\\[\da-f]{1,8}/i,
        unit: r,
        number: i,
    });
})(Prism);
!(function (e) {
    e.languages.diff = {
        coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
    };
    var n = {
        "deleted-sign": "-",
        "deleted-arrow": "<",
        "inserted-sign": "+",
        "inserted-arrow": ">",
        unchanged: " ",
        diff: "!",
    };
    Object.keys(n).forEach(function (a) {
        var i = n[a],
            r = [];
        /^\w+$/.test(a) || r.push(/\w+/.exec(a)[0]),
            "diff" === a && r.push("bold"),
            (e.languages.diff[a] = {
                pattern: RegExp(
                    "^(?:[" + i + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                    "m"
                ),
                alias: r,
                inside: {
                    line: {
                        pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                        lookbehind: !0,
                    },
                    prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(a)[0] },
                },
            });
    }),
        Object.defineProperty(e.languages.diff, "PREFIXES", { value: n });
})(Prism);
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = "line-numbers",
            n = /\n(?!$)/g,
            t = (Prism.plugins.lineNumbers = {
                getLine: function (n, t) {
                    if ("PRE" === n.tagName && n.classList.contains(e)) {
                        var i = n.querySelector(".line-numbers-rows");
                        if (i) {
                            var r =
                                    parseInt(
                                        n.getAttribute("data-start"),
                                        10
                                    ) || 1,
                                s = r + (i.children.length - 1);
                            t < r && (t = r), t > s && (t = s);
                            var l = t - r;
                            return i.children[l];
                        }
                    }
                },
                resize: function (e) {
                    r([e]);
                },
                assumeViewportIndependence: !0,
            }),
            i = void 0;
        window.addEventListener("resize", function () {
            (t.assumeViewportIndependence && i === window.innerWidth) ||
                ((i = window.innerWidth),
                r(
                    Array.prototype.slice.call(
                        document.querySelectorAll("pre.line-numbers")
                    )
                ));
        }),
            Prism.hooks.add("complete", function (t) {
                if (t.code) {
                    var i = t.element,
                        s = i.parentNode;
                    if (
                        s &&
                        /pre/i.test(s.nodeName) &&
                        !i.querySelector(".line-numbers-rows") &&
                        Prism.util.isActive(i, e)
                    ) {
                        i.classList.remove(e), s.classList.add(e);
                        var l,
                            o = t.code.match(n),
                            a = o ? o.length + 1 : 1,
                            u = new Array(a + 1).join("<span></span>");
                        (l = document.createElement("span")).setAttribute(
                            "aria-hidden",
                            "true"
                        ),
                            (l.className = "line-numbers-rows"),
                            (l.innerHTML = u),
                            s.hasAttribute("data-start") &&
                                (s.style.counterReset =
                                    "linenumber " +
                                    (parseInt(
                                        s.getAttribute("data-start"),
                                        10
                                    ) -
                                        1)),
                            t.element.appendChild(l),
                            r([s]),
                            Prism.hooks.run("line-numbers", t);
                    }
                }
            }),
            Prism.hooks.add("line-numbers", function (e) {
                (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
            });
    }
    function r(e) {
        if (
            0 !=
            (e = e.filter(function (e) {
                var n,
                    t = ((n = e),
                    n
                        ? window.getComputedStyle
                            ? getComputedStyle(n)
                            : n.currentStyle || null
                        : null)["white-space"];
                return "pre-wrap" === t || "pre-line" === t;
            })).length
        ) {
            var t = e
                .map(function (e) {
                    var t = e.querySelector("code"),
                        i = e.querySelector(".line-numbers-rows");
                    if (t && i) {
                        var r = e.querySelector(".line-numbers-sizer"),
                            s = t.textContent.split(n);
                        r ||
                            (((r = document.createElement("span")).className =
                                "line-numbers-sizer"),
                            t.appendChild(r)),
                            (r.innerHTML = "0"),
                            (r.style.display = "block");
                        var l = r.getBoundingClientRect().height;
                        return (
                            (r.innerHTML = ""),
                            {
                                element: e,
                                lines: s,
                                lineHeights: [],
                                oneLinerHeight: l,
                                sizer: r,
                            }
                        );
                    }
                })
                .filter(Boolean);
            t.forEach(function (e) {
                var n = e.sizer,
                    t = e.lines,
                    i = e.lineHeights,
                    r = e.oneLinerHeight;
                (i[t.length - 1] = void 0),
                    t.forEach(function (e, t) {
                        if (e && e.length > 1) {
                            var s = n.appendChild(
                                document.createElement("span")
                            );
                            (s.style.display = "block"), (s.textContent = e);
                        } else i[t] = r;
                    });
            }),
                t.forEach(function (e) {
                    for (
                        var n = e.sizer, t = e.lineHeights, i = 0, r = 0;
                        r < t.length;
                        r++
                    )
                        void 0 === t[r] &&
                            (t[r] =
                                n.children[i++].getBoundingClientRect().height);
                }),
                t.forEach(function (e) {
                    var n = e.sizer,
                        t = e.element.querySelector(".line-numbers-rows");
                    (n.style.display = "none"),
                        (n.innerHTML = ""),
                        e.lineHeights.forEach(function (e, n) {
                            t.children[n].style.height = e + "px";
                        });
                });
        }
    }
})();
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = [],
            t = {},
            n = function () {};
        Prism.plugins.toolbar = {};
        var a = (Prism.plugins.toolbar.registerButton = function (n, a) {
                var r;
                (r =
                    "function" == typeof a
                        ? a
                        : function (e) {
                              var t;
                              return (
                                  "function" == typeof a.onClick
                                      ? (((t =
                                            document.createElement(
                                                "button"
                                            )).type = "button"),
                                        t.addEventListener(
                                            "click",
                                            function () {
                                                a.onClick.call(this, e);
                                            }
                                        ))
                                      : "string" == typeof a.url
                                      ? ((t =
                                            document.createElement("a")).href =
                                            a.url)
                                      : (t = document.createElement("span")),
                                  a.className && t.classList.add(a.className),
                                  (t.textContent = a.text),
                                  t
                              );
                          }),
                    n in t
                        ? console.warn(
                              'There is a button with the key "' +
                                  n +
                                  '" registered already.'
                          )
                        : e.push((t[n] = r));
            }),
            r = (Prism.plugins.toolbar.hook = function (a) {
                var r = a.element.parentNode;
                if (
                    r &&
                    /pre/i.test(r.nodeName) &&
                    !r.parentNode.classList.contains("code-toolbar")
                ) {
                    var o = document.createElement("div");
                    o.classList.add("code-toolbar"),
                        r.parentNode.insertBefore(o, r),
                        o.appendChild(r);
                    var i = document.createElement("div");
                    i.classList.add("toolbar");
                    var l = e,
                        d = (function (e) {
                            for (; e; ) {
                                var t = e.getAttribute("data-toolbar-order");
                                if (null != t)
                                    return (t = t.trim()).length
                                        ? t.split(/\s*,\s*/g)
                                        : [];
                                e = e.parentElement;
                            }
                        })(a.element);
                    d &&
                        (l = d.map(function (e) {
                            return t[e] || n;
                        })),
                        l.forEach(function (e) {
                            var t = e(a);
                            if (t) {
                                var n = document.createElement("div");
                                n.classList.add("toolbar-item"),
                                    n.appendChild(t),
                                    i.appendChild(n);
                            }
                        }),
                        o.appendChild(i);
                }
            });
        a("label", function (e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                var n,
                    a,
                    r = t.getAttribute("data-label");
                try {
                    a = document.querySelector("template#" + r);
                } catch (e) {}
                return (
                    a
                        ? (n = a.content)
                        : (t.hasAttribute("data-url")
                              ? ((n = document.createElement("a")).href =
                                    t.getAttribute("data-url"))
                              : (n = document.createElement("span")),
                          (n.textContent = r)),
                    n
                );
            }
        }),
            Prism.hooks.add("complete", r);
    }
})();
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document)
        if (Prism.plugins.toolbar) {
            var e = {
                none: "Plain text",
                plain: "Plain text",
                plaintext: "Plain text",
                text: "Plain text",
                txt: "Plain text",
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                rss: "RSS",
                css: "CSS",
                clike: "C-like",
                js: "JavaScript",
                abap: "ABAP",
                abnf: "ABNF",
                al: "AL",
                antlr4: "ANTLR4",
                g4: "ANTLR4",
                apacheconf: "Apache Configuration",
                apl: "APL",
                aql: "AQL",
                ino: "Arduino",
                arff: "ARFF",
                armasm: "ARM Assembly",
                "arm-asm": "ARM Assembly",
                art: "Arturo",
                asciidoc: "AsciiDoc",
                adoc: "AsciiDoc",
                aspnet: "ASP.NET (C#)",
                asm6502: "6502 Assembly",
                asmatmel: "Atmel AVR Assembly",
                autohotkey: "AutoHotkey",
                autoit: "AutoIt",
                avisynth: "AviSynth",
                avs: "AviSynth",
                "avro-idl": "Avro IDL",
                avdl: "Avro IDL",
                awk: "AWK",
                gawk: "GAWK",
                sh: "Shell",
                basic: "BASIC",
                bbcode: "BBcode",
                bbj: "BBj",
                bnf: "BNF",
                rbnf: "RBNF",
                bqn: "BQN",
                bsl: "BSL (1C:Enterprise)",
                oscript: "OneScript",
                csharp: "C#",
                cs: "C#",
                dotnet: "C#",
                cpp: "C++",
                cfscript: "CFScript",
                cfc: "CFScript",
                cil: "CIL",
                cilkc: "Cilk/C",
                "cilk-c": "Cilk/C",
                cilkcpp: "Cilk/C++",
                "cilk-cpp": "Cilk/C++",
                cilk: "Cilk/C++",
                cmake: "CMake",
                cobol: "COBOL",
                coffee: "CoffeeScript",
                conc: "Concurnas",
                csp: "Content-Security-Policy",
                "css-extras": "CSS Extras",
                csv: "CSV",
                cue: "CUE",
                dataweave: "DataWeave",
                dax: "DAX",
                django: "Django/Jinja2",
                jinja2: "Django/Jinja2",
                "dns-zone-file": "DNS zone file",
                "dns-zone": "DNS zone file",
                dockerfile: "Docker",
                dot: "DOT (Graphviz)",
                gv: "DOT (Graphviz)",
                ebnf: "EBNF",
                editorconfig: "EditorConfig",
                ejs: "EJS",
                etlua: "Embedded Lua templating",
                erb: "ERB",
                "excel-formula": "Excel Formula",
                xlsx: "Excel Formula",
                xls: "Excel Formula",
                fsharp: "F#",
                "firestore-security-rules": "Firestore security rules",
                ftl: "FreeMarker Template Language",
                gml: "GameMaker Language",
                gamemakerlanguage: "GameMaker Language",
                gap: "GAP (CAS)",
                gcode: "G-code",
                gdscript: "GDScript",
                gedcom: "GEDCOM",
                gettext: "gettext",
                po: "gettext",
                glsl: "GLSL",
                gn: "GN",
                gni: "GN",
                "linker-script": "GNU Linker Script",
                ld: "GNU Linker Script",
                "go-module": "Go module",
                "go-mod": "Go module",
                graphql: "GraphQL",
                hbs: "Handlebars",
                hs: "Haskell",
                hcl: "HCL",
                hlsl: "HLSL",
                http: "HTTP",
                hpkp: "HTTP Public-Key-Pins",
                hsts: "HTTP Strict-Transport-Security",
                ichigojam: "IchigoJam",
                "icu-message-format": "ICU Message Format",
                idr: "Idris",
                ignore: ".ignore",
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
                inform7: "Inform 7",
                javadoc: "JavaDoc",
                javadoclike: "JavaDoc-like",
                javastacktrace: "Java stack trace",
                jq: "JQ",
                jsdoc: "JSDoc",
                "js-extras": "JS Extras",
                json: "JSON",
                webmanifest: "Web App Manifest",
                json5: "JSON5",
                jsonp: "JSONP",
                jsstacktrace: "JS stack trace",
                "js-templates": "JS Templates",
                keepalived: "Keepalived Configure",
                kts: "Kotlin Script",
                kt: "Kotlin",
                kumir: "KuMir (КуМир)",
                kum: "KuMir (КуМир)",
                latex: "LaTeX",
                tex: "TeX",
                context: "ConTeXt",
                lilypond: "LilyPond",
                ly: "LilyPond",
                emacs: "Lisp",
                elisp: "Lisp",
                "emacs-lisp": "Lisp",
                llvm: "LLVM IR",
                log: "Log file",
                lolcode: "LOLCODE",
                magma: "Magma (CAS)",
                md: "Markdown",
                "markup-templating": "Markup templating",
                matlab: "MATLAB",
                maxscript: "MAXScript",
                mel: "MEL",
                metafont: "METAFONT",
                mongodb: "MongoDB",
                moon: "MoonScript",
                n1ql: "N1QL",
                n4js: "N4JS",
                n4jsd: "N4JS",
                "nand2tetris-hdl": "Nand To Tetris HDL",
                naniscript: "Naninovel Script",
                nani: "Naninovel Script",
                nasm: "NASM",
                neon: "NEON",
                nginx: "nginx",
                nsis: "NSIS",
                objectivec: "Objective-C",
                objc: "Objective-C",
                ocaml: "OCaml",
                opencl: "OpenCL",
                openqasm: "OpenQasm",
                qasm: "OpenQasm",
                parigp: "PARI/GP",
                objectpascal: "Object Pascal",
                psl: "PATROL Scripting Language",
                pcaxis: "PC-Axis",
                px: "PC-Axis",
                peoplecode: "PeopleCode",
                pcode: "PeopleCode",
                php: "PHP",
                phpdoc: "PHPDoc",
                "php-extras": "PHP Extras",
                "plant-uml": "PlantUML",
                plantuml: "PlantUML",
                plsql: "PL/SQL",
                powerquery: "PowerQuery",
                pq: "PowerQuery",
                mscript: "PowerQuery",
                powershell: "PowerShell",
                promql: "PromQL",
                properties: ".properties",
                protobuf: "Protocol Buffers",
                purebasic: "PureBasic",
                pbfasm: "PureBasic",
                purs: "PureScript",
                py: "Python",
                qsharp: "Q#",
                qs: "Q#",
                q: "Q (kdb+ database)",
                qml: "QML",
                rkt: "Racket",
                cshtml: "Razor C#",
                razor: "Razor C#",
                jsx: "React JSX",
                tsx: "React TSX",
                renpy: "Ren'py",
                rpy: "Ren'py",
                res: "ReScript",
                rest: "reST (reStructuredText)",
                robotframework: "Robot Framework",
                robot: "Robot Framework",
                rb: "Ruby",
                sas: "SAS",
                sass: "Sass (Sass)",
                scss: "Sass (SCSS)",
                "shell-session": "Shell session",
                "sh-session": "Shell session",
                shellsession: "Shell session",
                sml: "SML",
                smlnj: "SML/NJ",
                solidity: "Solidity (Ethereum)",
                sol: "Solidity (Ethereum)",
                "solution-file": "Solution file",
                sln: "Solution file",
                soy: "Soy (Closure Template)",
                sparql: "SPARQL",
                rq: "SPARQL",
                "splunk-spl": "Splunk SPL",
                sqf: "SQF: Status Quo Function (Arma 3)",
                sql: "SQL",
                stata: "Stata Ado",
                iecst: "Structured Text (IEC 61131-3)",
                supercollider: "SuperCollider",
                sclang: "SuperCollider",
                systemd: "Systemd configuration file",
                "t4-templating": "T4 templating",
                "t4-cs": "T4 Text Templates (C#)",
                t4: "T4 Text Templates (C#)",
                "t4-vb": "T4 Text Templates (VB)",
                tap: "TAP",
                tt2: "Template Toolkit 2",
                toml: "TOML",
                trickle: "trickle",
                troy: "troy",
                trig: "TriG",
                ts: "TypeScript",
                tsconfig: "TSConfig",
                uscript: "UnrealScript",
                uc: "UnrealScript",
                uorazor: "UO Razor Script",
                uri: "URI",
                url: "URL",
                vbnet: "VB.Net",
                vhdl: "VHDL",
                vim: "vim",
                "visual-basic": "Visual Basic",
                vba: "VBA",
                vb: "Visual Basic",
                wasm: "WebAssembly",
                "web-idl": "Web IDL",
                webidl: "Web IDL",
                wgsl: "WGSL",
                wiki: "Wiki markup",
                wolfram: "Wolfram language",
                nb: "Mathematica Notebook",
                wl: "Wolfram language",
                xeoracube: "XeoraCube",
                "xml-doc": "XML doc (.net)",
                xojo: "Xojo (REALbasic)",
                xquery: "XQuery",
                yaml: "YAML",
                yml: "YAML",
                yang: "YANG",
            };
            Prism.plugins.toolbar.registerButton("show-language", function (a) {
                var t = a.element.parentNode;
                if (t && /pre/i.test(t.nodeName)) {
                    var o,
                        i =
                            t.getAttribute("data-language") ||
                            e[a.language] ||
                            ((o = a.language)
                                ? (
                                      o.substring(0, 1).toUpperCase() +
                                      o.substring(1)
                                  ).replace(/s(?=cript)/, "S")
                                : o);
                    if (i) {
                        var s = document.createElement("span");
                        return (s.textContent = i), s;
                    }
                }
            });
        } else
            console.warn("Show Languages plugin loaded before Toolbar plugin.");
})();
!(function () {
    if (
        "undefined" != typeof Prism &&
        "undefined" != typeof document &&
        Function.prototype.bind
    ) {
        var e,
            s,
            t = {
                gradient: {
                    create:
                        ((e = {}),
                        (s = function (s) {
                            if (e[s]) return e[s];
                            var t = s.match(
                                    /^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/
                                ),
                                i = t && t[1],
                                a = t && t[2],
                                n = s
                                    .replace(
                                        /^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g,
                                        ""
                                    )
                                    .split(/\s*,\s*/);
                            return a.indexOf("linear") >= 0
                                ? (e[s] = (function (e, s, t) {
                                      var i = "180deg";
                                      return (
                                          /^(?:-?(?:\d+(?:\.\d+)?|\.\d+)(?:deg|rad)|to\b|top|right|bottom|left)/.test(
                                              t[0]
                                          ) &&
                                              (i = t.shift()).indexOf("to ") <
                                                  0 &&
                                              (i.indexOf("top") >= 0
                                                  ? (i =
                                                        i.indexOf("left") >= 0
                                                            ? "to bottom right"
                                                            : i.indexOf(
                                                                  "right"
                                                              ) >= 0
                                                            ? "to bottom left"
                                                            : "to bottom")
                                                  : i.indexOf("bottom") >= 0
                                                  ? (i =
                                                        i.indexOf("left") >= 0
                                                            ? "to top right"
                                                            : i.indexOf(
                                                                  "right"
                                                              ) >= 0
                                                            ? "to top left"
                                                            : "to top")
                                                  : i.indexOf("left") >= 0
                                                  ? (i = "to right")
                                                  : i.indexOf("right") >= 0
                                                  ? (i = "to left")
                                                  : e &&
                                                    (i.indexOf("deg") >= 0
                                                        ? (i =
                                                              90 -
                                                              parseFloat(i) +
                                                              "deg")
                                                        : i.indexOf("rad") >=
                                                              0 &&
                                                          (i =
                                                              Math.PI / 2 -
                                                              parseFloat(i) +
                                                              "rad"))),
                                          s + "(" + i + "," + t.join(",") + ")"
                                      );
                                  })(i, a, n))
                                : a.indexOf("radial") >= 0
                                ? (e[s] = (function (e, s, t) {
                                      if (t[0].indexOf("at") < 0) {
                                          var i = "center",
                                              a = "ellipse",
                                              n = "farthest-corner";
                                          if (
                                              (/\b(?:bottom|center|left|right|top)\b|^\d+/.test(
                                                  t[0]
                                              ) &&
                                                  (i = t
                                                      .shift()
                                                      .replace(
                                                          /\s*-?\d+(?:deg|rad)\s*/,
                                                          ""
                                                      )),
                                              /\b(?:circle|closest|contain|cover|ellipse|farthest)\b/.test(
                                                  t[0]
                                              ))
                                          ) {
                                              var r = t.shift().split(/\s+/);
                                              !r[0] ||
                                                  ("circle" !== r[0] &&
                                                      "ellipse" !== r[0]) ||
                                                  (a = r.shift()),
                                                  r[0] && (n = r.shift()),
                                                  "cover" === n
                                                      ? (n = "farthest-corner")
                                                      : "contain" === n &&
                                                        (n = "clothest-side");
                                          }
                                          return (
                                              s +
                                              "(" +
                                              a +
                                              " " +
                                              n +
                                              " at " +
                                              i +
                                              "," +
                                              t.join(",") +
                                              ")"
                                          );
                                      }
                                      return s + "(" + t.join(",") + ")";
                                  })(0, a, n))
                                : (e[s] = a + "(" + n.join(",") + ")");
                        }),
                        function () {
                            new Prism.plugins.Previewer(
                                "gradient",
                                function (e) {
                                    return (
                                        (this.firstChild.style.backgroundImage =
                                            ""),
                                        (this.firstChild.style.backgroundImage =
                                            s(e)),
                                        !!this.firstChild.style.backgroundImage
                                    );
                                },
                                "*",
                                function () {
                                    this._elt.innerHTML = "<div></div>";
                                }
                            );
                        }),
                    tokens: {
                        gradient: {
                            pattern:
                                /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:hsl|rgb)a?\(.+?\)|[^\)])+\)/gi,
                            inside: {
                                function: /[\w-]+(?=\()/,
                                punctuation: /[(),]/,
                            },
                        },
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        sass: [
                            {
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root:
                                    Prism.languages.sass &&
                                    Prism.languages.sass["variable-line"],
                            },
                            {
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root:
                                    Prism.languages.sass &&
                                    Prism.languages.sass["property-line"],
                            },
                        ],
                        scss: !0,
                        stylus: [
                            {
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root:
                                    Prism.languages.stylus &&
                                    Prism.languages.stylus[
                                        "property-declaration"
                                    ].inside,
                            },
                            {
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root:
                                    Prism.languages.stylus &&
                                    Prism.languages.stylus[
                                        "variable-declaration"
                                    ].inside,
                            },
                        ],
                    },
                },
                angle: {
                    create: function () {
                        new Prism.plugins.Previewer(
                            "angle",
                            function (e) {
                                var s,
                                    t,
                                    i = parseFloat(e),
                                    a = e.match(/[a-z]+$/i);
                                if (!i || !a) return !1;
                                switch ((a = a[0])) {
                                    case "deg":
                                        s = 360;
                                        break;
                                    case "grad":
                                        s = 400;
                                        break;
                                    case "rad":
                                        s = 2 * Math.PI;
                                        break;
                                    case "turn":
                                        s = 1;
                                }
                                return (
                                    (t = (100 * i) / s),
                                    (t %= 100),
                                    this[
                                        (i < 0 ? "set" : "remove") + "Attribute"
                                    ]("data-negative", ""),
                                    (this.querySelector(
                                        "circle"
                                    ).style.strokeDasharray =
                                        Math.abs(t) + ",500"),
                                    !0
                                );
                            },
                            "*",
                            function () {
                                this._elt.innerHTML =
                                    '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>';
                            }
                        );
                    },
                    tokens: {
                        angle: /(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)(?:deg|g?rad|turn)\b/i,
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root:
                                Prism.languages.markup &&
                                Prism.languages.markup.tag.inside["attr-value"],
                        },
                        sass: [
                            {
                                lang: "sass",
                                inside: "inside",
                                root:
                                    Prism.languages.sass &&
                                    Prism.languages.sass["property-line"],
                            },
                            {
                                lang: "sass",
                                before: "operator",
                                inside: "inside",
                                root:
                                    Prism.languages.sass &&
                                    Prism.languages.sass["variable-line"],
                            },
                        ],
                        scss: !0,
                        stylus: [
                            {
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root:
                                    Prism.languages.stylus &&
                                    Prism.languages.stylus[
                                        "property-declaration"
                                    ].inside,
                            },
                            {
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root:
                                    Prism.languages.stylus &&
                                    Prism.languages.stylus[
                                        "variable-declaration"
                                    ].inside,
                            },
                        ],
                    },
                },
                color: {
                    create: function () {
                        new Prism.plugins.Previewer("color", function (e) {
                            return (
                                (this.style.backgroundColor = ""),
                                (this.style.backgroundColor = e),
                                !!this.style.backgroundColor
                            );
                        });
                    },
                    tokens: {
                        color: [Prism.languages.css.hexcode].concat(
                            Prism.languages.css.color
                        ),
                    },
                    languages: {
                        css: !1,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root:
                                Prism.languages.markup &&
                                Prism.languages.markup.tag.inside["attr-value"],
                        },
                        sass: [
                            {
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root:
                                    Prism.languages.sass &&
                                    Prism.languages.sass["variable-line"],
                            },
                            {
                                lang: "sass",
                                inside: "inside",
                                root:
                                    Prism.languages.sass &&
                                    Prism.languages.sass["property-line"],
                            },
                        ],
                        scss: !1,
                        stylus: [
                            {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root:
                                    Prism.languages.stylus &&
                                    Prism.languages.stylus[
                                        "property-declaration"
                                    ].inside,
                            },
                            {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root:
                                    Prism.languages.stylus &&
                                    Prism.languages.stylus[
                                        "variable-declaration"
                                    ].inside,
                            },
                        ],
                    },
                },
                easing: {
                    create: function () {
                        new Prism.plugins.Previewer(
                            "easing",
                            function (e) {
                                var s = (e =
                                    {
                                        linear: "0,0,1,1",
                                        ease: ".25,.1,.25,1",
                                        "ease-in": ".42,0,1,1",
                                        "ease-out": "0,0,.58,1",
                                        "ease-in-out": ".42,0,.58,1",
                                    }[e] || e).match(
                                    /-?(?:\d+(?:\.\d+)?|\.\d+)/g
                                );
                                if (4 === s.length) {
                                    (s = s.map(function (e, s) {
                                        return 100 * (s % 2 ? 1 - e : e);
                                    })),
                                        this.querySelector("path").setAttribute(
                                            "d",
                                            "M0,100 C" +
                                                s[0] +
                                                "," +
                                                s[1] +
                                                ", " +
                                                s[2] +
                                                "," +
                                                s[3] +
                                                ", 100,0"
                                        );
                                    var t = this.querySelectorAll("line");
                                    return (
                                        t[0].setAttribute("x2", s[0]),
                                        t[0].setAttribute("y2", s[1]),
                                        t[1].setAttribute("x2", s[2]),
                                        t[1].setAttribute("y2", s[3]),
                                        !0
                                    );
                                }
                                return !1;
                            },
                            "*",
                            function () {
                                this._elt.innerHTML =
                                    '<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /></svg>';
                            }
                        );
                    },
                    tokens: {
                        easing: {
                            pattern:
                                /\bcubic-bezier\((?:-?(?:\d+(?:\.\d+)?|\.\d+),\s*){3}-?(?:\d+(?:\.\d+)?|\.\d+)\)\B|\b(?:ease(?:-in)?(?:-out)?|linear)(?=\s|[;}]|$)/i,
                            inside: {
                                function: /[\w-]+(?=\()/,
                                punctuation: /[(),]/,
                            },
                        },
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        sass: [
                            {
                                lang: "sass",
                                inside: "inside",
                                before: "punctuation",
                                root:
                                    Prism.languages.sass &&
                                    Prism.languages.sass["variable-line"],
                            },
                            {
                                lang: "sass",
                                inside: "inside",
                                root:
                                    Prism.languages.sass &&
                                    Prism.languages.sass["property-line"],
                            },
                        ],
                        scss: !0,
                        stylus: [
                            {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root:
                                    Prism.languages.stylus &&
                                    Prism.languages.stylus[
                                        "property-declaration"
                                    ].inside,
                            },
                            {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root:
                                    Prism.languages.stylus &&
                                    Prism.languages.stylus[
                                        "variable-declaration"
                                    ].inside,
                            },
                        ],
                    },
                },
                time: {
                    create: function () {
                        new Prism.plugins.Previewer(
                            "time",
                            function (e) {
                                var s = parseFloat(e),
                                    t = e.match(/[a-z]+$/i);
                                return !(
                                    !s ||
                                    !t ||
                                    ((t = t[0]),
                                    (this.querySelector(
                                        "circle"
                                    ).style.animationDuration = 2 * s + t),
                                    0)
                                );
                            },
                            "*",
                            function () {
                                this._elt.innerHTML =
                                    '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>';
                            }
                        );
                    },
                    tokens: {
                        time: /(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)m?s\b/i,
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root:
                                Prism.languages.markup &&
                                Prism.languages.markup.tag.inside["attr-value"],
                        },
                        sass: [
                            {
                                lang: "sass",
                                inside: "inside",
                                root:
                                    Prism.languages.sass &&
                                    Prism.languages.sass["property-line"],
                            },
                            {
                                lang: "sass",
                                before: "operator",
                                inside: "inside",
                                root:
                                    Prism.languages.sass &&
                                    Prism.languages.sass["variable-line"],
                            },
                        ],
                        scss: !0,
                        stylus: [
                            {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root:
                                    Prism.languages.stylus &&
                                    Prism.languages.stylus[
                                        "property-declaration"
                                    ].inside,
                            },
                            {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root:
                                    Prism.languages.stylus &&
                                    Prism.languages.stylus[
                                        "variable-declaration"
                                    ].inside,
                            },
                        ],
                    },
                },
            },
            i = "token",
            a = "active",
            n = "flipped",
            r = function (e, s, t, i) {
                (this._elt = null),
                    (this._type = e),
                    (this._token = null),
                    (this.updater = s),
                    (this._mouseout = this.mouseout.bind(this)),
                    (this.initializer = i);
                var a = this;
                t || (t = ["*"]),
                    Array.isArray(t) || (t = [t]),
                    t.forEach(function (e) {
                        "string" != typeof e && (e = e.lang),
                            r.byLanguages[e] || (r.byLanguages[e] = []),
                            r.byLanguages[e].indexOf(a) < 0 &&
                                r.byLanguages[e].push(a);
                    }),
                    (r.byType[e] = this);
            };
        for (var o in ((r.prototype.init = function () {
            this._elt ||
                ((this._elt = document.createElement("div")),
                (this._elt.className =
                    "prism-previewer prism-previewer-" + this._type),
                document.body.appendChild(this._elt),
                this.initializer && this.initializer());
        }),
        (r.prototype.isDisabled = function (e) {
            do {
                if (e.hasAttribute && e.hasAttribute("data-previewers"))
                    return (
                        -1 ===
                        (e.getAttribute("data-previewers") || "")
                            .split(/\s+/)
                            .indexOf(this._type)
                    );
            } while ((e = e.parentNode));
            return !1;
        }),
        (r.prototype.check = function (e) {
            if (!e.classList.contains(i) || !this.isDisabled(e)) {
                do {
                    if (
                        e.classList &&
                        e.classList.contains(i) &&
                        e.classList.contains(this._type)
                    )
                        break;
                } while ((e = e.parentNode));
                e && e !== this._token && ((this._token = e), this.show());
            }
        }),
        (r.prototype.mouseout = function () {
            this._token.removeEventListener("mouseout", this._mouseout, !1),
                (this._token = null),
                this.hide();
        }),
        (r.prototype.show = function () {
            var e, s, t, i;
            if ((this._elt || this.init(), this._token))
                if (this.updater.call(this._elt, this._token.textContent)) {
                    this._token.addEventListener(
                        "mouseout",
                        this._mouseout,
                        !1
                    );
                    var r =
                        ((s = (e = this._token.getBoundingClientRect()).left),
                        (t = e.top),
                        (s -= (i =
                            document.documentElement.getBoundingClientRect())
                            .left),
                        {
                            top: (t -= i.top),
                            right: innerWidth - s - e.width,
                            bottom: innerHeight - t - e.height,
                            left: s,
                            width: e.width,
                            height: e.height,
                        });
                    this._elt.classList.add(a),
                        r.top - this._elt.offsetHeight > 0
                            ? (this._elt.classList.remove(n),
                              (this._elt.style.top = r.top + "px"),
                              (this._elt.style.bottom = ""))
                            : (this._elt.classList.add(n),
                              (this._elt.style.bottom = r.bottom + "px"),
                              (this._elt.style.top = "")),
                        (this._elt.style.left =
                            r.left + Math.min(200, r.width / 2) + "px");
                } else this.hide();
        }),
        (r.prototype.hide = function () {
            this._elt.classList.remove(a);
        }),
        (r.byLanguages = {}),
        (r.byType = {}),
        (r.initEvents = function (e, s) {
            var t = [];
            r.byLanguages[s] && (t = t.concat(r.byLanguages[s])),
                r.byLanguages["*"] && (t = t.concat(r.byLanguages["*"])),
                e.addEventListener(
                    "mouseover",
                    function (e) {
                        var s = e.target;
                        t.forEach(function (e) {
                            e.check(s);
                        });
                    },
                    !1
                );
        }),
        (Prism.plugins.Previewer = r),
        Prism.hooks.add("before-highlight", function (e) {
            for (var s in t) {
                var i = t[s].languages;
                if (e.language && i[e.language] && !i[e.language].initialized) {
                    var a = i[e.language];
                    Array.isArray(a) || (a = [a]),
                        a.forEach(function (a) {
                            var n, r, o, l;
                            !0 === a
                                ? ((n = "important"),
                                  (r = e.language),
                                  (a = e.language))
                                : ((n = a.before || "important"),
                                  (r = a.inside || a.lang),
                                  (o = a.root || Prism.languages),
                                  (l = a.skip),
                                  (a = e.language)),
                                !l &&
                                    Prism.languages[a] &&
                                    (Prism.languages.insertBefore(
                                        r,
                                        n,
                                        t[s].tokens,
                                        o
                                    ),
                                    (e.grammar = Prism.languages[a]),
                                    (i[e.language] = { initialized: !0 }));
                        });
                }
            }
        }),
        Prism.hooks.add("after-highlight", function (e) {
            (r.byLanguages["*"] || r.byLanguages[e.language]) &&
                r.initEvents(e.element, e.language);
        }),
        t))
            t[o].create();
    }
})();
!(function () {
    function t(t) {
        var e = document.createElement("textarea");
        (e.value = t.getText()),
            (e.style.top = "0"),
            (e.style.left = "0"),
            (e.style.position = "fixed"),
            document.body.appendChild(e),
            e.focus(),
            e.select();
        try {
            var o = document.execCommand("copy");
            setTimeout(function () {
                o ? t.success() : t.error();
            }, 1);
        } catch (e) {
            setTimeout(function () {
                t.error(e);
            }, 1);
        }
        document.body.removeChild(e);
    }
    "undefined" != typeof Prism &&
        "undefined" != typeof document &&
        (Prism.plugins.toolbar
            ? Prism.plugins.toolbar.registerButton(
                  "copy-to-clipboard",
                  function (e) {
                      var o = e.element,
                          n = (function (t) {
                              var e = {
                                  copy: "Copy",
                                  "copy-error": "Press Ctrl+C to copy",
                                  "copy-success": "Copied!",
                                  "copy-timeout": 5e3,
                              };
                              for (var o in e) {
                                  for (
                                      var n = "data-prismjs-" + o, c = t;
                                      c && !c.hasAttribute(n);

                                  )
                                      c = c.parentElement;
                                  c && (e[o] = c.getAttribute(n));
                              }
                              return e;
                          })(o),
                          c = document.createElement("button");
                      (c.className = "copy-to-clipboard-button"),
                          c.setAttribute("type", "button");
                      var r = document.createElement("span");
                      return (
                          c.appendChild(r),
                          u("copy"),
                          (function (e, o) {
                              e.addEventListener("click", function () {
                                  !(function (e) {
                                      navigator.clipboard
                                          ? navigator.clipboard
                                                .writeText(e.getText())
                                                .then(e.success, function () {
                                                    t(e);
                                                })
                                          : t(e);
                                  })(o);
                              });
                          })(c, {
                              getText: function () {
                                  return o.textContent;
                              },
                              success: function () {
                                  u("copy-success"), i();
                              },
                              error: function () {
                                  u("copy-error"),
                                      setTimeout(function () {
                                          !(function (t) {
                                              window
                                                  .getSelection()
                                                  .selectAllChildren(t);
                                          })(o);
                                      }, 1),
                                      i();
                              },
                          }),
                          c
                      );
                      function i() {
                          setTimeout(function () {
                              u("copy");
                          }, n["copy-timeout"]);
                      }
                      function u(t) {
                          (r.textContent = n[t]),
                              c.setAttribute("data-copy-state", t);
                      }
                  }
              )
            : console.warn(
                  "Copy to Clipboard plugin loaded before Toolbar plugin."
              ));
})();
"undefined" != typeof Prism &&
    "undefined" != typeof document &&
    document.querySelector &&
    Prism.plugins.toolbar.registerButton("download-file", function (t) {
        var e = t.element.parentNode;
        if (
            e &&
            /pre/i.test(e.nodeName) &&
            e.hasAttribute("data-src") &&
            e.hasAttribute("data-download-link")
        ) {
            var n = e.getAttribute("data-src"),
                a = document.createElement("a");
            return (
                (a.textContent =
                    e.getAttribute("data-download-link-label") || "Download"),
                a.setAttribute("download", ""),
                (a.href = n),
                a
            );
        }
    });
!(function () {
    if ("undefined" != typeof Prism) {
        var e = /^diff-([\w-]+)/i,
            i =
                /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,
            a = RegExp(
                "(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))".replace(
                    /__/g,
                    function () {
                        return i.source;
                    }
                ),
                "gi"
            ),
            s = !1;
        Prism.hooks.add("before-sanity-check", function (i) {
            var a = i.language;
            e.test(a) &&
                !i.grammar &&
                (i.grammar = Prism.languages[a] = Prism.languages.diff);
        }),
            Prism.hooks.add("before-tokenize", function (i) {
                s ||
                    Prism.languages.diff ||
                    Prism.plugins.autoloader ||
                    ((s = !0),
                    console.warn(
                        "Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin."
                    ));
                var a = i.language;
                e.test(a) &&
                    !Prism.languages[a] &&
                    (Prism.languages[a] = Prism.languages.diff);
            }),
            Prism.hooks.add("wrap", function (s) {
                var r, n;
                if ("diff" !== s.language) {
                    var g = e.exec(s.language);
                    if (!g) return;
                    (r = g[1]), (n = Prism.languages[r]);
                }
                var f = Prism.languages.diff && Prism.languages.diff.PREFIXES;
                if (f && s.type in f) {
                    var u,
                        l = s.content
                            .replace(i, "")
                            .replace(/&lt;/g, "<")
                            .replace(/&amp;/g, "&"),
                        t = l.replace(/(^|[\r\n])./g, "$1");
                    u = n ? Prism.highlight(t, n, r) : Prism.util.encode(t);
                    var o,
                        m = new Prism.Token("prefix", f[s.type], [
                            /\w+/.exec(s.type)[0],
                        ]),
                        d = Prism.Token.stringify(m, s.language),
                        c = [];
                    for (a.lastIndex = 0; (o = a.exec(u)); ) c.push(d + o[0]);
                    /(?:^|[\r\n]).$/.test(l) && c.push(d),
                        (s.content = c.join("")),
                        n && s.classes.push("language-" + r);
                }
            });
    }
})();
