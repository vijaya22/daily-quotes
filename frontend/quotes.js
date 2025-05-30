const quotes = [
    { "text": "The best way to get started is to quit talking and begin doing.", "author": "Walt Disney" },
    { "text": "Don’t let yesterday take up too much of today.", "author": "Will Rogers" },
    { "text": "It's not whether you get knocked down, it's whether you get up.", "author": "Vince Lombardi" },
    { "text": "If you are working on something exciting, it will keep you motivated.", "author": "Steve Jobs" },
    { "text": "Success is not in what you have, but who you are.", "author": "Bo Bennett" },
    { "text": "The harder you work for something, the greater you'll feel when you achieve it.", "author": "Unknown" },
    { "text": "Dream bigger. Do bigger.", "author": "Unknown" },
    { "text": "Don’t watch the clock; do what it does. Keep going.", "author": "Sam Levenson" },
    { "text": "Great things never come from comfort zones.", "author": "Unknown" },
    { "text": "Push yourself, because no one else is going to do it for you.", "author": "Unknown" },
    { "text": "Success doesn’t just find you. You have to go out and get it.", "author": "Unknown" },
    { "text": "The harder you work, the luckier you get.", "author": "Gary Player" },
    { "text": "Don’t wait for opportunity. Create it.", "author": "George Bernard Shaw" },
    { "text": "Sometimes later becomes never. Do it now.", "author": "Unknown" },
    { "text": "Great minds discuss ideas; average minds discuss events; small minds discuss people.", "author": "Eleanor Roosevelt" },
    { "text": "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", "author": "Roy T. Bennett" },
    { "text": "Success is what comes after you stop making excuses.", "author": "Luis Galarza" },
    { "text": "Wake up with determination. Go to bed with satisfaction.", "author": "Unknown" },
    { "text": "Do something today that your future self will thank you for.", "author": "Sean Patrick Flanery" },
    { "text": "Little things make big days.", "author": "Isabel Marant" },
    { "text": "It’s going to be hard, but hard does not mean impossible.", "author": "Art Williams" },
    { "text": "Don’t limit your challenges. Challenge your limits.", "author": "Unknown" },
    { "text": "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", "author": "Unknown" },
    { "text": "The key to success is to focus on goals, not obstacles.", "author": "Unknown" },
    { "text": "Believe you can and you’re halfway there.", "author": "Theodore Roosevelt" },
    { "text": "Start where you are. Use what you have. Do what you can.", "author": "Arthur Ashe" },
    { "text": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "author": "Winston Churchill" },
    { "text": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis" },
    { "text": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt" },
    { "text": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson" },
    { "text": "Quality means doing it right when no one is looking.", "author": "Henry Ford" },
    { "text": "What you get by achieving your goals is not as important as what you become by achieving your goals.", "author": "Zig Ziglar" },
    { "text": "Act as if what you do makes a difference. It does.", "author": "William James" },
    { "text": "Limit your 'always' and your 'nevers'.", "author": "Amy Poehler" },
    { "text": "Try to be a rainbow in someone else’s cloud.", "author": "Maya Angelou" },
    { "text": "You do not find the happy life. You make it.", "author": "Camilla Eyring Kimball" },
    { "text": "Sometimes you will never know the value of a moment until it becomes a memory.", "author": "Dr. Seuss" },
    { "text": "Happiness often sneaks in through a door you didn’t know you left open.", "author": "John Barrymore" },
    { "text": "Stay close to anything that makes you glad you are alive.", "author": "Hafez" },
    { "text": "You get what you give.", "author": "Jennifer Lopez" },
    { "text": "We generate fears while we sit. We overcome them by action.", "author": "Dr. Henry Link" },
    { "text": "Whether you think you can or think you can’t, you’re right.", "author": "Henry Ford" },
    { "text": "Security is mostly a superstition. Life is either a daring adventure or nothing.", "author": "Helen Keller" },
    { "text": "Creativity is intelligence having fun.", "author": "Albert Einstein" },
    { "text": "Do what you can with all you have, wherever you are.", "author": "Theodore Roosevelt" },
    { "text": "Develop an ‘Attitude of Gratitude’. Say thank you to everyone you meet for everything they do for you.", "author": "Brian Tracy" },
    { "text": "You are never too old to set another goal or to dream a new dream.", "author": "Les Brown" },
    { "text": "To see what is right and not do it is a lack of courage.", "author": "Confucius" },
    { "text": "Reading is to the mind, as exercise is to the body.", "author": "Brian Tracy" },
    { "text": "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.", "author": "Brian Tracy" },
    { "text": "Goals are dreams with deadlines.", "author": "Diana Scharf" },
    { "text": "You don’t need to see the whole staircase, just take the first step.", "author": "Martin Luther King Jr." },
    { "text": "Make each day your masterpiece.", "author": "John Wooden" },
    { "text": "Don’t count the days, make the days count.", "author": "Muhammad Ali" },
    { "text": "The secret of getting ahead is getting started.", "author": "Mark Twain" },
    { "text": "If you can dream it, you can do it.", "author": "Walt Disney" },
    { "text": "If opportunity doesn’t knock, build a door.", "author": "Milton Berle" },
    { "text": "I never dreamed about success. I worked for it.", "author": "Estée Lauder" },
    { "text": "The only place where success comes before work is in the dictionary.", "author": "Vidal Sassoon" },
    { "text": "Don’t be afraid to give up the good to go for the great.", "author": "John D. Rockefeller" },
    { "text": "I find that the harder I work, the more luck I seem to have.", "author": "Thomas Jefferson" },
    { "text": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau" },
    { "text": "Opportunities don’t happen. You create them.", "author": "Chris Grosser" },
    { "text": "Try not to become a man of success. Rather become a man of value.", "author": "Albert Einstein" },
    { "text": "I am not a product of my circumstances. I am a product of my decisions.", "author": "Stephen Covey" },
    { "text": "Winning isn’t everything, but wanting to win is.", "author": "Vince Lombardi" },
    { "text": "Either you run the day or the day runs you.", "author": "Jim Rohn" },
    { "text": "The best revenge is massive success.", "author": "Frank Sinatra" },
    { "text": "If you’re going through hell, keep going.", "author": "Winston Churchill" },
    { "text": "Don’t raise your voice, improve your argument.", "author": "Desmond Tutu" },
    { "text": "If you want to achieve greatness stop asking for permission.", "author": "Anonymous" },
    { "text": "Things work out best for those who make the best of how things work out.", "author": "John Wooden" },
    { "text": "To live a creative life, we must lose our fear of being wrong.", "author": "Joseph Chilton Pearce" },
    { "text": "Trust because you are willing to accept the risk, not because it’s safe or certain.", "author": "Anonymous" },
    { "text": "Learn as if you will live forever, live like you will die tomorrow.", "author": "Mahatma Gandhi" },
    { "text": "If you do what you always did, you will get what you always got.", "author": "Anonymous" },
    { "text": "The meaning of life is to find your gift. The purpose of life is to give it away.", "author": "Pablo Picasso" },
    { "text": "If you want to lift yourself up, lift up someone else.", "author": "Booker T. Washington" },
    { "text": "Success is walking from failure to failure with no loss of enthusiasm.", "author": "Winston Churchill" },
    { "text": "It always seems impossible until it’s done.", "author": "Nelson Mandela" },
    { "text": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt" },
    { "text": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein" },
    { "text": "Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible.", "author": "Francis of Assisi" },
    { "text": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", "author": "Aristotle" },
    { "text": "Keep your face always toward the sunshine—and shadows will fall behind you.", "author": "Walt Whitman" },
    { "text": "Success isn’t about how much money you make, it’s about the difference you make in people’s lives.", "author": "Michelle Obama" },
    { "text": "If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward.", "author": "Martin Luther King Jr." }
  ];
  