import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux/store";
import { Mypostprops } from "../mypost/MyPost.interface";
import { getMyPostlist } from "../../hooks/axios/MyPostlist";

export default function MyPostlist() {
  const [list, setList] = useState<Mypostprops[]>([]);
  const token = useAppSelector((state) => state.login);


  const getData = async () => {
    const card = await getMyPostlist(token.token);
    console.log(card);
    setList(card);
  };
  

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="cardlist_wrapper">
        
    </div>
  );
}
