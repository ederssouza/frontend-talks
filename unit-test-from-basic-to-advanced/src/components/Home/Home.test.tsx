import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home | component | unit test', () => {
  it('should render with success', () => {
    render(<Home>Home</Home>)

    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
