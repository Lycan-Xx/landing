import React from 'react';
import { FaAndroid, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import mobileapp from '../assets/evault-app.jpg';

const MobileApp = () => {
	// Function to handle APK download
	const handleDownload = () => {
		// Add your APK download logic here
		console.log('Downloading APK...');
		// Example: window.location.href = 'path/to/your/app.apk';
	};

	return (
		<section className="py-20 bg-[#08448c] text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="relative">
						<img
							src={mobileapp}
							alt="Mobile App"
							className="rounded-2xl mx-auto shadow-xl"
						/>
					</div>

					<div className="space-y-6">
						<h2 className="text-3xl md:text-[3rem] font-bold mb-4 text-orange-500">
							Get Our Mobile App
						</h2>
						<p className="text-lg text-gray-200 mb-8">
							Experience the power of eVault in your pocket. Download our mobile app
							for seamless access to all our services, anytime, anywhere.
						</p>
						
						<motion.button
							onClick={handleDownload}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{
								type: "spring",
								stiffness: 400,
								damping: 15
							}}
							className="flex items-center justify-center space-x-3 
								bg-orange-600 hover:bg-orange-700 
								px-8 py-4 rounded-lg 
								shadow-lg hover:shadow-xl 
								transition-all duration-300 
								group w-full sm:w-auto"
						>
							<FaAndroid className="h-6 w-6 group-hover:animate-bounce" />
							<div className="flex flex-col items-start">
								<span className="text-sm font-light">Download Now</span>
								<span className="text-base font-semibold">Android APK</span>
							</div>
							<FaDownload className="h-5 w-5 ml-2 group-hover:animate-bounce" />
						</motion.button>

						<p className="text-sm text-gray-300 mt-4">
							*Compatible with Android 5.0 and above
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MobileApp;