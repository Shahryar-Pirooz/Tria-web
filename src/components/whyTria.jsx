import { easy, star, not_save, strong } from '../assets'
export default function WhyTria() {
    const cards = [
        {
            img: not_save,
            alt: 'Not Save icon',
            title1: 'Nothing will be<br/>saved anywhere!',
            title2: 'Your data is safe',
            text: 'Tria generates passwords<br/>without using any data bank.',
        },
        {
            img: strong,
            alt: 'strong icon',
            title1: 'Super strong<br/>passwords!',
            title2: 'Without the need to remember ',
            text: 'Tria will give you a password that will take<br/><strong>7 trillion</strong> years to crack!',
        },
        {
            img: easy,
            alt: 'easy icon',
            title1: 'Convenient<br/>and easy to use!',
            title2: 'Available online and offline',
            text: 'All you need to work with tria<br/>are nothing but 3 simple inputs!',
        },
    ]
    return (
        <div className="relative">
            <img className="absolute right-1/2 -top-36" src={star} alt="" />
            <img className="absolute -left-32 top-52" src={star} alt="" />
            <img
                className="absolute -bottom-32 right-0 rotate-45"
                src={star}
                alt=""
            />
            <div className="relative h-fit min-h-full w-screen text-center text-white md:p-10">
                <div className=" flex h-full w-full flex-col space-y-10 rounded-[3rem] bg-opacity-20 bg-gradient-to-tr from-[#388CE7]/75 via-[#399FD9]/75 to-[#3BDEA8]/75 bg-clip-padding py-10 px-5 backdrop-blur-sm backdrop-filter">
                    <h3 className="w-full text-3xl font-semibold">
                        And the question is ...{' '}
                        <span className="font-bold">Why Tria?</span>
                    </h3>
                    <div className="flex flex-col flex-nowrap justify-around space-y-10 md:flex-row md:space-x-10">
                        {cards.map((card) => {
                            return (
                                <div className="flex flex-1 flex-col justify-center space-y-2">
                                    <img
                                        className="max-h-36"
                                        src={card.img}
                                        alt={card.alt}
                                    />
                                    <h3
                                        dangerouslySetInnerHTML={{
                                            __html: card.title1,
                                        }}
                                        className="text-xl font-extrabold"
                                    ></h3>
                                    <p className="font-lg font-semibold">
                                        {card.title2}
                                    </p>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: card.text,
                                        }}
                                    ></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
