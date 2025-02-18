//import React from 'react';

import poetryHouses1 from '/poetryHouses/poetryHouses1.jpg';
import poetryHouses2 from '/poetryHouses/poetryHouses2.jpg';
import poetryHouses3 from '/poetryHouses/poetryHouses3.jpg';
import poetryHouses4 from '/poetryHouses/poetryHouses4.jpg';
import poetryHouses5 from '/poetryHouses/poetryHouses5.jpg';
import poetryHouses6 from '/poetryHouses/poetryHouses6.jpg';
import poetryHouses7 from '/poetryHouses/poetryHouses7.jpg';
import poetryHouses8 from '/poetryHouses/poetryHouses8.jpg';
import poetryHouses9 from '/poetryHouses/poetryHouses9.jpg';
import poetryHouses10 from '/poetryHouses/poetryHouses10.jpg';
import poetryHouses11 from '/poetryHouses/poetryHouses11.jpg';
import poetryHouses12 from '/poetryHouses/poetryHouses12.jpg';

import ImageCard from './ImageCard';


const PoetryHousesPage = () => {
  const data = [
    {  image: poetryHouses1, key: 1 },
    {  image: poetryHouses2, key: 2 },
    {  image: poetryHouses3, key: 3 },
    {  image: poetryHouses4, key: 4 },
    {  image: poetryHouses5, key: 5 },
    {  image: poetryHouses6, key: 6 },
    {  image: poetryHouses7, key: 7 },
    {  image: poetryHouses8, key: 8 },
    {  image: poetryHouses9, key: 9 },
    {  image: poetryHouses10, key: 10 },
    {  image: poetryHouses11, key: 11 },
    {  image: poetryHouses12, key: 12 },
  ];

  return (
    <div className='z-40 bg-green-50 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          بيوت شعر
          {/* Poetry House */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            نظراً لطبيعة شعوب الجزيرة العربية وتمسكهم بترائهم وتراث
            أجدادهم نقدم لكم بيوت شعر تقوم مؤسستنا في عملها, فقد
            كانت بيوت الشعر العربية من أهم منتجاتنا واهتماماتنا, الخيام
            الثابتة بطرازها العربي الأصيل والتي تستخدم كمجالس
            للضيافة يتم تركيبها إما بحديقة المنزل أو على أسطح المنازل
            أو في باحات المناطق الترفيهية والاستراحات أو كملحق
            إضافي للمطاعم والمقاهي.

            مواصفات بيوت الشعر:
          </p>
          <p className='md:text-lg text-base'>
            مواصفات بيت الشعر عازل مائي كوري – شعر مخطط نخبة
            أولى + غطاء من مادة 01/6 – ملتن – عازل حراري وطني –
            إرتفاع 2.5م أو حسب الطلب – شلش دائري قماش داخلي
            يتراوح سعر المتر بين 20-15 ريال – فرانشات – دناديش الأعمدة
            8×8×1.25ملي كورنيش على العقال الخارجي حسب الاتفاق –
            الصناديق20*20*1.25 ملي التيوبات2*4*1.25 ملي –
            المواسير1.5 بوصة 1.25 ملي – خشب سميك اندونيسي وملي
            – عمل واجهات زجاج فتحة الباب * فتحة المكيف الكهرباء +
            الالمنيوم + الفرش + الأرضيات على العميل فتحة شباك حسب
            الطلب

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

export default PoetryHousesPage;
