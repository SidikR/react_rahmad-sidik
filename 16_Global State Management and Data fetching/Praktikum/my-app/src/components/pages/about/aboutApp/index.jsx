import * as React from "react";
import NavbarAbout from "../../../global/navbar/nabvarAbout";

export default function AboutApp() {
    return (
        <>
            <section>
                <div className='container pt-4'>
                    <div className='row'>
                        <div className='col-12 col-md-2'>
                            <NavbarAbout />
                        </div>
                        <div className='col-12 col-md-10'>
                            <h1>About The App</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Error numquam eligendi
                                voluptatibus eum dolorum totam a non quam
                                quidem, harum sit fugit, voluptatum animi
                                expedita sed hic provident itaque ullam!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
