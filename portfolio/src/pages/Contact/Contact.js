import React from "react";
import Container from "../../components/Container/Container";
import Banner from "../../components/Banner/Banner";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Column from "../../components/Column/Column";

const Contact = () => {
    return(
        <Container>
            <Banner 
                title={"Get in touch!"}
                subtitle={"Thanks for taking the time to browse my portfolio, and I look forward to hearing from you!"}
            />
            <Column>
            <Input
                label={"Name"}
                placeholder={"Full Name"}
                fa={"has-icons-left"}
                icon={"user"}
            />
            </Column>
            <Column>
            <Input
                label={"Email Address"}
                placeholder={"Name@Example.com"}
                fa={"has-icons-left"}
                icon={"envelope"}
            />
            </Column>
            <Column>
            <Textarea />
            </Column>
            <Column>
            <Button />
            </Column>
        </Container>
    );
}

export default Contact;