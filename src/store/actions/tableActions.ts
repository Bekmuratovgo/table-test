import axios from "axios";
import { setData } from "../reducers/tableReducer";


export const getData = () => async(dispatch: any): Promise<void> => {
    const { data } = await axios('http://82.202.204.94/tmp/test.php')
    
    dispatch(setData(data));
};
