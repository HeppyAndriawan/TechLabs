import React from "react";
import Image from "next/image";

export default function Post() {
  return (
    <div className="Postng w-[402.91px] h-[554px] relative">
      <div className="Rectangle5094 w-[402.91px] h-[554px] left-0 top-0 absolute bg-white rounded-[9px] border border-neutral-200" />
      <div className="Group1000003904 w-[265.27px] h-[21.90px] left-[60.63px] top-[516px] absolute">
        <div className="Group1000003901 w-[56.15px] h-[21.90px] left-0 top-0 absolute">
          <div className="cursor-pointer Like w-[29.56px] h-[21.90px] left-[26.59px] top-0 absolute text-gray-500 text-sm font-normal leading-tight">
            Like
          </div>
        </div>
        <div className="Group1000003902 w-[91.97px] h-[21.90px] left-[173.30px] top-0 absolute">
          <div className="Mail w-[17.52px] h-[17.52px] left-[-0px] top-[2.19px] absolute" />
          <div className="cursor-pointer Message w-[65.69px] h-[21.90px] left-[26.28px] top-[-0px] absolute text-gray-500 text-sm font-normal leading-tight">
            Message
          </div>
        </div>
      </div>
      <div className="Group1000003864 w-[227.09px] h-[55px] left-[23.63px] top-[24px] absolute">
        <Image
          className="cursor-pointer PexelsAlexanderPaul168813861 w-[55px] h-[55px] left-0 top-0 absolute rounded-[5px]"
          src="/images/55x55.png"
          width={55}
          height={55}
          alt="Picture of the author"
        />
        <div className="Group1000003863 w-[155.47px] h-[49.27px] left-[71.62px] top-[3.37px] absolute">
          <div className="AnikaColeman w-[155.47px] h-[26.28px] left-0 top-0 absolute text-gray-800 text-base font-medium leading-normal">
            Anika Coleman
          </div>
          <div className="Influencer w-[110.58px] h-[21.90px] left-[-0px] top-[27.37px] absolute text-gray-500 text-sm font-normal leading-tight">
            Influencer
          </div>
        </div>
      </div>
      <div className="Line618 w-[402.91px] h-[0px] left-0 top-[382.11px] absolute border border-neutral-200"></div>
      <div className="Line619 w-[402.91px] h-[0px] left-0 top-[501.45px] absolute border border-neutral-200"></div>
      <div className="Group1000003871 w-[354.74px] h-[97.44px] left-[22.99px] top-[393.06px] absolute">
        <div className="AboutPerson w-[341.16px] h-[26.28px] left-0 top-0 absolute text-gray-800 text-base font-medium leading-normal">
          About Person
        </div>
        <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitPellentesquePosuereFermentumUrnaEuCondimentumMauris w-[354.50px] h-[65.69px] left-[0.24px] top-[31.75px] absolute text-gray-500 text-sm font-normal leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          posuere fermentum urna, eu condimentum mauris
        </div>
      </div>
      <Image
        className="PexelsCottonbroStudio37380941 w-[361.30px] h-[251.82px] left-[22.99px] top-[100.73px] absolute"
        src="/images/361x252.png"
        width={361}
        height={252}
        alt="Picture of the author"
      />
      <div className="Button w-[76px] h-9 px-4 py-2 left-[307.63px] top-[41px] absolute rounded--md shadow border border-black justify-center items-center gap-1.5 inline-flex">
        <div className="Text text-black text-sm font-medium leading-tight cursor-pointer">
          Follow
        </div>
      </div>
    </div>
  );
}
