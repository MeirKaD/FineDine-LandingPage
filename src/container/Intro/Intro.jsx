import React from 'react';
import {BsPlayFill,BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [PlayVideo, setPlayVideo] = React.useState(false);
  const vidref=React.useRef();
  const handleVideo = ()=>{
    setPlayVideo((prevPlayVideo)=> !prevPlayVideo)
    if(PlayVideo){
      vidref.current.pause();
    }else{
      vidref.current.play();
    }
    
  }
   return(
      <div className='app__video'>
    <video 
    src={meal} 
    ref={vidref}
    type="video/mp4"
    loop
    controls={false}
    muted/>
    <div className='app__video-overlay flex__center'>
      <div className='app__video-overlay_circle flex__center'
      onClick={handleVideo}>
          {PlayVideo?(
            <BsPauseFill color="#fff" fontSize={30}/>
          ) : <BsPlayFill color="#fff" fontSize={30}/>

        }
      </div>
    </div>
  </div>
  )
}
 



export default Intro;
