export class MenuItem{
    constructor(name: string, url: string, position: number, childs: MenuItem[]) {
        this.name = name;
        this.url = url;
        this.position = position;
        this.childs = childs;
    }

    static emptyInstance(){
        return new MenuItem("", "", 0, []);
    }

    name: string;
    url: string;
    position: number;
    childs: MenuItem[];
}