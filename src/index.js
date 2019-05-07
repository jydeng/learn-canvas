import zrender from "zrender";
// import helloworld from "./zrender/helloworld";
// import text from "./zrender/text";
// import animation from "./zrender/animation";
// import spray from "./zrender/spray";
import percentage from "./zrender/percentage";

let zr = zrender.init(document.getElementById("main"));
// helloworld(zr, zrender);
// text(zr, zrender);
// animation(zr,zrender);
// spray(zr,zrender);
percentage(zr, zrender);
