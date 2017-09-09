import * as React from "react";
import { renderToString } from "react-dom/server";
import { I18nextProvider } from 'react-i18next';
import i18n from './services/i18n';
// import { matchPath } from "react-router";
// import createHistory from 'history/createBrowserHistory';
import { StaticRouter } from "react-router";
import { SharedRouterSwitch } from './sharedRouterSwitch';
import { Provider } from 'react-redux';
import createStore from './redux/store';
// import routes from "../shared/routes";
// import "../shared/favicon.ico";

function renderHTML(componentHTML: any) {
	return `<!doctype html>
  <html lang="en">
  
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>5 Calls: Make your voice heard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <!--
        manifest.json provides metadata used when your web app is added to the
        homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
      -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  
  
    <meta name="apple-itunes-app" content="app-id=1202558609">
  
    <!-- Schema.org markup for Google+ -->
    <meta itemprop="name" content="5 Calls">
    <meta itemprop="description" content="Spend 5 minutes. Make 5 calls. Make your voice heard.">
    <meta itemprop="image" content="%PUBLIC_URL%/img/5calls-logo.png">
  
    <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@make5calls">
    <meta name="twitter:title" content="5 Calls">
    <meta name="twitter:description" content="Spend 5 minutes. Make 5 calls. Make your voice heard.">
    <meta name="twitter:image:src" content="%PUBLIC_URL%/img/5calls-twitter.png">
  
    <!-- Open Graph data -->
    <meta property="og:title" content="5 Calls" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://5calls.org" />
    <meta property="og:image" content="%PUBLIC_URL%/img/5calls-twitter.png" />
    <meta property="og:description" content="Spend 5 minutes. Make 5 calls. Make your voice heard." />
    <meta property="og:site_name" content="5 Calls" />
    <meta property="fb:app_id" content="1201592636562906" />
  
    <!-- favicons -->
    <link rel="apple-touch-icon" sizes="57x57" href="%PUBLIC_URL%/img/fav/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="%PUBLIC_URL%/img/fav/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="%PUBLIC_URL%/img/fav/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="%PUBLIC_URL%/img/fav/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="%PUBLIC_URL%/img/fav/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="%PUBLIC_URL%/img/fav/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="%PUBLIC_URL%/img/fav/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="%PUBLIC_URL%/img/fav/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/img/fav/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="%PUBLIC_URL%/img/fav/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/img/fav/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="%PUBLIC_URL%/img/fav/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/img/fav/favicon-16x16.png">
    <meta name="msapplication-TileColor" content="#0032FF">
    <meta name="msapplication-TileImage" content="%PUBLIC_URL%/img/fav/ms-icon-144x144.png">
    <meta name="theme-color" content="#0032FF">
  
    <script src="https://use.fontawesome.com/e87f1bc9b3.js"></script>
    <script src="https://cdn.ravenjs.com/3.17.0/raven.min.js" crossorigin="anonymous"></script>
    <script>
      Raven.config('https://7f6e814bc848495aafd63747694a0a30@sentry.io/131886', {
        release: '%RELEASE_ID%'
      }).install()
    </script>
    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>
    <script>
        var OneSignal = window.OneSignal || [];
        OneSignal.push(["init", {
          appId: "5fd4ca41-9f6c-4149-a312-ae3e71b35c0e",
          allowLocalhostAsSecureOrigin: true,
          autoRegister: false,
          notifyButton: {
            enable: true,
            actionMessage: "wants to send urgent policy alerts. Approx 1 per week",
          },
        }]);
    </script>
    <style>
      .layout{display:flex;flex-direction:row;min-height:80%;margin:0 auto;max-width:1024px}@media only screen and (max-width:768px){.layout{flex-direction:column}}.layout__main{flex:2;margin:16px 24px 24px 6px}@media only screen and (max-width:768px){.layout__main{margin:0 24px 24px}}.layout__side{-ms-flex:1;flex:1;border-top:2px solid #e53935;margin:30px;min-width:300px}@media only screen and (max-width:768px){.layout__side{margin:0}}.logo__header{background-color:#e53935;min-height:12px}.logo__header__inner{padding:10px 30px 5px 30px}@media only screen and (max-width:768px){.logo__header__inner{padding:10px 15px}}.issues__header{text-align:center;background-color:#fff}.issues__header h2{margin:0;padding:12px;font-size:21px;text-align:center;background-color:#f5f5f5}.issues__title{font-size:48px;line-height:1;font-weight:bold;font-style:italic;margin:0;padding:12px 12px 0}.issues__title a{text-decoration:none;font-size:0.1px}.issues__logo{width:200px}.issues{box-shadow:0px 0px 12px 0px rgba(0,0,0,0.2)}@media only screen and (max-width:768px){.issues{box-shadow:none}}footer{background-color:#1875d1;text-align:center;font-size:16px;color:#fff;padding-top:12px}footer .colophon{padding:12px 0 48px 0;line-height:2em}footer .colophon a{padding:0 12px}footer .colophon a span{margin-left:5px}footer .colophon p a{padding:0;text-decoration:underline}footer a{color:#fff}body{font-family:"Roboto Condensed",sans-serif;color:#1875d1;background-color:#fff;margin:0;padding:0}html,body{height:100%}p{font-size:18px;line-height:1.4em;margin:0 0 16px 0}h2{margin:24px 0 16px 0;font-weight:bold;line-height:1.1em}h3{margin:24px 0 6px 0}.hypothesis__header p,.hypothesis__header li,.hypothesis__list p,.hypothesis__list li{font-size:21px}@media only screen and (max-width:481px){.hypothesis__header p,.hypothesis__header li,.hypothesis__list p,.hypothesis__list li{font-size:16px}}.hypothesis__title{font-size:58px;text-transform:uppercase}@media only screen and (max-width:481px){.hypothesis__title{font-size:30px}}.hypothesis__text p{font-size:21px}@media only screen and (max-width:481px){.hypothesis__text p{font-size:16px}}
    </style>
  </head>
  <body>
    <div id="root">
      ${componentHTML}
    </div>
    <script type="text/javascript" src="/static/js/main.5374c89.js"></script>
  </body>
  </html>`;
}

// const history = createHistory();

// const routes(location) = () => {
//   return (
//     <Router location={location}>
//       <Route path="/">
//         <p>hello</p>
//       </Route>
//   	</Router>
//   );
// };

export default function(req: any, res: any) {
  console.log(req.url);
  const context = {}

  const store = createStore({});

  const html = renderToString(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          {SharedRouterSwitch}
        </StaticRouter>
      </Provider>
    </I18nextProvider>
  )

  // res.status(200).send(renderHTML(html));
 
  // const match = matchPath( req.url, routes.props);
  // console.log("match",match);
  res.status(200).send(renderHTML(html));

	// 	if(error) {
	// 		res.status(500).send(error.message);
	// 	} else if(redirectLocation) {
	// 		res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	// 	} else if(renderProps) {
	// 		res.status(200).send(renderHTML(renderToString(<p>hi</p>)));
	// 	} else {
	// 		res.status(404).send("Not found");
	// 	}
	// });
}
