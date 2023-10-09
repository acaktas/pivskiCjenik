import {MenuItemModel} from '../../models/MenuItemModel'
import MenuItem from './MenuItem'
import classes from './MenuItems.module.scss'

interface IMenuItemsProps{
    items: MenuItemModel[]
}
const MenuItems = (props: IMenuItemsProps) => {
    return <>
    <div className={classes.Container}>
        {props.items.map((item: MenuItemModel) => {
            return <MenuItem key={item.Id} item={item}/>
        })}
    </div>
    </>
}

export default MenuItems;