import React from 'react';


const Tax = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src="https://itaxeasy.com/images/home/whatis.png" alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Income Tax</h1>
          <p>
          What is Income Tax? Income tax is a tax that is levied on the income earned by individuals and businesses. Here are the steps you can follow to calculate and pay your income tax: Determine your taxable income: Your taxable income is the amount of money you earn in a year from all sources, minus any deductions or exemptions you are eligible for. There are several types of income that are taxable, including wages, salaries, and investment income. Calculate your tax liability: Once you know your taxable income, you can use a tax calculator or tax table to determine how much tax you owe. The amount of tax you owe depends on your income level and tax filing status (single, married filing jointly, etc.).
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Tax;