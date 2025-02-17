//import React from 'react';

import tensileStructureCanopy1 from '/tensileStructureCanopy/tensileStructureCanopy1.jpg';
import tensileStructureCanopy2 from '/tensileStructureCanopy/tensileStructureCanopy2.jpg';
import tensileStructureCanopy3 from '/tensileStructureCanopy/tensileStructureCanopy3.jpg';
import tensileStructureCanopy4 from '/tensileStructureCanopy/tensileStructureCanopy4.jpg';
import tensileStructureCanopy5 from '/tensileStructureCanopy/tensileStructureCanopy5.jpg';
import tensileStructureCanopy6 from '/tensileStructureCanopy/tensileStructureCanopy6.jpg';
import tensileStructureCanopy7 from '/tensileStructureCanopy/tensileStructureCanopy7.jpg';
import tensileStructureCanopy8 from '/tensileStructureCanopy/tensileStructureCanopy8.jpg';
import tensileStructureCanopy9 from '/tensileStructureCanopy/tensileStructureCanopy9.jpg';
import tensileStructureCanopy10 from '/tensileStructureCanopy/tensileStructureCanopy10.jpg';
import tensileStructureCanopy11 from '/tensileStructureCanopy/tensileStructureCanopy11.jpg';

import ImageCard from './ImageCard';


const TensileStructureCanopyPage = () => {
  const data = [
    { title: "Tags and Titles", image: tensileStructureCanopy1, key: 1 },
    { title: "Tags and Titles", image: tensileStructureCanopy2, key: 2 },
    { title: "Tags and Titles", image: tensileStructureCanopy3, key: 3 },
    { title: "Tags and Titles", image: tensileStructureCanopy4, key: 4 },
    { title: "Tags and Titles", image: tensileStructureCanopy5, key: 5 },
    { title: "Tags and Titles", image: tensileStructureCanopy6, key: 6 },
    { title: "Tags and Titles", image: tensileStructureCanopy7, key: 7 },
    { title: "Tags and Titles", image: tensileStructureCanopy8, key: 8 },
    { title: "Tags and Titles", image: tensileStructureCanopy9, key: 9 },
    { title: "Tags and Titles", image: tensileStructureCanopy10, key: 10 },
    { title: "Tags and Titles", image: tensileStructureCanopy11, key: 11 },
  ];

  return (
    <div className='z-50 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          مظلات شد انشائي
          {/* Tensile Structure Canopy */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            تستخدم في جميع الاماكن المراد تغطيتها

            مميزات المظلات

            تعطي منظر جمالي للمكان

            يتم  تركيبها في الاسواق

            والحدائق

            وتركيبها ديكور لواجهة المباني وغيرها …

          </p>
        </div>
      </div>
      <div className="md:px-10 photos gap-5 flex justify-center items-center flex-wrap">
        {data.map(({ title, image, key }) => (
          <ImageCard key={key} title={title} image={image} />
        ))}
      </div>
    </div>
  );
}

export default TensileStructureCanopyPage;
