export default function Home() {
  return (
    <div className="flex h-screen">

      {/* LADO IZQUIERDO */}
      <div className="w-2/3 bg-gray-100 p-10 flex flex-col gap-6">

        <div className="bg-gray-300 h-24 rounded-md flex items-center px-6">
          Elemento 1
        </div>

        <div className="bg-gray-300 h-24 rounded-md flex items-center px-6">
          Elemento 2
        </div>

        <div className="bg-gray-300 h-24 rounded-md flex items-center px-6">
          Elemento 3
        </div>

        <div className="bg-gray-300 h-24 rounded-md flex items-center px-6">
          Elemento 4
        </div>

      </div>

      {/* LADO DERECHO */}
      <div className="flex flex-col justify-end items-end w-1/3">
        
        {/* PANEL DERECHO */}
        <div className="relative h-full w-full overflow-hidden">

          {/* Fondo degradado */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0c219] via-gray-400 to-gray-600"></div>

          {/* Capa glass */}
          <div className="absolute inset-0 backdrop-blur-md bg-black/80"></div>

          {/* Contenido */}
          <div className="relative z-10 p-10 text-white flex flex-col h-full">
            
            <h2 className="text-2xl font-light text-yellow-400 mb-10">
              Card Details
            </h2>

            <div className="mb-10">
              <p className="text-gray-300 mb-4 text-sm">
                Select Card Type
              </p>

              <div className="flex gap-8 text-gray-400 text-sm tracking-wide">
                <span>Mastercard</span>
                <span>VISA</span>
                <span>Verve</span>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-gray-300 mb-3 text-sm">
                Card Number
              </p>

              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-500 pb-2 focus:outline-none text-sm tracking-widest"
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>

            <div className="flex gap-12">
              
              <div className="flex-1">
                <p className="text-gray-300 mb-3 text-sm">
                  Expiry Date
                </p>

                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-500 pb-2 focus:outline-none text-sm"
                  placeholder="MM / YY"
                />
              </div>

              <div className="w-24">
                <p className="text-gray-300 mb-3 text-sm">
                  CVV
                </p>

                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-500 pb-2 focus:outline-none text-sm"
                  placeholder="123"
                />
              </div>

            </div>

          </div>
        </div>

        {/* BOTÓN CHECKOUT */}
        <div className="w-full bg-[#f0c219] h-24 flex items-center justify-center font-semibold text-lg">
          Checkout
        </div>

      </div>

    </div>
  );
}