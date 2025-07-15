import React from 'react';
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

type ContainerProps = {
    backgroundColor: string;
    children?: React.ReactNode,
    title: string;
    icon?: [IconPrefix, IconName];
}

function Container(props: ContainerProps) {
    const { backgroundColor, children, title, icon } = props;
    const style: React.CSSProperties = {
        backgroundColor,
        padding: '0.5rem',
        width: '100%',
        marginTop: '0.5rem',
        borderRadius: '10px',
    };
    return (
        <div style={style}>
            <h2 className="center">{icon && <span className="icon"><FontAwesomeIcon icon={icon} /></span>}{title}</h2>
            <div className="separator"></div>
            {children}
        </div>
    );
}

export default Container;