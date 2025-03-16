const GET_ALL = 'all'
const GET_REGION = 'getregion'
const GET_Name = 'getname'
export const  initState = {
    countries : []

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
                    countries : action.payload,
                }
            default : 
                return initState
        }
}


export const getallActioncreator = (data) => ({type : GET_ALL, payload : data})
export const getRegionAC = (data) => ({type : GET_REGION, payload : data})
export const getNameAC = (data) => ({type : GET_Name, payload : data})