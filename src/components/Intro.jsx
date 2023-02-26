import { GitHub, LinkedIn } from '@mui/icons-material'
import { Box, Button, IconButton, Typography, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import Gif from '../assets/95714-hello-orange.json'
import Lottie from 'lottie-react'
import Socials from './Socials'
import { Fade } from 'react-reveal'
function Intro() {
    const media = useMediaQuery('(min-width:48em)')
    return (
        <Container
            marginTop='3rem'
            flexDirection={media ? "row" : "column"}
        >
            <Fade bottom duration={1000} >
                <Container p='1.6rem' flexDirection='column' width='100%'>
                    <Container>
                        <Typography variant='h1' fontSize={!media && '7.5vw'} >
                            Hi,I'm Divianshu</Typography>
                        <img className='img1' src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png" alt="hi" />
                        <br />
                    </Container>
                    <Typography textAlign='center' lineHeight='50px' variant='h4'>
                        A passionate Full Stack Software Developer 🚀 having an experience of building Web applications (MERN stack) with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
                    </Typography>
                    <Socials />
                    <Container marginTop='20px' justifyContent='space-between!important' width='50%' >
                        <Button href='#contact' variant='contained' color='warning' sx={{ fontSize: media ? '1.2vw' : "2.3vw", marginRight: !media && "10px" }}>Contact Me</Button>
                        <Button onClick={() => window.open("https://drive.google.com/file/d/1p_4VGSEkGoZNtzTP_RULgT9x3SxMoQEZ/view?usp=share_link")} variant='contained' color='warning' sx={{ fontSize: media ? '1.2vw' : "2.5vw" }}>Resume</Button>
                    </Container>
                </Container>
            </Fade>
            <Container className='' width={media ? "100%" : '90%'}>
                <Fade right duration={1000}>
                    <Lottie className='img2' animationData={Gif} loop={true} />
                </Fade>
            </Container>
        </Container>
    )
}
const Container = styled(Box)({
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    "button,a": {
        padding: "5px 10px",
    },
    ".img1": {
        width: '40px'
    },
    '.img2': {
        maxHeight: '400px',
        maxWidth: '90%',
    },


})
export default Intro