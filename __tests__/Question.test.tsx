import { render, screen } from '@testing-library/react'
import Question from '@/components/Question'

describe("Question", () => {
    test("renders the question as a level 2 heading", () => {
        render(<Question />)
        const question = screen.getByRole("heading", { level: 2 })
        expect(question).toBeInTheDocument()
    })

    test("displays the correct question text", () => {
        render(<Question />)
        const question = screen.getByRole("heading", { level: 2 })
        expect(question).toHaveTextContent("Did you study today?")
    })
})