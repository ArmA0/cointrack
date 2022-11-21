import { instance } from "../../axios/axios"
import { isLoading, setChartData, setChartError } from "../slices/chartsSlice"


export const getCharts = coin => async dispatch => {
    try {
        dispatch(isLoading())
        const data = await instance.get(`coins/${coin}/market_chart?vs_currency=usd&days=1`)
        data.data.coin = coin
        dispatch(setChartData(data.data))
    } catch (error) {
        dispatch(setChartError(error.message))
    }
}