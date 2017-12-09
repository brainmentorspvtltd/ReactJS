export default class ItemModel{
    constructor(id, name,price, url){
            this.id = id;
            this.name = name;
            this.price = price;
            this.url = url;
            this.markForDelete = false;

    }
    toggle(){
        this.markForDelete = !this.markForDelete;
        console.log("Toggle Called ",this.markForDelete);
    }
}