// projectdetail.tsx
import React,  { useEffect, useState }  from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Detail } from "./ProjectDetail.interface"
import { getDetailData } from "../../hooks/axios/Project";
import FreeForm from "../newpost/form/FreeForm";
import Introduce from "../newpost/postform/Introduce";
import MDEditor, {commands, ICommand, TextState} from "@uiw/react-md-editor";



export default function ProjectDetail() {
    const navigate = useNavigate();
    const [list, setList] = useState<Detail[]>([]);
    const { id } = useParams<{ id: string }>();
  
    const getData = async () => {
      const detail = await getDetailData();
      setList(detail);
      console.log(detail);
    };

    useEffect(() => {
        getData();
        console.log(list);
      }, []);

      const handleEdit = () => {
        const selectedElement = list.find((element) => element.id === Number(id));
        if (selectedElement) {
          navigate(`/edit/${selectedElement.id}`);
        } else {
          console.error("Selected element not found!");
        }
      };
      
  

    return (
    <div>
        {list
            .filter((element) => element.id === Number(id))
            .map((element: Detail) => {
            return (
            <div className="detail_wrapper">
                <section className="project_header">
                    <div>
                    <button onClick={handleEdit}>Edit</button>
                        <input type='button' value='삭제'/>
                        </div>
                    <div className="project_title">{element.title}</div>
                    <div className="id_date">
                        <div className="userid">{element.name}</div>
                        <div className="registered_date">{element.registered_date}</div>
                    </div>
                    <ul className="project_info">
                    {/* 모임 기본 정보 */}
                    <li className="projectinfo_wrapper">
                        <span className="projectinfo_title">모집 구분</span>
                        <span className="projectinfo_content">{element.category}</span>
                    </li>

                    <li className="projectinfo_wrapper">
                        <span className="projectinfo_title">모임 목적</span>
                        <span className="projectinfo_content">{element.purpose}</span>
                    </li>

                    <li className="projectinfo_wrapper">
                        <span className="projectinfo_title">기술 스택</span>
                        <span className="projectinfo_content">{element.stack.join(", ")}</span>
                    </li>

                    <li className="projectinfo_wrapper">
                        <span className="projectinfo_title">모집 마감</span>
                        <span className="projectinfo_content">{element.deadline}</span>
                    </li>

                    <li className="projectinfo_wrapper">
                        <span className="projectinfo_title">모집 인원</span>
                        <div className="projectinfo_content">
                            <span>Front-End: {element.frontend_gathered} / {element.frontend_total}</span> &nbsp;
                            <span>Back-End: {element.backend_gathered} / {element.backend_total}</span>
                        </div>
                    </li>

                    {/* 모임 진행 방식 */}
                    <li className="projectinfo_wrapper">
                        <span className="projectinfo_title">진행 방식</span>
                        <span className="projectinfo_content">{element.onoff}</span>
                    </li>

                    <li className="projectinfo_wrapper">
                        <span className="projectinfo_title">진행 기간</span>
                        <span className="projectinfo_content">{element.duration}</span>
                    </li>


                    <li className="projectinfo_wrapper">
                        <span className="projectinfo_title">모임 일정</span>
                        <span className="projectinfo_content">{element.schedule}</span>
                    </li>


                    <li className="projectinfo_wrapper">
                        <span className="projectinfo_title">진행 방법</span>
                        <span className="projectinfo_content">{element.way}</span>
                    </li>

                    <li className="projectinfo_wrapper">
                        <span className="projectinfo_title">연락 방법</span>
                        <span className="projectinfo_content">{element.contact}</span>
                    </li>


                    </ul>
                </section>
                <div className="markdownDiv" data-color-mode="light" style={{paddingTop: 30}}>
                    <MDEditor.Markdown
                        source={ element.free} 
                    />
                </div>
            </div>
            );
            }
            )
        }
        </div>
    );
}