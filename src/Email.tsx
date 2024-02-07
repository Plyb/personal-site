import { useState } from 'react';
import './Email.scss'

export const Email = () => {
    const [copied, setCopied] = useState(false);

    function copyEmail() {
        // the idea here is to thwart some of the less advanced scrapers
        const address = 'kobyjlewis';
        const domain = 'gmail.com';
        const fullEmailAddress = `${address}@${domain}`;
    
        navigator.clipboard.writeText(fullEmailAddress);
        setCopied(true);
    }

    return <div className='email'>
        <code>const address = 'kobyjlewis';</code>
        <code>const domain = 'gmail.com';</code>
        <code>console.log(`$&#123;address&#125;@$&#123;domain&#125;`);</code>
        {copied 
            ? <h6>Copied!</h6>
            : <button onClick={copyEmail}>Copy</button>}
    </div>
}
