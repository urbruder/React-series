import { useState,useEffect } from "react";
function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json')
        .then((res)=> res.json())//This command changes the response to json form 
        .then((res)=>setData(res[currency]) )// With this command we extract the data of the currency part and setData with that value
        console.log(data);
    },[currency])//dependencies for this effect is 'currency' whenever we want to change the currency ,site would need re-render.
    console.log(data);
    return data;
}
export default useCurrencyInfo 
//We are not returning setData ,so value of data won't be changed. To resolve this problem we are returning the entire method using 
// 'export' commmand