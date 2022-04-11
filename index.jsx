// This imports the same code, but from a package that is smaller.
// @TODO: Uncomment to see difference.
// import {Component1} from 'some-module-less';
// This imports same code, but from a package that export also a component that is large.
import {Component1} from 'some-module';
import ReactDOM from 'react-dom';

const Index = () => {
  return (<Component1/>);
}

ReactDOM.render(document.getElementById('root'), Index);
