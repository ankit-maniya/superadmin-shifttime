import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <section className="">
            <div class="bg-white py-24 sm:py-32">
                <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div class="max-w-2xl">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Teams</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600">Shifttime is a dynamic team focused on optimizing productivity and efficiency. We specialize in innovative solutions to streamline processes and enhance workflow.</p>
                    </div>
                    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <li>
                            <div class="flex items-center gap-x-6">
                                <Image width="100" height="100" alt="" class="h-2/3 w-16 rounded-full" src="/images/teams/ankitmaniya.jpg" />
                                <div>
                                    <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Ankit Maniya</h3>
                                    <p class="text-sm font-semibold leading-6 text-green-550">Co-Founder / CEO</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center gap-x-6">
                                <Image width="100" height="100" alt="" class="h-16 w-16 rounded-full" src="/images/teams/ankitmaniya.jpg" />
                                <div>
                                    <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Pratik Boghani</h3>
                                    <p class="text-sm font-semibold leading-6 text-green-550">Co-Founder / CEO</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center gap-x-6">
                                <Image width="100" height="100" alt="" class="h-16 w-16 rounded-full" src="/images/teams/ankitmaniya.jpg" />
                                <div>
                                    <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Hiren Gohil</h3>
                                    <p class="text-sm font-semibold leading-6 text-green-550">Co-Founder / CEO</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" width="100" height="100" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
                <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"  ></div>
                </div>
                <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl">
                        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-300">Join ShiftTime, a dynamic team dedicated to optimizing productivity and efficiency. We value innovation, teamwork, and a commitment to excellence. Collaborate with us to drive forward momentum and achieve success together.</p>
                    </div>
                    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Offices worldwide</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
                            </div>
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Full-time colleagues</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
                            </div>
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Hours per week</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
                            </div>
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Paid time off</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
                            </div>
                        </dl>
                        <div class="mt-10 max-w-2xl grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
                            <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
                            <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
                            <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
