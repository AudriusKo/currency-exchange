import React from 'react';
import Balance from './components/Balance'
import Wallet from './components/Wallet'
import Input from './components/Input'
import Button from './components/Button'
import Rate from './components/Rate'
import Panel from './components/Panel'

function App() {
  return (
    <div className="container">
      <Panel>
        <Wallet />
        <Input />
        <Balance />
      </Panel>

      <Panel muted>
        <Rate />
        <Wallet />
        <Input />
        <Balance />
        <Button />
      </Panel>
    </div>
  );
}

export default App;
