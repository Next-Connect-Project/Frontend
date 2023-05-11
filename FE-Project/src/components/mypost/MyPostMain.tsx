import React, { useEffect, useState } from "react";
import Mypostlist from "./MyPostlist";
import { AiFillFolderOpen} from "react-icons/ai";
import item from "../../assets/logo.png";

export default function MyPostMain() {
    const [posts, setPosts] = useState([]);

    return (
        <div className="mypost_wrapper">

            <div className="announcement">
                <AiFillFolderOpen />
                내가 쓴 글
            </div>

            {posts.length > 0 ? (
                <Mypostlist></Mypostlist>
             )
            : ( 
                <div className="nopost">
                <img src={item} className="notfound_image" alt="로고" />
                <p className="description">아직 작성한 글이 없어요</p>
              </div>
            )
            }
            
        </div>
    );
}