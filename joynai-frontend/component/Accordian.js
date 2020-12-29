import { useContext } from "react";
import {
  Accordion,
  Button,
  Table,
  Card,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";
import styles from "./Accordian.module.css";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <div
      type="button"
      onClick={decoratedOnClick}
      style={{ marginRight: "20px" }}
    >
      {isCurrentEventKey ? (
        <img src="/collapse.svg" />
      ) : (
        <img src="/expand.svg" />
      )}
    </div>
  );
}

const Accordian = ({ rows, keys, heading }) => {
  return (
    <div className={styles.accordian}>
      <Card>
        <div className={styles.card__header}>
          <div>
            <ContextAwareToggle eventKey={keys}></ContextAwareToggle>
          </div>
          <div>{heading}</div>
        </div>
        <Accordion.Collapse eventKey={keys}>
          <Card.Body>
            <Table>
              {
                <div className={styles.table_desktop}>
                  {rows.map((row) => {
                    return (
                      <>
                        <tbody className={styles.table_deskto}>
                          <tr>
                            {row.cells.map((cell, index) => (
                              <td key={index}>{cell}</td>
                            ))}
                          </tr>
                        </tbody>
                      </>
                    );
                  })}
                </div>
              }

              {
                <div className={styles.table_mobile}>
                  {rows.map((row) => {
                    return (
                      <>
                        <>
                          {
                            <tbody>
                              {row.cells.map((cell, index) => (
                                <>
                                  {index == 0 && (
                                    <>
                                      <tr>
                                        <td>
                                          <div className={styles.row_0}>
                                            <div>{`FEATURE:`}</div>{" "}
                                            <div>{cell}</div>
                                          </div>
                                        </td>
                                      </tr>
                                    </>
                                  )}
                                  {index == 1 && (
                                    <>
                                      <tr>
                                        <td>
                                          <div className={styles.row_1}>
                                            <div>{`DETAIL:`}</div>
                                            <div>{cell}</div>
                                          </div>
                                        </td>
                                      </tr>
                                    </>
                                  )}
                                  {index == 2 && (
                                    <>
                                      <tr>
                                        <td>
                                          <div className={styles.row_2}>
                                            <div>{`JOYN:`}</div>
                                            <div
                                              style={{
                                                color: "#00C32F",
                                                fontSize: "2rem",
                                              }}
                                            >
                                              {cell}
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </>
                                  )}
                                  {index == 3 && (
                                    <>
                                      <tr>
                                        <td>
                                          <div className={styles.row_3}>
                                            <div>{`LEGACY SYSTEM:`}</div>
                                            <div style={{ color: "#00c32f" }}>
                                              {cell}
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </>
                                  )}
                                </>
                              ))}
                            </tbody>
                          }
                        </>
                      </>
                    );
                  })}
                </div>
              }
            </Table>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </div>
  );
};

export default Accordian;
