import { Props } from './types'

function Card(props: Props) {
  const { children } = props

  return <div>{children}</div>
}

export default Card
