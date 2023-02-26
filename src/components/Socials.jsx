import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material'
import { IconButton, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Socials() {
    return (
        <div>
            <Container m='10px 0 20px 0' width='30%' justifyContent='space-between!important'>
                <IconButton onClick={() => window.open("https://github.com/Divianshu7")} className='img3'>
                    <GitHub sx={{ fontSize: '22px', color: 'white' }} />
                </IconButton>
                <IconButton onClick={() => window.open("https://www.linkedin.com/in/divianshujaswal")} className='img4'>
                    <LinkedIn sx={{ fontSize: '22px', color: 'white' }} />
                </IconButton>
                <IconButton onClick={() => window.open("https://www.instagram.com/divianshu_07/")} className='img5'>
                    <Instagram sx={{ fontSize: '22px', color: 'white' }} />
                </IconButton>
                <IconButton onClick={() => window.open("mailto:divianshu1@gmail.com")} className='img6'>
                    <Mail sx={{ fontSize: '22px', color: 'white' }} />
                </IconButton>
            </Container>
        </div>
    )
}
const Container = styled(Box)({
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    ".img3": {
        backgroundColor: 'black',
        width: '35px',
        height: '35px',
        marginRight: "10px"
    },
    ".img4": {
        backgroundColor: '#0072b1',
        width: '35px',
        height: '35px',
        marginRight: "10px"
    },
    ".img5": {
        backgroundColor: '#B3005E',
        width: '35px',
        height: '35px',
        marginRight: "10px"

    },
    ".img6": {
        backgroundColor: '#D61355',
        width: '35px',
        height: '35px'
    },
})

export default Socials