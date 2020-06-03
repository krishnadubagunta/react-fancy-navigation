import React from 'react'
import ReactFancyNavigation from 'react-fancy-navigation'

function App () {
  window.React1 = require('react');
  return (
    <div className='App'>
      <header className='App-header'>
        <ReactFancyNavigation animate='translate' title="Example Application" color="black" />
      </header>
    </div>
  )
}

export default App
