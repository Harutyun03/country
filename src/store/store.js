const GET_ALL = 'all'
const GET_REGION = 'getregion'
const GET_Name = 'getname'
const GET_TEXT = "text"
const GET_SEARCH = 'search'
export const  initState = {
    countries : [],
    country : [],
    text : '',
    search : []

}

export const reduser = (initState, action) =>  {
        switch(action.type){
            case GET_ALL : 
                 return {
                    ...initState,
                    countries : action.payload
                 }
            case GET_REGION : 
                return {
                    ...initState,
                    countries : action.payload,

                }
            case GET_Name : 
                return {
                    ...initState,
                    country : action.payload,
                }
            case GET_TEXT :
                return {
                    ...initState,
                    text : action.payload
                }
            case GET_SEARCH :
                return {
                    ...initState,
                    search: action.payload
                }
            default : 
                return initState
        }
}


export const getallActioncreator = (data) => ({type : GET_ALL, payload : data})
export const getRegionAC = (data) => ({type : GET_REGION, payload : data})
export const getNameAC = (data) => ({type : GET_Name, payload : data})
export const getTextAC = (text) => ({type : GET_TEXT, payload : text})
export const getSearchAC = (data) => ({type : GET_SEARCH, payload : data})