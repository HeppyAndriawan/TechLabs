const desktop = {
  editProfile: {
    container: "w-full h-fit my-[3vw] mx-[1.5vw] ",
    header: {
      container:"mb-[2vw]",
      h1: "text-gray-800 text-2xl font-semibold",
      p: "w-[50%] text-gray-500 text-sm font-medium text-red-500",
    },
    form: {
      container: "w-full h-fit pt-[1vw]] mb-[2vw]",
      input: {
        container: "w-full h-fit pb-[1vw] flex flex-row flex-wrap",
        list: "w-[20vw] h-fit pb-[1vw] pr-[1.5vw] last:pr-0",
        listWidth: "w-[40vw] h-fit pb-[1vw] pr-[1.5vw] last:pr-0",
        wrap:"w-[5vw] h-[5vw] rounded-[50rem] flex justify-center items-center cursor-pointer overflow-hidden",
        img: {
          container: "w-[5vw] h-fit rounded-[50rem] cursor-pointer relative ", //overflow-hidden
          img: "w-auto h-[5vw] object-cover",
          icon: "absolute w-fit h-fit bottom-[-10px] left-[50%] translate-x-[-50%] p-[.5vw] bg-[#ffffff] rounded-[50rem] border",
        },
        removeAccount: "w-full h-fit pb-[1vw] mt-[15px] flex flex-row flex-wrap"
      },
    },
  },
},
tablet = {
  editProfile: {
    container: "w-full h-fit my-[3vw] mx-[1.5vw] ",
    header: {
      container:"mb-[4vw]",
      h1: "text-gray-800 text-2xl font-semibold",
      p: "w-[80%] text-gray-500 text-sm font-medium text-red-500",
    },
    form: {
      container: "w-full h-fit pt-[1vw]] mb-[2vw]",
      input: {
        container: "w-full h-fit pb-[2vw] flex flex-row flex-wrap",
        list: "w-[40vw] h-fit pb-[1vw] pr-[2vw] last:pr-0",
        listWidth: "w-[80vw] h-fit pb-[1vw] pr-[1.5vw] last:pr-0",
        wrap:"w-[9vw] h-[9vw] rounded-[50rem] flex justify-center items-center cursor-pointer overflow-hidden",
        img: {
          container: "w-[9vw] h-fit rounded-[50rem] cursor-pointer relative ", //overflow-hidden
          img: "w-auto h-[9vw] object-cover",
          icon: "absolute w-fit h-fit bottom-[-10px] left-[50%] translate-x-[-50%] p-[.5vw] bg-[#ffffff] rounded-[50rem] border",
        },
        removeAccount: "w-full h-fit pb-[2vw] mt-[15px] flex flex-row flex-wrap "
      },
    },
  },
},
mobile = {
  editProfile: {
    container: "w-full h-fit my-[8vw]",
    header: {
      container:"mb-[10vw]",
      h1: "text-gray-800 text-2xl font-semibold",
      p: "text-gray-500 text-sm font-medium text-red-500",
    },
    form: {
      container: "w-full h-fit pt-[1vw]] mb-[2vw]",
      input: {
        container: "w-full h-fit pb-[5vw] flex flex-row flex-wrap",
        list: "w-[100%] h-fit pb-[5vw] pr-[2vw] last:pr-0 last:pb-0",
        listWidth: "w-[80vw] h-fit pb-[1vw] pr-[1.5vw] last:pr-0",
        wrap:"w-[20vw] h-[20vw] rounded-[50rem] flex justify-center items-center cursor-pointer overflow-hidden",
        img: {
          container: "w-[20vw] h-fit rounded-[50rem] cursor-pointer relative ", //overflow-hidden
          img: "w-auto h-[20vw] object-cover",
          icon: "absolute w-fit h-fit bottom-[-10px] left-[50%] translate-x-[-50%] p-[.5vw] bg-[#ffffff] rounded-[50rem] border",
        },
        removeAccount: "w-full h-fit pt-[1vw]] mb-[2vw] mt-[15px]",
      },
    },
  },
}

module.exports = { desktop, tablet, mobile };

