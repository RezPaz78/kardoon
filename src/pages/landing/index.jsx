import React from "react";
import Pic1 from "../../assets/img/collaboration.png";
import Pic2 from "../../assets/img/reporting.png";
import Pic3 from "../../assets/img/security.png";
import SEO from "../../components/seo";

const Index = () => {
  return (
    <>
      <SEO title="کاردون" />
      <nav class="navbar">
        <div class="navbar__logo">
          <a href="#">کاردون</a>
        </div>
        <div class="navbar__list">
          <a href="#features" class="navbar__list-item">
            امکانات
          </a>
          <a href="#sample" class="navbar__list-item">
            امتحان کن!
          </a>
          <a href="#contact" class="navbar__list-item">
            ارتباط با ما
          </a>
        </div>
      </nav>

      <header class="header">
        <div class="conatiner">
          <h1>با کاردون به زندگیت مسلط شو!</h1>
          <p>
            کاردون یک نرم افزار برای ارتباط و همکاری آنلاینه که مدیریت کارها و
            پروژه‌ها، مدیریت تیم، زمان‌های کاری و چت گروهی رو در یک جا ترکیب
            کرده تا شما بتونین پیشرفت کار رو مشاهده کنین و تیمتون بتونه با خیال
            راحت و به سادگی به کارش برسه و خروجی بیشتری داشته باشه.
          </p>
          <button>ثبت نام</button>
        </div>
      </header>

      <section class="features" id="features">
        <div class="container">
          <div class="features__item">
            <img src={Pic1} alt="collaboration" />
            <h3>تیمی روی پروژه‌ها کار کنید</h3>
            <p>
              کار یه فعالیت تیمیه، با کاردون تیمتون رو دور هم جمع کنین و همکاری
              روی پروژه‌ها، وظایف و فایل‌ها رو شروع کنین.
            </p>
          </div>
          <div class="features__item">
            <img src={Pic2} alt="reporting" />
            <h3>به سادگی و زیبایی گزارش بگیرید</h3>
            <p>
              شرکت‌ها حجم بزرگی از داده‌ها روی کاردون در مورد نحوه کار و همکاری
              تیم‌هاشون دارن. با تحلیل‌گر کاردون، داده‌هاتون رو به تصمیم تبدیل
              کنین.
            </p>
          </div>
          <div class="features__item">
            <img src={Pic3} alt="security" />
            <h3>امنیت رو فدای سادگی نکنید</h3>
            <p>
              با روش رمزنگاری استاندارد، دیتاسنترهایی امن در آلمان و نسخه‌های
              پشتیان روزانه، کاردون امنیت و سادگی رو با هم داره.
            </p>
          </div>
        </div>
      </section>

      <section class="sample" id="sample">
        <h2>امتحانش کن!</h2>
        <div class="sample__box">
          <div class="sample__box-item">
            <input type="checkbox" id="todo" name="todo" value="todo" />
            <label for="todo" data-content="آماده کردن صبحانه">
              آماده کردن صبحانه
            </label>
          </div>
          <div class="sample__box-item">
            <input type="checkbox" id="todo" name="todo" value="todo" />
            <label for="todo" data-content="آماده کردن صبحانه">
              آماده کردن صبحانه
            </label>
          </div>
          <div class="sample__box-item">
            <input type="checkbox" id="todo" name="todo" value="todo" />
            <label for="todo" data-content="آماده کردن صبحانه">
              آماده کردن صبحانه
            </label>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="container">
          <div class="contact__card">
            <h2>با ما در ارتباط باشید</h2>
            <form class="contact__form">
              <div class="contact__form--name">
                <input type="text" placeholder="نام و نام خانوادگی" />
              </div>
              <div class="contact__form--email">
                <input type="email" placeholder="ایمیل" />
              </div>
              <div class="contact__form--message">
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="متن پیام"
                ></textarea>
              </div>
              <div class="contact__form--button">
                <button>ارسال</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer class="footer">
        <p>
          Copyright ©2021 All rights reserved | Reza Pazan - Amir Mohammad
          Cheraghi
        </p>
      </footer>
    </>
  );
};

export default Index;
