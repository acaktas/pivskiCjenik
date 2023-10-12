/* eslint-disable @typescript-eslint/no-explicit-any */
export class MenuItemModel {
    public Name: string = "";
    public Id: string = "";
    public Price_0_3: number = 0;
    public Price_0_5: number = 0;
    public image: string = "";
    public Producer: string = "";

    constructor(model?: any){
        if(model){
            this.Name = model.Name;
            this.Id = model.Id
            this.Price_0_3 = model.Price_0_3;
            this.Price_0_5 = model.Price_0_5;
            this.image = model.image;
            this.Producer = model.Producer;
        }
    }

}