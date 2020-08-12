import React from 'react';

const TopMenu = () => {
    return (
        <div className="top-menu">
            <table>
                <thead>
                <tr>
                    <th><a href='/'> Product List </a></th>
                    <th><a href='/create'> Create Product </a></th>
                </tr>
                </thead>
            </table>
        </div>

    );
}

export default TopMenu;