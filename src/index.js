import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Shilpa Sinha";
const img1 = "https://e1.pxfuel.com/desktop-wallpaper/758/579/desktop-wallpaper-toedit-bts-jungkook-cute-soft-btsjeonjung-jungkook-cute-pics.jpg";
const img2 = "https://e0.pxfuel.com/wallpapers/132/264/desktop-wallpaper-kaldur%E3%80%90%E2%98%AF%E3%80%91%E2%80%BF%E3%80%90%E2%98%AF%E3%80%91-cute-jungkook-pics-a-thread-cute-jung-kook-bts.jpg";
const img3 = "https://e0.pxfuel.com/wallpapers/389/963/desktop-wallpaper-bts-cute-pics-bts-girls.jpg";
const links = "https://www.pxfuel.com/en/query?q=bts+cute+pics";
ReactDOM.render(
<>
<h1 contentEditable="true">My name is {fname} </h1>,
<a href = "https://www.pxfuel.com/en/query?q=bts+cute+pics" target = "_blankpage">
<img src = {img1} alt = "jungkook" width = "200" height = "300"/>
<img src = {img2} alt = "jungkook" width = "250" height = "300"/>
<img src = {img3} alt = "bts" width = "250" height = "300"/>
</a>
</>,
document.getElementById('root')); 