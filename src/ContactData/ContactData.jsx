const ContactData = ({ selectedCountry, phoneNumber, visible }) => {
  return (
    <>
      {visible && (
        <div className="contact-data">
          <h4>Here you go!</h4>
          <p>{`https://api.whatsapp.com/send?phone=${selectedCountry}${phoneNumber}`}</p>
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=${selectedCountry}${phoneNumber}`}
            className="whatsapp"
          >
            Open on Whatsapp
          </a>
        </div>
      )}
    </>
  );
};

export default ContactData;
