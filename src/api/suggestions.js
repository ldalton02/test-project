

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
  export default function handler(req, res) {
    res.status(200).send(suggestions);
}