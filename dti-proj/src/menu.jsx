import React from 'react';

function Header() {
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}

function Content() {
    return (
        <div>
            <h1>Content</h1>
        </div>
    )
}

function Footer() {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}

function Menu() {

    return (

        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>

    );
}

export default Menu;