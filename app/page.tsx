import { generateStyle } from '../src/utils/Function'

export default function Page() {
  const container = generateStyle(['background', 'background'])

  return <h1 className={container}>Hello, Home page!</h1>
}
