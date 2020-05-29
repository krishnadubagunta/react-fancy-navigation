import React from 'react'
import ReactFancyNavigation from 'react-fancy-navigation'

function App () {
  console.log(ReactFancyNavigation)
  return (
    <div className='App'>
      <header className='App-header'>
        <ReactFancyNavigation animate='translation' />
      </header>
    </div>
  )
}

export default App
