import React from "react";
import Container from "../../components/Container/Container";
import "./About.css";
import Banner from "../../components/Banner/Banner";
import Column from "../../components/Column/Column";
import Box from "../../components/Box/Box";

const About = () => {
    return(
        <Container>
            <Banner
                title={"Brian Vu"}
                subtitle={"Welcome to my portfolio!"}
            />
            <Box>
                <h1 className="title has-text-centered">About Me</h1>
                <Column>
                    <div className="column is-one-quarter">
                        <img className="image" src="https://avatars2.githubusercontent.com/u/58751099?v=4" alt="Brian Vu"></img>
                    </div>
                    <div className="column">
                        My name is Brian Vu, and I am a part-time student at UT Austin's Coding Boot Camp. I am also working full time as a lab technician at a research lab in the medical center. As this website shows, I am very interested in learning the skills to become a web developer. My current goal is to pursue a career in web development and programming, and I believe the boot camp is a great way to get a foot in the door. Through the boot camp, I've found a passion for learning full stack development as well as collaborating with my fellow classmates. I am looking forward to working in the thriving tech industry and offering my valuable skills.
                        <br />
                        <br />
                        In my free time, I enjoy playing video games, reading, and watching sports. I'm currently reading The Dark Elf Trilogy by R. A. Salvatore, and I tend to gravitate towards fantasy and sci-fi genres. I'm a huge fan of basketball and football. As a Houston native, I will always cheer for Houston teams, but I enjoy watching any good teams play. I also watch Formula 1, e-sports, listen to all sorts of music genres, etc. Basically what I'm saying is, if you ever meet me in person, there are probably things we have in common that we could talk about!
                    </div>
                </Column>

                <h1 className="title has-text-centered">Full Stack Development Skills</h1>
                <Column>
                    <div className="column is-one-third">
                        <img className="image" src="https://i.imgur.com/IG8zmh3.jpg" alt="HTML, CSS, and Javascript"></img>
                        My name is Brian Vu, and I am a part-time student at UT Austin's Coding Boot Camp. I am also working full time as a lab technician at a research lab in the medical center. As this website shows, I am very interested in learning the skills to become a web developer. My current goal is to pursue a career in web development and programming, and I believe the boot camp is a great way to get a foot in the door. Through the boot camp, I've found a passion for learning full stack development as well as collaborating with my fellow classmates. I am looking forward to working in the thriving tech industry and offering my valuable skills.
                    </div>

                    <div className="column is-one-third">
                        <img className="image" src="https://i.imgur.com/KAlHMbk.png?1" alt="MongoDB and MySQL Databases"></img>
                        <div className="level">
                            <div className="level-item">
                                <img className="image" src="https://i.imgur.com/QTJfyN9.png" alt="MongoDB and MySQL Databases"></img>
                            </div>
                        </div>
                        My name is Brian Vu, and I am a part-time student at UT Austin's Coding Boot Camp. I am also working full time as a lab technician at a research lab in the medical center. As this website shows, I am very interested in learning the skills to become a web developer. My current goal is to pursue a career in web development and programming, and I believe the boot camp is a great way to get a foot in the door. Through the boot camp, I've found a passion for learning full stack development as well as collaborating with my fellow classmates. I am looking forward to working in the thriving tech industry and offering my valuable skills.
                    </div>

                    <div className="column is-one-third">
                        <img className="image" src="https://i.imgur.com/3oxtQos.jpg" alt="MERN Stack"></img>
                        My name is Brian Vu, and I am a part-time student at UT Austin's Coding Boot Camp. I am also working full time as a lab technician at a research lab in the medical center. As this website shows, I am very interested in learning the skills to become a web developer. My current goal is to pursue a career in web development and programming, and I believe the boot camp is a great way to get a foot in the door. Through the boot camp, I've found a passion for learning full stack development as well as collaborating with my fellow classmates. I am looking forward to working in the thriving tech industry and offering my valuable skills.
                    </div>
                </Column>
            </Box>
        </Container>
    );
}

export default About;