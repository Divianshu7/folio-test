import { LocationCityOutlined } from '@mui/icons-material'
import { styled, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Socials from '../components/Socials'

function ContactMe() {
    const media = useMediaQuery("(min-width:48em)")
    return (
        <Container id='contact' marginTop={!media && "150px"}>
            <Typography variant='h2'>Contact Me !</Typography>
            <Typography marginTop="20px" variant='h4' color="grey" >CONTACT ME, MY INBOX IS OPEN FOR ALL.</Typography>
            <div className='location'><LocationCityOutlined />Jalandhar,Punjab</div>
            <Typography variant='h5' >Open for opportunities: Yes</Typography>
            <div className='social'><Socials className="social" />
            </div>
        </Container>
    )
}
const Container = styled(Box)({
    padding: "1rem 6%",
    ".social": {
        width: "50%"
        , marginTop: "20px"
    },
    ".location": {
        margin: "20px 0",
        lineHeight: "10px",
        alignItems: "center",
        display: "flex"
    }
})
export default ContactMe