import React from 'react';
import './style.css';
import Greet from './Greet';
import Welcome from './Welcome ';

import Parent from './Parent';

import Foo from './Foo';
import List from './List';
export default function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <List />
      <Foo />
      <Parent />
      <Greet name="bruce" sirname="kumar" />
      <Welcome name="jf" />
      <counter name="jf" />
      <parent />

      <button type="button" class="btn btn-primary">Primary</button>

      
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
