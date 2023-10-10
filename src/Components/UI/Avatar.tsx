/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from './Avatar.module.scss';
interface IAvatarProps {
    imageSrc: any;
}

const Avatar = (props: IAvatarProps):JSX.Element => {
    console.log(props.imageSrc)
    return <img src={props.imageSrc} alt="Avatar" className={classes.avatar}/>
}

export default Avatar;