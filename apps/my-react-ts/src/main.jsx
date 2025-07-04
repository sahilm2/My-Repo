import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// let ques = ["name.school.name", "name.college.test"]
// let ans = {}

// for (let i = 0; i < ques.length; i++) {
//     let arr = ques[i].split(".")
//     ans = combine(arr[0], arr.splice(1), ans)
// }

// function combine(s, remain, some) {
//     if (!s && !some) return 0
    
//     if (some && Object.keys(some).length && some.hasOwnProperty(s)) {
//         let b = some[s]
//         let n = combine(remain[0], remain.splice(1), b) 
//         return {[s]: {
//         ...b,
//         ...n
//     }}
//     }
    
//     return {
//         [s]: combine(remain[0], remain.splice(1)) 
//     }
// }

// console.log(ans)