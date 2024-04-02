1. install dependencies
    npm install

2. run project in dev mode
    npm run server


I am using MVC architecture for main structure of the application

for building a system where subsystems can extend the functionality I am using a table to store subscriptions and then calling subscription using queue so subsystems can implement anything while there subscription get called.