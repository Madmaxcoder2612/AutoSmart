export default function ContactUs() {
    return (
        <div>
            <div class="relative flex items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0" style={{ backgroundColor: "#1F1627" }} id="contact">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="mt-8 overflow-hidden text-white">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="p-6 mr-2  dark:bg-gray-800 sm:rounded-lg">
                                <h1 class="text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
                                    Get in touch
                                </h1>
                                <p class="text-normal text-lg sm:text-2xl font-medium text-white mt-2">
                                    Fill in the form to start a conversation
                                </p>

                                <div class="flex items-center mt-8 text-white">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        Silver Palace,
                                        Kolhapur,
                                        Maharashtra 416005

                                    </div>
                                </div>

                                <div class="flex items-center mt-4 text-white">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        +91 9403917139
                                    </div>
                                </div>

                                <div class="flex items-center mt-2 text-white">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        contact@autosmart.com
                                    </div>
                                </div>
                            </div>

                            <form class="p-6 flex flex-col justify-center" action="https://formspree.io/f/xyylowqg" method="POST">
                                <div class="flex flex-col">
                                    <label for="name" class="hidden text-white">Full Name</label>
                                    <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-purple-500 dark:bg-gray-800 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none placeholder-white::placeholder" />
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="email" class="hidden text-white">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-purple-500 dark:bg-gray-800 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none placeholder-white::placeholder" />
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="tel" class="hidden text-white">Subjext</label>
                                    <input type="tel" name="subject" id="tel" placeholder="Subject" class="w-100 mt-2 py-3 px-3 rounded-lg bg-purple-500 dark:bg-gray-800 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none placeholder-white::placeholder" />
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="tel" class="hidden text-white">Message</label>
                                    <textarea type="tel" name="message" id="tel" placeholder="Message" class="w-100 mt-2 py-3 px-3 rounded-lg bg-purple-500 dark:bg-gray-800 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none placeholder-white::placeholder" />
                                </div>

                                <button type="submit" class="md:w-48 bg-purple-800 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-purple-500 transition ease-in-out duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
