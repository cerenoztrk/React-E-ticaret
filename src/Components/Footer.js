function Footer() {
    return (
  <>
    {/* BEGIN PRE-FOOTER */}
    <div className="page-prefooter">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
          <h2>HAKKINDA</h2>
          <p>
            Reactjs ile E-Ticaret sitesidir.
          </p>
        </div>
        <div className="col-md-3 col-sm-6 col-xs12 footer-block">
          <h2>E-POSTA KAYIT</h2>
          <div className="subscribe-form">
            <form action="javascript:;">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="mail@email.com"
                  className="form-control"
                />
                <span className="input-group-btn">
                  <button className="btn" type="submit">
                    Gönder
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
          <h2>BENİ TAKİP ET</h2>
          <ul className="social-icons">
            <li>
              <a
                href="javascript:;"
                data-original-title="rss"
                className="rss"
              />
            </li>
            <li>
              <a
                href="javascript:;"
                data-original-title="facebook"
                className="facebook"
              />
            </li>
            <li>
              <a
                href="javascript:;"
                data-original-title="twitter"
                className="twitter"
              />
            </li>
            <li>
              <a
                href="javascript:;"
                data-original-title="googleplus"
                className="googleplus"
              />
            </li>
            <li>
              <a
                href="javascript:;"
                data-original-title="linkedin"
                className="linkedin"
              />
            </li>
            <li>
              <a
                href="javascript:;"
                data-original-title="youtube"
                className="youtube"
              />
            </li>
            <li>
              <a
                href="javascript:;"
                data-original-title="vimeo"
                className="vimeo"
              />
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
          <h2>İLETİŞİM</h2>
          <address className="margin-bottom-40">
            Phone: 800 123 3456
            <br />
            Email: <a href="mailto:info@metronic.com">info@metronic.com</a>
          </address>
        </div>
      </div>
    </div>
  </div>
  {/* END PRE-FOOTER */}
  {/* BEGIN FOOTER */}
  <div className="page-footer">
    <div className="container">
      2014 © Metronic by keenthemes.{" "}
      <a
        href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes"
        title="Purchase Metronic just for 27$ and get lifetime updates for free"
        target="_blank"
      >
        Purchase Metronic!
      </a>
    </div>
  </div>
  <div className="scroll-to-top">
    <i className="icon-arrow-up" />
  </div>
  {/* END FOOTER */}
  </>
  );
  }
  export default Footer;