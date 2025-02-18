//import React from 'react';

import seatingUmbrella1 from '/seatingUmbrella/seatingUmbrella1.jpg';
import seatingUmbrella2 from '/seatingUmbrella/seatingUmbrella2.jpg';
import seatingUmbrella3 from '/seatingUmbrella/seatingUmbrella3.jpg';
import seatingUmbrella4 from '/seatingUmbrella/seatingUmbrella4.jpg';
import seatingUmbrella5 from '/seatingUmbrella/seatingUmbrella5.jpg';
import seatingUmbrella6 from '/seatingUmbrella/seatingUmbrella6.jpg';
import seatingUmbrella7 from '/seatingUmbrella/seatingUmbrella7.jpg';
import seatingUmbrella8 from '/seatingUmbrella/seatingUmbrella8.jpg';
import seatingUmbrella9 from '/seatingUmbrella/seatingUmbrella9.jpg';
import seatingUmbrella10 from '/seatingUmbrella/seatingUmbrella10.jpg';
import seatingUmbrella11 from '/seatingUmbrella/seatingUmbrella11.jpg';
import seatingUmbrella12 from '/seatingUmbrella/seatingUmbrella12.jpg';
import seatingUmbrella13 from '/seatingUmbrella/seatingUmbrella13.jpg';
import seatingUmbrella14 from '/seatingUmbrella/seatingUmbrella14.jpg';

import ImageCard from './ImageCard';


const SeatingUmbrellaPage = () => {
  const data = [
    {  image: seatingUmbrella1, key: 1 },
    {  image: seatingUmbrella2, key: 2 },
    {  image: seatingUmbrella3, key: 3 },
    {  image: seatingUmbrella4, key: 4 },
    {  image: seatingUmbrella5, key: 5 },
    {  image: seatingUmbrella6, key: 6 },
    {  image: seatingUmbrella7, key: 7 },
    {  image: seatingUmbrella8, key: 8 },
    {  image: seatingUmbrella9, key: 9 },
    {  image: seatingUmbrella10, key: 10 },
    {  image: seatingUmbrella11, key: 11 },
    {  image: seatingUmbrella12, key: 12 },
    {  image: seatingUmbrella13, key: 13 },
    {  image: seatingUmbrella14, key: 14 },
  ];

  return (
    <div className='z-40 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          مظلات الجلسات او البرجولات
          {/* Seating umbrellas or pergolas */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            هي مظلات بعدة ا .انواعها
          </p>
          <p className='md:text-lg text-base'>
            مظلات قماش .pvc
          </p>
          <p className='md:text-lg text-base'>
            مظلات حديد بدون تغطية

          </p>
          <p className='md:text-lg text-base'>
            مظلات حديد مغطاة بلكسان
          </p>
          <p className='md:text-lg text-base'>
            مظلات جلسات خشب
          </p>
          <p className='md:text-lg text-base'>
            مميزات المظلات
          </p>
          <p className='md:text-lg text-base'>
            مظلات عازلة للحارة والماء

            باشكال هندسية مميزة وجميلة

            ومن مواد عالة الجوة ومضمونة

            يوجد لينا مهندسين لتصميم الجلسات على طلب العملاء
          </p>
        </div>
      </div>
      <div className="md:px-10 photos gap-5 flex justify-center items-center flex-wrap">
        {data.map(({  image, key }) => (
          <ImageCard key={key} image={image} />
        ))}
      </div>
    </div>
  );
}

export default SeatingUmbrellaPage;
