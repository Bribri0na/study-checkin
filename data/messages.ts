export const positiveMessages: string[] = [
    "You're doing great!",
    "Amazing work today!",
    "Keep up the good habit!",
   "Nice job showing up for yourself today!",
]

export const supportiveMessages: string[] = [
    "Take a good rest today and try again tomorrow.",
    "It's okay, tomorrow is a new chance.",
    "Rest well, you'll do better tomorrow.",
    "Don't be too hard on yourself, try again tomorrow.",
]

export const getRandomMessage = (messages: string[]): string => {
    const randomIndex = Math.floor(Math.random() * messages.length)
    return messages[randomIndex]
}