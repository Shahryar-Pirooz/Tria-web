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
            <img className="star1" src={star} alt="star" aria-hidden />
            <img className="star2" src={star} alt="star" aria-hidden />
            <img className="star3" src={star} alt="star" aria-hidden />
            <div className="why-tria">
                <div className="why-tria-background">
                    <h3 className="why-tria-title">
                        And the question is ...{' '}
                        <span className="font-bold">Why Tria?</span>
                    </h3>
                    <div className="why-tria-cards">
                        {cards.map((card, index) => {
                            return (
                                <div key={index} className="why-tria-card">
                                    <img
                                        className="max-h-28"
                                        src={card.img}
                                        alt={card.alt}
                                    />
                                    <h3
                                        dangerouslySetInnerHTML={{
                                            __html: card.title1,
                                        }}
                                        className="why-tria-card-title"
                                    ></h3>
                                    <p className="why-tria-card-title2">
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
