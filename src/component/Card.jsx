// import React from "react";
// import "./card.css";
// import { Button } from "./Button";
// import { GoCreditCard } from "react-icons/go";
// import { IconContext } from "react-icons/lib";
// import { BsCloudDrizzle } from "react-icons/bs";

// function Card({ img, heading, desc, technologies, repolink }) {
//   let icon = 0;
//   if (img === "credit") {
//     icon = <GoCreditCard />;
//   }

//   if (img === "weather") {
//     icon = <BsCloudDrizzle />;
//   }

//   return (
//     <>
//       <IconContext.Provider value={{ color: "white", size: "130px" }}>
//         <div className="card-container">
//           <div className="card-image-container">{icon}</div>

//           <div className="card-text-container">
//             <h2>{heading}</h2>
//             <p>{desc}</p>
//             <p>
//               <span>Technologies:-</span> {technologies}
//             </p>
//             <a href={repolink}>
//               <Button buttonStyle="btn--outline" buttonSize="btn--medium">
//                 Github
//               </Button>
//             </a>
//           </div>
//         </div>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Card;
