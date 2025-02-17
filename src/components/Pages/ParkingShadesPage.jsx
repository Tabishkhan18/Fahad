//import React from 'react';

import parkingShades1 from '/parkingShades/parkingShades1.jpg';
import parkingShades2 from '/parkingShades/parkingShades2.jpg';
import parkingShades3 from '/parkingShades/parkingShades3.jpg';
import parkingShades4 from '/parkingShades/parkingShades4.jpg';
import parkingShades5 from '/parkingShades/parkingShades5.jpg';
import parkingShades6 from '/parkingShades/parkingShades6.jpg';
import parkingShades7 from '/parkingShades/parkingShades7.jpg';
import parkingShades8 from '/parkingShades/parkingShades8.jpg';
import parkingShades9 from '/parkingShades/parkingShades9.jpg';
import parkingShades10 from '/parkingShades/parkingShades10.jpg';
import parkingShades11 from '/parkingShades/parkingShades11.jpg';
import parkingShades12 from '/parkingShades/parkingShades12.jpg';
import parkingShades13 from '/parkingShades/parkingShades13.jpg';
import parkingShades14 from '/parkingShades/parkingShades14.jpg';
import parkingShades15 from '/parkingShades/parkingShades15.jpg';
import parkingShades16 from '/parkingShades/parkingShades16.jpg';
import parkingShades17 from '/parkingShades/parkingShades17.jpg';
import parkingShades18 from '/parkingShades/parkingShades18.jpg';
import parkingShades19 from '/parkingShades/parkingShades19.jpg';
import parkingShades20 from '/parkingShades/parkingShades20.jpg';

import ImageCard from './ImageCard';


const ParkingShadesPage = () => {
  const data = [
    { image: parkingShades1, key: 1 },
    { image: parkingShades2, key: 2 },
    { image: parkingShades3, key: 3 },
    { image: parkingShades4, key: 4 },
    { image: parkingShades5, key: 5 },
    { image: parkingShades6, key: 6 },
    { image: parkingShades7, key: 7 },
    { image: parkingShades8, key: 8 },
    { image: parkingShades9, key: 9 },
    { image: parkingShades10, key: 10 },
    { image: parkingShades11, key: 11 },
    { image: parkingShades12, key: 12 },
    { image: parkingShades13, key: 13 },
    { image: parkingShades14, key: 14 },
    { image: parkingShades15, key: 15 },
    { image: parkingShades16, key: 16 },
    { image: parkingShades17, key: 17 },
    { image: parkingShades18, key: 18 },
    { image: parkingShades19, key: 19 },
    { image: parkingShades20, key: 20 },
  ];

  return (
    <div className='z-50 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          مظلات مواقف
          {/* Parking Shades */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            تعتبر مظلات سيارات من أهم المنتجات الأساسية لدينا في
            المؤسسة وعلى رأس أولوياتنا لما لهذا المنتج من
            أهمية كبرى لدى المستهلك نظراً لحرارة الشمس الحارقة خاصة
            في بلدان الخليج العربي لحماية السيارة ومحتوياتها من التلف
            وللتخفيف من حرارة الشمس على محتويات السيارة الداخلية


          </p>
          <p className='md:text-lg text-base'>
            مميزات مظلات السيارات

            بإمكانية إبتكار مظلات بمساحات واحجام مختلفه

            حسب رغبة العملاء بتصاميم فريده بالفخامه والجودة والسعر
            المناسب

            وتتوفر المظلات لدينا بتشكيلات متعددة لحجب اشعة الشمس
            بنسبة 100٪ واخرى لدخول ضوء خافت حسب الطلب وبالوان
            متعددة وسماكات متدرجة

          </p>
          <p className='md:text-lg text-base'>

            متطورة وذات مواصفات عالية.

            معلقة بدون أعمدة من الأمام لسهولة التوقف والحركة.

            ذات أشكال جديدة ورائعة, منها الهرمي ومنها المقوسة
            وغيرها

            متوفرة بكافة أشكالها وأحجامها.

            وتصنف مظلات السيارات الى عدة اسماء للاستخدام
            منها:


          </p>
          <p className='md:text-lg text-base'>
            مظلات هرميه

            مظلات مخروطية

            مظلات بي في سي

            مظلات شد انشائى

            مظلات كابولى ‏ –

            مظلات الجناح الطائر

          </p>
        </div>
      </div>
      <div className="md:px-10 photos gap-5 flex justify-center items-center flex-wrap">
        {data.map(({  image, key }) => (
          <ImageCard key={key}  image={image} />
        ))}
      </div>
    </div>
  );
}

export default ParkingShadesPage;
