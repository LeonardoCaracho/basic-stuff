import Link from 'next/link'

const About = () => (
    <div style={{ fontSize: '20px', color: 'blue' }}>
        <h1>About</h1>
        <Link href="/">
            <button>Back home</button>
        </Link>
        <p>I was a buterfly once</p>
    </div>
)

export default About