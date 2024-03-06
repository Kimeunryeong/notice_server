import React from "react";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Socials from "./Socials";

export default function SignUp() {
  return (
    <div className="w-full flex justify-center py-32">
      <div className="max-w-screen-sm w-full flex flex-col gap-4">
        {/* 회원가입 타이틀 영역 */}
        <div className="flex flex-col gap-2">
          <div className="w-full text-center text-2xl font-bold">회원가입</div>
          <div className="w-full text-center text-sm text-neutral-600">
            <Link to="/users/login">로그인</Link>
          </div>
        </div>
        {/* 회원가입 form 영역 */}
        <div className="flex flex-col gap-4">
          {/* 아이디 */}
          <InputBox name="username" type="text" placeholder="아이디" />
          {/* 이메일 */}
          <InputBox name="email" type="email" placeholder="이메일" />
          {/* 비밀번호 */}
          <InputBox name="password" type="password" placeholder="비밀번호" />
          {/* 비밀번호 확인 */}
          <InputBox
            name="password2"
            type="password"
            placeholder="비밀번호 확인"
          />
          {/* 콤보박스 취미 */}
          <Button type="submit" text="회원가입"/>
        </div>
        {/* 소셜로그인 영역*/}
        <Socials />
      </div>
    </div>
  );
}