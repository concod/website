import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W7MLVG8')`,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `"use strict";
              !function() {
                var t = window.driftt = window.drift = window.driftt || [];
                if (!t.init) {
                  if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                  t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
                  t.factory = function(e) {
                    return function() {
                      var n = Array.prototype.slice.call(arguments);
                      return n.unshift(e), t.push(n), t;
                    };
                  }, t.methods.forEach(function(e) {
                    t[e] = t.factory(e);
                  }), t.load = function(t) {
                    var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                    o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                    var i = document.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(o, i);
                  };
                }
              }();
              drift.SNIPPET_VERSION = '0.3.1';
              drift.load('zwxvr4aeg8r3');`,
            }}
          ></script>
          <script src="//app-sj11.marketo.com/js/forms2/js/forms2.min.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `MktoForms2.loadForm("//app-sj11.marketo.com", "517-WEJ-684", 1363);`,
            }}
          />
          <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `var Pricing_total__KGX5E = "";
              jQuery(document).ready(function(){
                jQuery( ".CTA_cta__2v4Cu" ).on("click", function() {
                    Pricing_total__KGX5E = jQuery(".Pricing_total__KGX5E").text();
                    console.log(Pricing_total__KGX5E);
                });
              });
              MktoForms2.whenReady(function (form){
              if(Pricing_total__KGX5E == '$ per month.'){
              jQuery(".mktoForm .SubscriptionText").hide();
              form.addHiddenFields({'jOYNCalculator' : ""});
              } else {
              jQuery(".mktoForm .SubscriptionText").show();
              jQuery(".mktoForm .subscriptionvalue").text(Pricing_total__KGX5E);
              form.addHiddenFields({'jOYNCalculator' : Pricing_total__KGX5E });
              }
              form.onSuccess(function(values, followUpUrl) {
              form.getFormElem().hide();
              jQuery(".tyt").css("display","flex");
              jQuery(".Form_form__left__3_dl9").css("display","none"); 
              return false;
              });
              });`,
            }}
          />
        </Head>

        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7MLVG8"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
