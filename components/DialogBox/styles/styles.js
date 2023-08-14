const desktop={
    container:"max-w-[425px]",
    wrapContainer:"max-w-[425px] max-h-[80dvh] relative overflow-auto",
    children:{
        container:"max-w-[60vw] flex flex-col justify-center"
    }
},
tablet={
    container:"max-w-[425px]",
    wrapContainer:"max-w-[425px] max-h-[80dvh] relative overflow-auto",
    children:{
        container:"max-w-[60vw] flex flex-col justify-center"
    }
},
mobile={
    container:"w-[90vw]",
    wrapContainer:"w-full max-h-[80dvh] relative overflow-auto",
    children:{
        container:"w-full flex flex-col justify-center"
    }
}

module.exports = { desktop, tablet, mobile };