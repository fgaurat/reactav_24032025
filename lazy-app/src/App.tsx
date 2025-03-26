import './App.css'
import { lazy, Suspense } from 'react';

const Comp01 = lazy(() => import('./Comp01.tsx'));
const Comp02 = lazy(() => import('./Comp02.tsx'));

function App() {

  return (
    <>
      <h1>App</h1>

      <hr />
      <Suspense fallback={<span>Loading Comp01 ...</span>}>
        <Comp01 />
      </Suspense>

      <hr />
      <Suspense fallback={<span>Loading Comp01 ...</span>}>
        <Comp02 />
      </Suspense>

    </>
  )
}

export default App
