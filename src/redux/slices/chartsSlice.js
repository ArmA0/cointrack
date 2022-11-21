import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    chartData: [],
    loading: false,
    errorMessage: '',

}

const chartSlice = createSlice({
    name: 'charts',
    initialState,
    reducers: {
        isLoading: state => {
            state.loading = true
        },
        setChartData: (state, action) => {
            state.chartData = [...state.chartData, {data: action.payload.prices, coin: action.payload.coin }]
            state.loading = false
        },
        setChartError: (state, action) => {
            state.errorMessage = action.payload
            state.loading = false
        }
    }
})

export const { isLoading, setChartData, setChartError } = chartSlice.actions

export default chartSlice.reducer