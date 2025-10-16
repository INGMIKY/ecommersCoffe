import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Sumérgente en una experiencia única</p>
                <h3 className="mt-2 text-5xl font-extrabold upperce">CaféExquisito</h3>
                <p className="my-2 text-lg">Despierta tus sentidos con cada sorbo</p>
                <Link href={'#'} className={buttonVariants()}>Comprar</Link>
            </div>

            <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/images/slider-image.jpg')] bg-center mt-5">

            </div>
        </>
    )
}

export default BannerProduct;