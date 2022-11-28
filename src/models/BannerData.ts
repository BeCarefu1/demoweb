export class BannerData{
    constructor(image: string, text: string, link: string) {
        this.Image = image;
        this.Text = text;
        this.Link = link;
    }

    Image: string;
    Text: string;
    Link: string;
}