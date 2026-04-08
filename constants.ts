import { Category, LiveStall, Workshop } from './types';

export const HAMPER_GALLERY_IMAGES: string[] = [
  '/hampers/hamper1.webp',
  '/hampers/hamper2.webp',
  '/hampers/hamper3.webp',
  '/hampers/hamper4.webp',
  '/hampers/hamper5.webp',
  '/hampers/hamper6.webp',
  '/hampers/hamper7.webp',
  '/hampers/hamper8.webp',
  '/hampers/hamper9.webp',
  '/hampers/hamper10.webp',
  '/hampers/hamper11.webp',
  '/hampers/hamper12.webp',
  '/hampers/hamper13.webp',
  '/hampers/hamper14.webp',
  '/hampers/hamper15.webp',
  '/hampers/hamper16.webp',
  '/hampers/hamper17.webp',
  '/hampers/hamper18.webp',
];

export const CORPORATE_ADULT_GALLERY_IMAGES: string[] = [
  '/Corporate-adults/corporate2.webp',
  '/Corporate-adults/corporate3.webp',
  '/Corporate-adults/corporate4.webp',
  '/Corporate-adults/corporate5.webp',
  '/Corporate-adults/corporate6.webp',
  '/Corporate-adults/corporate7.webp',
  '/Corporate-adults/corporate10.webp',
  '/Corporate-adults/corporate14.webp',
  '/Corporate-adults/corporate15.webp',
  '/Corporate-adults/corporate16.webp',
  '/Corporate-adults/corporate17.webp',
  '/Corporate-adults/corporate18.webp',
  '/Corporate-adults/corporate19.webp',
  '/Corporate-adults/corporate20.webp',
  '/Corporate-adults/corporate21.webp',
  '/Corporate-adults/corporate22.webp',
  '/Corporate-adults/corporate23.webp',
  '/Corporate-adults/corporate26.webp',
];

export const RETURN_GIFT_GALLERY_IMAGES: string[] = [
  '/return-gift/return1.webp',
  '/return-gift/return2.webp',
  '/return-gift/return3.webp',
  '/return-gift/return4.webp',
  '/return-gift/return6.webp',
  '/return-gift/return8.webp',
  '/return-gift/return9.webp',
  '/return-gift/return10.webp',
  '/return-gift/return11.webp',
  '/return-gift/return13.webp',
  '/return-gift/return14.webp',
  '/return-gift/return16.webp',
  '/return-gift/return18.webp',
  '/return-gift/return19.webp',
  '/return-gift/return21.webp',
  '/return-gift/return24.webp',
  '/return-gift/return26.webp',
  '/return-gift/return29.webp',
];

