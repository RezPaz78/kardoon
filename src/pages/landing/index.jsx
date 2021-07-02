import React, { useEffect, useState } from "react";
import Pic1 from "../../assets/img/collaboration.png";
import Pic2 from "../../assets/img/reporting.png";
import Pic3 from "../../assets/img/security.png";
import SEO from "../../components/seo";
import { Link as RRDLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { useAuth } from "../../utils/hooks/useAuth";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";
import { axiosInstance } from "../../services/axios";
import { toast } from "react-toastify";

const Index = () => {
  const isLoggedIn = useAuth();
  const id = useLocalStorage("id");
  const token = useLocalStorage("token");
  const [user, setUser] = useState();

  useEffect(() => {
    if (isLoggedIn) {
      axiosInstance
        .get(`/user/${id}`)
        .then((res) => setUser(res.data))
        .catch((error) => console.log(error));
    }
  }, [id, isLoggedIn]);

  const logoutHandler = () => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axiosInstance.post("/logout", {}, config).then((res) => {
      localStorage.clear();
      toast.success("شما با موفقیت خارج شدید!");
      window.location.reload();
    });
  };

  return (
    <>
      <SEO title="کاردون" />
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/">کاردون</Link>
        </div>
        <div className="navbar__list">
          <a href="#features" className="navbar__list-item">
            امکانات
          </a>
          <a href="#sample" className="navbar__list-item">
            امتحان کن!
          </a>
          <a href="#contact" className="navbar__list-item">
            ارتباط با ما
          </a>
          {isLoggedIn && user && (
            <>
              <Link component={RRDLink} to={"/profile"}>
                {user.first_name + " " + user.last_name}
              </Link>
              <Link component={RRDLink} to={"/dashboard"}>
                داشبورد!
              </Link>
            </>
          )}
        </div>
      </nav>

      <header className="header">
        <div className="conatiner">
          <h1>با کاردون به زندگیت مسلط شو!</h1>
          <p>
            کاردون یک نرم افزار برای ارتباط و همکاری آنلاینه که مدیریت کارها و
            پروژه‌ها، مدیریت تیم، زمان‌های کاری و چت گروهی رو در یک جا ترکیب
            کرده تا شما بتونین پیشرفت کار رو مشاهده کنین و تیمتون بتونه با خیال
            راحت و به سادگی به کارش برسه و خروجی بیشتری داشته باشه.
          </p>
          <div className="header__buttons">
            {!isLoggedIn ? (
              <>
                <Link component={RRDLink} to={"/signUp"}>
                  ثبت نام
                </Link>
                <Link component={RRDLink} to={"/signIn"}>
                  ورود
                </Link>
              </>
            ) : (
              <>
                <Link component={RRDLink} to={"/dashboard"}>
                  داشبورد
                </Link>
                <button onClick={logoutHandler}>خروج</button>
              </>
            )}
          </div>
        </div>
      </header>

      <section className="features" id="features">
        <div className="container">
          <div className="features__item">
            <img src={Pic1} alt="collaboration" />
            <h3>تیمی روی پروژه‌ها کار کنید</h3>
            <p>
              کار یه فعالیت تیمیه، با کاردون تیمتون رو دور هم جمع کنین و همکاری
              روی پروژه‌ها، وظایف و فایل‌ها رو شروع کنین.
            </p>
          </div>
          <div className="features__item">
            <img src={Pic2} alt="reporting" />
            <h3>به سادگی و زیبایی گزارش بگیرید</h3>
            <p>
              شرکت‌ها حجم بزرگی از داده‌ها روی کاردون در مورد نحوه کار و همکاری
              تیم‌هاشون دارن. با تحلیل‌گر کاردون، داده‌هاتون رو به تصمیم تبدیل
              کنین.
            </p>
          </div>
          <div className="features__item">
            <img src={Pic3} alt="security" />
            <h3>امنیت رو فدای سادگی نکنید</h3>
            <p>
              با روش رمزنگاری استاندارد، دیتاسنترهایی امن در آلمان و نسخه‌های
              پشتیان روزانه، کاردون امنیت و سادگی رو با هم داره.
            </p>
          </div>
        </div>
      </section>

      <section className="sample" id="sample">
        <h2>امتحانش کن!</h2>
        <div className="sample__box">
          <div className="sample__box-item">
            <input type="checkbox" id="todo" name="todo" value="todo" />
            <label for="todo" data-content="آماده کردن صبحانه">
              آماده کردن صبحانه
            </label>
          </div>
          <div className="sample__box-item">
            <input type="checkbox" id="todo" name="todo" value="todo" />
            <label for="todo" data-content="آماده کردن صبحانه">
              آماده کردن صبحانه
            </label>
          </div>
          <div className="sample__box-item">
            <input type="checkbox" id="todo" name="todo" value="todo" />
            <label for="todo" data-content="آماده کردن صبحانه">
              آماده کردن صبحانه
            </label>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="contact__card">
            <h2>با ما در ارتباط باشید</h2>
            <form className="contact__form">
              <div className="contact__form--name">
                <input type="text" placeholder="نام و نام خانوادگی" />
              </div>
              <div className="contact__form--email">
                <input type="email" placeholder="ایمیل" />
              </div>
              <div className="contact__form--message">
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="متن پیام"
                ></textarea>
              </div>
              <div className="contact__form--button">
                <button>ارسال</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          Copyright ©2021 All rights reserved | Reza Pazan - Amir Mohammad
          Cheraghi
        </p>
      </footer>
    </>
  );
};

export default Index;
