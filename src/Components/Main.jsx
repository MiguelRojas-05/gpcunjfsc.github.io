import { Badge } from "./Badge";
import logoUNJFS from '../assets/images/logounjfsc.png'


import { Card } from "./Card";
import Discord from "./icons/Discord";
import Facebook from "./icons/Facebook";
export default function Main() {
    return (
        <main>
            <section className="w-full  mx-auto py-32 items-center flex flex-col justify-center">
                <h1 className="text-white text-5xl font-bold flex flex-row gap-x-4 pb-2 text-center max-md:text-3xl">
                    GPC <span className="text-sky-400">UNFJSC</span>
                </h1>
                <h2 className="text-xl opacity-80 pb-8 text-center max-md:w-full w-5/12">
                    Bienvenidos, les presentaremos información sobre el grupo de estudio y la Programacion Competitiva.
                </h2>
                <div className="w-full flex flex-row items-center justify-center gap-4 pb-4">
                    <Facebook />
                    <Discord />
                </div>
                <div className=" flex flex-row items-center justify-center">
                    <Badge text="UNJFSC" color="blue" />
                    <Badge text="Competitive Programming" color="red"/>
                    <Badge text="Data Structures" color="purple" />
                </div>
            </section>
            <section className="flex flex-col  w-full items-center mx-auto py-2">
                <div className="flex text-center text-3xl font-bold pb-4">Ultimas Noticias</div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <Card />
                    <Card />
                    <Card />
                </div>

            </section>
        </main>
    )
}