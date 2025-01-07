import Calculator from "@/components/calculator";
import DolarInfo from "@/components/dolar-container";
import { DolarProvider } from "@/context";
import { getDolarsInfo } from "@/services/services";
import { Suspense } from "react";

export default async function Home() {
  const dolars = await getDolarsInfo()
  
  return (
    <>
    <DolarProvider data={dolars}>
      <div className="flex flex-col max-w-screen-md mx-auto gap-4 p-20">
        <Suspense fallback={<div>Loading...</div>}>
          <h1 className='text-center text-2xl'>Cuanto gano este mes¿?</h1>
          <Calculator />
          <DolarInfo list={dolars}  />
        </Suspense>
      </div>
    </DolarProvider>
    </>
  );
}
