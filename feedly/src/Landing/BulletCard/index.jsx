import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Typography,PageLoader } from "@bigbinary/neetoui/v2";
import Card from './Card';

const BulletCard = ({result,category}) => {

  return (
  //   <div className="py-5 border-b space-y-2">
  //   <div className="flex flex-row ">
  //   {Array(2).fill().map((_,i)=>(
  //     <Card key={i} result={result} index={i}/>
  //   ))}
  // </div>
  // <div className="flex flex-row border border-black ">
  //   {Array(2).fill().map((_,i)=>(
  //     <Card key={i} result={result} index={i} />
  //   ))}
  // </div>
  // </div>
  <div className="py-5 border-b">
<div className="grid grid-cols-2 gap-12">
        <Card result={result} index={1}/>
        <Card result={result} index={2}/>
        <Card result={result} index={3}/>
        <Card result={result} index={4}/>
  </div>
  </div>

  );
}

export default BulletCard;










// import React,{useEffect, useState} from 'react';
// import axios from 'axios';
// import { Typography,PageLoader } from "@bigbinary/neetoui/v2";

// const BulletCard = ({result,category}) => {

//   return (
//     <div className="flex flex-row w-1/2 border border-black">
//     <div>
//       <img src="https://picsum.photos/84/84" alt="" className=""/>
//     </div>
//     <div className="px-5 flex flex-col space-y-3">
//     <Typography style="h6">{result[0].title}</Typography>
//     <Typography style="body3">{`${result[0].author} at ${result[0].time} on ${result[0].date}`}</Typography>
//     <Typography style="body2" className="neeto-ui-text-secondary-indigo">Read More</Typography>
//     </div>

//   </div>
//   );
// }

// export default BulletCard;
