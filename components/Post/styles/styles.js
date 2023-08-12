const desktop ={
    container: "w-[21.75vw] min-h-[570px] mr-[1vw] nth-4n:mr-0 mb-[1vw] relative",
    postContainer: "w-[21.75vw] min-h-[570px] p-[20px] bg-white rounded-[9px] border border-neutral-200",
    postHeader:"w-full h-fit flex flex-row justify-between items-end mb-[20px] ",
    postUserProfile: {
        container:"w-[100%] h-fit flex flex-row",
        info:{
            container:"w-fit h-fit ml-[15px]",
            h1:"text-gray-800 text-[14px] font-medium leading-normal",
            p:"text-gray-500 text-[12px] font-normal leading-tight",
        },
        button:{
            container:"w-[76px] h-9 px-2 py-1 rounded--md shadow border border-black justify-center items-center gap-1.5 inline-flex",
            button:"text-black text-xs font-medium leading-tight cursor-pointer",
        },
        image:{
            container: "w-full h-fit",
        }
    },
    postSaparator: "w-full h-fit border border-neutral-200 mt-[20px] last:mt-[10px] mb-[10px]",
    postDescription: {
        container: "w-full h-fit",
        h1: "text-gray-800 text-[14px] font-medium leading-normal pb-[.5vw]",
        p: "w-full text-gray-500 text-sm font-normal leading-tight",
    },
    postButton:{
        container:"w-full flex flex-row place-content-around mt-[20px]",
        buttonWrap:"w-[50%] flex flex-row justify-center justify-items-center items-center",
        button:"cursor-pointer Like ml-[5px] text-gray-500 text-[12px] font-normal leading-tight",
    }
},
tablet={
    container: "w-[45vw] min-h-[570px] mr-[4vw] nth-2n:mr-0 mb-[4vw] relative",
    postContainer: "w-[45vw] min-h-[570px] p-[20px] bg-white rounded-[9px] border border-neutral-200",
    postHeader:"w-full h-fit flex flex-row justify-between items-end mb-[20px] ",
    postUserProfile: {
        container:"w-[100%] h-fit flex flex-row",
        info:{
            container:"w-fit h-fit ml-[15px]",
            h1:"text-gray-800 text-[15px] font-medium leading-normal pb-[.5vw]",
            p:"text-gray-500 text-[13px] font-normal leading-tight",
        },
        button:{
            container:"w-[76px] h-9 px-2 py-1 rounded--md shadow border border-black justify-center items-center gap-1.5 inline-flex",
            button:"text-black text-xs font-medium leading-tight cursor-pointer",
        },
        image:{
            container: "w-full h-fit",
        }
    },
    postSaparator: "w-full h-fit border border-neutral-200 mt-[20px] last:mt-[10px] mb-[10px]",
    postDescription: {
        container: "w-full h-fit",
        h1: "text-gray-800 text-[14px] font-medium leading-normal pb-[.7vw]",
        p: "w-full text-gray-500 text-sm font-normal leading-tight",
    },
    postButton:{
        container:"w-full flex flex-row place-content-around mt-[20px]",
        buttonWrap:"w-[50%] flex flex-row justify-center justify-items-center items-center",
        button:"cursor-pointer Like ml-[5px] text-gray-500 text-[13px] font-normal leading-tight",
    }
},
mobile={
    container: "w-[100%] min-h-[570px] mb-[8vw] relative",
    postContainer: "w-[100%] min-h-[570px] p-[20px] bg-white rounded-[9px] border border-neutral-200",
    postHeader:"w-full h-fit flex flex-row justify-between items-end mb-[20px] ",
    postUserProfile: {
        container:"w-[100%] h-fit flex flex-row",
        info:{
            container:"w-fit h-fit ml-[15px]",
            h1:"text-gray-800 text-[4vw] font-medium leading-normal",
            p:"text-gray-500 text-[3.5vw] font-normal leading-tight",
        },
        button:{
            container:"w-[76px] h-9 px-2 py-1 rounded--md shadow border border-black justify-center items-center gap-1.5 inline-flex",
            button:"text-black text-xs font-medium leading-tight cursor-pointer",
        },
        image:{
            container: "w-full h-fit",
        }
    },
    postSaparator: "w-full h-fit border border-neutral-200 mt-[20px] last:mt-[10px] mb-[10px]",
    postDescription: {
        container: "w-full h-fit",
        h1: "text-gray-800 text-base font-medium leading-normal",
        p: "w-full text-gray-500 text-sm font-normal leading-tight",
    },
    postButton:{
        container:"w-full flex flex-row place-content-around mt-[20px]",
        buttonWrap:"w-[50%] flex flex-row justify-center items-center",
        button:"cursor-pointer Like ml-[5px] text-gray-500 text-sm font-normal leading-tight",
    }
}

module.exports = { desktop, tablet, mobile };