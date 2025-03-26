export default function RepeatText() {
    const handleRepeat = () => {
      const text = prompt("შეიყვანეთ ტექსტი:");
      const times = prompt("რამდენჯერ გაიმეოროს?");
      
      if (text && times && !isNaN(times)) {
        console.log(text.repeat(Number(times)));
      } else {
        console.log("გთხოვთ, შეიყვანოთ სწორი მონაცემები!");
      }
    };
  
    return (
      <div className="flex flex-col items-center gap-4 p-5">
        <h1 className="text-2xl font-bold">ტექსტის გამეორება</h1>
        <button onClick={handleRepeat} className="px-6 py-2 bg-gray-800 text-white rounded">
          ტექსტის გამეორება
        </button>
      </div>
    );
  }