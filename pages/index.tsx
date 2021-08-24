import React from 'react';
import { Fragment } from 'react';
import Mainlayout from '../layouts/Mainlayout'
function index() {
    return (
     <Fragment>
         <Mainlayout >
          <div className="center">
              <h1>вас приветствует Shaker Box!</h1>
              <h3>Здесь собраны лучшие саундртеки!</h3>
          </div>
         </Mainlayout>

        <style jsx>
         {`
                .center {
                    margin-top:150px;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                }
         `}
        </style>
     </Fragment>

   );
}

export default index;