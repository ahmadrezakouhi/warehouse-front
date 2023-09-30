export interface IGoods {
    id:number;
    goodsCode:number;
    name:string;
    model:string;
    description:string;
    unit:string;
    group:string;
}

export class Goods{
    goodsCode:number;
    name:string ;
    model:string;
    description:string;
    unitId:number;
    groupId:number;
}
