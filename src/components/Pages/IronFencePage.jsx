//import React from 'react';

import ironFence1 from '/ironFence/ironFence1.jpg';
import ironFence2 from '/ironFence/ironFence2.jpg';
import ironFence3 from '/ironFence/ironFence3.jpg';
import ironFence4 from '/ironFence/ironFence4.jpg';
import ironFence5 from '/ironFence/ironFence5.jpg';
import ironFence6 from '/ironFence/ironFence6.jpg';
import ironFence7 from '/ironFence/ironFence7.jpg';
import ironFence8 from '/ironFence/ironFence8.jpg';
import ironFence9 from '/ironFence/ironFence9.jpg';
import ironFence10 from '/ironFence/ironFence10.jpg';
import ironFence11 from '/ironFence/ironFence11.jpg';
import ironFence12 from '/ironFence/ironFence12.jpg';
import ironFence13 from '/ironFence/ironFence13.jpg';
import ironFence14 from '/ironFence/ironFence14.jpg';
import ironFence15 from '/ironFence/ironFence15.jpg';
import ironFence16 from '/ironFence/ironFence16.jpg';

import ImageCard from './ImageCard';


const IronFencePage = () => {
  const data = [
    {  image: ironFence1, key: 1 },
    {  image: ironFence2, key: 2 },
    {  image: ironFence3, key: 3 },
    {  image: ironFence4, key: 4 },
    {  image: ironFence5, key: 5 },
    {  image: ironFence6, key: 6 },
    {  image: ironFence7, key: 7 },
    {  image: ironFence8, key: 8 },
    {  image: ironFence9, key: 9 },
    {  image: ironFence10, key: 10 },
    {  image: ironFence11, key: 11 },
    {  image: ironFence12, key: 12 },
    {  image: ironFence13, key: 13 },
    {  image: ironFence14, key: 14 },
    {  image: ironFence15, key: 15 },
    {  image: ironFence16, key: 16 },
  ];

  return (
    <div className='z-40 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          سواتر حديد
          {/* Iron Fence */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            سواتر حديد مصنوعة بإفضل المواصفات من قبل مؤسستنا
            نقدمها لك بمختلف إحتياجاتها ويتم تركبيها من فريق عمل
            متخصص ومتميز في هذا المجال .
          </p>
          <p className='md:text-lg text-base'>
            من خلال افضل انواع الصناعات السعوديه (حديد سابك)
            وفرنا تصنيع مميز, من خلال السواتر الحديدية لاسوار
            المنازل والفلل والقصور وغيرها وبسماكات مختلفة على
            حسب ارتفاع الساتر ودرجة عامل الامان والشكل
            وباسعار هي الانسب والاوفر في جميع انواع السواتر .
            مواصفات السواتر الحديد
          </p>
          <p className='md:text-lg text-base'>
            سواتر توفر نسبة حجب رؤية تصل الى مئة بالمئة

            تساعد في رفع درجة الامان بالمنازل والفلل والبيوت

            سماكة حديد عالية تجعل منها قوة وكتلة واحد لا تتحرك
            لاصعب الظروف

            لا يتغير لونها مع مرور السنين

            لا تساعد على الصدى او التأكل

            مزايا سواتر الحديد:

            تتوفر جميع الالوان حسب الرغبة العميل مهما كان اللون
            المطلوب يتم توفيره

            امكانية تطبيق لون الساتر نفس لون الجدار بالكمبويتر بنسبة100٪

            اسعار مناسبه وتوفيره للسواتر الحديد
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

export default IronFencePage;
