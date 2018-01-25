import './css/home.css'
import './css/home.scss'
import message from './js/message';
import fsociety from './img/fsociety.jpg';
import React,{Component} from 'react';
import {render} from 'react-dom';
import coinsData from './coins.json';
import Coins from './js/components/coins';

let title = document.getElementById('title');
let container = document.getElementById('container');
const img = document.createElement("img");
const h1 = document.createElement("h1");
img.setAttribute("src", fsociety)
img.setAttribute("width", 50)
img.setAttribute("height", 50)
h1.textContent = message;
title.append(img)
title.append(h1)
render(<Coins data={coinsData}/>,document.getElementById('container'));