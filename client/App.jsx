import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  componentDidMount() {
    fetch('/api/').then(response => response.json()).then(json => {
      this.props.appState.message = json.version;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          <p>Seconds passed: {this.props.appState.timer}</p>
          <p>Api version: {this.props.appState.message}</p>
        </button>
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
