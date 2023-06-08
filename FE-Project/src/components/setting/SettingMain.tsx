import { useEffect, useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { MyInfo } from "../mypost/MyPost.interface";
import { useAppSelector } from "../../hooks/redux/store";
import { getMyInfo } from "../../hooks/axios/MyPage";
import { iteratorSymbol } from "immer/dist/internal";

export default function SettingMain() {
    const [list,setList] = useState<MyInfo[]>([]);
    const token = useAppSelector((state) => state.login);


  const getData = async () => {
    const data = await getMyInfo(token.token);
    console.log(data);
    setList(data);
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
                <div className="content">이메일: </div>
                <div className="content">이름: </div>
                <div className="secession_button">회원탈퇴</div>
            </div>



        </div>
        </>
    )
}