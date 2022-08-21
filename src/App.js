//tempat untuk import semua component, hook, dan logic component
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0); //menggunakan ref sebagai variabel untuk menghitung jumlah item yang ditambahkan
  const refName = useRef("data lama"); //membuat variabel ref string untuk menampung data lama

  useEffect(() => {
    count.current = count.current + 1;
    console.log("refNames.current", refName.current.value); //cara mendapatkan data dari form input
    console.log("count.current", count); //coba cek di console bahwa ref itu terdiri dari 2 hal, hal pertama berupa property current yang biasanya berisi data. dan akan ada data lement yang terdapat dapam methodnya
  });

  function setClickForm(e) {
    e.preventDefault();

    console.log("refNames.current", refName.current.value); //cara mendapatkan data dari form input
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        ref={refName} //cara mendaftarkan ref ke form input
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={setClickForm}>Change Ref Value</button>

      <h1>Render Count: {count.current}</h1>
      {/* cara menampilkan data dari refName */}
      <h1>Render Count: {refName.current.value}</h1>
    </>
  );
}
