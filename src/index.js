import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const img1 = "https://e1.pxfuel.com/desktop-wallpaper/758/579/desktop-wallpaper-toedit-bts-jungkook-cute-soft-btsjeonjung-jungkook-cute-pics.jpg";
const img2 = "https://e0.pxfuel.com/wallpapers/268/735/desktop-wallpaper-bts-pics-cute-bts-summer.jpg";
const img3 = "https://e0.pxfuel.com/wallpapers/389/963/desktop-wallpaper-bts-cute-pics-bts-girls.jpg";
const links = "https://www.pxfuel.com/en/query?q=bts+cute+pics";

ReactDOM.render(
<>
<h1 className = "heading"> My name is Shilpa Sinha</h1>
<a href = {links} target = "_blankpage">
<img src = {img1} alt = "Jungkook" width = "200" height = "200"/>
<img src = {img2} alt = "BTS"width = "200" height = "200"/>
<img src = {img3} alt = "BTS"width = "200" height = "200"/>
</a>
</>,
document.getElementById("root")
);