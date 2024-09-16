import Image from "next/image"
import Model from "@/assets/Models.png"

const Models = () => {
    return (
        <section className="">
        <Image alt="Models" src={Model} className="object-cover w-full"/>
    </section>
    )
}

export default Models