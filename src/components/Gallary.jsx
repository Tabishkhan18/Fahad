// import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import GallaryCard from "./GallaryCard";
import image1 from '/umbrella/umbrella6.jpg';
import image2 from '/schoolUmbrella/schoolUmbrella11.jpg';
import image3 from '/poolUmbrella/poolUmbrella4.jpg';
import image4 from '/plasticAndWoodScreens/plasticAndWoodScreens1.jpg';
import image5 from '/tensileStructureCanopy/tensileStructureCanopy8.jpg';
import image6 from '/seatingUmbrella/seatingUmbrella2.jpg';
import image7 from '/parkingShades/parkingShades2.jpg';
import image8 from '/clothScreen/clothScreen1.jpg';
import image9 from '/ironFence/ironFence14.jpg';
import image10 from '/net/net6.jpg';
import image11 from '/outdoorGardenUmbrella/outdoorGardenUmbrella17.jpg';
import image12 from '/poetryHouses/poetryHouses9.jpg';
import image13 from '/remoteControlAwnings/remoteControlAwnings1.jpg';
import image14 from '/winterSeatingUmbrella/winterSeatingUmbrella1.jpg';
import "./Gallary.css";

const data = {

  title1: "المظلات", //Umbrellas
  title2: "مظلات المدارس", // School Umbrellas
  title3: "مظلات مسابح", // Swimming Pool Umbrellas
  title4: "سواتر بلاستيكية", // Plastic Screens
  title5: "مظلات شد انشائي", // Tensile Structure Canopy
  title6: "مظلات الجلسات او البرجولات", // Seating Umbrellas or Pergolas
  title7: "مظلات مواقف", // Parking Shades
  title8: "سواتر قماش", // Cloth Screens 
  title9: "سواتر حديد", // Iron Fences
  title10: "شبوك", // Nets
  title11: "مظلات خارجية للحدائق", // Outdoor Garden Umbrella
  title12: "بيوت شعر", // Poetry Houses
  title13: "مظلات التحكم عن بعد", // Remote Control Awnings
  title14: "مظلات الجلوس الشتوية", // Winter Seating Umbrella

  
  href1: "umbrella",
  href2: "schoolUmbrella",
  href3: "poolUmbrella",
  href4: "plasticScreen",
  href5: "tensileStructureCanopy",
  href6: "seatingUmbrellaOrPergolas",
  href7: "parkingShades",
  href8: "clothScreen",
  href9: "ironFence",
  href10: "net",
  href11: "outdoorGardenUmbrella",
  href12: "poetryHouses",
  href13: "remoteControlAwnings",
  href14: "winterSeatingUmbrellas",


}



const Gallary = () => {
  return (
    <div className="bg-green-50 py-40 md:px-40 px-0 max-h-fit flex md:flex-row flex-col flex-wrap md:justify-end justify-center items-center gap-10 z-50">

      <h1 className='md:text-5xl text-2xl w-full text-center py-20 font-semibold text-green-500 border-b border-green-950'>
        المظلات والمظلات والأبواب   
      </h1>

      <AnimatedWrapper>
        <GallaryCard image={image1} title={data.title1} href={data.href1}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image2} title={data.title2} href={data.href2}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image3} title={data.title3} href={data.href3}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image4} title={data.title4} href={data.href4}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image5} title={data.title5} href={data.href5}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image6} title={data.title6} href={data.href6}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image7} title={data.title7} href={data.href7}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image8} title={data.title8} href={data.href8}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image9} title={data.title9} href={data.href9}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image10} title={data.title10} href={data.href10}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image11} title={data.title11} href={data.href11}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image12} title={data.title12} href={data.href12}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image13} title={data.title13} href={data.href13}/>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <GallaryCard image={image14} title={data.title14} href={data.href14}/>
      </AnimatedWrapper>


    </div>
  );
};

export default Gallary;
