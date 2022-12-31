const initState = {
    themeId: 1,
}
type InitStateType = typeof initState
type ChangeThemeId = {
    type: 'SET_THEME_ID'
    id:number
}
export const themeReducer = (state = initState, action: ChangeThemeId): InitStateType => { // fix any
    switch (action.type) {
        // дописат
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number):ChangeThemeId => ({ type: 'SET_THEME_ID', id }) // fix any
