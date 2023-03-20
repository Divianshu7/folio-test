import { Close, DarkMode, LightMode, Menu } from '@mui/icons-material'
import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
// import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setMode } from '../state'

function TopNav() {
    const sx = {
        "&:hover": {
            backgroundColor: 'red',
            color: 'red'
        }
    }
    const theme = useTheme()
    const dispatch = useDispatch()
    const isDesktop = useMediaQuery('(min-width:48em)')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDown, setIsDown] = useState(true)
    var oldScrollY = window.scrollY
    const navigate = useNavigate()
    // window.onwheel = e => {
    //     if (e.deltaY > 0) {
    //         setIsDown(false)
    //     } else if (e.deltaY <= 0) {
    //         setIsDown(true)
    //     }
    // }
    // window.onkeydown = e => {
    //     if (e.key === 'ArrowDown' && isDown === true) setIsDown(false)
    //     else if (e.key === 'ArrowUp' && isDown === false) {
    //         setIsDown(true)
    //     }
    // }
    window.onscroll = e => {
        if (oldScrollY < window.scrollY) {
            setIsDown(false)
        } else {
            setIsDown(true)
        }
        oldScrollY = window.scrollY
    }
    const background = theme.palette.background.alt
    return (
        <Contain position={'sticky'} sx={{ transition: 'all 0.5s ease-in-out 0s', transform: !isDown ? "translate3d(0,-100%,0)" : 'translate3d(0,0,0)' }} >
            <Box justifyContent='space-between' width='100%' display='flex' p='10px 6%' bgcolor={background} flexDirection='row' >
                <a href='' ><Typography color='red' variant='h2' fontWeight='900'>Portfolios</Typography></a>
                <Contain>
                    {isDesktop ? (
                        <Contain flexDirection='row!important' gap='1.5rem' fontSize='25px' >
                            <a href="#skills"><Typography className='tabs' fontWeight='100' variant='h4'>Skillsd</Typography></a>
                            <a href="#projects"><Typography className='tabs' fontWeight='100' variant='h4'>Projects</Typography></a>
                            <a onClick={() => window.open("https://drive.google.com/file/d/1p_4VGSEkGoZNtzTP_RULgT9x3SxMoQEZ/view?usp=share_link")}><Typography className='tabs' fontWeight='100' variant='h4'>Resume</Typography></a>
                            <a href="#contact"><Typography className='tabs' fontWeight='100' variant='h4'>Contact Me</Typography></a>

                            <IconButton onClick={() => dispatch(setMode())} >
                                {theme.palette.mode === 'dark' ? (
                                    <DarkMode />
                                ) : (
                                    <LightMode />
                                )}
                            </IconButton>
                        </Contain>
                    ) : (<Box display='flex' flexDirection='column'>
                        <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <Close /> : <Menu />}
                        </IconButton>
                    </Box>
                    )}


                </Contain>
            </Box>
            {!isDesktop && isMenuOpen && (
                <Box display='flex' zIndex='10' borderRadius='30px' bgcolor={background} border='solid 1px grey' flexDirection='column' justifyContent='end' position='absolute' top='55px' right='5px'>
                    <a onClick={() => setIsMenuOpen(false)} href="#skills"><Typography className='tabs' fontWeight='100' variant='h4'>Skills</Typography></a>
                    <a onClick={() => setIsMenuOpen(false)} href="#projects"><Typography className='tabs' fontWeight='100' variant='h4'>Projects</Typography></a>
                    <a onClick={() => window.open("https://drive.google.com/file/d/1p_4VGSEkGoZNtzTP_RULgT9x3SxMoQEZ/view?usp=share_link")}><Typography className='tabs' onClick={() => setIsMenuOpen(false)} fontWeight='100' variant='h4'>Resume</Typography></a>
                    <a href="#contact"><Typography className='tabs' fontWeight='100' variant='h4' onClick={() => setIsMenuOpen(false)} >Contact Me</Typography></a>
                    <IconButton onClick={() => dispatch(setMode())} >
                        {theme.palette.mode === 'dark' ? (
                            <DarkMode />
                        ) : (
                            <LightMode />
                        )}
                    </IconButton>
                </Box>
            )}
        </Contain>
    )
}
const Contain = styled(Box)({
    display: 'flex',
    top: '0',
    zIndex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ".tabs": {
        padding: '0.5rem',
        "&:hover": {
            backgroundColor: '#525252'
        }
    }
})
export default TopNav
