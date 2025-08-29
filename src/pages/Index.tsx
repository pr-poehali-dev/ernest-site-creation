import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">ERNEST DESIGN</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:opacity-60 transition-opacity">Главная</a>
            <a href="#portfolio" className="hover:opacity-60 transition-opacity">Портфолио</a>
            <a href="#services" className="hover:opacity-60 transition-opacity">Услуги</a>
            <a href="#about" className="hover:opacity-60 transition-opacity">О нас</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">Контакты</a>
          </div>
          <Button variant="outline" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              CREATIVE<br />
              <span className="text-gray-500">DESIGN</span><br />
              STUDIO
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Создаем уникальные дизайн-решения для брендов, которые хотят выделиться и запомниться
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg">
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">НАШИ РАБОТЫ</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group cursor-pointer overflow-hidden border-0 shadow-none">
              <CardContent className="p-0">
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/img/28c83e12-0d2c-4524-8f28-9e771186364f.jpg" 
                    alt="Portfolio Project 1"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Web Design</h3>
                  <p className="text-gray-600">Современный дизайн корпоративного сайта</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer overflow-hidden border-0 shadow-none">
              <CardContent className="p-0">
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/img/58dacaa5-2caf-4e9c-8027-e653cdfa8640.jpg" 
                    alt="Portfolio Project 2"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Branding</h3>
                  <p className="text-gray-600">Комплексная разработка фирменного стиля</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer overflow-hidden border-0 shadow-none">
              <CardContent className="p-0">
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/img/ca39857b-baf5-4415-93c7-ab192a42dc61.jpg" 
                    alt="Portfolio Project 3"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-gray-600">Интерфейс мобильного приложения</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-4">
              Посмотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">УСЛУГИ</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <Icon name="Palette" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Брендинг</h3>
              <p className="text-gray-600">Создание уникального фирменного стиля и логотипов</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <Icon name="Monitor" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Design</h3>
              <p className="text-gray-600">Дизайн современных и функциональных веб-сайтов</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <Icon name="Smartphone" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">UI/UX</h3>
              <p className="text-gray-600">Разработка интерфейсов мобильных приложений</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <Icon name="FileText" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Полиграфия</h3>
              <p className="text-gray-600">Дизайн печатной продукции и рекламных материалов</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">О СТУДИИ</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ernest Design — это креативная студия, специализирующаяся на создании 
                выдающихся дизайн-решений для современных брендов.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Мы верим, что хороший дизайн способен изменить восприятие бренда 
                и создать эмоциональную связь с аудиторией.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-gray-600">Клиентов</div>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">НАЧНЕМ СОТРУДНИЧЕСТВО</h2>
          <p className="text-xl text-gray-600 mb-12">
            Готовы создать что-то удивительное вместе? Свяжитесь с нами!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">hello@ernestdesign.ru</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600">Москва, Россия</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg">
            Обсудить проект
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">ERNEST DESIGN</div>
          <div className="flex space-x-6">
            <Icon name="Instagram" size={24} className="text-gray-600 hover:text-black cursor-pointer" />
            <Icon name="Facebook" size={24} className="text-gray-600 hover:text-black cursor-pointer" />
            <Icon name="Linkedin" size={24} className="text-gray-600 hover:text-black cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;