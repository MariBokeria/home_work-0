import { useState } from "react";

export default function LogoSwitcher() {
  const [logo, setLogo] = useState("/react.png");

  // ლოგოს შეცვლა ღილაკზე დაჭერისას
  const changeLogo = (tech) => {
    const logos = {
      React: "/react.png",
      JavaScript: "/javascript.png",
      Html: "/html.png",
      Css: "/css.png"
    };
    setLogo(logos[tech]);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-5">
      <h1 className="text-2xl font-bold">ლოგოს შეცვლა</h1>
      <img src={logo} alt="Logo" className="w-32 h-32" />
      <div className="flex gap-2">
        <button onClick={() => changeLogo("React")} className="px-4 py-2 bg-blue-500 text-white rounded">React</button>
        <button onClick={() => changeLogo("JavaScript")} className="px-4 py-2 bg-yellow-500 text-black rounded">JavaScript</button>
        <button onClick={() => changeLogo("Html")} className="px-4 py-2 bg-orange-500 text-white rounded">HTML</button>
        <button onClick={() => changeLogo("Css")} className="px-4 py-2 bg-blue-700 text-white rounded">CSS</button>
      </div>
    </div>
  );
}