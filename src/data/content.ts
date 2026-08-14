export const testimonials = [
  { name: 'Natasha', image: '/assets/images/image05.jpg', quote: 'I needed the Camino to reconnect with my creative side and find the energy and courage to continue singing and performing—to believe in my unique personality and let it thrive.', link: 'https://www.instagram.com/p/C-xg2S2Os6q/' },
  { name: 'Azzura', image: '/assets/images/image06.jpg', quote: 'The freedom you experience on the Camino is priceless. You feel it every day, whether in the solitude of your walk or walking alongside a stranger.', link: 'https://www.instagram.com/p/C-xpgxnOXgD/' },
  { name: 'Tania', image: '/assets/images/image07.jpg', quote: 'The organisation and logistics were first rate. Ellie took care of everything—you didn’t have to worry about where you were sleeping or what you were eating.', link: 'https://www.instagram.com/p/C-xxDJiOdo2/' },
  { name: 'Samantha', image: '/assets/images/image08.jpg', quote: 'The Camino is more than just walking—it’s about overcoming life’s obstacles. I am unstoppable. I can do anything!', link: 'https://www.instagram.com/p/C-xy5cJObLb/' },
  { name: 'Shana', image: '/assets/images/image17.jpg', quote: 'Thank you Higa Power for helping me understand that sometimes it’s a few small changes and a change of mindset that are needed.', link: 'https://www.instagram.com/p/C-3bTYBOpmQ/' },
  { name: 'Nathalie', image: '/assets/images/image12.jpg', quote: 'This sponsorship brought my dream to reality. Every day was a different gift—I found peace, calm, clarity and a spiritual connection.', link: 'https://www.instagram.com/p/DCg09fbsG-U/' },
  { name: 'Eilidh', image: '/assets/images/image18.jpg', quote: 'Walking across northern Spain pulled me out of my head and into my body. Higa Power creates space for women to step toward connection, strength and presence.', link: 'https://www.instagram.com/p/DCgddFpscnw/' },
];

const galleryFiles = [
  ['05810d21', 'At Saint-Jean-Pied-de-Port'], ['f60b4914', 'Sammy and Marie'], ['3687aa94', 'A misty morning gathering'], ['1ad72a75', 'The 790 kilometre milestone'],
  ['50bf1972', 'An iconic Camino landmark'], ['3ed8fb03', 'The road ahead'], ['063fe842', 'Dinner together'], ['1c3f1244', 'A quiet Camino moment'],
  ['7a66311a', 'Finding joy along the way'], ['1d93f246', 'A milestone to remember'], ['498dccc2', 'The pilgrim path'], ['bd220d2e', 'Walking through the woods'],
  ['45a182de', 'A view beside the water'], ['dac0050b', 'At the gate'], ['0cebccb3', 'Hontanas'], ['cc40e3c5', 'Hola from the Camino'],
  ['996701b6', 'Walking the Camino'], ['9801f077', 'Azzura on the trail'], ['b6c70fc3', 'Kilometre zero'], ['8aeecf77', 'Done and dusted'],
  ['c1522e8e', 'At Santiago Cathedral'], ['7691e640', 'We made it to Santiago'],
] as const;

export const gallery = galleryFiles.map(([file, alt]) => ({
  thumb: `/assets/images/gallery01/${file}.jpg`,
  full: `/assets/images/gallery01/${file}_original.jpg`,
  alt,
}));
