var targetVideo = ".hero__genoa .vjs-tech";
!function (e) { "use strict"; var t, r = [], n = e.document, o = e.MutationObserver || e.WebKitMutationObserver; function l() { for (var e, t, o = 0, l = r.length; o < l; o++) { e = r[o]; for (var u, c = 0, s = (t = n.querySelectorAll(e.selector)).length; c < s; c++)(u = t[c]).ready || (u.ready = !0, e.fn.call(u, u)) } } e.ready = function (e, u) { r.push({ selector: e, fn: u }), t || (t = new o(l)).observe(n.documentElement, { childList: !0, subtree: !0 }), l() } }(this), ready(targetVideo, function (e) { e.muted = !0, e.setAttribute("loop", !0) });