export const RESIN_GALLERY_IMAGES: string[] = [
  '/Resin-art/resin1.webp',
  '/Resin-art/resin2.webp',
  '/Resin-art/resin3.webp',
  '/Resin-art/resin5.webp',
  '/Resin-art/resin6.webp',
  '/Resin-art/resin7.webp',
  '/Resin-art/resin8.webp',
  '/Resin-art/resin10.webp',
  '/Resin-art/resin11.webp',
  '/Resin-art/resin12.webp',
  '/Resin-art/resin13.webp',
  '/Resin-art/resin14.webp',
  '/Resin-art/resin15.webp',
  '/Resin-art/resin16.webp',
  '/Resin-art/resin19.webp',
  '/Resin-art/resin20.webp',
  '/Resin-art/resin22.webp',
  '/Resin-art/resin25.webp',
  '/Resin-art/resin26.webp',
  '/Resin-art/resin28.webp',
  '/Resin-art/resin30.webp',
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'monogram-art',
    title: 'Monogram Art',
    description: `Bring creativity, colour, and personal expression together with our Monogram Decorating art station. In this engaging activity, every participant receives an MDF cutout of their initial and transforms it into a stunning decorative piece using paints, stones, crystals, pearls, and embellishments.

Guests explore textures, colours, and patterns as they layer their design onto the wooden base, turning a simple letter into a personalised work of art. The process is easy to follow, mess-controlled, and suitable for kids, teens, and adults, making it a versatile favourite for all kinds of events.

Whether it's a birthday party, school workshop, exhibition, festive celebration, or corporate event, this activity offers a perfect blend of creativity, relaxation, and accomplishment. And the best part? Everyone takes home a beautiful monogram decor piece that proudly reflects their style.

Creative. Personal. Decorative.
An artistic experience that turns initials into keepsakes.

Why Guests Love This Activity
Personalised MDF initial for every participant
Wide range of paints, stones, crystals, and pearls to decorate with
Easy, guided, and enjoyable for all age groups
Mess-free setup ideal for events and gatherings
A meaningful decor item to take home`,
    image: '/Kids-art/monogram.webp',
    categories: [Category.KIDS, Category.CORPORATE_ADULT, Category.RETURN_GIFTS]
  },
  {
    id: 'build-a-bear',
    title: 'Build-A-Bear Workshop',
    description: `Build-A-Bear Workshop for Kids (Up to 12 Years)

Let little hands create big cuddles! Our Build-A-Bear workshop for kids is a joyful, hands-on activity where children design their very own soft toy from start to finish.

Kids begin by choosing their favourite teddy bear or soft toy from our adorable collection. Next comes the fun part - stuffing the cotton, fluffing it up, and bringing their furry friend to life.

The creativity does not stop there. Children can customise their teddy bear with colourful patches, receive a personalised birth certificate, and even paint or decorate the teddy's tee. Every bear becomes one-of-a-kind, just like its creator.

Perfect for boys and girls up to 10 years, this DIY teddy bear making activity can also be customised to match party themes, events, or workshops.

Best part? Once the workshop ends, kids get to take their handmade teddy bear home - a cuddly keepsake filled with memories and pride.

Why Kids (and Parents) Love It
Hands-on creative activity for kids
Encourages imagination, fine motor skills and confidence
Ideal for birthday parties, kids workshops and events
Fully customisable Build-A-Bear experience
Safe, fun, and unforgettable!`,
    image: '/Kids-art/buildabear.webp',
    categories: [Category.KIDS, Category.RETURN_GIFTS]
  },
  {
    id: 'diy-sipper',
    title: 'Sipper Sticker Station',
    description: `Sipper Sticker Station - A Fun Customisation Activity for All Ages

Looking for a unique, engaging, and mess-free activity that delights both kids and adults at your event?

Our Sipper Sticker Station is an interactive DIY experience where guests can choose their own sipper or tumbler and personalise it using a wide variety of vibrant, themed stickers.

From kids' parties to corporate events, this station becomes an instant crowd favourite - creative, hands-on, and something guests get to take home as a personalised keepsake.

How It Works
Guests pick a sipper or tumbler of their choice.
Browse through our huge collection of fun, themed stickers.
Peel, paste, design, and customise your own sipper just the way you like it.
Walk away with a one-of-a-kind personalised sipper.
No paint. No glue. No mess. Just pure creativity and fun.

Why Everyone Loves the Sipper Sticker Station
Suitable for kids, teens, and adults
Encourages creativity and self-expression
Completely mess-free and safe
A perfect return gift or takeaway
Keeps guests engaged for long durations
Works beautifully at birthday parties, school events, exhibitions, weddings, corporate events, and family gatherings`,
    image: '/Kids-art/sipper.webp',
    categories: [Category.KIDS, Category.RETURN_GIFTS, Category.CORPORATE_ADULT]
  },
  {
    id: 'bag-painting',
    title: 'Fanny Pouch Patches Workshop',
    description: `Looking for a fun, hands-on activity that everyone can enjoy? Fanny Pouch Patches is an exciting, budget-friendly station where guests design their very own trendy fanny pouch.

Participants can pick from a variety of vibrant fanny bag colours and explore our wide range of easy press-on patches - from quirky icons and cute characters to funky symbols and stylish motifs. With simple Heat-and-Press application, guests of all ages can customise their pouch in minutes and take home a personalised accessory they'll actually use.

Perfect for kids, teens, and adults, this activity is engaging, creative, and mess-free, making it a great addition to parties, workshops, school events, and corporate gatherings.

Creative. Interactive. Personal.
A fun experience and a stylish takeaway - all in one!`,
    image: '/Kids-art/fannypouch.webp',
    categories: [Category.KIDS, Category.RETURN_GIFTS, Category.CORPORATE_ADULT]
  },
  {
    id: 'jacket-press',
    title: 'Jacket Printing Workshop',
    description: `Turn creativity into wearable fashion with our Jacket Printing and Painting activity station. Guests of all ages can choose their preferred denim jacket or hoodie, pick from our range of colourful, quirky press-on patches, and use fabric paints, stencils, or prints to design a one-of-a-kind masterpiece.

This hands-on, mess-controlled setup lets participants explore their artistic side while creating a personalised jacket they'll proudly wear. From playful designs to bold statements, every piece becomes a unique expression of style.

Perfect for birthday parties, school events, college fests, exhibitions, and corporate gatherings, this station offers an engaging experience and a valuable take-home gift that guests will cherish long after the event.

Interactive. Creative. Memorable.
Not just an activity - an experience you can wear.`,
    image: '/Kids-art/jacketprint.webp',
    categories: [Category.KIDS, Category.CORPORATE_ADULT]
  },
  {
    id: 'ocean-art',
    title: 'Ocean Art Workshop',
    description: `Ocean Art - Create Your Own Coastal Masterpiece

Step into a calming coastal world and build your own ocean landscape from scratch. Ocean Art is a hands-on, mixed-media art activity where guests transform an MDF base into a realistic seaside scene using acrylic colours, clay, shells, moss, and natural textures.

For adults and teens, we also offer a resin finish that creates a stunning, glassy water effect - just like real waves washing ashore.

This is not just painting. It is sculpting, layering, designing, and storytelling through textures inspired by the sea.

Why Everyone Loves Ocean Art
Immersive and calming coastal theme that sparks creativity
Mixed-media exploration with clay, shells, moss, and acrylics
Educational for kids through sensory play, fine motor skills, and imagination
Premium resin option for adults for a realistic ocean-water look
Take-home masterpiece ready to display as decor

Perfect For
Kids' creative workshops and birthday activities
Family art sessions
School events and hobby classes
Adult art experiences and resin workshops
Festive booths, exhibitions, and activity corners

Learning Meets Fun (Especially for Kids)
Ocean Art encourages sensory development through textures
Patience and focus through layering techniques
Creative thinking and design skills
Awareness of marine elements and coastal landscapes

It is art, craft, and learning - beautifully blended.

Let your guests feel the sea, shape the shore, and paint the waves - one texture at a time.`,
    image: '/Kids-art/oceanart.webp',
    categories: [Category.KIDS, Category.CORPORATE_ADULT]
  },
  {
    id: 'keychain',
    title: 'Keychain Workshop',
    description: `Add a touch of creativity to your event with our Keychain Making activity station. We bring beautifully crafted wooden initial cutouts for every guest, along with a delightful assortment of charms, hangings, pearls, tassels, and embellishments to design their own custom keychain.

Simple, hands-on, and mess-free, this activity lets guests of all ages create a personalised accessory they can use every day. Each keychain becomes a unique keepsake - thoughtful, fun to make, and practical to carry.

Perfect for parties, school events, workshops, exhibitions, and corporate gatherings, this station offers an engaging experience and a budget-friendly take-home gift your guests will love.

Creative. Personal. Useful.`,
    image: '/Kids-art/keychain.webp',
    categories: [Category.KIDS, Category.RETURN_GIFTS]
  },
  {
    id: 'decoden',
    title: 'Decoden Art Workshop',
    description: `Decoden Art (Fake Whipped Cream Art) - Pipe, Decorate, Dazzle!

Welcome to the world of Decoden Art, popularly loved as Fake Whipped Cream Art - a delightful, eye-catching craft where creativity literally gets piped onto your favourite accessories.

Using a special acrylic whipped-cream-like paste in multiple theme colours, guests decorate an item of their choice - be it a hairbrush, jewellery box, phone cover, and more. The fun begins as they pipe the "cream" in swirls, waves, and dollops, creating a dreamy textured base. Then comes the best part: choosing from our adorable collection of charms, glitters, pearls, and embellishments to bring their design to life.

This activity is incredibly engaging for kids, teens, and adults alike. It's hands-on, visually exciting, easy to do, and results in a stunning, personalised product guests can proudly take home as a return gift they'll actually use.

Perfect for birthday parties, school events, exhibitions, festive gatherings, and corporate workshops, Decoden Art adds colour, charm, and a whole lot of fun to any celebration.

Pipe it. Patch it. Personalise it. Take it home.

Why This Activity Is a Crowd Favourite
Unique whipped cream piping experience with colourful acrylic paste
Choice of base items like phone covers, hairbrushes, jewellery boxes, and more
Huge variety of cute charms, glitters, and pearls
Suitable and exciting for all age groups
A beautiful, usable return gift made by the guests themselves`,
    image: '/Kids-art/decoden.webp',
    categories: [Category.KIDS, Category.CORPORATE_ADULT]
  },
  {
    id: 'clay-nameplate',
    title: 'Clay Nameplate Workshop',
    description: `Turn a simple board into a personalized piece of art. Clay Nameplate Art is a joyful, hands-on activity where kids and adults design their very own nameplate on an MDF base using acrylic colours and bright, moldable clay.

From flowers and honeybees to fruits, leaves, and playful patterns, participants shape tiny clay elements, paint vibrant backgrounds, and finish their artwork with wooden name cutouts we provide. The result is a beautiful, customized nameplate they can proudly take home and display.

What Makes This Activity Special
Paint, mold, and decorate on a sturdy MDF base
Use colorful clay to create fun, raised 3D designs
Add wooden name cutouts for a personalized finish
Take-home artwork that becomes room or door decor
Suitable for kids, teens, and adults, with difficulty adjusted by age

Perfect For
Birthday parties and return gifts that are meaningful
School workshops and hobby classes
Family art sessions
Events, exhibitions, and creative corners
Adult DIY craft sessions for unique home nameplates

Learning Through Creativity (Great for Kids)
This activity helps children improve fine motor skills through clay molding
Explore colors, textures, and composition
Express creativity while making something personal
Build focus and patience in a fun way`,
    image: '/Kids-art/clay.webp',
    categories: [Category.KIDS, Category.ALL]
  },
];

