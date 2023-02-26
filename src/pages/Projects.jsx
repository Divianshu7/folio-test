import { Book, BookOutlined } from '@mui/icons-material'
import { styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { Button } from 'antd'
import React from 'react'
import { Fade } from 'react-reveal'
import { useNavigate } from 'react-router-dom'
function Projects() {
    const theme = useTheme()
    const media = useMediaQuery("(min-width:48em)")
    const sx = {
        "&:hover": {
            backgroundColor: theme.palette.background.alt,
            boxShadow: "0rem 0rem .5rem white!important",
            transition: "all ease .5s"
        }
    }
    const Card = ({ h, p, j, ht, c }) => {
        return (
            <Box overflow='hidden' padding='3rem' flexDirection='column' width="90%" className='box' sx={sx} display='flex'>
                <Box display='flex' alignItems='center' marginBottom='20px' >
                    <BookOutlined />
                    <Typography variant='h3' fontSize={media && '1.8vw'} fontWeight='200' >{h}</Typography>
                </Box>
                <Box>
                    <Typography variant='h6' overflow='hidden' fontWeight='100' >{p}</Typography>
                </Box>
                <Box className="grid2" marginTop="15px">
                    <div className='info'><div className='circle' style={{ backgroundColor: 'yellow' }} ></div><Typography display='inline-block'>JavaScript  <span className='percent' > {j}</span></Typography></div>
                    <div className='info'><div className='circle' style={{ backgroundColor: '#EB6440' }} ></div><Typography display='inline-block'>HTML <span className='percent'> {ht}</span> </Typography></div>
                    <div className='info'><div className='circle' style={{ backgroundColor: '#333C83' }} ></div><Typography display='inline-block'>CSS  <span className='percent' > {c}</span></Typography></div>
                </Box>
            </Box>
        )
    }
    return (
        <Container id="projects" justifyContent="center" display="flex" flexDirection="column">
            <Typography variant='h2' >Projects</Typography>
            <Box className='grid' width="100%">
                <Fade bottom duration={1000}>
                    <div onClick={() => window.open("https://github.com/Divianshu7/developerFolio")}>
                        <Card h={"developerFolio"} p={"🚀 Software Developer Portfolio Template that showcases my work and skills as a softwate developer  "} j={"92.2%"} c={"2.7%"} ht={"5.1%"} />
                    </div>
                    <div onClick={() => window.open("https://github.com/Divianshu7/Concept-Labs-deploy")} >
                        <Card h={"Concept-Labs"} p={"🔥 Founded an Edtech startup, teaching 150+ students about CAD modelling software. I made and handled the website along with managing day-to-day operations and developing marketing content for various social media channels."} j={"93.4%"} c={"2.3%"} ht={"4.3%"} />
                    </div>
                    <div onClick={() => window.open(" https://github.com/Divianshu7/client")}>
                        <Card h={"Hotel-Booking-App"} p={"🔥Full stack MERN application which allows users book hotel room or publish their own hotels."} j={"98.1%"} c={"0.6%"} ht={"1.3%"} />
                    </div>
                    <div onClick={() => window.open("https://github.com/Divianshu7/Client-chat-app")}>
                        <Card h={"Chat-App"} p={"🚀Full stack MERN stack application which allows users to chat with other users"} j={"93.4%"} ht={"5.2%"} c={"1.4%"} />
                    </div>
                </Fade>
            </Box>
            <Button onClick={() => window.open("https://github.com/Divianshu7")} style={{ width: media && "20%" }} type='primary'>More Projects</Button>
        </Container>
    )
}
export const Container = styled(Box)({
    padding: '2rem 6%',

    "button": {
        margin: "10px auto 0 auto"
    },
    "h6": {
        marginLeft: '5px'
    },
    ".percent": {
        display: "inline-block",
        marginRight: "5px",
        fontWeight: "100",
        color: "grey"
    },
    ".circle": {
        borderRadius: '20px',
        width: "8px",
        height: '8px',
        display: "inline-block",
        marginRight: "5px"
    },
    ".box": {
        cursor: "pointer",
        margin: '10px auto',
        padding: "20px",
        boxShadow: "0rem 0rem .5rem black",
        "h6": {
            display: "-webkit-box",
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '2',
            height: '40px',
            marginLeft: "0"
        },
        "span": {
            marginRight: "15px",
            "div": {
                marginRight: "5px"
            }
        }
    },
    ".grid": {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
        "div": {

        }
    },
    ".grid1": {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))"
    },
    ".info": {
        display: "inline-block"
    }
})
export default Projects