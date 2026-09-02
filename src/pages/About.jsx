import React from 'react'
import about from "/assets/About/about-banner.png"
import PageHeader from '../sections/PageHeader';
import FeaturesDetails from '../sections/FeaturesDetails';
import SetBg from '../sections/SetBg';
import aboutCard from "/assets/About/a1.jpg"
import video from "/assets/About/bg-video.mp4"

const About = () => {
    const headerData = [
        {
            heading: "#StayCool",
            desc: "Save more with coupons & up to 70% off!",
            img: about,
        },
    ];
    return (
        <article className='pt-[10vh]' >
            <PageHeader HData={headerData} />

            {/* Who we are ?,  section starts here */}
            <article className='px-20 py-10 relative' >
                <section className='flex flex-wrap justify-between' >
                    <section className='relative w-[40%] h-auto '>
                        <SetBg bg={aboutCard} />
                    </section>

                    <section className='w-1/2 relative' >
                        <h2 className='font-extrabold text-3xl' >Who Are We ?</h2>

                        <p className='text-[#465b52] text-[1.2rem] font-semibold leading-[.9] mt-4 mb-5 '
                        >
                            We are a clothing brand that epitomizes style, quality, and
                            self-expression. Rooted in our passion for fashion, we strive to
                            create garments that empower individuals to embrace their unique
                            identities and make a bold statement. Our brand is built on the
                            belief that clothing is not just about covering the body, but also
                            a means of self-discovery and creative expression. But we are more
                            than just a clothing brand. We are a community of fashion
                            enthusiasts, dreamers, and trendsetters who come together to
                            inspire and be inspired. Through our platforms and collaborations,
                            we foster a space where individuals can connect, share ideas, and
                            celebrate their love for fashion. At our core, we are committed to
                            delivering exceptional craftsmanship and attention to detail in
                            every piece we create. From the sourcing of premium materials to
                            the meticulous design process, we ensure that our garments meet
                            the highest standards of quality and durability. We believe that
                            fashion should be timeless, yet innovative, blending classic
                            aesthetics with contemporary flair.
                        </p>

                        <p className='font-bold border-black border border-dashed inline px-2 ' >
                            Come Celebrate Fashion With Us!!
                        </p>
                        <p>
                            Explore Our New Spring Collection , Head Over To Our Shop
                            Section Now !
                        </p>
                    </section>
                </section>
            </article>
            {/* Who we are ?,  section ends here */}


            {/* Vide section  starts here */}
            <section className='relative w-full flex flex-col items-center h-auto' >
                <h2 className='font-bold text-5xl pb-5  ' >Download Our 
                    <a href="#" className='text-blue-700 underline pl-3' >App </a>
                </h2>

                <section className='h-[80vh] ' >
                    <video autoPlay loop muted className='rounded-4xl h-full ' >
                        <source src={video} type='video/mp4' />
                    </video>
                </section>
            </section>
            {/* Vide section  ends here */}

            
            <FeaturesDetails />
        </article>
    )
}

export default About