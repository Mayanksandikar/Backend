const get =(res, req)=>{
    res.send([
       {
            "id" : "15",
        "title": "Hrithik Roshan shares video of 72-year-old Rakesh Roshan working out in the gym; calls it ‘goals",
        "Image": "Hrithik Roshan shares video of 72-year-old Rakesh Roshan working out in the gym; calls it ‘goals",
        "category": "Fitness",
        "description" : "Actor Hrithik Roshan shared a video of his father Rakesh Roshan working out in the gym; it basically proves that age is just a state of mind when it comes to fitness, and that one has to have the drive and discipline to go the extra mile to ensure the body is healthy."
    },
  
        {
             "id" : "16",
         "title": "Expert who helped Aditya Narayan lose ‘six kg in six weeks’ shares the singer’s diet and fitness routine",
         "Image": "https://images.indianexpress.com/2022/07/aditya-narayan_1200_insta.jpg",
         "category": "Fitness",
         "description" : "Aditya Narayan often shares glimpses of his fitness sessions on Instagram. Now, the 34-year-old playback singer, who recently embraced fatherhood, has opened up about looking and feeling “smashing” after losing weight."
     },
   
        { 
            "id" : "17",
         "title": "Workout tips for men over 40",
         "Image": "https://images.indianexpress.com/2022/02/GettyImages-body-weight-fat-exercise-1200-1.jpg",
         "category": "Fitness",
         "description" : "“One of the biggest myths is that you need to be in your 20s to achieve your dream body,” said Miten Kakaiya, fitness coach and founder of Miten Says Fitness. But, “the truth is,” he continued, “that there is no such age bar. With the right plan, the right actions, and the right determination, you can achieve your dream body at any age.”"
     },
   
        {
             "id" : "18",
         "title": "Four things that will help you on your weight loss journey ",
         "Image": "https://images.indianexpress.com/2022/07/weight-loss_200_.jpg",
         "category": "Fitness",
         "description" : "On their weight loss journeys, many people give up certain food items or work out extra. But, weight loss is neither about giving up your favourite foods, or about spending extra time in the gym."
     },
   
        { 
            "id" : "19",
         "title": "Watch: Kamal Haasan does 26 clean incline pushups; sets massive fitness goals     ",
    
         "Image": "https://images.indianexpress.com/2022/06/kamal-hassan_insta-lokesh-kanagaraj-twitter.jpg",
         "category": "Fitness",
         "description" : "Kamal Haasan maybe 67 years old, but he never fails to set goals — from acting to fashion and even fitness. As such, the actor’s fitness prowess was captured in a video by director Lokesh Kanagaraj on the sets of his film, Vikram, which went on to break records."
     },
   
        { 
            "id" : "20",
         "title": "Guinness alert: Man does 3,182 push-ups in one hour to break record      ",
   
         "Image": "https://images.indianexpress.com/2022/06/daniel-scali_1200_guinness.jpgs",
         "category": "mix",
         "description" : "Daniel Scali from Australia has managed to break the previous best Guinness record — of 3,054 push-ups in an hour — by over 100 push-ups. In his record attempt, Scali managed to do a total of 3,182 push-ups! The previous record for most push-ups in one hour (male) was held by Jarrad Young, also from Australia."
     },
   
        { 
            "id" : "21",
         "title": "Improve your neck, back postures with these easy exercises",
         "Image": "https://images.indianexpress.com/2020/06/exercise-1200-1.jpg",
         "category": "Fitness",
         "description" : "Many of us are guilty of hunching our backs while working, studying, texting, or watching TV. But, having a bad posture can invite back, shoulder, and neck issues in long run."
     },
   
       
    ])
}

module.exports.apiController = get;