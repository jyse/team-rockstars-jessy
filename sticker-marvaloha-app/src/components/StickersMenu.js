import React from "react";
import {
  Chocolate,
  IceCream,
  SpeechBubble,
  Mug,
  Backpack,
  CreditCard,
  Ghost,
  Planet,
  Cat,
  Folder,
} from "react-kawaii";
import "./StickersMenu.css";
import { Rnd } from "react-rnd";

function StickersMenu() {
  return (
    <div className="stickersMenucontainer">
      <div className="stickersMenu">
        <div className="sticker">
          <Rnd>
            <Chocolate size={70} mood="happy" color="#FE654F" />
          </Rnd>
        </div>
        <div className="sticker">
          <Rnd>
            <IceCream size={70} mood="excited" color="#DEC1FF" />
          </Rnd>
        </div>
        <div className="sticker">
          <Rnd>
            <SpeechBubble size={70} mood="lovestruck" color="#B0D7FF" />
          </Rnd>
        </div>
        <div className="sticker">
          <Rnd>
            <Mug size={70} mood="blissful" color="#E8C547" />
          </Rnd>
        </div>
        <div className="sticker">
          <Rnd>
            <Backpack size={70} mood="happy" color="#00C49A " />
          </Rnd>
        </div>
        <div className="sticker">
          <Rnd>
            <CreditCard size={70} mood="happy" color="#476DAE" />
          </Rnd>
        </div>
        <div className="sticker">
          <Rnd>
            <Ghost size={70} mood="shocked" color="#FFC2B4" />
          </Rnd>
        </div>
        <div className="sticker">
          <Rnd>
            <Planet size={70} mood="happy" color="#A9E190" />
          </Rnd>
        </div>
        <div className="stickers">
          <Rnd>
            <Cat size={70} mood="excited" color="#6100E0" />
          </Rnd>
        </div>
        <div className="sticker">
          <Rnd>
            <Folder size={70} mood="blissful" color="#FB8F67" />
          </Rnd>
        </div>
      </div>
    </div>
  );
}

export default StickersMenu;
