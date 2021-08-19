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
        name: 'Paris',
        location: 'Paris, France',
        url: 'https://th.bing.com/th/id/R.2de4d139aa176401b60750b71c33be82?rik=w3hMuGFsR0RmcQ&riu=http%3a%2f%2fwww.wallpapergeeks.com%2fwp-content%2fuploads%2f2013%2f12%2fEiffel-Tower-Dusk-Paris-France-Wallpaper2.jpg&ehk=b6AYnqtyaymYIC04gA4F6spj0IWjnOlM7VEhvjsITV4%3d&risl=&pid=ImgRaw&r=0',
    },
    {
        name: 'Rome',
        location: 'Rome, Italy',
        url: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180301194244/Rome-Tile.jpg',
    },
    {
        name: 'Mexico City',
        location: 'La Ciudad de Mexico, Mexico',
        url: 'https://th.bing.com/th/id/OIP.-qKFeYbyPScYREs_ZNM41QHaEo?pid=ImgDet&rs=1',
    },
    {
        name: 'Bungee Jumping',
        location: 'Anywhere',
        url: 'https://th.bing.com/th/id/OIP.L8528ZiGAJkE1ACmNri_6gHaEK?pid=ImgDet&rs=1',
    },
    {
        name: 'Ski in the Swiss Alps',
        location: 'Switzerland',
        url: 'https://images.thestar.com/content/dam/thestar/life/travel/2013/01/17/europe_skiing_ski_the_swiss_alps_like_007/allalin_racer_valleysaasfee.jpg.size-custom-crop.1086x0.jpg',   
    },
    {
        name: 'Surf in the Maldives',
        location: 'Maldives',
        url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-DwTmAeg6R6s%2FVSYXbi39cmI%2FAAAAAAAAB3M%2FyEES1d-Uuyw%2Fs1600%2Frichardkotch_29-img_0395.jpg&f=1&nofb=1',   
    },
    {
        name: 'Visit Melbourne',
        location: 'Melbourne, Australia',
        url: 'https://www.travellingking.com/wp-content/uploads/2018/08/Melbourne-Cityscape-image-of-Melbourne-1000x667.jpg',   
    },
    {
        name: 'Cancun',
        location: 'Cancun, Mexico',
        url: 'https://www.gannett-cdn.com/-mm-/b9e5c5c7891056b8e4aad67512619ee83cfb479f/c=0-186-3843-2357/local/-/media/2018/06/15/USATODAY/USATODAY/636646787345137558-GettyImages-908388868.jpg?width=3200&height=1808&fit=crop&format=pjpg&auto=webp',   
    }
];


export const getDefaultItems = () => {
    return [...tempRenderItems];
}