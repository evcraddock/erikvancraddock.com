export interface ILink {
    Title: string;
    Url: string;
    Icon: string;
}

export class Link implements ILink {
    Title: string;
    Url: string;
    Icon: string;

    constructor(title: string, url: string, icon: string) {
        this.Title = title;
        this.Url = url;
        this.Icon = icon;
    }
}