import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input | component | unit test', () => {
  it('should render with success', () => {
    render(<Input>Input</Input>)

    expect(screen.getByText('Input')).toBeInTheDocument()
  })
})
