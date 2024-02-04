import './HoverBubble.scss';

export function hoverBubble(content: JSX.Element, hoverContent: JSX.Element) {
    return <div className='hover-bubble-container'>
        { content }
        <div className='hover-bubble'>
            { hoverContent }
        </div>
    </div>
}