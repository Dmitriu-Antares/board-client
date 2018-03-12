import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import renderer from './helpers/renderer';
var proxy = require('http-proxy-middleware');
import reducer from './client/root-reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cors from 'cors';

const app = express();



app.use(cors());

app.use(express.static('public'));
process.env.NODE_ENV === "production" && app.use('/api', proxy({target: __ENV__.api_server, changeOrigin: true}));
app.use('/',(req,res) => {

  const store = createStore(
      reducer,
      applyMiddleware(thunk),
  );
  res.send(renderer(req,store));

});



app.set('port', (process.env.PORT || 3002));

app.listen(app.get('port'), () => {
  console.log('listen on port 3002');
});