export const LIVE_STALLS: LiveStall[] = [
  { id: '1', title: 'Cap Printing', category: 'Craft' },
  { id: '2', title: 'Tee Printing', category: 'Craft' },
  { id: '3', title: 'Jacket Printing', category: 'Craft' },
  { id: '4', title: 'Face Painting', category: 'Entertainment' },
  { id: '5', title: 'Tattoo Art', category: 'Entertainment' },
  { id: '6', title: 'Stone Art', category: 'Craft' },
  { id: '7', title: 'Live Magnet', category: 'Craft' },
  { id: '8', title: 'Bouncy Castle / Slide', category: 'Entertainment' },
  { id: '9', title: 'Magic Show', category: 'Entertainment' },
  { id: '10', title: 'Science Show', category: 'Entertainment' },
  { id: '11', title: 'Puppet Show', category: 'Entertainment' },
  { id: '12', title: 'Story Telling', category: 'Entertainment' },
  { id: '13', title: 'Book Stall', category: 'Food/Gift' },
  { id: '14', title: 'Return Gift Stall', category: 'Food/Gift' },
  { id: '15', title: 'Crocs Station', category: 'Craft' },
  { id: '16', title: 'Beads Station', category: 'Craft' },
];

export const CONTACT_INFO = {
  phone: '+91 9999386566',
  email: 'Artistrybysonam@gmail.com',
  address: 'Bhama Shah Marg, Model Town, New Delhi- 110009',
};
