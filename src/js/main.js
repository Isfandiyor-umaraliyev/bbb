import "../css/main.css";
import "../js/mode";
import "../js/request";
import "../js/response";
import requst from "../js/request";

import { createResponse } from "./response";
import loaderToggle from "./loader";
const cardsEl = document.querySelector("#response__item");

const word = document.getElementById("search");
const form = document.querySelector("#form");
const eror = document.querySelector(".eror");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;
    requst(API)
        .then((data) => {
            createResponse(data);
            // console.log(data);
            if (data) {
                eror.classList.add("hidden");
            }
        })
        .catch((err) => {
            if (err) {
                loaderToggle(false);
                cardsEl.innerHTML = `
        <div class="eror_sticer">
        <div class="sticer container">

            <span class="sticerr">
                😕
            </span>
            <span class="sticerr__text">
                No Definitions Found
            </span>
            <span class="sticerr__text_desc">
                Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.

            </span>

        </div>
    </div>
        `;
                if (word.value == "" || word.value == " ") {
                    cardsEl.innerHTML = "";
                    loaderToggle(false);
                    eror.classList.remove("hidden");
                }
            }
        });
});
let option = document.querySelector("#font");
option.addEventListener("change", (e) => {
    e.preventDefault();
    let val = option.value;
    console.log(val);
    document.body.style.fontFamily = val;
    option.style.fontFamily = val;
    word.style.fontFamily = val;
});