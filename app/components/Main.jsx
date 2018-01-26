let React = require('react');
import NavBar from 'NavBar';

let Main = (props) => {
    return (
        <div>
            <div className="container-fluid">
                <header>
                    <NavBar/>
                </header>
                <section>
                    {props.children}
                </section>
            </div>
        </div>
    )
};

module.exports = Main;