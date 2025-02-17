//import React from 'react';

import schoolUmbrella1 from '/src/assets/schoolUmbrella/schoolUmbrella1.jpg';
import schoolUmbrella2 from '/src/assets/schoolUmbrella/schoolUmbrella2.jpg';
import schoolUmbrella3 from '/src/assets/schoolUmbrella/schoolUmbrella3.jpg';
import schoolUmbrella4 from '/src/assets/schoolUmbrella/schoolUmbrella4.jpg';
import schoolUmbrella5 from '/src/assets/schoolUmbrella/schoolUmbrella5.jpg';
import schoolUmbrella6 from '/src/assets/schoolUmbrella/schoolUmbrella6.jpg';
import schoolUmbrella7 from '/src/assets/schoolUmbrella/schoolUmbrella7.jpg';
import schoolUmbrella8 from '/src/assets/schoolUmbrella/schoolUmbrella8.jpg';
import schoolUmbrella9 from '/src/assets/schoolUmbrella/schoolUmbrella9.jpg';
import schoolUmbrella10 from '/src/assets/schoolUmbrella/schoolUmbrella10.jpg';
import schoolUmbrella11 from '/src/assets/schoolUmbrella/schoolUmbrella11.jpg';
import schoolUmbrella12 from '/src/assets/schoolUmbrella/schoolUmbrella12.jpg';
import schoolUmbrella13 from '/src/assets/schoolUmbrella/schoolUmbrella13.jpg';
import schoolUmbrella14 from '/src/assets/schoolUmbrella/schoolUmbrella14.jpg';

import ImageCard from './ImageCard';


const SchoolUmbrellaPage = () => {
  const data = [
    { title: "Tags and Titles", image: schoolUmbrella1, key: 1 },
    { title: "Tags and Titles", image: schoolUmbrella2, key: 2 },
    { title: "Tags and Titles", image: schoolUmbrella3, key: 3 },
    { title: "Tags and Titles", image: schoolUmbrella4, key: 4 },
    { title: "Tags and Titles", image: schoolUmbrella5, key: 5 },
    { title: "Tags and Titles", image: schoolUmbrella6, key: 6 },
    { title: "Tags and Titles", image: schoolUmbrella7, key: 7 },
    { title: "Tags and Titles", image: schoolUmbrella8, key: 8 },
    { title: "Tags and Titles", image: schoolUmbrella9, key: 9 },
    { title: "Tags and Titles", image: schoolUmbrella10, key: 10 },
    { title: "Tags and Titles", image: schoolUmbrella11, key: 11 },
    { title: "Tags and Titles", image: schoolUmbrella12, key: 12 },
    { title: "Tags and Titles", image: schoolUmbrella13, key: 13 },
    { title: "Tags and Titles", image: schoolUmbrella14, key: 14 },
  ];

  return (
    <div className='z-50 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          مظلات المدارس
          {/* School Umbrellas */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            يتم تركبيها لحماية الطلاب من أشعة الشمس المباشرة أو
            للكافتيرا والمنتزهات بداخل المدرسة, نوفر لكم مظلات مدارس
            بإشكال مناسبة وأحجام والوان مختلفة حسب الطلب .

          </p>
          <p className='md:text-lg text-base'>
            توريد وتركيب مظلات للمدارس والجامعات بالمملكة
            الحكومية والخاصة بنظام الدفع الكاش والتعميد
            بمواصفات معتمدة من التربيه والتعليم بتغطية من مادة pvc
            ومادة ال pvdf والصاج المعرج ساندوتش بانل
            والهناجر الحديديه بجميع انواعها بمواصفات عالية
            الجودة طبقا لمعايير وزارة التربية والتعليم بالمملكة
            وبتراخيص معتمدة من وزارة التجارة والصناعه لطلب
            تركيب مظلات المدارس بمواصفات معتمده من التربية .

          </p>
          <p className='md:text-lg text-base'>
            مواصفات مظلات المدارس

            مظلات مقاومة للحرارة

            مظلات بإشكال والوان حسب الطلب

            ضمان عالى

            مظلات بإشكال مختلفة مثل أشكال مضلات الكافتيرا
            مظلات حديدية

            مظلات ذات عازل شفاف قماشية

            مقاومة للحرارة والرياح

            مصنوعة من مادة pvc المتميزة بالجودة والضمان
            وغيرها من العديد من المميزات
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

export default SchoolUmbrellaPage;
