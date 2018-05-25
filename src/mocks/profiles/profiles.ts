import { Profile } from '../../models/profile/profile.interface';

const profileList: Profile[] = [
    {
        firstName: "Peter",
        lastName: "Anguila",
        avatar: "assets/img/avatar.png",
        email: "peteranguila@mail.com",
        dateOfBirth: new Date()
    },
    {
        firstName: "Elmer",
        lastName: "Curio",
        avatar: "assets/img/avatar.png",
        email: "elmercurio@mail.com",
        dateOfBirth: new Date()
    },
    {
        firstName: "Wendy",
        lastName: "Woo",
        avatar: "assets/img/avatar.png",
        email: "chicakungfoo@mail.com",
        dateOfBirth: new Date()
    },
    {
        firstName: "Alma",
        lastName: "Mador",
        avatar: "assets/img/avatar.png",
        email: "mador_alma@mail.com",
        dateOfBirth: new Date()
    }
];

export const PROFILE_LIST = profileList;
