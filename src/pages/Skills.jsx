import { styled, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import gif from '../assets/coding.json'
import Lottie from 'lottie-react'
import { Html5Filled } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3Alt, faJs, faNode, faNodeJs, faNpm, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-reveal'
export const Skills = () => {
    const media = useMediaQuery('(min-width:48em)')
    return (
        <Container id="skills" p='0 30px' marginTop={!media && '200px'} flexDirection={!media ? "column" : "row-reverse"} height='100vh'>
            <Fade right duration={2000} >
                <Container textAlign={!media && 'center'} flexDirection='column'>
                    <div>
                        <Typography fontSize={!media && '7.5vw'} variant='h2'>What I Do</Typography>
                        <Typography variant='h4'>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</Typography>
                        <Container>
                            <ul >
                                <li ><Container flexDirection='column' lineHeight='5px'><Html5Filled className='icon' /><p className='title' >html5</p></Container></li>
                                <li><Container flexDirection='column' lineHeight='5px'><FontAwesomeIcon fontWeight='100' className='icon' icon={faCss3Alt} /> <p className='title' >css3</p></Container></li>
                                <li><Container flexDirection='column' lineHeight='5px'><FontAwesomeIcon className='icon' icon={faJs} /> <p className='title' >JavaScript</p> </Container>  </li>
                                <li><Container flexDirection='column' lineHeight='5px'><FontAwesomeIcon className='icon' icon={faNode} /> <p className='title' >nodeJs</p> </Container></li>
                                <li><Container flexDirection='column' lineHeight='5px'><FontAwesomeIcon className='icon' icon={faReact} /> <p className='title' >react</p> </Container></li>
                                <li><Container flexDirection='column' lineHeight='5px'><FontAwesomeIcon className='icon' icon={faNpm} /> <p className='title' >npm</p> </Container></li>
                                <li><Container flexDirection='column' lineHeight='5px'><FontAwesomeIcon className='icon' icon={faDatabase} /> <p className='title' >MongoDB</p> </Container></li>
                                <li><Container flexDirection='column' lineHeight='5px'><FontAwesomeIcon className='icon' icon={faPython} /> <p className='title' >Python</p> </Container></li>
                                <li><Container flexDirection='column' lineHeight='5px'><FontAwesomeIcon className='icon' icon={faBootstrap} /> <p className='title' >BootStrap</p> </Container></li>
                            </ul></Container>
                        <Container textAlign='left' flexDirection='column'>
                            <Typography variant='h4'>⚡ Develop highly interactive Front end / User Interfaces for your web applications</Typography>
                            <Typography variant='h4'>⚡ Integration of third party services such as Skrill/Mongoose/Firebase</Typography>
                        </Container>
                    </div>
                </Container>
            </Fade>
            <Fade left duration={2000} >
                <Container id='page3' minHeight='50vh' justifyContent='center' className='' >

                    <Container justifyContent='center' className='right' width='80%!important'>
                        <Lottie style={{ display: 'flex', width: '100%' }} animationData={gif} loop={true} />
                    </Container>
                </Container>
            </Fade>
        </Container >
    )
}
const Container = styled(Box)({
    display: 'flex',

    width: '100%',
    ".icon": {
        fontSize: '40px',
        marginTop: '20px',
        fontWeight: '100'
    },
    "ul": {
        listStyleType: 'none',
        textAlign: 'center',
        marginRight: '20px'
    },
    "li": {
        display: 'inline-block',
        padding: '10px',
    }
    , ".title": {
        fontWeight: '100!important'
    },
    "h4": {
        lineHeight: '40px'
    },

})