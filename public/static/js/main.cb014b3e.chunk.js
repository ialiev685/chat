(this["webpackJsonpchat-websocket"] =
  this["webpackJsonpchat-websocket"] || []).push([
  [0],
  {
    28: function (e, t, n) {},
    29: function (e, t, n) {},
    30: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n(1),
        c = n.n(s),
        a = n(17),
        r = n.n(a),
        o = n(19),
        u = n(7),
        i = n(35),
        j = n(33),
        d = n(36),
        l = (n(15), n(0)),
        b = function (e) {
          var t = e.onSendMessage,
            n = e.onAddText,
            s = e.value;
          return Object(l.jsx)("div", {
            children: Object(l.jsx)("form", {
              onSubmit: function (e) {
                e.preventDefault(), "" !== s && (t(), n(""));
              },
              children: Object(l.jsxs)(i.a, {
                className: "mt-2",
                children: [
                  Object(l.jsx)(j.a.Control, {
                    autoComplete: "off",
                    type: "text",
                    name: "text",
                    value: s,
                    onChange: function (e) {
                      return n(e.target.value);
                    },
                  }),
                  Object(l.jsx)(d.a, {
                    type: "submit",
                    variant: "success",
                    children:
                      "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
                  }),
                ],
              }),
            }),
          });
        },
        O = n(32),
        m = n(18),
        f = function (e) {
          var t = e.connect,
            n = e.onAddUser,
            s = e.value;
          return Object(l.jsx)("div", {
            children: Object(l.jsx)("form", {
              onSubmit: function (e) {
                e.preventDefault(), t();
              },
              children: Object(l.jsxs)(O.a, {
                children: [
                  Object(l.jsx)(m.a, {
                    xs: 9,
                    children: Object(l.jsx)(j.a.Control, {
                      autoComplete: "off",
                      type: "text",
                      placeholder:
                        "\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",
                      value: s,
                      onChange: function (e) {
                        return n(e.target.value);
                      },
                      required: !0,
                    }),
                  }),
                  Object(l.jsx)(m.a, {
                    xs: 3,
                    children: Object(l.jsx)(d.a, {
                      type: "submit",
                      children: "\u0412\u043e\u0439\u0442\u0438",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        x =
          (n(28),
          function (e) {
            var t = e.massages,
              n = e.name;
            return Object(l.jsx)("div", {
              className: "windows-massages",
              children: t.map(function (e) {
                var t = e.user === n ? "your" : "user",
                  s = e.user === n ? "\u0412\u044b" : e.user;
                return "connect" === e.event
                  ? Object(l.jsx)(
                      "p",
                      {
                        className:
                          "windows-massages__message windows-massages__message--connect ",
                        children:
                          "\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0441\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ".concat(
                            e.user
                          ),
                      },
                      e.id
                    )
                  : Object(l.jsx)(
                      "p",
                      {
                        className:
                          "windows-massages__message windows-massages__message--".concat(
                            t,
                            "-message"
                          ),
                        children: "".concat(s, ": ").concat(e.message),
                      },
                      e.id
                    );
              }),
            });
          }),
        v = n(34),
        g =
          (n(29),
          function (e) {
            var t = e.children;
            return Object(l.jsx)("div", {
              className: "container",
              children: t,
            });
          }),
        h = function () {
          var e = Object(s.useState)([]),
            t = Object(u.a)(e, 2),
            n = t[0],
            c = t[1],
            a = Object(s.useState)(""),
            r = Object(u.a)(a, 2),
            i = r[0],
            j = r[1],
            d = Object(s.useState)(""),
            O = Object(u.a)(d, 2),
            m = O[0],
            h = O[1],
            p = Object(s.useState)(!1),
            w = Object(u.a)(p, 2),
            S = w[0],
            y = w[1],
            N = Object(s.useRef)(),
            _ = i && S;
          return Object(l.jsxs)(g, {
            children: [
              Object(l.jsx)("h2", {
                children:
                  "\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0447\u0430\u0442",
              }),
              !_ &&
                Object(l.jsx)(f, {
                  connect: function () {
                    (N.current = new WebSocket("ws://")),
                      (N.current.onopen = function () {
                        var e = {
                          event: "connect",
                          user: i,
                          id: Object(v.a)(),
                        };
                        y(!0),
                          N.current.send(JSON.stringify(e)),
                          console.log(
                            "\u0421\u043e\u0435\u0434\u0435\u043d\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e!"
                          );
                      }),
                      (N.current.onmessage = function (e) {
                        var t = JSON.parse(e.data);
                        c(function (e) {
                          return [].concat(Object(o.a)(e), [t]);
                        });
                      }),
                      (N.current.onclose = function (e) {
                        console.log(
                          "\u0421\u043e\u0435\u0434\u0435\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u043e"
                        );
                      });
                  },
                  onAddUser: j,
                  value: i,
                }),
              S && Object(l.jsx)(x, { massages: n, name: i }),
              S &&
                Object(l.jsx)(b, {
                  onAddText: h,
                  onSendMessage: function () {
                    var e = {
                      event: "message",
                      user: i,
                      message: m,
                      id: Object(v.a)(),
                    };
                    N.current.send(JSON.stringify(e));
                  },
                  value: m,
                }),
            ],
          });
        };
      r.a.render(
        Object(l.jsx)(c.a.StrictMode, { children: Object(l.jsx)(h, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[30, 1, 2]],
]);
//# sourceMappingURL=main.cb014b3e.chunk.js.map
