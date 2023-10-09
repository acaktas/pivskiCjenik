/* eslint-disable @typescript-eslint/no-explicit-any */
export class MenuItemModel {
    public Name: string = "";
    public Id: string = "";
    public Price: number = 0;
    public image: string = "";

    constructor(model?: any){
        if(model){
            this.Name = model.Name;
            this.Id = model.Id
            this.Price = model.Price;
            this.image = model.image;
        }
    }

}