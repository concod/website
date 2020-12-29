import { Button } from "react-bootstrap";
import styles from "./Form.module.css";
import Head from "next/head";
import { useState } from "react";

const Form = () => {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    setShow(!show);
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <div className={styles.heading}>
            <span> Get Ready for the</span>
            <br />{" "}
            <span className={styles.heading__main}>
              JOYN Oil & Gas Production{" "}
            </span>
            <span style={{ color: "black" }}>Trial</span>
          </div>
          <div className={styles.form__md}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <img style={{ width: "80px" }} src="/icon-highlight.svg" />
              </div>

              <div className={styles.text__md}>
                <p>
                  Register now and you’ll qualify for upto{" "}
                  <span style={{ fontFamily: "Gustanlp Bold" }}>
                    {""}50% pricing discount from what you paid for your current
                    legacy production system.
                  </span>
                  <span style={{ fontFamily: "Gustanlp Bold" }}>
                    {" "}
                    Offer expires on January 31, 2021.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.text__lower}>
            <p>
              See how easy it is to make the switch and cut your budget by up to
              50%.
              <br />
              <br />
            </p>
            Be first on the list to get access to JOYN Oil & Gas Production when
            it goes live by joining our email list.
            <br />
            <br />
            We’ll also help you stay up to date on the latest industry news,
            events, and insider information on modernizing your production.
          </div>
          <div className={styles.imgtop}>
            <img src="/formimg.svg" />
          </div>
        </div>
        <Head>
          <script src="//app-sj11.marketo.com/js/forms2/js/forms2.min.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `MktoForms2.loadForm("//app-sj11.marketo.com", "517-WEJ-684", 1363);`,
            }}
          />
        </Head>
        <div className={styles.form__right}>
          <form id="mktoForm_1363" onSubmit={handleSubmit}></form>

          <div
            class="tyt"
            style={{
              display: "none",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={styles.main} style={{ display: "flex" }}>
              <img src="/logo.png" style={{ width: "200px" }} />
              <p
                style={{
                  display: "block",
                  fontFamily: "Gustanlp Bold",
                }}
              >
                THANK YOU!
              </p>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <div className={styles.form__md}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img style={{ width: "80px" }} src="/icon-highlight.svg" />
                  </div>

                  <div className={styles.text__tyt}>
                    <p>
                      Thank you for registering for the
                      <span style={{ fontFamily: "Gustanlp Bold" }}>
                        {""} JOYN Oil & Gas Production
                      </span>{" "}
                      <br /> trial coming on January 12, 2021. We can hardly
                      wait!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {Pricing_total__KGX5E != "$ per month." && (
              <div
                className={styles.price}
                style={{
                  textAlign: "center",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                }}
              >
                You have locked in your all-inclusive introductory pricing at{" "}
                <b>{Pricing_total__KGX5E}</b>
                <br /> We can hardly wait for you to get started!
              </div>
            )}
            <div className={styles.imgtop}>
              <img style={{ paddingTop: "2rem" }} src="/formimg.svg" />
            </div>
          </div>
        </div>

        <div className={styles.imgbtm}>
          <img src="/formimg.svg" />
        </div>
      </div>
    </>
  );
};

export default Form;
