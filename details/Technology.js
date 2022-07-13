const get =(res, req)=>{
    res.send([
       { "id" : "28",
        "title": "Australia probes retail giants Bunnings and Kmart over customer 'faceprints'",
        "Image": "Australia probes retail giants Bunnings and Kmart over customer 'faceprints'",
        "category": "Technology",
        "description" : "Hardware firm Bunnings and department store Kmart collect customers faceprints in some locations."

        
    },
  
        { "id" : "29",
         "title": "Nothing phone (1) first look: What the Glyph",
         "Image": "https://images.indianexpress.com/2022/07/Nothing_phone_LEAD1.jpg",
         "category": "Technology",
         "description" : "As smartphone technology perfects almost every aspect of its existence, the devices themselves have started becoming boring with nothing really new to excite buyers. That is also an opportunity for companies willing to push the envelope when it comes to new features. This is also why the Nothing phone (1) from OnePlus co-founder Carl Pei’s new venture is getting a lot of attention."

     
     },
   
        { "id" : "30",
         "title": "NASA’s new telescope shows star death, dancing galaxies",
         "Image": "https://images.indianexpress.com/2022/07/NASA_AP_1.jpg",
         "category": "Technology",
         "description" : "NASA on Tuesday unveiled a new batch of images from its new powerful space telescope, including a foamy blue and orange shot of a dying star. The first image from the $10 billion James Webb Space Telescope was released Monday at the White House — a jumble of distant galaxies that went deeper into the cosmos than humanity has ever seen."
     },
   
        { "id" : "31",
         "title": "Apple ends consulting agreement with Jony Ive, its former design leader  ",
       
         "Image": "https://images.indianexpress.com/2022/07/Jony-Ive-NYT.jpg",
         "category": "Technology",
         "description" : "Ive and Apple have agreed to stop working together, ending a three-decade run during which the designer helped define many iconic Apple products."
     },
   
        { "id" : "32",
         "title": "Google to slow hiring for rest of year, says Alphabet CEO Sundar Pichai  ",
       
         "Image": "https://images.indianexpress.com/2022/07/sundar-pichai.jpg",
         "category": "Technology",
         "description" : "Alphabet Inc.’s Google plans to slow hiring for the remainder of the year in the face of a potential economic recession, Chief Executive Officer Sundar Pichai said Tuesday in an email to staff."
     },
   
        { "id" : "33",
         "title": "Why Elon Musk can’t back out of buying Twitter, according to Twitter  ",
       
         "Image": "https://images.indianexpress.com/2022/07/ElonMusk_Reuters_NEW3.jpg",
         "category": "Technology",
         "description" : "Twitter was unsparing, calling his escape strategy a “model of hypocrisy” and a “model of bad faith.” It backed up its argument with numerous tweets from the billionaire.  "
       
     },
   
        { "id" : "34",
         "title": "For EV battery makers, it’s go small or go home ",
        
         "Image": " https://images.indianexpress.com/2022/07/Echion-technologies-11072022.jpg",
         "category": "mix",
         "description" : "In the race to go electric, carmakers have focused on range to ease consumer anxiety over charging infrastructure, but battery makers are already working on the smaller, longer-lasting and cheaper batteries of the future, which also charge more quickly."
     },
   
      
    ])
}

module.exports.apiController = get;