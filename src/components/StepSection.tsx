import Image, { StaticImageData } from 'next/image'
import React from 'react'
import img from '@/assets/supports.webp'

type StepProps = {
    stepNumber: number;
    title: string;
    description: string;
    img: StaticImageData;
    rowStyle?: string;
    lineColor?: string;
};

const Step: React.FC<StepProps> = ({
    stepNumber,
    title,
    description,
    img,
    rowStyle = 'flex-row',
    lineColor = 'bg-uicore-primary',
}) => {
    return (
        <div className={`relative flex flex-col justify-between md:${rowStyle} pl-10`}>
            <div className="w-full p-4">
                <Image src={img} alt='' width={350} className='m-auto' />
            </div>

            <div className=" md:relative flex items-center justify-center w-24 ">
                <div className={`absolute ${lineColor} w-2 h-full left-3 top-0`}></div>
                <p className={`absolute -left-2 top-0 md:top-auto flex items-center justify-center text-white h-12 w-12 rounded-full font-semibold z-10 ${lineColor}`}>{stepNumber}</p>
            </div>

            <div className="w-full flex flex-col justify-center p-4">
                <h1 className='text-3xl md:text-4xl text-uicore-dark leading-tight font-medium mb-8' >{title}</h1>
                <p className='text-uicore-body font-medium mb-10'>{description}</p>
            </div>
        </div>
    );
};







const StepSection = () => {
    return (
        <section className='max-w-screen-xl m-auto py-20 px-4'>
            <Step
                stepNumber={1}
                title="Sign Up for OnlyBank: Embark on Your Financial Journey with Confidence!"
                description="Sign up for OnlyBank today to enjoy seamless transactions and personalized financial solutions. Experience banking redefined with us!"
                img={img}
                lineColor="bg-uicore-primary"
            />

            <Step
                stepNumber={2}
                title="Unlock a Personalized Hub: Explore Your Dashboard with OnlyBank"
                description="Unlock a personalized financial hub at your fingertips. Dive into a world of insights, transactions, and control, tailored just for you."
                img={img}
                rowStyle="flex-row-reverse"
                lineColor="bg-blue-700"
            />

            <Step
                stepNumber={3}
                title="Seamless Integration: Connect Your Accounts with OnlyBank"
                description="Seamlessly integrate your accounts for a unified financial view. Effortlessly manage and monitor your finances in one central location."
                img={img}
                lineColor="bg-gray-300"
            />

            <Step
                stepNumber={4}
                title="Empower Your Finances: Set Up Your Budget with OnlyBank"
                description="Take charge of your financial goals with ease. Set up and track your budget effortlessly, putting you in control of your financial journey."
                img={img}
                rowStyle="flex-row-reverse"
                lineColor="bg-gray-300"
            />

            <Step
                stepNumber={5}
                title="Stay Informed: Monitor Your Financial Health with OnlyBank"
                description="Stay informed and proactive. Monitor your financial health in real-time, empowering you to make informed decisions and achieve your aspirations."
                img={img}
                lineColor="bg-gray-300"
            />
        </section>
    )
}

export default StepSection