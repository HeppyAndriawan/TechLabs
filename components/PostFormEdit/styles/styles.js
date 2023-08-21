const desktop = {
    carousel: "w-full",
    container: "w-full h-fit pb-[1vw] last:pb-0",
    form: "w-full h-fit px-[5px] relative overflow-hidden",
    input: {
      container: "w-full h-fit pb-[1vw] last:pb-0 my-[1vw] last:mb-0",
      input: "mt-[.5vw]",
      textarea: "w-full h-[10vw] mt-[.5vw] whitespace-pre-line",
      file: "mt-[.5vw] cursor-pointer",
      error: "text-[10px] text-[#eb5e5d]",
      h1: "text-sm font-semibold leading-none tracking-tight mb-[10px]",
      p: "text-sm text-muted-foreground",
    },
    preview: {
      container: "w-full pb-[1vw] relative overflow-hidden",
      h1: "text-sm font-semibold leading-none tracking-tight mb-[10px]",
      p: "text-sm text-muted-foreground",
    },
    button: {
      container: "w-full h-fit pt-[20px]",
      double: "mr-[10px]",
    },
  },
  tablet = {
    carousel: "w-full",
    container: "w-full h-fit pb-[1vw] last:pb-0",
    form: "w-full h-fit px-[5px] relative overflow-hidden",
    input: {
      container: "w-full h-fit pb-[1vw] last:pb-0 my-[2vw] last:mb-0",
      input: "mt-[.5vw]",
      textarea: "w-full h-[30vw] mt-[.5vw] whitespace-pre-line",
      file: "mt-[.5vw] cursor-pointer",
      error: "text-[10px] text-[#eb5e5d]",
      h1: "text-sm font-semibold leading-none tracking-tight mb-[10px]",
      p: "text-sm text-muted-foreground",
    },
    preview: {
      container: "w-full h-fit pb-[1vw] relative overflow-hidden",
      h1: "text-sm font-semibold leading-none tracking-tight mb-[10px]",
      p: "text-sm text-muted-foreground",
    },
    button: {
      container: "w-full h-fit pt-[20px]",
      double: "mr-[10px]",
    },
  },
  mobile = {
    carousel: "w-full",
    container: "w-full h-fit pb-[1vw] last:pb-0",
    form: "w-full h-fit px-[5px] relative overflow-hidden",
    input: {
      container: "w-full h-fit pb-[1vw] last:pb-0 my-[5vw] last:mb-0",
      input: "mt-[.5vw]",
      textarea: "w-full h-[50vw] mt-[.5vw] whitespace-pre-line",
      file: "mt-[.5vw] cursor-pointer",
      error: "text-[10px] text-[#eb5e5d]",
      h1: "text-sm font-semibold leading-none tracking-tight mb-[10px]",
      p: "text-sm text-muted-foreground",
    },
    preview: {
      container: "w-full pb-[1vw] relative overflow-hidden",
      h1: "text-sm font-semibold leading-none tracking-tight mb-[10px]",
      p: "text-sm text-muted-foreground",
    },
    button: {
      container: "w-full h-fit pt-[20px] flex flex-row justify-between",
      single: "w-full",
      double: "w-[47%]",
    },
  };

module.exports = { desktop, tablet, mobile };
