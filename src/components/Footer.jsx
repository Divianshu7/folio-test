import { styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Footer() {
    return (
        <Container>
            <Typography variant='h3'>Made by Divianshu</Typography>
        </Container>
    )
}
const Container = styled(Box)({
    justifyContent: "center",
    display: "flex",
    paddingBottom: "20px"
})
export default Footer