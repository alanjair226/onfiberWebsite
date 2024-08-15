const items = [
    {
      title: "OXXO",
      image:
        "/Establecimientos-pago//oxxo-logo.png",
    },
    {
      title: "Puntos físicos de pago",
      image:
        "/Establecimientos-pago/pago-fisico.jpg",
    },
    {
      title: "Pago con tarjeta",
      image:
        "/Establecimientos-pago//pago-tarjeta.png",
    },
    {
      title: "Pago con tarjeta",
      image:
        "/Establecimientos-pago/walmart.png",
    },
    
  ]
  
  export default function Page() {
    return (
      <div className="relative flex h-auto w-screen items-center">
        <div className="relative flex max-w-[100vw] overflow-hidden py-5">
          <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="h-full px-2.5">
                <div className="relative h-full w-[20rem] rounded-2xl border border-white/5 bg-white/5 px-8 py-2">
  
                  <div className="mt-auto flex flex-col items-center gap-4">
                    <img src={item.image} className="h-20  rounded-lg" />

                      <div className="text-white/75 text-base">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  