# 🤖 ChatBot

## Installation/Setup
1. Please clone this repository or download as a zip.
2. Run `npm i` in a command line within directory of the project
3. Run `npm run dev` to load up the project

## Example
<div>
<img src="https://github.com/mikeham98/chat-bot/raw/master/assets/chatBot.gif" height="400">
</div>

## Tests
To run my unit tests please run `npm test`. I have not created integration tests as it would take much longer to do so.<br/>
Test Coverage - 90.59% Statements, 80.99% Branches, 89.66% Functions, 90.18% Lines.

## ChatBots
There are three chat bots available: TravelBot, PizzaBot, WebSearchBot. All of which return static data.
This could easily be swapped for a real backend which could provide dynamic responses.

### TravelBot
The TravelBot allows the user to book a holiday.
#### Responses:
Due to the bot returning static responses, I have included a suitable conversation between the bot and the user below.
- **user** - *Hello, I would like to book a holiday please.*
- **bot** - *Where would you like to go to?*
- **user** - *Florida*
- **bot** - *What a lovely destination, how long would you like to go for?*
- **user** - *2 weeks*
- **bot** - *Brilliant, how many people shall I book for?*
- **user** - *Can you book for 3 people please.*
- **bot** - *Perfect, when would you like to go?*
- **user** - *I was planning on going on the August 12th.*
- **bot** - *What city would you like to fly from?*
- **user** - *London*
- **bot** - *We have two options available for London. (Gatwick or Heathrow)*
- **user** - **user clicks option*
- **bot** - *What time would you like to fly out?*
- **user** - *10am if possible?*
- **bot** - *What time would you like to fly back?*
- **user** - *Can we fly back at 2pm*
- **bot** - *So just to confirm, you want to go to Florida for 2 weeks from August 12th (fly out 10am) August 26 (return flight 2pm) with 3 people.*
- **user** - *Yes the above is correct, thank you.*
- **bot** - *Brilliant, that is all booked for you, have an amazing holiday!*

### PizzaBot
The PizzaBot allows the user to order a Pizza.
#### Responses:
Due to the bot returning static responses, I have included a suitable conversation between the bot and the user below.
- **user** - *Hi can I order a pizza please?*
- **bot** - *Sure thing! what size pizza would you like?*
- **user** - *Can I have a large pizza please*
- **bot** - *Would you like any toppings?*
- **user** - *Pepperoni*
- **bot, returns gif** - *We will get working on it right away*
- **user** - *Many thanks*
- **bot, delay of 10 seconds to pretend the Pizza is being prepared, returns gif** - *Voila, your pizza has been made and is out for delivery*

### WebSearchBot
The WebSearchBot allows the user to ask for help to find relevant articles to their questions.
#### Responses:
Due to the bot returning static responses, I have included a suitable conversation between the bot and the user below.
- **user** - *Hi would you be able to help me with some research?*
- **bot** - *Sure thing, what can I help you with.*
- **user** - *I would like to know more about SpaceX and their plans on travelling to mars.*
- **bot - returns link** - *I have found a good article for you, hope this helps!*
- **user** - *That was brilliant thank you for sharing that.*
- **bot** - *You're welcome, is there anything else I can help you with?*
- **user** - *No that is it thanks.*
- **bot** - *Okay, feel free to ask for any help in the future, have a good day.*

## Notes to reviewer
- I am using json-server to act as a REST api for the application (the database is reset on running `npm run dev`)
- If messages do not appear it is most likely due to json-server not responding therefore please refresh the page
- I have used a mixture of both PureComponents and memos where I feel suitable, I tend to create memos for very simple
components which do not need internal logic. The reason for this is so that I don't create a function within a functional
component as this has performance implications due to the creation functions on render/update.
- There are no hooks in this project because where I would end up implementing them I would also need to add other logic within the
component. Therefore would essentially be creating functions on render/update like the above comment.
- I have avoided creating lambda functions within render methods where possible and have used bind(this) in the constructor to improve performance
- I haven't fully tested SideBar.jsx as it would take a very long time due to the nature of the component.