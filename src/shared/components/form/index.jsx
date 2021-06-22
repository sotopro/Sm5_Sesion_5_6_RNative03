import React from 'react';
import { ThemeProvider } from "styled-components";

import { Form, Button, Title, Input} from './style'

const FormSignUp = ({ dark }) => {
    const theme = {
        secondaryColor: 'white',
        borderColor: '#ccc',
        primaryColor: 'black',
    }

    if(dark) {
        theme.secondaryColor = "#282828";
        theme.primaryColor = "#fff"
    }

    return (
        <ThemeProvider theme={theme}>
            <Form>
                <Title>
                    Sign up to my newsletter
                </Title>
                <Input type="email" name="email" />
                <Button>Sign up</Button>
            </Form>
        </ThemeProvider>
    )
}

export default FormSignUp;