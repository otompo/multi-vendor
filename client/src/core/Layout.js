import React from 'react';
import Menu from './Menu'


const Layout = ({title='Title', description='Description', className, children }) => {
    return (
        <div>
            <Menu />
            <div className="jumbotron">
                <h2>{title}</h2>
                <p className="lead">{description}</p>
             </div>

            <div className="col-md-12">
                <div className={className}>
                    {children}
                </div>
            </div>
            
        </div>
    );
}

export default Layout;
