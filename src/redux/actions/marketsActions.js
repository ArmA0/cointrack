import { isLoading, setMarketData, setMarketError } from "../slices/marketsSlice"
import { instance } from "../../axios/axios"
    const defaultParams = 'order=market_cap_desc&vs_currency=usd&sparkline=false&price_change_percentage=1d'
export const getMarkets = (page) => async dispatch => {
    try {
        dispatch(isLoading())
        const data = instance.get(`coins/markeaaaats?per_page=${page}&${defaultParams}`)
        dispatch(setMarketData(data))
    } catch (error) {
        console.log(error);
        dispatch(setMarketError(error.message))
    }
}