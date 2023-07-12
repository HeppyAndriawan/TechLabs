const desktop = {
    editProfile: {
      container: "w-fit h-fit border-[1px] p-[3vw] rounded-[10px]",
      header: {
        container:"mb-[2vw]",
        h1: "text-gray-800 text-2xl font-semibold",
        p: "text-gray-500 text-sm font-medium",
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
            img: "w-[5vw] h-[auto]",
            icon: "absolute w-fit h-fit bottom-[-10px] left-[50%] translate-x-[-50%] p-[.5vw] bg-[#ffffff] rounded-[50rem] border",
          },
        },
      },
    },
  },
  tablet = "",
  mobile = "";

module.exports = { desktop, tablet, mobile };
