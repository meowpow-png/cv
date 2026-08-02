import { renderToStaticMarkup } from 'react-dom/server'

const App = () => <p>Happy developing ✨</p>

console.log(renderToStaticMarkup(<App />))
