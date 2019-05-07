import lineCap from "./lineCap";
export default function(canvas) {
  let context = canvas.getContext("2d");
  lineCap(context);
}
