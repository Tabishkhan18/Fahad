//import React from 'react';

import remoteControlAwnings1 from '/src/assets/remoteControlAwnings/remoteControlAwnings1.jpg';
import remoteControlAwnings2 from '/src/assets/remoteControlAwnings/remoteControlAwnings2.jpg';
import remoteControlAwnings3 from '/src/assets/remoteControlAwnings/remoteControlAwnings3.jpg';
import remoteControlAwnings4 from '/src/assets/remoteControlAwnings/remoteControlAwnings4.jpg';
import remoteControlAwnings5 from '/src/assets/remoteControlAwnings/remoteControlAwnings5.jpg';
import remoteControlAwnings6 from '/src/assets/remoteControlAwnings/remoteControlAwnings6.jpg';
import remoteControlAwnings7 from '/src/assets/remoteControlAwnings/remoteControlAwnings7.jpg';
import remoteControlAwnings8 from '/src/assets/remoteControlAwnings/remoteControlAwnings8.jpg';
import remoteControlAwnings9 from '/src/assets/remoteControlAwnings/remoteControlAwnings9.jpg';
import remoteControlAwnings10 from '/src/assets/remoteControlAwnings/remoteControlAwnings10.jpg';
import remoteControlAwnings11 from '/src/assets/remoteControlAwnings/remoteControlAwnings11.jpg';
import remoteControlAwnings12 from '/src/assets/remoteControlAwnings/remoteControlAwnings12.jpg';

import ImageCard from './ImageCard';


const RemoteControlAwningsPage = () => {
  const data = [
    { title: "Tags and Titles", image: remoteControlAwnings1, key: 1 },
    { title: "Tags and Titles", image: remoteControlAwnings2, key: 2 },
    { title: "Tags and Titles", image: remoteControlAwnings3, key: 3 },
    { title: "Tags and Titles", image: remoteControlAwnings4, key: 4 },
    { title: "Tags and Titles", image: remoteControlAwnings5, key: 5 },
    { title: "Tags and Titles", image: remoteControlAwnings6, key: 6 },
    { title: "Tags and Titles", image: remoteControlAwnings7, key: 7 },
    { title: "Tags and Titles", image: remoteControlAwnings8, key: 8 },
    { title: "Tags and Titles", image: remoteControlAwnings9, key: 9 },
    { title: "Tags and Titles", image: remoteControlAwnings10, key: 10 },
    { title: "Tags and Titles", image: remoteControlAwnings11, key: 11 },
    { title: "Tags and Titles", image: remoteControlAwnings12, key: 12 },
  ];

  return (
    <div className='z-50 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          مظلات التحكم عن بعد
          {/* Remote Control Awnings */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            مظلات متحركة: هذه الكلمة الأساسية تصف وظيفة المظلة الأساسية وهي الحركة.
            ريموت كنترول: تشير إلى طريقة التحكم بالمظلة عن بعد.
            كهربائية: توضح أن المظلة تعمل بالكهرباء.
            أوتوماتيكية: مرادف للكهربائية، وتشير إلى التشغيل التلقائي.
            ظلال: تدل على الوظيفة الأساسية للمظلة وهي توفير الظل والحماية من الشمس.
            حماية: تشير إلى الحماية من الشمس والأمطار والعوامل الجوية الأخرى.
            حدائق: مكان شائع لتركيب هذه المظلات.
            مطاعم: مكان آخر شائع للاستخدام.
            تراس: يمكن استخدامها في تراسات المنازل والشقق.
            فنادق: تستخدم في الفنادق والمرافق السياحية.
            أحواش: مناسبة للأحواش الخلفية والحدائق الأمامية.
            سهلة الاستخدام: من الميزات الرئيسية لهذه المظلات.
            عصرية: تصميمها العصري يناسب مختلف الديكورات.

          </p>
          <p className='md:text-lg text-base'>
            مقاومة للعوامل الجوية: تدل على متانة المظلة وقدرتها على تحمل العوامل الجوية.
            مظلات خارجية: تحديد نوع المكان الذي توضع فيه المظلة.
            مظلات داخلية: في بعض الحالات يمكن استخدامها في الأماكن الداخلية.
            مظلات سيارات: نوع خاص من المظلات لحماية السيارات.
            أسعار مظلات متحركة: للبحث عن أسعار مختلفة.
            تركيب مظلات: للبحث عن شركات متخصصة في التركيب.
            صور توضيحية:
            نصائح إضافية:

          </p>
          <p className='md:text-lg text-base'>
            استخدم مزيج من الكلمات المفتاحية: للحصول على نتائج بحث أكثر دقة، جرب استخدام عدة كلمات مفتاحية معًا مثل “مظلات متحركة بالريموت للحدائق” أو “أسعار مظلات متحركة كهربائية”.
            استخدم عبارات البحث الطويلة: كلما كانت عبارة البحث أطول وأكثر تحديدًا، كانت النتائج أكثر دقة.
            استخدم أدوات البحث المتقدمة: تقدم محركات البحث أدوات متقدمة مثل البحث حسب الصورة أو البحث حسب الموقع الجغرافي.
            مثال على عبارات بحث:
            أفضل أنواع المظلات المتحركة بالريموت
            تركيب مظلات متحركة في الرياض
            أسعار مظلات متحركة للمطاعم
            مظلات متحركة مقاومة للصدأ
            مظلات متحركة بألوان مختلفة.

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

export default RemoteControlAwningsPage;
