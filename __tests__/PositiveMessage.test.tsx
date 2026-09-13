import { render, screen } from '@testing-library/react'
import PositiveMessage from '@/components/PositiveMessage'

describe("PositiveMessage", () => {
    test("renders the message inside a status role element", () => {
        render(<PositiveMessage message="You're doing great!" />)
        expect(screen.getByRole("status")).toBeInTheDocument()
    })

    test("displays the exact message passed as a prop", () => {
        render(<PositiveMessage message="Amazing work today!" />)
        expect(screen.getByRole("status")).toHaveTextContent("Amazing work today!")
    })
})