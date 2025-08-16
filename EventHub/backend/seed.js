const mongoose = require('mongoose');
const Event = require('./models/Event');
require('dotenv').config({ path: './config.env' });

const sampleEvents = [
  {
    name: "Tech Conference 2025",
    description: "Join us for the biggest tech conference of the year featuring AI, blockchain, and cloud computing experts. Network with industry leaders and discover the latest innovations.",
    date: new Date('2025-03-15'),
    domain: "Tech"
  },
  {
    name: "Cultural Festival",
    description: "Experience the rich diversity of cultures through music, dance, art, and cuisine. A celebration of unity and heritage.",
    date: new Date('2025-04-20'),
    domain: "Cultural"
  },
  {
    name: "Sports Championship",
    description: "Witness the ultimate showdown of athletic excellence. Multiple sports categories with top athletes competing for glory.",
    date: new Date('2025-05-10'),
    domain: "Sports"
  },
  {
    name: "Business Networking Event",
    description: "Connect with entrepreneurs, investors, and business professionals. Share ideas and build meaningful partnerships.",
    date: new Date('2025-06-05'),
    domain: "Non-Tech"
  },
  {
    name: "AI Workshop Series",
    description: "Hands-on workshops on machine learning, neural networks, and practical AI applications. Perfect for beginners and experts alike.",
    date: new Date('2025-07-12'),
    domain: "Tech"
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing events
    await Event.deleteMany({});
    console.log('Cleared existing events');

    // Insert sample events
    const insertedEvents = await Event.insertMany(sampleEvents);
    console.log(`Inserted ${insertedEvents.length} sample events`);

    // Display inserted events
    insertedEvents.forEach(event => {
      console.log(`- ${event.name} (${event.domain}) on ${event.date.toDateString()}`);
    });

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
