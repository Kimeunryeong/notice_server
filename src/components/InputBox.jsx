import React from "react";

export default function InputBox({ name, type, placeholder, register, errorOption, errors }) {
  return (
    <div className="flex flex-col gap-1 relative">
      <input {...register(`${name}`, errorOption)} type={type} placeholder="" className="input-custom peer" />
      {/* 플레이스홀더 대체 */}
      <label className="label-custom">{placeholder}</label>
      {errors && <span className="text-red-500 text-sm">{errors}</span>} 
      
    </div>
  );
}
