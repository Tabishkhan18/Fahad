//import React from 'react';

import winterSeatingUmbrella1 from '/winterSeatingUmbrella/winterSeatingUmbrella1.jpg';
import winterSeatingUmbrella2 from '/winterSeatingUmbrella/winterSeatingUmbrella2.jpg';
import winterSeatingUmbrella3 from '/winterSeatingUmbrella/winterSeatingUmbrella3.jpg';
import winterSeatingUmbrella4 from '/winterSeatingUmbrella/winterSeatingUmbrella4.jpg';
import winterSeatingUmbrella5 from '/winterSeatingUmbrella/winterSeatingUmbrella5.jpg';
import winterSeatingUmbrella6 from '/winterSeatingUmbrella/winterSeatingUmbrella6.jpg';
import winterSeatingUmbrella7 from '/winterSeatingUmbrella/winterSeatingUmbrella7.jpg';
import winterSeatingUmbrella8 from '/winterSeatingUmbrella/winterSeatingUmbrella8.jpg';
import winterSeatingUmbrella9 from '/winterSeatingUmbrella/winterSeatingUmbrella9.jpg';
import winterSeatingUmbrella10 from '/winterSeatingUmbrella/winterSeatingUmbrella10.jpg';
import winterSeatingUmbrella11 from '/winterSeatingUmbrella/winterSeatingUmbrella11.jpg';

import ImageCard from './ImageCard';


const WinterSeatingUmbrellaPage = () => {
  const data = [
    { title: "Tags and Titles", image: winterSeatingUmbrella1, key: 1 },
    { title: "Tags and Titles", image: winterSeatingUmbrella2, key: 2 },
    { title: "Tags and Titles", image: winterSeatingUmbrella3, key: 3 },
    { title: "Tags and Titles", image: winterSeatingUmbrella4, key: 4 },
    { title: "Tags and Titles", image: winterSeatingUmbrella5, key: 5 },
    { title: "Tags and Titles", image: winterSeatingUmbrella6, key: 6 },
    { title: "Tags and Titles", image: winterSeatingUmbrella7, key: 7 },
    { title: "Tags and Titles", image: winterSeatingUmbrella8, key: 8 },
    { title: "Tags and Titles", image: winterSeatingUmbrella9, key: 9 },
    { title: "Tags and Titles", image: winterSeatingUmbrella10, key: 10 },
    { title: "Tags and Titles", image: winterSeatingUmbrella11, key: 11 },
  ];

  return (
    <div className='z-50 bg-green-100 text-green-950 py-40'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          مظلات الجلوس الشتوية
          {/* Winter Seating Umbrella */}
        </h1>
        <div className='flex flex-col gap-5'>
          <p className='md:text-lg text-base'>
            جلسات الخارجية في فصل الشتاء؟ لا تقلق، نحن هنا للمساعدة! نحن متخصصون في تركيب مظلات الجلسات الشتوية التي توفر لك الراحة والحماية من العوامل الجوية القاسية.

            تتميز مظلاتنا بالمتانة والجودة العالية، وتصميمها العصري الذي يناسب أي مساحة خارجية. سواء كنت ترغب في إقامة منطقة جلوس مريحة في حديقتك أو تراسك أو حتى في مطعمك أو مقهاك، فإننا نوفر لك الحل الأمثل.
          </p>
          <p className='md:text-lg text-base'>
            بفضل تركيباتنا الاحترافية وفريق العمل المؤهل لدينا، يمكننا تنفيذ المشروع بسرعة وكفاءة. نحن نهتم بتلبية احتياجاتك وتحقيق رؤيتك، ونضمن رضاك التام.
          </p>
          <p className='md:text-lg text-base'>
            لا تضيع الفرصة للاستمتاع بالأجواء الجميلة في فصل الشتاء. اتصل بنا اليوم للحصول على استشارة مجانية وعرض أسعار مخصص لمشروعك. اجعل من جلساتك الشتوية تجربة لا تنسى
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

export default WinterSeatingUmbrellaPage;
