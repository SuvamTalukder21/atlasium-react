export const Contact = () => {
    const handleFormSubmit = (formData) => {
        // event.preventDefault();
        // const formData = new FormData(event.target);
        // const data = Object.fromEntries(formData.entries());
        
        // // Here you can handle the form submission, e.g., send data to an API
        // console.log("Form submitted:", data);
        
        // // Optionally reset the form
        // event.target.reset();

        // For demonstration purposes, we'll just log the data to the console
        // console.log("Form submitted:", formData.entries());
        const formInputData = Object.fromEntries(formData.entries());
        console.log("Form Input Data:", formInputData);
    }

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
                {/* <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>If you have any questions or feedback, feel free to reach out to us!</p>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form> */}
                <form action={handleFormSubmit}>
                    <input className="form-control" type="text" name="name" placeholder="Your Name" autoComplete="off" required />
                    <input className="form-control" type="email" name="email" placeholder="Your Email" required />
                    <textarea className="form-control" name="message" placeholder="Your Message" rows="4" autoComplete="off" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}