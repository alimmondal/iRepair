import React from 'react';
import iphonex from '../../../image/iphonex.png';
const FeaturedService = () => {
    return (
        <section className="features-service my-5">
            <div style={{marginTop:'50px'}} className="container mb-5">
                <div className="row">
                    <div className="col-md-5  m-md-0">
                        <img className="img-fluid" src={iphonex} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>We can help you now, fill <br/> out an application!</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur .
                        </p>
                        <button className="btn-secondary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;