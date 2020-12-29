import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRef } from "react";
import { Accordion, Table } from "react-bootstrap";
import Accordian from "../component/Accordian";
import CTA from "../component/CTA";
import SimpleBlockContent from "../utils/blockBuilder";
import styles from "./Features.module.css";

const Features = ({ props }) => {
  const row_1 = props.pricing.rows;
  const row_3 = props.datamigration.rows;
  const row_4 = props.FDG.rows;
  const row_5 = props.production.rows;
  const row_6 = props.analytics.rows;
  const { tableHeaders, heading, subheading, ctas } = props;

  const feat = useRef();
  const router = useRouter();

  useEffect(() => {
    router.asPath.includes("#Feature-parity") && feat.current.scrollIntoView();
  }, []);

  return (
    <div ref={feat} className={styles.features__bg} id="Feature-parity">
      <div className={styles.heading} style={{ width: "75%", margin: "auto" }}>
        <div
          className={styles.main}
          style={{
            textAlign: "center",
            paddingTop: "39.8px",
            paddingBottom: "10px",
          }}
        >
          <SimpleBlockContent blocks={heading} />
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            paddingBottom: "20px",
            letterSpacing: ".4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SimpleBlockContent blocks={subheading} />
          <div style={{ width: "max-content", padding: "3rem 0" }}>
            <CTA text={ctas[0].title} />
          </div>
        </div>
        <div className={styles.features__content}>
          <div className={styles.features__main}>
            <Table>
              <tbody>
                <tr>
                  <td
                    style={{
                      width: "29.8%",
                      backgroundColor:
                        "radial-gradient(circle at 49% 50%, #f9f9f9, #f0f0f0 189%)",
                    }}
                  >
                    Feature
                  </td>
                  <td style={{ width: "29.6%" }}> Detail</td>
                  <td style={{ width: "20.5%" }}>JOYN</td>
                  <td>Legacy System</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordian rows={row_1} keys="0" heading={tableHeaders[0]} />
            {/* <Accordian rows={row_2} keys="1" heading={tableHeaders[1]} /> */}
            <Accordian rows={row_3} keys="1" heading={tableHeaders[1]} />
            <Accordian rows={row_4} keys="3" heading={tableHeaders[2]} />
            <Accordian rows={row_5} keys="4" heading={tableHeaders[3]} />
            <Accordian rows={row_6} keys="5" heading={tableHeaders[4]} />
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Features;
