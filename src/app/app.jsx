/* global document */
import React, { useState, useEffect, Suspense } from 'react'
import ReactDOM from 'react-dom'

// import OtherComponent from './components/OtherComponent'
import ErrorBoundary from './components/ErrorBoundary'

const OtherComponent = React.lazy(() => import('./components/OtherComponent'))


const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (

    <ErrorBoundary>
      <div>
        <p>You clicked {count} times using Hooks</p>
        <button type="button" onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>

    </ErrorBoundary>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
)
