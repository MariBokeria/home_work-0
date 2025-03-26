import { useState } from "react";

export default function RepeatText() {
  const [output, setOutput] = useState("");

  const handleRepeat = () => {
    const text = prompt("შეიყვანეთ ტექსტი:").trim();
    const times = prompt("რამდენჯერ გაიმეოროს?").trim();
    
    if (text && times && !isNaN(times) && Number(times) > 0) {
      const repeatedText = text.repeat(Number(times));
      console.log(repeatedText);
      setOutput(repeatedText);
    } else {
      console.log("გთხოვთ, შეიყვანოთ სწორი მონაცემები!");
      setOutput("შეცდომა: შეიყვანეთ სწორი ტექსტი და რიცხვი!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-5">
      <h1 className="text-2xl font-bold">ტექსტის გამეორება</h1>
      <button onClick={handleRepeat} className="px-6 py-2 bg-gray-800 text-white rounded">
        ტექსტის გამეორება
      </button>
      {output && <p className="mt-4 p-2 bg-gray-200 rounded">{output}</p>}
    </div>
  );
}