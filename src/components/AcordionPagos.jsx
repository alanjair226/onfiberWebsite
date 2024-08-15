import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/jsx/accordion';
import { ChevronRight } from 'lucide-react';
import Page from '../components/marquee.jsx';

export function AccordionVariant() {
  return (
    <Accordion
      className='flex w-full flex-col bg-white bg-opacity-0 backdrop-blur-lg border-2 border-white rounded-lg p-4 shadow-md shadow-white mt-8'
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      variants={{
        expanded: {
          opacity: 1,
          scale: 1,
        },
        collapsed: {
          opacity: 0,
          scale: 0.7,
        },
      }}
    >
      <AccordionItem value='getting-started' className='py-2 text-lg '>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50 text-2xl' style={{'color':'#1E90FF'}}>
              Métodos de pago
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left border-b-2 border-white'>
        <Page/>
          <div className=' flex flex-col gap-4 text-start text-lg  pl-6 pr-2 text-zinc-300 dark:text-zinc-300'>
            <p className='text-start text-zinc-300 dark:text-zinc-300'>
              Contamos con diferentes métodos de pago para que elijas el que más te guste:
            </p>
            <ul className='list-disc'>
              <li>Pago en efectivo</li>
              <li>Pago con tarjeta</li>
              <li>Transferencia</li>
              <li>Domiciliado de tarjeta</li>
            </ul>
            <p className=''>
              Para pagar por cualquiera de los métodos anteriores es necesario ingresar al <a href='https://onfiber.trytoku.com/' className='underline font-semibold text-pink-400'>Portal de pago</a> con tu número de usuario y elegir el método deseado.
            </p>
            <p className=' font-bold'>
              Si no conoces tu número de cliente favor de comunicarte con nosotros via whatsapp para que un agente te ayude en el proceso
            </p>
            <p className="text-lg">WHATSAPP: <a href="https://wa.link/57q5fq" target='_blank' class="text-pink-400 font-bold">449 327 51 98</a></p>
            <div className='flex flex-col gap-4 text-start text-lg text-zinc-300 dark:text-zinc-300'>
              <p className='text-xl font-semibold text-center'>Pago por Oxxo</p>
              <p>
                Para pagar por Oxxo es necesario ingresar al portal de Onfiber. Para ingresar, al contratar el servicio, el sistema le hizo llegar un usuario y contraseña vía SMS al número registrado en la contratación. Estos son sus datos para ingresar al portal.
              </p>
              <p className="mt-2"><a href="https://onfiber.mikrowisp.net/cliente/login" target="_blank" class="text-pink-400 underline">PORTAL DE CLIENTES</a></p>
              <p>
                Si no cuenta con estos datos, puede comunicarse por WhatsApp al siguiente número para que se los proporcione: <a href="https://wa.link/jh5htf" target="_blank" class="text-pink-400 underline">4493275135</a>.
              </p>
              <p className="mt-2">
                Recomendamos descargar el manual para no tener problemas en el proceso: <a href="/docs/manual_de_pago_oxxo_onfiber.pdf" target="_blank" class="text-pink-400 underline">Descargar manual</a>
              </p>
            </div>
            
            <div className='flex flex-col gap-4 text-start text-lg text-zinc-300 dark:text-zinc-300'>
              <p className='text-xl font-semibold text-center'>Pago en puntos físicos</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>MONTE VERDE: Esquina Senecio y Garambullo #186 "Mini Super Mendoza"</li>
                <li>PASEOS DE SAN ANTONIO: Avenida Rancho San Antonio esquina Paseo de la Habana "Abarrotes Gaby"</li>
                <li>HACIENDA SAN MARCOS: Avenida Hacienda Santoral, cerca del Oxxo "Mini Super San Marcos"</li>
                <li>URBI VILLAS DEL VERGEL: San Diego OTE #301 "URBI INTERNET"</li>
                <li>Santa Mónica: San Andrés y San Esteban "Mr. FROGS Santa Mónica"</li>
                <li>Cartuja: "SUPER LA CARTUJA."</li>
              </ul>
            </div>
          </div>
          
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='animation-properties' className='py-2 text-lg'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50 text-2xl' style={{'color':'#FF6F61'}}>
              ¿Cómo ponerme en contacto?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left border-b-2 border-white'>
          <div className='flex flex-col gap-4 text-start text-lg pl-6 pr-2 text-zinc-300 dark:text-zinc-300'>
            <p>
              Los únicos números para soporte, contratación y resolver dudas son los siguientes:
            </p>
            <div className="flex flex-row items-center gap-2">
              <img src="/phone.svg" alt="Mail" class="h-10"/>
              <p className="text-lg">LLÁMANOS: <a href="tel:4493880998" class="text-pink-400 font-bold">449 388 09 98</a></p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src="/whatsapp.svg" alt="Mail" class="h-10"/>
              <p className="text-lg">WHATSAPP: <a href="https://wa.link/57q5fq" target='_blank' class="text-pink-400 font-bold">449 327 51 98</a></p>
            </div>
            <p className='font-semibold text-red-600'>FAVOR DE NO COMUNICARSE CON SU INSTALADOR O VENDEDOR.</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='advanced-features' className='py-2 text-lg'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50 text-2xl' style={{'color':'#FFB300'}}>
              Cuidados y recomendaciones con el modem
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left border-b-2 border-white'>
          <div className='flex flex-col gap-4 text-start text-lg pl-6 pr-2 text-zinc-300 dark:text-zinc-300'>
            <p>
              El modem es un dispositivo que se utiliza para conectarse a internet. Funciona como un puente entre la señal de internet que llega a tu domicilio y tus dispositivos electrónicos (computadora, teléfono, tablet, etc.).
            </p>
            <p>
              El rango de alcance del modem es de aproximadamente 5 metros a la redonda para que sea eficaz.
            </p>
            <p>
              Si tu modem tiene la característica de conexión de doble banda (2.4 GHz y 5 GHz), se recomienda conectarse a la red de 5 GHz para obtener una conexión más rápida y estable.
            </p>
            <p>
              Es importante mantener el modem limpio y libre de plagas de insectos, ya que pueden afectar su funcionamiento. También se recomienda no manipularlo demasiado, ya que esto podría dañar el cableado interno y afectar su desempeño.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
