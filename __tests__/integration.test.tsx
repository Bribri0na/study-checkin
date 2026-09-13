import { render, screen, fireEvent } from '@testing-library/react'
import Home from '@/app/page'
import { positiveMessages, supportiveMessages } from '@/data/messages'

describe("The Daily Study Check-In flow", () => {
    test("initially shows the question and both buttons, with no message displayed", () => {
        render(<Home />)
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(/did you study today/i)
        expect(screen.getAllByRole("button").length).toEqual(2)
        expect(screen.queryByRole("status")).not.toBeInTheDocument()
    })

    test("clicking 'Yes' hides the question and buttons, and shows a positive message", () => {
        render(<Home />)
        fireEvent.click(screen.getByRole("button", { name: /yes/i }))

        expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument()

        const message = screen.getByRole("status")
        expect(positiveMessages).toContain(message.textContent)
    })

    test("clicking 'No' hides the question and buttons, and shows a supportive message", () => {
        render(<Home />)
        fireEvent.click(screen.getByRole("button", { name: /no/i }))

        expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument()

        const message = screen.getByRole("status")
        expect(supportiveMessages).toContain(message.textContent)
    })

    test("clicking 'Back to Home' after answering resets the state back to the question", () => {
        render(<Home />)
        fireEvent.click(screen.getByRole("button", { name: /yes/i }))
        expect(screen.getByRole("status")).toBeInTheDocument()

        fireEvent.click(screen.getByRole("button", { name: /back to home/i }))

        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(/did you study today/i)
        expect(screen.getAllByRole("button").length).toEqual(2)
        expect(screen.queryByRole("status")).not.toBeInTheDocument()
    })
})