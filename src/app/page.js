import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Welcome to our food ordering platform! Explore our diverse menu and order your favorites. Enjoy appetizers, main courses, and desserts. We prioritize freshness and customer satisfaction. Order now for a delightful experience!
          </p>
          <p>Discover and order your favorite dishes. Our menu features a variety of options. We prioritize freshness and authenticity. Place your order for a satisfying meal!</p>
          <p>Join us in exploring a world of flavors and culinary delights. Place your order today and indulge in a feast of taste and aroma that will leave you wanting more.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +91 738 000 999
          </a>
        </div>
      </section>
    </>
  )
}
