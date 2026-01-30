export interface Category {
  id: string
  name: string
  icon: string
  description: string
  color: string
}

export interface Question {
  id: number
  question: string
  answers: string[]
  correctAnswer: string
}

export const categories: Category[] = [
  {
    id: "histoire",
    name: "Histoire",
    icon: "scroll",
    description: "Testez vos connaissances historiques",
    color: "#E67E22",
  },
  {
    id: "cinema",
    name: "Cinéma",
    icon: "clapperboard",
    description: "Le monde du 7ème art",
    color: "#9B59B6",
  },
  {
    id: "sport",
    name: "Sport",
    icon: "trophy",
    description: "Champions et compétitions",
    color: "#27AE60",
  },
  {
    id: "geographie",
    name: "Géographie",
    icon: "globe",
    description: "Explorez le monde",
    color: "#3498DB",
  },
  {
    id: "science",
    name: "Science",
    icon: "atom",
    description: "Découvertes et inventions",
    color: "#1ABC9C",
  },
  {
    id: "musique",
    name: "Musique",
    icon: "music",
    description: "Artistes et mélodies",
    color: "#E74C3C",
  },
]

export const questionsData: Record<string, Question[]> = {
  histoire: [
    {
      id: 1,
      question: "En quelle année a eu lieu la Révolution française ?",
      answers: ["1789", "1776", "1804", "1815", "1848", "1871", "1792", "1799", "1756", "1763"],
      correctAnswer: "1789",
    },
    {
      id: 2,
      question: "Qui était le premier empereur de Rome ?",
      answers: ["Auguste", "Jules César", "Néron", "Caligula", "Tibère", "Claude", "Trajan", "Hadrien", "Marc Aurèle", "Commode"],
      correctAnswer: "Auguste",
    },
    {
      id: 3,
      question: "Quelle civilisation a construit les pyramides de Gizeh ?",
      answers: ["Égyptienne", "Grecque", "Romaine", "Mésopotamienne", "Perse", "Phénicienne", "Babylonienne", "Assyrienne", "Sumérienne", "Hittite"],
      correctAnswer: "Égyptienne",
    },
    {
      id: 4,
      question: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
      answers: ["1492", "1498", "1500", "1487", "1485", "1503", "1510", "1475", "1520", "1480"],
      correctAnswer: "1492",
    },
    {
      id: 5,
      question: "Qui a peint la Joconde ?",
      answers: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Botticelli", "Titien", "Caravage", "Rembrandt", "Vermeer", "Dürer", "Rubens"],
      correctAnswer: "Léonard de Vinci",
    },
    {
      id: 6,
      question: "Quelle guerre a duré de 1914 à 1918 ?",
      answers: ["Première Guerre mondiale", "Seconde Guerre mondiale", "Guerre de Crimée", "Guerre franco-prussienne", "Guerre de Sécession", "Guerre de Cent Ans", "Guerre de Trente Ans", "Guerre des Boers", "Guerre russo-japonaise", "Guerre d'Indépendance"],
      correctAnswer: "Première Guerre mondiale",
    },
    {
      id: 7,
      question: "Quel roi de France était surnommé le Roi-Soleil ?",
      answers: ["Louis XIV", "Louis XIII", "Louis XV", "Louis XVI", "Henri IV", "François Ier", "Charles IX", "Philippe Auguste", "Saint Louis", "Charlemagne"],
      correctAnswer: "Louis XIV",
    },
    {
      id: 8,
      question: "En quelle année le mur de Berlin est-il tombé ?",
      answers: ["1989", "1991", "1985", "1987", "1990", "1988", "1992", "1986", "1993", "1984"],
      correctAnswer: "1989",
    },
    {
      id: 9,
      question: "Qui était le leader de l'Inde lors de son indépendance en 1947 ?",
      answers: ["Gandhi", "Nehru", "Jinnah", "Ambedkar", "Bose", "Patel", "Tagore", "Azad", "Tilak", "Gokhale"],
      correctAnswer: "Gandhi",
    },
    {
      id: 10,
      question: "Quelle bataille a marqué la fin de Napoléon ?",
      answers: ["Waterloo", "Austerlitz", "Trafalgar", "Iéna", "Borodino", "Leipzig", "Marengo", "Wagram", "Eylau", "Friedland"],
      correctAnswer: "Waterloo",
    },
  ],
  cinema: [
    {
      id: 1,
      question: "Qui a réalisé Titanic ?",
      answers: ["James Cameron", "Steven Spielberg", "Martin Scorsese", "Christopher Nolan", "Ridley Scott", "Peter Jackson", "Quentin Tarantino", "Tim Burton", "David Fincher", "Coen Brothers"],
      correctAnswer: "James Cameron",
    },
    {
      id: 2,
      question: "Quel film a remporté l'Oscar du meilleur film en 1994 ?",
      answers: ["Forrest Gump", "Pulp Fiction", "Le Roi Lion", "Shawshank Redemption", "Quatre mariages et un enterrement", "Quiz Show", "Speed", "True Lies", "Léon", "Entretien avec un vampire"],
      correctAnswer: "Forrest Gump",
    },
    {
      id: 3,
      question: "Qui joue le rôle de Jack dans Titanic ?",
      answers: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Matt Damon", "George Clooney", "Johnny Depp", "Keanu Reeves", "Nicolas Cage", "Will Smith", "Denzel Washington"],
      correctAnswer: "Leonardo DiCaprio",
    },
    {
      id: 4,
      question: "Dans quel film peut-on entendre « Je suis ton père » ?",
      answers: ["Star Wars: L'Empire contre-attaque", "Star Wars: Un nouvel espoir", "Star Wars: Le Retour du Jedi", "Star Wars: La Menace fantôme", "Star Wars: L'Attaque des clones", "Star Wars: La Revanche des Sith", "Star Wars: Le Réveil de la Force", "Star Wars: Les Derniers Jedi", "Star Wars: L'Ascension de Skywalker", "Rogue One"],
      correctAnswer: "Star Wars: L'Empire contre-attaque",
    },
    {
      id: 5,
      question: "Quel est le premier film d'animation de Pixar ?",
      answers: ["Toy Story", "1001 Pattes", "Monstres et Cie", "Le Monde de Nemo", "Les Indestructibles", "Cars", "Ratatouille", "WALL-E", "Là-haut", "Rebelle"],
      correctAnswer: "Toy Story",
    },
    {
      id: 6,
      question: "Qui a réalisé Inception ?",
      answers: ["Christopher Nolan", "Denis Villeneuve", "David Fincher", "Ridley Scott", "James Cameron", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino", "Tim Burton", "Peter Jackson"],
      correctAnswer: "Christopher Nolan",
    },
    {
      id: 7,
      question: "Quel acteur incarne James Bond dans Casino Royale (2006) ?",
      answers: ["Daniel Craig", "Pierce Brosnan", "Sean Connery", "Roger Moore", "Timothy Dalton", "George Lazenby", "David Niven", "Idris Elba", "Tom Hardy", "Henry Cavill"],
      correctAnswer: "Daniel Craig",
    },
    {
      id: 8,
      question: "Quel film détient le record du plus gros box-office mondial ?",
      answers: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: Le Réveil de la Force", "Avengers: Infinity War", "Jurassic World", "Le Roi Lion (2019)", "Les Avengers", "Furious 7", "Frozen II"],
      correctAnswer: "Avatar",
    },
    {
      id: 9,
      question: "Qui joue le Joker dans The Dark Knight ?",
      answers: ["Heath Ledger", "Joaquin Phoenix", "Jack Nicholson", "Jared Leto", "Mark Hamill", "Cameron Monaghan", "Cesar Romero", "Barry Keoghan", "Willem Dafoe", "Bill Skarsgård"],
      correctAnswer: "Heath Ledger",
    },
    {
      id: 10,
      question: "Quel studio a créé Shrek ?",
      answers: ["DreamWorks", "Pixar", "Disney", "Blue Sky", "Illumination", "Sony Animation", "Laika", "Aardman", "Studio Ghibli", "Warner Animation"],
      correctAnswer: "DreamWorks",
    },
  ],
  sport: [
    {
      id: 1,
      question: "Combien de joueurs composent une équipe de football ?",
      answers: ["11", "10", "12", "9", "8", "7", "13", "14", "6", "15"],
      correctAnswer: "11",
    },
    {
      id: 2,
      question: "Quel pays a remporté la Coupe du Monde 2018 ?",
      answers: ["France", "Croatie", "Belgique", "Angleterre", "Brésil", "Allemagne", "Argentine", "Espagne", "Portugal", "Uruguay"],
      correctAnswer: "France",
    },
    {
      id: 3,
      question: "Quel sport se joue à Wimbledon ?",
      answers: ["Tennis", "Cricket", "Golf", "Rugby", "Badminton", "Squash", "Hockey", "Polo", "Football", "Volleyball"],
      correctAnswer: "Tennis",
    },
    {
      id: 4,
      question: "Combien de sets faut-il gagner pour remporter un match de tennis masculin en Grand Chelem ?",
      answers: ["3", "2", "4", "5", "1", "6", "7", "8", "9", "10"],
      correctAnswer: "3",
    },
    {
      id: 5,
      question: "Quel nageur a remporté 23 médailles d'or olympiques ?",
      answers: ["Michael Phelps", "Mark Spitz", "Ian Thorpe", "Ryan Lochte", "Caeleb Dressel", "Matt Biondi", "Grant Hackett", "Aaron Peirsol", "Nathan Adrian", "Chad le Clos"],
      correctAnswer: "Michael Phelps",
    },
    {
      id: 6,
      question: "Dans quel sport utilise-t-on un volant ?",
      answers: ["Badminton", "Tennis", "Squash", "Volleyball", "Ping-pong", "Cricket", "Baseball", "Golf", "Hockey", "Polo"],
      correctAnswer: "Badminton",
    },
    {
      id: 7,
      question: "Quel footballeur a remporté le plus de Ballons d'Or ?",
      answers: ["Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Michel Platini", "Marco van Basten", "Zinedine Zidane", "Ronaldo", "Ronaldinho", "Kaká", "George Best"],
      correctAnswer: "Lionel Messi",
    },
    {
      id: 8,
      question: "Combien de temps dure un match de basketball NBA ?",
      answers: ["48 minutes", "40 minutes", "60 minutes", "36 minutes", "45 minutes", "50 minutes", "42 minutes", "54 minutes", "32 minutes", "56 minutes"],
      correctAnswer: "48 minutes",
    },
    {
      id: 9,
      question: "Quel pays accueillera les JO de 2024 ?",
      answers: ["France", "États-Unis", "Japon", "Australie", "Royaume-Uni", "Italie", "Espagne", "Allemagne", "Brésil", "Chine"],
      correctAnswer: "France",
    },
    {
      id: 10,
      question: "Quel sport pratique Tiger Woods ?",
      answers: ["Golf", "Tennis", "Basketball", "Baseball", "Football américain", "Hockey", "Cricket", "Rugby", "Boxe", "Natation"],
      correctAnswer: "Golf",
    },
  ],
  geographie: [
    {
      id: 1,
      question: "Quelle est la capitale de l'Australie ?",
      answers: ["Canberra", "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Darwin", "Hobart", "Auckland", "Wellington"],
      correctAnswer: "Canberra",
    },
    {
      id: 2,
      question: "Quel est le plus long fleuve du monde ?",
      answers: ["Le Nil", "L'Amazone", "Le Yangtsé", "Le Mississippi", "Le Danube", "Le Mékong", "Le Gange", "Le Congo", "Le Volga", "Le Rhin"],
      correctAnswer: "Le Nil",
    },
    {
      id: 3,
      question: "Quel pays a le plus grand nombre d'habitants ?",
      answers: ["Chine", "Inde", "États-Unis", "Indonésie", "Pakistan", "Brésil", "Nigeria", "Bangladesh", "Russie", "Mexique"],
      correctAnswer: "Chine",
    },
    {
      id: 4,
      question: "Quel est le plus petit pays du monde ?",
      answers: ["Vatican", "Monaco", "Saint-Marin", "Liechtenstein", "Malte", "Andorre", "Luxembourg", "Nauru", "Tuvalu", "Singapour"],
      correctAnswer: "Vatican",
    },
    {
      id: 5,
      question: "Sur quel continent se trouve l'Égypte ?",
      answers: ["Afrique", "Asie", "Europe", "Moyen-Orient", "Amérique", "Océanie", "Antarctique", "Arabie", "Méditerranée", "Levant"],
      correctAnswer: "Afrique",
    },
    {
      id: 6,
      question: "Quelle est la capitale du Japon ?",
      answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima", "Nagoya", "Sapporo", "Fukuoka", "Yokohama", "Kobe", "Nara"],
      correctAnswer: "Tokyo",
    },
    {
      id: 7,
      question: "Quel océan borde la côte ouest de l'Amérique ?",
      answers: ["Pacifique", "Atlantique", "Indien", "Arctique", "Antarctique", "Méditerranée", "Caraïbes", "Baltique", "Adriatique", "Mer Rouge"],
      correctAnswer: "Pacifique",
    },
    {
      id: 8,
      question: "Quelle est la plus haute montagne du monde ?",
      answers: ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu", "Cho Oyu", "Dhaulagiri", "Manaslu", "Nanga Parbat", "Annapurna"],
      correctAnswer: "Everest",
    },
    {
      id: 9,
      question: "Quel pays n'est pas en Europe ?",
      answers: ["Maroc", "Espagne", "Portugal", "Italie", "Grèce", "France", "Allemagne", "Pologne", "Suède", "Norvège"],
      correctAnswer: "Maroc",
    },
    {
      id: 10,
      question: "Quelle mer sépare l'Europe de l'Afrique ?",
      answers: ["Méditerranée", "Mer Rouge", "Mer Noire", "Mer Baltique", "Mer du Nord", "Mer Adriatique", "Mer Égée", "Mer Caspienne", "Mer d'Arabie", "Mer de Chine"],
      correctAnswer: "Méditerranée",
    },
  ],
  science: [
    {
      id: 1,
      question: "Quel est le symbole chimique de l'or ?",
      answers: ["Au", "Ag", "Fe", "Cu", "Pb", "Sn", "Zn", "Ni", "Pt", "Hg"],
      correctAnswer: "Au",
    },
    {
      id: 2,
      question: "Combien de planètes composent notre système solaire ?",
      answers: ["8", "9", "7", "10", "6", "11", "12", "5", "13", "14"],
      correctAnswer: "8",
    },
    {
      id: 3,
      question: "Quelle est la formule chimique de l'eau ?",
      answers: ["H2O", "CO2", "NaCl", "O2", "H2SO4", "CH4", "NH3", "C6H12O6", "HCl", "NaOH"],
      correctAnswer: "H2O",
    },
    {
      id: 4,
      question: "Qui a développé la théorie de la relativité ?",
      answers: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Max Planck", "Werner Heisenberg", "Stephen Hawking", "Richard Feynman", "Erwin Schrödinger", "Marie Curie", "Galileo Galilei"],
      correctAnswer: "Albert Einstein",
    },
    {
      id: 5,
      question: "Quel organe produit l'insuline ?",
      answers: ["Pancréas", "Foie", "Rein", "Estomac", "Intestin", "Rate", "Thyroïde", "Surrénales", "Hypophyse", "Thymus"],
      correctAnswer: "Pancréas",
    },
    {
      id: 6,
      question: "Quelle est la vitesse de la lumière ?",
      answers: ["300 000 km/s", "150 000 km/s", "500 000 km/s", "1 000 000 km/s", "200 000 km/s", "250 000 km/s", "350 000 km/s", "400 000 km/s", "100 000 km/s", "450 000 km/s"],
      correctAnswer: "300 000 km/s",
    },
    {
      id: 7,
      question: "Quel gaz est le plus abondant dans l'atmosphère terrestre ?",
      answers: ["Azote", "Oxygène", "Dioxyde de carbone", "Argon", "Hélium", "Néon", "Méthane", "Hydrogène", "Ozone", "Krypton"],
      correctAnswer: "Azote",
    },
    {
      id: 8,
      question: "Combien d'os compte le corps humain adulte ?",
      answers: ["206", "208", "204", "210", "200", "212", "198", "214", "196", "216"],
      correctAnswer: "206",
    },
    {
      id: 9,
      question: "Quelle planète est surnommée la planète rouge ?",
      answers: ["Mars", "Vénus", "Jupiter", "Saturne", "Mercure", "Neptune", "Uranus", "Pluton", "Terre", "Lune"],
      correctAnswer: "Mars",
    },
    {
      id: 10,
      question: "Qui a découvert la pénicilline ?",
      answers: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister", "Edward Jenner", "Jonas Salk", "Paul Ehrlich", "Rudolf Virchow", "Ignaz Semmelweis", "William Harvey"],
      correctAnswer: "Alexander Fleming",
    },
  ],
  musique: [
    {
      id: 1,
      question: "Qui a composé la Neuvième Symphonie ?",
      answers: ["Beethoven", "Mozart", "Bach", "Chopin", "Vivaldi", "Brahms", "Schubert", "Haydn", "Tchaikovsky", "Liszt"],
      correctAnswer: "Beethoven",
    },
    {
      id: 2,
      question: "Quel groupe a chanté Bohemian Rhapsody ?",
      answers: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones", "AC/DC", "Guns N' Roses", "Nirvana", "U2", "Coldplay"],
      correctAnswer: "Queen",
    },
    {
      id: 3,
      question: "De quel pays viennent les Beatles ?",
      answers: ["Angleterre", "États-Unis", "Irlande", "Écosse", "Australie", "Canada", "Pays de Galles", "Allemagne", "France", "Suède"],
      correctAnswer: "Angleterre",
    },
    {
      id: 4,
      question: "Quel instrument joue un pianiste ?",
      answers: ["Piano", "Guitare", "Violon", "Batterie", "Flûte", "Saxophone", "Trompette", "Harpe", "Orgue", "Accordéon"],
      correctAnswer: "Piano",
    },
    {
      id: 5,
      question: "Qui est surnommé le Roi de la Pop ?",
      answers: ["Michael Jackson", "Elvis Presley", "Prince", "Madonna", "David Bowie", "Freddie Mercury", "Elton John", "Stevie Wonder", "Whitney Houston", "Bruno Mars"],
      correctAnswer: "Michael Jackson",
    },
    {
      id: 6,
      question: "Combien de cordes a une guitare classique ?",
      answers: ["6", "4", "5", "7", "8", "12", "9", "10", "3", "11"],
      correctAnswer: "6",
    },
    {
      id: 7,
      question: "Quel artiste a chanté Thriller ?",
      answers: ["Michael Jackson", "Prince", "Madonna", "Whitney Houston", "Lionel Richie", "Stevie Wonder", "Diana Ross", "George Michael", "Tina Turner", "Janet Jackson"],
      correctAnswer: "Michael Jackson",
    },
    {
      id: 8,
      question: "Quel compositeur était sourd ?",
      answers: ["Beethoven", "Mozart", "Bach", "Chopin", "Vivaldi", "Brahms", "Schubert", "Haydn", "Handel", "Liszt"],
      correctAnswer: "Beethoven",
    },
    {
      id: 9,
      question: "Quel est le vrai nom de Bono ?",
      answers: ["Paul Hewson", "David Evans", "Adam Clayton", "Larry Mullen", "Brian Eno", "Daniel Lanois", "Steve Lillywhite", "Flood", "Chris Thomas", "Mark Ellis"],
      correctAnswer: "Paul Hewson",
    },
    {
      id: 10,
      question: "Quel groupe a chanté Stairway to Heaven ?",
      answers: ["Led Zeppelin", "Pink Floyd", "The Rolling Stones", "The Who", "Deep Purple", "Black Sabbath", "Aerosmith", "Queen", "AC/DC", "Guns N' Roses"],
      correctAnswer: "Led Zeppelin",
    },
  ],
}

export function getCategories(): Category[] {
  return categories
}

export function getQuestions(categoryId: string): Question[] {
  return questionsData[categoryId] || []
}
