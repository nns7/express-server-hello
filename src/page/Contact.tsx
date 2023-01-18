import { FC } from "react";

const Contact: FC = () => (
  <div className="container mx-auto h-screen bg-blue-200">
    <h1
      id="contact"
      className="flex justify-center pb-10 text-4xl font-semibold"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
      Contact
    </h1>
    <span className="flex flex-col items-center">
      <h2 className="mb-2 w-10/12 text-xl font-semibold">名前</h2>
      <input
        type="text"
        className="mb-2 w-10/12 border-2 border-blue-900 duration-500 hover:bg-yellow-200"
        name="name"
        id="name"
      />
    </span>
    <span className="flex flex-col items-center">
      <h2 className="mb-2 w-10/12 text-xl font-semibold">メールアドレス</h2>
      <input
        type="text"
        className="mb-2 w-10/12 border-2 border-blue-900 duration-500 hover:bg-yellow-200"
        name="mail"
        id="mail"
      />
    </span>
    <span className="flex flex-col items-center">
      <h2 className="mb-2 w-10/12 text-xl font-semibold">タイトル</h2>
      <input
        type="text"
        className="mb-2 w-10/12 border-2 border-blue-900 duration-500 hover:bg-yellow-200"
        name="title"
        id="title"
      />
    </span>
    <span className="flex flex-col items-center">
      <h2 className="mb-2 w-10/12 text-xl font-semibold">本文</h2>
      <textarea
        className="mb-2 w-10/12 border-2 border-blue-900 duration-500 hover:bg-yellow-200"
        name="detail"
        id="detail"
      ></textarea>
    </span>
    <p className="flex flex-col items-center">
      <button className="w-10/12 rounded bg-red-700 p-2 font-semibold text-white duration-500 hover:bg-red-500">
        送信
      </button>
    </p>
  </div>
);

export default Contact;
