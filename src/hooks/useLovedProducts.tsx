import { ProductType } from "@/types/product";
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from "sonner"


interface LovedStore{
    lovedItems:ProductType[];
    addLoveItem: (data:ProductType) => void;
    removeLoveItem: (id:number) => void;
   

}

export const useLovedProducts= create  (persist<LovedStore>((set, get)=>({
    lovedItems:[],
    addLoveItem: (data:ProductType) => {
        const currentItems = get().lovedItems
        const existingItem = currentItems.find((item) => item.id === data.id)

        if(existingItem){
            return toast.info("El producto ya existe en favoritos.")
        }

        set({
            lovedItems: [...get().lovedItems, data]
        }),
        toast.success("Producto agregado a favoritos.")
    },

    removeLoveItem: (id:number) =>{
        set({lovedItems: [...get().lovedItems.filter((item)=> item.id !== id)]})
        toast.success("Producto eliminado de la lista.")
    },

    

}),{
    name: 'loved-storage',
    storage: createJSONStorage(() => localStorage)
})) 
