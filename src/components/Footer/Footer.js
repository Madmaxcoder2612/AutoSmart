export default function Footer() {
    return (
        <div>
            <div class="text-white bg-footerBg font-popins">
                <div class="max-w-5xl m-auto text-white flex flex-wrap justify-center">

                    <div class="p-5 w-48 ">
                        <div class="text-3xl text-white font-medium">AutoSmart</div>
                        <a class="my-3 block" href="/#">AR Models<span class="text-teal-600 text-xs p-1"></span></a>
                    </div>

                    <div class="p-5 w-48 ">
                        <div class="text-xl text-white font-medium">Services</div>
                    </div>

                    <div class="p-5 w-48 ">
                        <div class="text-xl text-white font-medium">Company</div>
                    </div>

                    <div class="p-5 w-48 ">
                        <div class="text-xl text-white font-medium">Contact</div>
                    </div>

                    <div class="md:flex-auto md:flex-row-reverse mt-2 gap-4 flex-row flex p-5 w-48 ">
                        <a href="/#" class="w-6 mx-1">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" />
                        </a>
                        <a href="/#" class="w-6 mx-1">
                            <img src="https://img.icons8.com/material-outlined/50/ffffff/instagram-new.png" />
                        </a>
                        <a href="/#" class="w-6 mx-1">
                            <img src="https://img.icons8.com/ios-glyphs/50/ffffff/linkedin.png" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="text-white pt-2 bg-footerBg font-popins">
                <div class=" pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm grid place-items-center max-w-6xl">
                    <div class="mt-2 text-white">© AutoSmart. All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}
