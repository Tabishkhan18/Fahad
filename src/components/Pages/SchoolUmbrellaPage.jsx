//import React from 'react';

import schoolUmbrella1 from '/schoolUmbrella/schoolUmbrella1.jpg';
import schoolUmbrella2 from '/schoolUmbrella/schoolUmbrella2.jpg';
import schoolUmbrella3 from '/schoolUmbrella/schoolUmbrella3.jpg';
import schoolUmbrella4 from '/schoolUmbrella/schoolUmbrella4.jpg';
import schoolUmbrella5 from '/schoolUmbrella/schoolUmbrella5.jpg';
import schoolUmbrella6 from '/schoolUmbrella/schoolUmbrella6.jpg';
import schoolUmbrella7 from '/schoolUmbrella/schoolUmbrella7.jpg';
import schoolUmbrella8 from '/schoolUmbrella/schoolUmbrella8.jpg';
import schoolUmbrella9 from '/schoolUmbrella/schoolUmbrella9.jpg';
import schoolUmbrella10 from '/schoolUmbrella/schoolUmbrella10.jpg';
import schoolUmbrella11 from '/schoolUmbrella/schoolUmbrella11.jpg';
import schoolUmbrella12 from '/schoolUmbrella/schoolUmbrella12.jpg';
import schoolUmbrella13 from '/schoolUmbrella/schoolUmbrella13.jpg';
import schoolUmbrella14 from '/schoolUmbrella/schoolUmbrella14.jpg';

import ImageCard from './ImageCard';


const SchoolUmbrellaPage = () => {
  const data = [
    {  image: schoolUmbrella1, key: 1 },
    {  image: schoolUmbrella2, key: 2 },
    {  image: schoolUmbrella3, key: 3 },
    {  image: schoolUmbrella4, key: 4 },
    {  image: schoolUmbrella5, key: 5 },
    {  image: schoolUmbrella6, key: 6 },
    {  image: schoolUmbrella7, key: 7 },
    {  image: schoolUmbrella8, key: 8 },
    {  image: schoolUmbrella9, key: 9 },
    {  image: schoolUmbrella10, key: 10 },
    {  image: schoolUmbrella11, key: 11 },
    {  image: schoolUmbrella12, key: 12 },
    {  image: schoolUmbrella13, key: 13 },
    {  image: schoolUmbrella14, key: 14 },
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
        {data.map(({  image, key }) => (
          <ImageCard key={key} image={image} />
        ))}
      </div>
    </div>
  );
}

export default SchoolUmbrellaPage;
