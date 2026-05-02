"use client";
import { useState, useEffect } from "react";

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "Debate Erupts Among the Fingers as the House of Spider Falls",
      body: "The House of Spider once the union of all Fingers has been found abandoned. Every representative lies dead. Only Ryoshu remains alive. Now, the Fingers must decide: is this a survivor… or the beginning of something far worse?",
      image: "https://i.ibb.co.com/yF1WfZrd/image.png",
    },
    {
      userId: 1,
      id: 2,
      title: "Trailblazer Turns Evil? Aha's Lightsaber Sparks Dark Speculation",
      body: "The Astral Express arrives at Planarcadia once more celebrated as heroes, destined to save the world. But this time, the Aeon Aha offers a strange gift: a lightsaber. A weapon of light… or a gateway to darkness?",
      image: "https://i.ibb.co.com/4RyQHrqG/image.png",
    },
    {
      userId: 1,
      id: 3,
      title: "Chubby Lung Supply Running Low?! Shortage Sparks Panic",
      body: "In the aftermath of the Blight Tide contained by Tianshi Zhuang and her alliance with Endfield Industries a new variant of Chubby Lung has been released. But supplies are vanishing fast.",
      image: "https://i.ibb.co.com/JRWj9B3L/image.png",
    },
    {
      userId: 1,
      id: 4,
      title: "Lady Sunbringer Returns?! Sixth Street Sighting Sparks Speculation",
      body: "Lady Sunbringer the genius behind Bangboo technology has reportedly resurfaced after a year long absence. Witnesses claim she was seen at a video store on Sixth Street wearing an uncharacteristically revealing outfit.",
      image: "https://i.ibb.co.com/cX82ZF4g/image.png",
    },
    {
      userId: 1,
      id: 5,
      title: "Tragedy Unfolds: Outrage Grows Over Disrespectful Video",
      body: "A devastating incident has left multiple victims and a shaken community. A video circulating online appears to mock the tragedy. Viewer discretion advised. https://youtu.be/xvFZjo5PgG0",
      image: "https://i.ibb.co.com/CSKtWLJ/image.png",
    },
  ],
};

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <span className="font-bold text-xl">Evandra Rasya Fadhillah 2406450352</span>
      <div className="flex gap-6">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#posts" className="hover:text-blue-400">Profile</a>
        <a href="#counter" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}

function Card({ title, body, image }: { title: string; body: string; image: string }) {
  const parts = body.split(/(https?:\/\/\S+)/g);
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h2 className="font-semibold text-gray-800 text-sm mb-1">{title}</h2>
        <p className="text-gray-500 text-xs whitespace-pre-line">
          {parts.map((part, i) =>
            part.match(/https?:\/\/\S+/) ? (
              <a key={i} href={part} target="_blank" rel="noreferrer" className="text-blue-500 underline">Watch Video</a>
            ) : (part)
          )}
        </p>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} — press more and something interesting might happen~ If you can, ehe!`);
    }
  }, [count]);

  return (
    <div id="counter" className="flex flex-col items-center py-8 gap-3">
      <h2 className="text-xl font-bold text-gray-700">Counter Demo</h2>
      <span className="text-5xl font-mono font-bold text-blue-600">{count}</span>
      <div className="flex gap-2">
        <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">+</button>
        <button onClick={() => setCount(count - 1)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">-</button>
        <button onClick={() => setCount(0)} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Reset</button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-gray-100">
      <Navbar />
      <Counter />
      <section id="posts" className="px-6 pb-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {response.results.map((item) => (
            <Card key={item.id} title={item.title} body={item.body} image={item.image} />
          ))}
        </div>
      </section>
    </main>
  );
}