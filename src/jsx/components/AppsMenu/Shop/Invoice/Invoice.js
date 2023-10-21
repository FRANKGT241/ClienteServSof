import React, { Fragment } from "react";

import qrcode from "../../../../../images/qr.png";
import PageTitle from "../../../../layouts/PageTitle";

const Invoice = () => {
  return (
    <Fragment>
      <PageTitle activeMenu="Invoice" motherMenu="Shop" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card mt-3">
              <div className="card-header">
                {" "}
                Invoice <strong>01/01/01/2018</strong>{" "}
                <span className="float-right">
                  <strong>Status:</strong> Pending
                </span>{" "}
              </div>
              <div className="card-body">
                <div className="row mb-5">
                  <div className="mt-4 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                    <h6>From:</h6>
                    <div>
                      {" "}
                      <strong>Webz Poland</strong>{" "}
                    </div>
                    <div>Madalinskiego 8</div>
                    <div>71-101 Szczecin, Poland</div>
                    <div>Email: info@webz.com.pl</div>
                    <div>Phone: +48 444 666 3333</div>
                  </div>
                  <div className="mt-4 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                    <h6>To:</h6>
                    <div>
                      {" "}
                      <strong>Bob Mart</strong>{" "}
                    </div>
                    <div>Attn: Daniel Marek</div>
                    <div>43-190 Mikolow, Poland</div>
                    <div>Email: marek@daniel.com</div>
                    <div>Phone: +48 123 456 789</div>
                  </div>
                  <div className="mt-4 col-xl-6 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-md-center justify-content-xs-start">
                    <div className="row align-items-center">
                      <div className="col-sm-9">                        
                        <div className="brand-logo mb-2 inovice-logo">
                            <svg className="logo-abbr" width="39" height="23" viewBox="0 0 39 23" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path className="w3" d="M32.0362 22H19.0466L20.7071 18.7372C20.9559 18.2484 21.455 17.9378 22.0034 17.9305L31.1036 17.8093C33.0753 17.6497 33.6571 15.9246 33.7015 15.0821C33.7015 13.2196 32.1916 12.5765 31.4367 12.4878H23.7095L25.9744 8.49673H30.4375C31.8763 8.3903 32.236 7.03332 32.236 6.36814C32.3426 4.93133 30.9482 4.61648 30.2376 4.63865H28.6955C28.2646 4.63865 27.9788 4.19212 28.1592 3.8008L29.7047 0.44798C31.0903 0.394765 32.8577 0.780573 33.5683 0.980129C38.6309 3.42801 37.0988 7.98676 35.6999 9.96014C38.1513 11.9291 38.4976 14.3282 38.3644 15.2816C38.098 20.1774 34.0346 21.8005 32.0362 22Z" fill="var(--primary)"></path>
															<path className="react-w" d="M9.89261 21.4094L0 2.80536H4.86354C5.41354 2.80536 5.91795 3.11106 6.17246 3.59864L12.4032 15.5355C12.6333 15.9762 12.6261 16.5031 12.3842 16.9374L9.89261 21.4094Z" fill="white"></path>
															<path className="react-w" d="M17.5705 21.4094L7.67786 2.80536H12.5372C13.0894 2.80536 13.5954 3.11351 13.8489 3.60412L20.302 16.0939L17.5705 21.4094Z" fill="white"></path>
															<path className="react-w" d="M17.6443 21.4094L28.2751 0H23.4513C22.8806 0 22.361 0.328884 22.1168 0.844686L14.8271 16.2416L17.6443 21.4094Z" fill="white"></path>
															<path className="react-w" d="M9.89261 21.4094L0 2.80536H4.86354C5.41354 2.80536 5.91795 3.11106 6.17246 3.59864L12.4032 15.5355C12.6333 15.9762 12.6261 16.5031 12.3842 16.9374L9.89261 21.4094Z" stroke="white"></path>
															<path className="react-w" d="M17.5705 21.4094L7.67786 2.80536H12.5372C13.0894 2.80536 13.5954 3.11351 13.8489 3.60412L20.302 16.0939L17.5705 21.4094Z" stroke="white"></path>
															<path className="react-w" d="M17.6443 21.4094L28.2751 0H23.4513C22.8806 0 22.361 0.328884 22.1168 0.844686L14.8271 16.2416L17.6443 21.4094Z" stroke="white"></path>
														</svg>{" "}
														<svg className="brand-title" width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M8.36 15.2C7.2933 15.2 6.3 15.0267 5.38 14.68C4.4733 14.32 3.68 13.82 3 13.18C2.3333 12.5267 1.8133 11.76 1.44 10.88C1.0667 9.99999 0.880005 9.03999 0.880005 7.99999C0.880005 6.95999 1.0667 5.99999 1.44 5.11999C1.8133 4.23999 2.34 3.47999 3.02 2.83999C3.7 2.18666 4.49331 1.68666 5.40001 1.33999C6.30671 0.979988 7.3 0.799988 8.38 0.799988C9.5267 0.799988 10.5733 0.999988 11.52 1.39999C12.4667 1.78666 13.2667 2.36666 13.92 3.13999L12.24 4.71999C11.7333 4.17332 11.1667 3.76666 10.54 3.49999C9.9133 3.21999 9.2333 3.07999 8.5 3.07999C7.7667 3.07999 7.0933 3.19999 6.48 3.43999C5.88 3.67999 5.35331 4.01999 4.90001 4.45999C4.46001 4.89999 4.1133 5.41999 3.86 6.01999C3.62 6.61999 3.5 7.27999 3.5 7.99999C3.5 8.71999 3.62 9.37999 3.86 9.97999C4.1133 10.58 4.46001 11.1 4.90001 11.54C5.35331 11.98 5.88 12.32 6.48 12.56C7.0933 12.8 7.7667 12.92 8.5 12.92C9.2333 12.92 9.9133 12.7867 10.54 12.52C11.1667 12.24 11.7333 11.82 12.24 11.26L13.92 12.86C13.2667 13.62 12.4667 14.2 11.52 14.6C10.5733 15 9.52 15.2 8.36 15.2ZM16.4113 15V0.999988H22.1713C23.4113 0.999988 24.4713 1.19999 25.3513 1.59999C26.2446 1.99999 26.9313 2.57332 27.4113 3.31999C27.8913 4.06666 28.1313 4.95332 28.1313 5.97999C28.1313 7.00669 27.8913 7.89329 27.4113 8.63999C26.9313 9.37329 26.2446 9.93999 25.3513 10.34C24.4713 10.7267 23.4113 10.92 22.1713 10.92H17.8513L19.0113 9.73999V15H16.4113ZM25.5713 15L22.0313 9.91999H24.8112L28.3713 15H25.5713ZM19.0113 10.02L17.8513 8.77999H22.0513C23.1979 8.77999 24.0579 8.53329 24.6312 8.03999C25.2179 7.54669 25.5113 6.85999 25.5113 5.97999C25.5113 5.08666 25.2179 4.39999 24.6312 3.91999C24.0579 3.43999 23.1979 3.19999 22.0513 3.19999H17.8513L19.0113 1.91999V10.02ZM31.0402 15V0.999988H33.1802L39.3002 11.22H38.1802L44.2002 0.999988H46.3402L46.3602 15H43.9002L43.8802 4.85999H44.4002L39.2802 13.4H38.1202L32.9202 4.85999H33.5202V15H31.0402Z" fill="black"></path>
														</svg>
                        </div>
                        <span>
                          Please send exact amount:{" "}
                          <strong className="d-block">0.15050000 BTC</strong>
                          <strong>1DonateWffyhwAjskoEwXt83pHZxhLTr8H</strong>
                        </span>
                        <br />
                        <small className="text-muted">
                          Current exchange rate 1BTC = $6590 USD
                        </small>
                      </div>
                      <div className="col-sm-3 mt-3">
                        {" "}
                        <img
                          src={qrcode}
                          className="img-fluid width110"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-border">
                    <thead>
                      <tr>
                        <th className="center">#</th>
                        <th>Item</th>
                        <th>Description</th>
                        <th className="right">Unit Cost</th>
                        <th className="center">Qty</th>
                        <th className="right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="center">1</td>
                        <td className="left strong">Origin License</td>
                        <td className="left">Extended License</td>
                        <td className="right">$999,00</td>
                        <td className="center">1</td>
                        <td className="right">$999,00</td>
                      </tr>
                      <tr>
                        <td className="center">2</td>
                        <td className="left">Custom Services</td>
                        <td className="left">
                          Instalation and Customization (cost per hour)
                        </td>
                        <td className="right">$150,00</td>
                        <td className="center">20</td>
                        <td className="right">$3.000,00</td>
                      </tr>
                      <tr>
                        <td className="center">3</td>
                        <td className="left">Hosting</td>
                        <td className="left">1 year subcription</td>
                        <td className="right">$499,00</td>
                        <td className="center">1</td>
                        <td className="right">$499,00</td>
                      </tr>
                      <tr>
                        <td className="center">4</td>
                        <td className="left">Platinum Support</td>
                        <td className="left">1 year subcription 24/7</td>
                        <td className="right">$3.999,00</td>
                        <td className="center">1</td>
                        <td className="right">$3.999,00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-sm-5"> </div>
                  <div className="col-lg-4 col-sm-5 ms-auto">
                    <table className="table table-clear">
                      <tbody>
                        <tr>
                          <td className="left">
                            <strong>Subtotal</strong>
                          </td>
                          <td className="right">$8.497,00</td>
                        </tr>
                        <tr>
                          <td className="left">
                            <strong>Discount (20%)</strong>
                          </td>
                          <td className="right">$1,699,40</td>
                        </tr>
                        <tr>
                          <td className="left">
                            <strong>VAT (10%)</strong>
                          </td>
                          <td className="right">$679,76</td>
                        </tr>
                        <tr>
                          <td className="left">
                            <strong>Total</strong>
                          </td>
                          <td className="right">
                            <strong>$7.477,36</strong>
                            <br />
                            <strong>0.15050000 BTC</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Invoice;
