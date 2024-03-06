import React from "react";

export default function Socials() {
  return (
    <div className="flex flex-col gap-8">
      {/* 구분선 */}
      <div className="w-full h-px bg-blue-500" />
      {/* 소셜로그인 버튼 영역*/}
      <div className="w-ful flex flex-col gap-4">
        {/* 카카오 로그인 버튼 */}
        <button className="h-10 w-full rounded-md bg-yellow-400 text-yellow-950 font-semibold hover:font-bold">
          카카오 로그인
        </button>
        {/* 구글 로그인 버튼 */}
        <button className="h-10 w-full transition-colors rounded-md bg-blue-500 text-white font-semibold hover:font-bold">
          구글 로그인
        </button>
      </div>
    </div>
  );
}
