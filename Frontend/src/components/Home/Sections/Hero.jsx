// import React from 'react'

// function Hero() {
//   return (
//     <div className='w-screen h-screen pt-8'>
//         <div className='h-full w-full flex'>
//         <div className='w-[60%] bg-[#084FC7]  h-full'></div>
//         <div className='w-[40%] bg-gradient-to-r from-[#084FC7] to-[#7F56D9] h-full '>
//             <img className ='h-[80%] absolute bottom-0 left-[65%] right-0 flex justify-center' src="/src/assets/hero_girl.svg" alt="" />
//             <img  className ='h-[80%] absolute bottom-0 left-0 right-0 flex justify-center' src="/src/assets/bg-round.svg" alt="" />
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Hero

// import React from 'react';

// function Hero() {
//   return (
//     <div className='w-screen h-screen pt-8'>
//       <div className='h-full w-full flex flex-col md:flex-row'>
//         <div className='md:w-[60%] bg-[#084FC7] h-full'></div>
//         <div className='md:w-[40%] bg-gradient-to-r from-[#084FC7] to-[#7F56D9] h-full relative'>
//           <img
//             className='h-[80%] object-cover md:absolute bottom-0 left-0 right-0 flex justify-center'
//             src="/src/assets/hero_girl.svg"
//             alt=""
//           />
//         </div>
//         <img
//             className='h-[80%] object-cover md:absolute bottom-0 left-0 right-0 flex justify-center'
//             src="/src/assets/bg-round.svg"
//             alt=""
//           />
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from 'react';

function Hero() {
  return (
    <div className='w-screen h-screen pt-8'>
      <div className='h-full w-full flex flex-col md:flex-row bg-gradient-to-tr from-[#084FC7] via-[#5148f4] to-[#7F56D9]'>
        <div className='md:w-[60%] h-full native'>
          <div><p className='md:w-[60%] pr-8 pl-8 absolute bottom-0 left-0 text-left text-[280%] text-[#FFFFFF]' style={{ fontFamily: 'Roboto' }}>Connecting rural <br /><span className='text-custom-green'>Sri Lankan</span><br /> students with volunteers, sparking brighter futures !</p></div>
          <div><p className='md:w-[60%] pr-8 pl-8 absolute bottom-0 left-0 text-left text-[100%] text-[#B7B7B7]'>Every child deserves quality education, join us to bridge the gap!</p></div>
          <div></div>
        </div>
        <div className='md:w-[40%] h-full relative'>
          <img
            className='hidden md:block md:h-[80%] object-cover md:absolute bottom-0 left-0'
            src="/src/assets/hero_girl.svg"
            alt=""
          />
        </div>
          <img
            className='hidden md:block md:h-[80%] object-cover md:absolute bottom-0 left-0 right-0 flex justify-center'
            src="/src/assets/bg-round.svg"
            alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
