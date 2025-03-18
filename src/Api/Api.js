import axios from "axios";
import { getallActioncreator,getRegionAC,getNameAC, getSearchAC} from "../store/store";

const instance = axios.create({
    baseURL : 'https://restcountries.com/v3.1'
})

export const API = {
    getALL(dispatch){
        instance.get('/all')
          .then((res) => dispatch(getallActioncreator(res.data)))
    },
    getRegion(dispatch,region){
        instance.get(`/region/${region}`)
          .then((res) => dispatch(getRegionAC(res.data)))
    },
    getName(dispatch, name){
        instance.get(`/name/${name}`)
        .then((res) => dispatch(getNameAC(res.data)))
    },
    getSearch(dispatch,name){
        instance.get(`/name/${name}`)
        .then((res) => dispatch(getSearchAC(res.data)))
    }
}