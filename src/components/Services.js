import { FaPrint, FaImages, FaSign, FaEnvelope, FaPaintBrush, FaFileAlt, FaCamera, FaGift } from 'react-icons/fa';  // Importing icons
import businessCardImage from "../assets/img/business-card.png";
import brochureImage from "../assets/img/Tri Fold Showcase Mockup.png";
import stickerImage from "../assets/img/sticker-1.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="service" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-bx wow zoomIn">
              <h2>Наши Услуги</h2>
              <p>
                Мы предлагаем широкий спектр услуг в области полиграфии. Создание бизнес карт, буклетов, стикеров и многое другое.<br />
                Мы воплощаем ваши идеи в идеальном дизайне.
              </p>
              <Carousel responsive={responsive} infinite={true}   arrows={false}  showDots={true} className="owl-carousel owl-theme service-slider">
                <div className="item">
                  <div className="service-item">
                    <FaPrint className="service-icon" />
                    <h5>Копировальные работы</h5>
                    <p>Ч/б и полноцветное копирование, масштабирование, ризография, копирование на различных видах бумаг.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item">
                    <FaImages className="service-icon" />
                    <h5>Широкоформатная печать</h5>
                    <p>Печать изображений большого формата. Изготовление баннеров, плакатов, наклеек и больших фотографий.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item">
                    <FaSign className="service-icon" />
                    <h5>Таблички и инфодоски</h5>
                    <p>Изготовление различных видов табличек, указателей, информационных стендов.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item">
                    <FaEnvelope className="service-icon" />
                    <h5>Интернет услуги</h5>
                    <p>Скачивание файлов с электронной почты, поиск изображений в интернете, отправка электронной почты.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item">
                    <FaPaintBrush className="service-icon" />
                    <h5>Дизайн и Верстка</h5>
                    <p>Разработка дизайн-макетов, верстка, редактирование, цветокоррекция, ретушь, разработка фирменного стиля.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item">
                    <FaFileAlt className="service-icon" />
                    <h5>Полиграфия</h5>
                    <p>Цветная и ч/б печать, копировальные работы, изготовление флаеров, буклетов, широкоформатная печать.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item">
                    <FaCamera className="service-icon" />
                    <h5>Печать фотографий</h5>
                    <p>Печать фотографий стандартных размеров, печать широкоформатных (больших) фотографий.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item">
                    <FaGift className="service-icon" />
                    <h5>Изготовление сувениров</h5>
                    <p>Печать на футболках, кружках. Изготовление пазлов, ковриков для мыши, брелков, магнитов.</p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
