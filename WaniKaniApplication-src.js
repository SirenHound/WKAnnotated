!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e, t, n) {
        if (pe.isFunction(t))
            return pe.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return pe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (Te.test(t))
                return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }
    function i(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);return e
    }
    function a(e) {
        var t = {};
        return pe.each(e.match($e) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function o() {
        re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s),
        e.detachEvent("onload", s))
    }
    function s() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (o(),
        pe.ready())
    }
    function u(e, t, n) {
        if (n === undefined && 1 === e.nodeType) {
            var r = "data-" + t.replace(Le, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : De.test(n) ? pe.parseJSON(n) : n)
                } catch (e) {}
                pe.data(e, t, n)
            } else
                n = undefined
        }
        return n
    }
    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function l(e, t, n, r) {
        if (Ne(e)) {
            var i, a, o = pe.expando, s = e.nodeType, u = s ? pe.cache : e, c = s ? e[o] : e[o] && o;
            if (c && u[c] && (r || u[c].data) || n !== undefined || "string" != typeof t)
                return c || (c = s ? e[o] = ne.pop() || pe.guid++ : o),
                u[c] || (u[c] = s ? {} : {
                    toJSON: pe.noop
                }),
                "object" != typeof t && "function" != typeof t || (r ? u[c] = pe.extend(u[c], t) : u[c].data = pe.extend(u[c].data, t)),
                a = u[c],
                r || (a.data || (a.data = {}),
                a = a.data),
                n !== undefined && (a[pe.camelCase(t)] = n),
                "string" == typeof t ? null == (i = a[t]) && (i = a[pe.camelCase(t)]) : i = a,
                i
        }
    }
    function d(e, t, n) {
        if (Ne(e)) {
            var r, i, a = e.nodeType, o = a ? pe.cache : e, s = a ? e[pe.expando] : pe.expando;
            if (o[s]) {
                if (t && (r = n ? o[s] : o[s].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in r ? t = [t] : (t = pe.camelCase(t),
                    t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    for (; i--; )
                        delete r[t[i]];
                    if (n ? !c(r) : !pe.isEmptyObject(r))
                        return
                }
                (n || (delete o[s].data,
                c(o[s]))) && (a ? pe.cleanData([e], !0) : de.deleteExpando || o != o.window ? delete o[s] : o[s] = undefined)
            }
        }
    }
    function f(e, t, n, r) {
        var i, a = 1, o = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return pe.css(e, t, "")
        }
        , u = s(), c = n && n[3] || (pe.cssNumber[t] ? "" : "px"), l = (pe.cssNumber[t] || "px" !== c && +u) && Re.exec(pe.css(e, t));
        if (l && l[3] !== c) {
            c = c || l[3],
            n = n || [],
            l = +u || 1;
            do {
                a = a || ".5",
                l /= a,
                pe.style(e, t, l + c)
            } while (a !== (a = s() / u) && 1 !== a && --o)
        }
        return n && (l = +l || +u || 0,
        i = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = c,
        r.start = l,
        r.end = i)),
        i
    }
    function p(e) {
        var t = ze.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function h(e, t) {
        var n, r, i = 0, a = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
        if (!a)
            for (a = [],
            n = e.childNodes || e; null != (r = n[i]); i++)
                !t || pe.nodeName(r, t) ? a.push(r) : pe.merge(a, h(r, t));
        return t === undefined || t && pe.nodeName(e, t) ? pe.merge([e], a) : a
    }
    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"))
    }
    function g(e) {
        Me.test(e.type) && (e.defaultChecked = e.checked)
    }
    function y(e, t, n, r, i) {
        for (var a, o, s, u, c, l, d, f = e.length, y = p(t), v = [], b = 0; b < f; b++)
            if ((o = e[b]) || 0 === o)
                if ("object" === pe.type(o))
                    pe.merge(v, o.nodeType ? [o] : o);
                else if (Ke.test(o)) {
                    for (u = u || y.appendChild(t.createElement("div")),
                    c = (Oe.exec(o) || ["", ""])[1].toLowerCase(),
                    d = Be[c] || Be._default,
                    u.innerHTML = d[1] + pe.htmlPrefilter(o) + d[2],
                    a = d[0]; a--; )
                        u = u.lastChild;
                    if (!de.leadingWhitespace && We.test(o) && v.push(t.createTextNode(We.exec(o)[0])),
                    !de.tbody)
                        for (o = "table" !== c || Ue.test(o) ? "<table>" !== d[1] || Ue.test(o) ? 0 : u : u.firstChild,
                        a = o && o.childNodes.length; a--; )
                            pe.nodeName(l = o.childNodes[a], "tbody") && !l.childNodes.length && o.removeChild(l);
                    for (pe.merge(v, u.childNodes),
                    u.textContent = ""; u.firstChild; )
                        u.removeChild(u.firstChild);
                    u = y.lastChild
                } else
                    v.push(t.createTextNode(o));
        for (u && y.removeChild(u),
        de.appendChecked || pe.grep(h(v, "input"), g),
        b = 0; o = v[b++]; )
            if (r && pe.inArray(o, r) > -1)
                i && i.push(o);
            else if (s = pe.contains(o.ownerDocument, o),
            u = h(y.appendChild(o), "script"),
            s && m(u),
            n)
                for (a = 0; o = u[a++]; )
                    Fe.test(o.type || "") && n.push(o);
        return u = null,
        y
    }
    function v() {
        return !0
    }
    function b() {
        return !1
    }
    function w() {
        try {
            return re.activeElement
        } catch (e) {}
    }
    function x(e, t, n, r, i, a) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = undefined);
            for (s in t)
                x(e, s, n, r, t[s], a);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = undefined) : null == i && ("string" == typeof n ? (i = r,
        r = undefined) : (i = r,
        r = n,
        n = undefined)),
        !1 === i)
            i = b;
        else if (!i)
            return e;
        return 1 === a && (o = i,
        i = function(e) {
            return pe().off(e),
            o.apply(this, arguments)
        }
        ,
        i.guid = o.guid || (o.guid = pe.guid++)),
        e.each(function() {
            pe.event.add(this, t, i, r, n)
        })
    }
    function k(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function T(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function S(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function C(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, r, i, a = pe._data(e), o = pe._data(t, a), s = a.events;
            if (s) {
                delete o.handle,
                o.events = {};
                for (n in s)
                    for (r = 0,
                    i = s[n].length; r < i; r++)
                        pe.event.add(t, n, s[n][r])
            }
            o.data && (o.data = pe.extend({}, o.data))
        }
    }
    function j(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !de.noCloneEvent && t[pe.expando]) {
                i = pe._data(t);
                for (r in i.events)
                    pe.removeEvent(t, r, i.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (T(t).text = e.text,
            S(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Me.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }
    function _(e, t, n, r) {
        t = ae.apply([], t);
        var i, a, o, s, u, c, l = 0, d = e.length, f = d - 1, p = t[0], m = pe.isFunction(p);
        if (m || d > 1 && "string" == typeof p && !de.checkClone && nt.test(p))
            return e.each(function(i) {
                var a = e.eq(i);
                m && (t[0] = p.call(this, i, a.html())),
                _(a, t, n, r)
            });
        if (d && (c = y(t, e[0].ownerDocument, !1, e, r),
        i = c.firstChild,
        1 === c.childNodes.length && (c = i),
        i || r)) {
            for (s = pe.map(h(c, "script"), T),
            o = s.length; l < d; l++)
                a = c,
                l !== f && (a = pe.clone(a, !0, !0),
                o && pe.merge(s, h(a, "script"))),
                n.call(e[l], a, l);
            if (o)
                for (u = s[s.length - 1].ownerDocument,
                pe.map(s, S),
                l = 0; l < o; l++)
                    a = s[l],
                    Fe.test(a.type || "") && !pe._data(a, "globalEval") && pe.contains(u, a) && (a.src ? pe._evalUrl && pe._evalUrl(a.src) : pe.globalEval((a.text || a.textContent || a.innerHTML || "").replace(it, "")));
            c = i = null
        }
        return e
    }
    function $(e, t, n) {
        for (var r, i = t ? pe.filter(t, e) : e, a = 0; null != (r = i[a]); a++)
            n || 1 !== r.nodeType || pe.cleanData(h(r)),
            r.parentNode && (n && pe.contains(r.ownerDocument, r) && m(h(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function E(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body)
          , r = pe.css(n[0], "display");
        return n.detach(),
        r
    }
    function A(e) {
        var t = re
          , n = ut[e];
        return n || (n = E(e, t),
        "none" !== n && n || (st = (st || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = (st[0].contentWindow || st[0].contentDocument).document,
        t.write(),
        t.close(),
        n = E(e, t),
        st.detach()),
        ut[e] = n),
        n
    }
    function N(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function D(e) {
        if (e in Tt)
            return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = kt.length; n--; )
            if ((e = kt[n] + t)in Tt)
                return e
    }
    function L(e, t) {
        for (var n, r, i, a = [], o = 0, s = e.length; o < s; o++)
            r = e[o],
            r.style && (a[o] = pe._data(r, "olddisplay"),
            n = r.style.display,
            t ? (a[o] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && He(r) && (a[o] = pe._data(r, "olddisplay", A(r.nodeName)))) : (i = He(r),
            (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n : pe.css(r, "display"))));
        for (o = 0; o < s; o++)
            r = e[o],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "" : "none"));
        return e
    }
    function I(e, t, n) {
        var r = bt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function R(e, t, n, r, i) {
        for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2)
            "margin" === n && (o += pe.css(e, n + qe[a], !0, i)),
            r ? ("content" === n && (o -= pe.css(e, "padding" + qe[a], !0, i)),
            "margin" !== n && (o -= pe.css(e, "border" + qe[a] + "Width", !0, i))) : (o += pe.css(e, "padding" + qe[a], !0, i),
            "padding" !== n && (o += pe.css(e, "border" + qe[a] + "Width", !0, i)));
        return o
    }
    function q(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , a = pt(e)
          , o = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, a);
        if (i <= 0 || null == i) {
            if (i = ht(e, t, a),
            (i < 0 || null == i) && (i = e.style[t]),
            lt.test(i))
                return i;
            r = o && (de.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + R(e, t, n || (o ? "border" : "content"), r, a) + "px"
    }
    function H(e, t, n, r, i) {
        return new H.prototype.init(e,t,n,r,i)
    }
    function P() {
        return e.setTimeout(function() {
            St = undefined
        }),
        St = pe.now()
    }
    function M(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            n = qe[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function O(e, t, n) {
        for (var r, i = (z.tweeners[t] || []).concat(z.tweeners["*"]), a = 0, o = i.length; a < o; a++)
            if (r = i[a].call(n, t, e))
                return r
    }
    function F(e, t, n) {
        var r, i, a, o, s, u, c, l = this, d = {}, f = e.style, p = e.nodeType && He(e), h = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        u = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || u()
        }
        ),
        s.unqueued++,
        l.always(function() {
            l.always(function() {
                s.unqueued--,
                pe.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
        c = pe.css(e, "display"),
        "inline" === ("none" === c ? pe._data(e, "olddisplay") || A(e.nodeName) : c) && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden",
        de.shrinkWrapBlocks() || l.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            jt.exec(i)) {
                if (delete t[r],
                a = a || "toggle" === i,
                i === (p ? "hide" : "show")) {
                    if ("show" !== i || !h || h[r] === undefined)
                        continue;
                    p = !0
                }
                d[r] = h && h[r] || pe.style(e, r)
            } else
                c = undefined;
        if (pe.isEmptyObject(d))
            "inline" === ("none" === c ? A(e.nodeName) : c) && (f.display = c);
        else {
            h ? "hidden"in h && (p = h.hidden) : h = pe._data(e, "fxshow", {}),
            a && (h.hidden = !p),
            p ? pe(e).show() : l.done(function() {
                pe(e).hide()
            }),
            l.done(function() {
                var t;
                pe._removeData(e, "fxshow");
                for (t in d)
                    pe.style(e, t, d[t])
            });
            for (r in d)
                o = O(p ? h[r] : 0, r, l),
                r in h || (h[r] = o.start,
                p && (o.end = o.start,
                o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function W(e, t) {
        var n, r, i, a, o;
        for (n in e)
            if (r = pe.camelCase(n),
            i = t[r],
            a = e[n],
            pe.isArray(a) && (i = a[1],
            a = e[n] = a[0]),
            n !== r && (e[r] = a,
            delete e[n]),
            (o = pe.cssHooks[r]) && "expand"in o) {
                a = o.expand(a),
                delete e[r];
                for (n in a)
                    n in e || (e[n] = a[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function z(e, t, n) {
        var r, i, a = 0, o = z.prefilters.length, s = pe.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = St || P(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, a = 1 - r, o = 0, u = c.tweens.length; o < u; o++)
                c.tweens[o].run(a);
            return s.notifyWith(e, [c, a, n]),
            a < 1 && u ? n : (s.resolveWith(e, [c]),
            !1)
        }, c = s.promise({
            elem: e,
            props: pe.extend({}, t),
            opts: pe.extend(!0, {
                specialEasing: {},
                easing: pe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: St || P(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? c.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    c.tweens[n].run(1);
                return t ? (s.notifyWith(e, [c, 1, 0]),
                s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]),
                this
            }
        }), l = c.props;
        for (W(l, c.opts.specialEasing); a < o; a++)
            if (r = z.prefilters[a].call(c, e, l, c.opts))
                return pe.isFunction(r.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(r.stop, r)),
                r;
        return pe.map(l, O, c),
        pe.isFunction(c.opts.start) && c.opts.start.call(e, c),
        pe.fx.timer(pe.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function B(e) {
        return pe.attr(e, "class") || ""
    }
    function K(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, a = t.toLowerCase().match($e) || [];
            if (pe.isFunction(n))
                for (; r = a[i++]; )
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function U(e, t, n, r) {
        function i(s) {
            var u;
            return a[s] = !0,
            pe.each(e[s] || [], function(e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || o || a[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c),
                i(c),
                !1)
            }),
            u
        }
        var a = {}
          , o = e === Gt;
        return i(t.dataTypes[0]) || !a["*"] && i("*")
    }
    function Q(e, t) {
        var n, r, i = pe.ajaxSettings.flatOptions || {};
        for (r in t)
            t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && pe.extend(!0, e, n),
        e
    }
    function X(e, t, n) {
        for (var r, i, a, o, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in s)
                if (s[o] && s[o].test(i)) {
                    u.unshift(o);
                    break
                }
        if (u[0]in n)
            a = u[0];
        else {
            for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    a = o;
                    break
                }
                r || (r = o)
            }
            a = a || r
        }
        if (a)
            return a !== u[0] && u.unshift(a),
            n[a]
    }
    function J(e, t, n, r) {
        var i, a, o, s, u, c = {}, l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters)
                c[o.toLowerCase()] = e.converters[o];
        for (a = l.shift(); a; )
            if (e.responseFields[a] && (n[e.responseFields[a]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = a,
            a = l.shift())
                if ("*" === a)
                    a = u;
                else if ("*" !== u && u !== a) {
                    if (!(o = c[u + " " + a] || c["* " + a]))
                        for (i in c)
                            if (s = i.split(" "),
                            s[1] === a && (o = c[u + " " + s[0]] || c["* " + s[0]])) {
                                !0 === o ? o = c[i] : !0 !== c[i] && (a = s[0],
                                l.unshift(s[1]));
                                break
                            }
                    if (!0 !== o)
                        if (o && e["throws"])
                            t = o(t);
                        else
                            try {
                                t = o(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: o ? e : "No conversion from " + u + " to " + a
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function V(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }
    function G(e) {
        if (!pe.contains(e.ownerDocument || re, e))
            return !0;
        for (; e && 1 === e.nodeType; ) {
            if ("none" === V(e) || "hidden" === e.type)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function Y(e, t, n, r) {
        var i;
        if (pe.isArray(t))
            pe.each(t, function(t, i) {
                n || nn.test(e) ? r(e, i) : Y(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== pe.type(t))
            r(e, t);
        else
            for (i in t)
                Y(e + "[" + i + "]", t[i], n, r)
    }
    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = []
      , re = e.document
      , ie = ne.slice
      , ae = ne.concat
      , oe = ne.push
      , se = ne.indexOf
      , ue = {}
      , ce = ue.toString
      , le = ue.hasOwnProperty
      , de = {}
      , fe = "1.12.4"
      , pe = function(e, t) {
        return new pe.fn.init(e,t)
    }
      , he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , me = /^-ms-/
      , ge = /-([\da-z])/gi
      , ye = function(e, t) {
        return t.toUpperCase()
    };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ne.sort,
        splice: ne.splice
    },
    pe.extend = pe.fn.extend = function() {
        var e, t, n, r, i, a, o = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof o && (c = o,
        o = arguments[s] || {},
        s++),
        "object" == typeof o || pe.isFunction(o) || (o = {}),
        s === u && (o = this,
        s--); s < u; s++)
            if (null != (i = arguments[s]))
                for (r in i)
                    e = o[r],
                    n = i[r],
                    o !== n && (c && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1,
                    a = e && pe.isArray(e) ? e : []) : a = e && pe.isPlainObject(e) ? e : {},
                    o[r] = pe.extend(c, a, n)) : n !== undefined && (o[r] = n));
        return o
    }
    ,
    pe.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === pe.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e))
                return !1;
            try {
                if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e)
                    return le.call(e, t);
            for (t in e)
                ;
            return t === undefined || le.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[ce.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && pe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ye)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; i < r && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [e] : e) : oe.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (se)
                    return se.call(t, e, n);
                for (r = t.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; )
                e[i++] = t[r++];
            if (n !== n)
                for (; t[r] !== undefined; )
                    e[i++] = t[r++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, a = e.length, o = !n; i < a; i++)
                !t(e[i], i) !== o && r.push(e[i]);
            return r
        },
        map: function(e, t, r) {
            var i, a, o = 0, s = [];
            if (n(e))
                for (i = e.length; o < i; o++)
                    null != (a = t(e[o], o, r)) && s.push(a);
            else
                for (o in e)
                    null != (a = t(e[o], o, r)) && s.push(a);
            return ae.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t],
            t = e,
            e = i),
            pe.isFunction(e) ? (n = ie.call(arguments, 2),
            r = function() {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }
            ,
            r.guid = e.guid = e.guid || pe.guid++,
            r) : undefined
        },
        now: function() {
            return +new Date
        },
        support: de
    }),
    "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]),
    pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ue["[object " + t + "]"] = t.toLowerCase()
    });
    var ve = function(e) {
        function t(e, t, n, r) {
            var i, a, o, s, u, c, d, p, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!r && ((t ? t.ownerDocument || t : O) !== D && N(t),
            t = t || D,
            I)) {
                if (11 !== m && (c = ye.exec(e)))
                    if (i = c[1]) {
                        if (9 === m) {
                            if (!(o = t.getElementById(i)))
                                return n;
                            if (o.id === i)
                                return n.push(o),
                                n
                        } else if (h && (o = h.getElementById(i)) && P(t, o) && o.id === i)
                            return n.push(o),
                            n
                    } else {
                        if (c[2])
                            return Y.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = c[3]) && x.getElementsByClassName && t.getElementsByClassName)
                            return Y.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (x.qsa && !K[e + " "] && (!R || !R.test(e))) {
                    if (1 !== m)
                        h = t,
                        p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = M),
                        d = C(e),
                        a = d.length,
                        u = fe.test(s) ? "#" + s : "[id='" + s + "']"; a--; )
                            d[a] = u + " " + f(d[a]);
                        p = d.join(","),
                        h = ve.test(e) && l(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return Y.apply(n, h.querySelectorAll(p)),
                            n
                        } catch (e) {} finally {
                            s === M && t.removeAttribute("id")
                        }
                }
            }
            return _(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[M] = !0,
            e
        }
        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function a(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                k.attrHandle[n[r]] = t
        }
        function o(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, a = e([], n.length, t), o = a.length; o--; )
                        n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function l(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function p(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , a = W++;
            return t.first ? function(t, n, a) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, a)
            }
            : function(t, n, o) {
                var s, u, c, l = [F, a];
                if (o) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, o))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (c = t[M] || (t[M] = {}),
                            u = c[t.uniqueID] || (c[t.uniqueID] = {}),
                            (s = u[r]) && s[0] === F && s[1] === a)
                                return l[2] = s[2];
                            if (u[r] = l,
                            l[2] = e(t, n, o))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, r) {
            for (var i = 0, a = n.length; i < a; i++)
                t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var a, o = [], s = 0, u = e.length, c = null != t; s < u; s++)
                (a = e[s]) && (n && !n(a, r, i) || (o.push(a),
                c && t.push(s)));
            return o
        }
        function y(e, t, n, i, a, o) {
            return i && !i[M] && (i = y(i)),
            a && !a[M] && (a = y(a, o)),
            r(function(r, o, s, u) {
                var c, l, d, f = [], p = [], h = o.length, y = r || m(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? y : g(y, f, e, s, u), b = n ? a || (r ? e : h || i) ? [] : o : v;
                if (n && n(v, b, s, u),
                i)
                    for (c = g(b, p),
                    i(c, [], s, u),
                    l = c.length; l--; )
                        (d = c[l]) && (b[p[l]] = !(v[p[l]] = d));
                if (r) {
                    if (a || e) {
                        if (a) {
                            for (c = [],
                            l = b.length; l--; )
                                (d = b[l]) && c.push(v[l] = d);
                            a(null, b = [], c, u)
                        }
                        for (l = b.length; l--; )
                            (d = b[l]) && (c = a ? ee(r, d) : f[l]) > -1 && (r[c] = !(o[c] = d))
                    }
                } else
                    b = g(b === o ? b.splice(h, b.length) : b),
                    a ? a(null, o, b, u) : Y.apply(o, b)
            })
        }
        function v(e) {
            for (var t, n, r, i = e.length, a = k.relative[e[0].type], o = a || k.relative[" "], s = a ? 1 : 0, u = p(function(e) {
                return e === t
            }, o, !0), c = p(function(e) {
                return ee(t, e) > -1
            }, o, !0), l = [function(e, n, r) {
                var i = !a && (r || n !== $) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                return t = null,
                i
            }
            ]; s < i; s++)
                if (n = k.relative[e[s].type])
                    l = [p(h(l), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches),
                    n[M]) {
                        for (r = ++s; r < i && !k.relative[e[r].type]; r++)
                            ;
                        return y(s > 1 && h(l), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && f(e))
                    }
                    l.push(n)
                }
            return h(l)
        }
        function b(e, n) {
            var i = n.length > 0
              , a = e.length > 0
              , o = function(r, o, s, u, c) {
                var l, d, f, p = 0, h = "0", m = r && [], y = [], v = $, b = r || a && k.find.TAG("*", c), w = F += null == v ? 1 : Math.random() || .1, x = b.length;
                for (c && ($ = o === D || o || c); h !== x && null != (l = b[h]); h++) {
                    if (a && l) {
                        for (d = 0,
                        o || l.ownerDocument === D || (N(l),
                        s = !I); f = e[d++]; )
                            if (f(l, o || D, s)) {
                                u.push(l);
                                break
                            }
                        c && (F = w)
                    }
                    i && ((l = !f && l) && p--,
                    r && m.push(l))
                }
                if (p += h,
                i && h !== p) {
                    for (d = 0; f = n[d++]; )
                        f(m, y, o, s);
                    if (r) {
                        if (p > 0)
                            for (; h--; )
                                m[h] || y[h] || (y[h] = V.call(u));
                        y = g(y)
                    }
                    Y.apply(u, y),
                    c && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                }
                return c && (F = w,
                $ = v),
                m
            };
            return i ? r(o) : o
        }
        var w, x, k, T, S, C, j, _, $, E, A, N, D, L, I, R, q, H, P, M = "sizzle" + 1 * new Date, O = e.document, F = 0, W = 0, z = n(), B = n(), K = n(), U = function(e, t) {
            return e === t && (A = !0),
            0
        }, Q = 1 << 31, X = {}.hasOwnProperty, J = [], V = J.pop, G = J.push, Y = J.push, Z = J.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", oe = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(ae), fe = new RegExp("^" + re + "$"), pe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), xe = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, ke = function() {
            N()
        };
        try {
            Y.apply(J = Z.call(O.childNodes), O.childNodes),
            J[O.childNodes.length].nodeType
        } catch (e) {
            Y = {
                apply: J.length ? function(e, t) {
                    G.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        x = t.support = {},
        S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        N = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : O;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r,
            L = D.documentElement,
            I = !S(D),
            (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)),
            x.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            x.getElementsByTagName = i(function(e) {
                return e.appendChild(D.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            x.getElementsByClassName = ge.test(D.getElementsByClassName),
            x.getById = i(function(e) {
                return L.appendChild(e).id = M,
                !D.getElementsByName || !D.getElementsByName(M).length
            }),
            x.getById ? (k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            k.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete k.find.ID,
            k.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            k.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return a
            }
            ,
            k.find.CLASS = x.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && I)
                    return t.getElementsByClassName(e)
            }
            ,
            q = [],
            R = [],
            (x.qsa = ge.test(D.querySelectorAll)) && (i(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + M + "-]").length || R.push("~="),
                e.querySelectorAll(":checked").length || R.push(":checked"),
                e.querySelectorAll("a#" + M + "+*").length || R.push(".#.+[+~]")
            }),
            i(function(e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                R.push(",.*:")
            })),
            (x.matchesSelector = ge.test(H = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                x.disconnectedMatch = H.call(e, "div"),
                H.call(e, "[s!='']:x"),
                q.push("!=", ae)
            }),
            R = R.length && new RegExp(R.join("|")),
            q = q.length && new RegExp(q.join("|")),
            t = ge.test(L.compareDocumentPosition),
            P = t || ge.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            U = t ? function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === O && P(O, e) ? -1 : t === D || t.ownerDocument === O && P(O, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n, r = 0, i = e.parentNode, a = t.parentNode, s = [e], u = [t];
                if (!i || !a)
                    return e === D ? -1 : t === D ? 1 : i ? -1 : a ? 1 : E ? ee(E, e) - ee(E, t) : 0;
                if (i === a)
                    return o(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    u.unshift(n);
                for (; s[r] === u[r]; )
                    r++;
                return r ? o(s[r], u[r]) : s[r] === O ? -1 : u[r] === O ? 1 : 0
            }
            ,
            D) : D
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && N(e),
            n = n.replace(le, "='$1']"),
            x.matchesSelector && I && !K[n + " "] && (!q || !q.test(n)) && (!R || !R.test(n)))
                try {
                    var r = H.call(e, n);
                    if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return t(n, D, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && N(e),
            P(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && N(e);
            var n = k.attrHandle[t.toLowerCase()]
              , r = n && X.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !I) : undefined;
            return r !== undefined ? r : x.attributes || !I ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (A = !x.detectDuplicates,
            E = !x.sortStable && e.slice(0),
            e.sort(U),
            A) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return E = null,
            e
        }
        ,
        T = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += T(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += T(t);
            return n
        }
        ,
        k = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, xe),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var a = t.attr(i, e);
                        return null == a ? "!=" === n : !n || (a += "",
                        "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n && (a === r || a.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var a = "nth" !== e.slice(0, 3)
                      , o = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var c, l, d, f, p, h, m = a !== o ? "nextSibling" : "previousSibling", g = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s, b = !1;
                        if (g) {
                            if (a) {
                                for (; m; ) {
                                    for (f = t; f = f[m]; )
                                        if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [o ? g.firstChild : g.lastChild],
                            o && v) {
                                for (f = g,
                                d = f[M] || (f[M] = {}),
                                l = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                c = l[e] || [],
                                p = c[0] === F && c[1],
                                b = p && c[2],
                                f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++b && f === t) {
                                        l[e] = [F, p, b];
                                        break
                                    }
                            } else if (v && (f = t,
                            d = f[M] || (f[M] = {}),
                            l = d[f.uniqueID] || (d[f.uniqueID] = {}),
                            c = l[e] || [],
                            p = c[0] === F && c[1],
                            b = p),
                            !1 === b)
                                for (; (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++b || (v && (d = f[M] || (f[M] = {}),
                                l = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                l[e] = [F, b]),
                                f !== t)); )
                                    ;
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, a = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[M] ? a(n) : a.length > 1 ? (i = [e, e, "", n],
                    k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = a(e, n), o = i.length; o--; )
                            r = ee(e, i[o]),
                            e[r] = !(t[r] = i[o])
                    }) : function(e) {
                        return a(e, 0, i)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = j(e.replace(se, "$1"));
                    return i[M] ? r(function(e, t, n, r) {
                        for (var a, o = i(e, null, r, []), s = e.length; s--; )
                            (a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function(e, r, a) {
                        return t[0] = e,
                        i(t, null, a, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(we, xe),
                    function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(we, xe).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        k.pseudos.nth = k.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            k.pseudos[w] = s(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            k.pseudos[w] = u(w);
        return d.prototype = k.filters = k.pseudos,
        k.setFilters = new d,
        C = t.tokenize = function(e, n) {
            var r, i, a, o, s, u, c, l = B[e + " "];
            if (l)
                return n ? 0 : l.slice(0);
            for (s = e,
            u = [],
            c = k.preFilter; s; ) {
                r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(a = [])),
                r = !1,
                (i = ce.exec(s)) && (r = i.shift(),
                a.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }),
                s = s.slice(r.length));
                for (o in k.filter)
                    !(i = pe[o].exec(s)) || c[o] && !(i = c[o](i)) || (r = i.shift(),
                    a.push({
                        value: r,
                        type: o,
                        matches: i
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : B(e, u).slice(0)
        }
        ,
        j = t.compile = function(e, t) {
            var n, r = [], i = [], a = K[e + " "];
            if (!a) {
                for (t || (t = C(e)),
                n = t.length; n--; )
                    a = v(t[n]),
                    a[M] ? r.push(a) : i.push(a);
                a = K(e, b(i, r)),
                a.selector = e
            }
            return a
        }
        ,
        _ = t.select = function(e, t, n, r) {
            var i, a, o, s, u, c = "function" == typeof e && e, d = !r && C(e = c.selector || e);
            if (n = n || [],
            1 === d.length) {
                if (a = d[0] = d[0].slice(0),
                a.length > 2 && "ID" === (o = a[0]).type && x.getById && 9 === t.nodeType && I && k.relative[a[1].type]) {
                    if (!(t = (k.find.ID(o.matches[0].replace(we, xe), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(a.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i],
                !k.relative[s = o.type]); )
                    if ((u = k.find[s]) && (r = u(o.matches[0].replace(we, xe), ve.test(a[0].type) && l(t.parentNode) || t))) {
                        if (a.splice(i, 1),
                        !(e = r.length && f(a)))
                            return Y.apply(n, r),
                            n;
                        break
                    }
            }
            return (c || j(e, d))(r, t, !I, n, !t || ve.test(e) && l(t.parentNode) || t),
            n
        }
        ,
        x.sortStable = M.split("").sort(U).join("") === M,
        x.detectDuplicates = !!A,
        N(),
        x.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        x.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(te, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    pe.find = ve,
    pe.expr = ve.selectors,
    pe.expr[":"] = pe.expr.pseudos,
    pe.uniqueSort = pe.unique = ve.uniqueSort,
    pe.text = ve.getText,
    pe.isXMLDoc = ve.isXML,
    pe.contains = ve.contains;
    var be = function(e, t, n) {
        for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && pe(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , we = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , xe = pe.expr.match.needsContext
      , ke = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , Te = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    pe.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(pe(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (pe.contains(r[t], this))
                            return !0
                }));
            for (t = 0; t < i; t++)
                pe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? pe.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && xe.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Se, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pe.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || Se,
        "string" == typeof e) {
            if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ce.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof pe ? t[0] : t,
                pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)),
                ke.test(r[1]) && pe.isPlainObject(t))
                    for (r in t)
                        pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if ((i = re.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2])
                    return Se.find(e);
                this.length = 1,
                this[0] = i
            }
            return this.context = re,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (e.selector !== undefined && (this.selector = e.selector,
        this.context = e.context),
        pe.makeArray(e, this))
    }
    ).prototype = pe.fn,
    Se = pe(re);
    var je = /^(?:parents|prev(?:Until|All))/
      , _e = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pe.fn.extend({
        has: function(e) {
            var t, n = pe(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (pe.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, a = [], o = xe.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
            return this.pushStack(a.length > 1 ? pe.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(n, r) {
            var i = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = pe.filter(r, i)),
            this.length > 1 && (_e[e] || (i = pe.uniqueSort(i)),
            je.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var $e = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : pe.extend({}, e);
        var t, n, r, i, o = [], s = [], u = -1, c = function() {
            for (i = e.once,
            r = t = !0; s.length; u = -1)
                for (n = s.shift(); ++u < o.length; )
                    !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, l = {
            add: function() {
                return o && (n && !t && (u = o.length - 1,
                s.push(n)),
                function t(n) {
                    pe.each(n, function(n, r) {
                        pe.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== pe.type(r) && t(r)
                    })
                }(arguments),
                n && !t && c()),
                this
            },
            remove: function() {
                return pe.each(arguments, function(e, t) {
                    for (var n; (n = pe.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? pe.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = s = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = !0,
                n || l.disable(),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                s.push(n),
                t || c()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ,
    pe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", pe.Callbacks("once memory"), "resolved"], ["reject", "fail", pe.Callbacks("once memory"), "rejected"], ["notify", "progress", pe.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return pe.Deferred(function(n) {
                        pe.each(t, function(t, a) {
                            var o = pe.isFunction(e[t]) && e[t];
                            i[a[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? pe.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            pe.each(t, function(e, a) {
                var o = a[2]
                  , s = a[3];
                r[a[1]] = o.add,
                s && o.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[a[0]] = function() {
                    return i[a[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[a[0] + "With"] = o.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, a = ie.call(arguments), o = a.length, s = 1 !== o || e && pe.isFunction(e.promise) ? o : 0, u = 1 === s ? e : pe.Deferred(), c = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? ie.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (o > 1)
                for (t = new Array(o),
                n = new Array(o),
                r = new Array(o); i < o; i++)
                    a[i] && pe.isFunction(a[i].promise) ? a[i].promise().progress(c(i, n, t)).done(c(i, r, a)).fail(u.reject) : --s;
            return s || u.resolveWith(r, a),
            u.promise()
        }
    });
    var Ee;
    pe.fn.ready = function(e) {
        return pe.ready.promise().done(e),
        this
    }
    ,
    pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0,
            !0 !== e && --pe.readyWait > 0 || (Ee.resolveWith(re, [pe]),
            pe.fn.triggerHandler && (pe(re).triggerHandler("ready"),
            pe(re).off("ready"))))
        }
    }),
    pe.ready.promise = function(t) {
        if (!Ee)
            if (Ee = pe.Deferred(),
            "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll)
                e.setTimeout(pe.ready);
            else if (re.addEventListener)
                re.addEventListener("DOMContentLoaded", s),
                e.addEventListener("load", s);
            else {
                re.attachEvent("onreadystatechange", s),
                e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && re.documentElement
                } catch (e) {}
                n && n.doScroll && function t() {
                    if (!pe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return e.setTimeout(t, 50)
                        }
                        o(),
                        pe.ready()
                    }
                }()
            }
        return Ee.promise(t)
    }
    ,
    pe.ready.promise();
    var Ae;
    for (Ae in pe(de))
        break;
    de.ownFirst = "0" === Ae,
    de.inlineBlockNeedsLayout = !1,
    pe(function() {
        var e, t, n, r;
        (n = re.getElementsByTagName("body")[0]) && n.style && (t = re.createElement("div"),
        r = re.createElement("div"),
        r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(r).appendChild(t),
        "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(r))
    }),
    function() {
        var e = re.createElement("div");
        de.deleteExpando = !0;
        try {
            delete e.test
        } catch (e) {
            de.deleteExpando = !1
        }
        e = null
    }();
    var Ne = function(e) {
        var t = pe.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }
      , De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Le = /([A-Z])/g;
    pe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !c(e)
        },
        data: function(e, t, n) {
            return l(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return l(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }),
    pe.fn.extend({
        data: function(e, t) {
            var n, r, i, a = this[0], o = a && a.attributes;
            if (e === undefined) {
                if (this.length && (i = pe.data(a),
                1 === a.nodeType && !pe._data(a, "parsedAttrs"))) {
                    for (n = o.length; n--; )
                        o[n] && (r = o[n].name,
                        0 === r.indexOf("data-") && (r = pe.camelCase(r.slice(5)),
                        u(a, r, i[r])));
                    pe._data(a, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                pe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                pe.data(this, e, t)
            }) : a ? u(a, e, pe.data(a, e)) : undefined
        },
        removeData: function(e) {
            return this.each(function() {
                pe.removeData(this, e)
            })
        }
    }),
    pe.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = pe._data(e, t),
                n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t)
              , r = n.length
              , i = n.shift()
              , a = pe._queueHooks(e, t)
              , o = function() {
                pe.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete a.stop,
            i.call(e, o, a)),
            !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return pe._data(e, n) || pe._data(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    pe._removeData(e, t + "queue"),
                    pe._removeData(e, n)
                })
            })
        }
    }),
    pe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? pe.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = pe.Deferred(), a = this, o = this.length, s = function() {
                --r || i.resolveWith(a, [a])
            };
            for ("string" != typeof e && (t = e,
            e = undefined),
            e = e || "fx"; o--; )
                (n = pe._data(a[o], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    }),
    function() {
        var e;
        de.shrinkWrapBlocks = function() {
            if (null != e)
                return e;
            e = !1;
            var t, n, r;
            return (n = re.getElementsByTagName("body")[0]) && n.style ? (t = re.createElement("div"),
            r = re.createElement("div"),
            r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(r).appendChild(t),
            "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(re.createElement("div")).style.width = "5px",
            e = 3 !== t.offsetWidth),
            n.removeChild(r),
            e) : void 0
        }
    }();
    var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Re = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$","i")
      , qe = ["Top", "Right", "Bottom", "Left"]
      , He = function(e, t) {
        return e = t || e,
        "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
    }
      , Pe = function(e, t, n, r, i, a, o) {
        var s = 0
          , u = e.length
          , c = null == n;
        if ("object" === pe.type(n)) {
            i = !0;
            for (s in n)
                Pe(e, t, s, n[s], !0, a, o)
        } else if (r !== undefined && (i = !0,
        pe.isFunction(r) || (o = !0),
        c && (o ? (t.call(e, r),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(pe(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : a
    }
      , Me = /^(?:checkbox|radio)$/i
      , Oe = /<([\w:-]+)/
      , Fe = /^$|\/(?:java|ecma)script/i
      , We = /^\s+/
      , ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var e = re.createElement("div")
          , t = re.createDocumentFragment()
          , n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        de.leadingWhitespace = 3 === e.firstChild.nodeType,
        de.tbody = !e.getElementsByTagName("tbody").length,
        de.htmlSerialize = !!e.getElementsByTagName("link").length,
        de.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        t.appendChild(n),
        de.appendChecked = n.checked,
        e.innerHTML = "<textarea>x</textarea>",
        de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
        t.appendChild(e),
        n = re.createElement("input"),
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        de.noCloneEvent = !!e.addEventListener,
        e[pe.expando] = 1,
        de.attributes = !e.getAttribute(pe.expando)
    }();
    var Be = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Be.optgroup = Be.option,
    Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead,
    Be.th = Be.td;
    var Ke = /<|&#?\w+;/
      , Ue = /<tbody/i;
    !function() {
        var t, n, r = re.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (de[t] = n in e) || (r.setAttribute(n, "t"),
            de[t] = !1 === r.attributes[n].expando);
        r = null
    }();
    var Qe = /^(?:input|select|textarea)$/i
      , Xe = /^key/
      , Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ve = /^(?:focusinfocus|focusoutblur)$/
      , Ge = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var a, o, s, u, c, l, d, f, p, h, m, g = pe._data(e);
            if (g) {
                for (n.handler && (u = n,
                n = u.handler,
                i = u.selector),
                n.guid || (n.guid = pe.guid++),
                (o = g.events) || (o = g.events = {}),
                (l = g.handle) || (l = g.handle = function(e) {
                    return void 0 === pe || e && pe.event.triggered === e.type ? undefined : pe.event.dispatch.apply(l.elem, arguments)
                }
                ,
                l.elem = e),
                t = (t || "").match($e) || [""],
                s = t.length; s--; )
                    a = Ge.exec(t[s]) || [],
                    p = m = a[1],
                    h = (a[2] || "").split(".").sort(),
                    p && (c = pe.event.special[p] || {},
                    p = (i ? c.delegateType : c.bindType) || p,
                    c = pe.event.special[p] || {},
                    d = pe.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && pe.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, u),
                    (f = o[p]) || (f = o[p] = [],
                    f.delegateCount = 0,
                    c.setup && !1 !== c.setup.call(e, r, h, l) || (e.addEventListener ? e.addEventListener(p, l, !1) : e.attachEvent && e.attachEvent("on" + p, l))),
                    c.add && (c.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var a, o, s, u, c, l, d, f, p, h, m, g = pe.hasData(e) && pe._data(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match($e) || [""],
                c = t.length; c--; )
                    if (s = Ge.exec(t[c]) || [],
                    p = m = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = pe.event.special[p] || {},
                        p = (r ? d.delegateType : d.bindType) || p,
                        f = l[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        u = a = f.length; a--; )
                            o = f[a],
                            !i && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (f.splice(a, 1),
                            o.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, o));
                        u && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || pe.removeEvent(e, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            pe.event.remove(e, p + t[c], n, r, !0);
                pe.isEmptyObject(l) && (delete g.handle,
                pe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var a, o, s, u, c, l, d, f = [r || re], p = le.call(t, "type") ? t.type : t, h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = l = r = r || re,
            3 !== r.nodeType && 8 !== r.nodeType && !Ve.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            o = p.indexOf(":") < 0 && "on" + p,
            t = t[pe.expando] ? t : new pe.Event(p,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = undefined,
            t.target || (t.target = r),
            n = null == n ? [t] : pe.makeArray(n, [t]),
            c = pe.event.special[p] || {},
            i || !c.trigger || !1 !== c.trigger.apply(r, n))) {
                if (!i && !c.noBubble && !pe.isWindow(r)) {
                    for (u = c.delegateType || p,
                    Ve.test(u + p) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        l = s;
                    l === (r.ownerDocument || re) && f.push(l.defaultView || l.parentWindow || e)
                }
                for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
                    t.type = d > 1 ? u : c.bindType || p,
                    a = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"),
                    a && a.apply(s, n),
                    (a = o && s[o]) && a.apply && Ne(s) && (t.result = a.apply(s, n),
                    !1 === t.result && t.preventDefault());
                if (t.type = p,
                !i && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(f.pop(), n)) && Ne(r) && o && r[p] && !pe.isWindow(r)) {
                    l = r[o],
                    l && (r[o] = null),
                    pe.event.triggered = p;
                    try {
                        r[p]()
                    } catch (e) {}
                    pe.event.triggered = undefined,
                    l && (r[o] = l)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, n, r, i, a, o = [], s = ie.call(arguments), u = (pe._data(this, "events") || {})[e.type] || [], c = pe.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (o = pe.event.handlers.call(this, e, u),
                t = 0; (i = o[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (a = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a,
                        e.data = a.data,
                        (r = ((pe.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, s)) !== undefined && !1 === (e.result = r) && (e.preventDefault(),
                        e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, a, o = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [],
                        n = 0; n < s; n++)
                            a = t[n],
                            i = a.selector + " ",
                            r[i] === undefined && (r[i] = a.needsContext ? pe(i, this).index(u) > -1 : pe.find(i, this, null, [u]).length),
                            r[i] && r.push(a);
                        r.length && o.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }),
            o
        },
        fix: function(e) {
            if (e[pe.expando])
                return e;
            var t, n, r, i = e.type, a = e, o = this.fixHooks[i];
            for (o || (this.fixHooks[i] = o = Je.test(i) ? this.mouseHooks : Xe.test(i) ? this.keyHooks : {}),
            r = o.props ? this.props.concat(o.props) : this.props,
            e = new pe.Event(a),
            t = r.length; t--; )
                n = r[t],
                e[n] = a[n];
            return e.target || (e.target = a.srcElement || re),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            o.filter ? o.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, a = t.button, o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re,
                i = r.documentElement,
                n = r.body,
                e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o),
                e.which || a === undefined || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === w() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(r, null, t),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    pe.removeEvent = re.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    pe.Event = function(e, t) {
        if (!(this instanceof pe.Event))
            return new pe.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? v : b) : this.type = e,
        t && pe.extend(this, t),
        this.timeStamp = e && e.timeStamp || pe.now(),
        this[pe.expando] = !0
    }
    ,
    pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = v,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = v,
            e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = v,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, a = e.handleObj;
                return i && (i === r || pe.contains(r, i)) || (e.type = a.origType,
                n = a.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    de.submit || (pe.event.special.submit = {
        setup: function() {
            if (pe.nodeName(this, "form"))
                return !1;
            pe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : undefined;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }),
                pe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble,
            this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            if (pe.nodeName(this, "form"))
                return !1;
            pe.event.remove(this, "._submit")
        }
    }),
    de.change || (pe.event.special.change = {
        setup: function() {
            if (Qe.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }),
                pe.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    pe.event.simulate("change", this, e)
                })),
                !1;
            pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Qe.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }),
                pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return pe.event.remove(this, "._change"),
            !Qe.test(this.nodeName)
        }
    }),
    de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = pe._data(r, t);
                i || r.addEventListener(e, n, !0),
                pe._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = pe._data(r, t) - 1;
                i ? pe._data(r, t, i) : (r.removeEventListener(e, n, !0),
                pe._removeData(r, t))
            }
        }
    }),
    pe.fn.extend({
        on: function(e, t, n, r) {
            return x(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return x(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = undefined),
            !1 === n && (n = b),
            this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return pe.event.trigger(e, t, n, !0)
        }
    });
    var Ye = / jQuery\d+="(?:null|\d+)"/g
      , Ze = new RegExp("<(?:" + ze + ")[\\s/>]","i")
      , et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , tt = /<script|<style|<link/i
      , nt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , rt = /^true\/(.*)/
      , it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , at = p(re)
      , ot = at.appendChild(re.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, a, o, s, u = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !Ze.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (ot.innerHTML = e.outerHTML,
            ot.removeChild(a = ot.firstChild)),
            !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (r = h(a),
                s = h(e),
                o = 0; null != (i = s[o]); ++o)
                    r[o] && j(i, r[o]);
            if (t)
                if (n)
                    for (s = s || h(e),
                    r = r || h(a),
                    o = 0; null != (i = s[o]); o++)
                        C(i, r[o]);
                else
                    C(e, a);
            return r = h(a, "script"),
            r.length > 0 && m(r, !u && h(e, "script")),
            r = s = i = null,
            a
        },
        cleanData: function(e, t) {
            for (var n, r, i, a, o = 0, s = pe.expando, u = pe.cache, c = de.attributes, l = pe.event.special; null != (n = e[o]); o++)
                if ((t || Ne(n)) && (i = n[s],
                a = i && u[i])) {
                    if (a.events)
                        for (r in a.events)
                            l[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, a.handle);
                    u[i] && (delete u[i],
                    c || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s),
                    ne.push(i))
                }
        }
    }),
    pe.fn.extend({
        domManip: _,
        detach: function(e) {
            return $(this, e, !0)
        },
        remove: function(e) {
            return $(this, e)
        },
        text: function(e) {
            return Pe(this, function(e) {
                return e === undefined ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return _(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    k(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return _(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return _(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return _(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Pe(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (e === undefined)
                    return 1 === t.nodeType ? t.innerHTML.replace(Ye, "") : undefined;
                if ("string" == typeof e && !tt.test(e) && (de.htmlSerialize || !Ze.test(e)) && (de.leadingWhitespace || !We.test(e)) && !Be[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (pe.cleanData(h(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return _(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, r = 0, i = [], a = pe(e), o = a.length - 1; r <= o; r++)
                n = r === o ? this : this.clone(!0),
                pe(a[r])[t](n),
                oe.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var st, ut = {
        HTML: "block",
        BODY: "block"
    }, ct = /^margin/, lt = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$","i"), dt = function(e, t, n, r) {
        var i, a, o = {};
        for (a in t)
            o[a] = e.style[a],
            e.style[a] = t[a];
        i = n.apply(e, r || []);
        for (a in t)
            e.style[a] = o[a];
        return i
    }, ft = re.documentElement;
    !function() {
        function t() {
            var t, l, d = re.documentElement;
            d.appendChild(u),
            c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = i = s = !1,
            r = o = !0,
            e.getComputedStyle && (l = e.getComputedStyle(c),
            n = "1%" !== (l || {}).top,
            s = "2px" === (l || {}).marginLeft,
            i = "4px" === (l || {
                width: "4px"
            }).width,
            c.style.marginRight = "50%",
            r = "4px" === (l || {
                marginRight: "4px"
            }).marginRight,
            t = c.appendChild(re.createElement("div")),
            t.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            t.style.marginRight = t.style.width = "0",
            c.style.width = "1px",
            o = !parseFloat((e.getComputedStyle(t) || {}).marginRight),
            c.removeChild(t)),
            c.style.display = "none",
            a = 0 === c.getClientRects().length,
            a && (c.style.display = "",
            c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            c.childNodes[0].style.borderCollapse = "separate",
            t = c.getElementsByTagName("td"),
            t[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            (a = 0 === t[0].offsetHeight) && (t[0].style.display = "",
            t[1].style.display = "none",
            a = 0 === t[0].offsetHeight)),
            d.removeChild(u)
        }
        var n, r, i, a, o, s, u = re.createElement("div"), c = re.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5",
        de.opacity = "0.5" === c.style.opacity,
        de.cssFloat = !!c.style.cssFloat,
        c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        de.clearCloneStyle = "content-box" === c.style.backgroundClip,
        u = re.createElement("div"),
        u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        c.innerHTML = "",
        u.appendChild(c),
        de.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing,
        pe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == n && t(),
                a
            },
            boxSizingReliable: function() {
                return null == n && t(),
                i
            },
            pixelMarginRight: function() {
                return null == n && t(),
                r
            },
            pixelPosition: function() {
                return null == n && t(),
                n
            },
            reliableMarginRight: function() {
                return null == n && t(),
                o
            },
            reliableMarginLeft: function() {
                return null == n && t(),
                s
            }
        }))
    }();
    var pt, ht, mt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
    ,
    ht = function(e, t, n) {
        var r, i, a, o, s = e.style;
        return n = n || pt(e),
        o = n ? n.getPropertyValue(t) || n[t] : undefined,
        "" !== o && o !== undefined || pe.contains(e.ownerDocument, e) || (o = pe.style(e, t)),
        n && !de.pixelMarginRight() && lt.test(o) && ct.test(t) && (r = s.width,
        i = s.minWidth,
        a = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = o,
        o = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = a),
        o === undefined ? o : o + ""
    }
    ) : ft.currentStyle && (pt = function(e) {
        return e.currentStyle
    }
    ,
    ht = function(e, t, n) {
        var r, i, a, o, s = e.style;
        return n = n || pt(e),
        o = n ? n[t] : undefined,
        null == o && s && s[t] && (o = s[t]),
        lt.test(o) && !mt.test(t) && (r = s.left,
        i = e.runtimeStyle,
        a = i && i.left,
        a && (i.left = e.currentStyle.left),
        s.left = "fontSize" === t ? "1em" : o,
        o = s.pixelLeft + "px",
        s.left = r,
        a && (i.left = a)),
        o === undefined ? o : o + "" || "auto"
    }
    );
    var gt = /alpha\([^)]*\)/i
      , yt = /opacity\s*=\s*([^)]*)/i
      , vt = /^(none|table(?!-c[ea]).+)/
      , bt = new RegExp("^(" + Ie + ")(.*)$","i")
      , wt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , xt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , kt = ["Webkit", "O", "Moz", "ms"]
      , Tt = re.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ht(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, a, o, s = pe.camelCase(t), u = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = D(s) || s),
                o = pe.cssHooks[t] || pe.cssHooks[s],
                n === undefined)
                    return o && "get"in o && (i = o.get(e, !1, r)) !== undefined ? i : u[t];
                if (a = typeof n,
                "string" === a && (i = Re.exec(n)) && i[1] && (n = f(e, t, i),
                a = "number"),
                null != n && n === n && ("number" === a && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")),
                de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                !(o && "set"in o && (n = o.set(e, n, r)) === undefined)))
                    try {
                        u[t] = n
                    } catch (e) {}
            }
        },
        css: function(e, t, n, r) {
            var i, a, o, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = D(s) || s),
            o = pe.cssHooks[t] || pe.cssHooks[s],
            o && "get"in o && (a = o.get(e, !0, n)),
            a === undefined && (a = ht(e, t, r)),
            "normal" === a && t in xt && (a = xt[t]),
            "" === n || n ? (i = parseFloat(a),
            !0 === n || isFinite(i) ? i || 0 : a) : a
        }
    }),
    pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return vt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, wt, function() {
                        return q(e, t, r)
                    }) : q(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && pt(e);
                return I(e, n, r ? R(e, t, r, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    de.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , a = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === pe.trim(a.replace(gt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = gt.test(a) ? a.replace(gt, i) : a + " " + i)
        }
    }),
    pe.cssHooks.marginRight = N(de.reliableMarginRight, function(e, t) {
        if (t)
            return dt(e, {
                display: "inline-block"
            }, ht, [e, "marginRight"])
    }),
    pe.cssHooks.marginLeft = N(de.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(ht(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
    }),
    pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + qe[r] + t] = a[r] || a[r - 2] || a[0];
                return i
            }
        },
        ct.test(e) || (pe.cssHooks[e + t].set = I)
    }),
    pe.fn.extend({
        css: function(e, t) {
            return Pe(this, function(e, t, n) {
                var r, i, a = {}, o = 0;
                if (pe.isArray(t)) {
                    for (r = pt(e),
                    i = t.length; o < i; o++)
                        a[t[o]] = pe.css(e, t[o], !1, r);
                    return a
                }
                return n !== undefined ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return L(this, !0)
        },
        hide: function() {
            return L(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                He(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }),
    pe.Tween = H,
    H.prototype = {
        constructor: H,
        init: function(e, t, n, r, i, a) {
            this.elem = e,
            this.prop = n,
            this.easing = i || pe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = a || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : H.propHooks._default.set(this),
            this
        }
    },
    H.prototype.init.prototype = H.prototype,
    H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    pe.fx = H.prototype.init,
    pe.fx.step = {};
    var St, Ct, jt = /^(?:toggle|show|hide)$/, _t = /queueHooks$/;
    pe.Animation = pe.extend(z, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return f(n.elem, e, Re.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            pe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match($e);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                z.tweeners[n] = z.tweeners[n] || [],
                z.tweeners[n].unshift(t)
        },
        prefilters: [F],
        prefilter: function(e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }),
    pe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? pe.extend({}, e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            pe.isFunction(r.old) && r.old.call(this),
            r.queue && pe.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    pe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(He).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = pe.isEmptyObject(e)
              , a = pe.speed(t, n, r)
              , o = function() {
                var t = z(this, pe.extend({}, e), a);
                (i || pe._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o,
            i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = undefined),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , a = pe.timers
                  , o = pe._data(this);
                if (i)
                    o[i] && o[i].stop && r(o[i]);
                else
                    for (i in o)
                        o[i] && o[i].stop && _t.test(i) && r(o[i]);
                for (i = a.length; i--; )
                    a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n),
                    t = !1,
                    a.splice(i, 1));
                !t && n || pe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = pe._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], a = pe.timers, o = r ? r.length : 0;
                for (n.finish = !0,
                pe.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = a.length; t--; )
                    a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0),
                    a.splice(t, 1));
                for (t = 0; t < o; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    pe.each(["toggle", "show", "hide"], function(e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, r, i)
        }
    }),
    pe.each({
        slideDown: M("show"),
        slideUp: M("hide"),
        slideToggle: M("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        pe.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    pe.timers = [],
    pe.fx.tick = function() {
        var e, t = pe.timers, n = 0;
        for (St = pe.now(); n < t.length; n++)
            (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || pe.fx.stop(),
        St = undefined
    }
    ,
    pe.fx.timer = function(e) {
        pe.timers.push(e),
        e() ? pe.fx.start() : pe.timers.pop()
    }
    ,
    pe.fx.interval = 13,
    pe.fx.start = function() {
        Ct || (Ct = e.setInterval(pe.fx.tick, pe.fx.interval))
    }
    ,
    pe.fx.stop = function() {
        e.clearInterval(Ct),
        Ct = null
    }
    ,
    pe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    pe.fn.delay = function(t, n) {
        return t = pe.fx ? pe.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e, t = re.createElement("input"), n = re.createElement("div"), r = re.createElement("select"), i = r.appendChild(re.createElement("option"));
        n = re.createElement("div"),
        n.setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        t.setAttribute("type", "checkbox"),
        n.appendChild(t),
        e = n.getElementsByTagName("a")[0],
        e.style.cssText = "top:1px",
        de.getSetAttribute = "t" !== n.className,
        de.style = /top/.test(e.getAttribute("style")),
        de.hrefNormalized = "/a" === e.getAttribute("href"),
        de.checkOn = !!t.value,
        de.optSelected = i.selected,
        de.enctype = !!re.createElement("form").enctype,
        r.disabled = !0,
        de.optDisabled = !i.disabled,
        t = re.createElement("input"),
        t.setAttribute("value", ""),
        de.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        de.radioValue = "t" === t.value
    }();
    var $t = /\r/g
      , Et = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = pe.isFunction(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, pe(this).val()) : e,
                        null == i ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set"in t && t.set(this, i, "value") !== undefined || (this.value = i))
                    });
                if (i)
                    return (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()]) && "get"in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value,
                    "string" == typeof n ? n.replace($t, "") : null == n ? "" : n)
            }
        }
    }),
    pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(Et, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || i < 0, o = a ? null : [], s = a ? i + 1 : r.length, u = i < 0 ? s : a ? i : 0; u < s; u++)
                        if (n = r[u],
                        (n.selected || u === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(),
                            a)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, a = pe.makeArray(t), o = i.length; o--; )
                        if (r = i[o],
                        pe.inArray(pe.valHooks.option.get(r), a) > -1)
                            try {
                                r.selected = n = !0
                            } catch (e) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (pe.isArray(t))
                    return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        },
        de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var At, Nt, Dt = pe.expr.attrHandle, Lt = /^(?:checked|selected)$/i, It = de.getSetAttribute, Rt = de.input;
    pe.fn.extend({
        attr: function(e, t) {
            return Pe(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }),
    pe.extend({
        attr: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === a && pe.isXMLDoc(e) || (t = t.toLowerCase(),
                i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Nt : At)),
                n !== undefined ? null === n ? void pe.removeAttr(e, t) : i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = pe.find.attr(e, t),
                null == r ? undefined : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, a = t && t.match($e);
            if (a && 1 === e.nodeType)
                for (; n = a[i++]; )
                    r = pe.propFix[n] || n,
                    pe.expr.match.bool.test(n) ? Rt && It || !Lt.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""),
                    e.removeAttribute(It ? n : r)
        }
    }),
    Nt = {
        set: function(e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : Rt && It || !Lt.test(n) ? e.setAttribute(!It && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Dt[t] || pe.find.attr;
        Rt && It || !Lt.test(t) ? Dt[t] = function(e, t, r) {
            var i, a;
            return r || (a = Dt[t],
            Dt[t] = i,
            i = null != n(e, t, r) ? t.toLowerCase() : null,
            Dt[t] = a),
            i
        }
        : Dt[t] = function(e, t, n) {
            if (!n)
                return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Rt && It || (pe.attrHooks.value = {
        set: function(e, t, n) {
            if (!pe.nodeName(e, "input"))
                return At && At.set(e, t, n);
            e.defaultValue = t
        }
    }),
    It || (At = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
            r.value = t += "",
            "value" === n || t === e.getAttribute(n))
                return t
        }
    },
    Dt.id = Dt.name = Dt.coords = function(e, t, n) {
        var r;
        if (!n)
            return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }
    ,
    pe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified)
                return n.value
        },
        set: At.set
    },
    pe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            At.set(e, "" !== t && t, n)
        }
    },
    pe.each(["width", "height"], function(e, t) {
        pe.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n)
                    return e.setAttribute(t, "auto"),
                    n
            }
        }
    })),
    de.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || undefined
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var qt = /^(?:input|select|textarea|button|object)$/i
      , Ht = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Pe(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pe.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = undefined,
                    delete this[e]
                } catch (e) {}
            })
        }
    }),
    pe.extend({
        prop: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return 1 === a && pe.isXMLDoc(e) || (t = pe.propFix[t] || t,
                i = pe.propHooks[t]),
                n !== undefined ? i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : qt.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    de.hrefNormalized || pe.each(["href", "src"], function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }),
    de.enctype || (pe.propFix.enctype = "encoding");
    var Pt = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, a, o, s, u = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).addClass(e.call(this, t, B(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match($e) || []; n = this[u++]; )
                    if (i = B(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
                        for (o = 0; a = t[o++]; )
                            r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                        s = pe.trim(r),
                        i !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, a, o, s, u = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).removeClass(e.call(this, t, B(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match($e) || []; n = this[u++]; )
                    if (i = B(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
                        for (o = 0; a = t[o++]; )
                            for (; r.indexOf(" " + a + " ") > -1; )
                                r = r.replace(" " + a + " ", " ");
                        s = pe.trim(r),
                        i !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, B(this), t), t)
            }) : this.each(function() {
                var t, r, i, a;
                if ("string" === n)
                    for (r = 0,
                    i = pe(this),
                    a = e.match($e) || []; t = a[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    e !== undefined && "boolean" !== n || (t = B(this),
                    t && pe._data(this, "__className__", t),
                    pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + B(n) + " ").replace(Pt, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    }),
    pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Mt = e.location
      , Ot = pe.now()
      , Ft = /\?/
      , Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, r = null, i = pe.trim(t + "");
        return i && !pe.trim(i.replace(Wt, function(e, t, i, a) {
            return n && t && (r = 0),
            0 === r ? e : (n = i || t,
            r += !a - !i,
            "")
        })) ? Function("return " + i)() : pe.error("Invalid JSON: " + t)
    }
    ,
    pe.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (r = new e.DOMParser,
            n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (e) {
            n = undefined
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t),
        n
    }
    ;
    var zt = /#.*$/
      , Bt = /([?&])_=[^&]*/
      , Kt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Qt = /^(?:GET|HEAD)$/
      , Xt = /^\/\//
      , Jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Vt = {}
      , Gt = {}
      , Yt = "*/".concat("*")
      , Zt = Mt.href
      , en = Jt.exec(Zt.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Zt,
            type: "GET",
            isLocal: Ut.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Q(Q(e, pe.ajaxSettings), t) : Q(pe.ajaxSettings, e)
        },
        ajaxPrefilter: K(Vt),
        ajaxTransport: K(Gt),
        ajax: function(t, n) {
            function r(t, n, r, i) {
                var a, d, v, b, x, T = n;
                2 !== w && (w = 2,
                u && e.clearTimeout(u),
                l = undefined,
                s = i || "",
                k.readyState = t > 0 ? 4 : 0,
                a = t >= 200 && t < 300 || 304 === t,
                r && (b = X(f, k, r)),
                b = J(f, b, k, a),
                a ? (f.ifModified && (x = k.getResponseHeader("Last-Modified"),
                x && (pe.lastModified[o] = x),
                (x = k.getResponseHeader("etag")) && (pe.etag[o] = x)),
                204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state,
                d = b.data,
                v = b.error,
                a = !v)) : (v = T,
                !t && T || (T = "error",
                t < 0 && (t = 0))),
                k.status = t,
                k.statusText = (n || T) + "",
                a ? m.resolveWith(p, [d, T, k]) : m.rejectWith(p, [k, T, v]),
                k.statusCode(y),
                y = undefined,
                c && h.trigger(a ? "ajaxSuccess" : "ajaxError", [k, f, a ? d : v]),
                g.fireWith(p, [k, T]),
                c && (h.trigger("ajaxComplete", [k, f]),
                --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = undefined),
            n = n || {};
            var i, a, o, s, u, c, l, d, f = pe.ajaxSetup({}, n), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event, m = pe.Deferred(), g = pe.Callbacks("once memory"), y = f.statusCode || {}, v = {}, b = {}, w = 0, x = "canceled", k = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!d)
                            for (d = {}; t = Kt.exec(s); )
                                d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? s : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = b[n] = b[n] || e,
                    v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (w < 2)
                            for (t in e)
                                y[t] = [y[t], e[t]];
                        else
                            k.always(e[k.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || x;
                    return l && l.abort(t),
                    r(0, t),
                    this
                }
            };
            if (m.promise(k).complete = g.add,
            k.success = k.done,
            k.error = k.fail,
            f.url = ((t || f.url || Zt) + "").replace(zt, "").replace(Xt, en[1] + "//"),
            f.type = n.method || n.type || f.method || f.type,
            f.dataTypes = pe.trim(f.dataType || "*").toLowerCase().match($e) || [""],
            null == f.crossDomain && (i = Jt.exec(f.url.toLowerCase()),
            f.crossDomain = !(!i || i[1] === en[1] && i[2] === en[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))),
            f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)),
            U(Vt, f, n, k),
            2 === w)
                return k;
            c = pe.event && f.global,
            c && 0 == pe.active++ && pe.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Qt.test(f.type),
            o = f.url,
            f.hasContent || (f.data && (o = f.url += (Ft.test(o) ? "&" : "?") + f.data,
            delete f.data),
            !1 === f.cache && (f.url = Bt.test(o) ? o.replace(Bt, "$1_=" + Ot++) : o + (Ft.test(o) ? "&" : "?") + "_=" + Ot++)),
            f.ifModified && (pe.lastModified[o] && k.setRequestHeader("If-Modified-Since", pe.lastModified[o]),
            pe.etag[o] && k.setRequestHeader("If-None-Match", pe.etag[o])),
            (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && k.setRequestHeader("Content-Type", f.contentType),
            k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : f.accepts["*"]);
            for (a in f.headers)
                k.setRequestHeader(a, f.headers[a]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, k, f) || 2 === w))
                return k.abort();
            x = "abort";
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            })
                k[a](f[a]);
            if (l = U(Gt, f, n, k)) {
                if (k.readyState = 1,
                c && h.trigger("ajaxSend", [k, f]),
                2 === w)
                    return k;
                f.async && f.timeout > 0 && (u = e.setTimeout(function() {
                    k.abort("timeout")
                }, f.timeout));
                try {
                    w = 1,
                    l.send(v, r)
                } catch (e) {
                    if (!(w < 2))
                        throw e;
                    r(-1, e)
                }
            } else
                r(-1, "No Transport");
            return k
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, undefined, t, "script")
        }
    }),
    pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, r, i) {
            return pe.isFunction(n) && (i = i || r,
            r = n,
            n = undefined),
            pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, pe.isPlainObject(e) && e))
        }
    }),
    pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    pe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : G(e)
    }
    ,
    pe.expr.filters.visible = function(e) {
        return !pe.expr.filters.hidden(e)
    }
    ;
    var tn = /%20/g
      , nn = /\[\]$/
      , rn = /\r?\n/g
      , an = /^(?:submit|button|image|reset|file)$/i
      , on = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = pe.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = pe.ajaxSettings && pe.ajaxSettings.traditional),
        pe.isArray(e) || e.jquery && !pe.isPlainObject(e))
            pe.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Y(n, e[n], t, i);
        return r.join("&").replace(tn, "+")
    }
    ,
    pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && on.test(this.nodeName) && !an.test(e) && (this.checked || !Me.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(rn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(rn, "\r\n")
                }
            }).get()
        }
    }),
    pe.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
        return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    }
    : Z;
    var sn = 0
      , un = {}
      , cn = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in un)
            un[e](undefined, !0)
    }),
    de.cors = !!cn && "withCredentials"in cn,
    cn = de.ajax = !!cn,
    cn && pe.ajaxTransport(function(t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function(r, i) {
                    var a, o = t.xhr(), s = ++sn;
                    if (o.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            o[a] = t.xhrFields[a];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (a in r)
                        r[a] !== undefined && o.setRequestHeader(a, r[a] + "");
                    o.send(t.hasContent && t.data || null),
                    n = function(e, r) {
                        var a, u, c;
                        if (n && (r || 4 === o.readyState))
                            if (delete un[s],
                            n = undefined,
                            o.onreadystatechange = pe.noop,
                            r)
                                4 !== o.readyState && o.abort();
                            else {
                                c = {},
                                a = o.status,
                                "string" == typeof o.responseText && (c.text = o.responseText);
                                try {
                                    u = o.statusText
                                } catch (e) {
                                    u = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        c && i(a, u, c, o.getAllResponseHeaders())
                    }
                    ,
                    t.async ? 4 === o.readyState ? e.setTimeout(n) : o.onreadystatechange = un[s] = n : n()
                },
                abort: function() {
                    n && n(undefined, !0)
                }
            }
        }
    }),
    pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e),
                e
            }
        }
    }),
    pe.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = re.head || pe("head")[0] || re.documentElement;
            return {
                send: function(r, i) {
                    t = re.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        n || i(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(undefined, !0)
                }
            }
        }
    });
    var ln = []
      , dn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ln.pop() || pe.expando + "_" + Ot++;
            return this[e] = !0,
            e
        }
    }),
    pe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, a, o, s = !1 !== t.jsonp && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(dn, "$1" + i) : !1 !== t.jsonp && (t.url += (Ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return o || pe.error(i + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            a = e[i],
            e[i] = function() {
                o = arguments
            }
            ,
            r.always(function() {
                a === undefined ? pe(e).removeProp(i) : e[i] = a,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                ln.push(i)),
                o && pe.isFunction(a) && a(o[0]),
                o = a = undefined
            }),
            "script"
    }),
    pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || re;
        var r = ke.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = y([e], t, i),
        i && i.length && pe(i).remove(),
        pe.merge([], r.childNodes))
    }
    ;
    var fn = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && fn)
            return fn.apply(this, arguments);
        var r, i, a, o = this, s = e.indexOf(" ");
        return s > -1 && (r = pe.trim(e.slice(s, e.length)),
        e = e.slice(0, s)),
        pe.isFunction(t) ? (n = t,
        t = undefined) : t && "object" == typeof t && (i = "POST"),
        o.length > 0 && pe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments,
            o.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            o.each(function() {
                n.apply(this, a || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    pe.expr.filters.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    pe.offset = {
        setOffset: function(e, t, n) {
            var r, i, a, o, s, u, c, l = pe.css(e, "position"), d = pe(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = d.offset(),
            a = pe.css(e, "top"),
            u = pe.css(e, "left"),
            c = ("absolute" === l || "fixed" === l) && pe.inArray("auto", [a, u]) > -1,
            c ? (r = d.position(),
            o = r.top,
            i = r.left) : (o = parseFloat(a) || 0,
            i = parseFloat(u) || 0),
            pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + o),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : d.css(f)
        }
    },
    pe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return e === undefined ? this : this.each(function(t) {
                    pe.offset.setOffset(this, e, t)
                });
            var t, n, r = {
                top: 0,
                left: 0
            }, i = this[0], a = i && i.ownerDocument;
            if (a)
                return t = a.documentElement,
                pe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()),
                n = te(a),
                {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                pe.nodeName(e[0], "html") || (n = e.offset()),
                n.top += pe.css(e[0], "borderTopWidth", !0),
                n.left += pe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - pe.css(r, "marginTop", !0),
                    left: t.left - n.left - pe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position"); )
                    e = e.offsetParent;
                return e || ft
            })
        }
    }),
    pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function(r) {
            return Pe(this, function(e, r, i) {
                var a = te(e);
                if (i === undefined)
                    return a ? t in a ? a[t] : a.document.documentElement[r] : e[r];
                a ? a.scrollTo(n ? pe(a).scrollLeft() : i, n ? i : pe(a).scrollTop()) : e[r] = i
            }, e, r, arguments.length, null)
        }
    }),
    pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = N(de.pixelPosition, function(e, n) {
            if (n)
                return n = ht(e, t),
                lt.test(n) ? pe(e).position()[t] + "px" : n
        })
    }),
    pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            pe.fn[r] = function(r, i) {
                var a = arguments.length && (n || "boolean" != typeof r)
                  , o = n || (!0 === r || !0 === i ? "margin" : "border");
                return Pe(this, function(t, n, r) {
                    var i;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? pe.css(t, n, o) : pe.style(t, n, r, o)
                }, t, a ? r : undefined, a, null)
            }
        })
    }),
    pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    pe.fn.size = function() {
        return this.length
    }
    ,
    pe.fn.andSelf = pe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var pn = e.jQuery
      , hn = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = hn),
        t && e.jQuery === pe && (e.jQuery = pn),
        pe
    }
    ,
    t || (e.jQuery = e.$ = pe),
    pe
}),
function(e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, r = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r),
            !1 !== i.result
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== t && !1 !== e.data("remote")
        },
        handleRemote: function(r) {
            var i, a, o, s, u, c;
            if (n.fire(r, "ajax:before")) {
                if (s = r.data("with-credentials") || null,
                u = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType,
                r.is("form")) {
                    i = r.data("ujs:submit-button-formmethod") || r.attr("method"),
                    a = r.data("ujs:submit-button-formaction") || r.attr("action"),
                    o = e(r[0]).serializeArray();
                    var l = r.data("ujs:submit-button");
                    l && (o.push(l),
                    r.data("ujs:submit-button", null)),
                    r.data("ujs:submit-button-formmethod", null),
                    r.data("ujs:submit-button-formaction", null)
                } else
                    r.is(n.inputChangeSelector) ? (i = r.data("method"),
                    a = r.data("url"),
                    o = r.serialize(),
                    r.data("params") && (o = o + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get",
                    a = r.data("url"),
                    o = r.serialize(),
                    r.data("params") && (o = o + "&" + r.data("params"))) : (i = r.data("method"),
                    a = n.href(r),
                    o = r.data("params") || null);
                return c = {
                    type: i || "GET",
                    data: o,
                    dataType: u,
                    beforeSend: function(e, i) {
                        if (i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script),
                        !n.fire(r, "ajax:beforeSend", [e, i]))
                            return !1;
                        r.trigger("ajax:send", e)
                    },
                    success: function(e, t, n) {
                        r.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        r.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        r.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(a)
                },
                s && (c.xhrFields = {
                    withCredentials: s
                }),
                a && (c.url = a),
                n.ajax(c)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e,
                n.href = n.href,
                !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (e) {
                return !0
            }
        },
        handleMethod: function(r) {
            var i = n.href(r)
              , a = r.data("method")
              , o = r.attr("target")
              , s = n.csrfToken()
              , u = n.csrfParam()
              , c = e('<form method="post" action="' + i + '"></form>')
              , l = '<input name="_method" value="' + a + '" type="hidden" />';
            u === t || s === t || n.isCrossDomain(i) || (l += '<input name="' + u + '" value="' + s + '" type="hidden" />'),
            o && c.attr("target", o),
            c.hide().append(l).appendTo("body"),
            c.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each(function() {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var n, r;
            n = e.is("button") ? "html" : "val",
            r = e.data("disable-with"),
            r !== t && (e.data("ujs:enable-with", e[n]()),
            e[n](r)),
            e.prop("disabled", !0),
            e.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each(function() {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")),
            e.removeData("ujs:enable-with")),
            e.prop("disabled", !1),
            e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, r = e.data("confirm"), i = !1;
            if (!r)
                return !0;
            if (n.fire(e, "confirm")) {
                try {
                    i = n.confirm(r)
                } catch (e) {
                    (console.error || console.log).call(console, e.stack || e)
                }
                t = n.fire(e, "confirm:complete", [i])
            }
            return i && t
        },
        blankInputs: function(t, n, r) {
            var i, a, o, s, u = e(), c = n || "input,textarea", l = t.find(c), d = {};
            return l.each(function() {
                i = e(this),
                i.is("input[type=radio]") ? (s = i.attr("name"),
                d[s] || (0 === t.find('input[type=radio]:checked[name="' + s + '"]').length && (o = t.find('input[type=radio][name="' + s + '"]'),
                u = u.add(o)),
                d[s] = s)) : (a = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === r && (u = u.add(i))
            }),
            !!u.length && u
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
        },
        disableElement: function(e) {
            var r = e.data("disable-with");
            r !== t && (e.data("ujs:enable-with", e.html()),
            e.html(r)),
            e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            }),
            e.data("ujs:disabled", !0)
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")),
            e.removeData("ujs:enable-with")),
            e.unbind("click.railsDisable"),
            e.removeData("ujs:disabled")
        }
    },
    n.fire(r, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, r) {
        e.crossDomain || n.CSRFProtection(r)
    }),
    e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }),
        e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }),
    r.on("ajax:complete", n.linkDisableSelector, function() {
        n.enableElement(e(this))
    }),
    r.on("ajax:complete", n.buttonDisableSelector, function() {
        n.enableFormElement(e(this))
    }),
    r.on("click.rails", n.linkClickSelector, function(t) {
        var r = e(this)
          , i = r.data("method")
          , a = r.data("params")
          , o = t.metaKey || t.ctrlKey;
        if (!n.allowAction(r))
            return n.stopEverything(t);
        if (!o && r.is(n.linkDisableSelector) && n.disableElement(r),
        n.isRemote(r)) {
            if (o && (!i || "GET" === i) && !a)
                return !0;
            var s = n.handleRemote(r);
            return !1 === s ? n.enableElement(r) : s.fail(function() {
                n.enableElement(r)
            }),
            !1
        }
        return i ? (n.handleMethod(r),
        !1) : void 0
    }),
    r.on("click.rails", n.buttonClickSelector, function(t) {
        var r = e(this);
        if (!n.allowAction(r) || !n.isRemote(r))
            return n.stopEverything(t);
        r.is(n.buttonDisableSelector) && n.disableFormElement(r);
        var i = n.handleRemote(r);
        return !1 === i ? n.enableFormElement(r) : i.fail(function() {
            n.enableFormElement(r)
        }),
        !1
    }),
    r.on("change.rails", n.inputChangeSelector, function(t) {
        var r = e(this);
        return n.allowAction(r) && n.isRemote(r) ? (n.handleRemote(r),
        !1) : n.stopEverything(t)
    }),
    r.on("submit.rails", n.formSubmitSelector, function(r) {
        var i, a, o = e(this), s = n.isRemote(o);
        if (!n.allowAction(o))
            return n.stopEverything(r);
        if (o.attr("novalidate") === t)
            if (o.data("ujs:formnovalidate-button") === t) {
                if ((i = n.blankInputs(o, n.requiredInputSelector, !1)) && n.fire(o, "ajax:aborted:required", [i]))
                    return n.stopEverything(r)
            } else
                o.data("ujs:formnovalidate-button", t);
        if (s) {
            if (a = n.nonBlankInputs(o, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(o)
                }, 13);
                var u = n.fire(o, "ajax:aborted:file", [a]);
                return u || setTimeout(function() {
                    n.enableFormElements(o)
                }, 13),
                u
            }
            return n.handleRemote(o),
            !1
        }
        setTimeout(function() {
            n.disableFormElements(o)
        }, 13)
    }),
    r.on("click.rails", n.formInputClickSelector, function(t) {
        var r = e(this);
        if (!n.allowAction(r))
            return n.stopEverything(t);
        var i = r.attr("name")
          , a = i ? {
            name: i,
            value: r.val()
        } : null
          , o = r.closest("form");
        0 === o.length && (o = e("#" + r.attr("form"))),
        o.data("ujs:submit-button", a),
        o.data("ujs:formnovalidate-button", r.attr("formnovalidate")),
        o.data("ujs:submit-button-formaction", r.attr("formaction")),
        o.data("ujs:submit-button-formmethod", r.attr("formmethod"))
    }),
    r.on("ajax:send.rails", n.formSubmitSelector, function(t) {
        this === t.target && n.disableFormElements(e(this))
    }),
    r.on("ajax:complete.rails", n.formSubmitSelector, function(t) {
        this === t.target && n.enableFormElements(e(this))
    }),
    e(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    e.ui = e.ui || {},
    e.ui.version = "1.12.1";
    var t = "ui-effects-"
      , n = "ui-effects-style"
      , r = "ui-effects-animated"
      , i = e;
    e.effects = {
        effect: {}
    },
    function(e, t) {
        function n(e, t, n) {
            var r = l[t.type] || {};
            return null == e ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e),
            isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : e > r.max ? r.max : e)
        }
        function r(n) {
            var r = u()
              , i = r._rgba = [];
            return n = n.toLowerCase(),
            p(s, function(e, a) {
                var o, s = a.re.exec(n), u = s && a.parse(s), l = a.space || "rgba";
                return u ? (o = r[l](u),
                r[c[l].cache] = o[c[l].cache],
                i = r._rgba = o._rgba,
                !1) : t
            }),
            i.length ? ("0,0,0,0" === i.join() && e.extend(i, a.transparent),
            r) : a[n]
        }
        function i(e, t, n) {
            return n = (n + 1) % 1,
            1 > 6 * n ? e + 6 * (t - e) * n : 1 > 2 * n ? t : 2 > 3 * n ? e + 6 * (t - e) * (2 / 3 - n) : e
        }
        var a, o = /^([\-+])=\s*(\d+\.?\d*)/, s = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }], u = e.Color = function(t, n, r, i) {
            return new e.Color.fn.parse(t,n,r,i)
        }
        , c = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, l = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, d = u.support = {}, f = e("<p>")[0], p = e.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)",
        d.rgba = f.style.backgroundColor.indexOf("rgba") > -1,
        p(c, function(e, t) {
            t.cache = "_" + e,
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        u.fn = e.extend(u.prototype, {
            parse: function(i, o, s, l) {
                if (i === t)
                    return this._rgba = [null, null, null, null],
                    this;
                (i.jquery || i.nodeType) && (i = e(i).css(o),
                o = t);
                var d = this
                  , f = e.type(i)
                  , h = this._rgba = [];
                return o !== t && (i = [i, o, s, l],
                f = "array"),
                "string" === f ? this.parse(r(i) || a._default) : "array" === f ? (p(c.rgba.props, function(e, t) {
                    h[t.idx] = n(i[t.idx], t)
                }),
                this) : "object" === f ? (i instanceof u ? p(c, function(e, t) {
                    i[t.cache] && (d[t.cache] = i[t.cache].slice())
                }) : p(c, function(t, r) {
                    var a = r.cache;
                    p(r.props, function(e, t) {
                        if (!d[a] && r.to) {
                            if ("alpha" === e || null == i[e])
                                return;
                            d[a] = r.to(d._rgba)
                        }
                        d[a][t.idx] = n(i[e], t, !0)
                    }),
                    d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1,
                    r.from && (d._rgba = r.from(d[a])))
                }),
                this) : t
            },
            is: function(e) {
                var n = u(e)
                  , r = !0
                  , i = this;
                return p(c, function(e, a) {
                    var o, s = n[a.cache];
                    return s && (o = i[a.cache] || a.to && a.to(i._rgba) || [],
                    p(a.props, function(e, n) {
                        return null != s[n.idx] ? r = s[n.idx] === o[n.idx] : t
                    })),
                    r
                }),
                r
            },
            _space: function() {
                var e = []
                  , t = this;
                return p(c, function(n, r) {
                    t[r.cache] && e.push(n)
                }),
                e.pop()
            },
            transition: function(e, t) {
                var r = u(e)
                  , i = r._space()
                  , a = c[i]
                  , o = 0 === this.alpha() ? u("transparent") : this
                  , s = o[a.cache] || a.to(o._rgba)
                  , d = s.slice();
                return r = r[a.cache],
                p(a.props, function(e, i) {
                    var a = i.idx
                      , o = s[a]
                      , u = r[a]
                      , c = l[i.type] || {};
                    null !== u && (null === o ? d[a] = u : (c.mod && (u - o > c.mod / 2 ? o += c.mod : o - u > c.mod / 2 && (o -= c.mod)),
                    d[a] = n((u - o) * t + o, i)))
                }),
                this[i](d)
            },
            blend: function(t) {
                if (1 === this._rgba[3])
                    return this;
                var n = this._rgba.slice()
                  , r = n.pop()
                  , i = u(t)._rgba;
                return u(e.map(n, function(e, t) {
                    return (1 - r) * i[t] + r * e
                }))
            },
            toRgbaString: function() {
                var t = "rgba("
                  , n = e.map(this._rgba, function(e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e
                });
                return 1 === n[3] && (n.pop(),
                t = "rgb("),
                t + n.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla("
                  , n = e.map(this.hsla(), function(e, t) {
                    return null == e && (e = t > 2 ? 1 : 0),
                    t && 3 > t && (e = Math.round(100 * e) + "%"),
                    e
                });
                return 1 === n[3] && (n.pop(),
                t = "hsl("),
                t + n.join() + ")"
            },
            toHexString: function(t) {
                var n = this._rgba.slice()
                  , r = n.pop();
                return t && n.push(~~(255 * r)),
                "#" + e.map(n, function(e) {
                    return e = (e || 0).toString(16),
                    1 === e.length ? "0" + e : e
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }),
        u.fn.parse.prototype = u.fn,
        c.hsla.to = function(e) {
            if (null == e[0] || null == e[1] || null == e[2])
                return [null, null, null, e[3]];
            var t, n, r = e[0] / 255, i = e[1] / 255, a = e[2] / 255, o = e[3], s = Math.max(r, i, a), u = Math.min(r, i, a), c = s - u, l = s + u, d = .5 * l;
            return t = u === s ? 0 : r === s ? 60 * (i - a) / c + 360 : i === s ? 60 * (a - r) / c + 120 : 60 * (r - i) / c + 240,
            n = 0 === c ? 0 : .5 >= d ? c / l : c / (2 - l),
            [Math.round(t) % 360, n, d, null == o ? 1 : o]
        }
        ,
        c.hsla.from = function(e) {
            if (null == e[0] || null == e[1] || null == e[2])
                return [null, null, null, e[3]];
            var t = e[0] / 360
              , n = e[1]
              , r = e[2]
              , a = e[3]
              , o = .5 >= r ? r * (1 + n) : r + n - r * n
              , s = 2 * r - o;
            return [Math.round(255 * i(s, o, t + 1 / 3)), Math.round(255 * i(s, o, t)), Math.round(255 * i(s, o, t - 1 / 3)), a]
        }
        ,
        p(c, function(r, i) {
            var a = i.props
              , s = i.cache
              , c = i.to
              , l = i.from;
            u.fn[r] = function(r) {
                if (c && !this[s] && (this[s] = c(this._rgba)),
                r === t)
                    return this[s].slice();
                var i, o = e.type(r), d = "array" === o || "object" === o ? r : arguments, f = this[s].slice();
                return p(a, function(e, t) {
                    var r = d["object" === o ? e : t.idx];
                    null == r && (r = f[t.idx]),
                    f[t.idx] = n(r, t)
                }),
                l ? (i = u(l(f)),
                i[s] = f,
                i) : u(f)
            }
            ,
            p(a, function(t, n) {
                u.fn[t] || (u.fn[t] = function(i) {
                    var a, s = e.type(i), u = "alpha" === t ? this._hsla ? "hsla" : "rgba" : r, c = this[u](), l = c[n.idx];
                    return "undefined" === s ? l : ("function" === s && (i = i.call(this, l),
                    s = e.type(i)),
                    null == i && n.empty ? this : ("string" === s && (a = o.exec(i)) && (i = l + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1)),
                    c[n.idx] = i,
                    this[u](c)))
                }
                )
            })
        }),
        u.hook = function(t) {
            var n = t.split(" ");
            p(n, function(t, n) {
                e.cssHooks[n] = {
                    set: function(t, i) {
                        var a, o, s = "";
                        if ("transparent" !== i && ("string" !== e.type(i) || (a = r(i)))) {
                            if (i = u(a || i),
                            !d.rgba && 1 !== i._rgba[3]) {
                                for (o = "backgroundColor" === n ? t.parentNode : t; ("" === s || "transparent" === s) && o && o.style; )
                                    try {
                                        s = e.css(o, "backgroundColor"),
                                        o = o.parentNode
                                    } catch (e) {}
                                i = i.blend(s && "transparent" !== s ? s : "_default")
                            }
                            i = i.toRgbaString()
                        }
                        try {
                            t.style[n] = i
                        } catch (e) {}
                    }
                },
                e.fx.step[n] = function(t) {
                    t.colorInit || (t.start = u(t.elem, n),
                    t.end = u(t.end),
                    t.colorInit = !0),
                    e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }
        ,
        u.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
        e.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return p(["Top", "Right", "Bottom", "Left"], function(n, r) {
                    t["border" + r + "Color"] = e
                }),
                t
            }
        },
        a = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(i),
    function() {
        function t(t) {
            var n, r, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, a = {};
            if (i && i.length && i[0] && i[i[0]])
                for (r = i.length; r--; )
                    n = i[r],
                    "string" == typeof i[n] && (a[e.camelCase(n)] = i[n]);
            else
                for (n in i)
                    "string" == typeof i[n] && (a[n] = i[n]);
            return a
        }
        function n(t, n) {
            var r, i, o = {};
            for (r in n)
                i = n[r],
                t[r] !== i && (a[r] || (e.fx.step[r] || !isNaN(parseFloat(i))) && (o[r] = i));
            return o
        }
        var r = ["add", "remove", "toggle"]
          , a = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
            e.fx.step[n] = function(e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (i.style(e.elem, n, e.end),
                e.setAttr = !0)
            }
        }),
        e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
        ),
        e.effects.animateClass = function(i, a, o, s) {
            var u = e.speed(a, o, s);
            return this.queue(function() {
                var a, o = e(this), s = o.attr("class") || "", c = u.children ? o.find("*").addBack() : o;
                c = c.map(function() {
                    return {
                        el: e(this),
                        start: t(this)
                    }
                }),
                a = function() {
                    e.each(r, function(e, t) {
                        i[t] && o[t + "Class"](i[t])
                    })
                }
                ,
                a(),
                c = c.map(function() {
                    return this.end = t(this.el[0]),
                    this.diff = n(this.start, this.end),
                    this
                }),
                o.attr("class", s),
                c = c.map(function() {
                    var t = this
                      , n = e.Deferred()
                      , r = e.extend({}, u, {
                        queue: !1,
                        complete: function() {
                            n.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, r),
                    n.promise()
                }),
                e.when.apply(e, c.get()).done(function() {
                    a(),
                    e.each(arguments, function() {
                        var t = this.el;
                        e.each(this.diff, function(e) {
                            t.css(e, "")
                        })
                    }),
                    u.complete.call(o[0])
                })
            })
        }
        ,
        e.fn.extend({
            addClass: function(t) {
                return function(n, r, i, a) {
                    return r ? e.effects.animateClass.call(this, {
                        add: n
                    }, r, i, a) : t.apply(this, arguments)
                }
            }(e.fn.addClass),
            removeClass: function(t) {
                return function(n, r, i, a) {
                    return arguments.length > 1 ? e.effects.animateClass.call(this, {
                        remove: n
                    }, r, i, a) : t.apply(this, arguments)
                }
            }(e.fn.removeClass),
            toggleClass: function(t) {
                return function(n, r, i, a, o) {
                    return "boolean" == typeof r || void 0 === r ? i ? e.effects.animateClass.call(this, r ? {
                        add: n
                    } : {
                        remove: n
                    }, i, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                        toggle: n
                    }, r, i, a)
                }
            }(e.fn.toggleClass),
            switchClass: function(t, n, r, i, a) {
                return e.effects.animateClass.call(this, {
                    add: n,
                    remove: t
                }, r, i, a)
            }
        })
    }(),
    function() {
        function i(t, n, r, i) {
            return e.isPlainObject(t) && (n = t,
            t = t.effect),
            t = {
                effect: t
            },
            null == n && (n = {}),
            e.isFunction(n) && (i = n,
            r = null,
            n = {}),
            ("number" == typeof n || e.fx.speeds[n]) && (i = r,
            r = n,
            n = {}),
            e.isFunction(r) && (i = r,
            r = null),
            n && e.extend(t, n),
            r = r || n.duration,
            t.duration = e.fx.off ? 0 : "number" == typeof r ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default,
            t.complete = i || n.complete,
            t
        }
        function a(t) {
            return !(t && "number" != typeof t && !e.fx.speeds[t]) || ("string" == typeof t && !e.effects.effect[t] || (!!e.isFunction(t) || "object" == typeof t && !t.effect))
        }
        function o(e, t) {
            var n = t.outerWidth()
              , r = t.outerHeight()
              , i = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/
              , a = i.exec(e) || ["", 0, n, r, 0];
            return {
                top: parseFloat(a[1]) || 0,
                right: "auto" === a[2] ? n : parseFloat(a[2]),
                bottom: "auto" === a[3] ? r : parseFloat(a[3]),
                left: parseFloat(a[4]) || 0
            }
        }
        e.expr && e.expr.filters && e.expr.filters.animated && (e.expr.filters.animated = function(t) {
            return function(n) {
                return !!e(n).data(r) || t(n)
            }
        }(e.expr.filters.animated)),
        !1 !== e.uiBackCompat && e.extend(e.effects, {
            save: function(e, n) {
                for (var r = 0, i = n.length; i > r; r++)
                    null !== n[r] && e.data(t + n[r], e[0].style[n[r]])
            },
            restore: function(e, n) {
                for (var r, i = 0, a = n.length; a > i; i++)
                    null !== n[i] && (r = e.data(t + n[i]),
                    e.css(n[i], r))
            },
            setMode: function(e, t) {
                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"),
                t
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper"))
                    return t.parent();
                var n = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    "float": t.css("float")
                }
                  , r = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , i = {
                    width: t.width(),
                    height: t.height()
                }
                  , a = document.activeElement;
                try {
                    a.id
                } catch (e) {
                    a = document.body
                }
                return t.wrap(r),
                (t[0] === a || e.contains(t[0], a)) && e(a).trigger("focus"),
                r = t.parent(),
                "static" === t.css("position") ? (r.css({
                    position: "relative"
                }),
                t.css({
                    position: "relative"
                })) : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }),
                e.each(["top", "left", "bottom", "right"], function(e, r) {
                    n[r] = t.css(r),
                    isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                }),
                t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                t.css(i),
                r.css(n).show()
            },
            removeWrapper: function(t) {
                var n = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
                (t[0] === n || e.contains(t[0], n)) && e(n).trigger("focus")),
                t
            }
        }),
        e.extend(e.effects, {
            version: "1.12.1",
            define: function(t, n, r) {
                return r || (r = n,
                n = "effect"),
                e.effects.effect[t] = r,
                e.effects.effect[t].mode = n,
                r
            },
            scaledDimensions: function(e, t, n) {
                if (0 === t)
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                var r = "horizontal" !== n ? (t || 100) / 100 : 1
                  , i = "vertical" !== n ? (t || 100) / 100 : 1;
                return {
                    height: e.height() * i,
                    width: e.width() * r,
                    outerHeight: e.outerHeight() * i,
                    outerWidth: e.outerWidth() * r
                }
            },
            clipToBox: function(e) {
                return {
                    width: e.clip.right - e.clip.left,
                    height: e.clip.bottom - e.clip.top,
                    left: e.clip.left,
                    top: e.clip.top
                }
            },
            unshift: function(e, t, n) {
                var r = e.queue();
                t > 1 && r.splice.apply(r, [1, 0].concat(r.splice(t, n))),
                e.dequeue()
            },
            saveStyle: function(e) {
                e.data(n, e[0].style.cssText)
            },
            restoreStyle: function(e) {
                e[0].style.cssText = e.data(n) || "",
                e.removeData(n)
            },
            mode: function(e, t) {
                var n = e.is(":hidden");
                return "toggle" === t && (t = n ? "show" : "hide"),
                (n ? "hide" === t : "show" === t) && (t = "none"),
                t
            },
            getBaseline: function(e, t) {
                var n, r;
                switch (e[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
                }
                switch (e[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default:
                    r = e[1] / t.width
                }
                return {
                    x: r,
                    y: n
                }
            },
            createPlaceholder: function(n) {
                var r, i = n.css("position"), a = n.position();
                return n.css({
                    marginTop: n.css("marginTop"),
                    marginBottom: n.css("marginBottom"),
                    marginLeft: n.css("marginLeft"),
                    marginRight: n.css("marginRight")
                }).outerWidth(n.outerWidth()).outerHeight(n.outerHeight()),
                /^(static|relative)/.test(i) && (i = "absolute",
                r = e("<" + n[0].nodeName + ">").insertAfter(n).css({
                    display: /^(inline|ruby)/.test(n.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: n.css("marginTop"),
                    marginBottom: n.css("marginBottom"),
                    marginLeft: n.css("marginLeft"),
                    marginRight: n.css("marginRight"),
                    "float": n.css("float")
                }).outerWidth(n.outerWidth()).outerHeight(n.outerHeight()).addClass("ui-effects-placeholder"),
                n.data(t + "placeholder", r)),
                n.css({
                    position: i,
                    left: a.left,
                    top: a.top
                }),
                r
            },
            removePlaceholder: function(e) {
                var n = t + "placeholder"
                  , r = e.data(n);
                r && (r.remove(),
                e.removeData(n))
            },
            cleanUp: function(t) {
                e.effects.restoreStyle(t),
                e.effects.removePlaceholder(t)
            },
            setTransition: function(t, n, r, i) {
                return i = i || {},
                e.each(n, function(e, n) {
                    var a = t.cssUnit(n);
                    a[0] > 0 && (i[n] = a[0] * r + a[1])
                }),
                i
            }
        }),
        e.fn.extend({
            effect: function() {
                function t(t) {
                    function i() {
                        u.removeData(r),
                        e.effects.cleanUp(u),
                        "hide" === n.mode && u.hide(),
                        s()
                    }
                    function s() {
                        e.isFunction(c) && c.call(u[0]),
                        e.isFunction(t) && t()
                    }
                    var u = e(this);
                    n.mode = d.shift(),
                    !1 === e.uiBackCompat || o ? "none" === n.mode ? (u[l](),
                    s()) : a.call(u[0], n, i) : (u.is(":hidden") ? "hide" === l : "show" === l) ? (u[l](),
                    s()) : a.call(u[0], n, s)
                }
                var n = i.apply(this, arguments)
                  , a = e.effects.effect[n.effect]
                  , o = a.mode
                  , s = n.queue
                  , u = s || "fx"
                  , c = n.complete
                  , l = n.mode
                  , d = []
                  , f = function(t) {
                    var n = e(this)
                      , i = e.effects.mode(n, l) || o;
                    n.data(r, !0),
                    d.push(i),
                    o && ("show" === i || i === o && "hide" === i) && n.show(),
                    o && "none" === i || e.effects.saveStyle(n),
                    e.isFunction(t) && t()
                };
                return e.fx.off || !a ? l ? this[l](n.duration, c) : this.each(function() {
                    c && c.call(this)
                }) : !1 === s ? this.each(f).each(t) : this.queue(u, f).queue(u, t)
            },
            show: function(e) {
                return function(t) {
                    if (a(t))
                        return e.apply(this, arguments);
                    var n = i.apply(this, arguments);
                    return n.mode = "show",
                    this.effect.call(this, n)
                }
            }(e.fn.show),
            hide: function(e) {
                return function(t) {
                    if (a(t))
                        return e.apply(this, arguments);
                    var n = i.apply(this, arguments);
                    return n.mode = "hide",
                    this.effect.call(this, n)
                }
            }(e.fn.hide),
            toggle: function(e) {
                return function(t) {
                    if (a(t) || "boolean" == typeof t)
                        return e.apply(this, arguments);
                    var n = i.apply(this, arguments);
                    return n.mode = "toggle",
                    this.effect.call(this, n)
                }
            }(e.fn.toggle),
            cssUnit: function(t) {
                var n = this.css(t)
                  , r = [];
                return e.each(["em", "px", "%", "pt"], function(e, t) {
                    n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                }),
                r
            },
            cssClip: function(e) {
                return e ? this.css("clip", "rect(" + e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px)") : o(this.css("clip"), this)
            },
            transfer: function(t, n) {
                var r = e(this)
                  , i = e(t.to)
                  , a = "fixed" === i.css("position")
                  , o = e("body")
                  , s = a ? o.scrollTop() : 0
                  , u = a ? o.scrollLeft() : 0
                  , c = i.offset()
                  , l = {
                    top: c.top - s,
                    left: c.left - u,
                    height: i.innerHeight(),
                    width: i.innerWidth()
                }
                  , d = r.offset()
                  , f = e("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                    top: d.top - s,
                    left: d.left - u,
                    height: r.innerHeight(),
                    width: r.innerWidth(),
                    position: a ? "fixed" : "absolute"
                }).animate(l, t.duration, t.easing, function() {
                    f.remove(),
                    e.isFunction(n) && n()
                })
            }
        }),
        e.fx.step.clip = function(t) {
            t.clipInit || (t.start = e(t.elem).cssClip(),
            "string" == typeof t.end && (t.end = o(t.end, t.elem)),
            t.clipInit = !0),
            e(t.elem).cssClip({
                top: t.pos * (t.end.top - t.start.top) + t.start.top,
                right: t.pos * (t.end.right - t.start.right) + t.start.right,
                bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                left: t.pos * (t.end.left - t.start.left) + t.start.left
            })
        }
    }(),
    function() {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
            t[n] = function(t) {
                return Math.pow(t, e + 2)
            }
        }),
        e.extend(t, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function(e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function(e) {
                for (var t, n = 4; ((t = Math.pow(2, --n)) - 1) / 11 > e; )
                    ;
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }),
        e.each(t, function(t, n) {
            e.easing["easeIn" + t] = n,
            e.easing["easeOut" + t] = function(e) {
                return 1 - n(1 - e)
            }
            ,
            e.easing["easeInOut" + t] = function(e) {
                return .5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2
            }
        })
    }();
    e.effects;
    e.effects.define("blind", "hide", function(t, n) {
        var r = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        }
          , i = e(this)
          , a = t.direction || "up"
          , o = i.cssClip()
          , s = {
            clip: e.extend({}, o)
        }
          , u = e.effects.createPlaceholder(i);
        s.clip[r[a][0]] = s.clip[r[a][1]],
        "show" === t.mode && (i.cssClip(s.clip),
        u && u.css(e.effects.clipToBox(s)),
        s.clip = o),
        u && u.animate(e.effects.clipToBox(s), t.duration, t.easing),
        i.animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        })
    }),
    e.effects.define("bounce", function(t, n) {
        var r, i, a, o = e(this), s = t.mode, u = "hide" === s, c = "show" === s, l = t.direction || "up", d = t.distance, f = t.times || 5, p = 2 * f + (c || u ? 1 : 0), h = t.duration / p, m = t.easing, g = "up" === l || "down" === l ? "top" : "left", y = "up" === l || "left" === l, v = 0, b = o.queue().length;
        for (e.effects.createPlaceholder(o),
        a = o.css(g),
        d || (d = o["top" === g ? "outerHeight" : "outerWidth"]() / 3),
        c && (i = {
            opacity: 1
        },
        i[g] = a,
        o.css("opacity", 0).css(g, y ? 2 * -d : 2 * d).animate(i, h, m)),
        u && (d /= Math.pow(2, f - 1)),
        i = {},
        i[g] = a; f > v; v++)
            r = {},
            r[g] = (y ? "-=" : "+=") + d,
            o.animate(r, h, m).animate(i, h, m),
            d = u ? 2 * d : d / 2;
        u && (r = {
            opacity: 0
        },
        r[g] = (y ? "-=" : "+=") + d,
        o.animate(r, h, m)),
        o.queue(n),
        e.effects.unshift(o, b, p + 1)
    }),
    e.effects.define("clip", "hide", function(t, n) {
        var r, i = {}, a = e(this), o = t.direction || "vertical", s = "both" === o, u = s || "horizontal" === o, c = s || "vertical" === o;
        r = a.cssClip(),
        i.clip = {
            top: c ? (r.bottom - r.top) / 2 : r.top,
            right: u ? (r.right - r.left) / 2 : r.right,
            bottom: c ? (r.bottom - r.top) / 2 : r.bottom,
            left: u ? (r.right - r.left) / 2 : r.left
        },
        e.effects.createPlaceholder(a),
        "show" === t.mode && (a.cssClip(i.clip),
        i.clip = r),
        a.animate(i, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        })
    }),
    e.effects.define("drop", "hide", function(t, n) {
        var r, i = e(this), a = t.mode, o = "show" === a, s = t.direction || "left", u = "up" === s || "down" === s ? "top" : "left", c = "up" === s || "left" === s ? "-=" : "+=", l = "+=" === c ? "-=" : "+=", d = {
            opacity: 0
        };
        e.effects.createPlaceholder(i),
        r = t.distance || i["top" === u ? "outerHeight" : "outerWidth"](!0) / 2,
        d[u] = c + r,
        o && (i.css(d),
        d[u] = l + r,
        d.opacity = 1),
        i.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        })
    }),
    e.effects.define("explode", "hide", function(t, n) {
        function r() {
            b.push(this),
            b.length === d * f && i()
        }
        function i() {
            p.css({
                visibility: "visible"
            }),
            e(b).remove(),
            n()
        }
        var a, o, s, u, c, l, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, f = d, p = e(this), h = t.mode, m = "show" === h, g = p.show().css("visibility", "hidden").offset(), y = Math.ceil(p.outerWidth() / f), v = Math.ceil(p.outerHeight() / d), b = [];
        for (a = 0; d > a; a++)
            for (u = g.top + a * v,
            l = a - (d - 1) / 2,
            o = 0; f > o; o++)
                s = g.left + o * y,
                c = o - (f - 1) / 2,
                p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * y,
                    top: -a * v
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: y,
                    height: v,
                    left: s + (m ? c * y : 0),
                    top: u + (m ? l * v : 0),
                    opacity: m ? 0 : 1
                }).animate({
                    left: s + (m ? 0 : c * y),
                    top: u + (m ? 0 : l * v),
                    opacity: m ? 1 : 0
                }, t.duration || 500, t.easing, r)
    }),
    e.effects.define("fade", "toggle", function(t, n) {
        var r = "show" === t.mode;
        e(this).css("opacity", r ? 0 : 1).animate({
            opacity: r ? 1 : 0
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        })
    }),
    e.effects.define("fold", "hide", function(t, n) {
        var r = e(this)
          , i = t.mode
          , a = "show" === i
          , o = "hide" === i
          , s = t.size || 15
          , u = /([0-9]+)%/.exec(s)
          , c = !!t.horizFirst
          , l = c ? ["right", "bottom"] : ["bottom", "right"]
          , d = t.duration / 2
          , f = e.effects.createPlaceholder(r)
          , p = r.cssClip()
          , h = {
            clip: e.extend({}, p)
        }
          , m = {
            clip: e.extend({}, p)
        }
          , g = [p[l[0]], p[l[1]]]
          , y = r.queue().length;
        u && (s = parseInt(u[1], 10) / 100 * g[o ? 0 : 1]),
        h.clip[l[0]] = s,
        m.clip[l[0]] = s,
        m.clip[l[1]] = 0,
        a && (r.cssClip(m.clip),
        f && f.css(e.effects.clipToBox(m)),
        m.clip = p),
        r.queue(function(n) {
            f && f.animate(e.effects.clipToBox(h), d, t.easing).animate(e.effects.clipToBox(m), d, t.easing),
            n()
        }).animate(h, d, t.easing).animate(m, d, t.easing).queue(n),
        e.effects.unshift(r, y, 4)
    }),
    e.effects.define("highlight", "show", function(t, n) {
        var r = e(this)
          , i = {
            backgroundColor: r.css("backgroundColor")
        };
        "hide" === t.mode && (i.opacity = 0),
        e.effects.saveStyle(r),
        r.css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(i, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        })
    }),
    e.effects.define("size", function(t, n) {
        var r, i, a, o = e(this), s = ["fontSize"], u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], l = t.mode, d = "effect" !== l, f = t.scale || "both", p = t.origin || ["middle", "center"], h = o.css("position"), m = o.position(), g = e.effects.scaledDimensions(o), y = t.from || g, v = t.to || e.effects.scaledDimensions(o, 0);
        e.effects.createPlaceholder(o),
        "show" === l && (a = y,
        y = v,
        v = a),
        i = {
            from: {
                y: y.height / g.height,
                x: y.width / g.width
            },
            to: {
                y: v.height / g.height,
                x: v.width / g.width
            }
        },
        ("box" === f || "both" === f) && (i.from.y !== i.to.y && (y = e.effects.setTransition(o, u, i.from.y, y),
        v = e.effects.setTransition(o, u, i.to.y, v)),
        i.from.x !== i.to.x && (y = e.effects.setTransition(o, c, i.from.x, y),
        v = e.effects.setTransition(o, c, i.to.x, v))),
        ("content" === f || "both" === f) && i.from.y !== i.to.y && (y = e.effects.setTransition(o, s, i.from.y, y),
        v = e.effects.setTransition(o, s, i.to.y, v)),
        p && (r = e.effects.getBaseline(p, g),
        y.top = (g.outerHeight - y.outerHeight) * r.y + m.top,
        y.left = (g.outerWidth - y.outerWidth) * r.x + m.left,
        v.top = (g.outerHeight - v.outerHeight) * r.y + m.top,
        v.left = (g.outerWidth - v.outerWidth) * r.x + m.left),
        o.css(y),
        ("content" === f || "both" === f) && (u = u.concat(["marginTop", "marginBottom"]).concat(s),
        c = c.concat(["marginLeft", "marginRight"]),
        o.find("*[width]").each(function() {
            var n = e(this)
              , r = e.effects.scaledDimensions(n)
              , a = {
                height: r.height * i.from.y,
                width: r.width * i.from.x,
                outerHeight: r.outerHeight * i.from.y,
                outerWidth: r.outerWidth * i.from.x
            }
              , o = {
                height: r.height * i.to.y,
                width: r.width * i.to.x,
                outerHeight: r.height * i.to.y,
                outerWidth: r.width * i.to.x
            };
            i.from.y !== i.to.y && (a = e.effects.setTransition(n, u, i.from.y, a),
            o = e.effects.setTransition(n, u, i.to.y, o)),
            i.from.x !== i.to.x && (a = e.effects.setTransition(n, c, i.from.x, a),
            o = e.effects.setTransition(n, c, i.to.x, o)),
            d && e.effects.saveStyle(n),
            n.css(a),
            n.animate(o, t.duration, t.easing, function() {
                d && e.effects.restoreStyle(n)
            })
        })),
        o.animate(v, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                var t = o.offset();
                0 === v.opacity && o.css("opacity", y.opacity),
                d || (o.css("position", "static" === h ? "relative" : h).offset(t),
                e.effects.saveStyle(o)),
                n()
            }
        })
    }),
    e.effects.define("scale", function(t, n) {
        var r = e(this)
          , i = t.mode
          , a = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "effect" !== i ? 0 : 100)
          , o = e.extend(!0, {
            from: e.effects.scaledDimensions(r),
            to: e.effects.scaledDimensions(r, a, t.direction || "both"),
            origin: t.origin || ["middle", "center"]
        }, t);
        t.fade && (o.from.opacity = 1,
        o.to.opacity = 0),
        e.effects.effect.size.call(this, o, n)
    }),
    e.effects.define("puff", "hide", function(t, n) {
        var r = e.extend(!0, {}, t, {
            fade: !0,
            percent: parseInt(t.percent, 10) || 150
        });
        e.effects.effect.scale.call(this, r, n)
    }),
    e.effects.define("pulsate", "show", function(t, n) {
        var r = e(this)
          , i = t.mode
          , a = "show" === i
          , o = "hide" === i
          , s = a || o
          , u = 2 * (t.times || 5) + (s ? 1 : 0)
          , c = t.duration / u
          , l = 0
          , d = 1
          , f = r.queue().length;
        for ((a || !r.is(":visible")) && (r.css("opacity", 0).show(),
        l = 1); u > d; d++)
            r.animate({
                opacity: l
            }, c, t.easing),
            l = 1 - l;
        r.animate({
            opacity: l
        }, c, t.easing),
        r.queue(n),
        e.effects.unshift(r, f, u + 1)
    }),
    e.effects.define("shake", function(t, n) {
        var r = 1
          , i = e(this)
          , a = t.direction || "left"
          , o = t.distance || 20
          , s = t.times || 3
          , u = 2 * s + 1
          , c = Math.round(t.duration / u)
          , l = "up" === a || "down" === a ? "top" : "left"
          , d = "up" === a || "left" === a
          , f = {}
          , p = {}
          , h = {}
          , m = i.queue().length;
        for (e.effects.createPlaceholder(i),
        f[l] = (d ? "-=" : "+=") + o,
        p[l] = (d ? "+=" : "-=") + 2 * o,
        h[l] = (d ? "-=" : "+=") + 2 * o,
        i.animate(f, c, t.easing); s > r; r++)
            i.animate(p, c, t.easing).animate(h, c, t.easing);
        i.animate(p, c, t.easing).animate(f, c / 2, t.easing).queue(n),
        e.effects.unshift(i, m, u + 1)
    }),
    e.effects.define("slide", "show", function(t, n) {
        var r, i, a = e(this), o = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"]
        }, s = t.mode, u = t.direction || "left", c = "up" === u || "down" === u ? "top" : "left", l = "up" === u || "left" === u, d = t.distance || a["top" === c ? "outerHeight" : "outerWidth"](!0), f = {};
        e.effects.createPlaceholder(a),
        r = a.cssClip(),
        i = a.position()[c],
        f[c] = (l ? -1 : 1) * d + i,
        f.clip = a.cssClip(),
        f.clip[o[u][1]] = f.clip[o[u][0]],
        "show" === s && (a.cssClip(f.clip),
        a.css(c, f[c]),
        f.clip = r,
        f[c] = i),
        a.animate(f, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        })
    });
    !1 !== e.uiBackCompat && e.effects.define("transfer", function(t, n) {
        e(this).transfer(t, n)
    })
}),
function() {
    function e() {
        var e = !1;
        if ("localStorage"in window)
            try {
                window.localStorage.setItem("_tmptest", "tmpval"),
                e = !0,
                window.localStorage.removeItem("_tmptest")
            } catch (e) {}
        if (e)
            try {
                window.localStorage && (x = window.localStorage,
                S = "localStorage",
                _ = x.jStorage_update)
            } catch (e) {}
        else if ("globalStorage"in window)
            try {
                window.globalStorage && (x = window.globalStorage[window.location.hostname],
                S = "globalStorage",
                _ = x.jStorage_update)
            } catch (e) {}
        else {
            if (k = document.createElement("link"),
            !k.addBehavior)
                return void (k = null);
            k.style.behavior = "url(#default#userData)",
            document.getElementsByTagName("head")[0].appendChild(k);
            try {
                k.load("jStorage")
            } catch (e) {
                k.setAttribute("jStorage", "{}"),
                k.save("jStorage"),
                k.load("jStorage")
            }
            var t = "{}";
            try {
                t = k.getAttribute("jStorage")
            } catch (e) {}
            try {
                _ = k.getAttribute("jStorage_update")
            } catch (e) {}
            x.jStorage = t,
            S = "userDataBehavior"
        }
        s(),
        l(),
        n(),
        d(),
        "addEventListener"in window && window.addEventListener("pageshow", function(e) {
            e.persisted && r()
        }, !1)
    }
    function t() {
        var e = "{}";
        if ("userDataBehavior" == S) {
            k.load("jStorage");
            try {
                e = k.getAttribute("jStorage")
            } catch (e) {}
            try {
                _ = k.getAttribute("jStorage_update")
            } catch (e) {}
            x.jStorage = e
        }
        s(),
        l(),
        d()
    }
    function n() {
        "localStorage" == S || "globalStorage" == S ? "addEventListener"in window ? window.addEventListener("storage", r, !1) : document.attachEvent("onstorage", r) : "userDataBehavior" == S && setInterval(r, 1e3)
    }
    function r() {
        var e;
        clearTimeout(j),
        j = setTimeout(function() {
            if ("localStorage" == S || "globalStorage" == S)
                e = x.jStorage_update;
            else if ("userDataBehavior" == S) {
                k.load("jStorage");
                try {
                    e = k.getAttribute("jStorage_update")
                } catch (e) {}
            }
            e && e != _ && (_ = e,
            i())
        }, 25)
    }
    function i() {
        var e, n = v.parse(v.stringify(w.__jstorage_meta.CRC32));
        t(),
        e = v.parse(v.stringify(w.__jstorage_meta.CRC32));
        var r, i = [], o = [];
        for (r in n)
            if (n.hasOwnProperty(r)) {
                if (!e[r]) {
                    o.push(r);
                    continue
                }
                n[r] != e[r] && "2." == String(n[r]).substr(0, 2) && i.push(r)
            }
        for (r in e)
            e.hasOwnProperty(r) && (n[r] || i.push(r));
        a(i, "updated"),
        a(o, "deleted")
    }
    function a(e, t) {
        if (e = [].concat(e || []),
        "flushed" == t) {
            e = [];
            for (var n in C)
                C.hasOwnProperty(n) && e.push(n);
            t = "deleted"
        }
        for (var r = 0, i = e.length; r < i; r++) {
            if (C[e[r]])
                for (var a = 0, o = C[e[r]].length; a < o; a++)
                    C[e[r]][a](e[r], t);
            if (C["*"])
                for (var a = 0, o = C["*"].length; a < o; a++)
                    C["*"][a](e[r], t)
        }
    }
    function o() {
        var e = (+new Date).toString();
        "localStorage" == S || "globalStorage" == S ? x.jStorage_update = e : "userDataBehavior" == S && (k.setAttribute("jStorage_update", e),
        k.save("jStorage")),
        r()
    }
    function s() {
        if (x.jStorage)
            try {
                w = v.parse(String(x.jStorage))
            } catch (e) {
                x.jStorage = "{}"
            }
        else
            x.jStorage = "{}";
        T = x.jStorage ? String(x.jStorage).length : 0,
        w.__jstorage_meta || (w.__jstorage_meta = {}),
        w.__jstorage_meta.CRC32 || (w.__jstorage_meta.CRC32 = {})
    }
    function u() {
        p();
        try {
            x.jStorage = v.stringify(w),
            k && (k.setAttribute("jStorage", x.jStorage),
            k.save("jStorage")),
            T = x.jStorage ? String(x.jStorage).length : 0
        } catch (e) {}
    }
    function c(e) {
        if (!e || "string" != typeof e && "number" != typeof e)
            throw new TypeError("Key name must be string or numeric");
        if ("__jstorage_meta" == e)
            throw new TypeError("Reserved key name");
        return !0
    }
    function l() {
        var e, t, n, r, i = Infinity, s = !1, c = [];
        if (clearTimeout(b),
        w.__jstorage_meta && "object" == typeof w.__jstorage_meta.TTL) {
            e = +new Date,
            n = w.__jstorage_meta.TTL,
            r = w.__jstorage_meta.CRC32;
            for (t in n)
                n.hasOwnProperty(t) && (n[t] <= e ? (delete n[t],
                delete r[t],
                delete w[t],
                s = !0,
                c.push(t)) : n[t] < i && (i = n[t]));
            i != Infinity && (b = setTimeout(l, i - e)),
            s && (u(),
            o(),
            a(c, "deleted"))
        }
    }
    function d() {
        var e;
        if (w.__jstorage_meta.PubSub) {
            var t, n = E;
            for (e = w.__jstorage_meta.PubSub.length - 1; e >= 0; e--)
                t = w.__jstorage_meta.PubSub[e],
                t[0] > E && (n = t[0],
                f(t[1], t[2]));
            E = n
        }
    }
    function f(e, t) {
        if ($[e])
            for (var n = 0, r = $[e].length; n < r; n++)
                $[e][n](e, v.parse(v.stringify(t)))
    }
    function p() {
        if (w.__jstorage_meta.PubSub) {
            for (var e = +new Date - 2e3, t = 0, n = w.__jstorage_meta.PubSub.length; t < n; t++)
                if (w.__jstorage_meta.PubSub[t][0] <= e) {
                    w.__jstorage_meta.PubSub.splice(t, w.__jstorage_meta.PubSub.length - t);
                    break
                }
            w.__jstorage_meta.PubSub.length || delete w.__jstorage_meta.PubSub
        }
    }
    function h(e, t) {
        w.__jstorage_meta || (w.__jstorage_meta = {}),
        w.__jstorage_meta.PubSub || (w.__jstorage_meta.PubSub = []),
        w.__jstorage_meta.PubSub.unshift([+new Date, e, t]),
        u(),
        o()
    }
    function m(e, t) {
        for (var n, r = e.length, i = t ^ r, a = 0; r >= 4; )
            n = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24,
            n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16),
            n ^= n >>> 24,
            n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16),
            i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16) ^ n,
            r -= 4,
            ++a;
        switch (r) {
        case 3:
            i ^= (255 & e.charCodeAt(a + 2)) << 16;
        case 2:
            i ^= (255 & e.charCodeAt(a + 1)) << 8;
        case 1:
            i ^= 255 & e.charCodeAt(a),
            i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16)
        }
        return i ^= i >>> 13,
        i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16),
        (i ^= i >>> 15) >>> 0
    }
    var g = "0.4.3"
      , y = window.jQuery || window.$ || (window.$ = {})
      , v = {
        parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function(e) {
            return String(e).evalJSON()
        }
        || y.parseJSON || y.evalJSON,
        stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || y.toJSON
    };
    if (!v.parse || !v.stringify)
        throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    var b, w = {
        __jstorage_meta: {
            CRC32: {}
        }
    }, x = {
        jStorage: "{}"
    }, k = null, T = 0, S = !1, C = {}, j = !1, _ = 0, $ = {}, E = +new Date, A = {
        isXML: function(e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return !!t && "HTML" !== t.nodeName
        },
        encode: function(e) {
            if (!this.isXML(e))
                return !1;
            try {
                return (new XMLSerializer).serializeToString(e)
            } catch (t) {
                try {
                    return e.xml
                } catch (e) {}
            }
            return !1
        },
        decode: function(e) {
            var t, n = "DOMParser"in window && (new DOMParser).parseFromString || window.ActiveXObject && function(e) {
                var t = new ActiveXObject("Microsoft.XMLDOM");
                return t.async = "false",
                t.loadXML(e),
                t
            }
            ;
            return !!n && (t = n.call("DOMParser"in window && new DOMParser || window, e, "text/xml"),
            !!this.isXML(t) && t)
        }
    };
    y.jStorage = {
        version: g,
        set: function(e, t, n) {
            if (c(e),
            n = n || {},
            void 0 === t)
                return this.deleteKey(e),
                t;
            if (A.isXML(t))
                t = {
                    _is_xml: !0,
                    xml: A.encode(t)
                };
            else {
                if ("function" == typeof t)
                    return undefined;
                t && "object" == typeof t && (t = v.parse(v.stringify(t)))
            }
            return w[e] = t,
            w.__jstorage_meta.CRC32[e] = "2." + m(v.stringify(t), 2538058380),
            this.setTTL(e, n.TTL || 0),
            a(e, "updated"),
            t
        },
        get: function(e, t) {
            return c(e),
            e in w ? w[e] && "object" == typeof w[e] && w[e]._is_xml ? A.decode(w[e].xml) : w[e] : void 0 === t ? null : t
        },
        deleteKey: function(e) {
            return c(e),
            e in w && (delete w[e],
            "object" == typeof w.__jstorage_meta.TTL && e in w.__jstorage_meta.TTL && delete w.__jstorage_meta.TTL[e],
            delete w.__jstorage_meta.CRC32[e],
            u(),
            o(),
            a(e, "deleted"),
            !0)
        },
        setTTL: function(e, t) {
            var n = +new Date;
            return c(e),
            t = Number(t) || 0,
            e in w && (w.__jstorage_meta.TTL || (w.__jstorage_meta.TTL = {}),
            t > 0 ? w.__jstorage_meta.TTL[e] = n + t : delete w.__jstorage_meta.TTL[e],
            u(),
            l(),
            o(),
            !0)
        },
        getTTL: function(e) {
            var t = +new Date;
            return c(e),
            e in w && w.__jstorage_meta.TTL && w.__jstorage_meta.TTL[e] ? w.__jstorage_meta.TTL[e] - t || 0 : 0
        },
        flush: function() {
            return w = {
                __jstorage_meta: {
                    CRC32: {}
                }
            },
            u(),
            o(),
            a(null, "flushed"),
            !0
        },
        storageObj: function() {
            function e() {}
            return e.prototype = w,
            new e
        },
        index: function() {
            var e, t = [];
            for (e in w)
                w.hasOwnProperty(e) && "__jstorage_meta" != e && t.push(e);
            return t
        },
        storageSize: function() {
            return T
        },
        currentBackend: function() {
            return S
        },
        storageAvailable: function() {
            return !!S
        },
        listenKeyChange: function(e, t) {
            c(e),
            C[e] || (C[e] = []),
            C[e].push(t)
        },
        stopListening: function(e, t) {
            if (c(e),
            C[e]) {
                if (!t)
                    return void delete C[e];
                for (var n = C[e].length - 1; n >= 0; n--)
                    C[e][n] == t && C[e].splice(n, 1)
            }
        },
        subscribe: function(e, t) {
            if (!(e = (e || "").toString()))
                throw new TypeError("Channel not defined");
            $[e] || ($[e] = []),
            $[e].push(t)
        },
        publish: function(e, t) {
            if (!(e = (e || "").toString()))
                throw new TypeError("Channel not defined");
            h(e, t)
        },
        reInit: function() {
            t()
        }
    },
    e()
}();
var levenshteinDistance = function(e, t) {
    var n = []
      , r = e.length
      , i = t.length;
    if (0 == r)
        return i;
    if (0 == i)
        return r;
    for (var a = r; a >= 0; a--)
        n[a] = [];
    for (var a = r; a >= 0; a--)
        n[a][0] = a;
    for (var o = i; o >= 0; o--)
        n[0][o] = o;
    for (var a = 1; a <= r; a++)
        for (var s = e.charAt(a - 1), o = 1; o <= i; o++) {
            if (a == o && n[a][o] > 4)
                return r;
            var u = t.charAt(o - 1)
              , c = s == u ? 0 : 1
              , l = n[a - 1][o] + 1
              , d = n[a][o - 1] + 1
              , f = n[a - 1][o - 1] + c;
            d < l && (l = d),
            f < l && (l = f),
            n[a][o] = l,
            a > 1 && o > 1 && s == t.charAt(o - 2) && e.charAt(a - 2) == u && (n[a][o] = Math.min(n[a][o], n[a - 2][o - 2] + c))
        }
    return n[r][i]
};
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(window.jQuery || window.$)
}(function(e) {
    var t, n = {
        className: "autosizejs",
        append: "",
        callback: !1,
        resizeDelay: 10
    }, r = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>', i = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"], a = e(r).data("autosize", !0)[0];
    a.style.lineHeight = "99px",
    "99px" === e(a).css("lineHeight") && i.push("lineHeight"),
    a.style.lineHeight = "",
    e.fn.autosize = function(r) {
        return r = e.extend({}, n, r || {}),
        a.parentNode !== document.body && e(document.body).append(a),
        this.each(function() {
            function n() {
                var t, n;
                "getComputedStyle"in window ? (t = window.getComputedStyle(f),
                n = f.getBoundingClientRect().width,
                e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(e, r) {
                    n -= parseInt(t[r], 10)
                }),
                a.style.width = n + "px") : a.style.width = Math.max(p.width(), 0) + "px"
            }
            function o() {
                var o = {};
                if (t = f,
                a.className = r.className,
                c = parseInt(p.css("maxHeight"), 10),
                e.each(i, function(e, t) {
                    o[t] = p.css(t)
                }),
                e(a).css(o),
                n(),
                window.chrome && "setSelectionRange"in f) {
                    var s = f.selectionStart;
                    f.value += " ",
                    f.value = f.value.slice(0, -1),
                    f.setSelectionRange(s, s)
                }
            }
            function s() {
                var e, i;
                t !== f ? o() : n(),
                a.value = f.value + r.append,
                a.style.overflowY = f.style.overflowY,
                i = parseInt(f.style.height, 10),
                a.scrollTop = 0,
                a.scrollTop = 9e4,
                e = a.scrollTop,
                c && e > c ? (f.style.overflowY = "scroll",
                e = c) : (f.style.overflowY = "hidden",
                e < l && (e = l)),
                e += h,
                i !== e && (f.style.height = e + "px",
                m && r.callback.call(f, f))
            }
            function u() {
                clearTimeout(d),
                d = setTimeout(function() {
                    var e = p.width();
                    e !== y && (y = e,
                    s())
                }, parseInt(r.resizeDelay, 10))
            }
            var c, l, d, f = this, p = e(f), h = 0, m = e.isFunction(r.callback), g = {
                height: f.style.height,
                overflow: f.style.overflow,
                overflowY: f.style.overflowY,
                wordWrap: f.style.wordWrap,
                resize: f.style.resize
            }, y = p.width();
            p.data("autosize") || (p.data("autosize", !0),
            "border-box" !== p.css("box-sizing") && "border-box" !== p.css("-moz-box-sizing") && "border-box" !== p.css("-webkit-box-sizing") || (h = p.outerHeight() - p.height()),
            l = Math.max(parseInt(p.css("minHeight"), 10) - h || 0, p.height()),
            p.css({
                overflow: "hidden",
                overflowY: "hidden",
                wordWrap: "break-word",
                resize: "none" === p.css("resize") || "vertical" === p.css("resize") ? "none" : "horizontal"
            }),
            "onpropertychange"in f ? "oninput"in f ? p.on("input.autosize keyup.autosize", s) : p.on("propertychange.autosize", function() {
                "value" === event.propertyName && s()
            }) : p.on("input.autosize", s),
            !1 !== r.resizeDelay && e(window).on("resize.autosize", u),
            p.on("autosize.resize", s),
            p.on("autosize.resizeIncludeStyle", function() {
                t = null,
                s()
            }),
            p.on("autosize.destroy", function() {
                t = null,
                clearTimeout(d),
                e(window).off("resize", u),
                p.off("autosize").off(".autosize").css(g).removeData("autosize")
            }),
            s())
        })
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof module && "object" == typeof module.exports ? require("jquery") : jQuery)
}(function(e) {
    function t() {
        var t = a.settings;
        if (t.autoDispose && !e.contains(document.documentElement, this))
            return e(this).timeago("dispose"),
            this;
        var o = n(this);
        return isNaN(o.datetime) || (0 === t.cutoff || Math.abs(i(o.datetime)) < t.cutoff ? e(this).text(r(o.datetime)) : e(this).attr("title").length > 0 && e(this).text(e(this).attr("title"))),
        this
    }
    function n(t) {
        if (t = e(t),
        !t.data("timeago")) {
            t.data("timeago", {
                datetime: a.datetime(t)
            });
            var n = e.trim(t.text());
            a.settings.localeTitle ? t.attr("title", t.data("timeago").datetime.toLocaleString()) : !(n.length > 0) || a.isTime(t) && t.attr("title") || t.attr("title", n)
        }
        return t.data("timeago")
    }
    function r(e) {
        return a.inWords(i(e))
    }
    function i(e) {
        return (new Date).getTime() - e.getTime()
    }
    e.timeago = function(t) {
        return r(t instanceof Date ? t : "string" == typeof t ? e.timeago.parse(t) : "number" == typeof t ? new Date(t) : e.timeago.datetime(t))
    }
    ;
    var a = e.timeago;
    e.extend(e.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowPast: !0,
            allowFuture: !1,
            localeTitle: !1,
            cutoff: 0,
            autoDispose: !0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                inPast: "any moment now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function(t) {
            function n(n, i) {
                var a = e.isFunction(n) ? n(i, t) : n
                  , o = r.numbers && r.numbers[i] || i;
                return a.replace(/%d/i, o)
            }
            if (!this.settings.allowPast && !this.settings.allowFuture)
                throw "timeago allowPast and allowFuture settings can not both be set to false.";
            var r = this.settings.strings
              , i = r.prefixAgo
              , a = r.suffixAgo;
            if (this.settings.allowFuture && t < 0 && (i = r.prefixFromNow,
            a = r.suffixFromNow),
            !this.settings.allowPast && t >= 0)
                return this.settings.strings.inPast;
            var o = Math.abs(t) / 1e3
              , s = o / 60
              , u = s / 60
              , c = u / 24
              , l = c / 365
              , d = o < 45 && n(r.seconds, Math.round(o)) || o < 90 && n(r.minute, 1) || s < 45 && n(r.minutes, Math.round(s)) || s < 90 && n(r.hour, 1) || u < 24 && n(r.hours, Math.round(u)) || u < 42 && n(r.day, 1) || c < 30 && n(r.days, Math.round(c)) || c < 45 && n(r.month, 1) || c < 365 && n(r.months, Math.round(c / 30)) || l < 1.5 && n(r.year, 1) || n(r.years, Math.round(l))
              , f = r.wordSeparator || "";
            return r.wordSeparator === undefined && (f = " "),
            e.trim([i, d, a].join(f))
        },
        parse: function(t) {
            var n = e.trim(t);
            return n = n.replace(/\.\d+/, ""),
            n = n.replace(/-/, "/").replace(/-/, "/"),
            n = n.replace(/T/, " ").replace(/Z/, " UTC"),
            n = n.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"),
            n = n.replace(/([\+\-]\d\d)$/, " $100"),
            new Date(n)
        },
        datetime: function(t) {
            var n = a.isTime(t) ? e(t).attr("datetime") : e(t).attr("title");
            return a.parse(n)
        },
        isTime: function(t) {
            return "time" === e(t).get(0).tagName.toLowerCase()
        }
    });
    var o = {
        init: function() {
            o.dispose.call(this);
            var n = e.proxy(t, this);
            n();
            var r = a.settings;
            r.refreshMillis > 0 && (this._timeagoInterval = setInterval(n, r.refreshMillis))
        },
        update: function(n) {
            var r = n instanceof Date ? n : a.parse(n);
            e(this).data("timeago", {
                datetime: r
            }),
            a.settings.localeTitle && e(this).attr("title", r.toLocaleString()),
            t.apply(this)
        },
        updateFromDOM: function() {
            e(this).data("timeago", {
                datetime: a.parse(a.isTime(this) ? e(this).attr("datetime") : e(this).attr("title"))
            }),
            t.apply(this)
        },
        dispose: function() {
            this._timeagoInterval && (window.clearInterval(this._timeagoInterval),
            this._timeagoInterval = null)
        }
    };
    e.fn.timeago = function(e, t) {
        var n = e ? o[e] : o.init;
        if (!n)
            throw new Error("Unknown function name '" + e + "' for timeago");
        return this.each(function() {
            n.call(this, t)
        }),
        this
    }
    ,
    document.createElement("abbr"),
    document.createElement("time")
});
var wanakana, __indexOf = [].indexOf || function(e) {
    for (var t = 0, n = this.length; t < n; t++)
        if (t in this && this[t] === e)
            return t;
    return -1
}
;
wanakana = wanakana || {},
wanakana.version = "1.3.7",
"function" == typeof define && define.amd && define("wanakana", [], function() {
    return wanakana
}),
wanakana.LOWERCASE_START = 97,
wanakana.LOWERCASE_END = 122,
wanakana.UPPERCASE_START = 65,
wanakana.UPPERCASE_END = 90,
wanakana.HIRAGANA_START = 12353,
wanakana.HIRAGANA_END = 12438,
wanakana.KATAKANA_START = 12449,
wanakana.KATAKANA_END = 12538,
wanakana.LOWERCASE_FULLWIDTH_START = 65345,
wanakana.LOWERCASE_FULLWIDTH_END = 65370,
wanakana.UPPERCASE_FULLWIDTH_START = 65313,
wanakana.UPPERCASE_FULLWIDTH_END = 65338,
wanakana.defaultOptions = {
    useObseleteKana: !1,
    IMEMode: !1
},
wanakana.bind = function(e) {
    return e.addEventListener("input", wanakana._onInput)
}
,
wanakana.unbind = function(e) {
    return e.removeEventListener("input", wanakana._onInput)
}
,
wanakana._onInput = function(e) {
    var t, n, r, i;
    if (t = e.target,
    t.selectionStart,
    t.value.length,
    r = wanakana._convertFullwidthCharsToASCII(t.value),
    n = wanakana.toKana(r, {
        IMEMode: !0
    }),
    r !== n) {
        if (t.value = n,
        "number" == typeof t.selectionStart)
            return t.selectionStart = t.selectionEnd = t.value.length;
        if ("undefined" != typeof t.createTextRange)
            return t.focus(),
            i = t.createTextRange(),
            i.collapse(!1),
            i.select()
    }
}
,
wanakana._extend = function(e, t) {
    var n;
    if (null == e)
        return t;
    for (n in t)
        null == e[n] && null != t[n] && (e[n] = t[n]);
    return e
}
,
wanakana._isCharInRange = function(e, t, n) {
    var r;
    return r = e.charCodeAt(0),
    t <= r && r <= n
}
,
wanakana._isCharVowel = function(e, t) {
    var n;
    return null == t && (t = !0),
    n = t ? /[aeiouy]/ : /[aeiou]/,
    -1 !== e.toLowerCase().charAt(0).search(n)
}
,
wanakana._isCharConsonant = function(e, t) {
    var n;
    return null == t && (t = !0),
    n = t ? /[bcdfghjklmnpqrstvwxyz]/ : /[bcdfghjklmnpqrstvwxz]/,
    -1 !== e.toLowerCase().charAt(0).search(n)
}
,
wanakana._isCharKatakana = function(e) {
    return wanakana._isCharInRange(e, wanakana.KATAKANA_START, wanakana.KATAKANA_END)
}
,
wanakana._isCharHiragana = function(e) {
    return wanakana._isCharInRange(e, wanakana.HIRAGANA_START, wanakana.HIRAGANA_END)
}
,
wanakana._isCharKana = function(e) {
    return wanakana._isCharHiragana(e) || wanakana._isCharKatakana(e)
}
,
wanakana._isCharNotKana = function(e) {
    return !wanakana._isCharHiragana(e) && !wanakana._isCharKatakana(e)
}
,
wanakana._convertFullwidthCharsToASCII = function(e) {
    var t, n, r, i, a, o;
    for (n = e.split(""),
    i = a = 0,
    o = n.length; a < o; i = ++a)
        t = n[i],
        r = t.charCodeAt(0),
        wanakana._isCharInRange(t, wanakana.LOWERCASE_FULLWIDTH_START, wanakana.LOWERCASE_FULLWIDTH_END) && (n[i] = String.fromCharCode(r - wanakana.LOWERCASE_FULLWIDTH_START + wanakana.LOWERCASE_START)),
        wanakana._isCharInRange(t, wanakana.UPPERCASE_FULLWIDTH_START, wanakana.UPPERCASE_FULLWIDTH_END) && n[i](String.fromCharCode(r - wanakana.UPPERCASE_FULLWIDTH_START + wanakana.UPPERCASE_START));
    return n.join("")
}
,
wanakana._katakanaToHiragana = function(e) {
    var t, n, r, i, a, o, s;
    for (n = [],
    s = e.split(""),
    a = 0,
    o = s.length; a < o; a++)
        i = s[a],
        wanakana._isCharKatakana(i) ? (t = i.charCodeAt(0),
        t += wanakana.HIRAGANA_START - wanakana.KATAKANA_START,
        r = String.fromCharCode(t),
        n.push(r)) : n.push(i);
    return n.join("")
}
,
wanakana._hiraganaToKatakana = function(e) {
    var t, n, r, i, a, o, s;
    for (r = [],
    s = e.split(""),
    a = 0,
    o = s.length; a < o; a++)
        n = s[a],
        wanakana._isCharHiragana(n) ? (t = n.charCodeAt(0),
        t += wanakana.KATAKANA_START - wanakana.HIRAGANA_START,
        i = String.fromCharCode(t),
        r.push(i)) : r.push(n);
    return r.join("")
}
,
wanakana._hiraganaToRomaji = function(e, t) {
    var n, r, i, a, o, s, u, c, l, d;
    for (t = wanakana._extend(t, wanakana.defaultOptions),
    o = e.length,
    l = [],
    i = 0,
    r = 0,
    s = 2,
    a = function() {
        return e.substr(i, r)
    }
    ,
    c = function() {
        return r = Math.min(s, o - i)
    }
    ; i < o; ) {
        for (c(); r > 0; ) {
            if (n = a(),
            wanakana.isKatakana(n) && (n = wanakana._katakanaToHiragana(n)),
            "\u3063" === n.charAt(0) && 1 === r && i < o - 1) {
                u = !0,
                d = "";
                break
            }
            if (d = wanakana.J_to_R[n],
            null != d && u && (d = d.charAt(0).concat(d),
            u = !1),
            null != d)
                break;
            r--
        }
        null == d && (d = n),
        l.push(d),
        i += r || 1
    }
    return l.join("")
}
,
wanakana._romajiToHiragana = function(e, t) {
    return wanakana._romajiToKana(e, t, !0)
}
,
wanakana._romajiToKana = function(e, t, n) {
    var r, i, a, o, s, u, c, l, d, f;
    for (null == n && (n = !1),
    t = wanakana._extend(t, wanakana.defaultOptions),
    d = e.length,
    c = [],
    o = 0,
    f = 3,
    s = function() {
        return e.substr(o, a)
    }
    ,
    u = function(e) {
        return wanakana._isCharInRange(e, wanakana.UPPERCASE_START, wanakana.UPPERCASE_END)
    }
    ; o < d; ) {
        for (a = Math.min(f, d - o); a > 0; ) {
            if (r = s(),
            i = r.toLowerCase(),
            __indexOf.call(wanakana.FOUR_CHARACTER_EDGE_CASES, i) >= 0 && d - o >= 4)
                a++,
                r = s(),
                i = r.toLowerCase();
            else {
                if ("n" === i.charAt(0)) {
                    if (t.IMEMode && "'" === i.charAt(1) && 2 === a) {
                        l = "\u3093";
                        break
                    }
                    wanakana._isCharConsonant(i.charAt(1), !1) && wanakana._isCharVowel(i.charAt(2)) && (a = 1,
                    r = s(),
                    i = r.toLowerCase())
                }
                "n" !== i.charAt(0) && wanakana._isCharConsonant(i.charAt(0)) && r.charAt(0) === r.charAt(1) && (a = 1,
                i = r = wanakana._isCharInRange(r.charAt(0), wanakana.UPPERCASE_START, wanakana.UPPERCASE_END) ? "\u30c3" : "\u3063")
            }
            if (null != (l = wanakana.R_to_J[i]))
                break;
            4 === a ? a -= 2 : a--
        }
        null == l && (r = wanakana._convertPunctuation(r),
        l = r),
        (null != t ? t.useObseleteKana : void 0) && ("wi" === i && (l = "\u3090"),
        "we" === i && (l = "\u3091")),
        t.IMEMode && "n" === i.charAt(0) && ("y" === e.charAt(o + 1).toLowerCase() && !1 === wanakana._isCharVowel(e.charAt(o + 2)) || o === d - 1 || wanakana.isKana(e.charAt(o + 1))) && (l = r.charAt(0)),
        n || u(r.charAt(0)) && (l = wanakana._hiraganaToKatakana(l)),
        c.push(l),
        o += a || 1
    }
    return c.join("")
}
,
wanakana._convertPunctuation = function(e) {
    return "\u3000" === e ? " " : "-" === e ? "\u30fc" : e
}
,
wanakana.isHiragana = function(e) {
    var t;
    return t = e.split(""),
    t.every(wanakana._isCharHiragana)
}
,
wanakana.isKatakana = function(e) {
    var t;
    return t = e.split(""),
    t.every(wanakana._isCharKatakana)
}
,
wanakana.isKana = function(e) {
    var t;
    return t = e.split(""),
    t.every(function(e) {
        return wanakana.isHiragana(e) || wanakana.isKatakana(e)
    })
}
,
wanakana.isRomaji = function(e) {
    var t;
    return t = e.split(""),
    t.every(function(e) {
        return !wanakana.isHiragana(e) && !wanakana.isKatakana(e)
    })
}
,
wanakana.toHiragana = function(e, t) {
    return wanakana.isRomaji(e) ? e = wanakana._romajiToHiragana(e, t) : wanakana.isKatakana(e) ? e = wanakana._katakanaToHiragana(e, t) : e
}
,
wanakana.toKatakana = function(e, t) {
    return wanakana.isHiragana(e) ? e = wanakana._hiraganaToKatakana(e, t) : wanakana.isRomaji(e) ? (e = wanakana._romajiToHiragana(e, t),
    e = wanakana._hiraganaToKatakana(e, t)) : e
}
,
wanakana.toKana = function(e, t) {
    return e = wanakana._romajiToKana(e, t)
}
,
wanakana.toRomaji = function(e) {
    return e = wanakana._hiraganaToRomaji(e)
}
,
wanakana.R_to_J = {
    a: "\u3042",
    i: "\u3044",
    u: "\u3046",
    e: "\u3048",
    o: "\u304a",
    yi: "\u3044",
    wu: "\u3046",
    whu: "\u3046",
    xa: "\u3041",
    xi: "\u3043",
    xu: "\u3045",
    xe: "\u3047",
    xo: "\u3049",
    xyi: "\u3043",
    xye: "\u3047",
    ye: "\u3044\u3047",
    wha: "\u3046\u3041",
    whi: "\u3046\u3043",
    whe: "\u3046\u3047",
    who: "\u3046\u3049",
    wi: "\u3046\u3043",
    we: "\u3046\u3047",
    va: "\u3094\u3041",
    vi: "\u3094\u3043",
    vu: "\u3094",
    ve: "\u3094\u3047",
    vo: "\u3094\u3049",
    vya: "\u3094\u3083",
    vyi: "\u3094\u3043",
    vyu: "\u3094\u3085",
    vye: "\u3094\u3047",
    vyo: "\u3094\u3087",
    ka: "\u304b",
    ki: "\u304d",
    ku: "\u304f",
    ke: "\u3051",
    ko: "\u3053",
    lka: "\u30f5",
    lke: "\u30f6",
    xka: "\u30f5",
    xke: "\u30f6",
    kya: "\u304d\u3083",
    kyi: "\u304d\u3043",
    kyu: "\u304d\u3085",
    kye: "\u304d\u3047",
    kyo: "\u304d\u3087",
    ca: "\u304b",
    ci: "\u304d",
    cu: "\u304f",
    ce: "\u3051",
    co: "\u3053",
    lca: "\u30f5",
    lce: "\u30f6",
    xca: "\u30f5",
    xce: "\u30f6",
    qya: "\u304f\u3083",
    qyu: "\u304f\u3085",
    qyo: "\u304f\u3087",
    qwa: "\u304f\u3041",
    qwi: "\u304f\u3043",
    qwu: "\u304f\u3045",
    qwe: "\u304f\u3047",
    qwo: "\u304f\u3049",
    qa: "\u304f\u3041",
    qi: "\u304f\u3043",
    qe: "\u304f\u3047",
    qo: "\u304f\u3049",
    kwa: "\u304f\u3041",
    qyi: "\u304f\u3043",
    qye: "\u304f\u3047",
    ga: "\u304c",
    gi: "\u304e",
    gu: "\u3050",
    ge: "\u3052",
    go: "\u3054",
    gya: "\u304e\u3083",
    gyi: "\u304e\u3043",
    gyu: "\u304e\u3085",
    gye: "\u304e\u3047",
    gyo: "\u304e\u3087",
    gwa: "\u3050\u3041",
    gwi: "\u3050\u3043",
    gwu: "\u3050\u3045",
    gwe: "\u3050\u3047",
    gwo: "\u3050\u3049",
    sa: "\u3055",
    si: "\u3057",
    shi: "\u3057",
    su: "\u3059",
    se: "\u305b",
    so: "\u305d",
    za: "\u3056",
    zi: "\u3058",
    zu: "\u305a",
    ze: "\u305c",
    zo: "\u305e",
    ji: "\u3058",
    sya: "\u3057\u3083",
    syi: "\u3057\u3043",
    syu: "\u3057\u3085",
    sye: "\u3057\u3047",
    syo: "\u3057\u3087",
    sha: "\u3057\u3083",
    shu: "\u3057\u3085",
    she: "\u3057\u3047",
    sho: "\u3057\u3087",
    shya: "\u3057\u3083",
    shyu: "\u3057\u3085",
    shye: "\u3057\u3047",
    shyo: "\u3057\u3087",
    swa: "\u3059\u3041",
    swi: "\u3059\u3043",
    swu: "\u3059\u3045",
    swe: "\u3059\u3047",
    swo: "\u3059\u3049",
    zya: "\u3058\u3083",
    zyi: "\u3058\u3043",
    zyu: "\u3058\u3085",
    zye: "\u3058\u3047",
    zyo: "\u3058\u3087",
    ja: "\u3058\u3083",
    ju: "\u3058\u3085",
    je: "\u3058\u3047",
    jo: "\u3058\u3087",
    jya: "\u3058\u3083",
    jyi: "\u3058\u3043",
    jyu: "\u3058\u3085",
    jye: "\u3058\u3047",
    jyo: "\u3058\u3087",
    ta: "\u305f",
    ti: "\u3061",
    tu: "\u3064",
    te: "\u3066",
    to: "\u3068",
    chi: "\u3061",
    tsu: "\u3064",
    ltu: "\u3063",
    xtu: "\u3063",
    tya: "\u3061\u3083",
    tyi: "\u3061\u3043",
    tyu: "\u3061\u3085",
    tye: "\u3061\u3047",
    tyo: "\u3061\u3087",
    cha: "\u3061\u3083",
    chu: "\u3061\u3085",
    che: "\u3061\u3047",
    cho: "\u3061\u3087",
    cya: "\u3061\u3083",
    cyi: "\u3061\u3043",
    cyu: "\u3061\u3085",
    cye: "\u3061\u3047",
    cyo: "\u3061\u3087",
    chya: "\u3061\u3083",
    chyu: "\u3061\u3085",
    chye: "\u3061\u3047",
    chyo: "\u3061\u3087",
    tsa: "\u3064\u3041",
    tsi: "\u3064\u3043",
    tse: "\u3064\u3047",
    tso: "\u3064\u3049",
    tha: "\u3066\u3083",
    thi: "\u3066\u3043",
    thu: "\u3066\u3085",
    the: "\u3066\u3047",
    tho: "\u3066\u3087",
    twa: "\u3068\u3041",
    twi: "\u3068\u3043",
    twu: "\u3068\u3045",
    twe: "\u3068\u3047",
    two: "\u3068\u3049",
    da: "\u3060",
    di: "\u3062",
    du: "\u3065",
    de: "\u3067",
    "do": "\u3069",
    dya: "\u3062\u3083",
    dyi: "\u3062\u3043",
    dyu: "\u3062\u3085",
    dye: "\u3062\u3047",
    dyo: "\u3062\u3087",
    dha: "\u3067\u3083",
    dhi: "\u3067\u3043",
    dhu: "\u3067\u3085",
    dhe: "\u3067\u3047",
    dho: "\u3067\u3087",
    dwa: "\u3069\u3041",
    dwi: "\u3069\u3043",
    dwu: "\u3069\u3045",
    dwe: "\u3069\u3047",
    dwo: "\u3069\u3049",
    na: "\u306a",
    ni: "\u306b",
    nu: "\u306c",
    ne: "\u306d",
    no: "\u306e",
    nya: "\u306b\u3083",
    nyi: "\u306b\u3043",
    nyu: "\u306b\u3085",
    nye: "\u306b\u3047",
    nyo: "\u306b\u3087",
    ha: "\u306f",
    hi: "\u3072",
    hu: "\u3075",
    he: "\u3078",
    ho: "\u307b",
    fu: "\u3075",
    hya: "\u3072\u3083",
    hyi: "\u3072\u3043",
    hyu: "\u3072\u3085",
    hye: "\u3072\u3047",
    hyo: "\u3072\u3087",
    fya: "\u3075\u3083",
    fyu: "\u3075\u3085",
    fyo: "\u3075\u3087",
    fwa: "\u3075\u3041",
    fwi: "\u3075\u3043",
    fwu: "\u3075\u3045",
    fwe: "\u3075\u3047",
    fwo: "\u3075\u3049",
    fa: "\u3075\u3041",
    fi: "\u3075\u3043",
    fe: "\u3075\u3047",
    fo: "\u3075\u3049",
    fyi: "\u3075\u3043",
    fye: "\u3075\u3047",
    ba: "\u3070",
    bi: "\u3073",
    bu: "\u3076",
    be: "\u3079",
    bo: "\u307c",
    bya: "\u3073\u3083",
    byi: "\u3073\u3043",
    byu: "\u3073\u3085",
    bye: "\u3073\u3047",
    byo: "\u3073\u3087",
    pa: "\u3071",
    pi: "\u3074",
    pu: "\u3077",
    pe: "\u307a",
    po: "\u307d",
    pya: "\u3074\u3083",
    pyi: "\u3074\u3043",
    pyu: "\u3074\u3085",
    pye: "\u3074\u3047",
    pyo: "\u3074\u3087",
    ma: "\u307e",
    mi: "\u307f",
    mu: "\u3080",
    me: "\u3081",
    mo: "\u3082",
    mya: "\u307f\u3083",
    myi: "\u307f\u3043",
    myu: "\u307f\u3085",
    mye: "\u307f\u3047",
    myo: "\u307f\u3087",
    ya: "\u3084",
    yu: "\u3086",
    yo: "\u3088",
    xya: "\u3083",
    xyu: "\u3085",
    xyo: "\u3087",
    ra: "\u3089",
    ri: "\u308a",
    ru: "\u308b",
    re: "\u308c",
    ro: "\u308d",
    rya: "\u308a\u3083",
    ryi: "\u308a\u3043",
    ryu: "\u308a\u3085",
    rye: "\u308a\u3047",
    ryo: "\u308a\u3087",
    la: "\u3089",
    li: "\u308a",
    lu: "\u308b",
    le: "\u308c",
    lo: "\u308d",
    lya: "\u308a\u3083",
    lyi: "\u308a\u3043",
    lyu: "\u308a\u3085",
    lye: "\u308a\u3047",
    lyo: "\u308a\u3087",
    wa: "\u308f",
    wo: "\u3092",
    lwe: "\u308e",
    xwa: "\u308e",
    n: "\u3093",
    nn: "\u3093",
    "n ": "\u3093",
    xn: "\u3093",
    ltsu: "\u3063"
},
wanakana.FOUR_CHARACTER_EDGE_CASES = ["lts", "chy", "shy"],
wanakana.J_to_R = {
    "\u3042": "a",
    "\u3044": "i",
    "\u3046": "u",
    "\u3048": "e",
    "\u304a": "o",
    "\u3094\u3041": "va",
    "\u3094\u3043": "vi",
    "\u3094": "vu",
    "\u3094\u3047": "ve",
    "\u3094\u3049": "vo",
    "\u304b": "ka",
    "\u304d": "ki",
    "\u304d\u3083": "kya",
    "\u304d\u3043": "kyi",
    "\u304d\u3085": "kyu",
    "\u304f": "ku",
    "\u3051": "ke",
    "\u3053": "ko",
    "\u304c": "ga",
    "\u304e": "gi",
    "\u3050": "gu",
    "\u3052": "ge",
    "\u3054": "go",
    "\u304e\u3083": "gya",
    "\u304e\u3043": "gyi",
    "\u304e\u3085": "gyu",
    "\u304e\u3047": "gye",
    "\u304e\u3087": "gyo",
    "\u3055": "sa",
    "\u3059": "su",
    "\u305b": "se",
    "\u305d": "so",
    "\u3056": "za",
    "\u305a": "zu",
    "\u305c": "ze",
    "\u305e": "zo",
    "\u3057": "shi",
    "\u3057\u3083": "sha",
    "\u3057\u3085": "shu",
    "\u3057\u3087": "sho",
    "\u3058": "ji",
    "\u3058\u3083": "ja",
    "\u3058\u3085": "ju",
    "\u3058\u3087": "jo",
    "\u305f": "ta",
    "\u3061": "chi",
    "\u3061\u3083": "cha",
    "\u3061\u3085": "chu",
    "\u3061\u3087": "cho",
    "\u3064": "tsu",
    "\u3066": "te",
    "\u3068": "to",
    "\u3060": "da",
    "\u3062": "di",
    "\u3065": "du",
    "\u3067": "de",
    "\u3069": "do",
    "\u306a": "na",
    "\u306b": "ni",
    "\u306b\u3083": "nya",
    "\u306b\u3085": "nyu",
    "\u306b\u3087": "nyo",
    "\u306c": "nu",
    "\u306d": "ne",
    "\u306e": "no",
    "\u306f": "ha",
    "\u3072": "hi",
    "\u3075": "fu",
    "\u3078": "he",
    "\u307b": "ho",
    "\u3072\u3083": "hya",
    "\u3072\u3085": "hyu",
    "\u3072\u3087": "hyo",
    "\u3075\u3041": "fa",
    "\u3075\u3043": "fi",
    "\u3075\u3047": "fe",
    "\u3075\u3049": "fo",
    "\u3070": "ba",
    "\u3073": "bi",
    "\u3076": "bu",
    "\u3079": "be",
    "\u307c": "bo",
    "\u3073\u3083": "bya",
    "\u3073\u3085": "byu",
    "\u3073\u3087": "byo",
    "\u3071": "pa",
    "\u3074": "pi",
    "\u3077": "pu",
    "\u307a": "pe",
    "\u307d": "po",
    "\u3074\u3083": "pya",
    "\u3074\u3085": "pyu",
    "\u3074\u3087": "pyo",
    "\u307e": "ma",
    "\u307f": "mi",
    "\u3080": "mu",
    "\u3081": "me",
    "\u3082": "mo",
    "\u307f\u3083": "mya",
    "\u307f\u3085": "myu",
    "\u307f\u3087": "myo",
    "\u3084": "ya",
    "\u3086": "yu",
    "\u3088": "yo",
    "\u3089": "ra",
    "\u308a": "ri",
    "\u308b": "ru",
    "\u308c": "re",
    "\u308d": "ro",
    "\u308a\u3083": "rya",
    "\u308a\u3085": "ryu",
    "\u308a\u3087": "ryo",
    "\u308f": "wa",
    "\u3092": "wo",
    "\u3093": "n",
    "\u3090": "wi",
    "\u3091": "we",
    "\u304d\u3047": "kye",
    "\u304d\u3087": "kyo",
    "\u3058\u3043": "jyi",
    "\u3058\u3047": "jye",
    "\u3061\u3043": "cyi",
    "\u3061\u3047": "che",
    "\u3072\u3043": "hyi",
    "\u3072\u3047": "hye",
    "\u3073\u3043": "byi",
    "\u3073\u3047": "bye",
    "\u3074\u3043": "pyi",
    "\u3074\u3047": "pye",
    "\u307f\u3047": "mye",
    "\u307f\u3043": "myi",
    "\u308a\u3043": "ryi",
    "\u308a\u3047": "rye",
    "\u306b\u3043": "nyi",
    "\u306b\u3047": "nye",
    "\u3057\u3043": "syi",
    "\u3057\u3047": "she",
    "\u3044\u3047": "ye",
    "\u3046\u3041": "wha",
    "\u3046\u3049": "who",
    "\u3046\u3043": "wi",
    "\u3046\u3047": "we",
    "\u3094\u3083": "vya",
    "\u3094\u3085": "vyu",
    "\u3094\u3087": "vyo",
    "\u3059\u3041": "swa",
    "\u3059\u3043": "swi",
    "\u3059\u3045": "swu",
    "\u3059\u3047": "swe",
    "\u3059\u3049": "swo",
    "\u304f\u3083": "qya",
    "\u304f\u3085": "qyu",
    "\u304f\u3087": "qyo",
    "\u304f\u3041": "qwa",
    "\u304f\u3043": "qwi",
    "\u304f\u3045": "qwu",
    "\u304f\u3047": "qwe",
    "\u304f\u3049": "qwo",
    "\u3050\u3041": "gwa",
    "\u3050\u3043": "gwi",
    "\u3050\u3045": "gwu",
    "\u3050\u3047": "gwe",
    "\u3050\u3049": "gwo",
    "\u3064\u3041": "tsa",
    "\u3064\u3043": "tsi",
    "\u3064\u3047": "tse",
    "\u3064\u3049": "tso",
    "\u3066\u3083": "tha",
    "\u3066\u3043": "thi",
    "\u3066\u3085": "thu",
    "\u3066\u3047": "the",
    "\u3066\u3087": "tho",
    "\u3068\u3041": "twa",
    "\u3068\u3043": "twi",
    "\u3068\u3045": "twu",
    "\u3068\u3047": "twe",
    "\u3068\u3049": "two",
    "\u3062\u3083": "dya",
    "\u3062\u3043": "dyi",
    "\u3062\u3085": "dyu",
    "\u3062\u3047": "dye",
    "\u3062\u3087": "dyo",
    "\u3067\u3083": "dha",
    "\u3067\u3043": "dhi",
    "\u3067\u3085": "dhu",
    "\u3067\u3047": "dhe",
    "\u3067\u3087": "dho",
    "\u3069\u3041": "dwa",
    "\u3069\u3043": "dwi",
    "\u3069\u3045": "dwu",
    "\u3069\u3047": "dwe",
    "\u3069\u3049": "dwo",
    "\u3075\u3045": "fwu",
    "\u3075\u3083": "fya",
    "\u3075\u3085": "fyu",
    "\u3075\u3087": "fyo",
    "\u3041": "a",
    "\u3043": "i",
    "\u3047": "e",
    "\u3045": "u",
    "\u3049": "o",
    "\u3083": "ya",
    "\u3085": "yu",
    "\u3087": "yo",
    "\u3063": "",
    "\u3095": "ka",
    "\u3096": "ka",
    "\u308e": "wa",
    "\u3000": " ",
    "\u3093\u3042": "n'a",
    "\u3093\u3044": "n'i",
    "\u3093\u3046": "n'u",
    "\u3093\u3048": "n'e",
    "\u3093\u304a": "n'o",
    "\u3093\u3084": "n'ya",
    "\u3093\u3086": "n'yu",
    "\u3093\u3088": "n'yo"
},
function(e, t) {
    "use strict";
    var n = {};
    !function() {
        var e = document.getElementsByTagName("script")
          , t = e[e.length - 1];
        if (t)
            for (var r, i = t.attributes, a = 0, o = i.length; a < o; a++)
                /data-(\w+)$/.test(i[a].nodeName) && (r = i[a].nodeValue,
                "false" === r && (r = !1),
                n[RegExp.$1] = r)
    }();
    var r = function() {
        var e = t()
          , r = e(n);
        return r.factory = e,
        r
    };
    "function" == typeof define && define.amd ? define([], r) : "object" == typeof module && module.exports ? module.exports = r() : e.Honeybadger = r()
}(this, function() {
    function e(e, t) {
        var n = {};
        for (var r in e)
            n[r] = e[r];
        for (var r in t)
            n[r] = t[r];
        return n
    }
    function t(e) {
        return !!u && (u.name === e.name && (u.message === e.message && u.stack === e.stack))
    }
    function n(e, t) {
        var n = e.message;
        for (var r in t)
            if (n.match(t[r]))
                return !0;
        return !1
    }
    function r() {
        var e = {};
        return e.HTTP_USER_AGENT = navigator.userAgent,
        document.referrer.match(/\S/) && (e.HTTP_REFERER = document.referrer),
        e
    }
    function i(e) {
        if ("object" != typeof e)
            return undefined;
        var t = [];
        for (var n in e)
            t.push(n + "=" + e[n]);
        return t.join(";")
    }
    function a(e) {
        return e.stacktrace || e.stack || undefined
    }
    function o(e) {
        var t, n = 10;
        if (e && (t = a(e)))
            return {
                stack: t,
                generator: undefined
            };
        try {
            throw new Error("")
        } catch (e) {
            if (t = a(e))
                return {
                    stack: t,
                    generator: "throw"
                }
        }
        t = ["<call-stack>"];
        for (var r = arguments.callee; r && t.length < n; ) {
            /function(?:\s+([\w$]+))+\s*\(/.test(r.toString()) ? t.push(RegExp.$1 || "<anonymous>") : t.push("<anonymous>");
            try {
                r = r.caller
            } catch (e) {
                break
            }
        }
        return {
            stack: t.join("\n"),
            generator: "walk"
        }
    }
    function s(e, t) {
        var n, r;
        for (n = 0,
        r = e.length; n < r; n++)
            if (!1 === (0,
            e[n])(t))
                return !0;
        return !1
    }
    var u, c, l = "0.5.0", d = {
        name: "honeybadger.js",
        url: "https://github.com/honeybadger-io/honeybadger-js",
        version: l,
        language: "javascript"
    }, f = !1, p = !1;
    return function(h) {
        function m(e) {
            g("debug") && this.console && console.log(e)
        }
        function g(e, t) {
            var n = $[e];
            return n === undefined && (n = $[e.toLowerCase()]),
            "false" === n && (n = !1),
            n !== undefined ? n : t
        }
        function y() {
            return "http" + (g("ssl", !0) && "s" || "") + "://" + g("host", "api.honeybadger.io")
        }
        function v(e) {
            return !/function|symbol/.test(typeof e) && ("object" != typeof e || "undefined" != typeof e.hasOwnProperty)
        }
        function b(e, t, n) {
            var r, i, a, o;
            if (a = [],
            n || (n = 0),
            n >= g("max_depth", 8))
                return encodeURIComponent(t) + "=[MAX DEPTH REACHED]";
            for (r in e)
                o = e[r],
                e.hasOwnProperty(r) && null != r && null != o && (v(o) || (o = Object.prototype.toString.call(o)),
                i = t ? t + "[" + r + "]" : r,
                a.push("object" == typeof o ? b(o, i, n + 1) : encodeURIComponent(i) + "=" + encodeURIComponent(o)));
            return a.join("&")
        }
        function w(e) {
            try {
                var t = new (this.XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0");
                return t.open("GET", e, g("async", !0)),
                void t.send()
            } catch (e) {
                m("Error encountered during XHR request (will retry): " + e)
            }
            (new Image).src = e
        }
        function x(e) {
            u = c = null;
            var t = g("apiKey", g("api_key"));
            return t ? (w(y() + "/v1/notices/js.gif?" + b({
                notice: e
            }) + "&api_key=" + t + "&t=" + (new Date).getTime()),
            !0) : (m("Unable to send error report: no API key has been configured."),
            !1)
        }
        function k(o, l) {
            if (g("disabled", !1))
                return !1;
            if ("object" != typeof o)
                return !1;
            if ("[object Error]" === Object.prototype.toString.call(o)) {
                var p = o;
                o = e(o, {
                    name: p.name,
                    message: p.message,
                    stack: a(p)
                })
            }
            if (t(o))
                return !1;
            if (c && f && x(c),
            0 === function() {
                var e, t;
                t = [];
                for (e in o)
                    ({}).hasOwnProperty.call(o, e) && t.push(e);
                return t
            }().length)
                return !1;
            if (l && (o = e(o, l)),
            n(o, g("ignorePatterns")))
                return !1;
            if (s($.beforeNotifyHandlers, o))
                return !1;
            var h = r();
            "string" == typeof o.cookies ? h.HTTP_COOKIE = o.cookies : "object" == typeof o.cookies && (h.HTTP_COOKIE = i(o.cookies));
            var y = {
                notifier: d,
                error: {
                    "class": o.name || "Error",
                    message: o.message,
                    backtrace: o.stack,
                    generator: o.generator,
                    fingerprint: o.fingerprint
                },
                request: {
                    url: o.url || document.URL,
                    component: o.component || g("component"),
                    action: o.action || g("action"),
                    context: e($.context, o.context),
                    cgi_data: h,
                    params: o.params
                },
                server: {
                    project_root: o.projectRoot || o.project_root || g("projectRoot", g("project_root", window.location.protocol + "//" + window.location.host)),
                    environment_name: o.environment || g("environment"),
                    revision: o.revision || g("revision")
                }
            };
            return c = y,
            u = o,
            f ? (m("Deferring notice.", o, y),
            window.setTimeout(function() {
                t(o) && x(y)
            })) : (m("Queuing notice.", o, y),
            _.push(y)),
            o
        }
        function T(e) {
            return "function" != typeof Object.isExtensible || Object.isExtensible(e)
        }
        function S(e, t) {
            try {
                return "function" != typeof e ? e : T(e) ? (e.___hb || (e.___hb = function() {
                    var n = g("onerror", !0);
                    if (!(A && (n || t) || t && !n))
                        return e.apply(this, arguments);
                    try {
                        return e.apply(this, arguments)
                    } catch (e) {
                        throw k(e),
                        e
                    }
                }
                ),
                e.___hb) : e
            } catch (t) {
                return e
            }
        }
        function C(e, t, n) {
            if (!p && e && t && n) {
                var r = e[t];
                e[t] = n(r)
            }
        }
        var j = []
          , _ = []
          , $ = {
            context: {},
            beforeNotifyHandlers: []
        };
        if ("object" == typeof h)
            for (var E in h)
                $[E] = h[E];
        var A = !0;
        if (window.atob || (A = !1),
        window.ErrorEvent)
            try {
                0 === new window.ErrorEvent("").colno && (A = !1)
            } catch (e) {}
        $.notify = function(t, n, r) {
            if (t || (t = {}),
            "[object Error]" === Object.prototype.toString.call(t)) {
                var i = t;
                t = e(t, {
                    name: i.name,
                    message: i.message,
                    stack: a(i)
                })
            }
            if ("object" != typeof t) {
                t = {
                    message: String(t)
                }
            }
            if (n && "object" != typeof n) {
                n = {
                    name: String(n)
                }
            }
            return n && (t = e(t, n)),
            "object" == typeof r && (t = e(t, r)),
            k(t, o(t))
        }
        ,
        $.wrap = function(e) {
            return S(e, !0)
        }
        ,
        $.setContext = function(t) {
            return "object" == typeof t && ($.context = e($.context, t)),
            $
        }
        ,
        $.resetContext = function(t) {
            return $.context = "object" == typeof t ? e({}, t) : {},
            $
        }
        ,
        $.configure = function(e) {
            for (var t in e)
                $[t] = e[t];
            return $
        }
        ,
        $.beforeNotify = function(e) {
            return $.beforeNotifyHandlers.push(e),
            $
        }
        ;
        var N = [].indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (t in this && this[t] === e)
                    return t;
            return -1
        }
        ;
        $.reset = function() {
            $.context = {},
            $.beforeNotifyHandlers = [];
            for (var e in $)
                -1 == N.call(j, e) && ($[e] = undefined);
            return $
        }
        ,
        $.getVersion = function() {
            return l
        }
        ;
        var D = function(e) {
            return function(t, n) {
                if ("function" == typeof t) {
                    var r = Array.prototype.slice.call(arguments, 2);
                    return t = S(t),
                    e(function() {
                        t.apply(null, r)
                    }, n)
                }
                return e(t, n)
            }
        };
        C(window, "setTimeout", D),
        C(window, "setInterval", D),
        "EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g, function(e) {
            var t = window[e] && window[e].prototype;
            t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (C(t, "addEventListener", function(e) {
                return function(t, n, r, i) {
                    try {
                        n && null != n.handleEvent && (n.handleEvent = S(n.handleEvent))
                    } catch (e) {
                        m(e)
                    }
                    return e.call(this, t, S(n), r, i)
                }
            }),
            C(t, "removeEventListener", function(e) {
                return function(t, n, r, i) {
                    return e.call(this, t, n, r, i),
                    e.call(this, t, S(n), r, i)
                }
            }))
        }),
        C(window, "onerror", function(e) {
            function t(e, t, n, r, i) {
                if (!u && g("onerror", !0)) {
                    if (0 === n && /Script error\.?/.test(e))
                        return void m("Ignoring cross-domain script error. Use CORS to enable tracking of these types of errors.");
                    if (m("Error caught by window.onerror"),
                    i)
                        return void k(i);
                    k({
                        name: "window.onerror",
                        message: e,
                        stack: [e, "\n    at ? (", t || "unknown", ":", n || 0, ":", r || 0, ")"].join("")
                    })
                }
            }
            return function(n, r, i, a, o) {
                return t(n, r, i, a, o),
                "function" == typeof e && e.apply(this, arguments)
            }
        }),
        p = !0;
        for (var E in $)
            j.push(E);
        if (m("Initializing honeybadger.js " + l),
        /complete|interactive|loaded/.test(document.readyState))
            f = !0,
            m("honeybadger.js " + l + " ready");
        else {
            m("Installing ready handler");
            var L = function() {
                f = !0,
                m("honeybadger.js " + l + " ready");
                for (var e; e = _.pop(); )
                    x(e)
            };
            document.addEventListener ? document.addEventListener("DOMContentLoaded", L, !0) : window.attachEvent("onload", L)
        }
        return $
    }
}),
function() {
    Honeybadger.configure({
        apiKey: "9797e5e1",
        environment: "production",
        onerror: !1
    })
}
.call(this),
function() {
    null == window.WaniKani && (window.WaniKani = {}),
    WaniKani.exceptions = {
        submitErrorReport: function(e, t, n, r, i, a, o) {
            return Honeybadger.notify(n, {
                component: e,
                action: t,
                context: {
                    user: window.WaniKani.username,
                    response_text: r.responseText,
                    response_status: r.status,
                    response_status_text: r.statusText,
                    status: i,
                    details: o
                },
                environment: "production",
                params: a
            })
        }
    }
}
.call(this),
function() {
    var e;
    this.idleTime = {},
    e = 0,
    this.idleTime.load = function() {
        return idleTime.core()
    }
    ,
    this.idleTime.core = function() {
        return $(document).ready(function() {
            return setInterval("idleTime.increment()", 6e4),
            $(this).mousemove(function() {
                return e = 0
            }),
            $(this).keypress(function() {
                return e = 0
            })
        })
    }
    ,
    this.idleTime.increment = function() {
        var t;
        if (t = $("#timeout"),
        (e += 1) > 9 && t.is(":hidden"))
            return idleTime.view()
    }
    ,
    this.idleTime.view = function() {
        return $("#timeout").show(),
        $("#timeout-idle").show(),
        $("html, body").css("overflow", "hidden")
    }
}
.call(this),
function() {
    this.Notes = {
        add: function(e, t, n, r, i) {
            var a;
            return a = Notes.format(r, "html"),
            $("<div></div>", {
                "class": "note-" + t + " noSwipe",
                html: a
            }).appendTo(i),
            Notes.store_locally(e, t, n, a),
            Notes.click(e, t, n)
        },
        click: function(e, t, n) {
            var r, i, a, o, s;
            return s = $(".note-" + t),
            i = $.jStorage.get("l/note/" + e.substring(0, 3) + "/" + t.substring(0, 1) + "/" + n) || "",
            r = function() {
                var e, t;
                return t = s.find("button[type=submit]"),
                e = s.find("textarea"),
                t.after('<span class="counter-note" title="Characters Remaining">' + (e.attr("maxlength") - e.val().length) + ' <i class="icon-pencil"></i></span>'),
                e.off,
                e.on("propertychange input textInput", function() {
                    var e;
                    return e = $(this).attr("maxlength") - $(this).val().length,
                    e < 0 && (e = 0),
                    s.find(".counter-note").html(e + ' <i class="icon-pencil"></i>'),
                    0 === $(this).val().length ? t.text("Remove") : t.text("Save")
                })
            }
            ,
            a = function() {
                var e;
                return e = s.find(".btn-cancel"),
                e.off("click"),
                e.on("click", function(e) {
                    return e.preventDefault(),
                    setTimeout(function() {
                        return s.find("form").remove(),
                        s.html(Notes.format(i, "html"))
                    }, 100)
                })
            }
            ,
            o = function(e, t, n) {
                var r;
                return r = s.find("button[type=submit]"),
                r.off("click"),
                r.on("click", function(a) {
                    var o, u;
                    return a.preventDefault(),
                    o = t + "_note",
                    s.find(".processing-note").delay(100).show(0),
                    $.ajax({
                        type: "PUT",
                        url: "/study_materials/" + n,
                        contentType: "application/json",
                        data: JSON.stringify({
                            study_material: (u = {
                                subject_id: n,
                                subject_type: e
                            },
                            u["" + o] = s.find("textarea").val(),
                            u)
                        })
                    }).success(function(r) {
                        return i = Notes.format(r[o], "html"),
                        s.empty().html(i),
                        Notes.store_locally(e, t, n, r[o])
                    }).fail(function() {
                        return $(".processing-note").delay(300).hide(0),
                        r.addClass("error-note-button").text("Error Adding Note. Retry?")
                    })
                })
            }
            ,
            s.off("click"),
            s.on("click", function() {
                var i, u, c, l;
                return 0 === s.find("form").size() ? (c = Notes.format($(this).html(), "input"),
                $(this).empty(),
                u = $("<form></form>").appendTo($(this)),
                i = $("<fieldset></fieldset>").appendTo(u),
                l = $("<textarea></textarea>", {
                    maxlength: 500,
                    placeholder: "Add a note",
                    text: c
                }).appendTo(i).autosize({
                    append: "\n"
                }),
                $("<button></button>", {
                    "class": "btn-cancel",
                    text: "Cancel"
                }).appendTo(i),
                $("<button></button>", {
                    type: "submit",
                    text: "Save"
                }).appendTo(i),
                r(l),
                o(e, t, n),
                a()) : s.find("textarea").focus()
            })
        },
        format: function(e, t) {
            switch (t) {
            case "html":
                return e ? e.replace(/\n/g, "<br>") : "Click to add note";
            case "input":
                return e ? (e = "Click to add note" === e ? "" : e,
                e.replace(/<br>/g, "\n")) : ""
            }
        },
        store_locally: function(e, t, n, r) {
            var i;
            return i = "l/note/" + e.substring(0, 3) + "/" + t.substring(0, 1) + "/" + n,
            $.jStorage.set(i, r),
            $.jStorage.setTTL(i, 72e5)
        }
    }
}
.call(this),
function() {
    this.UserSynonyms = {},
    this.UserSynonyms.load = function(e, t, n, r) {
        return UserSynonyms.generateList(t),
        UserSynonyms.addOption(e, n, r),
        UserSynonyms.removeOption(e, n, r)
    }
    ,
    this.UserSynonyms.addOption = function(e, t, n) {
        var r, i;
        return r = $(".user-synonyms-add-btn"),
        i = UserSynonyms.wrapper(),
        r.off("click"),
        r.on("click", function() {
            var a, o, s, u, c;
            return $(this).hide(),
            s = $("<li></li>", {
                "class": "user-synonyms-add-form"
            }).appendTo(i),
            u = $("<form></form>").appendTo(s),
            c = $("<input></input>").attr({
                type: "text",
                autocapitalize: "none",
                autocomplete: "off",
                autocorrect: "off",
                spellcheck: "false"
            }).appendTo(u).focus(),
            o = $("<button></button>", {
                type: "submit",
                text: "Add"
            }).appendTo(u),
            a = $("<button></button>", {
                type: "button",
                html: '<i class="icon-remove"></i>'
            }).appendTo(u),
            o.off("click"),
            o.on("click", function(r) {
                var a, s, u;
                return r.preventDefault(),
                a = c.val(),
                s = i.find("li"),
                u = a.length + s.slice(0, s.size() - 1).text().length,
                u > 255 ? o.attr("disabled", "disabled").text("Exceeded Synonym Limit") : 0 !== a.trim().length && $.ajax({
                    type: "PUT",
                    url: "/study_materials/" + t,
                    contentType: "application/json",
                    data: JSON.stringify({
                        subject_type: e,
                        subject_id: t,
                        meaning_synonyms: UserSynonyms.synonymsList().concat(c.val())
                    })
                }).success(function(r) {
                    var i, a;
                    if ($(".user-synonyms ul").remove(),
                    UserSynonyms.generateList(r.meaning_synonyms),
                    UserSynonyms.addOption(e, t, n),
                    UserSynonyms.removeOption(e, t, n),
                    n)
                        return a = $.jStorage.get("currentItem"),
                        i = $.grep($.jStorage.get("activeQueue"), function(e) {
                            return e.id !== a.id
                        }),
                        a.syn = r.meaning_synonyms,
                        i.push(a),
                        $.jStorage.set("activeQueue", i)
                }).fail(function() {
                    return !1
                })
            }),
            a.off("click"),
            a.on("click", function(e) {
                return e.preventDefault(),
                s.remove(),
                r.show()
            })
        })
    }
    ,
    this.UserSynonyms.generateList = function(e) {
        var t, n, r, i;
        for ($(".user-synonyms").append($("<ul></ul>")),
        i = UserSynonyms.wrapper(),
        e || (e = []),
        t = 0,
        n = e.length; t < n; t++)
            r = e[t],
            $("<li></li>", {
                text: r,
                title: "Click to remove synonym"
            }).appendTo(i);
        return $("<li></li>", {
            html: "&nbsp;",
            title: "Add your own synonym",
            "class": "user-synonyms-add-btn"
        }).appendTo(i)
    }
    ,
    this.UserSynonyms.removeOption = function(e, t, n) {
        var r;
        return r = UserSynonyms.wrapper().find("li:not(.user-synonyms-add-btn):not(.user-synonyms-add-form)"),
        r.off("click"),
        r.on("click", function() {
            return $(this).remove(),
            $.ajax({
                type: "PUT",
                url: "/study_materials/" + t,
                contentType: "application/json",
                data: JSON.stringify({
                    study_material: {
                        subject_type: e,
                        subject_id: t,
                        meaning_synonyms: UserSynonyms.synonymsList()
                    }
                })
            }).success(function(e) {
                var t, r;
                if (n)
                    return r = $.jStorage.get("currentItem"),
                    t = $.grep($.jStorage.get("activeQueue"), function(e) {
                        return e.id !== r.id
                    }),
                    r.syn = e.meaning_synonyms,
                    t.push(r),
                    $.jStorage.set("activeQueue", t)
            }).fail(function() {
                return !1
            })
        })
    }
    ,
    this.UserSynonyms.wrapper = function() {
        return $(".user-synonyms ul")
    }
    ,
    this.UserSynonyms.synonymsList = function() {
        return UserSynonyms.wrapper().find("li:not(.user-synonyms-add-btn):not(.user-synonyms-add-form)").map(function() {
            return $(this).text()
        }).get()
    }
}
.call(this),
function() {
    null == window.WaniKani && (window.WaniKani = {}),
    WaniKani.iosPatch = {
        init: function() {
            return this.touchable = !1,
            $(window).on("touchstart", $.proxy(this.flagAsTouchable, this))
        },
        flagAsTouchable: function() {
            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/))
                return this.touchable = !0
        }
    },
    jQuery(function() {
        return WaniKani.iosPatch.init()
    })
}
.call(this),
function() {
    var e, t;
    this.additionalContent = {},
    this.additionalContent.audio = e = function(t) {
        var n, r, i, a;
        if (i = $.jStorage.get("currentItem"),
        a = $.jStorage.get("questionType"),
        $("audio").remove(),
        i.aud && "reading" === a)
            return r = $("#option-audio"),
            n = r.find("button"),
            t = t,
            $("#answer-form fieldset").hasClass("correct") || (t = !1),
            n.removeAttr("disabled"),
            e = $("<audio></audio>", {
                autoplay: t
            }).appendTo(r.removeClass("disabled").children("span")),
            $("<source></source>", {
                src: "https://cdn.wanikani.com/subjects/audio/" + i.aud,
                type: "audio/mpeg"
            }).appendTo(e),
            $("<source></source>", {
                src: "https://cdn.wanikani.com/subjects/audio/" + i.aud.replace(".mp3", ".ogg"),
                type: "audio/ogg"
            }).appendTo(e),
            e[0].addEventListener("play", function() {
                return n.removeClass("audio-idle").addClass("audio-play")
            }),
            e[0].addEventListener("ended", function() {
                return n.removeClass("audio-play").addClass("audio-idle")
            }),
            n.off("click"),
            n.on("click", function() {
                return e[0].play()
            }),
            r.off("click"),
            r.on("click", function() {
                if ($("#user-response").is(":disabled"))
                    return $("audio").trigger("play"),
                    !1
            })
    }
    ,
    this.additionalContent.load = function() {
        return additionalContent.menu(),
        additionalContent.itemInfo()
    }
    ,
    this.additionalContent.menu = function() {
        var e, t, n, r;
        return e = ["kana-chart", "item-info", "home", "last-items", "wrap-up"],
        r = $("#additional-content li"),
        t = $("#information"),
        n = $("#user-response"),
        r.click(function() {
            var i, a;
            if (a = $(this).attr("id").replace("option-", ""),
            $(this).hasClass("inactive"))
                return !1;
            if ($.inArray(a, e) >= 0) {
                if ("home" === a)
                    return location.href = "/review";
                if ("wrap-up" === a)
                    return $(this).hasClass("wrap-up-selected") ? ($(this).removeClass("wrap-up-selected"),
                    $.jStorage.deleteKey("r/wrap-up"),
                    $("#wrap-up-countdown").empty()) : (i = ($.jStorage.get("activeQueue") || []).length,
                    $.jStorage.set("r/wrap-up", !0),
                    $("#wrap-up-countdown").text(i),
                    $(this).addClass("wrap-up-selected"));
                if (!$(this).hasClass("active")) {
                    if (!n.is(":disabled") && "item-info" === a)
                        return;
                    return t.show().children().hide(),
                    "last-items" === a && ($("#additional-content-load").show(),
                    lastItems.load()),
                    $("html, body").animate({
                        scrollTop: n.offset().top - 10
                    }, 200),
                    r.removeClass("active"),
                    $(this).addClass("active"),
                    $("#" + a).fadeIn(300)
                }
                if (r.removeClass("active"),
                t.hide().children().hide(),
                $("html, body").animate({
                    scrollTop: 0
                }, 200),
                "last-items" === a)
                    return lastItems.clear()
            }
        })
    }
    ,
    this.additionalContent.itemInfo = t = function() {
        var e, n;
        return e = function(e) {
            switch (e) {
            case "radical":
                return /\[(?:radical)\]/gi;
            case "kanji":
                return /\[(?:kanji)\]/gi;
            case "vocabulary":
                return /\[(?:vocabulary)\]/gi;
            case "meaning":
                return /\[(?:meaning)\]/gi;
            case "reading":
                return /\[(?:reading)\]/gi;
            case "ja":
                return /\[(?:ja)\]/gi;
            case "closeTagSpan":
                return /\[\/(?:radical|kanji|vocabulary|meaning|reading|ja)\]/gi
            }
        }
        ,
        n = function(t) {
            var n, r, i;
            null == t && (t = ""),
            t = t.replace("\r\n", "<br><br>"),
            r = ["radical", "kanji", "vocabulary", "meaning", "reading", "ja", "closeTagSpan"];
            for (n in r)
                i = r[n],
                t = function() {
                    switch (i) {
                    case "ja":
                        return t.replace(e(i), '<span lang="ja">');
                    case "closeTagSpan":
                        return t.replace(e(i), "</span>");
                    default:
                        return t.replace(e(i), '<span class="highlight-' + i + '">')
                    }
                }();
            return t
        }
        ,
        $("#option-item-info").click(function() {
            var e, r, i, a, o, s;
            if (t = $("#item-info"),
            i = $.jStorage.get("currentItem"),
            o = $.jStorage.get("questionType"),
            a = i.rad ? "r" : i.kan ? "k" : i.voc ? "v" : void 0,
            t.is(":visible") && (t.data("question-type") !== o || t.data("id") !== a + i.id)) {
                if ($("#additional-content-load").show(),
                e = $("#item-info-col1"),
                r = $("#item-info-col2"),
                e.empty(),
                r.empty(),
                i.rad)
                    return s = "/json/radical/" + i.id,
                    $.getJSON(s, function(a) {
                        return a.mnemonic = n(a.mnemonic),
                        e.html("<section><h2>Name</h2>" + a.en + '</section><section class="user-synonyms"><h2>User Synonyms</h2></section>'),
                        r.html("<section><h2>Mnemonics</h2>" + a.mnemonic + '</section><section id="note-meaning"><h2>Name Note</h2></section>'),
                        UserSynonyms.load("radical", i.syn, i.id, !0),
                        Notes.add("radical", "meaning", i.id, a.meaning_note, $("#note-meaning")),
                        $("#all-info").hide(),
                        $("#additional-content-load").fadeOut(200),
                        t.data("id", "r" + i.id),
                        t.data("question-type", o)
                    }).fail(function() {
                        return $("#information-offline").show(),
                        t.hide()
                    });
                if (i.kan)
                    return s = "/json/kanji/" + i.id,
                    $.getJSON(s, function(a) {
                        var s, u, c, l, d, f;
                        l = function() {
                            switch (i.emph) {
                            case "kunyomi":
                                return i.kun;
                            case "onyomi":
                                return i.on;
                            case "nanori":
                                return i.nanori
                            }
                        }(),
                        a.meaning_mnemonic = n(a.meaning_mnemonic),
                        a.reading_mnemonic = n(a.reading_mnemonic),
                        a.meaning_hint = n(a.meaning_hint),
                        a.reading_hint = n(a.reading_hint),
                        f = "",
                        d = a.related;
                        for (c in d)
                            u = d[c],
                            s = u.custom_font_name ? '<i class="radical-' + u.custom_font_name + '"></i>' : /.png/i.test(u.rad) ? '<img src="https://cdn.wanikani.com/subjects/images/' + u.rad + '">' : u.rad,
                            f += '<li><a title="View radical information page" target="_blank" href="/radicals/' + u.slug + '"><span class="radical" lang="ja">' + s + "</span> " + u.en.split(",")[0] + "</li>";
                        return e.html('<section id="item-info-meaning"><h2>Meanings</h2>' + a.en + '</section><section class="user-synonyms"><h2>User Synonyms</h2></section><section id="item-info-reading"><h2>Important Readings (' + i.emph + ')</h2><span lang="ja">' + l + '</span></section><section id="related-items"><h2>Radical Combination</h2><ul class="radical">' + f + "</ul></section>"),
                        r.html('<section id="item-info-meaning-mnemonic"><h2>Meaning Mnemonic</h2>' + a.meaning_mnemonic + '<blockquote><h3><i class="icon-question-sign"></i> HINT</h3>' + a.meaning_hint + '</blockquote></section><section id="note-meaning"><h2>Meaning Note</h2></section><section id="item-info-reading-mnemonic"><h2>Reading Mnemonic</h2>' + a.reading_mnemonic + '<blockquote><h3><i class="icon-question-sign"></i> HINT</h3>' + a.reading_hint + '</blockquote></section><section id="note-reading"><h2>Reading Note</h2></section>'),
                        $("#item-info-meaning-mnemonic blockquote").text().trim().length > 0 && $("#item-info-meaning-mnemonic blockquote").hide(),
                        $("#item-info-reading-mnemonic blockquote").text().trim().length > 0 && $("#item-info-reading-mnemonic blockquote").hide(),
                        Notes.add("kanji", "meaning", i.id, a.meaning_note, $("#note-meaning")),
                        Notes.add("kanji", "reading", i.id, a.reading_note, $("#note-reading")),
                        UserSynonyms.load("kanji", i.syn, i.id, !0),
                        "meaning" === o ? $("#item-info-reading, #item-info-reading-mnemonic, #note-reading").hide() : $("#item-info-meaning, #item-info-meaning-mnemonic, #note-meaning, .user-synonyms").hide(),
                        $("#all-info").show(),
                        $("#additional-content-load").fadeOut(200),
                        t.data("id", "k" + i.id),
                        t.data("question-type", o)
                    }).fail(function() {
                        return $("#information-offline").show(),
                        t.hide()
                    });
                if (i.voc)
                    return s = "/json/vocabulary/" + i.id,
                    $.getJSON(s, function(a) {
                        var s, u, c, l, d, f, p;
                        a.meaning_explanation = n(a.meaning_explanation),
                        a.reading_explanation = n(a.reading_explanation),
                        f = "",
                        d = a.related;
                        for (l in d)
                            c = d[l],
                            f += '<li><a title="View kanji information page" target="_blank" href="/kanji/' + c.slug + '"><span class="kanji" lang="ja">' + c.kan + "</span> " + c.en + "</a></li>";
                        return s = 0 === a.sentences.length ? "<p>N/A</p>" : (u = function() {
                            var e, t, n, r;
                            for (n = a.sentences,
                            r = [],
                            e = 0,
                            t = n.length; e < t; e++)
                                p = n[e],
                                r.push('<div class="context-sentence-group"><p lang="ja">' + p[0] + "</p><p>" + p[1] + "</p></div>");
                            return r
                        }(),
                        u.join("")),
                        e.html('<section id="item-info-meaning"><h2>Meanings</h2>' + a.en + '</section><section class="user-synonyms"><h2>User Synonyms</h2></section><section id="item-info-reading"><h2>Reading</h2><span lang="ja">' + a.kana + '</span></section><section id="part-of-speech"><h2>Part of Speech</h2>' + a.part_of_speech + '</section><section id="related-items"><h2>Related Kanji</h2><ul class="kanji">' + f + "</ul></section>"),
                        r.html('<section id="item-info-meaning-mnemonic"><h2>Meaning Explanation</h2>' + a.meaning_explanation + '</section><section id="note-meaning"><h2>Meaning Note</h2></section><section id="item-info-reading-mnemonic"><h2>Reading Explanation</h2>' + a.reading_explanation + '</section><section id="note-reading"><h2>Reading Note</h2></section><section id="item-info-context-sentences"><h2>Context Sentence</h2>' + s + "</section>"),
                        Notes.add("vocabulary", "meaning", i.id, a.meaning_note, $("#note-meaning")),
                        Notes.add("vocabulary", "reading", i.id, a.reading_note, $("#note-reading")),
                        UserSynonyms.load("vocabulary", i.syn, i.id, !0),
                        "meaning" === o ? $("#item-info-reading, #item-info-reading-mnemonic, #note-reading").hide() : $("#item-info-meaning, #item-info-meaning-mnemonic, #note-meaning, .user-synonyms").hide(),
                        $("#all-info").show(),
                        $("#additional-content-load").fadeOut(200),
                        t.data("id", "v" + i.id),
                        t.data("question-type", o)
                    }).fail(function() {
                        return $("#information-offline").show(),
                        t.hide()
                    })
            }
        })
    }
    ,
    this.additionalContent.closeItemInfo = function() {
        if ($("#item-info").is(":visible"))
            return $("#information").hide().children().hide(),
            $("#option-item-info").removeClass()
    }
    ,
    this.additionalContent.enableButtons = function() {
        return $("#option-item-info").removeClass(),
        additionalContent.audio(audioAutoplay)
    }
    ,
    this.additionalContent.disableAudio = function() {
        return $("#option-audio").addClass("disabled"),
        $("#option-audio button").prop("disabled", "disabled")
    }
    ,
    this.additionalContent.disableItemInfo = function() {
        return $("#item-info").is(":visible") && ($("#information").hide(),
        $("#option-item-info").removeClass()),
        $("#option-item-info").addClass("disabled")
    }
    ,
    this.additionalContent.itemInfoAllButton = function() {
        var e;
        return e = $("#all-info"),
        e.click(function() {
            return $("html, body").animate({
                scrollTop: $("#additional-content").offset().top - 20
            }, 200),
            $("#item-info section").fadeIn(300),
            e.hide()
        })
    }
}
.call(this),
function() {
    this.answerChecker = {},
    this.answerChecker.evaluate = function(e, t) {
        var n, r, i, a, o, s, u, c, l, d, f;
        if (i = [],
        s = [],
        a = $.jStorage.get("currentItem"),
        n = !1,
        l = !1,
        c = !1,
        o = !1,
        t = $.trim(t),
        "reading" === e && (t = t.replace("n", "\u3093")),
        $("#user-response").val(t),
        "reading" === e) {
            if (a.kan) {
                switch (a.emph) {
                case "onyomi":
                    i = a.on,
                    s = a.kun.concat(a.nanori);
                    break;
                case "kunyomi":
                    i = a.kun,
                    s = a.on.concat(a.nanori);
                    break;
                case "nanori":
                    i = a.nanori,
                    s = a.kun.concat(a.on)
                }
                o = answerChecker.checkIfOtherKanjiReading(t, s, i)
            } else
                a.voc && (i = a.kana);
            i.length > 1 && (c = !0),
            t = answerChecker.stringFormat(t);
            for (u in i)
                r = i[u],
                t === r && (l = !0,
                n = !0)
        } else {
            i = $.merge(a.en, a.syn),
            i.length > 1 && (c = !0),
            t = answerChecker.stringFormat(t);
            for (u in i)
                r = i[u],
                r = answerChecker.stringFormat(r),
                f = levenshteinDistance(r, t),
                d = answerChecker.distanceTolerance(r),
                f <= d && (l = !0),
                0 === f && (n = !0)
        }
        return {
            passed: l,
            accurate: n,
            multipleAnswers: c,
            exception: o
        }
    }
    ,
    this.answerChecker.checkIfOtherKanjiReading = function(e, t, n) {
        var r, i, a;
        a = !1;
        for (i in t)
            r = t[i],
            e === r.replace(/\..*/, "") && (a = !0);
        for (i in n)
            r = n[i],
            e === r && (a = !1);
        return a
    }
    ,
    this.answerChecker.isNonKanaPresent = function(e) {
        return e = "n" === e[e.length - 1] ? e.slice(0, -1) : e,
        /[^\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f]/.test(e)
    }
    ,
    this.answerChecker.isKanaPresent = function(e) {
        return /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f]/.test(e)
    }
    ,
    this.answerChecker.stringFormat = function(e) {
        return e = e.toLowerCase().replace("-", " ").replace(".", "").replace("'", "").replace("/", ""),
        "s" === e.substr(-1) && (e = e.slice(0, -1)),
        e
    }
    ,
    this.answerChecker.distanceTolerance = function(e) {
        switch (e.length) {
        case 1:
        case 2:
        case 3:
            return 0;
        case 4:
        case 5:
            return 1;
        case 6:
        case 7:
            return 2;
        default:
            return 2 + 1 * Math.floor(e.length / 7)
        }
    }
}
.call(this),
function() {
    this.hotKeys = {},
    this.hotKeys.keyBinds = function() {
        var e, t;
        return t = $("#user-response"),
        e = $("#answer-form button"),
        $(document).on("keydown.reviewScreen", function(n) {
            var r;
            if (r = n.metaKey || n.altKey || n.shiftKey || n.ctrlKey,
            $("#reviews").is(":visible") && !$('[class^="note-"] textarea').is(":focus") && !$(".user-synonyms input").is(":focus"))
                switch (n.keyCode) {
                case 8:
                    if (!t.is(":focus"))
                        return !1;
                    break;
                case 13:
                    if (t.is(":enabled") && !t.is(":focus"))
                        return t.focus(),
                        !1;
                    if (t.is(":disabled"))
                        return $(window).scrollTop(0),
                        e.trigger("click"),
                        t.prop("disabled", !1),
                        !1;
                    break;
                case 32:
                    if ($("#item-info").is(":visible") && !r)
                        return $("#all-info").trigger("click");
                    break;
                case 70:
                    if (t.is(":disabled") && !r)
                        return $("#option-item-info").trigger("click"),
                        !1;
                    break;
                case 74:
                    if (t.is(":disabled") && !r)
                        return $("audio").trigger("play"),
                        !1;
                    break;
                case 188:
                    if (!r)
                        return $("#option-last-items").trigger("click"),
                        !1
                }
        }),
        $(document).on("keypress.reviewScreen", function(e) {
            if (!$('[class^="note-"] textarea').is(":focus") && !$(".user-synonyms input").is(":focus"))
                switch (e.charCode) {
                case 47:
                    return $("#option-kana-chart").trigger("click"),
                    !1
                }
        })
    }
    ,
    this.hotKeys.load = function() {
        return hotKeys.keyBinds(),
        hotKeys.renderView()
    }
    ,
    this.hotKeys.renderView = function() {
        var e, t, n;
        return n = $("#hotkeys"),
        t = $("#hotkeys table"),
        e = $("#hotkeys-header span"),
        $("#hotkeys a").click(function() {
            return n.trigger("click"),
            !1
        }),
        n.click(function() {
            return t.is(":visible") ? (t.hide(),
            e.hide(),
            $("footer").css("z-index", "0")) : ($("footer").css("z-index", "100"),
            t.show(),
            e.show())
        })
    }
}
.call(this),
function() {
    this.kanaChart = {},
    this.kanaChart.init = function() {
        var e, t, n;
        return n = $("#user-response"),
        e = $("#kana-chart ol li"),
        t = $("#user-response"),
        $("#kana-chart ol li").click(function() {
            return "backspace" !== $(this).attr("class") || t.is(":disabled") ? "backspace" !== $(this).attr("class") && (e.not(".backspace").removeClass(),
            $(this).addClass("active").parent().parent().children("ul").hide(),
            $("#chart-" + $(this).attr("id")[0]).fadeIn(300),
            $(window).scrollTop(t.offset().top)) : void n.val(n.val().slice(0, -1))
        }),
        $("#kana-chart ul li:not(.empty)").click(function() {
            if (!n.is(":disabled"))
                return n.val(n.val() + $(this).children("span").text())
        })
    }
}
.call(this),
function() {
    this.lastItems = {},
    this.lastItems.addToList = function(e) {
        var t;
        return t = $.jStorage.get("lastItems") || [],
        t.push(e),
        $.jStorage.set("lastItems", t.slice(Math.max(t.length - 10, 0))),
        $.jStorage.setTTL("lastItems", 36e5)
    }
    ,
    this.lastItems.clear = function() {
        return $("#last-items-list ul").empty()
    }
    ,
    this.lastItems.disableSessionStats = function() {
        return $("#last-items").is(":visible") && ($("#information").hide(),
        $("#option-last-items").removeClass()),
        $("#last-items").addClass("disabled")
    }
    ,
    this.lastItems.itemInfoKanji = function(e) {
        var t, n;
        return n = lastItems.listAttributes(e.srs_level, e.stats),
        t = '<span class="srs-status" title="' + n.leveledTitle + '">' + n.srs,
        '<li class="pure-u-1-5 kanji"><div class="item"><a href="/kanji/' + e.slug + '" target="_blank" title="View kanji information"><h3 lang="ja">' + e.kan + '</h3></a><div class="add-info">' + t + "</div></div></li>"
    }
    ,
    this.lastItems.generate = function(e) {
        var t, n, r, i, a;
        return r = $("#last-items-list > .pure-u-1 > ul"),
        a = lastItems.listItemAttributes(e),
        e.rad && (e.custom_font_name ? e.rad = '<i class="radical-' + e.custom_font_name + '"></i>' : /.png/i.test(e.rad) && (e.rad = '<img src="https://cdn.wanikani.com/subjects/images/' + e.rad + '" />')),
        t = e.rad ? e.rad : e.kan ? e.kan : e.voc,
        i = $("<li></li>", {
            "class": a.correctClass + " " + a.itemTypeClass
        }).appendTo(r),
        n = $("<a></a>", {
            href: "/" + a.itemTypeClass + "/" + e.slug,
            target: "_blank"
        }).appendTo(i),
        $("<div></div>", {}).appendTo(n).html('<ul><li lang="ja" title="Characters">' + t + '</li><li lang="ja" title="A reading of the item">' + (e.ja || "") + '</li><li title="A meaning or name of the item">' + e.en + '</li><li title="SRS level change">' + a.srsTitle + "</li></ul>")
    }
    ,
    this.lastItems.listItemAttributes = function(e) {
        var t, n, r;
        return t = 1 === e.srs_level && 1 === e.stats.meaning_correct ? "incorrect" : 1 === e.stats.meaning_current_streak || 1 === e.stats.reading_current_streak ? "incorrect" : "correct",
        r = function() {
            switch (e.srs_level) {
            case 1:
            case 2:
            case 3:
            case 4:
                return "Apprentice";
            case 5:
            case 6:
                return "Guru";
            case 7:
                return "Master";
            case 8:
                return "Enlightened";
            case 9:
                return "Burned"
            }
        }(),
        n = e.rad ? "radicals" : e.kan ? "kanji" : "vocabulary",
        {
            correctClass: t,
            srsTitle: r,
            itemTypeClass: n
        }
    }
    ,
    this.lastItems.getlastItems = function() {
        var e, t, n, r;
        n = $.jStorage.get("lastItems") || [],
        r = "/review/last-items?";
        for (e in n)
            t = n[e],
            r += "list[]=" + t.substring(1) + "&";
        return $.getJSON(r, function(t) {
            var n;
            if (0 === t.length)
                $("#last-items-list .pure-u-1").html('<div class="no-data">You have not recently completed any items in your reviews</div>');
            else
                for (e in t)
                    n = t[e],
                    lastItems.generate(n);
            return loadingScreen.remove()
        }).fail(function() {
            return $("#last-items").hide(),
            $("#information-offline").show()
        })
    }
    ,
    this.lastItems.load = function() {
        return $("#last-session").show(),
        lastItems.clear(),
        lastItems.getlastItems(),
        $("#additional-content-load").fadeOut(200)
    }
}
.call(this),
function() {
    this.loadingScreen = {},
    this.loadingScreen.remove = function() {
        return $("#loading").delay(1500).fadeOut(300)
    }
}
.call(this),
function() {
    this.popover = {},
    this.popover.load = function() {
        return popover.info()
    }
    ,
    this.popover.info = function() {
        var e, t;
        return t = $(".apprentice > ul > li, .guru > ul > li, .master > ul > li, .enlightened > ul > li, .burned > ul > li"),
        e = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent),
        $(".apprentice a, .guru a, .master a, .enlightened a, .burned a").click(function(t) {
            if (e)
                return t.preventDefault()
        }),
        t.hover(function() {
            var e, t, n, r, i, a, o, s;
            return i = $(this).height() + 4,
            a = $(window).width() - $(this).offset().left,
            r = $(window).height() - $(this).offset().top,
            n = $("<div></div>", {
                "class": "hover"
            }).appendTo(this),
            $("<ul></ul>").appendTo($(this).children("div")),
            $("<li></li>", {
                text: $(this).data("en")
            }).appendTo($(this).find("ul")),
            $("<li></li>", {
                text: $(this).data("ja")
            }).appendTo($(this).find("ul")),
            $("<li></li>", {
                text: $(this).data("mc")
            }).appendTo($(this).find("ul")),
            $("<li></li>", {
                text: $(this).data("rc")
            }).appendTo($(this).find("ul")),
            o = a > 200 ? (e = "left-side",
            "auto") : (e = "right-side",
            "0"),
            s = r < 100 ? (t = "down-arrow",
            -1 * (n.height() + i / 2)) : (t = "up-arrow",
            i),
            n.css({
                top: s,
                right: o
            }).addClass(t + " " + e)
        }, function() {
            return $(this).children("div").remove()
        })
    }
}
.call(this),
function() {
    var e;
    jQuery(function() {
        if ($("#reviews").length)
            return kanaChart.init(),
            additionalContent.load(),
            additionalContent.itemInfoAllButton(),
            e.load(),
            e.processAnswer(),
            e.buttons(),
            e.listenSubmitFailedQueue(),
            e.counters(),
            e.listenRenderView(),
            e.listenWrapUp(),
            $("#user-response").click(function() {
                return $("html, body").scrollTop(0)
            }),
            hotKeys.load(),
            idleTime.load()
    }),
    e = {
        load: function() {
            return $.jStorage.deleteKey("r/wrap-up"),
            e.submitFailedQueue(e.getQueueAndAssignQuestion)
        },
        getQueueAndAssignQuestion: function() {
            var t;
            return t = "/review/queue",
            $.getJSON(t, function(t) {
                var n;
                return n = t.splice(0, 10),
                $.jStorage.set("reviewQueue", t),
                $.jStorage.set("activeQueue", n),
                n.length > 0 ? ($("#reviews").is(":hidden") && $("#reviews").show(),
                e.nextQuestion()) : e.goToSummary()
            }).done(function() {
                return e.countersReset()
            })
        },
        answerException: function(e) {
            var t, n;
            return t = $("#additional-content"),
            n = $.jStorage.get("questionType"),
            $("#answer-exception").remove(),
            e.passed ? e.accurate && e.multipleAnswers ? t.append($('<div id="answer-exception"><span>Did you know this item has multiple possible ' + n + "s?</span></div>").addClass("animated fadeInUp")) : e.accurate ? void 0 : t.append($('<div id="answer-exception"><span>Your answer was a bit off. Check the ' + n + " to make sure you are correct</span></div>").addClass("animated fadeInUp")) : t.append($('<div id="answer-exception"><span>Need help? View the correct ' + n + " and mnemonic</span></div>").addClass("animated fadeInUp"))
        },
        buttons: function() {
            var t;
            return t = $("#user-response"),
            $("#submit-errors").hover(function() {
                return $(this).children("#submit-errors-ext-text").css("display", "inline")
            }, function() {
                return $(this).children("#submit-errors-ext-text").css("display", "none")
            }),
            $("#option-item-info").click(function() {
                if (t.is(":disabled"))
                    return $("#answer-exception").remove()
            }),
            $("#submit-errors").click(function() {
                return e.submitFailedQueue()
            })
        },
        counters: function() {
            return e.countersReset(),
            $.jStorage.listenKeyChange("questionCount", function() {
                var e, t, n;
                return t = $.jStorage.get("questionCount"),
                n = $.jStorage.get("wrongCount"),
                e = 0 === t ? 100 : Math.round((t - n) / t * 100),
                $("#correct-rate").html(e)
            }),
            $.jStorage.listenKeyChange("completedCount", function() {
                var e, t, n;
                return e = parseInt($("#completed-count").text()) + parseInt($("#available-count").text()),
                t = $.jStorage.get("completedCount"),
                n = Math.round(t / e * 100),
                n = isNaN(n) ? 0 : n,
                $("#completed-count").html(t),
                $("#progress-bar #bar").css("width", n + "%")
            }),
            $.jStorage.listenKeyChange("activeQueue", function() {
                var e;
                return e = $.jStorage.get("reviewQueue").length + $.jStorage.get("activeQueue").length,
                $("#available-count").html(e)
            })
        },
        countersIncr: function(e) {
            var t, n;
            return e || (n = $.jStorage.get("wrongCount") + 1,
            $.jStorage.set("wrongCount", n)),
            t = $.jStorage.get("questionCount") + 1,
            $.jStorage.set("questionCount", t)
        },
        countersReset: function() {
            return $.jStorage.set("questionCount", 0),
            $.jStorage.set("completedCount", 0),
            $.jStorage.set("wrongCount", 0)
        },
        nextQuestion: function() {
            var t, n, r, i;
            return t = $.jStorage.get("activeQueue") || [],
            r = $.jStorage.get("reviewQueue") || [],
            i = $.jStorage.get("r/wrap-up"),
            0 !== t.length || !i && 0 !== r.length ? e.randomQuestion() : (n = i ? {} : {
                empty_queue: !0
            },
            e.redirectIfProcessed(n))
        },
        redirectIfProcessed: function(t) {
            return setTimeout(function() {
                return e.processingAttempts++,
                console.log(e.processingAttempts),
                e.lastItemProcessed || 20 === e.processingAttempts ? e.submitFailedQueue(e.goToSummary, t) : e.redirectIfProcessed(t)
            }, 100)
        },
        processingAttempts: 0,
        goToSummary: function(e) {
            var t;
            return t = "/review",
            null != e && (t += "/?" + $.param(e)),
            window.location = t
        },
        processAnswer: function() {
            var t, n, r, i, a;
            return r = $("#answer-form button"),
            i = $("#answer-form form"),
            a = $("#user-response"),
            t = function() {
                var t, n, r, o;
                return r = answerChecker.evaluate($.jStorage.get("questionType"), a.val()),
                $("html, body").animate({
                    scrollTop: 0
                }, 200),
                r.exception ? (t = $.jStorage.get("currentItem"),
                i = $("#answer-form form"),
                o = $("#reviews"),
                i.is(":animated") || (o.css("overflow-x", "hidden"),
                n = function() {
                    switch (t.emph) {
                    case "onyomi":
                        return "on'yomi";
                    case "kunyomi":
                        return "kun'yomi";
                    case "nanori":
                        return "nanori"
                    }
                }(),
                i.effect("shake", {}, 400, function() {
                    return o.css("overflow-x", "visible"),
                    i.append($('<div id="answer-exception" class="answer-exception-form"><span>WaniKani is looking for the ' + n + " reading</span></div>").addClass("animated fadeInUp"))
                }).find("input").focus()),
                !1) : (a.blur(),
                WaniKani.iosPatch.touchable ? setTimeout(e.renderPostAnswer, 200, r) : e.renderPostAnswer(r),
                !1)
            }
            ,
            n = function() {
                return $("#answer-exception").remove(),
                e.nextQuestion(),
                additionalContent.closeItemInfo(),
                !1
            }
            ,
            i.delegate("input:text", "keydown", function(e) {
                if (13 === e.which)
                    return r.trigger("click"),
                    !1
            }),
            r.on("click", function(e) {
                return e.preventDefault(),
                a.is(":disabled") ? n() : "reading" === $.jStorage.get("questionType") && answerChecker.isNonKanaPresent(a.val()) || "meaning" === $.jStorage.get("questionType") && answerChecker.isKanaPresent(a.val()) || 0 === a.val().length ? (i.is(":animated") || ($("#reviews").css("overflow-x", "hidden"),
                i.effect("shake", {}, 400, function() {
                    return $("#reviews").css("overflow-x", "visible")
                })),
                !1) : 0 !== a.val().length ? t() : void 0
            })
        },
        processCompleted: function(t, n) {
            var r, i, a, o, s, u, c, l, d;
            if (l = "r" === t.charAt(0),
            n.mc >= 1 && n.rc >= 1 || l && n.mc >= 1) {
                if (a = $.jStorage.get("currentItem"),
                r = $.jStorage.get("activeQueue"),
                d = $.jStorage.get("reviewQueue"),
                n.mi = n.mi || 0,
                n.ri = n.ri || 0,
                l && (n.ri = ""),
                i = $.jStorage.get("completedCount") + 1,
                $.jStorage.set("completedCount", i),
                lastItems.addToList(t),
                $.jStorage.get("r/srsIndicator") && Srs.load($.jStorage.get(t), a.srs),
                c = $.grep(r, function(e) {
                    return e.id !== a.id || !(a.rad && e.rad || a.kan && e.kan || a.voc && e.voc)
                }),
                !$.jStorage.get("r/wrap-up") && 0 !== d.length) {
                    for (s = 11 - c.length; s -= 1; )
                        c.push(d.pop());
                    c.filter(function(e) {
                        return e
                    })
                }
                return $.jStorage.set("activeQueue", c),
                $.jStorage.set("reviewQueue", d),
                $.jStorage.deleteKey(t),
                u = t.substring(1),
                o = {},
                o[u] = [n.mi, n.ri],
                e.lastItemProcessed = !1,
                $.ajax({
                    url: "/json/progress",
                    type: "PUT",
                    data: o,
                    dataType: "json"
                }).fail(function(t, r, i) {
                    var a;
                    return a = $.jStorage.get("submitFailedQueue") || [],
                    a.push({
                        id: u,
                        mi: n.mi,
                        ri: n.ri
                    }),
                    $.jStorage.set("submitFailedQueue", a, {
                        ttl: 36e5
                    }),
                    WaniKani.exceptions.submitErrorReport("reviews", "processCompleted", i, t, r, params, e.errorDetails())
                }).done(function() {
                    return e.lastItemProcessed = !0
                })
            }
        },
        randomQuestion: function() {
            var e, t, n, r;
            return n = $.jStorage.get("activeQueue"),
            e = n[Math.floor(Math.random() * n.length)],
            t = e.kan ? $.jStorage.get("k" + e.id) : e.voc ? $.jStorage.get("v" + e.id) : void 0,
            r = e.rad ? "meaning" : null === t || "undefined" == typeof t.mc && "undefined" == typeof t.rc ? ["meaning", "reading"][Math.floor(2 * Math.random())] : t.mc >= 1 ? "reading" : t.rc >= 1 ? "meaning" : void 0,
            $.jStorage.set("questionType", r),
            $.jStorage.set("currentItem", e)
        },
        renderPostAnswer: function(t) {
            return t.passed ? $("#answer-form fieldset").addClass("correct") : $("#answer-form fieldset").addClass("incorrect"),
            $("#user-response").prop("disabled", !0),
            additionalContent.enableButtons(),
            lastItems.disableSessionStats(),
            e.countersIncr(t.passed),
            e.answerException(t),
            e.updateLocalItemStat(t.passed)
        },
        listenRenderView: function() {
            return $.jStorage.listenKeyChange("currentItem", function(e) {
                var t, n, r;
                return t = $.jStorage.get(e),
                n = $("#user-response"),
                r = $.jStorage.get("questionType"),
                $("html, body").animate({
                    scrollTop: 0
                }, 200),
                additionalContent.disableItemInfo(),
                additionalContent.disableAudio(),
                Srs.remove(),
                $("#answer-form fieldset").removeClass(),
                n.prop("disabled", !1).val("").focus(),
                wanakana.unbind(n[0]),
                "reading" === r && wanakana.bind(n[0]),
                n.val(""),
                t.rad ? (t.custom_font_name ? $("#character span").html('<i class="radical-' + t.custom_font_name + '"></i>') : /.png/i.test(t.rad) ? $("#character span").html('<img src="https://cdn.wanikani.com/subjects/images/' + t.rad + '">') : $("#character span").html(t.rad),
                $("#character").removeClass().addClass("radical"),
                $("#question-type").removeClass().addClass(r),
                $("#question-type h1").html("Radical <strong>Name</strong>")) : t.kan ? ($("#character span").html(t.kan),
                $("#character").removeClass().addClass("kanji"),
                $("#question-type").removeClass().addClass(r),
                $("#question-type h1").html("Kanji <strong>" + r + "</strong>")) : t.voc && ($("#character span").html(t.voc),
                $("#character").removeClass().addClass("vocabulary"),
                $("#question-type").removeClass().addClass(r),
                $("#question-type h1").html("Vocabulary <strong>" + r + "</strong>")),
                "meaning" === r ? n.removeAttr("lang").attr("placeholder", "Your Response") : n.attr({
                    lang: "ja",
                    placeholder: "\u7b54\u3048"
                }),
                loadingScreen.remove()
            })
        },
        submitFailedQueue: function(t, n) {
            var r, i, a, o;
            if (o = $.jStorage.get("submitFailedQueue") || [],
            o.length > 0) {
                r = {};
                for (i in o)
                    a = o[i],
                    r[a.id] = [a.mi, a.ri];
                return $.ajax({
                    url: "/json/progress",
                    type: "PUT",
                    data: r,
                    dataType: "json"
                }).fail(function(t, n, r) {
                    return $("#timeout").show(),
                    $("#timeout-session-end").show(),
                    idleTime.view(),
                    $("#timeout-idle").hide(),
                    WaniKani.exceptions.submitErrorReport("reviews", "submitFailedQueue", r, t, n, url, e.errorDetails())
                }).done(function() {
                    return $.jStorage.deleteKey("submitFailedQueue"),
                    "function" == typeof t ? t(n) : void 0
                })
            }
            return "function" == typeof t ? t(n) : void 0
        },
        updateLocalItemStat: function(t) {
            var n, r, i, a, o;
            return n = $.jStorage.get("currentItem"),
            a = $.jStorage.get("questionType"),
            r = n.rad ? "r" : n.kan ? "k" : "v",
            r += n.id,
            i = $.jStorage.get(r) || {},
            "meaning" === a ? t ? i.mc = 1 : i.mi = "undefined" == typeof i.mi ? 1 : i.mi + 1 : t ? i.rc = 1 : i.ri = "undefined" == typeof i.ri ? 1 : i.ri + 1,
            o = $.jStorage.set(r, i),
            $.jStorage.setTTL(r, 72e5),
            e.processCompleted(r, o)
        },
        listenSubmitFailedQueue: function() {
            return $.jStorage.listenKeyChange("submitFailedQueue", function(e, t) {
                switch (t) {
                case "deleted":
                    return !1;
                case "updated":
                    return $("#timeout").show(),
                    $("#timeout-session-end").show(),
                    idleTime.view(),
                    $("#timeout-idle").hide()
                }
            })
        },
        listenWrapUp: function() {
            return $.jStorage.deleteKey("r/wrap-up"),
            $.jStorage.listenKeyChange("activeQueue", function(e, t) {
                var n;
                if ($.jStorage.get("r/wrap-up"))
                    switch (t) {
                    case "updated":
                        return n = ($.jStorage.get("activeQueue") || []).length,
                        $("#wrap-up-countdown").text(n)
                    }
            })
        },
        errorDetails: function() {
            return {
                failed_queue: $.jStorage.get("submitFailedQueue"),
                review_queue_size: $.jStorage.get("reviewQueue").length,
                active_queue_size: $.jStorage.get("activeQueue").length
            }
        }
    }
}
.call(this),
function() {
    this.Srs = {},
    this.Srs.load = function(e, t) {
        return Srs.newSrs(e, t)
    }
    ,
    this.Srs.name = function(e) {
        switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
            return "apprentice";
        case 5:
        case 6:
            return "guru";
        case 7:
            return "master";
        case 8:
            return "enlighten";
        case 9:
            return "burn"
        }
    }
    ,
    this.Srs.newSrs = function(e, t) {
        var n, r, i, a, o, s;
        return o = (e.mi || 0) + (e.ri || 0),
        0 === o ? (n = Srs.name(t + 1),
        i = "srs-up",
        a = "Your item has leveled up in the spaced repetition system") : (r = t >= 5 ? 2 * Math.round(o / 2) : 1 * Math.round(o / 2),
        n = t - r < 1 ? 1 : t - r,
        n = Srs.name(n),
        i = "srs-down",
        a = "Your item has leveled down in the spaced repetition system"),
        s = $("<div></div>", {
            "class": "srs"
        }).appendTo("#question-type"),
        $("<div></div>", {
            "class": i + " srs-" + n + " animated fadeInUp",
            title: a
        }).appendTo(s)
    }
    ,
    this.Srs.remove = function() {
        return $(".srs").remove()
    }
}
.call(this),
function() {
    var e;
    jQuery(function() {
        if ($("#reviews-summary").length)
            return e.load(summaryData),
            window.history.replaceState({}, document.getElementsByTagName("title")[0].innerHTML, "/review")
    }),
    e = {
        load: function(t) {
            return e.get(t)
        },
        get: function(t) {
            var n, r, i, a, o, s, u, c, l, d, f, p, h, m, g, y, v, b;
            return e.processItem("radicals", t.incorrect.radicals, "incorrect"),
            e.processItem("kanji", t.incorrect.kanji, "incorrect"),
            e.processItem("vocabulary", t.incorrect.vocabulary, "incorrect"),
            e.processItem("radicals", t.correct.radicals, "correct"),
            e.processItem("kanji", t.correct.kanji, "correct"),
            e.processItem("vocabulary", t.correct.vocabulary, "correct"),
            p = $("#incorrect .apprentice li").length,
            m = $("#incorrect .guru li").length,
            y = $("#incorrect .master li").length,
            i = $("#correct .apprentice li").length,
            u = $("#correct .guru li").length,
            l = $("#correct .master li").length,
            s = $("#correct .enlightened li").length,
            a = $("#correct .burned li").length,
            v = t.incorrect.radicals.length,
            g = t.incorrect.kanji.length,
            b = t.incorrect.vocabulary.length,
            d = t.correct.radicals.length,
            c = t.correct.kanji.length,
            f = t.correct.vocabulary.length,
            h = p + m + y,
            o = i + u + l + s + a,
            n = o + h === 0 ? 100 : Math.round(o / (o + h) * 100),
            0 === h && $("#incorrect").parent().hide(),
            0 === o && $("#correct").parent().hide(),
            h > 0 && $("#incorrect").show(),
            o > 0 && $("#correct").show(),
            $("#incorrect:visible, #correct:visible").find("li").parent().parent().addClass("active"),
            0 === t.queue_count ? (r = $("#start-session a"),
            r.click(function(e) {
                return e.preventDefault()
            }).addClass("disabled").attr("title", "No reviews in queue")) : $("#review-queue-count").text(t.queue_count),
            $("#review-queue-count").text(t.queue_count),
            $("#incorrect h2 strong").text(h),
            $("#incorrect .apprentice strong").text(p),
            $("#incorrect .guru strong").text(m),
            $("#incorrect .master strong").text(y),
            $("#correct h2 strong").text(o),
            $("#correct .apprentice strong").text(i),
            $("#correct .guru strong").text(u),
            $("#correct .master strong").text(l),
            $("#correct .enlightened strong").text(s),
            $("#correct .burned strong").text(a),
            t.last_review_date ? ($("#last-session-date time").attr("datetime", t.last_review_date),
            $("#last-session-date time").timeago()) : $("#last-session-date").hide(),
            $("#review-stats-answered-correctly .review-stats-value").text(n),
            $("#review-stats-radicals").children(".review-stats-value").text(d).parent().find(".review-stats-total span").text(d + v),
            $("#review-stats-kanji").children(".review-stats-value").text(c).parent().find(".review-stats-total span").text(c + g),
            $("#review-stats-vocabulary").children(".review-stats-value").text(f).parent().find(".review-stats-total span").text(f + b),
            popover.load()
        },
        processItem: function(e, t, n) {
            var r, i, a, o, s, u, c;
            c = [];
            for (r in t)
                i = t[r],
                o = function() {
                    switch (i.srs_level) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        return "#" + n + " .apprentice ul";
                    case 5:
                    case 6:
                        return "#" + n + " .guru ul";
                    case 7:
                        return "#" + n + " .master ul";
                    case 8:
                        return "#" + n + " .enlightened ul";
                    case 9:
                        return "#" + n + " .burned ul"
                    }
                }(),
                s = Math.round(i.stats.meaning_correct / (i.stats.meaning_correct + i.stats.meaning_incorrect) * 100),
                u = i.kan || i.voc ? Math.round(i.stats.reading_correct / (i.stats.reading_correct + i.stats.reading_incorrect) * 100) : void 0,
                "radicals" === e && (i.custom_font_name ? i.rad = '<i class="radical-' + i.custom_font_name + '"></i>' : /.png/i.test(i.rad) && (i.rad = '<img src="https://cdn.wanikani.com/subjects/images/' + i.rad + '" />')),
                a = i.rad ? i.rad : i.kan ? i.kan : i.voc,
                $("<li></li>", {
                    "class": e,
                    "data-en": i.en,
                    "data-ja": i.ja,
                    "data-mc": s,
                    "data-rc": u
                }).appendTo(o),
                c.push($("<a></a>", {
                    lang: "ja",
                    href: "/" + e + "/" + i.slug
                }).html(a).appendTo(o + " li:last-child"));
            return c
        }
    }
}
.call(this),
function() {}
.call(this);
