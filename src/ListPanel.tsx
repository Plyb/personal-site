import { useState } from 'react'

const NUM_TO_SHOW_MORE = 5;
export function ListPanel({ title, description, listItems }: { title: string, description?: JSX.Element, listItems: JSX.Element[]}) {
    const [numItemsShowing, setNumItemsShowing] = useState(NUM_TO_SHOW_MORE);

    function showMore() {
        setNumItemsShowing(numItemsShowing + NUM_TO_SHOW_MORE);
    }

    return <div className='panel'>
        <h1>{ title }</h1>
        { description }
        <ul className='major'>
            {listItems.slice(0, numItemsShowing).map((item, i) =>
            <li key={i}>
                {item}
            </li>)}
        </ul>
        {numItemsShowing < listItems.length && <button onClick={showMore}>Show more...</button>}
    </div>
}