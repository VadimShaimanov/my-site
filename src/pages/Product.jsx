
import { useParams, Link } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  return (
    <main className="container" style={{ padding: "80px 20px" }}>
      <h1>Продукт: {id}</h1>
      <p>Здесь будет описание, фото и кнопка «Добавить в корзину».</p>
      <Link to="/" style={{ color: "skyblue" }}>← Вернуться назад</Link>
    </main>
  );
}
