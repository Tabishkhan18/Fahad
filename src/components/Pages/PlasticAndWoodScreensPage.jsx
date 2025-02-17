//import React from 'react';

import plasticAndWoodScreens1 from '/plasticAndWoodScreens/plasticAndWoodScreens1.jpg';
import plasticAndWoodScreens2 from '/plasticAndWoodScreens/plasticAndWoodScreens2.jpg';
import plasticAndWoodScreens3 from '/plasticAndWoodScreens/plasticAndWoodScreens3.jpg';
import plasticAndWoodScreens4 from '/plasticAndWoodScreens/plasticAndWoodScreens4.jpg';
import plasticAndWoodScreens5 from '/plasticAndWoodScreens/plasticAndWoodScreens5.jpg';
import plasticAndWoodScreens6 from '/plasticAndWoodScreens/plasticAndWoodScreens6.jpg';
import plasticAndWoodScreens7 from '/plasticAndWoodScreens/plasticAndWoodScreens7.jpg';
import plasticAndWoodScreens8 from '/plasticAndWoodScreens/plasticAndWoodScreens8.jpg';
import plasticAndWoodScreens9 from '/plasticAndWoodScreens/plasticAndWoodScreens9.jpg';
import plasticAndWoodScreens10 from '/plasticAndWoodScreens/plasticAndWoodScreens10.jpg';
import plasticAndWoodScreens11 from '/plasticAndWoodScreens/plasticAndWoodScreens11.jpg';
import plasticAndWoodScreens12 from '/plasticAndWoodScreens/plasticAndWoodScreens12.jpg';

import ImageCard from './ImageCard';


const PlasticAndWoodScreensPage = () => {
  const data = [
    { title: "Tags and Titles", image: plasticAndWoodScreens1, key: 1 },
    { title: "Tags and Titles", image: plasticAndWoodScreens2, key: 2 },
    { title: "Tags and Titles", image: plasticAndWoodScreens3, key: 3 },
    { title: "Tags and Titles", image: plasticAndWoodScreens4, key: 4 },
    { title: "Tags and Titles", image: plasticAndWoodScreens5, key: 5 },
    { title: "Tags and Titles", image: plasticAndWoodScreens6, key: 6 },
    { title: "Tags and Titles", image: plasticAndWoodScreens7, key: 7 },
    { title: "Tags and Titles", image: plasticAndWoodScreens8, key: 8 },
    { title: "Tags and Titles", image: plasticAndWoodScreens9, key: 9 },
    { title: "Tags and Titles", image: plasticAndWoodScreens10, key: 10 },
    { title: "Tags and Titles", image: plasticAndWoodScreens11, key: 11 },
    { title: "Tags and Titles", image: plasticAndWoodScreens12, key: 12 },
  ];

  return (
    <div className='z-50 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          سواتر بلاستيكية
          {/* Plastic Screens */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            السواتر الخشبية تنطبق هذه التصاميم على عمل
            الاسقف والسواتر الجانبيه على الاسوار والحواجز الارضية
            باكثر من 8 الوان رائعه وبامكانكم عمل الغرف والاكواخ
            ومداخل الفلل باشكال راقيه تلبي اهدافكم من خلال
            المسه الديكوريه لمنزلك.

            مواصفات السواتر الخشبية:

            لا تساعد على التاكل او الصدى او التكسر

            معالجة بالوان من نفس التصنيع ونضمن ثبات اللون وعدم تغيره
            مع مرور السنين

            متانة وثبات في اعمال التركيب ويتم التثبيت بطرق هندسيه
            مدروسه لكل سور على حده
            يتم معالجة نوعية الدهان للهيكل الحديد بالوان مطابقة للاخشاب البلاستيكية بنسبة 100٪

          </p>
          <p className='md:text-lg text-base'>
            سماكات حديد عالية للهيكل المعدني للسواتر

            يتم معالجة نوعية الدهان للهيكل الحديد بالوان مطابقة
            للاخشاب بنسبة 100٪

            سماكات حديد عالية للهيكل المعدني للسواتر

            مميزات السواتر الخشبية:

            تحجب الرؤية بنسبة 100٪

            توفر نسبة حماية اضافية للمنازل والبيوت والفلل والقصور
            والمدارس وغيرها


          </p>
          <p className='md:text-lg text-base'>

            تتناسب مع جميع انواع المناخ مثل الرطوبة والحرارة المرتفعه
            وبرودة الجو

            اشكال عصرية بالوان مناسبة تتوفر باكثر من 8 الوان مختلفة
            فخامة بالاشكال ومنظر رائع للفلة والمنزل والبيت

            تناسب اماكن السباحه لعمل الحماية حول المسبح او عمله
            كحجب الرؤية بين الجيران

            امكانية عمل سواتر اخشاب متحركه بين اقسام الرجال والنساء
            في الاستراحات وغيرها
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

export default PlasticAndWoodScreensPage;
