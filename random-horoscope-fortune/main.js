import promptSync from 'prompt-sync';
const prompt = promptSync();

const zodiacHoroscopes = {
    "Capricorn": [
        "It is a great idea to spend the day having exciting adventures with your partner.", 
        "Avoid confrontations as it will take things too far.",
        "You will feel grounded and focused, gaining clarity in relationships and career."
    ], 
    "Aquarius": [
        "Resist the urge to look elsewhere for a rubric to follow. There is no trail in front of you until you blaze it yourself.", 
        "After the emotional havoc you went through over the last few weeks, the period beginning today will be quite soothing.", 
        "Overwork and strain could have you feeling a little under the weather. It might be a good idea to take some time alone to rest."
    ], 
    "Pisces": [
        "A planetary configuration like today's often makes people afraid to start anything that challenges the status quo. You should dare to take on more responsibility.", 
        "The celestial configuration is speaking of a new period in which you focus on the way you differentiate yourself from others.", 
        "A creative project may require a larger expenditure of money, time, or other resources than you originally thought. It might take some tweaking on your part, but you should be able to complete it as planned."
    ], 
    "Aries": [
        "Today's your chance to stand up to family members who want to exert too much control over your love life.", 
        "You may have to rethink certain principles that you've adhered to in your relationships up until now.", 
        "It's best to keep your activities low-key. Have coffee and cake at home instead of going out, and get the cake from a bakery!"
    ], 
    "Taurus": [
        "As long as you're bashful about showcasing your innate gifts, it will be difficult to find meaning in your life.", 
        "You probably had some new perspectives to set up in your professional life, and now you will have to get to work setting goals!", 
        "oday you might learn something shocking about a neighbor or relative. The gossip might spread rapidly through your community."
    ],
    "Gemini": [
        "You're too motivated by meaningful activities to spend your time with frivolous ones. Today's aspects will push you to cut yourself off from all that doesn't resonate deeply.", 
        "The celestial aspects are heralding a new cycle that will be filled to the brim with activities, new people, and new professional perspectives.", 
        "Some good but surprising news could come your way today. Perhaps a family member or friend will call or drop by with a surprising development that directly affects you. "
    ], 
    "Cancer": [
        "You may have noticed for some time now to what an extent your ambitions wear you out and to what point they have become outdated.", 
        "It's appealing to think that you may be traveling to exotic locations or perhaps changing jobs and meeting some interesting new people. Anything is possible with these aspects. Enjoy the renewed atmosphere!", 
        "Today may start out frustrating. Take a long walk. This would not only provide an energy outlet but also clear your head."
    ], 
    "Leo": [
        "Dreams or meditation may bring up some spiritual insights and revelations, and you may promptly forget them upon coming out of your dream or meditative state.",
        "The planets are lining up to signal new beginnings. You will be able to take advantage of your recent reflections and test your new self-image. ", 
        "Do you feel caught between the desire to participate fully in the world and the equally strong desire to remain in your dream world, even at the risk of feeling a little out of it?  If you look closely, you will see that you don't need to choose one or the other.", 
    ], 
    "Virgo": [
        "You can expect to have to make a choice today related to your intimate relationships. You may have become aware that something is missing, either in your partner or yourself.", 
        "Beginning today and for the next month or so, you're likely to be amazed by the turn of events in your relationships with others. The plot thickens as new people and groups emerge on your horizon.", 
        "Some upsetting news regarding money could throw you into a dither today. This is only a temporary setback."
    ], 
    "Libra": [
        "You're being called upon to make a commitment or promise, most likely relating to your love life. Will you take that decisive step? ", 
        "Last month you may have been somewhat more extroverted and sociable than usual, especially regarding your emotional relationships. But beginning today, your attitude will undergo a change.", 
        "A setback in your career might have you feeling disoriented. Equipment might be involved. Don't go crazy. It's only temporary."
    ], 
    "Scorpio": [
        "There are times in your love life when you may feel somewhat inhibited, as though something is holding you back from total fulfillment.", 
        "As a person who loves to experiment with new ideas and discover new people, you will be delighted with the period that is now beginning.", 
        "A delivery that you were expecting from far away might be delayed, causing you to wonder if it might have been lost. It hasn't."
    ], 
    "Sagittarius": [
        "The forecast today is stormy. You may have sensed that there was some tension clouding the conversation at home.", 
        "You can expect to focus on giving a little more character, expression, or enrichment to your domestic life. You may redecorate a part of the house or find new leisure activities for the children. ", 
        "Today you may feel especially passionate and desire a romantic encounter. You might even have a hot date scheduled. Don't be surprised if it has to be postponed for reasons beyond anyone's control."
    ]
}

let month = prompt("Please enter your birth month: ");
const months = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
let randInt = Math.floor(Math.random() * 3); // random number from 0 to 2
const monthToZodiac = {"January": "Capricorn", "February": "Aquarius", "March": "Pisces", 
    "April": "Aries", "May": "Taurus", "June": "Gemini", "July": "Cancer", 
    "August": "Leo", "September": "Virgo", "October": "Libra", "November": "Scorpio", 
    "December": "Sagittarius"};

let zodiac;
if (month != null && months.includes(month)) {
    zodiac = monthToZodiac[month];
    let horoscope = zodiacHoroscopes[zodiac][randInt];
    console.log("Your zodiac is: ", zodiac);
    console.log("Your horoscope for the day is: ", horoscope);
} 
else {
    console.log("That is not a valid month! Please enter a valid month and capitalize only the first letter.");
}