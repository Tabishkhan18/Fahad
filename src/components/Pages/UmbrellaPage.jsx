//import React from 'react';

import umbrella1 from '/src/assets/umbrella/umbrella1.jpg';
import umbrella2 from '/src/assets/umbrella/umbrella2.jpg';
import umbrella3 from '/src/assets/umbrella/umbrella3.jpg';
import umbrella4 from '/src/assets/umbrella/umbrella4.jpg';
import umbrella5 from '/src/assets/umbrella/umbrella5.jpg';
import umbrella6 from '/src/assets/umbrella/umbrella6.jpg';
import umbrella7 from '/src/assets/umbrella/umbrella7.jpg';
import umbrella8 from '/src/assets/umbrella/umbrella8.jpg';
import umbrella9 from '/src/assets/umbrella/umbrella9.jpg';
import umbrella10 from '/src/assets/umbrella/umbrella10.jpg';
import umbrella11 from '/src/assets/umbrella/umbrella11.jpg';
import umbrella12 from '/src/assets/umbrella/umbrella12.jpg';
import umbrella13 from '/src/assets/umbrella/umbrella13.jpg';
import umbrella14 from '/src/assets/umbrella/umbrella14.jpg';
import umbrella15 from '/src/assets/umbrella/umbrella15.jpg';
import umbrella16 from '/src/assets/umbrella/umbrella16.jpg';

import ImageCard from './ImageCard';


const UmbrellaPage = () => {
  const data = [
    { title: "Tags and Titles", image: umbrella1, key: 1 },
    { title: "Tags and Titles", image: umbrella2, key: 2 },
    { title: "Tags and Titles", image: umbrella3, key: 3 },
    { title: "Tags and Titles", image: umbrella4, key: 4 },
    { title: "Tags and Titles", image: umbrella5, key: 5 },
    { title: "Tags and Titles", image: umbrella6, key: 6 },
    { title: "Tags and Titles", image: umbrella7, key: 7 },
    { title: "Tags and Titles", image: umbrella8, key: 8 },
    { title: "Tags and Titles", image: umbrella9, key: 9 },
    { title: "Tags and Titles", image: umbrella10, key: 10 },
    { title: "Tags and Titles", image: umbrella11, key: 11 },
    { title: "Tags and Titles", image: umbrella12, key: 12 },
    { title: "Tags and Titles", image: umbrella13, key: 13 },
    { title: "Tags and Titles", image: umbrella14, key: 14 },
    { title: "Tags and Titles", image: umbrella15, key: 15 },
    { title: "Tags and Titles", image: umbrella16, key: 16 },
  ];

  return (
    <div className='z-50 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          المظلات
          {/* Umbrellas */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            تعد من أهم اعمالنا الإساسية في المؤسسة حيث نقدم
            بإشكالها المختلفة وتناسب جميع الإحتياجات من مظلات
            السيارات , مظلات المواقف , مظلات المسابح , المظلات
            للاسواق , والمظلات لظل المساجد , والمظلات لظل الاحواش
            وغيرها من أعمال المظلات المختلفة .</p>
          <p className='md:text-lg text-base'>
            مميزات المظلات
          </p>
          <p className='md:text-lg text-base'>
            لاتتأثر بالرياح ويمكنها ان تتحمل سرعة الرياح حتى 120 كم
            بالساعة

            تتميز بالقوة المحكمة مما يممكن نقلها من لاخر دون اي جهد
            صنعت خصيصا للمواقف العامة والمدارس والمسابح والفلل

            مواصفات المظلات

            مصنوعة من مادة (p.v.c) عالى الكثافة

          </p>
          <p className='md:text-lg text-base'>
            متوفرة بعدة اوزان وصناعات مختلفة

            نسبة الظل 100٪ عاكس للاشعة فوق البفسجية

            القماش لايساعد على الاشتعال

            متوفرة بالوان متعددة

            الماده مصنوعه من الاخشاب البلاستيكيه المقاومه ل تقلب
            المناخ..

            مقاومة للرطوبه وضد الصدى

            اشكال متنوعه وتناسب جميع الاذواق
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

export default UmbrellaPage;
