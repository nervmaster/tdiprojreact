import React from 'react';
import { Link } from 'react-router-dom';
import { ADRESS } from '../../env';

const TopMenu = () => {
    return (
        <div className="top-menu">
            <table>
                <thead>
                <tr>
                    <th><Link to={ADRESS.ROOT}> Product List</Link></th>
                    <th><Link to={ADRESS.CREATE}>Create Product</Link></th> 
                </tr>
                </thead>
            </table>
        </div>

    );
}

export default TopMenu;