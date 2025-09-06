import './Collection.css';
import ProductCard from "./ProductCard";

const products = [
  { name: "Осетрина", type: "горячего копчения", img: "/fish-img/osetrina-gor-cop.webp" },
  { name: "Севрюга", type: "горячего копчения", img: "/fish-img/sevruga-gor-cop.webp" },
  { name: "Белуга", type: "горячего копчения", img: "/fish-img/beluga-gor-cop.webp" },
  { name: "Рулеты", type: "из осетровых", img: "/fish-img/rulet.webp" },
  { name: "Осетрина", type: "холодного копчения", img: "/fish-img/osetrina-xol-cop.webp" },
  { name: "Белуга", type: "холодного копчения", img: "/fish-img/beluga-xol-cop.webp" },
  { name: "Масляная", type: "холодного копчения", img: "/fish-img/masl-xol-cop.webp" },
  { name: "Сёмга", type: "слабосолёная", img: "/fish-img/semga-slabo-sol.webp" },
  { name: "Форель", type: "слабосолёная", img: "/fish-img/forelb-slabo-sol.webp" },
  { name: "Пивной", type: "набор", img: "/fish-img/pivn-nabor.webp" },
];

export default function Collection() {
  return (
    <section id="collection" className="collection">
      <div className="container">
        <h2 className="collectionTitle">Коллекция вкуса</h2>

        <div className="grid">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}