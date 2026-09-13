import { render, screen, fireEvent } from '@testing-library/react'
import CheckInButtons from '@/components/CheckInButtons'

describe("CheckInButtons", () => {
    test("renders exactly two buttons", () => {
        render(<CheckInButtons onStudied={() => {}} onNotStudied={() => {}} />)
        const buttons = screen.getAllByRole("button")
        expect(buttons.length).toEqual(2)
    })

    test("renders a 'Yes' button", () => {
        render(<CheckInButtons onStudied={() => {}} onNotStudied={() => {}} />)
        expect(screen.getByRole("button", { name: /yes/i })).toBeInTheDocument()
    })

    test("renders a 'No' button", () => {
        render(<CheckInButtons onStudied={() => {}} onNotStudied={() => {}} />)
        expect(screen.getByRole("button", { name: /no/i })).toBeInTheDocument()
    })

    test("does not render any extra buttons such as a 'Try Again' button", () => {
        render(<CheckInButtons onStudied={() => {}} onNotStudied={() => {}} />)
        expect(screen.queryByRole("button", { name: /try again/i })).not.toBeInTheDocument()
    })

    test("clicking the 'Yes' button calls onStudied", () => {
        const onStudied = jest.fn()
        render(<CheckInButtons onStudied={onStudied} onNotStudied={() => {}} />)
        fireEvent.click(screen.getByRole("button", { name: /yes/i }))
        expect(onStudied).toHaveBeenCalledTimes(1)
    })

    test("clicking the 'No' button calls onNotStudied", () => {
        const onNotStudied = jest.fn()
        render(<CheckInButtons onStudied={() => {}} onNotStudied={onNotStudied} />)
        fireEvent.click(screen.getByRole("button", { name: /no/i }))
        expect(onNotStudied).toHaveBeenCalledTimes(1)
    })

    test("pressing Enter on the 'Yes' button calls onStudied", () => {
        const onStudied = jest.fn()
        render(<CheckInButtons onStudied={onStudied} onNotStudied={() => {}} />)
        fireEvent.keyDown(screen.getByRole("button", { name: /yes/i }), { key: "Enter" })
        expect(onStudied).toHaveBeenCalledTimes(1)
    })

    test("pressing Enter on the 'No' button calls onNotStudied", () => {
        const onNotStudied = jest.fn()
        render(<CheckInButtons onStudied={() => {}} onNotStudied={onNotStudied} />)
        fireEvent.keyDown(screen.getByRole("button", { name: /no/i }), { key: "Enter" })
        expect(onNotStudied).toHaveBeenCalledTimes(1)
    })
})