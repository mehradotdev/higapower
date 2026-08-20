import type { Testimonial, GalleryItem, EventItem, JourneyStep } from './types';

export const testimonials: Testimonial[] = [
  {
    name: 'Natasha',
    image: '/assets/images/testimonial-natasha.jpg',
    quote: 'I needed the Camino to reconnect with my creative side and find the energy and courage to continue singing and performing—to believe in my unique personality and let it thrive.',
    link: 'https://www.instagram.com/p/C-xg2S2Os6q/',
  },
  {
    name: 'Azzura',
    image: '/assets/images/testimonial-azzura.jpg',
    quote: 'The freedom you experience on the Camino is priceless. You feel it every day, whether in the solitude of your walk or walking alongside a stranger.',
    link: 'https://www.instagram.com/p/C-xpgxnOXgD/',
  },
  {
    name: 'Tania',
    image: '/assets/images/testimonial-tania.jpg',
    quote: 'The organisation and logistics were first rate. Ellie took care of everything—you didn’t have to worry about where you were sleeping or what you were eating.',
    link: 'https://www.instagram.com/p/C-xxDJiOdo2/',
  },
  {
    name: 'Samantha',
    image: '/assets/images/testimonial-samantha.jpg',
    quote: 'The Camino is more than just walking—it’s about overcoming life’s obstacles. I am unstoppable. I can do anything!',
    link: 'https://www.instagram.com/p/C-xy5cJObLb/',
  },
  {
    name: 'Shana',
    image: '/assets/images/testimonial-shana.jpg',
    quote: 'Thank you Higa Power for helping me understand that sometimes it’s a few small changes and a change of mindset that are needed.',
    link: 'https://www.instagram.com/p/C-3bTYBOpmQ/',
  },
  {
    name: 'Nathalie',
    image: '/assets/images/testimonial-nathalie.jpg',
    quote: 'This sponsorship brought my dream to reality. Every day was a different gift—I found peace, calm, clarity and a spiritual connection.',
    link: 'https://www.instagram.com/p/DCg09fbsG-U/',
  },
  {
    name: 'Eilidh',
    image: '/assets/images/testimonial-eilidh.jpg',
    quote: 'Walking across northern Spain pulled me out of my head and into my body. Higa Power creates space for women to step toward connection, strength and presence.',
    link: 'https://www.instagram.com/p/DCgddFpscnw/',
  },
];

export const events: EventItem[] = [
  {
    title: 'Three Peaks Challenge UK',
    description: 'A fundraising climb across Scotland, England and Wales in support of future Higa Power pilgrims.',
    image: '/assets/images/three-peaks-challenge.jpg',
    date: 'September 2024',
    location: 'United Kingdom',
    status: 'Completed',
    link: 'https://www.gofundme.com/f/higa-power-three-peaks-challenge-uk/',
    isFeatured: true,
  },
  {
    title: 'Camino de Santiago Francés',
    description: 'Our sponsored pilgrimage across northern Spain—step by step, together.',
    image: '/assets/images/camino-frances.jpg',
    date: 'April 2024',
    location: 'Spain',
    status: 'Completed',
    isFeatured: false,
  },
];

export const journeySteps: JourneyStep[] = [
  {
    step: '01',
    title: 'Share your story',
    description: 'Tell us what you’ve overcome and what the Camino means to you in a short 300-word essay.',
  },
  {
    step: '02',
    title: 'Committee review',
    description: 'We look for genuine need, perseverance and a meaningful connection to the Camino’s purpose.',
  },
  {
    step: '03',
    title: 'Zoom conversation',
    description: 'Selected applicants meet our committee to talk about how the journey could be transformative.',
  },
];

