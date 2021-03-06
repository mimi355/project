
const bcrypt=require("bcryptjs");

const data = {
    users: [
        {
          name: 'julien',
          email: 'julien@yahoo.com',
          password: bcrypt.hashSync('12345678', 10),
          role: true,
        },
        {
          name: 'farah',
          email: 'farah@gmail.com',
          password: bcrypt.hashSync('1234567', 8),
          role: false,
        },
      ],
    products:[
        {
            name:" Zarra Blue Dress",
            category:"clothes",
            image:"./images/image1.jpg",
            price:100,
            rating:4,
            stock:3,
            description:"Off the shoulder dresses are all the rage this season! Show off your amazing fashion sense with this dress that features an elastic off the shoulder neckline, a short sleeve, a slim fitting bodice and a super cute skater skirt with a hi low hem. Burgundy All The Rage Skater Dress is gorgeous elegant for you next social activity."
        },
        {
            
            name:"Dior Blue Dark Jacket",
            category:"clothes",
            image:"./images/image2.jpg",
            price:60,
            rating:3.5,
            stock:4,
            description:"A down puffer jacket made from technical jacquard in black with a tonal Dior Oblique print. Fastening with a double zip, it is finished with a ‘Dior’ .."
        },
        {
           
            name:"Sweater",
            category:"clothes",
            image:"./images/image3.jpg",
            price:40,
            rating:3,
            stock:0,
            description:"Luxurious 100% cashmere crew-neck sweater with a lofty knit for daily wear"
        },
        {
           
            name:"Muss Beauty",
            category:"makeup",
            image:"./images/image4.jpg",
            price:120,
            rating:4.5,
            stock:10,
            description:"Bronx Colors foundation is a unifying fluid foundation that gives a beautiful luminous, natural and even complexion. Its veil texture camouflages all imperfections for beautiful, flawless skin. "
        },
        {
          
            name:"Lipstick",
            category:"makeup",
            image:"./images/image5.jpg",
            price:80,
            rating:5,
            stock:8,
            description:"An ideal match: a matte lipstick and a texture as light as a feather on the lips simultaneously."
        },
        {
           
            name:"Guerlin Make Complexion",
            category:"makeup",
            image:"./images/image6.jpg",
            price:200,
            rating:5,
            stock:20,
            description:"A foundation with 97% natural ingredients, with a natural and radiant finish, held 16 hours. The complexion is perfect, luminous, and fresh. The texture is comfortable and melting"
        },
        {
            
            name:"Argan Oil",
            category:"makeup",
            image:"./images/image9.jpg",
            price:180,
            rating:4,
            stock:5,
            description:"The Argan Oil raw material is produced by women of Moroccan craftsmanship of sustainable cooperation, who for centuries have used Argan oil to keep hair hydrated and protected from daily aggressions."
        },
        {
         
            name:"Magimix Cook Expert",
            category:"home appliance",
            image:"./images/image11.jpg",
            price:600,
            rating:5,
            stock:3,
            description:"Cooks, cuts, mixes, chops… to perfection! Successful everything from starter to dessert! Multifunctional and compact, the Cook Expert food processor by Magimix is ideal for novices in the kitchen as well as for experts."
        },
        {
            
            name:"Coffee Maker",
            category:"Home appliance",
            image:"./images/image15.jpg",
            price:300,
            rating:4,
            stock:9,
            description:"A concentrate of Nespresso technology in a minimum volume! A compact machine that will fit perfectly into any environment. Its width is 11 cm! But don't be fooled by its small size! It will seduce you with its innovations and performance."
        },
        {
            
            name:"Kitchenaid Artisan Premium",
            category:"Home appliance",
            image:"./images/image14.jpg",
            price:800,
            rating:5,
            stock:2,
            description:"The KitchenAid 5KSM185PSEPP Food Processor, stable and resistant, with exemplary reliability! New rounded tilting head design, iconic, timeless and elegant, with metal control knobs. The direct-drive motor provides quiet operation and outstanding performance."
        },
        {
           
            name:"M&M",
            category:"foods",
            image:"./images/image17.jpg",
            price:2,
            rating:4,
            stock:20,
            description:" Delicious chocolat for kids "
        },
        {
            
            name:"Fruits & Vegetables",
            category:"foods",
            image:"./images/image18.png",
            price:30,
            rating:4,
            stock:30,
            description:"Special offer for our delicous fruit of the day"
        },
        {
            
            name:"Juice",
            category:"foods",
            image:"./images/image19.jpg",
            price:4,
            rating:4,
            stock:50,
            description:"Fresh natural juice"
        },

    ]
}
module.exports =data;