import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import Navbar from "../../Shared/Navbar/Navbar";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      email: data.email,
      from: data.from,
      quote: data.quote,
      imageURL: imageURL,
    };
    const url = `https://morning-island-75682.herokuapp.com/addReviews`;
    console.log(serviceData);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log("server side response", res));
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "bc49d8a4e8fcfa0955507231e6a73408");
    imageData.append("image", event.target.files[0]);

    axios.post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="">
      <Navbar></Navbar >
      <div >
        <div style={{display:'flex',justifyContent: 'space-evenly'}} className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-2">
          
            </div>
            <div className="col-md-8">
              <h1> Add Review here</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p>Your name</p>
                <input
                  name="name"
                  defaultValue="Name"
                  {...register("name")}
                />
                <br/>
                <br/>
                <p>Your email</p>
                <input
                  name="email" type="email"
                  defaultValue="email"
                  {...register("email")}
                />
                <br />
                <br />
                <p>Description of your Reviews</p>
                <input name="quote" type="text" defaultValue="quote" {...register("quote")} />
                <br />
                <br />
                <p>your place</p>
                <input name="from" type="text" defaultValue="from" {...register("from")} />
                <br />
                <br />
                <p>Photo:</p>
                <input type="file" onChange={handleImageUpload} />
                <br />
                <br />
                <input type="submit" />
              </form>
            </div>
        </div>
        

      
        
      </div>
      
    </div>
  );
};

export default AddReview;
