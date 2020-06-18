import Axios from 'axios'

export interface actionType {
    type:string;
    payload:string
}


export const getUrl = (val:string)=>async (dispatch:(arg:any)=>void)=>{
    try {
        dispatch({type:"Loading"})
        const url = await Axios.post(`https://thradishorts.herokuapp.com/shorten`, {
            url: val,
        });
        if (url.data.error) {
            dispatch({ type: "Error", payload: url.data.error });
            return;
        }
        dispatch({ type: "New link", payload: url.data.url });
        
    } catch (error) {
        dispatch({type:"Error"})
    }
}