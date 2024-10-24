import { render, screen } from '@testing-library/react'
import Modal from './Modal'

describe('Modal | component | unit test', () => {
  it('should render with success', () => {
    render(<Modal>Modal</Modal>)

    expect(screen.getByText('Modal')).toBeInTheDocument()
  })
})
