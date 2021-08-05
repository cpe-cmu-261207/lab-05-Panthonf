import React from 'react';
import { useState } from 'react'

import Header from './component/Header';
import Todo from './component/Todo';
import Footer from './component/Footer';

function App() {

return (
        <div>
              <Header firstname="Panthon" lastname="Kansap" student_id={630612105} ></Header>
          <Todo/>

          <Footer copyright = "Copyright © 2021 Minimal todo List by Panthon Kansap"></Footer>
        </div> 
  );
}

export default App;
