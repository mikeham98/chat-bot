import {gif, img, link} from "../src/app/config/media.config";

export const currentUser = {
    userId: 1,
    userName: "mikeham98"
};

// the conversation id is the key for each object
export const conversations = {
    "1": {
        userId: "bot1",
        userName: "travel_bot",
        messages: [{
            body: 'Where would you like to go to?',
        }, {
            body: 'What a lovely destination, how long would you like to go for?'
        }, {
            body: 'Brilliant, how many people shall I book for?'
        }, {
            body: 'Perfect, when would you like to go?'
        }, {
            body: 'What city would you like to fly from?'
        }, {
            body: 'We have two options available for London.',
            options: [{
                id: 1,
                option: 'Gatwick'
            },{
                id: 2,
                option: 'Heathrow'
            }]
        }, {
            body: 'What time would you like to fly out?'
        }, {
            body: 'What time would you like to fly back?'
        }, {
            body: 'So just to confirm, you want to go to Florida for 2 weeks from August 12th (fly out 10am) August 26 (return flight 2pm) with 3 people.'
        }, {
            body: 'Brilliant, that is all booked for you, have an amazing holiday!'
        }]
    },
    "2": {
        userId: "bot2",
        userName: "Pizza_bot",
        messages: [{
            body: 'Sure thing! what size pizza would you like?',
        }, {
            body: 'Would you like any toppings?'
        }, {
            body: 'We will get working on it right away',
            media: [{
                id: 1,
                type: gif,
                src: 'https://media.giphy.com/media/1108D2tVaUN3eo/giphy.gif'
            }]
        }, {
            delay: 10 * 1000,
            body: 'Voila, your pizza has been made and is out for delivery',
            media: [{
                id: 2,
                type: gif,
                src: 'https://media.giphy.com/media/QtoVsU8wdqbAs/giphy.gif'
            }]
        }]
    },
    "3": {
        userId: "bot3",
        userName: "web_search_bot",
        messages: [{
            body: 'Sure thing, what can I help you with.',
        }, {
            body: 'I have found a good article for you, hope this helps!',
            media: [{
                id: 1,
                type: link,
                imagePreview: 'https://images8.alphacoders.com/374/374852.jpg',
                title: 'How (and Why) SpaceX Will Colonize Mars',
                description: 'A brief insight to how and why SpaceX will Colonize Mars',
                src: 'https://waitbutwhy.com/2015/08/how-and-why-spacex-will-colonize-mars.html'
            }]
        }, {
            body: 'You\'re welcome, is there anything else I can help you with?'
        }, {
            body: 'Okay, feel free to ask for any help in the future, have a good day.'
        }]
    }
};