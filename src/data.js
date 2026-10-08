import hero from './assets/hero.jpg'
import g1 from './assets/gallery1.jpg'
import g2 from './assets/gallery2.jpg'
import g3 from './assets/gallery3.jpg'
import main from './assets/main.jpg'
import drinks from './assets/drinks.jpg'
export const images = { hero, g1, g2, g3, main, drinks, about: drinks }
export const nav = [['Home','/'],['About','/about'],['Menu','/menu'],['Gallery','/gallery'],['Events','/events'],['Contact','/contact']]
export const features = [
  { icon:'fork', title:'Delicious Cuisine', text:'Fresh ingredients, bold flavors.' },
  { icon:'cocktail', title:'Signature Cocktails', text:'Expertly crafted, always fresh.' },
  { icon:'users', title:'Cozy Atmosphere', text:'Relax, connect, enjoy.' },
  { icon:'gem', title:'Perfect for Every Occasion', text:'Date nights, birthdays, hangouts & more.' },
]
export const menuCards = [
  { title:'Main Courses', text:'Grilled, fried, and full of flavor.', img:main },
  { title:'Appetizers', text:'Small bites, big satisfaction.', img:null },
  { title:'Drinks & Cocktails', text:'Sip, savor, repeat.', img:drinks },
  { title:'Desserts', text:'The perfect sweet ending.', img:null },
]
export const fullMenu = [
  { id:'main', title:'Main Courses', note:'Grilled, fried, and full of flavor.', items:[
    ['Grilled Ribeye Steak','Char-grilled ribeye, garlic butter, roasted potatoes, seasonal greens','₦18,500'],
    ['Peppered Chicken & Rice','Smoky peppered chicken, jollof rice, fried plantain','₦9,500'],
    ['Pan-Seared Salmon','Lemon cream sauce, buttered vegetables, mashed potatoes','₦16,000'],
    ['Catfish Pepper Soup Platter','Fresh catfish in spiced broth with yam chunks','₦8,500'],
    ['Lounge Signature Burger','Double beef patty, cheddar, caramelised onion, fries','₦10,500']]},
  { id:'appetizers', title:'Appetizers', note:'Small bites, big satisfaction.', items:[
    ['Crispy Spring Rolls','Vegetable and chicken rolls with sweet chili dip','₦4,500'],
    ['Suya Skewers','Spiced beef skewers with onions and yaji','₦5,000'],
    ['Peppered Snail','Tender snail in rich pepper sauce','₦6,500'],
    ['Chicken Wings','Choice of honey-glaze, BBQ or hot','₦5,500']]},
  { id:'drinks', title:'Drinks & Cocktails', note:'Sip, savor, repeat.', items:[
    ['Velvet Sunset','Rum, mango, passion fruit, lime','₦6,000'],
    ['Crimson Martini','Vodka, cranberry, triple sec, orange twist','₦6,500'],
    ['Old Fashioned','Bourbon, bitters, demerara, orange peel','₦7,000'],
    ['Zobo Mojito','Hibiscus, mint, white rum, soda','₦5,500'],
    ['Fresh Mocktail Selection','Ask your server for today\'s blends','₦3,500']]},
  { id:'desserts', title:'Desserts', note:'The perfect sweet ending.', items:[
    ['Chocolate Fudge Cake','Warm fudge cake, berries, vanilla ice cream','₦5,500'],
    ['Cheesecake Slice','Classic baked cheesecake, berry compote','₦5,000'],
    ['Caramel Crème Brûlée','Vanilla custard, burnt sugar crust','₦5,500']]},
]
export const events = [
  { day:'Wed', title:'Ladies Night', text:'Cocktail specials, great music and a night made for your girls.' },
  { day:'Fri', title:'Live DJ Night', text:'Top DJs, ambient lights and a dance floor that never sleeps.' },
  { day:'Sat', title:'Game & Chill', text:'Big screens for the match, grills on the table, cold drinks on tap.' },
  { day:'Any', title:'Private Celebrations', text:'Birthdays, proposals, corporate hangouts. We handle the details.' },
]
export const gallery = [
  { src:images.hero, cls:'wide' }, { src:images.g3 }, { src:images.drinks },
  { src:images.g2 }, { src:images.main }, { src:images.g1, cls:'wide' },
]
export const reviews = [
  { name:'Sarah M.', city:'Lagos', text:'The food, drinks and ambiance are absolutely amazing. I\'ll definitely be back!' },
  { name:'James T.', city:'Port Harcourt', text:'Great service, beautiful interior and the best cocktails in town!' },
  { name:'Chinwe A.', city:'Abuja', text:'The perfect spot for a night out. Highly recommended!' },
]
export const contact = { address:['128, Adekunle Fajuyi Way','Port Harcourt, Rivers State'], whatsapp:'+234 801 234 5678', email:'hello@thevelvetlounge.com',
  hours:[['Mon – Thu','12:00 PM – 11:00 PM'],['Fri – Sat','12:00 PM – 2:00 AM'],['Sunday','1:00 PM – 11:00 PM']] }

export const waLink = (text='') => `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, '')}${text ? '?text=' + encodeURIComponent(text) : ''}`
