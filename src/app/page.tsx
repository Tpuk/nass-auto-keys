import KeyRequestForm from "@/components/KeyRequestForm";

const services = [
  ["🔑", "Изработка и програмиране на ключове", "Резервни ключове, сгъваеми ключове, транспондери, smart key и keyless системи за повечето марки автомобили."],
  ["🚗", "Всички ключове изгубени", "Аварийно отключване, декодиране по брава, изработка на механичен ключ и обучение към имобилайзера."],
  ["🛠️", "Ремонт на автомобилни ключове", "Смяна на корпуси и бутони, ремонт на платки, възстановяване след изпускане, намокряне или повредена бобина."],
  ["🔐", "Имобилайзери и модулни решения", "Обучение на ключове, синхронизация, адаптация на модули, IMMO OFF при необходимост и специализирани решения."],
  ["💻", "ECU, BSI, CAS, EIS/EZS", "Клониране, адаптация и работа с електронни модули при смяна, дефект или загубени ключове."],
  ["📟", "Диагностика и софтуер", "Компютърна диагностика, четене/запис на ECU, Stage 1, DPF/EGR/AdBlue решения според конкретния автомобил."]
];

const brands = ["Mercedes-Benz", "BMW", "Audi", "Volkswagen", "Skoda", "Seat", "Opel", "Ford", "Peugeot", "Citroen", "Renault", "Toyota", "Nissan", "Honda", "Hyundai", "Kia", "Volvo", "Fiat", "Jeep", "Land Rover", "Jaguar", "Iveco"];

const facebookUrl = "https://www.facebook.com/share/1AL6YXibfQ/";
const whatsappUrl = "https://wa.me/359878441442";
const viberUrl = "viber://chat?number=%2B359878441442";
const googleBusinessUrl = "https://maps.app.goo.gl/iEf98S1nPoaZHjJWA";
const googleMapsUrl = "https://maps.app.goo.gl/seHR7xp5ZVkwyFQo6";
const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=Nass%20Auto%20Keys%20Stara%20Zagora&output=embed";

const gallery = [
  ["Mercedes EIS/EZS", "Програмиране и диагностика на ключове", "/gallery/gallery-1.jpg"],
  ["BMW CAS/FEM/BDC", "Добавяне и възстановяване на ключове", "/gallery/gallery-2.jpg"],
  ["VAG MQB/BCM2", "Модерни имобилайзерни системи", "/gallery/gallery-3.jpg"],
  ["PSA BSI/ECU", "Синхронизация и IMMO решения", "/gallery/gallery-4.jpg"],
  ["Аварийно отключване", "Без повреди по автомобила", "/gallery/gallery-5.jpg"],
  ["Ремонт на ключове", "Електроника, бутони и корпуси", "/gallery/gallery-6.jpg"],
  ["Диагностика", "Точна проверка на системите", "/gallery/gallery-7.jpg"],
  ["Работа на място", "Мобилен сервиз при клиента", "/gallery/gallery-8.jpg"]
];


export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#top" aria-label="Nass Auto Keys">
            <img className="logo-img" src="/nass-auto-keys-logo.jpg" alt="Nass Auto Keys лого" />
            <span>Nass Auto Keys <small>Автоключар • Стара Загора</small></span>
          </a>
          <div className="nav-links">
            <a href="#services">Услуги</a>
            <a href="#request">Запитване</a>
            <a href="#gallery">Галерия</a>
            <a href="#reviews">Отзиви</a>
            <a href="#contacts">Контакти</a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <a className="btn btn-primary" href="tel:+359878441442">Обади се</a>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">24/7 при спешни случаи</span>
            <h1><span className="grad">Автоключарски услуги</span><br />в Стара Загора и региона</h1>
            <p className="lead">Nass Auto Keys предлага изработка и програмиране на автомобилни ключове, аварийно отключване, ремонт на ключове, имобилайзер решения, диагностика и работа по автомобилна електроника в Стара Загора и региона.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#request">Изпрати запитване</a>
              <a className="btn btn-outline" href="tel:+359878441442">0878 441 442</a>
              <a className="btn btn-outline" href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a className="btn btn-outline" href={viberUrl}>Viber</a>
              <a className="btn btn-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <div className="stats">
              <div className="stat"><b>🔑</b><span>Изработка на нов ключ</span></div>
              <div className="stat"><b>🚗</b><span>Аварийно отключване и работа на място</span></div>
               <div className="stat"><b>📡</b><span>Смарт ключове, имобилайзери и диагностика</span></div>
            </div>
          </div>
          <div className="hero-card hero-logo-card">
            <img className="hero-logo" src="/nass-auto-keys-logo.jpg" alt="Nass Auto Keys" />
            <h2>
  <a
    href="#request-form"
    style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
  >
    Бърза оферта за ключ
  </a>
