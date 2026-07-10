function SuccessMessage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white shadow-lg rounded-xl p-10 max-w-xl text-center">

        <div className="text-6xl mb-4">
          ✅
        </div>

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Application Submitted Successfully!
        </h1>

        <p className="text-gray-600 leading-7">
          Thank you for applying through HopeBridge.
          <br /><br />
          Your application has been received successfully and will be reviewed by our team.
          <br /><br />
          If your application meets our eligibility requirements, we will contact you using the email address or phone number you provided.
        </p>

      </div>

    </section>
  );
}

export default SuccessMessage;