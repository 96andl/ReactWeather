import React from 'react';
let {Link,IndexLink} = require('react-router');
let activeClass = {
  color: "red"
};
let NavBar = React.createClass({
    render() {
        return (
            <div>
            <h2>Nav Component</h2>
                <IndexLink to="/" className="btn btn-primary" activeClassName="btn-danger"> Get Weather </IndexLink>
                <Link to="/about" className="btn btn-primary" activeStyle={{fontSize:'2em'}}>About</Link>
                <Link to="/examples" className="btn btn-primary" activeClassName="btn-danger">Examples</Link>
            </div>
        )
    }
});

export default NavBar;