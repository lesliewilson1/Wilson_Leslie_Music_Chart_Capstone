import React from 'react'

function Form() {

    return (
        <>
        <div>
            <section className="contact">
                <form>
                    <h2>Track Request</h2>
                    <div className="input-box">
                        <label>Track Name</label>
                        <input type="text" className="field" placeholder='Enter track name' required />
                    </div>
                    <div className="input-box">
                        <label>Artist Name</label>
                        <input type="text" className="field" placeholder='Enter artist name' required />
                    </div>
                    <div className="input-box">
                        <label>Year</label>
                        <input type="text" className="field" placeholder='Enter year name' required />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </section>
          
        </div>
        </>
    )
}

export default Form;
