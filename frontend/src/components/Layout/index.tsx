import React from 'react';
import './layoutStyles.scss';


type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className='layout-container'>
            <div className='topBar' />
            {children}
        </div>
    );
}

export default Layout;
