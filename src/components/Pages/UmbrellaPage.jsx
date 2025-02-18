//import React from 'react';

import umbrella1 from '/umbrella/umbrella1.jpg';
import umbrella2 from '/umbrella/umbrella2.jpg';
import umbrella3 from '/umbrella/umbrella3.jpg';
import umbrella4 from '/umbrella/umbrella4.jpg';
import umbrella5 from '/umbrella/umbrella5.jpg';
import umbrella6 from '/umbrella/umbrella6.jpg';
import umbrella7 from '/umbrella/umbrella7.jpg';
import umbrella8 from '/umbrella/umbrella8.jpg';
import umbrella9 from '/umbrella/umbrella9.jpg';
import umbrella10 from '/umbrella/umbrella10.jpg';
import umbrella11 from '/umbrella/umbrella11.jpg';
import umbrella12 from '/umbrella/umbrella12.jpg';
import umbrella13 from '/umbrella/umbrella13.jpg';
import umbrella14 from '/umbrella/umbrella14.jpg';
import umbrella15 from '/umbrella/umbrella15.jpg';
import umbrella16 from '/umbrella/umbrella16.jpg';

import ImageCard from './ImageCard';


const UmbrellaPage = () => {
  const data = [
    {  image: umbrella1, key: 1 },
    {  image: umbrella2, key: 2 },
    {  image: umbrella3, key: 3 },
    {  image: umbrella4, key: 4 },
    {  image: umbrella5, key: 5 },
    {  image: umbrella6, key: 6 },
    {  image: umbrella7, key: 7 },
    {  image: umbrella8, key: 8 },
    {  image: umbrella9, key: 9 },
    {  image: umbrella10, key: 10 },
    {  image: umbrella11, key: 11 },
    {  image: umbrella12, key: 12 },
    {  image: umbrella13, key: 13 },
    {  image: umbrella14, key: 14 },
    {  image: umbrella15, key: 15 },
    {  image: umbrella16, key: 16 },
  ];

  return (
    <div className='z-40 bg-green-50 text-green-950 py-40'>
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
        {data.map(({  image, key }) => (
          <ImageCard key={key}  image={image} />
        ))}
      </div>
    </div>
  );
}

export default UmbrellaPage;
