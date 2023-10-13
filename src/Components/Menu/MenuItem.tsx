import { MenuItemModel } from "../../models/MenuItemModel";
import classes from "./MenuItem.module.scss";
//import Image from "../../Images/trapula.png";
import Avatar from "../UI/Avatar";

interface IMenuItemProps {
  item: MenuItemModel;
}

const MenuItem = (props: IMenuItemProps) => {
  return (
    <div className={classes.Item}>
      <div>
        <Avatar imageSrc={props.item.image} />
      </div>
      <div className={classes.itemData}>
        <div className={classes.title}>{props.item.Name}</div>
        <div>0.3 L: {props.item.Price_0_3} &euro;</div>
        <div>0.5 L: {props.item.Price_0_5} &euro;</div>
      </div>
      <div></div>
    </div>
  );
};

export default MenuItem;
