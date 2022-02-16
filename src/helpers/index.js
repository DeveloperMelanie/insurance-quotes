export const getYearDifference = year => {
    return new Date().getFullYear() - year
}

export const calculateBrand = brand => {
    let increment

    switch (brand) {
        case 'american':
            increment = 1.3
            break
        case 'european':
            increment = 1.15
            break
        case 'asian':
            increment = 1.05
            break

        default:
            break
    }

    return increment
}

export const getPlan = plan => {
    return plan === 'basic' ? 1.2 : 1.5
}

export const firstUpperCase = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
