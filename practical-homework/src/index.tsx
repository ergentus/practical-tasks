import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';
import App from './App';
import Task01 from './microtasks/Task01/Task01';
import Task02 from './microtasks/Task02/Task02';
import Task03 from './microtasks/Task03/Task03';
import Task04 from './Task04/Task04';


const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(
   // <App />
   //<Task01 />
   //<Task02 />
   //<Task03 />
   <Task04 />
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

