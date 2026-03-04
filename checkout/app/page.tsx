export default function Home() {
  return (
    <div className="flex flex-col justify-end items-end h-screen">
      
      {/* PANEL DERECHO */}
      <div className="relative h-full w-1/3 overflow-hidden">

        {/* Fondo degradado*/}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0c219] via-gray-400 to-gray-600"></div>

        {/* Capa glass*/}
        <div className="absolute inset-0 backdrop-blur-3xl bg-black/30"></div>

        {/* Contenido */}
        <div className="relative z-10 p-10 text-white">
          <h2 className="text-2xl font-light text-yellow-400 mb-8">
            Card Details
          </h2>

          <p className="text-gray-300">Aquí van los inputs luego 👀</p>
        </div>
      </div>

      {/* BOTÓN CHECKOUT */}
      <div className="w-1/3 bg-[#f0c219] h-24 flex items-center justify-center font-semibold text-lg">
        Checkout
      </div>

    </div>
  );
}