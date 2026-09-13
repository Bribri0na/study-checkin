import { render, screen } from '@testing-library/react'
import SupportiveMessage from '@/components/SupportiveMessage'

describe("SupportiveMessage", () => {
    test("renders the message inside a status role element", () => {
        render(<SupportiveMessage message="Take a good rest today and try again tomorrow." />)
        expect(screen.getByRole("status")).toBeInTheDocument()
    })

    test("displays the exact message passed as a prop", () => {
        render(<SupportiveMessage message="It's okay, tomorrow is a new chance." />)
        expect(screen.getByRole("status")).toHaveTextContent("It's okay, tomorrow is a new chance.")
    })
})