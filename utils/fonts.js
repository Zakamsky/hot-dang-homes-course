export const getTextAlign = (textAlign = 'left') => {
    const textAlignMap = {
        left: 'text-left',
        right: 'text-right',
        center: 'text-center'
    }

    return `${textAlignMap[textAlign] || ''}`
}

export const getFontSizeForHeading = (level, fontSize = '') => {
    const fzByLevelMap = {
        1: 'text-6xl',
        2: 'text-5xl',
        3: 'text-4xl',
        4: 'text-3xl',
        5: 'text-2xl',
        6: 'text-xl',
    }

    return `${fzByLevelMap[level] || ''}`
    // TODO: add assets for change fontSize by fontsize key or for styles attr (rem o px)
}