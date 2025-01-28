import React from 'react';
import catImg from '../../assets/mision/happyCat.jpg'
const About = () => {
    return (
        <div>
            <section className="bg-gray-100 py-16 px-6 mt-16">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        About Us 🐾
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        We believe that every pet deserves a loving home. Our mission is to connect caring individuals with adorable pets looking for a forever family. Join us in giving them a better life.
                    </p>

                    {/* Image Section */}
                    <div className="flex justify-center mb-6">
                        <img
                            src={catImg}
                            alt="About Us - Pet Adoption"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Statistics or Mission */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-orange-600">500+</h3>
                            <p className="text-gray-700">Pets Adopted</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-orange-600">300+</h3>
                            <p className="text-gray-700">Happy Families</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-orange-600">100%</h3>
                            <p className="text-gray-700">Love & Care</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;