import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostNoticeWrite } from "./api";
import { useNavigate } from "react-router-dom";

export default function Write() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, // formState: { errors },
  } = useForm();

  const { mutate, isLoading } = useMutation(apiPostNoticeWrite, {
    onSuccess: (data) => {
      console.log(data);
      reset(); //작성된 내용 reset
      navigate("/")
    },
  });

  const onSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <div className="w-full flex justify-center py-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-7xl w-full flex flex-col space-y-4"
      >
        <input
          {...register("title", {
            required: "제목을 작성해주세요.",
          })}
          className=" py-1 px-2 border"
          type="text"
          placeholder="TITLE"
        />
        {errors?.title?.message && (
          <div className="text-red-500 text-sm px-2 -mt-4">
            {errors?.title?.message}
          </div>
        )}
        <input
          {...register("writer", {
            required: "글쓴이를 작성해주세요.",
          })}
          className=" py-1 px-2 border"
          type="text"
          placeholder="WRITER"
        />
        {errors?.writer?.message && (
          <div className="text-red-500 text-sm px-2 -mt-4">
            {errors?.writer?.message}
          </div>
        )}
        <textarea
          {...register("description")}
          rows="10"
          type="text"
          placeholder="DESCRIPTION"
          {...register("description", {
            minLength: {
              value: 5,
              message: "내용은 최소 5글자 이상 작성해주세요.",
            },
          })}
        ></textarea>
         {errors?.description?.message && (
          <div className="text-red-500 text-sm px-2 -mt-4">
            {errors?.description?.message}
          </div>
        )}
        <button
          disabled={isLoading}
          type="submit"
          className=" py-1 bg-green-900 text-white"
        >
          글쓰기
        </button>
      </form>
    </div>
  );
}
