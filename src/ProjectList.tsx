import { Expand } from './Expand'
import { hoverBubble } from './HoverBubble'
import { ListPanel } from './ListPanel'
import './ProjectList.scss'

type project = {
    title: string,
    desc: string,
    links: link[],
    todos: string[],
    icon: string,
}

type link = {
    url: string,
    text: string,
}


export const projects: project[] = [
  {
    title: 'Conlang Generator',
    desc: 'An attempt to procedurally generate a realistic constructed language',
    links: [],
    todos: ['Phonotactics', 'Syllables', 'Words and affixes', 'Morphosyntax', 'Translation (using f-structures)'],
    icon: 'input-symbols.png',
  },
  {
    title: 'Biological Evolution Simulator',
    desc: 'Create emergent behavior in an agent simulation with mutation and selection pressures on a massive scale',
    links: [],
    todos: [
      'Find or create library that translates between high level CPU language and GPU language to facilitate debugging',
      'Design rules that can be GPU computed efficiently',
    ],
    icon: 'petri-dish.png',
  },
  {
    title: 'Keynav',
    desc: 'A small chrome extension that is designed to allow for efficiently navigating the web without a mouse',
    links: [{ url: 'https://github.com/Plyb/KeyNav', text: 'Source Code' }],
    todos: ['Update icon', 'Smarter selectable item detection', 'Better searching'],
    icon: 'keyboard.png',
  },
  {
    title: 'Development of a Mutable Meme Model in the Context of a Contagion Spread Simulation',
    desc: 'Research paper',
    links: [{ text: 'IEEE', url: 'https://ieeexplore.ieee.org/document/10253432' }, { text: 'PDF', url: '/res/Meme_Mutation_Paper.pdf'}],
    todos: [],
    icon: 'shuffle-tracks-button.png'
  },
  {
    title: 'Project Origins',
    desc: 'A Minecraft mod intended to increase difficulty and bring the feel of "Old Minecraft" into the modern day',
    links: [{ text: 'Design Doc', url: 'https://docs.google.com/document/d/1SJRWylHZxyYYQtIiKHN05nd_5xP9jhOXfQDfGtsmoCk/edit?usp=sharing'}],
    todos: ['Begin Programming'],
    icon: 'game-die.png'
  },
  {
    title: 'Back Pocket: A Cookbook',
    desc: 'A cookbook to remind myself of my favorite recipes',
    links: [],
    todos: ['Deploy', 'Add filters'],
    icon: 'spaghetti.png',
  },
  {
    title: 'Marble Tower Binary Adder',
    desc: 'Build a physical computer that uses marbles to add binary numbers',
    links: [],
    todos: ['Model and print parts', 'Assemble the tower', 'Document'],
    icon: 'plus.png'
  },
  {
    title: 'Cardboard',
    desc: 'A Framework for quickly prototyping board and card games on the web',
    links: [{ text: 'Source Code', url: 'https://github.com/Plyb/web-game-core' }],
    todos: ['Rework into React or other more flexible framework'],
    icon: 'joker.png'
  },
  {
    title: 'Cappy',
    desc: 'A Discord bot for managing and interacting with the BYU Computer Science Discord server',
    links: [{ text: 'Source Code', url: 'https://github.com/BYU-CS-Discord/CSBot' }],
    todos: ['See https://github.com/orgs/BYU-CS-Discord/projects/1'],
    icon: 'Cappy.png',
  },
  {
    title: 'Beyond the Board',
    desc: 'A roguelike computer game based on the rules of chess. My first large scale programming project :)',
    links: [{ text: 'Itch.io', url: 'https://plyb.itch.io/beyond-the-boardee'}],
    todos: [],
    icon: 'chess-pawn.png',
  }
]

export const ProjectList = () => <ListPanel
  title='Projects'
  description={<label>If any of these are interesting to you, { hoverBubble(<a href='#header'>please reach out</a>, <div style={{ width: '10em' }}>Email is great, or any other contact info you happen to have.</div> )}! I'm always happy to collaborate.</label>}
  listItems={projects.map(project =>
  <div className='project'>
    <img src={`/res/icons/${project.icon}`} alt={project.title}/>
    <div>
      <h3 tabIndex={0}>{project.title}</h3>
      <p>{project.desc}</p>
      <ul className='link-list'>{project.links.map(link => <li key={link.text}><a href={link.url}>[{link.text}]</a></li>)}</ul>
      {project.todos.length > 0 && (
        <Expand
          label={<p>Future Tasks:</p>}
          content={<ul>{project.todos.map(todo => <li key={todo}>{todo}</li>)}</ul>}
        />
      )}
    </div>
  </div>)}
    
/>
