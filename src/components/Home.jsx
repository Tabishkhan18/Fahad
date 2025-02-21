// import React from 'react'
import '../App.css'
import WhyUs from './WhyUs';
import bgImage from '/bg.jpg';
import mobilebgImage from '/mobilebg.jpg';
import { IoCall } from "react-icons/io5";

const Home = () => {
  return (
    <div className='header z-40' id='home'>
      <img className='bg lg:flex justify-center hidden' src={bgImage} alt="" />
      <img className='mobilebg lg:hidden flex' src={mobilebgImage} alt="" />

      <div className="home w-full flex flex-col items-end">
        <div className="title md:w-2/3 md:py-20 md:px-10 py-14 px-5 md:mx-28 mx-10 my-36 gradientBg rounded-2xl text-white flex flex-col items-end">
          <h1 className='py-2 lg:text-7xl text-4xl font-bold uppercase text-end'>المظلات والمظلات والأبواب</h1>
          <p className='py-5 text-end lg:text-3xl text-lg'>الثقة والكفاءة والمصداقية</p>
          <p className='lg:text-lg py-5 text-end text-wrap  text-base'>مؤسسة النفيعي للمظلات والسواتر تقدم لكم ارقى وأجود اشكال المظلات والسواتر بجميع اصنافها نقوم بتركيب افضل واجمل التشكيلات الهندسية وبتوريد مواد  عالية الجودة وبدقة متكاملة في العمل </p>
          <p className='md:text-lg pb-5 text-end text-wrap text-base'>العنوان الرائيسي الرياض نتواجد في جميع مدن المملكة العربية السعودية</p>
          <p className='md:text-lg pb-5 text-end text-wrap text-base'>
            جوال:
            <span className='hover:underline cursor-pointer'>0510345545</span>
          </p>
          <a href="#" className='flex lg:justify-end justify-center  w-full'>
            <button className='bg-green-500 cursor-pointer border-2 rounded-xl border-green-500 hover:border-white hover:bg-green-800 my-2 md:text-lg text-sm text-white lg:px-24 px-16 py-2 transition-all duration-200 ease-in-out'>
              لتواصل على الواتساب</button>
          </a>
        </div>

        {/* About */}
        <div className='z-10 w-full pattern text-green-950' id='about'>
          <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
            <h1 className='md:text-5xl text-2xl text-green-500 font-semibold uppercase'>
              النفيعي للمظلات وسواتر
            </h1>
            <p className='md:text-lg text-base'>لتوريد وتركيب المظلات والسواتر وجميع اعمال الحدادة</p>
          </div>
          <div className="detailCard rounded-2xl text-end max-w-fit max-h-fit lg:mx-20 mx-10 my-40 p-10">
            <p className='py-5 text-green-500'>
              اعمالنا المظلات السواتر والهناجر والبرجولات  وجميع اعمال الحدادة  لسنا الوحيدون  ولا كننا الافضل شعارنا الاتقان في العمل وسرعة  التنفيذ
            </p>
            <p className='py-5'>
              لدينا فريق متخصص بتحليل
              متطلبات المشروع منهجية وتجهيز القوى العاملة لتنفيذ
              كافة الأعمال. ومن أولى الأعمال التي يقوم بها هذا
              الفريق وضع الجدول الزمني والتخطيط اللازمين لتنفيذ
              أعمال المشروع. وبالإضافة إلى ذلك، يقوم فريق بتحديد
              وحصر النفقات وذلك للإشراف على عملية التنفيذ من وقت
              البدء فيه وحتى تسليمه إلى المالك.
              يقوم فريق المشتريات والمهندسين لدى المؤسسة بتوفير
              وتوريد المواد اللازمة لتنفيذ مشاريعها بأسعار تنافسية
              وتكون من مسؤوليتهم دراسة الأسواق وتقدير الأسعار
              ووضع البرامج والمخططات لشراء تلك المواد مع مواكبة
              المستجدات والأمور الطارئة وأحدث ما نزل إلى الأسواق
              من مواد
            </p>
            <p className="flex text-green-950 font-semibold justify-end items-center w-full gap-2">
              <IoCall />
              اتصل بنا
            </p>
            <p className="text-green-950 text-end cursor-pointer inline hover:text-green-500 hover:underline">
              0510345545
            </p>
          </div>

          <div className='md:flex hidden'>
            <WhyUs/>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Home