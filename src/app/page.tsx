import BannerDiscount from "@/components/BannerDiscount";
import CarruselTextBanner from "@/components/CarruselTextBanner";
import ChooseCategory from "@/components/ChooseCategory";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  


  return (
    <main>
      <CarruselTextBanner />
      <FeaturedProducts/>
      <BannerDiscount />
      <ChooseCategory />
    </main>
  );
}
