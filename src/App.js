import React from "react";
import Emojipedia from "./Emojipedia";


function App() {
  return (
      <div>
          <h1>
              <span>emojipedia</span>
          </h1>

          <dl className='dictionary'>
<Emojipedia />
          </dl>
      </div>
  );
}

export default App;
