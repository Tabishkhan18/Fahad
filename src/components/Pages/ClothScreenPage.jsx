//import React from 'react';

import clothScreen1 from '/clothScreen/clothScreen1.jpg';
import clothScreen2 from '/clothScreen/clothScreen2.jpg';
import clothScreen3 from '/clothScreen/clothScreen3.jpg';
import clothScreen4 from '/clothScreen/clothScreen4.jpg';
import clothScreen5 from '/clothScreen/clothScreen5.jpg';
import clothScreen6 from '/clothScreen/clothScreen6.jpg';
import clothScreen7 from '/clothScreen/clothScreen7.jpg';
import clothScreen8 from '/clothScreen/clothScreen8.jpg';
import clothScreen9 from '/clothScreen/clothScreen9.jpg';

import ImageCard from './ImageCard';


const ClothScreenPage = () => {
  const data = [
    { title: "Tags and Titles", image: clothScreen1, key: 1 },
    { title: "Tags and Titles", image: clothScreen2, key: 2 },
    { title: "Tags and Titles", image: clothScreen3, key: 3 },
    { title: "Tags and Titles", image: clothScreen4, key: 4 },
    { title: "Tags and Titles", image: clothScreen5, key: 5 },
    { title: "Tags and Titles", image: clothScreen6, key: 6 },
    { title: "Tags and Titles", image: clothScreen7, key: 7 },
    { title: "Tags and Titles", image: clothScreen8, key: 8 },
    { title: "Tags and Titles", image: clothScreen9, key: 9 },
  ]

  return (
    <div className='z-50 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          سواتر قماش
          {/* Cloth Screen */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            نعتبر الأرخص بين أنواع السواتر القماشية وهي مناسبة للمنازل
            الإيجار نقدمها لكم من مؤسستنا باسعار منافسة, تتميز
            بالعديد من المواصفات والإلوان المختلفة .
          </p>
          <p className='md:text-lg text-base'>
            السواتر الشراعية والقماش هي ارخص انواع السواتر من
            حيث التكلفه اشكال جذابه وعصريه الا انها ليست بظمان
            الانواع الخشبية والحديد

            يفضل استخدام هذه السواتر للمنازل الإيجار
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

export default ClothScreenPage;
