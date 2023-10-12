import {MenuItemModel} from '../models/MenuItemModel'
import Paulaner from '../assets/Beers/Paulaner.webp';
import Ferata from '../assets/Beers/Ferata.webp';
import Heineken from '../assets/Beers/Heineken.webp';
import MilaBarilo from '../assets/Beers/Mila.webp';
import Budwieser from '../assets/Beers/Budwieser.webp';
import Pan from '../assets/Beers/Pan.webp';
import Somersby from '../assets/Beers/Somersby.webp'


export const menuItems: MenuItemModel[] = [
    {
        Id: "1",
        Name: "Paulaner",
        Price_0_3: 3.4,
        Price_0_5: 3.4,
        image: Paulaner,
        Producer: "Paulaner Brauerei"
      },
      {
        Id: "2",
        Name: "Pan",
        Price_0_3: 3.4,
        Price_0_5: 3.4,
        image: Pan,
        Producer: "Carlsberg Croatia"
      },
      {
        Id: "3",
        Name: "Mila Barilo",
        Price_0_3: 3.4,
        Price_0_5: 3.4,
        image: MilaBarilo,
        Producer: "Pivovara Barilo"
      },
      {
        Id: "4",
        Name: "Budweiser",
        Price_0_3: 3.4,
        Price_0_5: 3.4,
        image: Budwieser,
        Producer: "Anheuser–Busch"
      },
      {
        Id: "5",
        Name: "Heineken",
        Price_0_3: 3.4,
        Price_0_5: 3.4,
        image: Heineken,
        Producer: "Heineken N.V."
      },
      {
        Id: "6",
        Name: "Ferata",
        Price_0_3: 3.4,
        Price_0_5: 3.4,
        image: Ferata,
        Producer: "Familia Bracera"
      },
      {
        Id: "7",
        Name: "Somersby",
        Price_0_3: 3.4,
        Price_0_5: 3.4,
        image: Somersby,
        Producer: "Carlsberg Group"
      }
] 