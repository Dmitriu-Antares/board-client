import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from '../client/Routers';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';


export default (req,store) => {
    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                {Routes(store)}
            </StaticRouter>
        </Provider>
    );

    return `
            <head>
                <base href="/" />
            </head>
            <body>
                <div id="root">${content}</div>
                <script >
                    window.INITIAL_STATE = ${JSON.stringify(store.getState())}
                </script>
                <script src="bundle.js"></script> 
            </body>
        </html>`
}