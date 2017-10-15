import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Hitbox from './components/Hitbox';

const App = observer(class App extends Component {
  componentDidMount() {
    this.props.store.recieveKeyStroke();
  }

  render() {
    const { chosenKey, togglePlaying, score, playerInput, scorePoint } = this.props.store;
    return (
      <div className="App">
        <Hitbox store={ this.props.store } />
        <p>{ `Hurry click this key ${chosenKey}` }</p>
        <button onClick={() => togglePlaying()}>
          Click to Play
        </button>
        <p>{ `Score: ${score}` } </p>
        <p>{ `You entered ${playerInput}` }</p>
        <div>
          {
            (!scorePoint)
              ? <p>Opps missed it!</p>
              : null
          }
        </div>
      </div>
    );
  }
})

export default App;
