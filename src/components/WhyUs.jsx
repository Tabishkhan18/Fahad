import React from 'react'
import '../App.css'
import cardImage1 from '/card1.jpg';
import cardImage2 from '/card2.jpg';
import cardImage3 from '/card3.jpg';
import cardImage4 from '/card4.jpg';
import cardImage5 from '/card5.jpg';
import cardImage6 from '/card6.jpg';
import { FaQuestionCircle } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { MdFiberNew } from "react-icons/md";
import { SiBlueprint } from "react-icons/si";
import { AiOutlineSafety } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import SmallCard from './SmallCard';

const WhyUs = () => {
    return (
            <div className="smallCards pattern flex lg:flex-row flex-col flex-wrap justify-center items-center py-40 lg:gap-20 gap-10">
                <SmallCard
                    cardImage={cardImage1}
                    // Why Choose Us
                    title="لماذا تختارنا"
                    description="مؤسسة تنمية المصادر للمقاولات العامة للترميم والتشطيب حسب الطلب من خلال عمال ,ومهندسين مدنين ,ومهندسين إدارة,صيانة , ومجالات اخري , وتعتمد علي التنظيم والتنفيذ..."
                    Icon={FaQuestionCircle}
                />
                <SmallCard
                    cardImage={cardImage2}
                    // Best Quality
                    title="الأفضل جودة"
                    description="نعتمد علي نتائج دراسة السوق ,ومتطلباتة ,والطاقة الاستيعابية للمشاريع ..."
                    Icon={FaHeartCircleCheck}
                />
                <SmallCard
                    cardImage={cardImage3}
                    // The Walk
                    title="الــــنزهة"
                    description="نقوم بدراسة الجداول التسويقية الخاصة بمشروعك وتحديد السعر المتوقع لمتطلبات المسروع ..."
                    Icon={MdFiberNew}
                />
                <SmallCard
                    cardImage={cardImage4}
                    // Strategy and Planning
                    title="الإستراتيجية و التخطيط"
                    description="نحدد انتاج المشروع على اعتبار التنبؤ بحجم الطلب والمبيعاتالخاصة بناتج هذا المشروع"
                    Icon={SiBlueprint}
                />
                <SmallCard
                    cardImage={cardImage5}
                    // Safety and Security
                    title="السلامة والأمان"
                    description="نتاج الإجرات الوقائية الارشادات العملية التي يمارسها رجل الأمن والسلامة في المؤسسة"
                    Icon={AiOutlineSafety}
                />
                <SmallCard
                    cardImage={cardImage6}
                    // Customer Care
                    title="الاهتمام بالزبائن"
                    description=".الاهتمام هو جوهر جميع العلاقات لدى مؤسستنا ما يؤدي إلى تعزيز مستوى رضا العملاء"
                    Icon={IoCall}
                />

            </div>
    )
}

export default WhyUs
