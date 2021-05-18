import React, { useContext } from "react";
import { Context } from "../Context";
import Image from "../Image";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(Context);
  console.log("Below is all photos being logged out");
  console.log(allPhotos);
  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));
  return <main className="photos">{imageElements}</main>;
}

export default Photos;
