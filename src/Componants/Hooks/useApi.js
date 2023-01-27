import axios from "axios";
import { useEffect, useState } from "react";

export default function useApi(URL) {
    // let {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [Data, setData] = useState([]);
    async function getData() {
        setIsLoading(true)  
      const { data } = await axios.get(
        URL,
        {
        //   params: object,
          headers: {
            "X-RapidAPI-Key":
              "428da83d08msh43bee7fc657fa87p10fd8cjsn88f864cf56f8",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      setData(data);
      setIsLoading(false)
      // console.log(data);

}
  
    useEffect(
      () => {
      getData();
    }, [URL]);
    return {Data ,isLoading}
  
 
}   
