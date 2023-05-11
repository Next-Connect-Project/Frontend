import React, { useEffect, useState } from "react";
import { MyPost } from "./MyPost.interface";
import { getMyPost } from "../../hooks/axios/MyPostlist"
 
export default function Mypostlist() {
  const [list, setList] = useState<MyPost[]>([]);

  const getData = async () => {
    const card = await getMyPost();
    setList(card);
  };

  useEffect(() => {
    getData();
  }, []);

    return (
        <div className="postlist_wrapper">
        {/* {list.map((card) => (
          // 게시물 링크로 바로 이동할 수 있도록 목록형태로 표시
          <div key={card.id}>
            <h3>{card.title}</h3>
          </div>
        ))} */}
        </div>
    )
}