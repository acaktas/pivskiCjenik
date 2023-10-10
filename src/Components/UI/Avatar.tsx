/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from './Avatar.module.scss';
import Image from '../../Images/paulaner.png'
interface IAvatarProps {
    imageSrc: any;
}

const Avatar = (props: IAvatarProps):JSX.Element => {
    console.log(props.imageSrc)
    return <img src={Image} alt="Avatar" className={classes.avatar}/>
}

export default Avatar;