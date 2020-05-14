import React from "react";
import Container from "../../components/Container/Container";
import Project from "../../components/Project/Project";
import Banner from "../../components/Banner/Banner";
import Column from "../../components/Column/Column";

const Portfolio = () => {
    return(
        <Container>
            <Banner title="Projects" subtitle="Browse my deployed projects or their GitHub repositories"/>
                <Column>
                    <Project
                        title="Weather Dashboard"
                        description="The Weather Dashboard allows you to search any city for the current weather and the 5-day forecast. Using OpenWeatherMap's API, this application gives you accurate weather data including temperature, humidity, wind speed, and UV index. Utilizing local storage, your recent searches are saved and can be accessed the next time you return."
                        projectLink="https://b-vu.github.io/weather-dashboard/"
                        githubLink="https://github.com/b-vu/weather-dashboard"
                        image="https://b-vu.github.io/Assets/images/weather-screenshot.png" />

                    <Project
                        title="Work Day Planner"
                        description="D"
                        projectLink="https://b-vu.github.io/planner/"
                        githubLink="https://github.com/b-vu/planner"
                        image="https://b-vu.github.io/Assets/images/planner-screenshot.png"/>
                </Column>

                <Column>
                    <Project
                        title="kiloMaps - Floor Planner"
                        description="Being the newest and most innovated mapping app on the market, kiloMaps is here to illustrate floorplans before any remodeling ever takes place! Thanks to kiloMaps, users will be able to create a virtual room, fill it with furniture, and drag and drop that furniture however they please."
                        projectLink="https://kilomaps.web.app/"
                        githubLink="https://github.com/b-vu/kilomaps"
                        image="https://b-vu.github.io/Assets/images/floor-screenshot.png"/>

                    <Project
                        title="FOODZI"
                        description="D"
                        projectLink="https://safe-wave-65020.herokuapp.com/"
                        githubLink="https://github.com/b-vu/foodzi"
                        image="https://i.imgur.com/B3cjCdU.png"/>
                </Column>

                <Column>
                    <Project
                        title="Workout Tracker"
                        description="This application allows you to track any workout you perform. After entering your specific workout, Mongoose logs your exercise data into a MongoDB database. This project also stores and presents your weekly workouts in 4 easy-to-read, helpful graphs. Now you have a simple, friendly web application to track your exercises every week!"
                        projectLink="https://hidden-harbor-84321.herokuapp.com/?id=5ea1f3134772da0017ab0837"
                        githubLink="https://github.com/b-vu/workout-tracker"
                        image="https://i.imgur.com/ViWQvMP.png"/>

                    <Project
                        title="Progressive Budget Tracker"
                        description="A progressive web application (PWA) budget tracker with offline functionality! This project utilizes caching, web manifests, service workers, webpack, and Babel to deliver an efficient and flexible budget tracking application. If you happen to be offline, you can still enter any transaction and it will be registered in the IndexedDB API store. Once back online, the budget tracker will check IndexedDB for any pending transactions when you were offline and automatically update your budget in the Mongo database."
                        projectLink="https://calm-mesa-22899.herokuapp.com/"
                        githubLink="https://github.com/b-vu/progressive-budget"
                        image="https://i.imgur.com/e8nkr41.png"/>
                </Column>
        </Container>
    );
}

export default Portfolio;