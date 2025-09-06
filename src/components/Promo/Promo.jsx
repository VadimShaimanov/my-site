import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promoOverlay"></div>
      <div className="container promoContent">
        <div className="promoFlex">
        <div className="promoText">
          <h2 className="promoTitle">
            Волна — это <span className="spanPromo">вкус</span>, достойный
            вашего стола
          </h2>
          <a className="cta cta-promo" href="#">
            О бренде
          </a>
          <div className="desc desc-promo">
            <div className="descLeft">
              <p>Мы выбираем только отборную рыбу у проверенных поставщиков.</p>
              <p>
                Каждая партия проходит контроль и сопровождается всеми
                необходимыми сертификатами и ветеринарной документацией.
              </p>
            </div>
            <p className="text-right">
              Готовим по традиционным технологиям. Для копчения используем
              натуральные опилки, для слабосолёных деликатесов — минимальное
              количество соли.
            </p>
          </div>
        </div>

        <div className="promoImg">
          <h3>25 лет</h3>
          <p>репутации, которую мы бережём</p>
        </div>

        </div>

         <div className="promoDescription">
          <p>Производим рыбные деликатесы</p>
          <p>Доставляем по всей стране</p>
          <p>Работаем с ресторанами, магазинами и оптовыми клиентами</p>
        </div>
       
      </div>

    </section>
  );
}
