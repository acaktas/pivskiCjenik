import { menuItems } from "../../constants/Items";
import { MenuItemModel } from "../../models/MenuItemModel";
import classes from "./ActionsPage.module.scss";

const ActionsPage = () => {
  return (
    <div className={classes.container}>
      <h1>Pivkan</h1>
      <br />
      <div className={classes.itemsContainer}>
        {menuItems.map((item: MenuItemModel, index: number) => {
          if (index < 3) {
            return (
              <div className={classes.item}>
                <div className={classes.circle}>
                    %
                </div>
                <img src={item.image} />
                <h1>Akcija</h1>
                <h2>{item.Name}: {item.Price_0_3} &euro;/0.3 L</h2>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ActionsPage;
