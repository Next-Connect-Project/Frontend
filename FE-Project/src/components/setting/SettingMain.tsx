import { useEffect, useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { MyInfo } from "../mypost/MyPost.interface";
import { useAppSelector } from "../../hooks/redux/store";
import { getMyInfo } from "../../hooks/axios/MyPage";
import { iteratorSymbol } from "immer/dist/internal";
import { IoGitMerge } from "react-icons/io5";

export default function SettingMain() {
    const [list,setList] = useState<MyInfo | null>(null);
    const token = useAppSelector((state) => state.login);


  const getData = async () => {
    const data = await getMyInfo(token.token);
    console.log(data);
    setList(data);
    console.log(list);
  };


  useEffect(() => {
    getData();
  }, []);

    return (
        <>
        <div className="setting_wrapper">
            <div className="announcement">
            <AiTwotoneSetting></AiTwotoneSetting>
            설정
            </div>

            
            <div className="content_wrapper">
                <div className="content">이메일: {list?.email}</div>
                <div className="content">이름:  {list?.name}</div>
            </div>


        </div>
        </>
    )
}