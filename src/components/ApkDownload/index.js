import Image from 'next/image'

export default function APKDownload() {
  return (
    <section className="relative">
  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
    <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#EAEAEA" offset="77.402%" />
          <stop stopColor="#DFDFDF" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="url(#illustration-02)" fillRule="evenodd">
        <circle cx="1232" cy="128" r="128" />
        <circle cx="155" cy="443" r="64" />
      </g>
    </svg>
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="pt-20 pb-10 md:pt-32 md:pb-16">
      <div className="text-center pb-8 md:pb-12 lg:pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Download Our Mobile APK <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">Now!</span></h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8" data-aos="zoom-y-out" data-aos-delay="150">Get access to all the features and benefits of ShiftTime on your mobile device. Simplify employee scheduling and time management on the go!</p>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
            <div>
              <a target='_blank' className="btn text-white bg-green-550 hover:bg-green-700 w-full sm:w-auto mb-4 sm:mb-0" href="https://drive.google.com/file/d/17h6oPmhDYrmCrPiCieNFr8Nbb9sQQu5U/view">Download APK</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Image src="/images/ShiftTimeIcon.png" data-aos="zoom-y-out" data-aos-delay="300" alt="APK Icon" height="80" width="80" className="mx-auto w-24 h-24 md:w-32 md:h-32" />
      </div>
    </div>
  </div>

  {/* APK Screenshots Section */}
  <section className="py-16 md:py-20 lg:py-24 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tighter tracking-tighter mb-4">APK Screenshots</h2>
        <p className="text-lg md:text-xl text-gray-600">Take a look at some of the features and interfaces of our ShiftTime APK.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <div data-aos="fade-up">
    <Image src="/images/mobile/1.png" alt="Screenshot 1" width={500} height={900} className="rounded-lg shadow-lg" />
  </div>
  <div data-aos="fade-up" data-aos-delay="100">
    <Image src="/images/mobile/2.png" alt="Screenshot 2" width={500} height={900} className="rounded-lg shadow-lg" />
  </div>
  <div data-aos="fade-up" data-aos-delay="200">
    <Image src="/images/mobile/3.png" alt="Screenshot 3" width={500} height={900} className="rounded-lg shadow-lg" />
  </div>
  <div data-aos="fade-up" data-aos-delay="300">
    <Image src="/images/mobile/4.png" alt="Screenshot 4" width={500} height={900} className="rounded-lg shadow-lg" />
  </div>
  <div data-aos="fade-up" data-aos-delay="400">
    <Image src="/images/mobile/5.png" alt="Screenshot 5" width={500} height={900} className="rounded-lg shadow-lg" />
  </div>
  <div data-aos="fade-up" data-aos-delay="500">
    <Image src="/images/mobile/6.png" alt="Screenshot 6" width={500} height={900} className="rounded-lg shadow-lg" />
  </div>
  <div data-aos="fade-up" data-aos-delay="600">
    <Image src="/images/mobile/7.png" alt="Screenshot 7" width={500} height={900} className="rounded-lg shadow-lg" />
  </div>
  <div data-aos="fade-up" data-aos-delay="700">
    <Image src="/images/mobile/8.png" alt="Screenshot 8" width={500} height={900} className="rounded-lg shadow-lg" />
  </div>
  <div data-aos="fade-up" data-aos-delay="800">
    <Image src="/images/mobile/9.png" alt="Screenshot 9" width={500} height={900} className="rounded-lg shadow-lg" />
  </div>
      </div>
    </div>
  </section>
</section>

  )
}
