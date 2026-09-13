import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe("Header", () => {
    test("renders the app title as a heading", () => {
        render(<Header />)
        const title = screen.getByRole("heading", { level: 1 })
        expect(title).toBeInTheDocument()
    })

    test("displays the correct title text", () => {
        render(<Header />)
        const title = screen.getByRole("heading", { level: 1 })
        expect(title).toHaveTextContent("Daily Study Check-In")
    })
})