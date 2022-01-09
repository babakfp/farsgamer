const router = require("express").Router()

router.get("/signup", (req, res) => res.render(
  "pages/signup",
  {
    layout: "layouts/signup-signin"
  }
));

router.get("/signin", (req, res) => res.render(
  "pages/signin",
  {
    layout: "layouts/signup-signin"
  }
));

router.get("/posts", (req, res) => res.render(
  "pages/posts",
  {
    layout: "layouts/header-and-mmenu",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/terms", (req, res) => res.render(
  "pages/terms",
  {
    layout: "layouts/page",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/shop", (req, res) => res.render(
  "pages/shop",
  {
    layout: "layouts/header-and-mmenu",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/dashboard", (req, res) => res.render(
  "pages/dashboard",
  {
    layout: "layouts/dashboard"
  }
));

router.get("/dashboard/comments", (req, res) => res.render(
  "pages/dashboard/comments",
  {
    layout: "layouts/dashboard"
  }
));

router.get("/dashboard/comments-empty", (req, res) => res.render(
  "pages/dashboard/comments-empty",
  {
    layout: "layouts/dashboard"
  }
));

router.get("/dashboard/profile", (req, res) => res.render(
  "pages/dashboard/profile",
  {
    layout: "layouts/dashboard"
  }
));

router.get("/dashboard/orders", (req, res) => res.render(
  "pages/dashboard/orders",
  {
    layout: "layouts/dashboard"
  }
));

router.get("/dashboard/orders-empty", (req, res) => res.render(
  "pages/dashboard/orders-empty",
  {
    layout: "layouts/dashboard"
  }
));

router.get("/dashboard/order-details", (req, res) => res.render(
  "pages/dashboard/order-details",
  {
    layout: "layouts/dashboard"
  }
));

router.get("/dashboard/announcements", (req, res) => res.render(
  "pages/dashboard/announcements",
  {
    layout: "layouts/dashboard"
  }
));

router.get("/single-product", (req, res) => res.render(
  "pages/single-product",
  {
    layout: "layouts/header-and-mmenu",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/single-post", (req, res) => res.render(
  "pages/single-post",
  {
    layout: "layouts/header-and-mmenu",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/contact", (req, res) => res.render(
  "pages/contact",
  {
    layout: "layouts/header-and-mmenu",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/faq", (req, res) => res.render(
  "pages/faq",
  {
    layout: "layouts/page",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/faq-and-order-tracking", (req, res) => res.render(
  "pages/faq-and-order-tracking/index",
  {
    layout: "layouts/page-2",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/order-specifications", (req, res) => res.render(
  "pages/order-specifications",
  {
    layout: "layouts/header-and-mmenu",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/cart", (req, res) => res.render(
  "pages/cart",
  {
    layout: "layouts/header-and-mmenu",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/cart-empty", (req, res) => res.render(
  "pages/cart-empty",
  {
    layout: "layouts/header-and-mmenu",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/order-details", (req, res) => res.render(
  "pages/order-details",
  {
    layout: "layouts/header-and-mmenu",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/404", (req, res) => res.render(
  "pages/404",
  {
    layout: "layouts/header-and-mmenu",
    bodyClass: "header-and-sidebar-fixed",
  }
));

router.get("/404-2", (req, res) => res.render(
  "pages/404-2",
  {
    layout: "layouts/default",
  }
));

router.get("/stuff", (req, res) => res.render(
  "pages/stuff",
  {
    layout: "layouts/default",
  }
));

module.exports = router