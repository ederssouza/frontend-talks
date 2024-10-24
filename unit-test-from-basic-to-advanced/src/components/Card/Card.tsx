import { Props } from './types'

function Card(props: Props) {
  const { title, description } = props

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
