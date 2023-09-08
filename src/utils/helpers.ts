export const getRegionGniCode = (gniCode = "") => {
    if (gniCode.length === 4) return gniCode.slice(0, 2)
    if (gniCode.length === 3) return gniCode.slice(0, 1)
    return undefined
}

export const getDistrictGniCode = (gniCode = "") => {
    return gniCode.slice(-2)
}
