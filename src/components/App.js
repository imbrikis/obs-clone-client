import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const PageOne = () => {
  return (
    <div>
      <div>PageOne</div>
      <a href="/pagetwo">Navigate to Page Two</a>
    </div>
  )
}

const PageTwo = () => {
  return (
    <div>
      <div>PageTwo</div>
      <a href="/">Navigate to Page One</a>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
