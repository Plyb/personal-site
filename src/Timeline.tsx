import { ListPanel } from './ListPanel';

type TimelineItem = {
    title: string
    date: Date,
    description: JSX.Element
}

const timelineItems: TimelineItem[] = [
    {
        title: 'Personal Website Updated',
        date: new Date(2024, 1, 4),
        description: <div>
            <p>I've updated my personal website to include much better styling and up-to-date information!</p>
            <p>I also took this as an opportunity to learn <a href='https://react.dev/'>React</a>, which I've been wanting to do for a while. Overall I really like it! I felt like it was really intuitive (although I have the advantage of having worked with Vue, Angular, and the broader <a href='https://github.com/Plyb/frp-w-o-spacetime-leaks'>reactive programming paradigm before</a>). I enjoy how non-opinionated it seems in comparison to the other popular frameworks, and I love how seamlessly it integrates with TypeScript.</p>
            <p>A couple of things struck me as strange: One was JSX. Having this weird multiply nested situation where I have HTML inside JavaScript inside HTML seems a bit clunky. I'm impressed it works at all. I think I personally would have preferred it to just be something like a particular format of JavaScript object that you pass to React that it then translates to HTML instead of switching between languages. Not too big of a deal though. The other minor thing I thought was weird was using <code>import</code> as a way to scope css.</p>
            <p>Overall though, I really like it, and I think I have found my new go-to web development framework. It is flexible, expressive, and can be integrated with TypeScript for better safety.</p>
        </div>
    }
]

export const Timeline = () => <ListPanel
    title='Timeline'
    listItems={timelineItems.map(item =>
    <div>
        <h2>{ item.title }</h2>
        <h6>{ item.date.toDateString() }</h6>
        { item.description }
    </div>)}
/>