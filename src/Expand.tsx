import { useState } from 'react';
import './Expand.scss';

export const Expand = ({ label, content }: { label: JSX.Element, content: JSX.Element}) => {
    const [expanded, setExpanded] = useState(false);

    return <div className='expand-container'>
        <div className='expand-label-container'>
            <div className='expand-label'>{label}</div>
            <div
                className={ expanded ? 'expand-arrow expanded' : 'expand-arrow collapsed'}
                onClick={() => setExpanded(!expanded)}
            ></div>
        </div>
        {expanded && content}
    </div>
}