export const gallery: GalleryItem[] = [
  {
    thumb: '/assets/images/gallery01/saint-jean-pied-de-port.jpg',
    full: '/assets/images/gallery01/saint-jean-pied-de-port_full.jpg',
    alt: 'At Saint-Jean-Pied-de-Port',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/sammy-and-marie.jpg',
    full: '/assets/images/gallery01/sammy-and-marie_full.jpg',
    alt: 'Sammy and Marie',
    type: 'image',
  },
  {
    thumb: '/assets/videos/camino-moments-poster.jpg',
    full: '/assets/videos/camino-moments-poster.jpg',
    videoSrc: '/assets/videos/camino-moments.mp4',
    alt: 'Moments on the Camino Trail',
    type: 'video',
  },
  {
    thumb: '/assets/images/gallery01/misty-morning-gathering.jpg',
    full: '/assets/images/gallery01/misty-morning-gathering_full.jpg',
    alt: 'A misty morning gathering',
    type: 'image',
  },
  {
    thumb: '/assets/images/camino-gateway.jpg',
    full: '/assets/images/camino-gateway.jpg',
    alt: 'The gateway on the Camino Francés',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/790km-milestone.jpg',
    full: '/assets/images/gallery01/790km-milestone_full.jpg',
    alt: 'The 790 kilometre milestone',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/iconic-camino-landmark.jpg',
    full: '/assets/images/gallery01/iconic-camino-landmark_full.jpg',
    alt: 'An iconic Camino landmark',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/walking-step-by-step.gif',
    full: '/assets/images/gallery01/walking-step-by-step_full.gif',
    alt: 'Walking step by step (Animated)',
    type: 'gif',
  },
  {
    thumb: '/assets/images/gallery01/the-road-ahead.jpg',
    full: '/assets/images/gallery01/the-road-ahead_full.jpg',
    alt: 'The road ahead',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/dinner-together.jpg',
    full: '/assets/images/gallery01/dinner-together_full.jpg',
    alt: 'Dinner together',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/quiet-camino-moment.jpg',
    full: '/assets/images/gallery01/quiet-camino-moment_full.jpg',
    alt: 'A quiet Camino moment',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/joy-along-the-way.jpg',
    full: '/assets/images/gallery01/joy-along-the-way_full.jpg',
    alt: 'Finding joy along the way',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/reaching-new-heights.gif',
    full: '/assets/images/gallery01/reaching-new-heights_full.gif',
    alt: 'Reaching new heights (Animated)',
    type: 'gif',
  },
  {
    thumb: '/assets/images/gallery01/milestone-to-remember.jpg',
    full: '/assets/images/gallery01/milestone-to-remember_full.jpg',
    alt: 'A milestone to remember',
    type: 'image',
  },
  {
    thumb: '/assets/images/camino-sisterhood.jpg',
    full: '/assets/images/camino-sisterhood.jpg',
    alt: 'Sisterhood on the trail',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/the-pilgrim-path.jpg',
    full: '/assets/images/gallery01/the-pilgrim-path_full.jpg',
    alt: 'The pilgrim path',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/walking-through-woods.jpg',
    full: '/assets/images/gallery01/walking-through-woods_full.jpg',
    alt: 'Walking through the woods',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/view-beside-water.jpg',
    full: '/assets/images/gallery01/view-beside-water_full.jpg',
    alt: 'A view beside the water',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/at-the-gate.jpg',
    full: '/assets/images/gallery01/at-the-gate_full.jpg',
    alt: 'At the gate',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/hontanas.jpg',
    full: '/assets/images/gallery01/hontanas_full.jpg',
    alt: 'Hontanas',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/hola-from-the-camino.jpg',
    full: '/assets/images/gallery01/hola-from-the-camino_full.jpg',
    alt: 'Hola from the Camino',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/walking-the-camino.jpg',
    full: '/assets/images/gallery01/walking-the-camino_full.jpg',
    alt: 'Walking the Camino',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/azzura-on-the-trail.jpg',
    full: '/assets/images/gallery01/azzura-on-the-trail_full.jpg',
    alt: 'Azzura on the trail',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/kilometre-zero.jpg',
    full: '/assets/images/gallery01/kilometre-zero_full.jpg',
    alt: 'Kilometre zero',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/done-and-dusted.jpg',
    full: '/assets/images/gallery01/done-and-dusted_full.jpg',
    alt: 'Done and dusted',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/at-santiago-cathedral.jpg',
    full: '/assets/images/gallery01/at-santiago-cathedral_full.jpg',
    alt: 'At Santiago Cathedral',
    type: 'image',
  },
  {
    thumb: '/assets/images/gallery01/we-made-it-to-santiago.jpg',
    full: '/assets/images/gallery01/we-made-it-to-santiago_full.jpg',
    alt: 'We made it to Santiago',
    type: 'image',
  },
];
