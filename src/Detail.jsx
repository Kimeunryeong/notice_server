import React from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiGetNoticeDetail, apiPostNoticeDelete } from "./api";

export default function Detail() {
  const { id } = useParams();
  const { data } = useQuery(["getDetail", id], apiGetNoticeDetail);

  const navigate = useNavigate();

  const { mutate } = useMutation(apiPostNoticeDelete, {
    onSuccess: (data) => {
      if (data?.result === true) {
        navigate("/");
      }
    },
  });

  const handleDelete = () => {
    const ok = window.confirm("삭제하실?");
    if (ok) {
      // 확인을 클릭을 했을 때 삭제 API 요청
      mutate(id);
    }
  };

  return (
    <div className="w-full flex justify-center py-16">
      <div className="max-w-5xl w-full flex flex-col gap-4">
        <div>자세히보기</div>
        <div>{data?.data?.title}</div>
        <div>{data?.data?.writer}</div>
        <div>{data?.data?.cteatedAt}</div>
        <div>{data?.data?.description}</div>
        <div className="flex text-white ">
          <Link to={`/${id}/edit`} state={data?.data}>
            <button className=" bg-blue-400 px-4 py-2 mr-4">수정</button>
          </Link>
          <button onClick={handleDelete} className=" bg-gray-400 px-4 py-2 ">
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
