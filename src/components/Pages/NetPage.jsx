//import React from 'react';

import net1 from '/net/net1.jpg';
import net2 from '/net/net2.jpg';
import net3 from '/net/net3.jpg';
import net4 from '/net/net4.jpg';
import net5 from '/net/net5.jpg';
import net6 from '/net/net6.jpg';
import net7 from '/net/net7.jpg';
import net8 from '/net/net8.jpg';
import net9 from '/net/net9.jpg';
import net10 from '/net/net10.jpg';
import net11 from '/net/net11.jpg';

import ImageCard from './ImageCard';


const NetPage = () => {
  const data = [
    {  image: net1, key: 1 },
    {  image: net2, key: 2 },
    {  image: net3, key: 3 },
    {  image: net4, key: 4 },
    {  image: net5, key: 5 },
    {  image: net6, key: 6 },
    {  image: net7, key: 7 },
    {  image: net8, key: 8 },
    {  image: net9, key: 9 },
    {  image: net10, key: 10 },
    {  image: net11, key: 11 },
  ];

  return (
    <div className='z-50 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          شبوك
          {/* Nets */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            تركيب الشبوك بانواعها المختلفة للحماية للتسوير على الاراضي
            والبنايات الحكومية والخاصة وعلى الاراضي العقارية والمزراع
            والاستراحات غيرها من الاستخدمات الاخرى بافضل انواع
            الشبوك المجلفنه والشبوك العاديه شبوك زراعية بمواصفات
            مميزة لحماية المزارع والاماكن العامة مثل الحدائق والمنتزهات
            والمباني الرياضية والملاعب وللشبوك اهميه بالغه في وضع
            الحماية الامنيه في عدة اماكن تجارية وخاصة وحكومية وتركيب
            الشبوك للمحميات في كافة انحاء المملكة بمواصفات مميزة
            وامنه للظروف المناخية المختلفة بالسعودية.

          </p>
          <p className='md:text-lg text-base'>
            مواصفات الشبوك
          </p>
          <p className='md:text-lg text-base'>
            يتم اعتماد المتر الطولي للتوريد والتركيب من خلال عمل قواعد
            خرسانية عاديه على مسافات متقاربه وصب القواعد صبة
            خرسانية مقاومة وعمل عمدان من المواصير المجلفنة ويتم
            تركيب وايرات الربط و شبك حماية سفلي بالارتفاع المطلوب
            وعمل الاسلاك الشائكه حسب الطلب وتركيب البوابات حسب
            المخططات او الاقتراحات المراد تركيبها على اكمل وجه طبقا
            لأصول الصنعه وتعليمات المختصين والاستشاريين والمهندس
            المشرف.
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

export default NetPage;
