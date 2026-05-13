"use client";
import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImg, setPickedImg] = useState(null);
  const imageInput = useRef();
  const handleClick = () => {
    imageInput.current.click();
  };
  const handleImage = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImg(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImg(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImg && <p>no image picked</p>}
          {pickedImg && <Image src={pickedImg} fill />}
        </div>
        <input
          type="file"
          ref={imageInput}
          className={classes.input}
          name={name}
          id={name}
          accept="image/png, image/jpeg"
          required
          onChange={handleImage}
        />
        <button type="button" className={classes.button} onClick={handleClick}>
          import your Image
        </button>
      </div>
    </div>
  );
}
