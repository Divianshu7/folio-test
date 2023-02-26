import { Box, styled, useMediaQuery } from '@mui/material'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import gif from '../assets/9gu9.gif'
import Hello from './Hello'
import TopNav from '../components/TopNav'
import { Skills } from './Skills'
import { Proficiency } from './Proficiency'
import Education from './Education'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Footer from '../components/Footer'
function Home() {
    const [isloading, setLoading] = useState(true)
    const media = useMediaQuery('(min-width:48em)')
    const welcome = () => (
        <Container
            justifyContent='center'
            alignItems='center'
            display='flex'
            backgroundColor='#0d0d0d'
            height='100vh !important'
        >
            <img src={gif} alt='welcome' />
        </Container>)
    const done = () => (
        <Box>
            <TopNav />
            <Container height={media && '85vh !important'}>
                <Hello />
            </Container>
            <Container>
                <Skills />
            </Container>
            <Container>
                <Proficiency />
            </Container>
            <Education />
            <Container>
                <Projects />
            </Container>
            <ContactMe />
            <Footer />
        </Box >)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])
    return (
        <>
            {isloading ? welcome() : done()}
        </>
    )
}
const Container = styled(Box)({
    // height: '100vh'


})
export default Home