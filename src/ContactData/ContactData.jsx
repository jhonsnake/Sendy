const ContactData = ({ selectedCountry, phoneNumber, visible }) => {
  return (
    <>
      {visible && (
        <div className="contact-data">
          <h4>Here ya go!</h4>
          <p>{`https://api.whatsapp.com/send?phone=${selectedCountry}${phoneNumber}`}</p>
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=${selectedCountry}${phoneNumber}`}
            className="whatsapp"
          >
            <button className="button is-primary mt-1 is-fullwidth">
              <span className="icon">
                <i className="fab fa-whatsapp"></i>
              </span>
              <span>Go now!</span>
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default ContactData;
