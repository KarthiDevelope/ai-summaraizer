import { logo } from "../assets"

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
                <img src={logo} alt="logo" className="w-28 object-contain" />
                <button type="button" className="black_btn" onClick={() => window.open("https://github.com/KarthiDevelope/ai-summaraizer")}>
                    Github
                </button>
            </nav>
            <h1 className="head_text">
                Summaraize Articals with <br className="max-md:hidden" /> <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading with Summize, an open-source article Summarizer that transforms lengthly articles into clear and concise Summarizes
            </h2>
        </header>
    )
}

export default Hero