/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from './Avatar.module.scss';
//import { useEffect, useState } from 'react';
interface IAvatarProps {
    imageSrc: any;
}


const Avatar = (props: IAvatarProps):JSX.Element => {
    
    return <img src={props.imageSrc} alt="Avatar" className={classes.avatar}/>
}

export default Avatar;