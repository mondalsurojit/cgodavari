import React from 'react';
import HeroSwiper from '../components/HeroSwiper';
import PrimaryButton from '../components/ui/PrimaryButton';
import { AnimatedLogoCloud } from '../components/AnimatedLogoCloud';

const Home = () => {
    return (
        <div className="bg-gray-50">
            <HeroSwiper />

            {/* About Preview Section */}
            <section id="about" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">About cGodavari</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                                alt="Research Center"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Centre for Godavari River Basin Management & Studies
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                The cGodavari center at IIT Hyderabad is a premier research facility dedicated to comprehensive studies of the Godavari River Basin. Our multidisciplinary approach integrates hydrology, environmental science, and sustainable development to address critical water resource challenges.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Located at the Technological Research Park, our state-of-the-art facility brings together leading researchers, policymakers, and stakeholders to develop innovative solutions for one of India's most vital water resources.
                            </p>
                            <div className="grid grid-cols-3 gap-6 mb-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">50+</div>
                                    <div className="text-sm text-gray-600">Research Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">25+</div>
                                    <div className="text-sm text-gray-600">Expert Researchers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">5</div>
                                    <div className="text-sm text-gray-600">Partner Institutes</div>
                                </div>
                            </div>
                            <PrimaryButton href="#about">Read More</PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Member Institutes</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>
                <AnimatedLogoCloud />
            </section>
        </div>
    );
};

export default Home;