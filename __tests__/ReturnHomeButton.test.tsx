import { render, screen, fireEvent } from '@testing-library/react'
import ReturnHomeButton from '@/components/ReturnHomeButton'

describe("ReturnHomeButton", () => {
    test("renders a button", () => {
        render(<ReturnHomeButton onReturn={() => {}} />)
        expect(screen.getByRole("button", { name: /back to home/i })).toBeInTheDocument()
    })

    test("clicking the button calls onReturn", () => {
        const onReturn = jest.fn()
        render(<ReturnHomeButton onReturn={onReturn} />)
        fireEvent.click(screen.getByRole("button", { name: /back to home/i }))
        expect(onReturn).toHaveBeenCalledTimes(1)
    })
})