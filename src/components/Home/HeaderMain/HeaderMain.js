import React from 'react';
// import hero from '../../../image/hero.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'600px', }}  className="row d-flex align-items-center pb-5">
            <div style={{zIndex:'9999'}} className="col-md-4 offset-md-1">
                <h1 className="text-white">Fast Repair Your <br/> Smartphones </h1>
                <p className="text-white">Non eget orci, pretium wisi maecenas eu, adipiscing nulla quisque maecenas pellentesque, ac placerat parturient. Vitae urna orci tortor, eu integer. Fringilla ut sed. Ut phasellus suspendisse ut amet, animi scelerisque, arcu mauris mauris euismod ornare elit felis. Voluptatibus</p>
                <button className="btn-primary px-3 py-2 me-3 rounded">Read More</button>
                <button className="btn-secondary px-3 py-2 rounded">about us</button>
            </div>
            <div className="col-md-6">
                {/* <img src={hero} alt="" className="img-fluid" /> */}
            </div>
        </main>
    );
};

export default HeaderMain;