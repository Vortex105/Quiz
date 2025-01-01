const localQuestions = [
    {
      question: "What is the largest planet in our solar system?",
      answers: [
        { text: "Saturn", correct: false },
        { text: "Uranus", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Neptune", correct: false },
      ],
    },
    {
      question: "Who is the founder of Microsoft?",
      answers: [
        { text: "Bill Gates", correct: true },
        { text: "Steve Jobs", correct: false },
        { text: "Mark Zuckerberg", correct: false },
        { text: "Larry Ellison", correct: false },
      ],
    },
    {
      question: "Which artist painted the famous artwork 'The Starry Night'?",
      answers: [
        { text: "Pablo Picasso", correct: false },
        { text: "Claude Monet", correct: false },
        { text: "Johannes Vermeer", correct: false },
        { text: "Vincent van Gogh", correct: true },
      ],
    },
    {
      question: "What is the capital of ancient Egypt?",
      answers: [
        { text: "Thebes", correct: true },
        { text: "Alexandria", correct: false },
        { text: "Cairo", correct: false },
        { text: "Giza", correct: false },
      ],
    },
    {
      question: "What is the value of pi (π) to two decimal places?",
      answers: [
        { text: "3.15", correct: false },
        { text: "3.13", correct: false },
        { text: "3.14", correct: true },
        { text: "3.12", correct: false },
      ],
    },
    {
      question: "Who is the author of the famous novel 'To Kill a Mockingbird'?",
      answers: [
        { text: "F. Scott Fitzgerald", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "Harper Lee", correct: true },
        { text: "J.K. Rowling", correct: false },
      ],
    },
    {
      question: "What is the largest mammal on Earth?",
      answers: [
        { text: "Blue whale", correct: true },
        { text: "Fin whale", correct: false },
        { text: "Humpback whale", correct: false },
        { text: "Sperm whale", correct: false },
      ],
    },
    {
      question: "Who is the founder of Facebook?",
      answers: [
        { text: "Bill Gates", correct: false },
        { text: "Mark Zuckerberg", correct: true },
        { text: "Steve Jobs", correct: false },
        { text: "Larry Ellison", correct: false },
      ],
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Ag", correct: false },
        { text: "Hg", correct: false },
        { text: "Pb", correct: false },
        { text: "Au", correct: true },
      ],
    },
    {
      question: "Who is the author of the famous novel '1984'?",
      answers: [
        { text: "Aldous Huxley", correct: false },
        { text: "George Orwell", correct: true },
        { text: "Ray Bradbury", correct: false },
        { text: "Isaac Asimov", correct: false },
      ],
    },
    {
      question: "What is the largest living species of lizard?",
      answers: [
        { text: "Saltwater crocodile", correct: false },
        { text: "Black mamba", correct: false },
        { text: "African elephant", correct: false },
        { text: "Komodo dragon", correct: true },
      ],
    },
    {
      question: "Who is the founder of Apple?",
      answers: [
        { text: "Bill Gates", correct: false },
        { text: "Steve Jobs", correct: true },
        { text: "Mark Zuckerberg", correct: false },
        { text: "Larry Ellison", correct: false },
      ],
    },
    {
      question: "What is the chemical symbol for silver?",
      answers: [
        { text: "Au", correct: false },
        { text: "Hg", correct: false },
        { text: "Ag", correct: true },
        { text: "Pb", correct: false },
      ],
    },
    {
      question: "Who is the author of the famous novel 'Pride and Prejudice'?",
      answers: [
        { text: "Jane Austen", correct: true},
        { text: "Charles Dickens", correct: false },
        { text: "Emily Brontë", correct: false },
        { text: "Mary Shelley", correct: false },
      ],
    },
    {
    question: "What is the process by which plants convert sunlight into energy?",
    answers: [
        { text: "Respiration", correct: false },
        { text: "Photosynthesis", correct: true },
        { text: "Decomposition", correct: false },
        { text: "Fermentation", correct: false },
      ],
    },
    {
    question: "Who is the founder of the social media platform Twitter?",
    answers: [
        { text: "Mark Zuckerberg", correct: false },
        { text: "Evan Williams", correct: false },
        { text: "Biz Stone", correct: false },
        { text: "Jack Dorsey", correct: true },
      ],
    },
    {
    question: "What is the largest city in Scandinavia?",
    answers: [
        { text: "Stockholm", correct: true },
        { text: "Copenhagen", correct: false },
        { text: "Oslo", correct: false },
        { text: "Helsinki", correct: false },
      ],
    },
    {
    question: "Who is the author of the famous play 'Romeo and Juliet'?",
    answers: [
        { text: "Christopher Marlowe", correct: false },
        { text: "Ben Jonson", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "John Webster", correct: false },
      ],
    },
    {
    question: "What is the chemical symbol for copper?",
    answers: [
        { text: "Cu", correct: true },
        { text: "Ag", correct: false },
        { text: "Au", correct: false },
        { text: "Hg", correct: false },
      ],
    },
    {
    question: "Who is the founder of the technology company Amazon?",
    answers: [
        { text: "Jeff Bezos", correct: true },
        { text: "Bill Gates", correct: false },
        { text: "Mark Zuckerberg", correct: false },
        { text: "Larry Ellison", correct: false },
      ],
    },
    {
    question: "What is the largest desert in the world?",
    answers: [
        { text: "Arctic Desert", correct: false },
        { text: "Sahara Desert", correct: false },
        { text: "Antarctic Desert", correct: true },
        { text: "Gobi Desert", correct: false },
      ],
    },
    {
    question: "Who is the author of the famous novel 'The Great Gatsby'?",
    answers: [
        { text: "Ernest Hemingway", correct: false },
        { text: "William Faulkner", correct: false },
        { text: "F. Scott Fitzgerald", correct: true },
        { text: "John Steinbeck", correct: false },
      ],
    },
    {
    question: "What is the process by which water moves through a plant?",
    answers: [
        { text: "Respiration", correct: false },
        { text: "Photosynthesis", correct: false },
        { text: "Transpiration", correct: true },
        { text: "Evaporation", correct: false },
      ],
    },
  ]


const leaderBoardData = [
  {name:"Mark", score: 4},
  {name:"Jinyi Cheng", score: 9},
  {name:"Mike", score: 5},
  {name:"Smith Carol", score: 3},
  {name:"Amanda Scott", score: 6},
  {name:"Li Chang", score: 7},
  {name:"John", score: 2},
  {name:"David James", score: 10},
  {name:"Joe Davidson", score: 9},
]