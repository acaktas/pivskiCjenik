import classes from './Avatar.module.scss';
interface IAvatarProps {
    imageSrc: string
}

const Avatar = (props: IAvatarProps) => {
    return <img src={props.imageSrc} alt="Avatar" className={classes.avatar}></img>
}

export default Avatar;