import { Link } from '.';

export interface IProfile {
    Author: string;
    Slogan: string;
    SocialMediaLinks: Link[];
}

export class Profile implements IProfile {
    Author: string;
    Slogan: string;
    SocialMediaLinks: Link[];

    constructor() {}

    public static getDefaultProfile(): Profile {
        const profile = new Profile();

        profile.Author = 'Erik Craddock';
        profile.Slogan = 'Musician, Programmer, Troublemaker';
        profile.SocialMediaLinks = [];
        profile.SocialMediaLinks.push(new Link('GitHub', '//github.com/evcraddock', 'fa-github'));
        profile.SocialMediaLinks.push(new Link('Facebook', '//facebook.com/evcraddock', 'fa-facebook'));
        profile.SocialMediaLinks.push(new Link('Pinterest', '//pinterest.com/evcraddock', 'fa-pinterest'));
        profile.SocialMediaLinks.push(new Link('Instagram', '//instagram.com/evcraddock', 'fa-instagram'));
        profile.SocialMediaLinks.push(new Link('Twitter', '//twitter.com/evcraddock', 'fa-twitter'));

        return profile;
    }
}

