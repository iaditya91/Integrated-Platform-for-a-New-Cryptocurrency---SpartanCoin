(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    140: function (e, t, a) {},
    143: function (e, t, a) {},
    145: function (e, t, a) {},
    146: function (e, t, a) {},
    154: function (e, t, a) {},
    155: function (e, t, a) {},
    156: function (e, t, a) {},
    157: function (e, t, a) {},
    202: function (e, t, a) {},
    203: function (e, t, a) {},
    204: function (e, t, a) {},
    205: function (e, t, a) {},
    206: function (e, t, a) {},
    207: function (e, t, a) {},
    209: function (e, t, a) {
      a.r(t);
      var n = a(0),
        c = a.n(n),
        s = a(24),
        r = a.n(s),
        o = a(103),
        i = a(104),
        l = a(105),
        j = a(112),
        d = a(46),
        u = a(12),
        b = a(76),
        h = a(7),
        O = a(218),
        p = a(213),
        x = a(217),
        m = a(211),
        f = a(36),
        g = a(215),
        y = a(216),
        v = a(14),
        w = a.n(v),
        k = function (e) {
          return w.a.post("/api/googleOauth", e);
        },
        C = function (e) {
          return w.a.post("/api/signUp", e);
        },
        S = function () {
          return w.a.post("/api/logout");
        },
        N = function (e) {
          return w.a.post("/api/logIn", e);
        },
        T = function (e) {
          return w.a.get("/api/blockchain/balance/" + e);
        },
        A = function (e) {
          return w.a.get("/api/blockchain/transactions/" + e);
        },
        B = function (e) {
          return w.a.get("/api/username/" + e);
        },
        F = function (e) {
          return w.a.post("/api/blockchain/transactions", e);
        },
        _ = function (e) {
          return w.a.get("/api/sessions");
        },
        I = function (e) {
          return w.a.delete("/api/delete/" + e);
        },
        P = function (e) {
          return w.a.get("/api/blockchain/coinValue");
        },
        H = function () {
          return w.a.get("/api/blockchain/mine");
        },
        U = (a(140), a(1));
      var K = function () {
        var e = Object(n.useState)(!1),
          t = Object(h.a)(e, 2),
          a = t[0],
          c = t[1],
          s = function () {
            return c(!1);
          },
          r = Object(n.useState)(!1),
          o = Object(h.a)(r, 2),
          i = o[0],
          l = o[1],
          j = function () {
            return l(!1);
          },
          d = Object(n.useState)(!1),
          u = Object(h.a)(d, 2),
          b = u[0],
          O = u[1],
          p = function () {
            O(!1), document.location.replace("/");
          },
          x = Object(n.useState)(!1),
          f = Object(h.a)(x, 2),
          v = f[0],
          w = f[1],
          k = function () {
            return w(!1);
          },
          C = function () {
            return w(!0);
          },
          S = function (e) {
            e.preventDefault();
            var t = e.target[0].value;
            t || C(),
              I(t)
                .then(function (e) {
                  200 === e.status && O(!0);
                })
                .catch(function (e) {
                  400 === e.response.status && C();
                }),
              j();
          };
        return Object(U.jsxs)(U.Fragment, {
          children: [
            Object(U.jsx)(m.a, {
              className: "deletebtn",
              variant: "outline-danger",
              onClick: function () {
                return c(!0);
              },
              block: !0,
              children: "Delete Account",
            }),
            Object(U.jsxs)(g.a, {
              show: a,
              onHide: s,
              backdrop: "static",
              keyboard: !1,
              children: [
                Object(U.jsx)(g.a.Header, {
                  children: Object(U.jsx)(g.a.Title, {
                    children: Object(U.jsx)("h3", {
                      children: "Delete Account",
                    }),
                  }),
                }),
                Object(U.jsx)(g.a.Body, {
                  children: Object(U.jsx)("h5", {
                    style: { color: "red" },
                    children: "Are you sure you want to delete your account?",
                  }),
                }),
                Object(U.jsxs)(g.a.Footer, {
                  children: [
                    Object(U.jsx)(m.a, { onClick: s, children: "Cancel" }),
                    Object(U.jsx)(m.a, {
                      onClick: function () {
                        s(), l(!0);
                      },
                      children: "Confirm",
                    }),
                  ],
                }),
              ],
            }),
            Object(U.jsxs)(g.a, {
              show: i,
              onHide: j,
              backdrop: "static",
              keyboard: !1,
              children: [
                Object(U.jsx)(g.a.Header, {
                  children: Object(U.jsx)(g.a.Title, {
                    children: Object(U.jsx)("h3", {
                      children: "Confirm Delete Account",
                    }),
                  }),
                }),
                Object(U.jsxs)(y.a, {
                  id: "privateKey",
                  onSubmit: function (e) {
                    return S(e);
                  },
                  children: [
                    Object(U.jsx)(g.a.Body, {
                      children: Object(U.jsxs)(y.a.Group, {
                        children: [
                          Object(U.jsx)(y.a.Label, {
                            style: { fontSize: 14 },
                            children:
                              "To delete your account, please enter your private key:",
                          }),
                          Object(U.jsx)(y.a.Control, {
                            type: "text",
                            placeholder: "Private Key",
                          }),
                          Object(U.jsx)(y.a.Text, {
                            style: { color: "red", fontWeight: "bold" },
                            children: "Please note: This cannot be undone!",
                          }),
                        ],
                      }),
                    }),
                    Object(U.jsxs)(g.a.Footer, {
                      children: [
                        Object(U.jsx)(m.a, { onClick: j, children: "Cancel" }),
                        Object(U.jsx)(m.a, {
                          id: "confirmBtn",
                          type: "submit",
                          children: "Confirm",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            Object(U.jsxs)(g.a, {
              show: b,
              onHide: p,
              backdrop: "static",
              keyboard: !1,
              children: [
                Object(U.jsx)(g.a.Header, {
                  children: Object(U.jsx)(g.a.Title, {
                    children: Object(U.jsx)("h3", {
                      children: "Your Account has been deleted.",
                    }),
                  }),
                }),
                Object(U.jsx)(g.a.Body, {
                  children: Object(U.jsx)("h5", {
                    children: "Thank you for using SpartanCoin!",
                  }),
                }),
                Object(U.jsx)(g.a.Footer, {
                  children: Object(U.jsx)(m.a, {
                    onClick: p,
                    children: "Close",
                  }),
                }),
              ],
            }),
            Object(U.jsxs)(g.a, {
              show: v,
              onHide: k,
              backdrop: "static",
              keyboard: !1,
              children: [
                Object(U.jsx)(g.a.Header, {
                  children: Object(U.jsx)(g.a.Title, {
                    children: Object(U.jsx)("h3", {
                      children: "Your private key does not match our records.",
                    }),
                  }),
                }),
                Object(U.jsx)(g.a.Body, {
                  children: Object(U.jsx)("p", {
                    children: "Please check your private key and try, again.",
                  }),
                }),
                Object(U.jsx)(g.a.Footer, {
                  children: Object(U.jsx)(m.a, {
                    onClick: k,
                    children: "Close",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      a(143);
      var G = function () {
          return Object(U.jsxs)("div", {
            children: [
              Object(U.jsx)("h3", {
                className: "sidebar-header",
                style: { marginTop: 20, marginBottom: 30, color: "whitesmoke" },
                children: "SpartanCoin",
              }),
              Object(U.jsx)(m.a, {
                className: "sidebutton",
                href: "/profile",
                block: !0,
                variant: "outline-light",
                children: "Profile",
              }),
              Object(U.jsx)(m.a, {
                className: "sidebutton",
                href: "/send",
                block: !0,
                variant: "outline-light",
                children: "Send",
              }),
              Object(U.jsx)(m.a, {
                className: "sidebutton",
                href: "/mining",
                block: !0,
                variant: "outline-light",
                children: "Mine Coin",
              }),
              Object(U.jsx)(K, { block: !0 }),
            ],
          });
        },
        M = a(212),
        z = a(45),
        L = a(47),
        D = a(77),
        E = a(78),
        V = E.stringify({
          client_id:
            "232246939902-feprc0hdm5dl57fbkpomoq7cec1lkpce.apps.googleusercontent.com",
          redirect_uri: "https://spartancoin.azurewebsites.net/profile",
          scope: [
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
          ].join(" "),
          response_type: "code",
          access_type: "offline",
          prompt: "consent",
        }),
        R =
          ("https://accounts.google.com/o/oauth2/v2/auth?".concat(V),
          E.parse(window.location.search));
      function Y() {
        return (Y = Object(D.a)(
          Object(L.a)().mark(function e(t) {
            var a, n;
            return Object(L.a)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      w()({
                        url: "https://oauth2.googleapis.com/token",
                        method: "post",
                        data: {
                          client_id:
                            "232246939902-feprc0hdm5dl57fbkpomoq7cec1lkpce.apps.googleusercontent.com",
                          client_secret: "0-HuUnGtmzhrsr0IebcTqVgf",
                          redirect_uri: "http://localhost:3000/profile",
                          grant_type: "authorization_code",
                          code: t,
                        },
                      })
                    );
                  case 2:
                    return (
                      (a = e.sent),
                      (n = a.data),
                      e.abrupt("return", n.access_token)
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function q() {
        return (q = Object(D.a)(
          Object(L.a)().mark(function e(t) {
            var a, n;
            return Object(L.a)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      w()({
                        url: "https://www.googleapis.com/oauth2/v2/userinfo",
                        method: "get",
                        headers: { Authorization: "Bearer ".concat(t) },
                      })
                    );
                  case 2:
                    return (a = e.sent), (n = a.data), e.abrupt("return", n);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      R.error
        ? console.log("An error occurred: ".concat(R.error))
        : R.code &&
          (function (e) {
            return Y.apply(this, arguments);
          })(R.code).then(function (e) {
            (function (e) {
              return q.apply(this, arguments);
            })(e).then(function (e) {
              var t = {
                id: e.id,
                email: e.email,
                name: e.name.split(" ").join(""),
              };
              k(t).then(function (e) {
                e.data.message &&
                  (console.log(e.data.message), (W = e.data.message)),
                  e.data.user && window.location.reload();
              });
            });
          });
      var W = "";
      a(145);
      var J = function () {
          var e = Object(n.useState)(!1),
            t = Object(h.a)(e, 2),
            a = t[0],
            c = t[1],
            s = Object(n.useState)(!1),
            r = Object(h.a)(s, 2),
            o = r[0],
            i = r[1],
            l = Object(n.useState)(""),
            j = Object(h.a)(l, 2),
            d = j[0],
            u = j[1],
            b = Object(n.useState)(!1),
            O = Object(h.a)(b, 2),
            p = O[0],
            x = O[1],
            f = Object(n.useState)(""),
            v = Object(h.a)(f, 2),
            w = v[0],
            k = v[1],
            S = Object(n.useState)(!1),
            N = Object(h.a)(S, 2),
            T = N[0],
            A = N[1],
            B = Object(n.useState)(""),
            F = Object(h.a)(B, 2),
            _ = F[0],
            I = F[1],
            P = function (e) {
              e && (A(!0), I(e));
            },
            H = function () {
              return c(!0);
            };
          Object(n.useEffect)(function () {
            W && (u(W), H());
          }, []);
          var K = function () {
            !0 === o
              ? (c(!1), document.location.replace("/profile"), u(""))
              : (x(!0), k("Please Copy your key!"));
          };
          return Object(U.jsxs)(U.Fragment, {
            children: [
              Object(U.jsx)(z.a, {
                show: T,
                variant: "warning",
                dismissible: "true",
                onClose: function () {
                  A(!1), I("");
                },
                children: Object(U.jsx)("p", { children: _ }),
              }),
              Object(U.jsx)("div", {
                className: "sidebar-header",
                style: { marginTop: 20, marginBottom: 30, color: "whitesmoke" },
                children: Object(U.jsx)("h3", { children: "Sign-up" }),
              }),
              Object(U.jsxs)(y.a, {
                onSubmit: function (e) {
                  return (function (e) {
                    e.preventDefault();
                    var t = {
                      username: e.target[1].value,
                      password: e.target[2].value,
                      confirm_password: e.target[3].value,
                      email: e.target[0].value,
                      public_key: "123456788999",
                    };
                    C(t)
                      .then(function (e) {
                        200 === e.status && (u(e.data.message), H());
                      })
                      .catch(function (e) {
                        switch (e.response.data.message) {
                          case "Your Username should be at least 6 characters.":
                          case "Your Password should be at least 6 characters.":
                          case "Your password does not match.":
                          case "Email already in use.":
                          case "Username already in use.":
                            P(e.response.data.message);
                            break;
                          case "MongoDB error":
                            P(
                              "Oops something went wrong. Please try again later."
                            );
                            break;
                          default:
                            P("Please try, again!");
                        }
                      });
                  })(e);
                },
                children: [
                  Object(U.jsx)(y.a.Group, {
                    controlId: "formBasicEmail",
                    children: Object(U.jsx)(y.a.Control, {
                      type: "email",
                      placeholder: "Enter email",
                    }),
                  }),
                  Object(U.jsx)(y.a.Group, {
                    controlId: "formBasicUsername",
                    children: Object(U.jsx)(y.a.Control, {
                      type: "text",
                      placeholder: "Enter username",
                    }),
                  }),
                  Object(U.jsx)(y.a.Group, {
                    controlId: "formBasicPassword",
                    children: Object(U.jsx)(y.a.Control, {
                      type: "password",
                      placeholder: "Pasword",
                    }),
                  }),
                  Object(U.jsx)(y.a.Group, {
                    controlId: "formBasicConfirm",
                    children: Object(U.jsx)(y.a.Control, {
                      type: "password",
                      placeholder: "Confirm password",
                    }),
                  }),
                  Object(U.jsx)(m.a, {
                    type: "submit",
                    value: "Submit",
                    className: "sidebutton",
                    block: !0,
                    variant: "outline-light",
                    children: "Sign-Up",
                  }),
                ],
              }),
              Object(U.jsxs)(g.a, {
                copied: o,
                show: a,
                onHide: K,
                backdrop: "static",
                keyboard: !1,
                children: [
                  Object(U.jsx)(g.a.Header, {
                    children: Object(U.jsx)(g.a.Title, {
                      children: Object(U.jsx)("h3", {
                        children: "Thank you for Signing Up!",
                      }),
                    }),
                  }),
                  Object(U.jsxs)(g.a.Body, {
                    children: [
                      Object(U.jsx)("h5", {
                        children:
                          "Please keep your private key safe. This is the only time we will be showing your private key.",
                      }),
                      Object(U.jsxs)(y.a.Group, {
                        controlId: "formPlaintextTotal",
                        children: [
                          Object(U.jsx)(y.a.Label, {
                            children: Object(U.jsx)("p", {
                              id: "privateKey",
                              children: "Private Key:",
                            }),
                          }),
                          Object(U.jsxs)(M.a, {
                            children: [
                              Object(U.jsx)(y.a.Control, {
                                className: "something",
                                readOnly: !0,
                                value: d,
                              }),
                              Object(U.jsx)(M.a.Append, {
                                children: Object(U.jsx)(m.a, {
                                  variant: "outline-secondary",
                                  onClick: function () {
                                    navigator.clipboard.writeText(d), i(!0);
                                  },
                                  children: Object(U.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    class: "bi bi-clipboard",
                                    viewBox: "0 0 16 16",
                                    children: [
                                      Object(U.jsx)("path", {
                                        d: "M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z",
                                      }),
                                      Object(U.jsx)("path", {
                                        d: "M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(U.jsx)(z.a, {
                            variant: "warning",
                            dismissible: "true",
                            onClose: function () {
                              x(!1);
                            },
                            show: p,
                            children: Object(U.jsx)("p", { children: w }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(U.jsx)(g.a.Footer, {
                    children: Object(U.jsx)(m.a, {
                      variant: "primary",
                      onClick: K,
                      children: "Close",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Q = c.a.createContext({
          username: "",
          publicKey: "",
          logged_in: !1,
          setSession: function () {},
        });
      var X = function () {
        var e = Object(n.useContext)(Q).setSession,
          t = Object(n.useState)(!1),
          a = Object(h.a)(t, 2),
          c = a[0],
          s = a[1],
          r = Object(n.useState)(""),
          o = Object(h.a)(r, 2),
          i = o[0],
          l = o[1],
          j = function (e) {
            e && (s(!0), l(e));
          };
        return Object(U.jsxs)(U.Fragment, {
          children: [
            Object(U.jsx)(z.a, {
              show: c,
              variant: "warning",
              dismissible: "true",
              onClose: function () {
                s(!1), l("");
              },
              children: Object(U.jsx)("p", { children: i }),
            }),
            Object(U.jsx)("div", {
              className: "sidebar-header",
              style: { marginTop: 20, marginBottom: 30, color: "whitesmoke" },
              children: Object(U.jsx)("h3", { children: "Login" }),
            }),
            Object(U.jsxs)(y.a, {
              onSubmit: function (t) {
                return (function (t) {
                  t.preventDefault();
                  var a = {
                    username: t.target[0].value,
                    password: t.target[1].value,
                  };
                  N(a)
                    .then(function (t) {
                      console.log(t);
                      var a = t.data.user[0].username,
                        n = t.data.user[0].public_key;
                      e({ username: a, publicKey: n, logged_in: !0 }),
                        document.location.replace("/");
                    })
                    .catch(function (e) {
                      console.log(e.response),
                        "Server Error, Please try Again." ===
                        e.response.data.message
                          ? j(
                              "Oops something went wrong. Please try again later."
                            )
                          : j("Please check your username or password");
                    });
                })(t);
              },
              children: [
                Object(U.jsx)(y.a.Group, {
                  controlId: "formBasicUsername",
                  children: Object(U.jsx)(y.a.Control, {
                    type: "text",
                    placeholder: "Enter username or email",
                  }),
                }),
                Object(U.jsx)(y.a.Group, {
                  controlId: "formBasicPassword",
                  children: Object(U.jsx)(y.a.Control, {
                    type: "password",
                    placeholder: "Pasword",
                  }),
                }),
                Object(U.jsx)(m.a, {
                  type: "submit",
                  className: "sidebutton",
                  block: !0,
                  variant: "outline-light",
                  children: "Login",
                }),
              ],
            }),
          ],
        });
      };
      a(146);
      var Z = function () {
          var e = Object(n.useContext)(Q).logged_in,
            t = Object(n.useState)(!1),
            a = Object(h.a)(t, 2),
            c = a[0],
            s = a[1],
            r = Object(n.useState)("menu"),
            o = Object(h.a)(r, 2),
            i = o[0],
            l = o[1],
            j = function () {
              S().then(function (e) {
                console.log(e), document.location.replace("/");
              });
            },
            u = function (e) {
              s(e);
            };
          setTimeout(function () {
            W && (u(!0), g("signUp"));
          }, 2e3);
          var g = function (e) {
            l(e);
          };
          return e
            ? Object(U.jsx)(Q.Consumer, {
                children: function (e) {
                  return Object(U.jsx)(U.Fragment, {
                    children: Object(U.jsx)(f.a, {
                      open: c,
                      onSetOpen: u,
                      sidenav:
                        "menu" === i
                          ? Object(U.jsx)(G, {})
                          : "signUp" === i
                          ? Object(U.jsx)(J, {})
                          : Object(U.jsx)(X, Object(b.a)({}, e)),
                      children: Object(U.jsx)(O.a, {
                        className: "container-fluid mb-2 navigation",
                        children: Object(U.jsxs)(p.a, {
                          children: [
                            Object(U.jsx)(x.a.Item, {
                              children: Object(U.jsx)(d.b, {
                                className: "navbar-brand",
                                to: "/",
                                children: "SpartanCoin",
                              }),
                            }),
                            Object(U.jsx)(x.a, {
                              className: "ml-auto",
                              children: Object(U.jsxs)(x.a.Item, {
                                className: "d-flex",
                                children: [
                                  Object(U.jsx)(m.a, {
                                    id: "logout",
                                    variant: "outline-light",
                                    type: "button",
                                    onClick: j,
                                    children: "Logout",
                                  }),
                                  Object(U.jsx)(m.a, {
                                    id: "menu",
                                    className: "btn hamburger",
                                    variant: "outline-light",
                                    type: "button",
                                    onClick: function () {
                                      u(!0), g("menu");
                                    },
                                    children: Object(U.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "33",
                                      height: "33",
                                      fill: "currentColor",
                                      className: "bi bi-list hamburger",
                                      viewBox: "0 0 16 16",
                                      children: Object(U.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  });
                },
              })
            : Object(U.jsx)(Q.Consumer, {
                children: function (e) {
                  return Object(U.jsx)(U.Fragment, {
                    children: Object(U.jsx)(f.a, {
                      open: c,
                      onSetOpen: u,
                      sidenav:
                        "menu" === i
                          ? Object(U.jsx)(G, {})
                          : "signUp" === i
                          ? Object(U.jsx)(J, {})
                          : Object(U.jsx)(X, Object(b.a)({}, e)),
                      children: Object(U.jsx)(O.a, {
                        className: "container-fluid mb-2 mb-2 navigation",
                        children: Object(U.jsxs)(p.a, {
                          children: [
                            Object(U.jsx)(x.a.Item, {
                              children: Object(U.jsx)(d.b, {
                                className: "navbar-brand",
                                to: "/",
                                children: "SpartanCoin",
                              }),
                            }),
                            Object(U.jsxs)(x.a.Item, {
                              className: "d-flex",
                              children: [
                                Object(U.jsx)(m.a, {
                                  id: "signup",
                                  type: "button",
                                  variant: "outline-light",
                                  onClick: function () {
                                    u(!0), g("signUp");
                                  },
                                  children: "Sign-up",
                                }),
                                Object(U.jsx)(m.a, {
                                  id: "login",
                                  type: "button",
                                  variant: "outline-light",
                                  onClick: function () {
                                    u(!0), g("login");
                                  },
                                  children: "Login",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  });
                },
              });
        },
        $ = a(219),
        ee = a(214),
        te = a(108),
        ae = a(220),
        ne = a(33),
        ce = (a(154), "About"),
        se = Object(U.jsxs)(ee.a, {
          children: [
            Object(U.jsxs)(te.a, {
              md: 8,
              className: "cardBody",
              children: [
                " ",
                Object(U.jsx)("h1", { children: ce }),
                Object(U.jsx)("p", { children: "Welcome to SpartanCoin!" }),
                Object(U.jsx)("p", {
                  children:
                    'SpartanCoin the newest Cryptocurrency is developed as a part of 295B! The main advantages of cryptocurrency is the transactions are super fast, digital, secure and worldwide. In essence it also allows to maintain the records without the risk of data being pirated. Fraud is, actually, greatly reduced. Want to learn more? See the "Learn More" section below. Ready to get started? Click Sign Up!',
                }),
              ],
            }),
            Object(U.jsx)(te.a, {
              md: 4,
              children: Object(U.jsx)("img", {
                src: "./assets/images/coin.png",
                style: { width: 400, height: 275 },
                className: "image round",
                alt: "Coin",
              }),
            }),
          ],
        });
      var re = function () {
          return ne.isMobile
            ? Object(U.jsxs)(ae.a, {
                className: "mobileView",
                children: [
                  Object(U.jsx)($.a.Toggle, {
                    as: ae.a.Header,
                    eventKey: "0",
                    children: ce,
                  }),
                  Object(U.jsx)($.a.Collapse, {
                    eventKey: "0",
                    children: Object(U.jsx)(ae.a.Body, { children: se }),
                  }),
                ],
              })
            : Object(U.jsx)(ae.a, {
                className: "desktopCard",
                children: Object(U.jsx)(ae.a.Body, { children: se }),
              });
        },
        oe = (a(155), "Learn More"),
        ie = Object(U.jsxs)(ee.a, {
          children: [
            Object(U.jsx)(te.a, {
              md: 6,
              children: Object(U.jsx)("img", {
                src: "https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_960_720.jpg",
                className: "image",
                alt: "Learn More",
              }),
            }),
            Object(U.jsxs)(te.a, {
              md: 6,
              className: "cardBody",
              id: "learnCard",
              children: [
                " ",
                Object(U.jsx)("h1", { children: oe }),
                Object(U.jsx)("p", {
                  children:
                    "Cryptocurrency which is also known as crypto is a digital currency used as a medium of exchange. It uses cryptography (the practice of securing communication under a third party) to secure, verify transactions and also to control the creation of new units such as blocks of a particular cryptocurrency. The strong characteristic feature of a cryptocurrency is the fact that it is not controlled by any central authority. The decentralized nature of the blockchain makes cryptocurrency theoretically immune to the old ways of government control and interference. Cryptocurrencies can be traded between two parties using public and private keys.",
                }),
              ],
            }),
          ],
        });
      var le = function () {
        return ne.isMobile
          ? Object(U.jsxs)(ae.a, {
              className: "mobileView",
              children: [
                Object(U.jsx)($.a.Toggle, {
                  as: ae.a.Header,
                  eventKey: "1",
                  children: oe,
                }),
                Object(U.jsx)($.a.Collapse, {
                  eventKey: "1",
                  children: Object(U.jsx)(ae.a.Body, { children: ie }),
                }),
              ],
            })
          : Object(U.jsx)(ae.a, {
              className: "desktopCard",
              children: Object(U.jsx)(ae.a.Body, { children: ie }),
            });
      };
      a(156);
      var je = function () {
        var e = Object(n.useContext)(Q).logged_in,
          t = Object(n.useState)(!1),
          a = Object(h.a)(t, 2),
          c = a[0],
          s = a[1];
        console.log(e);
        var r = function (e) {
          s(e);
        };
        return ne.isMobile && e
          ? Object(U.jsxs)(ae.a, {
              className: "mobileView",
              children: [
                Object(U.jsx)($.a.Toggle, {
                  as: ae.a.Header,
                  eventKey: "2",
                  children: "Get Started",
                }),
                Object(U.jsx)($.a.Collapse, {
                  eventKey: "2",
                  children: Object(U.jsx)(ae.a.Body, {
                    children: Object(U.jsxs)(ee.a, {
                      style: { textAlign: "center" },
                      children: [
                        Object(U.jsxs)(te.a, {
                          md: 7,
                          className: "cardBody",
                          children: [
                            Object(U.jsx)("h1", { children: "Get Started" }),
                            Object(U.jsx)("p", {
                              children:
                                "Please Sign-Up to create your own account. After submitting the Sign-Up form, please be sure to keep your private key in a safe place. You need this private key for any peer-to-peer transactions. On the initial login you will notice that your account is empty, in order to fill your account with coins you will have to either mine the coins! Once you have a some coins in your wallet, you can start transactions.",
                            }),
                          ],
                        }),
                        Object(U.jsx)(te.a, {
                          md: 5,
                          children: Object(U.jsx)("img", {
                            src: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
                            className: "image",
                            alt: "Started",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          : ne.isMobile
          ? Object(U.jsx)(Q.Consumer, {
              children: function (e) {
                return Object(U.jsx)(f.a, {
                  open: c,
                  onSetOpen: r,
                  sidenav: Object(U.jsx)(J, {}),
                  children: Object(U.jsxs)(ae.a, {
                    className: "mobileView",
                    children: [
                      Object(U.jsx)($.a.Toggle, {
                        as: ae.a.Header,
                        eventKey: "2",
                        children: "Get Started",
                      }),
                      Object(U.jsx)($.a.Collapse, {
                        eventKey: "2",
                        children: Object(U.jsx)(ae.a.Body, {
                          children: Object(U.jsxs)(ee.a, {
                            style: { textAlign: "center" },
                            children: [
                              Object(U.jsxs)(te.a, {
                                md: 7,
                                className: "cardBody",
                                children: [
                                  Object(U.jsx)("h1", {
                                    children: "Get Started",
                                  }),
                                  Object(U.jsx)("p", {
                                    children:
                                      "Please Sign-Up to create your own account. After submitting the Sign-Up form, please be sure to keep your private key in a safe place. You need this private key for any peer-to-peer transactions. On the initial login you will notice that your account is empty, in order to fill your account with coins you will have to either mine the coins! Once you have a some coins in your wallet, you can start transactions.",
                                  }),
                                  Object(U.jsx)(m.a, {
                                    variant: "dark",
                                    onClick: function () {
                                      return s(!0);
                                    },
                                    children: "Sign Up !",
                                  }),
                                ],
                              }),
                              Object(U.jsx)(te.a, {
                                md: 5,
                                children: Object(U.jsx)("img", {
                                  src: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
                                  className: "image",
                                  alt: "Started",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                });
              },
            })
          : e
          ? Object(U.jsx)(ae.a, {
              className: "desktopCard",
              children: Object(U.jsx)(ae.a.Body, {
                children: Object(U.jsxs)(ee.a, {
                  style: { textAlign: "center" },
                  children: [
                    Object(U.jsxs)(te.a, {
                      md: 7,
                      className: "cardBody",
                      children: [
                        Object(U.jsx)("h1", { children: "Get Started" }),
                        Object(U.jsx)("p", {
                          children:
                            "Please Sign-Up to create your own account. After submitting the Sign-Up form, please be sure to keep your private key in a safe place. You need this private key for any peer-to-peer transactions. On the initial login you will notice that your account is empty, in order to fill your account with coins you will have to either mine the coins! Once you have a some coins in your wallet, you can start transactions.",
                        }),
                      ],
                    }),
                    Object(U.jsx)(te.a, {
                      md: 5,
                      children: Object(U.jsx)("img", {
                        src: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
                        className: "image",
                        alt: "Started",
                      }),
                    }),
                  ],
                }),
              }),
            })
          : Object(U.jsx)(Q.Consumer, {
              children: function (e) {
                return Object(U.jsx)(f.a, {
                  open: c,
                  onSetOpen: r,
                  sidenav: Object(U.jsx)(J, {}),
                  children: Object(U.jsx)(ae.a, {
                    className: "desktopCard",
                    children: Object(U.jsx)(ae.a.Body, {
                      children: Object(U.jsxs)(ee.a, {
                        style: { textAlign: "center" },
                        children: [
                          Object(U.jsxs)(te.a, {
                            md: 7,
                            className: "cardBody",
                            children: [
                              Object(U.jsx)("h1", { children: "Get Started" }),
                              Object(U.jsx)("p", {
                                children:
                                  "Please Sign-Up to create your own account. After submitting the Sign-Up form, please be sure to keep your private key in a safe place. You need this private key for any peer-to-peer transactions. On the initial login you will notice that your account is empty, in order to fill your account with coins you will have to either mine the coins! Once you have a some coins in your wallet, you can start transactions.",
                              }),
                              Object(U.jsx)(m.a, {
                                variant: "dark",
                                onClick: function () {
                                  return s(!0);
                                },
                                children: "Sign Up !",
                              }),
                            ],
                          }),
                          Object(U.jsx)(te.a, {
                            md: 5,
                            children: Object(U.jsx)("img", {
                              src: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
                              className: "image",
                              alt: "Started",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                });
              },
            });
      };
      var de = function () {
        return Object(U.jsx)(U.Fragment, {
          children: Object(U.jsxs)($.a, {
            defaultActiveKey: "0",
            children: [
              Object(U.jsx)(re, {}),
              Object(U.jsx)(le, {}),
              Object(U.jsx)(je, {}),
            ],
          }),
        });
      };
      var ue = function () {
          return Object(U.jsx)(U.Fragment, { children: Object(U.jsx)(de, {}) });
        },
        be = a(107);
      a(157);
      var he = function () {
          var e = Object(n.useContext)(Q),
            t = e.publicKey,
            a = e.username,
            c = Object(n.useState)(),
            s = Object(h.a)(c, 2),
            r = s[0],
            o = s[1];
          Object(n.useEffect)(function () {
            i();
          });
          var i = function () {
            T(t).then(function (e) {
              o(e.data);
            });
          };
          return Object(U.jsxs)(p.a, {
            children: [
              Object(U.jsxs)(ae.a, {
                body: !0,
                className: "walletCoin",
                style: { textAlign: "center" },
                children: [
                  Object(U.jsxs)("h3", { children: ["Welcome, ", a, "!"] }),
                  Object(U.jsxs)("h3", {
                    style: { float: "left" },
                    children: ["Coin: ", r],
                  }),
                ],
              }),
              Object(U.jsxs)(ae.a, {
                body: !0,
                className: "walletCoin",
                style: { textAlign: "center" },
                children: [
                  Object(U.jsx)(y.a.Label, {
                    children: Object(U.jsx)("h3", { children: "Public Key:" }),
                  }),
                  Object(U.jsxs)(M.a, {
                    className: "mb-3",
                    children: [
                      Object(U.jsx)(be.a, { readOnly: !0, value: t }),
                      Object(U.jsx)(M.a.Append, {
                        children: Object(U.jsx)(m.a, {
                          onClick: function () {
                            navigator.clipboard.writeText(t);
                          },
                          variant: "outline-secondary",
                          children: Object(U.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            class: "bi bi-clipboard",
                            viewBox: "0 0 16 16",
                            children: [
                              Object(U.jsx)("path", {
                                d: "M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z",
                              }),
                              Object(U.jsx)("path", {
                                d: "M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Oe = a(110),
        pe = a.n(Oe),
        xe = a(111),
        me = a.n(xe);
      a(202);
      var fe = function () {
        var e = Object(n.useContext)(Q),
          t = e.publicKey,
          a = e.username,
          c = Object(n.useState)([]),
          s = Object(h.a)(c, 2),
          r = s[0],
          o = s[1],
          i = { backgroundColor: "#353535", color: "white" };
        Object(n.useEffect)(
          function () {
            A(t)
              .then(function (e) {
                var n = 0;
                return (
                  e.data.forEach(function (e) {
                    var c;
                    (e.key = n),
                      (e.timestamp =
                        ((c = e.timestamp), new Date(c).toLocaleString())),
                      e.fromAddress === t &&
                        ((e.fromAddress = a),
                        (e.amount = " - " + e.amount),
                        B(e.toAddress).then(function (t) {
                          t.data.message || (t.data.message = "User not Found"),
                            (e.toAddress = t.data.message);
                        })),
                      e.toAddress === t &&
                        ((e.toAddress = a),
                        (e.amount = " + " + e.amount),
                        e.fromAddress
                          ? B(e.fromAddress).then(function (t) {
                              t.data.message ||
                                (t.data.message = "User not Found"),
                                (e.fromAddress = t.data.message);
                            })
                          : (e.fromAddress = "System")),
                      n++;
                  }),
                  e.data
                );
              })
              .then(function (e) {
                setTimeout(function () {
                  o(e);
                }, 1e3);
              });
          },
          [t, a]
        );
        var l = [
            {
              dataField: "fromAddress",
              text: "From",
              sort: !0,
              headerSortingStyle: i,
              sortCaret: function (e, t) {
                return e
                  ? "asc" === e
                    ? Object(U.jsxs)("span", {
                        children: [
                          "\xa0\xa0",
                          Object(U.jsx)("i", { className: "fas fa-sort-up" }),
                          Object(U.jsx)("i", {
                            className: "fas fa-sort-down active",
                          }),
                        ],
                      })
                    : "desc" === e
                    ? Object(U.jsxs)("span", {
                        children: [
                          "\xa0\xa0",
                          Object(U.jsx)("i", {
                            className: "fas fa-sort-up active",
                          }),
                          Object(U.jsx)("i", { className: "fas fa-sort-down" }),
                        ],
                      })
                    : null
                  : Object(U.jsxs)("span", {
                      children: [
                        "\xa0\xa0",
                        Object(U.jsx)("i", { className: "fas fa-sort-up" }),
                        Object(U.jsx)("i", { className: "fas fa-sort-down" }),
                      ],
                    });
              },
            },
            {
              dataField: "toAddress",
              text: "Recipient",
              sort: !0,
              headerSortingStyle: i,
              sortCaret: function (e, t) {
                return e
                  ? "asc" === e
                    ? Object(U.jsxs)("span", {
                        children: [
                          "\xa0\xa0",
                          Object(U.jsx)("i", { className: "fas fa-sort-up" }),
                          Object(U.jsx)("i", {
                            className: "fas fa-sort-down active",
                          }),
                        ],
                      })
                    : "desc" === e
                    ? Object(U.jsxs)("span", {
                        children: [
                          "\xa0\xa0",
                          Object(U.jsx)("i", {
                            className: "fas fa-sort-up active",
                          }),
                          Object(U.jsx)("i", { className: "fas fa-sort-down" }),
                        ],
                      })
                    : null
                  : Object(U.jsxs)("span", {
                      children: [
                        "\xa0\xa0",
                        Object(U.jsx)("i", { className: "fas fa-sort-up" }),
                        Object(U.jsx)("i", { className: "fas fa-sort-down" }),
                      ],
                    });
              },
            },
            {
              dataField: "amount",
              text: "Amount",
              sort: !0,
              headerSortingStyle: i,
              sortCaret: function (e, t) {
                return e
                  ? "asc" === e
                    ? Object(U.jsxs)("span", {
                        children: [
                          "\xa0\xa0",
                          Object(U.jsx)("i", { className: "fas fa-sort-up" }),
                          Object(U.jsx)("i", {
                            className: "fas fa-sort-down active",
                          }),
                        ],
                      })
                    : "desc" === e
                    ? Object(U.jsxs)("span", {
                        children: [
                          "\xa0\xa0",
                          Object(U.jsx)("i", {
                            className: "fas fa-sort-up active",
                          }),
                          Object(U.jsx)("i", { className: "fas fa-sort-down" }),
                        ],
                      })
                    : null
                  : Object(U.jsxs)("span", {
                      children: [
                        "\xa0\xa0",
                        Object(U.jsx)("i", { className: "fas fa-sort-up" }),
                        Object(U.jsx)("i", { className: "fas fa-sort-down" }),
                      ],
                    });
              },
            },
            {
              dataField: "timestamp",
              text: "Timestamp",
              sort: !0,
              headerSortingStyle: i,
              sortCaret: function (e, t) {
                return e
                  ? "asc" === e
                    ? Object(U.jsxs)("span", {
                        children: [
                          "\xa0\xa0",
                          Object(U.jsx)("i", { className: "fas fa-sort-up" }),
                          Object(U.jsx)("i", {
                            className: "fas fa-sort-down active",
                          }),
                        ],
                      })
                    : "desc" === e
                    ? Object(U.jsxs)("span", {
                        children: [
                          "\xa0\xa0",
                          Object(U.jsx)("i", {
                            className: "fas fa-sort-up active",
                          }),
                          Object(U.jsx)("i", { className: "fas fa-sort-down" }),
                        ],
                      })
                    : null
                  : Object(U.jsxs)("span", {
                      children: [
                        "\xa0\xa0",
                        Object(U.jsx)("i", { className: "fas fa-sort-up" }),
                        Object(U.jsx)("i", { className: "fas fa-sort-down" }),
                      ],
                    });
              },
            },
          ],
          j = {
            renderer: function (e) {
              return Object(U.jsx)("div", {
                children: Object(U.jsx)("p", { children: e.label }),
              });
            },
            showExpandColumn: !0,
            expandHeaderColumnRenderer: function (e) {
              return e.isAnyExpands
                ? Object(U.jsx)("b", { children: "-" })
                : Object(U.jsx)("b", { children: "+" });
            },
            expandColumnRenderer: function (e) {
              return e.expanded
                ? Object(U.jsx)("b", { children: "-" })
                : Object(U.jsx)("b", { children: "..." });
            },
          };
        return 0 === r.length
          ? Object(U.jsx)(p.a, {
              className: "buttonSize",
              children: Object(U.jsxs)(ae.a, {
                body: !0,
                style: {
                  textAlign: "center",
                  backgroundColor: "#D9D9D9",
                  color: "#353535",
                  height: 400,
                },
                children: [
                  Object(U.jsx)("h3", {
                    children: "You have no Transactions yet!",
                  }),
                  Object(U.jsx)("p", {
                    children:
                      "Lets get going on this! Start by clicking one of the buttons below!",
                  }),
                  Object(U.jsx)(m.a, {
                    href: "/mining",
                    style: { marginTop: 20, marginLeft: 20 },
                    children: "Mine Coin",
                  }),
                ],
              }),
            })
          : Object(U.jsx)(U.Fragment, {
              children: Object(U.jsx)(p.a, {
                className: "tableSize",
                children: Object(U.jsx)(pe.a, {
                  className: "table",
                  style: { textAlign: "center" },
                  keyField: "key",
                  data: r,
                  columns: l,
                  expandRow: j,
                  pagination: me()(),
                  defaultSorted: [{ dataField: "timestamp", order: "desc" }],
                  striped: !0,
                  hover: !0,
                  condensed: !0,
                }),
              }),
            });
      };
      var ge = function () {
          return Object(U.jsxs)(U.Fragment, {
            children: [Object(U.jsx)(he, {}), Object(U.jsx)(fe, {})],
          });
        },
        ye = a(113);
      a(203);
      var ve = function () {
        var e = Object(n.useRef)(),
          t = Object(n.useRef)(0),
          a = Object(n.useContext)(Q).publicKey,
          c = Object(n.useState)(0),
          s = Object(h.a)(c, 2),
          r = s[0],
          o = s[1],
          i = Object(n.useState)(0),
          l = Object(h.a)(i, 2),
          j = l[0],
          d = l[1],
          u = Object(n.useState)(!1),
          b = Object(h.a)(u, 2),
          O = b[0],
          x = b[1],
          f = Object(n.useState)(0),
          g = Object(h.a)(f, 2),
          v = g[0],
          w = g[1],
          k = Object(n.useState)(0),
          C = Object(h.a)(k, 2),
          S = C[0],
          N = C[1],
          T = Object(n.useState)(0),
          A = Object(h.a)(T, 2),
          B = A[0],
          _ = A[1],
          I = Object(n.useState)(0),
          H = Object(h.a)(I, 2),
          K = H[0],
          G = H[1],
          M = Object(n.useState)(!1),
          L = Object(h.a)(M, 2),
          D = L[0],
          E = L[1],
          V = Object(n.useState)(""),
          R = Object(h.a)(V, 2),
          Y = R[0],
          q = R[1],
          W = Object(n.useState)("danger"),
          J = Object(h.a)(W, 2),
          X = J[0],
          Z = J[1];
        Object(n.useEffect)(function () {
          P().then(function (e) {
            o(e.data);
            var t = 1 / e.data;
            w(t);
          });
        });
        var $ = function (e, t) {
            e && (E(!0), q(e), Z(t));
          },
          ne = function (e) {
            var t = (e = parseInt(e)) / 100;
            N(1), _(t), G(e * r + t);
          },
          ce = function (e) {
            var t = e * v;
            d(t);
            var a = t / 100;
            _(a), G(t + a);
          },
          se = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            e ? (x(!0), ne(t)) : (x(!1), ce(t));
          };
        return Object(U.jsx)(p.a, {
          children: Object(U.jsxs)(ae.a, {
            className: "cardStyle",
            style: { padding: 50 },
            children: [
              Object(U.jsx)(z.a, {
                show: D,
                variant: X,
                onClose: function () {
                  E(!1), q("");
                },
                children: Object(U.jsx)("p", { children: Y }),
              }),
              Object(U.jsxs)(y.a, {
                ref: e,
                id: "sendForm",
                children: [
                  Object(U.jsx)(y.a.Group, {
                    as: ee.a,
                    controlId: "to",
                    children: Object(U.jsx)(te.a, {
                      style: { marginTop: 5 },
                      md: { span: 7, offset: 2 },
                      children: Object(U.jsx)(y.a.Control, {
                        className: "inputBox",
                        type: "text",
                        placeholder: "Recipient (Public Key)",
                      }),
                    }),
                  }),
                  Object(U.jsx)(y.a.Group, {
                    as: ee.a,
                    controlId: "private",
                    children: Object(U.jsx)(te.a, {
                      style: { marginTop: 5 },
                      md: { span: 7, offset: 2 },
                      children: Object(U.jsx)(y.a.Control, {
                        className: "inputBox",
                        type: "text",
                        placeholder: "Private Key",
                      }),
                    }),
                  }),
                  Object(U.jsx)(y.a.Group, {
                    as: ee.a,
                    controlId: "label",
                    children: Object(U.jsx)(te.a, {
                      style: { marginTop: 5 },
                      md: { span: 7, offset: 2 },
                      children: Object(U.jsx)(y.a.Control, {
                        className: "inputBox",
                        type: "text",
                        placeholder: "Description",
                      }),
                    }),
                  }),
                  Object(U.jsxs)(y.a.Group, {
                    as: ee.a,
                    controlId: "cost",
                    children: [
                      Object(U.jsx)(y.a.Label, {
                        style: { marginTop: 5 },
                        column: !0,
                        md: 4,
                        children: "Amount USD:",
                      }),
                      Object(U.jsx)(te.a, {
                        style: { marginTop: 5 },
                        md: { span: 4, offset: 4 },
                        children: O
                          ? Object(U.jsx)(y.a.Control, {
                              className: "inputBox",
                              type: "text",
                              onFocus: function (e) {
                                return se(!1, e.target.value);
                              },
                              value: S,
                            })
                          : Object(U.jsx)(y.a.Control, {
                              className: "inputBox",
                              type: "text",
                              onChange: function (e) {
                                return ce(e.target.value);
                              },
                            }),
                      }),
                    ],
                  }),
                  Object(U.jsxs)(y.a.Group, {
                    as: ee.a,
                    controlId: "amount",
                    children: [
                      Object(U.jsx)(y.a.Label, {
                        style: { marginTop: 5 },
                        column: !0,
                        md: 4,
                        children: "Amount SpartanCoin:",
                      }),
                      Object(U.jsx)(te.a, {
                        style: { marginTop: 5 },
                        md: { span: 4, offset: 4 },
                        children: O
                          ? Object(U.jsx)(y.a.Control, {
                              className: "inputBox",
                              ref: t,
                              type: "text",
                              onChange: function (e) {
                                return ne(e.target.value);
                              },
                            })
                          : Object(U.jsx)(y.a.Control, {
                              className: "inputBox",
                              ref: t,
                              type: "text",
                              onFocus: function (e) {
                                return se(!0, e.target.value);
                              },
                              value: j,
                            }),
                      }),
                    ],
                  }),
                  Object(U.jsxs)(y.a.Group, {
                    as: ee.a,
                    controlId: "formPlaintextTransFees",
                    children: [
                      Object(U.jsx)(y.a.Label, {
                        style: { marginTop: 5 },
                        column: !0,
                        md: 4,
                        children: "Trans Fees 1%:",
                      }),
                      Object(U.jsx)(te.a, {
                        style: { marginTop: 5 },
                        md: { span: 4, offset: 4 },
                        children: Object(U.jsx)(y.a.Control, {
                          readOnly: !0,
                          value: B,
                        }),
                      }),
                    ],
                  }),
                  Object(U.jsxs)(y.a.Group, {
                    as: ee.a,
                    controlId: "formPlaintextTotal",
                    children: [
                      Object(U.jsx)(y.a.Label, {
                        style: { marginTop: 5 },
                        column: !0,
                        md: 4,
                        children: "Total SpartanCoin:",
                      }),
                      Object(U.jsx)(te.a, {
                        style: { marginTop: 5 },
                        md: { span: 4, offset: 4 },
                        children: Object(U.jsx)(y.a.Control, {
                          readOnly: !0,
                          value: K,
                        }),
                      }),
                    ],
                  }),
                  Object(U.jsx)(y.a.Group, {
                    as: ee.a,
                    children: Object(U.jsx)(te.a, {
                      style: { marginTop: 5 },
                      md: { span: 10, offset: 5 },
                    }),
                  }),
                ],
              }),
              Object(U.jsx)(m.a, {
                type: "button",
                onClick: function (t) {
                  t.preventDefault();
                  var n = Object(ye.a)(e.current).reduce(function (e, t) {
                    return (e[t.getAttribute("id")] = t.value), e;
                  }, {});
                  (n.from = a),
                    console.log(n),
                    console.log(
                      Object.values(n).reduce(function (e, t) {
                        return e && !!t;
                      }, !0)
                    ),
                    Object.values(n).reduce(function (e, t) {
                      return e && !!t;
                    }, !0)
                      ? (console.log(e.current),
                        console.log(e.current[0].value),
                        F(n)
                          .then(function (e) {
                            document.getElementById("sendForm").reset(),
                              $("Transaction successful.", "success");
                          })
                          .catch(function (e) {
                            $(e.response.data.message, "danger");
                          }))
                      : $("Fill out the entire form", "danger");
                },
                children: "Continue",
              }),
            ],
          }),
        });
      };
      a(204);
      var we = function () {
        var e = Object(n.useContext)(Q).publicKey,
          t = Object(n.useState)(),
          a = Object(h.a)(t, 2),
          c = a[0],
          s = a[1];
        Object(n.useEffect)(function () {
          r();
        });
        var r = function () {
          T(e).then(function (e) {
            s(e.data);
          });
        };
        return Object(U.jsx)(p.a, {
          children: Object(U.jsxs)(ae.a, {
            className: "walletCard",
            body: !0,
            style: { textAlign: "center" },
            children: [
              Object(U.jsx)("h2", { children: "Send Coins" }),
              Object(U.jsxs)("h3", {
                style: { float: "left" },
                children: ["Coin: ", c, " "],
              }),
            ],
          }),
        });
      };
      var ke = function () {
        return Object(U.jsxs)(U.Fragment, {
          children: [Object(U.jsx)(we, {}), Object(U.jsx)(ve, {})],
        });
      };
      a(205);
      var Ce = function () {
        var e = Object(n.useState)(0),
          t = Object(h.a)(e, 2),
          a = t[0],
          c = t[1],
          s = Object(n.useState)(!1),
          r = Object(h.a)(s, 2),
          o = r[0],
          i = r[1],
          l = Object(n.useRef)(null),
          j = Object(n.useState)(!1),
          d = Object(h.a)(j, 2),
          u = d[0],
          b = d[1],
          O = Object(n.useState)(!1),
          x = Object(h.a)(O, 2),
          f = x[0],
          y = x[1],
          v = function () {
            return b(!1);
          },
          w = function () {
            return y(!1);
          };
        return Object(U.jsxs)(U.Fragment, {
          children: [
            Object(U.jsx)(ae.a, {
              className: "text-center",
              children: Object(U.jsxs)(ae.a.Body, {
                className: "justify-content-center",
                children: [
                  Object(U.jsx)(ae.a.Text, {
                    children:
                      "Mining is gaining cryptocurrencies by solving cryptographic equations through the use of computers. This process involves validating data blocks and adding transaction records to a public record (ledger) known as a blockchain. Your machine will automatically attempt to solve the equation, if correct, the reward is yours. To start, click the Start Mine button below.",
                  }),
                  o
                    ? Object(U.jsx)(p.a, {
                        className: "timerWrap",
                        children: Object(U.jsx)("p", {
                          className: "timer",
                          children: (function () {
                            var e = "0".concat(a % 60).slice(-2),
                              t = "".concat(Math.floor(a / 60)),
                              n = "0".concat(t % 60).slice(-2);
                            return "".concat(n, " : ").concat(e);
                          })(),
                        }),
                      })
                    : Object(U.jsx)(m.a, {
                        variant: "dark",
                        style: { width: "25%" },
                        onClick: function () {
                          return (
                            i(!0),
                            (l.current = setInterval(function () {
                              c(function (e) {
                                return e + 1;
                              });
                            }, 1e3)),
                            void H()
                              .then(function (e) {
                                clearInterval(l.current),
                                  i(!1),
                                  b(!0),
                                  c(0),
                                  console.log(e.data);
                              })
                              .catch(function () {
                                clearInterval(l.current), i(!1), y(!0), c(0);
                              })
                          );
                        },
                        children: "Start Mining",
                      }),
                ],
              }),
            }),
            Object(U.jsxs)(g.a, {
              show: u,
              onHide: v,
              backdrop: "static",
              keyboard: !1,
              children: [
                Object(U.jsx)(g.a.Header, {
                  children: Object(U.jsx)(g.a.Title, {
                    children: Object(U.jsx)("h3", {
                      children: "Mining Success!",
                    }),
                  }),
                }),
                Object(U.jsxs)(g.a.Body, {
                  children: [
                    Object(U.jsx)("h3", {
                      className: "mineIcon",
                      children: "\u26cf\ufe0f",
                    }),
                    Object(U.jsx)("strong", {
                      children: Object(U.jsx)("h3", { children: "Sucess!" }),
                    }),
                    Object(U.jsxs)("p", {
                      children: [
                        "A mining reward of ",
                        Object(U.jsx)("strong", {
                          children: "100 Cryptocoins",
                        }),
                        " was credited to your account.",
                      ],
                    }),
                    Object(U.jsx)("p", { children: "Thanks for mining!" }),
                  ],
                }),
                Object(U.jsx)(g.a.Footer, {
                  children: Object(U.jsx)(m.a, {
                    onClick: v,
                    children: "Close",
                  }),
                }),
              ],
            }),
            Object(U.jsxs)(g.a, {
              show: f,
              onHide: w,
              backdrop: "static",
              keyboard: !1,
              children: [
                Object(U.jsx)(g.a.Header, {
                  children: Object(U.jsx)(g.a.Title, {
                    children: Object(U.jsx)("h3", {
                      children: "Mining unsuccessful!",
                    }),
                  }),
                }),
                Object(U.jsxs)(g.a.Body, {
                  children: [
                    Object(U.jsx)("h3", {
                      className: "mineIcon",
                      children: "\u26cf\ufe0f",
                    }),
                    Object(U.jsx)("p", {
                      children: "Someone else mined the transaction.",
                    }),
                    Object(U.jsx)("p", {
                      children: "Thanks for mining. Please, try again!",
                    }),
                  ],
                }),
                Object(U.jsx)(g.a.Footer, {
                  children: Object(U.jsx)(m.a, {
                    onClick: w,
                    children: "Close",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var Se = function () {
        return Object(U.jsx)(U.Fragment, { children: Object(U.jsx)(Ce, {}) });
      };
      a(206);
      var Ne = function () {
          return Object(U.jsx)("div", {
            children: Object(U.jsx)(ae.a, {
              id: "footer",
              className: "text-center",
              bg: "dark",
              text: "white",
              children: Object(U.jsx)(ae.a.Body, {
                children: Object(U.jsxs)(ae.a.Text, {
                  children: [
                    "SpartanCoin created by :",
                    Object(U.jsxs)("a", {
                      href: "https://github.com/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: [" ", "Aditya Inampudi", " "],
                    }),
                    " ",
                    "|",
                    Object(U.jsxs)("a", {
                      href: "https://github.com/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: ["Rakesh Nagarajappa", " "],
                    }),
                    " ",
                    "|",
                    Object(U.jsx)("a", {
                      href: "https://github.com/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "Shivendra Kumar",
                    }),
                    " ",
                    "|",
                    Object(U.jsxs)("a", {
                      href: "https://github.com/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: [" ", "Vedakshay Jandhyala"],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        Te =
          (a(207),
          (function (e) {
            Object(l.a)(a, e);
            var t = Object(j.a)(a);
            function a(e) {
              var n;
              return (
                Object(o.a)(this, a),
                ((n = t.call(this, e)).setSession = function (e) {
                  var t = e.username,
                    a = e.publicKey,
                    c = e.logged_in;
                  n.setState(function (e) {
                    return { username: t, publicKey: a, logged_in: c };
                  });
                }),
                (n.state = { setSession: n.setSession }),
                n
              );
            }
            return (
              Object(i.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    this.state.logged_in ||
                      _().then(function (t) {
                        console.log(t),
                          t.data.logged_in && e.setSession(t.data);
                      });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(U.jsx)(Q.Provider, {
                      value: this.state,
                      children: Object(U.jsxs)(d.a, {
                        children: [
                          Object(U.jsx)(Z, {}),
                          Object(U.jsx)(p.a, {
                            children: Object(U.jsxs)(u.c, {
                              children: [
                                Object(U.jsx)(u.a, {
                                  exact: !0,
                                  path: "/",
                                  component: ue,
                                }),
                                Object(U.jsx)(u.a, {
                                  exact: !0,
                                  path: "/profile",
                                  component: ge,
                                }),
                                Object(U.jsx)(u.a, {
                                  exact: !0,
                                  path: "/send",
                                  component: ke,
                                }),
                                Object(U.jsx)(u.a, {
                                  exact: !0,
                                  path: "/mining",
                                  component: Se,
                                }),
                              ],
                            }),
                          }),
                          Object(U.jsx)(Ne, {}),
                        ],
                      }),
                    });
                  },
                },
              ]),
              a
            );
          })(n.Component));
      a(208);
      r.a.render(
        Object(U.jsx)(c.a.StrictMode, { children: Object(U.jsx)(Te, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[209, 1, 2]],
]);
//# sourceMappingURL=main.d4806807.chunk.js.map
