import React, { Suspense } from 'react';
import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
// import { Feature } from './components/feature/feature';
const Feature = React.lazy(() => import('./components/feature/feature'));
const Home = React.lazy(() => import('./components/Home/Home'));
const About = React.lazy(() => import('./components/About/About'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));

function App() {
  const [num, setNum] = useState(0);
  const [load, setLoad] = useState(false);

  const addNumbers = () => {
    import('./utils/math').then((math) => {
      setNum(math.add(10, 20));
    });
  };

  return (
    <div className='App'>
      {/* <button type='button' onClick={addNumbers}>
        Add
      </button>
      <p>Result: {num}</p>

      <div>
        <button type='button' onClick={() => setLoad((load) => !load)}>
          Lazy Load
        </button>

        {load ? (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Feature />
          </Suspense>
        ) : null} 
        </div>*/}
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
