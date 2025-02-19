import React from 'react';
import insImage from '../../assets/ins/1.webp'
import { Link } from 'react-router-dom';
const Inspire = () => {
    return (
        <section className="bg-orange-100 py-16 mt-24 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Give a Pet a Loving Home ❤️
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Every pet deserves a loving home. Adopt today and give them a better life filled with love and care.
                </p>

                {/* Inspirational Image */}
                <div className="mb-6">
                    <img
                        src={insImage}
                        alt="Adopt a Pet"
                        className="rounded-lg shadow-lg mx-auto md:h-[300px]"
                    />
                </div>

                {/* CTA Button */}
                <Link
                    to={'/pets'}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg font-semibold rounded-lg transition duration-300"
                >
                    Adopt a Pet Now 🐶🐱
                </Link>
            </div>
        </section>
    );
};

export default Inspire;