export const LowerBar = ({allHandles}) => {
    return (
        <div className='bg-black '>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-center md:justify-normal pt-2 pb-3 md:pt-7'>
                    <SmallIntro />
                </div>
                <div className='flex justify-center items-center px-10 md:px-1'>
                    <Social allHandles={allHandles}/>
                </div>
            </div>
        </div>
    );
};

function Social({allHandles}) {

    return (
        <div className="text-white">
            <div className='flex justify-center md:justify-normal'>
                <div className="text-green-500 font-pixel text-4xl mb-4">SOCIAL</div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                {allHandles.map((handle, index) => (
                    <div key={index}>
                        <SocialButton Logo={handle.logo} url={handle.url} tw={handle.tw} alt={handle.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function SocialButton({ Logo, url, tw, alt}) {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <div className={tw}>
            <button className="focus:outline-none" onClick={() => openInNewTab(url)}>
                <img src={Logo} alt={alt} className="w-7 h-7" />
            </button>
        </div>
    );
}

function SmallIntro() {
    return (
        <div className='font-pixel text-white text-lg px-20 md:px-0'>
            <p>I am a highly skilled programmer with expertise in <strong>M.E.R.N.</strong> Stack. 
                With a passion for solving complex problems and a strong foundation in programming languages, 
                I strive to create efficient and scalable solutions.</p>
            <br />
            <p className='justify-center md:justify-start'>Feel free to contact.</p>
        </div>
    );
}
