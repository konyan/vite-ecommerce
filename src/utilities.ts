export interface TypeAppTitle {
    title?: string
    suffix?: string
    addSuffix?: boolean
    returnAppTitle?: boolean
}

export const appTitle = `${import.meta.env.VITE_APP_TITLE}`

export const getAppTitle = (options: TypeAppTitle = {}): string => {
    const {
        title,
        suffix = appTitle,
        addSuffix = true,
        returnAppTitle = true,
    } = options

    if (title === undefined && returnAppTitle) {
        return appTitle
    }

    if (addSuffix) {
        return `${title} - ${suffix}`
    }

    return title || ""
}

export const wait = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

//generate random number
export const generateRandomNumber = () => {
    return Math.floor(Math.random() * (99999999 - 11111111 + 1)) + 11111111
}
