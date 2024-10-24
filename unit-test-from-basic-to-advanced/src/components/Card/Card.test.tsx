import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card | component | unit test', () => {
  it('should render with success', () => {
    render(<Card>Card</Card>)

    expect(screen.getByText('Card')).toBeInTheDocument()
  })
})
