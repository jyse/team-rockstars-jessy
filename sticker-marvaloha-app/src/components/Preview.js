import React, { useEffect } from "react";
import "./Preview.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCameraImage, resetCameraImage } from "../features/cameraSlice";
import CloseIcon from "@material-ui/icons/Close";
import "./Preview.css";
import { Rnd } from "react-rnd";
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

function Preview() {
  const cameraImage = useSelector(selectCameraImage);
  console.log(cameraImage, "what is in cameraImage from Redux");
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cameraImage) {
      history.replace("/");
    }
  }, [cameraImage, history]);

  const closePreview = () => {
    dispatch(resetCameraImage());
  };

  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview__close" />
      <div className="preview__toolbarRight">
        <Rnd
          default={{
            x: -25,
            y: 0,
          }}
        >
          <Chocolate size={35} mood="happy" color="#FE654F" />
        </Rnd>
        <Rnd
          default={{
            x: -25,
            y: 40,
          }}
        >
          <IceCream size={35} mood="excited" color="#DEC1FF" />
        </Rnd>
        <Rnd
          default={{
            x: -35,
            y: 80,
          }}
        >
          <SpeechBubble size={25} mood="lovestruck" color="#B0D7FF" />
        </Rnd>
        <Rnd
          default={{
            x: -40,
            y: 110,
          }}
        >
          <Mug size={25} mood="blissful" color="yellow" />
        </Rnd>
        <Rnd
          default={{
            x: -25,
            y: 140,
          }}
        >
          <Backpack size={35} mood="happy" color="#00C49A " />
        </Rnd>
        <Rnd
          default={{
            x: -30,
            y: 180,
          }}
        >
          <Ghost size={35} mood="shocked" color="#CF7790" />
        </Rnd>
        <Rnd
          default={{
            x: -35,
            y: 220,
          }}
        >
          <Planet size={35} mood="happy" color="#A9E190" />
        </Rnd>
        <Rnd
          default={{
            x: -30,
            y: 260,
          }}
        >
          <Cat size={35} mood="excited" color="#6100E0" />
        </Rnd>
      </div>
      <img src={cameraImage} alt="" />
    </div>
  );
}

export default Preview;
