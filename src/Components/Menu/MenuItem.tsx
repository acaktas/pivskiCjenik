import { MenuItemModel } from "../../models/MenuItemModel";
import classes from "./MenuItem.module.scss";
import Image from "../../Images/paulaner.png";
import Avatar from "../UI/Avatar";

interface IMenuItemProps {
  item: MenuItemModel;
}

const MenuItem = (props: IMenuItemProps) => {
  return (
    <div className={classes.Item}>
      <Avatar imageSrc={Image} />
      <div className={classes.itemData}>
        <div className={classes.title}>{props.item.Name}</div>
        <div>{props.item.Price} &euro;</div>
      </div>
      <div></div>
    </div>
  );
};

export default MenuItem;
