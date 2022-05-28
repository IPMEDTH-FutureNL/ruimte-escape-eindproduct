import React, { Component } from 'react'

export class Hint extends Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <div className="container__hint">
          <button className="hint">Hint</button>
      </div>
    )
  }
}

export default Hint