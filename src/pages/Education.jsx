import { styled, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Fade } from 'react-reveal'
import Logo from '../assets/download-modified.png'
function Education() {
    const media = useMediaQuery("(min-width:48em)")
    return (
        <Container display='flex' flexDirection='column' textAlign={!media && "center"} marginTop='12vh'>
            <Typography variant='h2' >Education</Typography>
            <Box className='edu' >
                <Fade left duration={1000} >
                    <div>
                        <img src={Logo} />
                        <Typography lineHeight='30px' variant='h5' fontWeight='700' >Dr B R Ambedkar National Institute of Technology, Jalandhar</Typography>
                        <Typography variant='h6' fontWeight='100' >Bachelor of Technology</Typography>
                        <Typography variant='h6' lineHeight='30px' fontWeight='100' >September 2018 - April 2022</Typography>
                    </div>
                </Fade>
                <Fade left duration={2000} delay={500}>
                    <hr style={{ width: !media && "100%" }} />
                </Fade>
            </Box>
        </Container>
    )
}
const Container = styled(Box)({
    padding: '2rem 6%',
    "img": {
        height: '70px',
        margin: '30px 0 10px 0'
    },
    "hr": {
        display: "flex",
        width: '80%',
        height: '1px',
        borderRadius: '20px',
        backgroundColor: '#B2B2B2'
        , border: "none",
        marginLeft: "0",
        transition: 'width ease-in .3s'
    },
    ".edu:hover": {
        "hr": {
            backgroundColor: "#F48484",
            width: '100%'
        }
    }
})
export default Education