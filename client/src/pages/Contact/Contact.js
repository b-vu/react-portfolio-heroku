import React, { useState } from "react";
import "./Contact.css";
import Container from "../../components/Container/Container";
import Banner from "../../components/Banner/Banner";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Column from "../../components/Column/Column";
import Box from "../../components/Box/Box";
import API from "../../utils/API";

const Contact = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
        submitted: false
    });

    const handleInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value,
            submitted: false
        });
    }

    const handleSubmit = event => {
        event.preventDefault();

        API.sendMessage(state)
        .then(res => {
            console.log(res);
            setState({
                name: "",
                email: "",
                message: "",
                submitted: true
            });
        })
    }

    return(
        <Container>
            {console.log(state)}
            <Banner 
                title={"Get in touch!"}
                subtitle={"Thanks for taking the time to browse my portfolio, and I look forward to hearing from you!"}
                subtitle2={
                    <div className="level-left">
                        <div className="">
                            <a className="contact-link" href="https://github.com/b-vu">
                                <i className="fab fa-github"></i>
                                &nbsp;b-vu
                            </a>
                            
                            <br/>
                            <a className="contact-link" href="/">
                                <i className="fab fa-linkedin"></i>
                                &nbsp;LinkedIn
                            </a>
                            
                            <br/>
                            <a className="contact-link" href="mailto:brianvu7@gmail.com">
                                <i className="fas fa-envelope"></i>
                                &nbsp;brianvu7@gmail.com
                            </a>
                        </div>
                    </div>
                }
            />
            <Box>
                <form>
                <Column>
                    <Input
                        name="name"
                        onChange={handleInputChange}
                        value={state.name}
                        label="Name"
                        placeholder="Full Name"
                        fa="has-icons-left"
                        icon="user"
                    />
                </Column>
                <br />
                <Column>
                    <Input
                        name="email"
                        onChange={handleInputChange}
                        value={state.email}
                        label="Email Address"
                        placeholder="Name@Example.com"
                        fa="has-icons-left"
                        icon="envelope"
                    />
                </Column>
                <br />
                <Column>
                    <Textarea
                        name="message"
                        value={state.message}
                        onChange={handleInputChange}
                    />
                </Column>
                <br />
                <Column>
                    <Button
                        onClick={handleSubmit}
                        disabled={(state === undefined || !state.name.length || !state.email.length || !state.message.length)}
                    />
                </Column>
                <Column>
                    {
                        state.submitted
                        ?
                            <div className="container buttons column is-three-fifths">
                                <p>Thank you!</p>
                            </div>
                        :
                            null
                    }
                </Column>
                </form>
                <br/>
            </Box>
        </Container>
    );
}

export default Contact;