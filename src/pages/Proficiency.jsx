import { Box, styled, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import { Fade } from 'react-reveal'
export const Proficiency = () => {
    const media = useMediaQuery('(min-width:48em)')
    return (

        <Container marginTop={!media && '550px'} >
            <Fade left duration={2000} distance="400px">
                <Container className='' >
                    <Typography variant='h2'>Proficiency</Typography>
                    <Typography marginTop='10vh!important' variant='h5'>Frontend/Design</Typography>
                    <div className='bar'>
                        <span style={{ width: '80%' }} className='bar1' />
                    </div>
                    <Typography variant='h5'>Backend</Typography>
                    <div className='bar'>
                        <span style={{ width: '90%' }} className='bar1' />
                    </div>
                    <Typography variant='h5'>Programming</Typography>
                    <div className='bar'>
                        <span style={{ width: '60%' }} className='bar1' />
                    </div>
                    <Typography variant='h5'>JavaScript</Typography>
                    <div className='bar'>
                        <span style={{ width: '85%' }} className='bar1' />
                    </div>
                    <Typography variant='h5'>Python</Typography>
                    <div className='bar'>
                        <span style={{ width: '85%' }} className='bar1' />
                    </div>
                </Container>
            </Fade>

        </Container>
    )
}
const Container = styled(Box)({
    padding: "1rem 3%"
    , "h5": {
        margin: '50px 0 20px 0',
        fontWeight: '100'
    },
    ".bar": {
        width: '100%'
        , height: '20px',
        backgroundColor: 'white',
        borderRadius: '20px',
    },
    ".bar1": {
        backgroundColor: '#F48484',
        height: '100%',
        display: 'block',
        borderRadius: '20px',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'

    }
})