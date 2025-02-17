//import React from 'react';

import poolUmbrella1 from '/src/assets/poolUmbrella/poolUmbrella1.jpg';
import poolUmbrella2 from '/src/assets/poolUmbrella/poolUmbrella2.jpg';
import poolUmbrella3 from '/src/assets/poolUmbrella/poolUmbrella3.jpg';
import poolUmbrella4 from '/src/assets/poolUmbrella/poolUmbrella4.jpg';
import poolUmbrella5 from '/src/assets/poolUmbrella/poolUmbrella5.jpg';
import poolUmbrella6 from '/src/assets/poolUmbrella/poolUmbrella6.jpg';
import poolUmbrella7 from '/src/assets/poolUmbrella/poolUmbrella7.jpg';
import poolUmbrella8 from '/src/assets/poolUmbrella/poolUmbrella8.jpg';
import poolUmbrella9 from '/src/assets/poolUmbrella/poolUmbrella9.jpg';
import poolUmbrella10 from '/src/assets/poolUmbrella/poolUmbrella10.jpg';
import poolUmbrella11 from '/src/assets/poolUmbrella/poolUmbrella11.jpg';
import poolUmbrella12 from '/src/assets/poolUmbrella/poolUmbrella12.jpg';
import poolUmbrella13 from '/src/assets/poolUmbrella/poolUmbrella13.jpg';
import poolUmbrella14 from '/src/assets/poolUmbrella/poolUmbrella14.jpg';

import ImageCard from './ImageCard';


const PoolUmbrellaPage = () => {
  const data = [
    { title: "Tags and Titles", image: poolUmbrella1, key: 1 },
    { title: "Tags and Titles", image: poolUmbrella2, key: 2 },
    { title: "Tags and Titles", image: poolUmbrella3, key: 3 },
    { title: "Tags and Titles", image: poolUmbrella4, key: 4 },
    { title: "Tags and Titles", image: poolUmbrella5, key: 5 },
    { title: "Tags and Titles", image: poolUmbrella6, key: 6 },
    { title: "Tags and Titles", image: poolUmbrella7, key: 7 },
    { title: "Tags and Titles", image: poolUmbrella8, key: 8 },
    { title: "Tags and Titles", image: poolUmbrella9, key: 9 },
    { title: "Tags and Titles", image: poolUmbrella10, key: 10 },
    { title: "Tags and Titles", image: poolUmbrella11, key: 11 },
    { title: "Tags and Titles", image: poolUmbrella12, key: 12 },
    { title: "Tags and Titles", image: poolUmbrella13, key: 13 },
    { title: "Tags and Titles", image: poolUmbrella14, key: 14 },
  ];

  return (
    <div className='z-50 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          مظلات مسابح
          {/* Swimming Pool Umbrellas */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            مظلات المسابح من أهم متطلبات العملاء لدينا, ومن أفضل
            الأعمال التي تقوم مؤسستنا بعملها لكم من مظلات مسابح
            بشتى أنواعها وأحجامها موجودة لدينا سواءً كانت في المنازل
            أو الفلل أو المجمعات السكنية أو الفنادق .

            مواصفات مظلات المسابح
            مظلات حديدية
            مظلات ذات عازل شفاف قماشي

            مقاومة للحرارة والرياح

            مصنوعة من مادة p.v.c المتميزة بالجودة والضمان

            وغيرها من العديد من المميزات

          </p>
          <p className='md:text-lg text-base'>
            تغطية وتظليل مظلات المسابح من الاتربة والحشرات وحمايتها
            من الاطفال باشكال فريده وباسعار في متناول الجميع اشهر
            تغطية هي مادة البولي كربونيت (اللكسان) مميزاتها كثيرة
            جدا تعتبر ضد الكسر وتسمح بتمرير الضواء على حسب طلب
            العميل يوجد منها


          </p>
          <p className='md:text-lg text-base'>

            النوع الشفاف ونوفرها بنسبة اضائه تبدا من 25٪ وتتدرج الى
            ان تصبح بنسبة 100٪ ونوفر التغطية للمسابح من على مستوى
            سطح المسبح او عن طريقة اغلاق المسبح من الاعلى وعمل
            الجوانب بتغطيات مختلفه شفافه او كاتمه بالكامل مع عمل
            شبابيك ومنفذ للتكيف وباب باحجام مختلفه .

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

export default PoolUmbrellaPage;
