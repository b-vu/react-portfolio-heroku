import React from "react";
import Container from "../../components/Container/Container";
import Project from "../../components/Project/Project";
import Banner from "../../components/Banner/Banner";
import Column from "../../components/Column/Column";

const Portfolio = () => {
    return(
        <Container>
            <Banner title="Projects" subtitle="Browse my deployed projects and their GitHub repositories"/>
                <Column>
                    <Project
                        title="PolyGroove - Music Database & Community Forums"
                        description="PolyGroove is a MERN application for music lovers of all types. This project features charts that display the latest and hottest tracks from different genres. Users can also search up any artist, album or song and get details about each selection. PolyGroove also features a community rating system as well as a 'favorites' feature. Want to discuss your favorite artist? No problem! PolyGroove has an extensive forums section that covers all genres and artists so that you can find other like-minded individuals to chat with. PolyGroove is the one stop shop for music heads of all types."
                        projectLink="https://polygroove.herokuapp.com/"
                        githubLink="https://github.com/b-vu/polygroove"
                        image="https://i.imgur.com/Wgp7Tur.png"/>

                    <Project
                        title="Weather Dashboard"
                        description="The Weather Dashboard allows you to search any city for the current weather and the 5-day forecast. Using OpenWeatherMap's API, this application gives you accurate weather data including temperature, humidity, wind speed, and UV index. Utilizing local storage, your recent searches are saved and can be accessed the next time you return."
                        projectLink="https://b-vu.github.io/weather-dashboard/"
                        githubLink="https://github.com/b-vu/weather-dashboard"
                        image="https://i.imgur.com/WlIF8jx.png?3"/>
                </Column>

                <Column>
                    <Project
                        title="FOODZI - Food Log"
                        description="FOODZI is a web application that helps you keep track of all your nutritional intake. Using Edamam's nutriotional analysis API, users can input any kind of foods they have eaten and the application will return nutritional information such as calories, fat, and sodium. The project utilizes a MySQL database to keep track of the days and weeks the user entered a food log. This project also features a fully functional login/signup authentication system using Passport."
                        projectLink="https://safe-wave-65020.herokuapp.com/"
                        githubLink="https://github.com/b-vu/foodzi"
                        image="https://i.imgur.com/qboiuFe.png"/>
                        
                    <Project
                        title="kiloMaps - Floor Planner"
                        description="Being the newest and most innovated mapping app on the market, kiloMaps is here to illustrate floorplans before any remodeling ever takes place! Thanks to kiloMaps, users will be able to create a virtual room, fill it with furniture, and drag and drop that furniture however they please."
                        projectLink="https://kilomaps.web.app/"
                        githubLink="https://github.com/b-vu/kilomaps"
                        image="https://i.imgur.com/KZnLlzu.png"/>
                </Column>

                <Column>
                    <Project
                        title="Workout Tracker"
                        description="This application allows you to track any workout you perform. After entering your specific workout, Mongoose logs your exercise data into a MongoDB database. This project also stores and presents your weekly workouts in 4 easy-to-read, helpful graphs. Now you have a simple, friendly web application to track your exercises every week!"
                        projectLink="https://hidden-harbor-84321.herokuapp.com/?id=5ea1f3134772da0017ab0837"
                        githubLink="https://github.com/b-vu/workout-tracker"
                        image="https://i.imgur.com/Du9rt59.png"/>

                    <Project
                        title="Progressive Budget Tracker"
                        description="A progressive web application (PWA) budget tracker with offline functionality! This project utilizes caching, web manifests, service workers, webpack, and Babel to deliver an efficient and flexible budget tracking application. If you happen to be offline, you can still enter any transaction and it will be registered in the IndexedDB API store. Once back online, the budget tracker will check IndexedDB for any pending transactions when you were offline and automatically update your budget in the Mongo database."
                        projectLink="https://calm-mesa-22899.herokuapp.com/"
                        githubLink="https://github.com/b-vu/progressive-budget"
                        image="https://i.imgur.com/ZpiehFY.png"/>
                </Column>
        </Container>
    );
}

export default Portfolio;