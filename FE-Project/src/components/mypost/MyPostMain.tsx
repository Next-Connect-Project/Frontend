import React, { useEffect, useState } from "react";
import MyPostlist from "./MyPostlist";
import { AiFillFolderOpen} from "react-icons/ai";
import item from "../../assets/logo.png";
import { useAppSelector } from "../../hooks/redux/store";
import { Mypostprops } from "../mypost/MyPost.interface";
import { getMyPostlist } from "../../hooks/axios/MyPostlist";


export default function MyPostMain() {
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
        <div className="mypost_wrapper">

            <div className="announcement">
                <AiFillFolderOpen />
                내가 쓴 글
                <MyPostlist></MyPostlist>
            </div>

            {/* <div className="nopost">
            <img src={item} className="notfound_image" alt="로고" />
            <p className="description">아직 작성한 글이 없어요</p>
            </div> */}

            
        </div>
    );
}