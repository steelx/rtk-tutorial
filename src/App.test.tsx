import { render, screen } from '@testing-library/react'
import App from "./App"
import withProvider from '../test-helpers/redux-test-utils'


describe('App', () => {
  it('renders headline', () => {
    render(withProvider(<App />))
    expect(screen.getByText(/It works and you found me!/i)).toBeInTheDocument()
  })
})
