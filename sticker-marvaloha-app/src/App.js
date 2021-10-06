import React, { useState } from "react";
import "./App.css";
import { IceCream, SpeechBubble, Chocolate } from "react-kawaii";
import stickersData from "./stickersData";
import { Rnd } from "react-rnd";

export default function App() {
  // const [images, setImages] = useState([]);

  return (
    <div className="app">
      <img src="https://images.unsplash.com/photo-1609258612794-3502fb4306a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
      <div className="stickers">
        <h1>HELLO STICKER </h1>
        <h4 className="heading"> Click/Tap to add sticker to photo!</h4>
        {stickersData.map((sticker) => {
          return (
            <div className="sticker">
              <Rnd>
                <sticker.name
                  size={150}
                  mood={sticker.mood}
                  color={sticker.color}
                />
              </Rnd>
            </div>
          );
        })}
      </div>
    </div>
  );
}