</h2>
            <p className="muted">Изберете марка, модел, година и тип ключ. Запитването пристига директно на имейл: <b>autokeys.stz@gmail.com</b>.</p>
            <ul className="list">
              <li>Резервен ключ</li>
              <li>Всички ключове изгубени</li>
              <li>Smart Key / Keyless Go</li>
              <li>Ремонт на повреден ключ</li>
            </ul>
          </div>
        </div>
      </header>

      <section id="services" className="section">
        <div className="container">
          <div className="section-head">
            <h2>Услуги на Nass Auto Keys</h2>
            <p className="muted">Професионални решения за ключове, имобилайзери, електронни модули и автомобилен софтуер.</p>
          </div>
          <div className="grid grid-3">
            {services.map(([icon, title, text]) => (
              <article className="card" key={title}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background:"var(--bg2)"}}>
  <div className="container">
    <div className="section-head">
      <h2>Марки, с които работим</h2>

      <p className="muted" style={{fontSize:"1.1rem", lineHeight:"1.8"}}>
        Mercedes-Benz • BMW • Audi • Volkswagen • Skoda • Seat • Opel • Ford • Peugeot • Citroen • Renault • Toyota • Nissan • Honda • Hyundai • Kia • Volvo • Fiat • Jeep • Land Rover • Jaguar • Iveco
      </p>

      <p className="muted" style={{marginTop:"20px"}}>
        Работим с над 30 марки автомобили и различни системи за имобилайзер, Smart Key, Keyless Go, ECU, BSI, CAS, FEM, BCM, EIS/EZS и други електронни модули.
      </p>
    </div>
  </div>
</section>

      <section id="request" className="section">
        <div className="container form-wrap">
          <div>
            <span className="badge">Онлайн запитване</span>
            <h2>Получете цена за изработка и програмиране</h2>
            <p className="muted">Формата съдържа всички основни данни, които са нужни за точна оферта – марка, модел, година, тип ключ, наличност на ключове и контакт.</p>
            <ul className="list">
              <li>Запитването се изпраща към autokeys.stz@gmail.com</li>
              <li>Може да прикачите снимки на ключа, автомобила или талона</li>
              <li>Клиентът получава автоматично потвърждение по имейл</li>
            </ul>
          </div>
          <div id="request-form">
  <KeyRequestForm />
</div>
        </div>
      </section>

      <section id="gallery" className="section" style={{background:"var(--bg2)"}}>
        <div className="container">
          <div className="section-head">
            <h2>Галерия и реални ремонти</h2>
            <p className="muted">Реални примери от изработка и програмиране на ключове, аварийно отключване, ремонт на автомобилни ключове, диагностика и работа по модули.</p>
          </div>
          <div className="gallery">
            {gallery.map(([title, text, image]) => (
              <div className="gallery-item" key={title}>
                <img src={image} alt={title} />
                <div className="gallery-caption"><b>{title}</b><span className="muted">{text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section">
        <div className="container">
          <div className="section-head">
            <h2>Реални Google отзиви</h2>
            <p className="muted">
              Отзивите се отварят директно от официалния Google Business профил на Nass Auto Keys,
              за да се виждат винаги актуалните реални мнения на клиенти.
            </p>
            <div className="hero-actions center-actions">
              <a className="btn btn-primary" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                Отвори Google Business профила
              </a>
              <a className="btn btn-outline" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                Виж всички Google отзиви
              </a>
              <a className="btn btn-outline" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                Остави отзив
              </a>
            </div>
          </div>

          <div className="grid grid-3">
            <a className="card review link-card" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
              <div className="icon">⭐</div>
              <h3>Реални клиентски оценки</h3>
              <p className="muted">Отвори Google профила, за да видиш актуалния рейтинг и мненията от клиенти.</p>
            </a>
            <a className="card review link-card" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
              <div className="icon">💬</div>
              <h3>Провери последните отзиви</h3>
              <p className="muted">В Google се показват най-новите публикувани отзиви за Nass Auto Keys.</p>
            </a>
            <a className="card review link-card" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
              <div className="icon">✅</div>
              <h3>Остави собствен отзив</h3>
              <p className="muted">След обслужване можеш да оставиш реална оценка директно в Google Business профила.</p>
            </a>
          </div>
        </div>
      </section>

      <section id="contacts" className="section" style={{background:"var(--bg2)"}}>
        <div className="container grid grid-2">
          <div>
            <h2>Контакти</h2>
            <p className="muted">За спешни случаи и запитвания за автомобилни ключове:</p>
            <ul className="list">
              <li>Телефон: 0878 441 442</li>
              <li>Имейл: autokeys.stz@gmail.com</li>
              <li>Район: Стара Загора, Казанлък, Раднево, Чирпан, Нова Загора</li>
              <li>Мобилен автоключар при необходимост</li>
              <li>Facebook: <a href={facebookUrl} target="_blank" rel="noopener noreferrer">Nass Auto Keys</a></li>
              <li>Viber: <a href={viberUrl}>изпрати съобщение</a></li>
              <li>WhatsApp: <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">изпрати съобщение</a></li>
              <li>Google Business: <a href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">отвори профила</a></li>
              <li>Навигация в Google Maps: <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">отвори адреса</a></li>
            </ul>
            <div className="hero-actions"><a className="btn btn-primary" href="tel:+359878441442">Обади се сега</a><a className="btn btn-outline" href={viberUrl}>Viber</a><a className="btn btn-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a><a className="btn btn-outline" href="mailto:autokeys.stz@gmail.com">Изпрати имейл</a></div>
          </div>
          <div className="map-box">
            <iframe className="map" loading="lazy" src={googleMapsEmbedUrl} title="Nass Auto Keys карта" />
            <div className="map-actions">
              <a className="btn btn-primary" href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Отвори адреса в Google Maps
              </a>
              <a className="btn btn-outline" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                Google Business профил
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span><b>Nass Auto Keys</b> © {new Date().getFullYear()} • Автоключар Стара Загора • 0878 441 442</span>
          <span><a href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a> • <a href={viberUrl}>Viber</a> • <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a> • <a href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">Google Business</a> • <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">Google Maps</a></span>
        </div>
      </footer>

      <div className="float">
        <a href="tel:+359878441442" aria-label="Обади се"><span>📞</span><small>Телефон</small></a>
        <a href={viberUrl} aria-label="Viber"><span>V</span><small>Viber</small></a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><span>💬</span><small>WhatsApp</small></a>
        <a href="mailto:autokeys.stz@gmail.com" aria-label="Имейл"><span>✉️</span><small>Имейл</small></a>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span>f</span><small>Facebook</small></a>
      </div>
    </>
  );
}
