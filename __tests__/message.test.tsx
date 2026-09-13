import { positiveMessages, supportiveMessages, getRandomMessage } from '@/data/messages'

describe("messages data", () => {
    test("positiveMessages contains at least one message", () => {
        expect(positiveMessages.length).toBeGreaterThan(0)
    })

    test("supportiveMessages contains at least one message", () => {
        expect(supportiveMessages.length).toBeGreaterThan(0)
    })

    test("getRandomMessage returns a message from the given array", () => {
        const result = getRandomMessage(positiveMessages)
        expect(positiveMessages).toContain(result)
    })

    test("getRandomMessage returns the first message when Math.random returns 0", () => {
        jest.spyOn(Math, "random").mockReturnValue(0)
        expect(getRandomMessage(positiveMessages)).toEqual(positiveMessages[0])
        jest.spyOn(Math, "random").mockRestore()
    })

    test("getRandomMessage returns the last message when Math.random is close to 1", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.999)
        expect(getRandomMessage(supportiveMessages)).toEqual(supportiveMessages[supportiveMessages.length - 1])
        jest.spyOn(Math, "random").mockRestore()
    })
})