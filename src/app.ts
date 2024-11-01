import express from "express";
import path from "path";
/*1- ENTRANCE*/
const app = express(); // bu yerda expressni chaqirib olyapmiz
console.log("__dirname", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // bu kod orqali rest API sifatida request bo'lyapkan data larni body sida kelyapkan  json data otkazishga ruxsat beryapmiz

/**2- SESSIONS */
/**3-VIEWS */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/**4-ROUTERS */
export default app; // module.exports=app; bolardi common js da. bu yerda esma js da ishlatyapkanimiz uchun boshqacharo