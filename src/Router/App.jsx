import React from 'react';

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import AddAgent from './AddAgent';
import AddContact from './AddContact';
import Agent from './Agent';
import Contact from './Contact';
import Ticket from './Ticket';

function App () {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/agent'>Agent</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/tickets'>Tickets</Link>
            </li>
            <li>
              <Link to='/addcontact'>Add Contact</Link>
            </li>
            <li>
              <Link to='/addagent'>Add Agent</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/agent' component={Agent} />

          <Route path='/contact' component={Contact} />

          <Route path='/tickets' component={Ticket} />

          <Route path='/addcontact' component={AddContact} />

          <Route path='/addagent' component={AddAgent} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
