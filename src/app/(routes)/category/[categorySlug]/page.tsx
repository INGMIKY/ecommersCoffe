'use client'
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { use } from "react";
import FiltersControlsCategory from "../components/FiltersControlsCategory";
import SkeletonSchema from "@/components/SkeletonSchema";
import ProductCard from "../components/ProductCard";
import { ProductType } from "@/types/product";

const Page = () => {
    const params = useParams();
    const { categorySlug }= params;
    const {result, loading}: ResponseType = useGetCategoryProduct(categorySlug);
    // const router = useRouter();
    console.log(result);

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result != null && !loading && (
                <h1 className="text-3xl font-medium">Cafe {result[0].category.categoryName}</h1>
               
            )}
            <Separator />

            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory />

                <div className="grid gap-5 mt-8 sm:grid-cols-2  md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3}/>
                    )}
                    {result != null && !loading && (
                        result.map((product:ProductType) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Page;