const suggestions = [
    {
        title: 'Paris',
        location: 'Paris, France',
        media: 'Paris'
    },
    {
        title: 'Thailand',
        location: 'Asia',
        media: 'Thailand'
    },
    {
        title: 'Galapagos Islands',
        location: 'Galápagos, Ecuador',
        media: 'Galapagos'
    },
    {
        title: 'Niagara Falls',
        location: 'New York, United States',
        media: 'Niagara'
    },
    {
        title: 'Easter Island',
        location: 'Chile',
        media: 'Easter'
    },
    {
        title: 'Huacachina Oasis',
        location: 'Huacachina, Peru',
        media: 'Huacachina'
    },
    {
        title: 'Taj Mahal',
        location: 'Agra, India',
        media: 'TajMahal'
    },
    {
        title: 'Uyuni Salt Flats',
        location: 'Uyuni, Bolivia',
        media: 'Uyuni'
    },
    {
        title: 'Cinque Terre',
        location: 'Cinque Terre, Italy',
        media: 'Cinque'
    },
    {
        title: 'Leaning Tower of Pisa',
        location: 'Pisa, Italy',
        media: 'Pisa'
    }
];

export function getSuggestionData() {
    return suggestions;
}

const tempRenderItems = [
    {
        place: 'Paris',
        location: 'Paris, France',
        url: 'https://th.bing.com/th/id/R.2de4d139aa176401b60750b71c33be82?rik=w3hMuGFsR0RmcQ&riu=http%3a%2f%2fwww.wallpapergeeks.com%2fwp-content%2fuploads%2f2013%2f12%2fEiffel-Tower-Dusk-Paris-France-Wallpaper2.jpg&ehk=b6AYnqtyaymYIC04gA4F6spj0IWjnOlM7VEhvjsITV4%3d&risl=&pid=ImgRaw&r=0',
    },
    {
        place: 'Rome',
        location: 'Rome, Italy',
        url: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180301194244/Rome-Tile.jpg',
    },
    {
        place: 'Mexico City',
        location: 'La Ciudad de Mexico, Mexico',
        url: 'https://th.bing.com/th/id/OIP.-qKFeYbyPScYREs_ZNM41QHaEo?pid=ImgDet&rs=1',
    },
    {
        place: 'Bungee Jumping',
        location: 'Anywhere',
        url: 'https://th.bing.com/th/id/OIP.L8528ZiGAJkE1ACmNri_6gHaEK?pid=ImgDet&rs=1',
    },
];


export const getDefaultItems = () => {
    return [...tempRenderItems];
}