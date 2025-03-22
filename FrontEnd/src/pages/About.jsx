import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1="ABOUT " text2="US" />
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className="w-full md:max-w-[450px]" src={assets.banner2} />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur volutpat sagittis magna, eget vehicula odio
                        luctus in. Etiam vel massa ullamcorper, porta sapien
                        eget, aliquam nulla. Sed ut aliquet lorem, vitae sodales
                        quam. Maecenas lobortis vulputate dapibus. Praesent
                        consectetur ornare ex, id bibendum quam placerat et. Sed
                        non arcu ligula. Quisque eleifend ante a scelerisque
                        eleifend. Suspendisse potenti. Proin bibendum nunc sem,
                        vel ullamcorper elit porta et. Nullam ultrices, mi at
                        sodales porta, quam sem euismod magna, eget vestibulum
                        nisi libero a odio. Phasellus tincidunt orci eget arcu
                        dignissim dignissim. Maecenas sit amet bibendum enim, at
                        facilisis erat.
                    </p>
                    <p>
                        Quisque nec velit dictum, sagittis arcu id, dignissim
                        leo. Maecenas blandit, sapien sed fringilla facilisis,
                        lectus ipsum dictum dui, in ultricies turpis nisl nec
                        massa. Aliquam sed justo risus. Fusce nec malesuada
                        turpis. Mauris a turpis ac sapien malesuada molestie.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Curabitur ut libero
                        efficitur, malesuada nunc in, pretium turpis.
                    </p>
                    <b className="text-gray-800">Our Mission</b>
                    <p>
                        Quisque nec velit dictum, sagittis arcu id, dignissim
                        leo. Maecenas blandit, sapien sed fringilla facilisis,
                        lectus ipsum dictum dui, in ultricies turpis nisl nec
                        massa. Aliquam sed justo risus. Fusce nec malesuada
                        turpis. Mauris a turpis ac sapien malesuada molestie.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Curabitur ut libero
                        efficitur, malesuada nunc in, pretium turpis.
                    </p>
                </div>
            </div>
            <div className="text-4xl py-4">
                <Title text1={"Why "} text2={"Choose US"} />
            </div>
            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p className="text-gray-600">
                        Quisque nec velit dictum, sagittis arcu id, dignissim
                        leo. Maecenas blandit, sapien sed fringilla facilisis,
                        lectus ipsum dictum dui, in ultricies turpis nisl nec
                        massa. Aliquam sed justo risus. Fusce nec malesuada
                        turpis. Mauris a turpis ac sapien malesuada molestie.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Curabitur ut libero
                        efficitur, malesuada nunc in, pretium turpis.
                    </p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience:</b>
                    <p className="text-gray-600">
                        Quisque nec velit dictum, sagittis arcu id, dignissim
                        leo. Maecenas blandit, sapien sed fringilla facilisis,
                        lectus ipsum dictum dui, in ultricies turpis nisl nec
                        massa. Aliquam sed justo risus. Fusce nec malesuada
                        turpis. Mauris a turpis ac sapien malesuada molestie.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Curabitur ut libero
                        efficitur, malesuada nunc in, pretium turpis.
                    </p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p className="text-gray-600">
                        Quisque nec velit dictum, sagittis arcu id, dignissim
                        leo. Maecenas blandit, sapien sed fringilla facilisis,
                        lectus ipsum dictum dui, in ultricies turpis nisl nec
                        massa. Aliquam sed justo risus. Fusce nec malesuada
                        turpis. Mauris a turpis ac sapien malesuada molestie.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Curabitur ut libero
                        efficitur, malesuada nunc in, pretium turpis.
                    </p>
                </div>
            </div>
            <NewsletterBox />
        </div>
    );
};

export default About;
