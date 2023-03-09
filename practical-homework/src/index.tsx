import React from 'react';
import './index.css';
import * as serviceWorker from './Practice01/serviceWorker';
import { createRoot } from 'react-dom/client';
import Practice01 from './Practice01/Practice01';
import Practice02 from './Practice02/Practice02';
import Task01 from './microtasks/Task01/Task01';
import Task02 from './microtasks/Task02/Task02';
import Task03 from './microtasks/Task03/Task03';
import Task04 from './microtasks/Task04/Task04';
import Task05 from './microtasks/Task05/Task05';
import Task06 from './microtasks/Task06/Task06';



const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(
  /**
   * u can choose any practical homework or task for rendering
   */
  // <Practice01 />
  //  <Practice02 />
  // <Task01 />
  // <Task02 />
  // <Task03 />
  // <Task04 />
  // <Task05 />
  <Task06 />
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

