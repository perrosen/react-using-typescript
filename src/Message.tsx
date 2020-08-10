import React from "react";
import messageHoc from "./Hoc";

// interface UserMessage {
//   name: string;
//   message: string;
// }

// const Message = (props: UserMessage) => {
//   return (
//     <p>
//       {props.name}: {props.message}
//     </p>
//   );
// };

const example = (props: any): any => <p>{props.name}, {props.message}</p>;

const Message = messageHoc(example);

export default Message;
