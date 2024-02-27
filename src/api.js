// api 모아놓은 파일

const BASE_URL = process.env.REACT_APP_BASE_URL;

// 글 목록 불러오기
export async function apiGetNoticeList() {
  try {
    return await fetch(`${BASE_URL}/notice`).then((res) => res.json());
  } catch (e) {
    console.log(e);
  }
  return;
}

// 글 작성하기

export async function apiPostNoticeWrite(formData) {
  try {
    // console.log("API", formData)
    return await fetch(`${BASE_URL}/notice/write`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}