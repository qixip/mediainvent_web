import localFont from "next/font/local";

/** Headings: Social Gothic */
export const socialGothic = localFont({
  src: [
    { path: "../../fonts/Social-Ghotic/Social Gothic Bold.otf", weight: "700", style: "normal" },
    { path: "../../fonts/Social-Ghotic/Social Gothic DemiBold.otf", weight: "600", style: "normal" },
    { path: "../../fonts/Social-Ghotic/Social Gothic Medium.otf", weight: "500", style: "normal" },
    { path: "../../fonts/Social-Ghotic/Social Gothic Regular.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-heading",   // exposes CSS var
  display: "swap",
});

/** Body/UI: New Order */
export const newOrder = localFont({
  src: [
    { path: "../../fonts/New-Order/fonnts.com-New_Order_Light.otf", weight: "300", style: "normal" },
    { path: "../../fonts/New-Order/fonnts.com-New_Order_Regular.otf", weight: "400", style: "normal" },
    { path: "../../fonts/New-Order/fonnts.com-New_Order_Medium.otf", weight: "500", style: "normal" },
    { path: "../../fonts/New-Order/fonnts.com-New_Order_Semibold.otf", weight: "600", style: "normal" },
    { path: "../../fonts/New-Order/fonnts.com-New_Order_Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-body",       // exposes CSS var
  display: "swap",
});
