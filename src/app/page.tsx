
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Tu Tienda Online en 24 Horas" subheadline="Digitaliza tus ventas sin complicaciones con nuestro soporte 24/7 para pequeños negocios en Santiago." cta1="Inicia Hoy" />
<How step1Title="Solicita tu web" step1Desc="Inicia con un simple formulario." step2Title="Desarrollo Express" step2Desc="Creamos tu web en 24 horas." step3Title="Ventas Online" step3Desc="Empieza a vender digitalmente ya." />
<Aboutus headline="WebGo: Crece tu negocio digitalmente" subheadline="Digitalizamos ventas online, sin complicaciones, para empresarios ocupados en Santiago." beneficiotitulo1="Gestión Eficiente" beneficio1="Automatizamos tu presencia digital fácilmente." beneficiotitulo2="Incremento de Ventas" beneficio2="Transforma recomendaciones en ventas online." />
<Services heading="Digitaliza y Aumenta Tus Ventas en 24 Horas" description="Con asda, transforma recomendaciones en ventas online sin complicaciones." services={[{"name":"Desarrollo Web","icon":"globe","description":"Webs eficientes listas en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"SEO Optimización","icon":"search","description":"Aumenta tu visibilidad online fácilmente."},{"name":"Marketing Digital","icon":"bullhorn","description":"Estrategias efectivas para captar clientes."},{"name":"Gestión de Contenidos","icon":"edit","description":"Publica contenido que vende."},{"name":"Integración eCommerce","icon":"shopping-cart","description":"Sistemas de venta integrados eficientemente."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en sitios web que generan resultados." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio?","respuesta":"WebGo te ayuda a llevar tu negocio al mundo digital creando un sitio web atractivo y fácil de usar. De esta forma, puedes aumentar tus ventas más allá de las recomendaciones y llegar a más clientes en línea."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo?","respuesta":"Con WebGo, no solo obtienes un sitio web profesional, sino también la tranquilidad de saber que expertos están gestionando tu presencia en línea. Esto te ahorra tiempo y te permite enfocarte en lo que mejor sabes hacer: dirigir tu negocio."},{"pregunta":"¿Cuánto cuesta el servicio asda de WebGo?","respuesta":"El servicio asda de WebGo tiene un precio de 123. Este servicio te proporciona las herramientas necesarias para aumentar tus ventas en línea de manera efectiva."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿qué soluciones ofrece WebGo?","respuesta":"WebGo se encarga de todo, desde la creación hasta la gestión de tu sitio web. Esto significa que puedes concentrarte en tu negocio mientras nosotros nos ocupamos de tu presencia digital."},{"pregunta":"¿Cómo puedo aprender a generar ventas online si no tengo experiencia?","respuesta":"WebGo te guía en cada paso, enseñándote estrategias simples y efectivas para atraer clientes en línea, incluso si no tienes experiencia previa en ventas digitales."}]} />
<BookAppointment 
                      heading="Transforma tus Ventas en Santiago" 
                      description="Descubre cómo WebGo puede digitalizar tu negocio por 123 con facilidad y sin complicaciones."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
